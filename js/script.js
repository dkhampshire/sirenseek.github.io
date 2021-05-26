/* mobile menu*/
const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click', () =>{
	navUL.classList.toggle('show');
});
/*contact popup*/
document.getElementById('contact').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';	
	});
/*cancel button*/
document.querySelector('.close').addEventListener('click', function() {
	document.querySelector('.bg-modal').style.display= 'none';
});


