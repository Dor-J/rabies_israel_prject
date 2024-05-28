// js/router.js

import Navigo from 'navigo';
import { homeContent, aboutContent, projectContent, conclusionsContent } from './content.js';
import { handleRoute } from './handleRoute.js';

// Initialize Navigo
const router = new Navigo('/');

// Define routes
router
  .on('/', function () {
    handleRoute('/', homeContent);
  })
  .on('/about', function () {
    handleRoute('/about', aboutContent);
  })
  .on('/project', function () {
    handleRoute('/project', projectContent);
  })
  .on('/conclusions', function () {
    handleRoute('/conclusions', conclusionsContent);
  })
  .resolve();

// Add hashchange listener to support hash-based routing
window.addEventListener('hashchange', function () {
  try {
    router.resolve();
  } catch (error) {
    console.error("Error resolving route:", error);
  }
});
