let loginPage =   document.getElementById('loginPage');
let signupPage =  document.getElementById('signupPage');
let welcomePage = document.getElementById('welcomePage');
let helpPage =    document.getElementById('helpPage');



let homeNav = document.getElementById('homeNav');
let signupNav = document.getElementById('signupNav');
let loginNav = document.getElementById('loginNav');
let helpNav = document.getElementById('helpNav');
    
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
            helpPage.style.diaplay = 'block'
            console.log('help page')

	}
}
