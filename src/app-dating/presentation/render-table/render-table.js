import usersStore from '../../store/users-store';

import './render-table.css';
let section;
const createSection = () => {
    const section = document.createElement('section');

    return section;
}
const sectionFemaleListener = async (event) => {
    const element = event.target.closest('#female-id');
    if (!element) return;

    

}
const sectionMaleListener = async (event) => {
    const element = event.target.closest('#male-id');
    if (!element) return;

   

}
const sectionFavoriteListener = async (event) => {
    const element = event.target.closest('#favorite-id');
    if (!element) return;

   

}
const sectionSelectListener = async (event) => {
    const element = event.target.closest('.select-user');
    if (!element) return;

    const id = element.getAttribute('data-id')
    await usersStore.onUserChanged(id);

}
const sectionDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user');
    if (!element) return;

    const id = element.getAttribute('data-id')
    await usersStore.deleteUser(id)
    console.log(id)
    renderSection();
}
export const renderSection = (element) => {
    const users = usersStore.getUsers();
    if (!section) {
        section = createSection();
        element.append(section);

        section.addEventListener('click', sectionFemaleListener);
        section.addEventListener('click', sectionMaleListener);
        section.addEventListener('click', sectionFavoriteListener);
        
        section.addEventListener('click', sectionSelectListener);
        section.addEventListener('click', sectionDeleteListener);
    }

    let sectionHTML = '';
    users.forEach(user => {
        sectionHTML += `
              <div class = "user-section">
                 <div class ="buttons-user">
                  <button class="select-user" data-id="${user.fullId}">select</button>
                  <button class="delete-user" data-id="${user.fullId}">X</button>
                 </div>
                 <img src="${user.fullPicture}">
                 <p>${user.fullName}</p>
              </div>   
        `
    });
    section.innerHTML = sectionHTML;
    
}

