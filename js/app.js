	var app = angular.module('myApp',[]);
		var hidePassword;
		var message;

	app.controller('myValues', function($scope){
		$scope.hidePassword;
		$scope.message = message;
		$scope.password = password;
		if ($scope.hidePassword === true) {
			$scope.password = "";
		} else {
			$scope.password = "";
		}
		
	});

	arrUsers = [{userId:'william', password:"dorsey"}];
	var x = 0;
	var open = 'no';

function getAnswer(password){
		var userId = document.getElementById('userName').value;
		var password = document.getElementById('password').value;
		checkIfMember(userId, password);
		open = 'no';
	}

function getAnswer1(){
		var userId = document.getElementById('userName1').value;
		var password = document.getElementById('password1').value;
		ErrorMsg = 0;
		createNewAccount(userId, password);
	}

function checkIfMember(userId, password){
	for (var i = 0; i< arrUsers.length ; i++){
		if (arrUsers[i]['userId'].toUpperCase() == userId.toUpperCase() && arrUsers[i]['password'].toUpperCase() == password.toUpperCase()){
			document.querySelector('.yellow').style.backgroundColor = "green";
			document.querySelector('.box').style.backgroundColor = "green";
			document.querySelector('#access').style.backgroundColor = "green";
			document.querySelector('#box').style.backgroundColor = "green";
			document.getElementById('access').innerHTML = "ACCESS GRANTED";
			console.log(arrUsers[i].userId);
			console.log(userId);
			open = 'yes';	
		} 
			
	}
		if (open === "no"){
			document.getElementById('access').innerHTML = " ACCESS DENIED";
			document.querySelector('.yellow').style.backgroundColor = "red";
			document.querySelector('#access').style.backgroundColor = "red";
			document.querySelector('.box').style.backgroundColor = "red";
			document.querySelector('#box').style.backgroundColor = "red";
		}
	
}

function createNewAccount(userId, password){
	console.log(arrUsers[0]['userId']);
	document.getElementById('access').innerHTML = " ";
	document.querySelector('.yellow').style.backgroundColor = "yellow";
	document.querySelector('.box').style.backgroundColor = "yellow";
	document.querySelector('#access').style.backgroundColor = "yellow";
	document.querySelector('#box').style.backgroundColor = "yellow";
	document.querySelector('#createNewAccount').style.opacity = "0";
	for( var i = 0 ; i < arrUsers.length ; i++){
		if (arrUsers[i]['userId'] == userId){
			document.getElementById('access').innerHTML = " USER ID ALREADY TAKEN";	
			ErrorMsg = 1;
		}
	};
	if (password.length < 8 ){
		document.getElementById('access').innerHTML = " PASSWORD IS TOO SHORT (must be atleast 8 characters)";
		ErrorMsg = 1;
	}

	var resultLetter = password.search(/[A-Z]/);
	var resultNumber = password.search(/\d/);
	console.log(resultLetter+ " "+resultNumber);
	if (resultLetter === -1 || resultNumber === -1){
		document.getElementById('access').innerHTML = " PASSWORD MUST HAVE 1 CAPITAL LETTER AND 1 NUMBER";
		ErrorMsg = 1;
	}


	if (ErrorMsg != 1){
		x = x + 1
		a = x.toString();
		userIdx = userId + a;
	    userIdx = new Person(userId, password);
		arrUsers.push(userIdx);
	}
}


function Person(userId, password) {
    this.userId = userId;
    this.password = password;
}

function createNewAccountBox(){
	document.querySelector('#createNewAccount').style.opacity = "1";
}



