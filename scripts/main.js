document.addEventListener("DOMContentLoaded", () => {
  const includeElements = document.querySelectorAll('[data-include]');
  
  includeElements.forEach(el => {
    const file = el.getAttribute('data-include');
    
    fetch(file)
      .then(response => {
        if (!response.ok) {
          console.error(`Failed to load include file: ${file}`);
          return;
        }
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(error => {
        console.error(`Error fetching include: ${error}`);
      });
  });
});