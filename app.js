let rows = document.getElementsByClassName('uprow');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        for (let row of rows) {
            row.classList.add('active');
        }
    } else {
        for (let row of rows) {
            row.classList.remove('active');
        }
    }
});