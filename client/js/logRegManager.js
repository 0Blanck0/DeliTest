var login = document.getElementById("log_btn");
var register = document.getElementById("reg_btn");

if (sessionStorage.login == 0) {
    login.addEventListener('click', function() {
        window.location.href = "pages/login.html";
    });
    
    register.addEventListener('click', function() {
        window.location.href = "pages/register.html";
    });
} else {
    replaceNav();
}

function replaceNav()
{
    let nav = document.getElementsByTagName('nav')[0];

    nav.innerHTML = `
    <div class="btn_container">
        <button id="logout_btn">Logout</button>
    </div>`;

    let logout = document.getElementById('logout_btn');

    logout.addEventListener('click', function() {
        sessionStorage.mail = null;
        sessionStorage.psw = null;
        sessionStorage.login = 0;
        window.location.reload();
    });
}