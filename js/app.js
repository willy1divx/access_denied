




		
		// // function getAnswer(){
		// // 	var answer = document.getElementById('answer').value;

		// // 		document.getElementById('userAnswer').textContent = answer;
		// // 	}

		// var numbers = [1,2,3,4,5];

		
  //       var biggest = numbers[0];
		// // for (var i = 0; i < numbers.length ; i++){
		// // 	if (numbers[i] > biggest){
		// // 		biggest = numbers[i];
		// // 	}
		// // }
		// // console.log(biggest);

		// numbers.forEach(function(item){
		// 	if (item > biggest){
		// 		biggest = item;
		// 		return;
		// 	}
		// 	return;
		// });
		// console.log(biggest);
		
// var mustang = {
// 	make : "chevy",
// 	year : "1967",
// 	purchased: false
// }

// var fiat = {
// 	make: "600",
// 	year: "2015",
// 	purchased: true
// }

// var carArray = [mustang, fiat];

//    for (var i = 0 ; i < carArray.length ; i++){
//    		if ( carArray[i].purchased === true){
//    			console.log(carArray[i].make);
//    			console.log(carArray[i].year);
//    		}
// }


// carArray.forEach(function(item){
// 	if (item.purchased === true){
// 		console.log(item.make);
// 		console.log(item.year);
// 	}
// })
		
	

	arrUsers = [];
	var x = 0;
	var open = 'no'

function getAnswer(){
		var userId = document.getElementById('userName').value;
		var password = document.getElementById('password').value;
		checkIfMember(userId, password);
	}

function checkIfMember(userId, password){
	for (var i = 0; i< arrUsers.length ; i++){
		if (arrUsers[i]['userId'].toUpperCase() == userId.toUpperCase() && arrUsers[i]['password'].toUpperCase() == password.toUpperCase()){
			document.querySelector('.yellow').style.backgroundColor = "green";
			document.getElementById('access').innerHTML = "ACCESS GRANTED";
			console.log(arrUsers[i].userId);
			console.log(userId);
			open = 'yes';	
		} 
			
	}
		if (open === "no"){
			document.getElementById('access').innerHTML = "ACCESS DENIED";
			document.querySelector('.yellow').style.backgroundColor = "red";
			$(document).ready(function(){
			var answer = prompt("you are not a member would you like to create a new account? <y> or <n>");
					if (answer === 'Y' || answer === 'y'){

						createNewAccount(userId, password);

				}	
			});
		}
	
}

function createNewAccount(userId, password){
	document.querySelector('.yellow').style.backgroundColor = "yellow";
	x = x + 1
	a = x.toString();
	userIdx = userId + a;
    userIdx = new Person(userId, password);
	arrUsers.push(userIdx);
}


function Person(userId, password) {
    this.userId = userId;
    this.password = password;
}

function reset(){
		location.reload();
	}


