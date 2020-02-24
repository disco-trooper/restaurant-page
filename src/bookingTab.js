import { renderPage } from './homeTab';

function renderBookingTab() {
  renderPage();
  let content = document.querySelector('#content');
  let links = document.querySelectorAll('a');
  links.forEach((link) => (link.backgroundColor = '#FFFFFF'));
  let link = document.querySelector('#Booking');
  link.style.backgroundColor = '#F6A000';

  let p = document.createElement('p');
  p.textContent = 'Book your table now!';
  content.appendChild(p);

  // Form box
  let box = document.createElement('div');
  box.className = 'box';
  content.appendChild(box);

  // Name div field start
  let nameDiv = document.createElement('div');
  nameDiv.className = 'field';

  let nameLabel = document.createElement('label');
  nameLabel.setAttribute('class', 'label');
  nameLabel.textContent = 'Name';
  nameDiv.appendChild(nameLabel);

  let nameInputDiv = document.createElement('div');
  nameInputDiv.className = 'control';

  let nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('class', 'input');
  nameInput.setAttribute('placeholder', 'Your name');
  nameInputDiv.appendChild(nameInput);
  nameDiv.appendChild(nameInputDiv);
  box.appendChild(nameDiv);
  // Name div field end

  // Date div field start
  let dateDiv = document.createElement('div');
  dateDiv.className = 'field';

  let dateLabel = document.createElement('label');
  dateLabel.setAttribute('class', 'label');
  dateLabel.textContent = 'Date';
  dateDiv.appendChild(dateLabel);

  let dateInputDiv = document.createElement('div');
  dateInputDiv.className = 'control';

  let dateInput = document.createElement('input');
  dateInput.setAttribute('type', 'datetime-local');
  dateInput.setAttribute('class', 'input');
  dateInput.setAttribute('placeholder', 'Your name');
  dateInputDiv.appendChild(dateInput);
  dateDiv.appendChild(dateInputDiv);
  box.appendChild(dateDiv);
  // Date div field end

  // Submit button field start
  let submitDiv = document.createElement('div');
  submitDiv.className = 'field';

  let submitButtonDiv = document.createElement('div');
  submitButtonDiv.className = 'control';

  let submitButton = document.createElement('button');
  submitButton.setAttribute('class', 'button is-link');
  submitButton.textContent = 'Submit';
  submitButtonDiv.appendChild(submitButton);
  submitDiv.appendChild(submitButtonDiv);
  box.appendChild(submitDiv);
  // Submit button field end
}

export { renderBookingTab };
