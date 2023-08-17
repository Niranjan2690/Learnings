function validate(){
    const username = document.getElementById('usrname').value;
    const password = document.getElementById('password').value;
    const validuser = 'Niranjan';
    const validpassword = "Niranjan@1"

    if(username === ""){
        showUserError("* User name should not be empty");
        return false;
    }

    if(username.length < 6){
        showUserError("* User name should not be less than 6 characters")
    }


    if(password ===""){
        showPasswordError("* Password should not be empty");
        return false;
    }

    if(username === validuser && password === validpassword){
       window.location.href = "./home.html";
       return false
    }

    function showUserError(message){
        const error = document.getElementById('usererror');
        error.innerHTML = message;
        error.classList.add('show')
    }

    function showPasswordError(message){
        const error = document.getElementById('passworderror');
        error.innerHTML = message;
    }
}