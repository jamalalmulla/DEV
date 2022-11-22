let buttonElement = document.querySelector("#button");
let elem = document.querySelector("#animate")
buttonElement.addEventListener("click",onButtonClick);

function onButtonClick()
{
    let pos_incr = 10;
    let pos = 0;

    //set interval
    let id = setInterval(moveObject,500)
function moveObject()
{
    if (pos ===350)
    {
        //stop calling this function
        clearInterval(id);
    }
    else{
    pos += pos_incr;
    elem.style.top = pos + "px";
    elem.style.left = pos + "px";
    }
}
}