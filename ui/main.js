
var count=0;
var click=document.getElementById("click");
click.onclick=function(){
    var request=new XMLHttpRequest();
    request.onreadystaechange=function(){
        if(request.readyState===XMLHttpRequest.DONE)
            if(request.status===200){
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
    };
    request.open('GET','http://sridevim.imad.hasura-app.io/counter',true);
    request.send(null);
  };