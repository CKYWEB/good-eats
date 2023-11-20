import {USER_PATH} from "@/api/config";

export const login = async (payload) => {
    const res = await fetch(`${USER_PATH}/login`, {
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

export const fetchUsers = async () => {
    const res = await fetch(`${USER_PATH}/getUsers`, {
        method: "GET"
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