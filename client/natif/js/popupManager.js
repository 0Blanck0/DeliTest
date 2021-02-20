var dum_btn = document.getElementById("dumbo");
var bou_btn = document.getElementById("bouillon");
var hover_container = document.getElementById("hover_container_id");
var closer_btn = document.getElementById("closer_id");

dum_btn.addEventListener('click', function() {
    editorDumbo();
    displayPopup();
});

function editorDumbo()
{
    let img = document.getElementById("restor_img");
    let title = document.getElementsByClassName("popup_title")[0].getElementsByTagName('h2')[0];
    let sub_title = document.getElementsByClassName("popup_title")[0].getElementsByTagName('h3')[0];
    let address = document.getElementsByClassName("address_container")[0].getElementsByTagName('p')[0];

    img.setAttribute("src", "img/dumbo/dumbo.png");
    title.innerHTML = "Dumbo";
    sub_title.innerHTML = "Burgers";
    address.innerHTML = "64 rue jean-Baptiste Pigalle, 75009 Paris.";

    editorSigle("dumbo");
}

bou_btn.addEventListener('click', function() {
    editorBouillon();
    displayPopup();
});

function editorBouillon()
{
    let img = document.getElementById("restor_img");
    let title = document.getElementsByClassName("popup_title")[0].getElementsByTagName('h2')[0];
    let sub_title = document.getElementsByClassName("popup_title")[0].getElementsByTagName('h3')[0];
    let address = document.getElementsByClassName("address_container")[0].getElementsByTagName('p')[0];

    img.setAttribute("src", "img/bouillion_47/bouillon.png");
    title.innerHTML = "Bouillon 47";
    sub_title.innerHTML = "Gastro tradi";
    address.innerHTML = "47 rue M. de Rochechouart, 75009 Paris.";

    editorSigle("bouillon");
}

function editorSigle(option)
{
    let sigles = document.getElementsByClassName("sigles_container")[0].getElementsByClassName("sigle_img");
    let len = sigles.length;
    let new_img = null;

    for (let i = 0; i < len; i++) {
        if (option == "dumbo")
            new_img = "img/dumbo/dumb" + i + ".png";
        else
            new_img = "img/bouillion_47/boui" + i + ".png";

        sigles[i].getElementsByTagName('img')[0].setAttribute('src', new_img);
    }
}

function displayPopup() 
{
    hover_container.style.display = "block";
}

closer_btn.addEventListener('click', removePopup);

function removePopup()
{
    hover_container.style.display = "none";
}