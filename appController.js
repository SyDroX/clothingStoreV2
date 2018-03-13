/**
 * Created by Kostya on 12/3/2018.
 */

var derp = [
    { "id": 1, "price": 150, "imageUrl": "images/pp.jpg" },
    { "id": 2, "price": 250, "imageUrl": "images/pp.jpg" },
    { "id": 3, "price": 50, "imageUrl": "images/pp.jpg" },
    { "id": 4, "price": 100, "imageUrl": "images/derp.png" },
    { "id": 5, "price": 300, "imageUrl": "images/derp.png" }
];

var app = angular.module('myApp', ['ngMaterial']);
app.controller('myCtrl', function($scope) {
    $scope.products = derp;
    $scope.cart = [];
    $scope.total = 0;
    $scope.startTime = new Date();
    $scope.addToCart = function (price) {
        $scope.total+= price;
    };

    $scope.checkout = function (price) {
        var time = (new Date() - $scope.startTime) / 1000;
        alert("total:" + $scope.total + " time:" + time);
    };
});