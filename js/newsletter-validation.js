const subscribe = document.querySelector('#subscribe-input');
const submit = document.querySelector('.newsletter-box-last-button');


submit.addEventListener('click', function(e) {
    console.log(e.target)
    const email_validate = /^([a-zA-Z0-9\._-])+\@([a-zA-Z0-9\-])+\.([a-zA-Z0-9]){2,4}$/;
    if(email_validate.test(subscribe.value)) {
        let json = JSON.stringify(subscribe.value);
        window.localStorage.setItem(subscribe.value, json);
        document.querySelector('.newsletter-box-last').classList.remove('news-validation')
    } else {
        document.querySelector('.newsletter-box-last').classList.add('news-validation')
    }
    subscribe.value = ''
})


