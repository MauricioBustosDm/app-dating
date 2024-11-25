import './render-buttons.css';
import usersStore from '../../store/users-store';
import { renderSection } from '../render-table/render-table';


export const renderButtons = (element) => {
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('button-favorite');

    const maleButton = document.createElement('button');
    maleButton.classList.add('button-gender');
    maleButton.classList.add('male-button')
    maleButton.innerText = 'M';

    const femaleButton = document.createElement('button');
    femaleButton.classList.add('button-gender');
    femaleButton.classList.add('female-button')
    femaleButton.innerText = 'F'

    const heartIcon = document.createElement('img');
    heartIcon.classList.add('favorite-id')
    heartIcon.classList.add('img-heart')
    heartIcon.src = 'src/app-dating/img/Red-simple-heart-symbol-only.webp';

    favoriteButton.append(heartIcon)

    const divButtons = document.createElement('div')
    divButtons.classList.add('div-filters')
    divButtons.append(favoriteButton, maleButton, femaleButton);
    const sectionFemaleListener = async (event) => {
        const element = event.target.closest('.female-button');
        if (!element) return;
        await usersStore.filterF();
        renderSection();
        
    
    }
    const sectionMaleListener = async (event) => {
        const element = event.target.closest('.male-button');
        if (!element) return;
        await usersStore.filterM();
        renderSection();
    
       
    
    }
    const sectionFavoriteListener = async (event) => {
        const element = event.target.closest('.favorite-id');
        if (!element) return;
        await usersStore.filterFavorites();
        renderSection();

    
       
    
    }
    
    element.addEventListener('click', sectionFemaleListener);
    element.addEventListener('click', sectionMaleListener);
    element.addEventListener('click', sectionFavoriteListener);

    element.append(divButtons);

}

