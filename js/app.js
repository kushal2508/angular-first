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
		var t = $scope.formdata;
		for(k in t) {
			console.log(t[k]);
		}
		// console.log($scope.formdata);
		// console.log("Length: " + $scope.formdata.length);
		var d = new Date().valueOf();
		$scope.formdata.push({
			// text: $scope.firstname,
			uid: d,
			fn: $scope.firstname,
			ln: $scope.lastname,
			em: $scope.email,
			pn: $scope.phonenumber
		});
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
		$scope.firstname = fd.fn;
		$scope.lastname = fd.ln;
		$scope.email = fd.em;
		$scope.phonenumber = fd.pn;
		// console.log(fd);
		// console.log(angular.fromJson(window.localStorage['fd']));
	}
});