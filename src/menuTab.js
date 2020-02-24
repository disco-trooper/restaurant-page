import { renderPage } from './homeTab';

function renderMenuTab() {
  renderPage();
  let content = document.querySelector('#content');
  generatePizza('Margherita', 'pomodoro, mozarella', 6);
  generatePizza('al Funghi', 'pomodoro, mozarella, funghi', 9);
  generatePizza('al Peperoni', 'pomodoro, mozarella, peperoni', 8);
  generatePizza('alle Melanzane', 'pomodoro, mozarella, melanzane', 8);
  generatePizza('con Cipolla', 'pomodoro, mozarella, cipolla', 9);
  let links = document.querySelectorAll('a');
  links.forEach((link) => (link.backgroundColor = '#FFFFFF'));
  let link = document.querySelector('#Menu');
  link.style.backgroundColor = '#F6A000';
}

function generatePizza(name, description, price) {
  let pizza = document.createElement('p');
  pizza.textContent = `Pizza ${name} - `;
  content.appendChild(pizza);
  let desc = document.createElement('i');
  desc.textContent = `${description} - ${price} €`;
  pizza.appendChild(desc);
}

export { renderMenuTab };
