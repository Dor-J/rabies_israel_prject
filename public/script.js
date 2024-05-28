// Content for different sections
const homeContent = `
  <div class="jumbotron">
    <h1 class="display-4">Welcome to My Project</h1>
    <p class="lead">This is a simple, elegant introduction to the homepage.</p>
    <hr class="my-4">
    <p>It uses Bootswatch components to create a clean and professional look.</p>
    <a class="btn btn-primary btn-lg" href="#/about" role="button">Learn more</a>
  </div>
`;

const aboutContent = `
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">About</h2>
        <div class="card-text">
          <h3>Content</h3>
          <p>This is the about content. Here we describe the purpose and goals of the project in a concise manner.</p>
          <h3>Key Questions</h3>
          <p>These are the key questions we aim to address through our research and analysis.</p>
          <h3>Conclusion</h3>
          <p>This is the conclusion, summarizing the key points and findings.</p>
        </div>
      </div>
    </div>
  </div>
`;

const projectContent = `
  <div class="container mt-4">
    <h2>Project</h2>
    <div class="row">
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Distribution of Rabies Events by Species Over Time</h3>
            <div id="interactive_distribution_rabies_events_by_species_over_time"></div>
            <p class="card-text">Plot 1 description and insights. This section provides detailed analysis and visualization.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Rabies Events by Month</h3>
            <div id="interactive_rabies_events_by_month"></div>
            <p class="card-text">Plot 2 description and insights. This section provides detailed analysis and visualization.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Rabies Events by Month and Year</h3>
            <div id="interactive_rabies_events_by_month_and_year"></div>
            <p class="card-text">Plot 3 description and insights. This section provides detailed analysis and visualization.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Rabies Events by Region</h3>
            <div id="interactive_rabies_events_by_region"></div>
            <p class="card-text">Plot 4 description and insights. This section provides detailed analysis and visualization.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Rabies Events by Species</h3>
            <div id="interactive_rabies_events_by_species"></div>
            <p class="card-text">Plot 5 description and insights. This section provides detailed analysis and visualization.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Rabies Events Species</h3>
            <div id="interactive_rabies_events_species"></div>
            <p class="card-text">Plot 6 description and insights. This section provides detailed analysis and visualization.</p>
          </div>
        </div>
      </div>
      <div class="col-md-12 mb-4">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title">Seasonal Trends of Rabies Events</h3>
            <div id="interactive_seasonal_trends_rabies_events"></div>
            <p class="card-text">Plot 7 description and insights. This section provides detailed analysis and visualization.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const conclusionsContent = `
  <div class="container mt-4">
    <div class="card">
      <div class="card-body">
        <h2 class="card-title">Conclusions</h2>
        <p class="card-text">These are the key takeaways from the project.</p>
      </div>
    </div>
  </div>
`;

// Function to load Plotly HTML files into containers
function loadPlotlyHTML(id, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(error => {
      console.error(`Error loading ${filePath}:`, error);
      document.getElementById(id).innerHTML = `<div class="alert alert-danger" role="alert">An error occurred while loading the plot. Please try again later.</div>`;
    });
}

// Initialize Navigo
var router = new Navigo('/');

// Function to handle route changes
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
