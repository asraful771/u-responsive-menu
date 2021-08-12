const hambar = document.querySelector('.nav-bar .hambar');
const mobile = document.querySelector('.nav-bar nav ul');
hambar.addEventListener('click',() => {
    hambar.classList.toggle('active');
    mobile.classList.toggle('active');
    
});