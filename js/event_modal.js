let attend_form = document.getElementsByClassName("form-event")[0]
let form = document.forms[0];
let name_input = document.getElementById('name');
let email_input = document.getElementById('email')
let content = document.getElementById('content')
let exit = document.getElementsByClassName('exit')[0];
let modal_popup = document.getElementsByClassName('modal-popup')[0];
let event_button = document.querySelectorAll('.attend-button');
const message_err = document.querySelector('#message-error');

event_button.forEach(button => {
    button.addEventListener('click', function(e) {
        console.log(e)
        modal_popup.style.display = 'block';
        exit.addEventListener('click', function() {
            modal_popup.style.display = 'none';
        })
    })
})

var validate_array = [];

function CheckInputFields(pattern, field, message) {
    if(pattern.test(field.value)) {
        var value = field.value;
        validate_array.push(value);
    } else {
        document.querySelector('#message-error').innerText = message;
    }
}

const name_validation = /^[a-zA-Z\_\s\'\.]{2,}$/;
const email_validation = /^([a-zA-Z0-9\_\-\.])+\@([a-zA-Z0-9-])+\.([a-zA-Z0-9-.])+$/;
const message_validation = /^[a-zA-Z0-9-\_\'\s\.]+$/;


form.addEventListener('submit', function(e) {
   e.preventDefault()
    CheckInputFields(name_validation, name_input, "Please check name field and try again")
    CheckInputFields(email_validation, email_input, "Please check email field and try again")
    CheckInputFields(message_validation, content, "Please check message field and try again")
    console.log(validate_array)


   if(validate_array[0] && validate_array[1] && validate_array[2]) {
    let data = {
        ime: validate_array[0],
        email: validate_array[1],
        message: validate_array[2]
    } 
       let json = JSON.stringify(data);
       localStorage.setItem(data.email, json);
     
      
          message_err.style.visibility = 'visible';
          message_err.innerText = "Thank you for filling out your information!"
     
       setTimeout(function() {message_err.style.visibility = 'hidden'}, 10000)
   } else {
        
            message_err.style.visibility = 'visible'
            message_err.innerText = "Please try again. Some fields are not in correct form!"
            console.log('err')
   
        setTimeout(function() {message_err.style.visibility = 'hidden'}, 10000)
   }

   name_input.value = '';
   email_input.value = '';
   content.value = '';
})


let placeholder_content = `Got question?
Submit your question for our experts...
`;

let textarea = document.getElementsByTagName('textarea')[0];

textarea.placeholder = placeholder_content;

