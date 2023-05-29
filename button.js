const btnE1 = document.querySelector(".btn");

btnE1.addEventListener("mouseover" ,(event)=>
{
    const x = event.pagex - btnE1.offsetLeft;
    const y = event.pagey - btnE1.offsetTop;

    btnE1.style.setproperty("--xpos", x + "px");
    btnE1.style.setproperty("--ypos", y + "py");
});