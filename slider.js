var slider = new Array("villa/villa1.jpg", "villa/villa2.jpg", "villa/villa3.jpg");
var number = 0;
setInterval("ChangeSlide(1)", 4000);
function ChangeSlide(sens) {
    number = number + sens;
    if (number < 0)
        number = slider.length - 1;
    if (number > slider.length - 1)
        number = 0;
    document.getElementById("slide").src = slider[number];
}