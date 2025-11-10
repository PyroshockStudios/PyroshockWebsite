document.addEventListener("DOMContentLoaded", () => {
  // file includes
  let includeElements = document.querySelectorAll('[data-include]');
  
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

  // date of birth divs
  includeElements = document.querySelectorAll('.calculate-age');
  
  includeElements.forEach(el => {
    const dob = el.dataset.dob;
    if (!dob) return;
    const date = new Date();
    const yyyymmdd = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate();
    const age = Math.trunc((yyyymmdd - dob) / 10000)
    el.innerHTML = `${age}`
  });
});