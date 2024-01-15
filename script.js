//toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick =() =>{
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
}

//scroll sections
let sections =document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () => {

	sections.forEach(sec => {
		let top=window.scrollY;
		let offset=sec.offsetTop-100;
		let height=sec.offsetHeight;
		let id=sec.getAttribute('id');

		if(top >= offset && top < offset +height){
			//active navbar links
			navLinks.forEach(links=>{
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
			// active sections for animation on scroll
			sec.classList.add('show-animate');
		}
		// if want to use animation that repeats on scroll use this
		else{
				sec.classList.remove('show-animate');
			}
	})
	//sticky header
	let header = document.querySelector('header');
	header.classList.toggle('sticky',window.scrollY > 100);

	//remove toggle icon and navbar when click navbar links(scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');

	//animation footer on scroll
	let footer = document.querySelector('footer');

	footer.classList.toggle('show-animate',this.innerHeight +this.scrollY >=document.scrollingElement.scrollHeight);

}


//validate information

var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var submitError=document.getElementById('subit-error');


function validateName(){
	var name=document.getElementById('contact-name').value;

	if(name.length == 0){
		nameError.innerHTML="Name is required";
		return false;
	}
	if(!name.match( /^[a-zA-Z ]{2,30}$/)){
		nameError.innerHTML="Enter valid name";
		return false;
	}
	nameError.innerHTML="valid";
	return true;
}


function validateEmail(){
	var email=document.getElementById('contact-email').value;

	if(email.length==0){
		emailError.innerHTML='Email is required';
		return false;

	}

	if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
		emailError.innerHTML='Provide a valid email-id';
		return false;
	}

	emailError.innerHTML='vaild';
	return true;
}

function validateForm(){
	if(!validateName() || !validateEmail() ||  !validateMessage())
	{
		submitError.style.display='block';
		submitError.innerHTML='Please fill the details correctly';
		setTimeout(function(){submitError.style.display='none';},3000)
		return false;
	}
}



