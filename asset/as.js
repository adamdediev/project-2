function openNav() {
    document.getElementById("nav_menu").style.height = "100%";
    document.getElementById("nav_menu").style.width = "100%";
    document.getElementById("nav_menu").style.position = "fixed";
    document.getElementById("menu1").style.display ="block";
}

function closeNav() {
    document.getElementById("menu1").style.display ="none";
    document.getElementById("nav_menu").style.height = "0%";
    document.getElementById("nav_menu").style.width = "0%";
    document.getElementById("nav_menu").style.position = "relative";
}
