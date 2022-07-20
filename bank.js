//user register

function register(){
    uname = reg_name.value
    acno = reg_acno.value
    pswd = reg_pswd.value
    balance = 2000

    //acnoDetails object

    acnoDetails ={
        uname,
        acno,
        pswd,
        balance
    }

    if(acno in localStorage){
        alert('Already existing user... Please Log In!!!')
        window.location.href="index.html"
    }
    else{
        //store data in local storage
        localStorage.setItem(acno,JSON.stringify(acnoDetails))
        alert('Register Successfully')
        window.location.href="index.html"
    }
}

//login

function login(){
    //1. fetch the input values from html
    acno = login_acno.value
    pswd = login_pswd.value

    //2. Verify Creadit Details

    if(acno in localStorage){
        acnoDetails = JSON.parse(localStorage.getItem(acno))
        console.log(acnoDetails.pswd);
        if(pswd == acnoDetails.pswd){
            alert('Login Successfully')
            window.location.href="bank3.html"
        }
        else{
            alert('Inccorrect Password')
        }
    }
    else{
        alert('User Doesnot Exist!!!')
    }
}