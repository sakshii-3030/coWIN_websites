function pin(){
    document.getElementById("text").placeholder="Enter your pin";
    var title= document.getElementById("pin");
    title.setAttribute("style", "color: #002060;");
    var title2= document.getElementById("district");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");
    var title2= document.getElementById("map");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");

    var underline = document.getElementById("pin");
    underline.setAttribute("style", "border-bottom: solid 1px #002060;");

}
function district(){
    document.getElementById("text").placeholder="Enter your district";
    var title= document.getElementById("district");
    title.setAttribute("style", "color: #002060; border-bottom: solid 1px #002060;");
    var title2= document.getElementById("pin");
    title2.setAttribute("style", "color: rgb(153, 151, 151); border-bottom: none;");
    var title2= document.getElementById("map");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");

}
function map(){
    document.getElementById("text").placeholder="Enter your coordinates";
    var title= document.getElementById("map");
    title.setAttribute("style", "color: #002060; border-bottom: solid 1px #002060;");
    var title2= document.getElementById("pin");
    title2.setAttribute("style", "color: rgb(153, 151, 151); border-bottom: none;");
    var title2= document.getElementById("district");
    title2.setAttribute("style", "color: rgb(153, 151, 151);");
}