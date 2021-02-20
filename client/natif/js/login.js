var submit_btn = document.getElementById('send_btn');

submit_btn.addEventListener('click', function(event) {
    event.preventDefault();

    let mail_input = document.getElementById('email').value;
    let psw_input = document.getElementById('password').value;
    let data = new FormData();

    data.append('mail', mail_input);
    data.append('psw', psw_input);

    sendData(data);
});

function sendData(data)
{
    const requestAjax = new XMLHttpRequest();
    requestAjax.open("POST", "http://localhost/server/api/handler.php?task=login");

    requestAjax.onload = function() {
        console.log(requestAjax.response);
    }

    requestAjax.send(data);
}