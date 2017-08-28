var app = angular.module('myApp', []);

app.controller('FirstController', function ($scope) {
	$scope.title = "Registration Form";
	$scope.phnoPattern = /^\d{10}$/;

	$scope.saved = localStorage.getItem('formdata');
	// $scope.formdata = (localStorage.getItem('formdata')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	$scope.formdata = (localStorage.getItem('formdata')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('formdata', JSON.stringify($scope.saved));

	console.log(JSON.stringify($scope.saved));

	$scope.saveForm = function () {
		var counter = 0;
		var arraydata = $scope.formdata;
		for(ayd in arraydata) {
			// console.log("abcd" + t[k].fn);
			if(arraydata[ayd].uid === $scope.uniquekey){
				arraydata[ayd].fn = $scope.firstname;
				arraydata[ayd].ln = $scope.lastname;
				arraydata[ayd].em = $scope.email;
				arraydata[ayd].pn = $scope.phonenumber;
				counter++;
			}
			$scope.formdata = arraydata;
		}
		// console.log($scope.formdata);
		// console.log("Length: " + $scope.formdata.length);
		if(counter === 0) { 
			var d = new Date().valueOf();
			$scope.formdata.push({
			// text: $scope.firstname,
				uid: d,
				fn: $scope.firstname,
				ln: $scope.lastname,
				em: $scope.email,
				pn: $scope.phonenumber
			});
		}
		counter = 0;
		$scope.uniquekey = '';
		$scope.firstname = '';
		$scope.lastname = '';
		$scope.email = '';
		$scope.phonenumber = '';

		localStorage.setItem('formdata', JSON.stringify($scope.formdata));

		if($scope.regForm.$valid) {
			alert('Form Submitted Successfully !');
			$scope.regForm.$setPristine();
		}
	};

	$scope.editData = function(fd) {
		// alert(fd.fn);
		$scope.regForm.$setPristine();
		$scope.uniquekey = fd.uid;
		$scope.firstname = fd.fn;
		$scope.lastname = fd.ln;
		$scope.email = fd.em;
		$scope.phonenumber = fd.pn;
		// console.log(fd);
		// console.log(angular.fromJson(window.localStorage['fd']));
	}
});