import usersData from './data.json';

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const getUsers = async () => {
    await sleep(1000);

    return usersData.users
}

export const getUserById = async (id) => {
    await sleep(1000);

    return usersData.users.find(user => user.id === id);
}