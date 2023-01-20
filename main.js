imgage = Array.from(document.querySelectorAll("img"))
imgage.forEach(img => {
 
   img.addEventListener('click',(e)=>{
    for(let i=0;i<imgage.length;i++){
        imgage[i].classList.remove('active')
       }
e.target.classList.add('active')
   })
});