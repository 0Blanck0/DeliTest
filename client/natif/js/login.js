var submit_btn = document.getElementById('send_btn');

submit_btn.addEventListener('click', function(event) {
    event.preventDefault();

    let mail_input = document.getElementById('email').value;
    let psw_input = document.getElementById('password').value;
    let error = document.getElementById("error");
    let data = new FormData();

    if (psw_input != "") {
        data.append('mail', mail_input);
        data.append('psw', psw_input);
        error.hidden = true;

        sendData(data, mail_input, psw_input);
    } else
        error.hidden = false;
});

function sendData(data, mail, psw)
{
    const requestAjax = new XMLHttpRequest();
    requestAjax.open("POST", "http://localhost/server/api/handler.php?task=login");

    requestAjax.onload = function() {
        if (requestAjax.response == "Match") {
            sessionStorage.mail = mail;
            sessionStorage.psw = psw;
            sessionStorage.login = 1;

            window.location.href = "../index.html";
        } else {
            sessionStorage.mail = null;
            sessionStorage.psw = null;
            sessionStorage.login = 0;

            error.hidden = false;
        }
    }

    requestAjax.send(data);
}