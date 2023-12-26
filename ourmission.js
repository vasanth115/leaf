let Planting_trees=document.getElementById("Planting_trees");
let fund=document.getElementById("fund");
let awareness_part=document.getElementById("awareness");
let cleanpage=document.getElementById("clean");

function change()
{
    Planting_trees.style.display="none";
    fund.style.display="block";
    awareness_part.style.display="none";
    cleanpage.style.display="none";
}
function Changeitem()
{
    Planting_trees.style.display="block";
    fund.style.display="none";
    awareness_part.style.display="none";
    cleanpage.style.display="none";
}
function awareness()
{
       Planting_trees.style.display="none";
       fund.style.display="none";
       awareness_part.style.display="block";
       cleanpage.style.display="none";
}
function cleanPage()
{
    Planting_trees.style.display="none";
    fund.style.display="none";
    awareness_part.style.display="none";
    cleanpage.style.display="flex";
}