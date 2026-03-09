

document.getElementById('signIn-btn').addEventListener('click',function(e){
    //1. get the userName input
    e.preventDefault()
    const inputText = document.getElementById('input-text');
    const userName = inputText.value;
    console.log(userName)

    //2. get the password
    const inputPass = document.getElementById('input-pass')
    const password = inputPass.value
    console.log(password)
     //3. match userName & password
    if (userName == 'admin' && password == 'admin123'){
        alert("Sign In Sucessfull")
        window.location.assign("home.html")
    }else{
        alert("Sign In Failed")
        return;
    }
       
})