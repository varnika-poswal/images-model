var logo=document.getElementById("myImg");
var imgModal=document.getElementById("imgModal");
var close=document.getElementById("close");
var img=document.getElementById("img");
var descripition=document.getElementById("descripition");

logo.addEventListener("click",()=>{
    imgModal.style.display="block";
    descripition.innerHTML="our services";
    img.src="file:///C:/Users/MI%20Computer/Desktop/images%20(2).jpg";

});

close.addEventListener("click",()=>{
    imgModal.style.display="none";
})
