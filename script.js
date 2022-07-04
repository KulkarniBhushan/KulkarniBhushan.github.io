let container = document.getElementById('container')
let one, two, three, four, five, six, seven, eight, nine, ten ;
let a, b;

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

function vali(){
	let unl = document.getElementById("unl").value.trim();
	let pl = document.getElementById("pl").value.trim();

	if (unl == "") {
		document.querySelector("#unl").style.border="1.5px solid red";

		document.querySelector("#unl").placeholder= "Username cannot be empty";
	}
	else
	{
		document.querySelector("#unl").style.border="1.5px solid #3792cb";
		a = 1;
	}

	if (pl == "") {
		document.querySelector("#pl").style.border="1.5px solid red";

		document.querySelector("#pl").placeholder= "Please enter a valid password";
	}
	else
	{
		document.querySelector("#pl").style.border="1.5px solid #3792cb";
		b = 2;
	}
	if (a == 1 && b == 2) 
	{
		document.querySelector(".log").type="submit";
  		document.querySelector("#form2").action = "login.php";
  		document.querySelector("#form2").method = "post";
	}
	else
	{
  	document.querySelector('.log').type="button";

	}
	
}

function valis()
{
	let un = document.getElementById("un").value.trim();
	let p = document.getElementById("p").value.trim();
	let em = document.getElementById("em").value.trim();
	let fn = document.getElementById("fn").value.trim();
	let mob = document.getElementById("mob").value.trim();

	if(fn == "")
	{
		document.querySelector("#fn").placeholder= "*Name cannot be empty";
		document.querySelector("#fn").style.border="1.5px solid red";
	}
	else
	{
		if(/\d/.test(fn) == true)
		{
			document.querySelector("#fn").style.border="1.5px solid red";
			document.querySelector("#fnv").innerHTML= "*Name cannot include number";
		}
		else
		{
			document.querySelector("#fn").style.border="1.5px solid #3792cb";
			document.querySelector("#fnv").innerHTML= "";

			two = 2;
			one = 1;
		}
	}

	

	if(mob == "")
	{
		document.querySelector("#mob").style.border="1.5px solid red";

		document.querySelector("#mob").placeholder= "*Number cannot be empty";
	}
	else
	{
		if(/^\d{10}$/.test(mob) == false)
		{
			document.querySelector("#mob").style.border="1.5px solid red";
			document.querySelector("#mobl").innerHTML= "*Number is not valid";
		}
		else
		{
			document.querySelector("#mob").style.border="1.5px solid #3792cb";
			four = 4;
			three = 3;
		}
	}


	if (un == "") 
	{
		document.querySelector("#un").style.border="1.5px solid red";
		document.querySelector("#un").placeholder= "*Username cannot be empty";
	}
	else
	{
		document.querySelector("#un").style.border="1.5px solid #3792cb";
		five = 5;
	}

	// if (p == "") 
	// {
	// 	document.querySelector("#p").placeholder= "Password cannot be empty";
	// 	document.querySelector("#p").style.border="2px solid red";

	// }

	if (em == "") 
	{
	document.querySelector("#em").style.border="1.5px solid red";

	document.querySelector("#em").placeholder= "Email cannot be empty";
	}
	else
	{
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em) == false)
		{
		 document.querySelector("#emval").innerHTML= "Please enter a valid Email";
		document.querySelector("#em").style.border="1.5px solid red";
		}
		else
		{
		 document.querySelector("#emval").innerHTML= "";
		document.querySelector("#em").style.border="1.5px solid #3792cb";
		six = 6;
		}
	}


  
  var pw = document.getElementById("p").value.trim();  
  var cp = document.getElementById("cp").value.trim();
  if(pw == "") 
  {  
     document.getElementById("p").placeholder = "*Fill the password please!";  
     // return false;  
	document.querySelector("#p").style.border="1.5px solid red";

  } 
  else
  {
  	
  	if(pw.length < 8) 
  	{  
     document.getElementById("pass").innerHTML = "*Password length must be atleast 8 characters";  
     // return false;  
	document.querySelector("#p").style.border="1.5px solid red";

  	}
  	else
  	{
     document.getElementById("pass").innerHTML = "";  
	 document.querySelector("#p").style.border="1.5px solid #3792cb";
	 seven = 7;
  	}
  

//maximum length of password validation  
  	if(pw.length > 15) 
  	{  
     document.getElementById("pass").innerHTML = "*Password length must not exceed 15 characters";  
     // return false;  
	document.querySelector("#p").style.border="1.5px solid red";
  
  	}
  	else
  	{
	document.querySelector("#p").style.border="1.5px solid #3792cb";
    document.getElementById("pass").innerHTML = "";  
    eight = 8;

  	}
	
	if (pw != cp ) 
	{
	document.querySelector("#dcp").innerHTML = "*Passwords do not match!";
	document.querySelector("#cp").style.border="1.5px solid red";

	}
	else
  	{
	document.querySelector("#dcp").innerHTML = "";
	document.querySelector("#cp").style.border="1.5px solid #3792cb";
	nine = 9;
	}
	
	if (/[a-z]/.test(pw) == false || /[A-Z]/.test(pw) == false || /[!,%,&,@,#,$,^,*,?,_,~]/.test(pw) == false || /\d/.test(pw) == false ) 
	{
     document.getElementById("pass").innerHTML = "*Password must include atleast one lowercase,uppercase, digit and a special character";
	 document.querySelector("#p").style.border="1.5px solid red";

	}
	else
	{
     document.getElementById("pass").innerHTML = "";
	 document.querySelector("#p").style.border="1.5px solid #3792cb";
	 ten = 10;

	}
  }
  if (one==1 && two==2 && three==3 && four==4 && five==5 && six==6 && seven==7 && eight==8 && nine==9 && ten==10 ) 
  {
  	document.querySelector(".sign").type="submit";
  	document.querySelector("#submit").action = "connect.php";
  	document.querySelector("#submit").method = "post";

  }
  else
  {
  	document.querySelector('.sign').type="button";
  }  
}
