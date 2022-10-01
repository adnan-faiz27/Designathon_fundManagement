const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})  
const entertainment = document.getElementById(`entertainment`);
const medicine = document.getElementById(`medicine`);
const food = document.getElementById(`food`);
const miscellaneous = document.getElementById(`miscellaneous`);
function dailychart(){
    xyValues1 = [
        { x: 1, y: 10},
        { x: 2, y: 200},
        { x: 3, y: 300},
        { x: 4, y: 58},
        { x: 5, y: 407},
        { x: 6, y: 0},
        { x: 7, y: 700},
      ];
    
      new Chart("ExpenseChart", {
        type: "scatter",
        data: {
          datasets: [
            {
              pointRadius: 4,
              pointBackgroundColor: "rgb(0,0,255)",
              data: xyValues1,
            },
          ],
        },
        options: {
          legend: { display: false },
          scales: {
            xAxes: [{ ticks: { min: 1, max: 7} }],
            yAxes: [{ ticks: { min: 0, max: 5000} }],
          },
        },
      });
      entertainment.innerText = `Entertainment: 200 Rs`;
      food.innerText = `Food: 300 Rs`;
      miscellaneous.innerText = `Miscellaneous: 400 Rs`;
      medicine.innerText = `Medicine: 0 Rs`;
}
function monthlychart(){
    xyValues1 = [
        { x: 1, y: 10000},
        { x: 2, y: 20000},
        { x: 3, y: 3000},
        { x: 4, y: 15800},
        { x: 5, y: 14007},
        { x: 6, y: 0},
        { x: 8, y: 11700},
        { x: 9, y: 17000},
        { x: 10, y: 27000},
        { x: 11, y: 22700},
        { x: 12, y: 13700}
      ];
    
      new Chart("ExpenseChart", {
        type: "scatter",
        data: {
          datasets: [
            {
              pointRadius: 4,
              pointBackgroundColor: "rgb(0,0,255)",
              data: xyValues1,
            },
          ],
        },
        options: {
          legend: { display: false },
          scales: {
            xAxes: [{ ticks: { min: 0, max: 12} }],
            yAxes: [{ ticks: { min: 0, max: 30000} }],
          },
        },
      });
      entertainment.innerText = `Entertainment: 2000 Rs`;
      food.innerText = `Food: 3000 Rs`;
      miscellaneous.innerText = `Miscellaneous: 4000 Rs`;
      medicine.innerText = `Medicine: 1000 Rs`;
}

dailychart();