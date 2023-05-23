let btn=document.getElementById("btnup");


window.onscroll=function(){
    if(this.scrollY >= 550){
        btn.classList.add("show");
    }else{
        btn.classList.remove("show");
    }
};
btn.onclick =function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};