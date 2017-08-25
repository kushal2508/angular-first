var app = angular.module('myApp', []);

app.controller('FirstController', function ($scope) {
	$scope.title = "Registration Form";
	$scope.phnoPattern = /^\d{10}$/;

	$scope.saved = localStorage.getItem('formdata');
	// $scope.formdata = (localStorage.getItem('formdata')!==null) ? JSON.parse($scope.saved) : [ {text: 'Learn AngularJS', done: false}, {text: 'Build an Angular app', done: false} ];
	$scope.formdata = (localStorage.getItem('formdata')!==null) ? JSON.parse($scope.saved) : [];
	localStorage.setItem('formdata', JSON.stringify($scope.saved));

	$scope.saveForm = function () {
		$scope.formdata.push({
			// text: $scope.firstname,
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
});