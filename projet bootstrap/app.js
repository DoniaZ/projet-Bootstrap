const allNavItems = document.querySelector('.nav-item');
const navbar = document.querySelector('.navbar-collapse');
allNavItems.foreach(item => item.addeventlistener('click', () => {
    navbar.classList.toggle('show');
}));