import { renderSection } from "../presentation/render-table/render-table";
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
        return state.users;
    })
}
const filterM = async () => {
    const users = await loadUsers()
    state.users = users;
    state.users = state.users.map(user => {
        if (user.gender === 'male') {
            return user;
        }
        return state.users;
    })

}

const deleteUser = async (id) => {
    const users = await loadUsers()
    state.users = users;

    const index = users.findIndex((user)=>{
        return user.fullId == id;
    })
    users.splice(index, 1)
      
}

export default {
    loadPage,
    onUserChanged,
    deleteUser,
    getUsers: () => [...state.users],
}
