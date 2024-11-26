import {useEffect, useState} from "react";
import {getUserById} from "../api/users.service.js";

export const useUserInfo = (id) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserById(id).then((user) => setUser(user))
    }, []);

    return user
}