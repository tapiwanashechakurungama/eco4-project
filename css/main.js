const ham = document.getElementById('ham');
const nav = document.getElementById('nav');
const body = document.body

ham.addEventListener('click', function(e){
    body.classList.toggle('active')
})