import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderSection } from "./presentation/render-table/render-table";
import usersStore from "./store/users-store";
import { currentTime } from "./use-cases/reloj";




export const datingApp = async (element) => {

    element.innerHTML = 'LOADING';
    await usersStore.loadPage();
    console.log(usersStore.getUsers())
    element.innerHTML = '';
    renderButtons(element);
    renderSection(element);
    currentTime();
}


