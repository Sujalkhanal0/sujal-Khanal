const topbtn = document.querySelector('span');
window.addEventListener("scroll",()=>{
   if (pageYOffset > 100){
   	topbtn.classList.add('active');
   }else{
   	topbtn.classList.remove('active')
   		
   }
})

const removebtn = document.querySelector('.down');
window.addEventListener('scroll',()=>{
	if (pageYOffset>300) {
		removebtn.classList.add('remove');
	} else {
		removebtn.classList.remove('remove');
	}
});