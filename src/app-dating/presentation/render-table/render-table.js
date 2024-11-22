import usersStore from '../../store/users-store';

import './render-table.css';
let section;
const createSection = () => {
    const section = document.createElement('section');

    return section;
}
const sectionSelectListener = async (event) => {
    const element = event.target.closest('.select-user');
    if (!element) return;

    const id = element.getAttribute('data-id')
    await onUserChanged(id);

}
const sectionDeleteListener = async (event) => {
    const element = event.target.closest('.delete-user');
    if (!element) return;

    const id = element.getAttribute('data-id')
    await deleteUser(id)

}
export const renderSection = (element) => {
    const users = usersStore.getUsers();
    if (!section) {
        section = createSection();
        element.append(section);
        //TODO LISTENERS A LA TABLA
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
    ////DELETE
    ////const deleteUser = (id) => {
    //   const index = users.findIndex((user)=>{
    //      return user.id == id;
    //  })
    //  console.log(users[index]);
    ////}
}

