// js/handleRoute.js

import anime from 'animejs/lib/anime.es.js';
import { loadPlotlyHTML } from './loadPlots.js';

function handleRoute(route, content) {
  try {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = content;

    // Apply animation using Anime.js
    anime({
      targets: '#content .card, #content .jumbotron',
      opacity: [0, 1],
      translateY: [-50, 0],
      duration: 800,
      easing: 'easeOutExpo',
      delay: anime.stagger(100, { start: 300 })
    });

    if (route === '/project') {
      loadPlotlyHTML('interactive_distribution_rabies_events_by_species_over_time', 'plots/interactive_distribution_rabies_events_by_species_over_time.html');
      loadPlotlyHTML('interactive_rabies_events_by_month', 'plots/interactive_rabies_events_by_month.html');
      loadPlotlyHTML('interactive_rabies_events_by_month_and_year', 'plots/interactive_rabies_events_by_month_and_year.html');
      loadPlotlyHTML('interactive_rabies_events_by_region', 'plots/interactive_rabies_events_by_region.html');
      loadPlotlyHTML('interactive_rabies_events_by_species', 'plots/interactive_rabies_events_by_species.html');
      loadPlotlyHTML('interactive_rabies_events_species', 'plots/interactive_rabies_events_species.html');
      loadPlotlyHTML('interactive_seasonal_trends_rabies_events', 'plots/interactive_seasonal_trends_rabies_events.html');
    }
  } catch (error) {
    console.error(`Error handling route ${route}:`, error);
    document.getElementById('content').innerHTML = `<div class="alert alert-danger" role="alert">An error occurred while loading the page. Please try again later.</div>`;
  }
}

export { handleRoute };
