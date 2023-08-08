//get all dropdown fro the document
const dropdowns = document.querySelectorAll('.dropdown');

//loop through all dropdown elements
dropdowns.forEach(dropdown => {
    //get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    /*
    we are using this method in order to have 
    multiple dropdown menus on the page work
    */

    //add a click event to the select element
    select.addEventListener('click', () => {
        //add the clicked select styled yto the select element
        select.classList.toggle('selected-clicked')
        //add rotate ti the caret element
        caret.classList.toggle('caret-rotate')
        //add the open styles to enu element
        menu.classList.toggle('menu-open')
    });

    
})