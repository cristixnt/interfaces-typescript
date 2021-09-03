// Import stylesheets
import './style.css';
import { IUser } from './core/interfaces/user.interface';
import axios from 'axios';

let listaUsuarios: IUser[];
axios
  .get('https://randomuser.me/api?results=40')
  .then(function(response) {
    listaUsuarios = response.data.results;
    console.log(listaUsuarios);
    mostrarUsuarios(listaUsuarios);
  })
  .catch(function(error) {
    console.log(error);
  });

function mostrarUsuarios(list: IUser[]) {
  let htmlCard = '';
  list.forEach(function(user) {
    htmlCard = htmlCard.concat(
      "<div class='card text-center' style='margin-left: 20px; width: 150px;'> \
  <img src='" +
        user.picture.large +
        "' class='card-img-top' alt='" +
        user.name.first +
        ' ' +
        user.name.last +
        "'> \
  <div class='card-body center'> \
    <h5 class='card-title text-center'>" +
        user.name.first +
        ' ' +
        user.name.last +
        '</h5> \
      </div> \
</div><br>'
    );
    const divUsuarios: HTMLElement = document.getElementById('divUsuarios');
    divUsuarios.innerHTML = htmlCard;
  });
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1  style='margin-left: 20px;'>Listado de usuarios</h1><hr>`;
