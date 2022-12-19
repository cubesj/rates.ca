//javascript for index.html

//declare menu list items here
var menuItems = ["Insurance","Mortgage","Life Insurance","Life Property Insurance","Auto and Credit Cards","Travel Insurance"];
//menu list items to be added on clikcing login
var addMenuItems = ["Loans", "Finance", "Debt"];
//when login is clicked , flagLoginClicked will be true else false
flagLoginClicked = false;

//this function loads menu data
function loadData(){
    document.getElementById("liDiv").innerHTML = "";
    menuItems.forEach(appendMenu);
}

//this function accepts single menu item and append it to listing in html
function appendMenu(item, index, arr){
    var liDiv = document.getElementById("liDiv");
    var li = document.createElement("li");
    var aTag = document.createElement("a");
    var menuText = document.createTextNode(arr[index]);
    aTag.append(menuText);
    li.append(aTag);
    liDiv.append(li);
}

//this function  appends additional menu when login is clicked
function addAdditionalMenu(){
    var liDiv = document.getElementById("liDiv");
    liDiv.innerHTML = "";
    addMenuItems.forEach(appendMenu);
    menuItems.forEach(appendMenu);
    var switchCheckbox = document.getElementById("swithCheckbox");
    switchCheckbox.checked = true;
    openMenu();

}

//this function opens menu when the hamburger menu is clicked
function openMenu(){
    var switchCheckbox = document.getElementById("swithCheckbox");
    var menu = document.getElementById("menu");
    var swith = document.getElementById("switch");
    swith.style.display = "none";
    if(switchCheckbox.checked){
        menu.style.transform = "none";
    }
    else{
        menu.style.transform = "translate(-100%, 0)";
    }
}

//this function closes menu
function closeMenu(){
    var switchCheckbox = document.getElementById("swithCheckbox");
    var menu = document.getElementById("menu");
    var swith = document.getElementById("switch");
    menu.style.transform = "translate(-100%, 0)";
    switchCheckbox.checked = false;
    swith.style.display = "block";

    //if menu closed with additional menu items set after login clicked
    if(flagLoginClicked) {
        window.scrollTo(0, 0);
        loadData();
        flagLoginClicked = false;
    }
}

//this function is triggered when login clicked
function loginClick(){
    window.scrollTo(0, document.body.scrollHeight);
    flagLoginClicked = true;
    addAdditionalMenu();
}