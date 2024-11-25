import './render-buttons.css';
export const renderButtons = (element) => {
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('button-favorite');

    const maleButton = document.createElement('button');
    maleButton.classList.add('button-gender');
    maleButton.id.add('male-id');
    maleButton.innerText = 'M';

    const femaleButton = document.createElement('button');
    femaleButton.classList.add('button-gender');
    femaleButton.id.add('female-id');
    femaleButton.innerText = 'F'

    const heartIcon = document.createElement('img');
    heartIcon.classList.add('img-heart')
    heartIcon.src = 'src/app-dating/img/Red-simple-heart-symbol-only.webp';

    favoriteButton.append(heartIcon)

    const divButtons = document.createElement('div')
    divButtons.classList.add('div-filters')
    divButtons.append(favoriteButton, maleButton, femaleButton);

    element.append(divButtons);

}