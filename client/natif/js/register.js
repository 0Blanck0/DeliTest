var submit_btn = document.getElementById('send_btn');

submit_btn.addEventListener('click', function(event) {
    event.preventDefault();

    let mail_input = document.getElementById('email').value;
    let mail_v_input = document.getElementById('email-c').value;
    let psw_input = document.getElementById('password').value;
    let psw_v_input = document.getElementById('password-c').value;
    let error = document.getElementById("error");

    if (mail_input == mail_v_input && psw_input == psw_v_input) {
        let data = new FormData();
        data.append('mail', mail_input);
        data.append('psw', psw_input);

        error.hidden = true;

        sendData(data);
    } else {
        error.hidden = false;
        mail_v_input = "";
        psw_v_input = "";
        psw_input = "";
    }
});

function sendData(data)
{
    const requestAjax = new XMLHttpRequest();
    requestAjax.open("POST", "http://localhost/server/api/handler.php?task=register");

    requestAjax.onload = function() {
        console.log(requestAjax.response);
    }

    requestAjax.send(data);
}