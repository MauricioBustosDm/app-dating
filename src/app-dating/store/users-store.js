import { loadUsers } from "../use-cases/load-users"

const state = {

    users: [],
}
const loadPage = async () => {
    const users = await loadUsers()
    state.users = users;

}
const onUserChanged = async (id) => {
    const users = await loadUsers()
    state.users = users;
    state.users = state.users.map(user => {
        if (user.fullId === id) {
            user.isFavorite = !user.isFavorite;
        }
        return user;
    })

}

const deleteUser = async (id) => {
    const users = await loadUsers()
    state.users = users;
    state.users = state.users.map(user => {
        if (user.fullId === id) {
            users.splice(user,1);
        }
        return user;
    })

}

export default {
    loadPage,
    onUserChanged,
    deleteUser,
    getUsers: () => [...state.users],
}
