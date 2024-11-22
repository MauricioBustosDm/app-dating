import { datingApp } from './src/app-dating/dating-app';
import './style.css'


document.querySelector('#app').innerHTML = `
  
    
    <div class="users">
      
    </div>
   
  
  `;

const element = document.querySelector('.users')
datingApp(element);

