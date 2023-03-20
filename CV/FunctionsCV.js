let buttonRS = document.querySelector("#buttonRS");
let dataRS = document.querySelector("#divRS");
buttonRS.addEventListener("click", ShowAndHideTable);
HideElement(dataRS);
function ShowAndHideTable()
{
    if(!dataRS)return;
    if(dataRS.getAttribute("name") == "hide")
    {
        ShowElement(dataRS);
    }
    else 
    {
        HideElement(dataRS);

    }   
}
function ShowElement(element)
{
    element.style.display = '';
    dataRS.setAttribute("name", "");
}

function HideElement(element) 
{
    element.style.display = 'none';
    dataRS.setAttribute("name", "hide");
}



