//function to log in user
var counter = 0;
function login() {
    //get element ref from template file

    var username = document.getElementById('username');
    var pasword = document.getElementById('password');
    console.log('username', username.value, 'password', password.value);
    if (username.value == 'denise' && password.value == 'denise123') {
        alert('login success!');
        window.location.href = './index.html';
counter = 0;


    }
    else {
        counter ++;
        if(counter >= 5) {
            window.location.href = './error.html';

        }
        else {
        console.log('counter.....', counter);
        //perform erro handling
        var span = document.getElementById('error');
        console.log('span', span);
        handleError(span, counter);


        }
    }
}
//set and display error
function handleError(span, counter) {
    var errMsg = `Login error! Please try again! You have ${5 - counter} Tries left!`;
    span.innerHTML = errMsg;
    span.style = 'display:block;';
    resetError();
    return errMsg;
}

function resetError(span) {
    setTimeout(function () {
        span.style = 'display:none';
    }, 3000);
}