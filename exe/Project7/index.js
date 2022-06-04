let loginPage =   document.getElementById('loginPage');
let signupPage =  document.getElementById('signupPage');
let welcomePage = document.getElementById('welcomePage');
let helpPage =    document.getElementById('helpPage');



let homeNav = document.getElementById('homeNav');
let signupNav = document.getElementById('signupNav');
let loginNav = document.getElementById('loginNav');
let helpNav = document.getElementById('helpNav');

let obj={
	name : '' ,
	email: '' ,
	phone:'',
	state:'',
	zip:'',

  }
    
/**
 * tab switchs
 */

 const changeTabs = (navLinkClicked) => {
	homeNav.classList.remove("active")
	signupNav.classList.remove("active")
	loginNav.classList.remove("active")
    helpNav.classList.remove('active')
    welcomePage.style.display = 'none'
	signupPage.style.display = 'none'
    loginPage.style.display = 'none'
    helpPage.style.diaplay = 'none'


	switch(navLinkClicked){
		case 'Home':
			homeNav.classList.add("active")
			welcomePage.style.display = 'block'
            console.log('home page')
			break
		case 'Signup':
			signupNav.classList.add("active")
			signupPage.style.display = 'block'
            console.log('signup page')
			break
		case 'Login':
			loginNav.classList.add("active")
			loginPage.style.display = 'block'
            console.log('login page')
			break
        case 'Help':
            helpNav.classList.add('active')
            helpPage.style.display = 'block'
            console.log('help page')

	}
}
/**
 * validate
 */
 let invalidName = document.getElementById("invalidName")
 let emailInvalid = document.getElementById("invalidSEmail")
 let phoneInvalid = document.getElementById("invalidPhone")
 let stateInvalid = document.getElementById("invalidState")
 let zipCodeInvalid = document.getElementById("invalidZip")
 let vaildCheck = document.getElementById("invalidCheckMsg")
 let fillAll = document.getElementById("fillAll")
 let successMsg = document.getElementById("successMsg")

 function validate() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("Semail").value;
	let phoneNumber = document.getElementById("phone").value;
	let state = document.getElementById("state").value;
	let zipCode = document.getElementById("zip").value;
	let invalidCheck = document.getElementById("invalidCheck");
	
	console.log("hi1")
	let ct=0;
  
	if (name === ''){
	  invalidName.style.display = 'block'
	} else {
		invalidName.style.display = 'none'
	  ct++
	}
  
	if(email === '' || !email.includes('@') || !email.includes('.') || email.startsWith('@') || email.slice(email.lastIndexOf('.') + 1).length < 2) {
	  emailInvalid.style.display = 'block'
	} else {
	  emailInvalid.style.display = 'none'
	  ct++
	}
  
	if(phoneNumber === '' || phoneNumber.length !=10){
	  phoneInvalid.style.display = 'block'
	} else {
		phoneInvalid.style.display = 'none'
	  ct++
	}
  
	if(state === '' ){
	  stateInvalid.style.display = 'block'
	} else {
		stateInvalid.style.display = 'none'
	  ct++
	}
  
	if(zipCode === '' || zipCode.length != 6 ){
	  zipCodeInvalid.style.display = 'block'
	} else {
		zipCodeInvalid.style.display = 'none'
	  ct++
	}
  
	if( !invalidCheck.checked ){
	  vaildCheck.style.display = 'block'
	  console.log('agree')
	} else {
		vaildCheck.style.display = 'none'
	  ct++
	}
    if(ct === 6){
		fillAll.style.display = 'none'
		obj.name=name
		obj.phone=phoneNumber
		obj.email=email
		obj.zip=zipCode
		obj.state=state
		successMsg.style.display='block'
		
	}else{
		fillAll.style.display = 'block'
	}
	
  }

  let LemailError = document.getElementById("LemailError")
  let passwordError = document.getElementById("passwordError")
  let successMsg2 = document.getElementById("successMsg2")
  let errorMsg = document.getElementById("errorMsg")

 let login = ()=>{

	let enteredEmail = document.getElementById('Lemail').value;
 	let enteredPassword = document.getElementById('password').value;

	let ct=0;
	if(obj.email === enteredEmail){
		ct++;
		LemailError.style.display = 'none'
	}else{
		LemailError.style.display = 'block'
	}

	if(obj.phone === enteredPassword){
		passwordError.style.display = 'none'
		ct++;
	}else{
		passwordError.style.display = 'block'
	}
	if(ct === 2){
		errorMsg.style.display ='none'
		successMsg2.style.display='block'
	}else{
		successMsg2.style.display='none'
		errorMsg.style.display ='block'
	}
 }