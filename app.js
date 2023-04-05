
const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toggleBtnIcon.addEventListener('click',() => {
    dropdownMenu.classList.toggle('open')
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fas fa-xmark' : 'fas fa-bars';

})