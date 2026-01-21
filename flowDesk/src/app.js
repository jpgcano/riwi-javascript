import {router} from './router/router.js';
import './core/events.js';

console.log("desde app.js")

window.addEventListener('load',router);
window.addEventListener('hashchange',router);