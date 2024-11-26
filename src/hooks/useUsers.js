import {useEffect, useState} from "react";
import {getUsers} from "../api/users.service.js";

export const useUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then(users => { setUsers(users); });
    }, [])

    return {
        users,
    }
}