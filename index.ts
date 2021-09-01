// Import stylesheets
import './style.css';

import { IUser } from './core/interfaces/user.interface';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const client: IUser = {
  names: 'Cristian',
  lastnames: 'Tejada Hernandez',
  email: 'ctejada@cuc.edu.co',
  phones: [
    { type: 'mobile', number: '3652254415' },
    { type: 'home', number: '3651765' }
  ]
};

console.log(client);
