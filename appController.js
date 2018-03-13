/**
 * Created by Kostya on 12/3/2018.
 */

var derp = [
    { "id": 1, "price": "50$", "imageUrl": "images/pp.jpg" },
    { "id": 2, "price": "50$", "imageUrl": "images/pp.jpg" },
    { "id": 3, "price": "50$", "imageUrl": "images/pp.jpg" },
    { "id": 4, "price": "50$", "imageUrl": "images/pp.jpg" },
    { "id": 4, "price": "50$", "imageUrl": "images/pp.jpg" }
];

var app = angular.module('myApp', ['ngMaterial']);
app.controller('myCtrl', function($scope) {
    $scope.data =  [];
    $scope.data = derp;
});