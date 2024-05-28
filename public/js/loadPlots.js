// js/loadPlots.js

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
  
  export { loadPlotlyHTML };
  