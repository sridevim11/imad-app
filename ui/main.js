
var count=0;
var click=document.getElementById("click");
click.onclick=function(){
    count=count+1;
    var span=document.getElementById("count");
    span.innerHTML=count.toString();
}