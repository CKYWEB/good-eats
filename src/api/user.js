import {USER_PATH, USER_TOKEN_NAME} from "@/api/config";
import Cookies from "js-cookie";

export const login = async (payload) => {
    const res = await fetch(`${USER_PATH}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    const {data, result, msg} = await res.json();

    if (data && data.token) {
        Cookies.set(USER_TOKEN_NAME, data.token);
    }

    if (!result) {
        throw new Error(msg);
    }

    return {
        msg,
    };
};

export const fetchUsers = async () => {
    const res = await fetch(`${USER_PATH}/getUsers`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${Cookies.get(USER_TOKEN_NAME)}`,
        }
    });

    return res.json();
};

export const createUser = async (payload) => {
    const res = await fetch(`${USER_PATH}/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!data.result) {
        throw new Error(data.msg);
    }

    return data;
};

export const fetchUserInfo = async () => {
    const token = Cookies.get(USER_TOKEN_NAME);

    if (token === undefined) {
        return undefined;
    }

    const res = await fetch(`${USER_PATH}/getUserInfo`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        }
    });

    return res.json();
};

export const logout = async () => {
    // TODO: add token to block list
    Cookies.remove(USER_TOKEN_NAME);
};