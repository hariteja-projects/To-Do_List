const textBox=document.getElementById("text-box");
const listContainer=document.querySelector(".list-container");
function addTask(){
    if(textBox.value.trim()===''){
        alert("you must write something")
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=textBox.value;
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        span.classList.add("delete");
        span.onclick=function(){
            li.remove();
        };
        li.appendChild(span);
        listContainer.appendChild(li);
    }
    textBox.value = "";
    savaData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.Tagname="LI"){
        e.target.classList.toggle("checked");
        savaData();
    }
    else if(e.target.Tagname="span"){
        e.target.parentElement.remove();
        
    }
    },false);   

    