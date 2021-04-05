let title = document.querySelectorAll('.faq-title');
const expand = document.querySelectorAll(".faq-expand");

const span = document.querySelector('.faq-expand').classList.remove("bg-button")
title.forEach(item => {
    item.addEventListener('click', function(e) {
        console.log(e.target)
        const sibling = e.target.closest("h5").nextElementSibling;
        sibling.classList.toggle('active');
        const target = e.target.closest('h5')
        target.classList.toggle('bg-button')
       
    })
})