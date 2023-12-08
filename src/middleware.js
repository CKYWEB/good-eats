import { NextResponse } from "next/server";
import { USER_TOKEN_NAME, USER_PATH } from "./api/config";

const LOGIN_PATH = "/login";
const HOME_PATH = "/home";

const PROTECTED_PATHS = [
    "/settings",
];

const isPathProtected = (path) => {
    return PROTECTED_PATHS.some(p => path.startsWith(p));
};

export async function middleware(request) {
    
    const token = request.cookies.get(USER_TOKEN_NAME)?.value;
    const {pathname} = request.nextUrl;

    // if token doesn't exist and the path is protected, let user login
    if (!token && isPathProtected(pathname)) {
        return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }
    

    // if token exists, starting to call API
    const res = await (await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${USER_PATH}/getUserInfo`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    })).json();
    
    // if token is invalid, delete token
    if (!res.result || res.data === null) {
        request.cookies.delete(USER_TOKEN_NAME);
        
        return;
    }

    // if token is valid and user attempts to login, redirect to home
    if (pathname === LOGIN_PATH) {
        return NextResponse.redirect(new URL(HOME_PATH, request.url));
    }
}