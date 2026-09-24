/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    
    // CORREÇÃO: Só executa se encontrar os itens na página atual
    if (listHoursArray && listHoursArray.length > 0) {
        const currentDay = new Date().getDay();
        if (listHoursArray[currentDay]) {
            listHoursArray[currentDay].classList.add('today');
        }
    }
});