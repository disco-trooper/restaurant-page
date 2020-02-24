import { renderHomeTab } from './homeTab';
import { renderMenuTab } from './menuTab';
import { renderBookingTab } from './bookingTab';

renderHomeTab();

document.addEventListener('click', (event) => {
  if (event.target.getAttribute('id') == 'Home') renderHomeTab();
  if (event.target.getAttribute('id') == 'Menu') renderMenuTab();
  if (event.target.getAttribute('id') == 'Booking') renderBookingTab();
});
