import './style.scss';
import { callEvents } from './js/eventHandlers/callEvents';
import { clickEvents } from './js/eventHandlers/clickEvents';

window.addEventListener('click', (e) => callEvents(e, clickEvents))