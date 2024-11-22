import { localUserToModel } from "../mappers/localhost-user.mapper";

export const getUserById = async (id) => {
    const url = `https://randomuser.me/api/?results=5/user/${id}`;
    const res = await fetch(url);
    const data = await res.json();

    const user = localUserToModel(data);

    return user;

}