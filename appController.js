/**
 * Created by Kostya on 12/3/2018.
 */

var derp = [
    { "price": 35, "imageUrl": "images/img01.jpg" },
    { "price": 60, "imageUrl": "images/img02.jpg" },
    { "price": 30, "imageUrl": "images/img03.jpg" },
    { "price": 70, "imageUrl": "images/img04.jpg" },
    { "price": 70, "imageUrl": "images/img05.jpg" },
    { "price": 160, "imageUrl": "images/img06.jpg" },
    { "price": 150, "imageUrl": "images/img07.jpg" },
    { "price": 80, "imageUrl": "images/img08.jpg" },
    { "price": 30, "imageUrl": "images/img09.jpg" },
    { "price": 70, "imageUrl": "images/img10.jpg" },
    { "price": 50, "imageUrl": "images/img11.jpg" },
    { "price": 110, "imageUrl": "images/img12.jpg" },
    { "price": 120, "imageUrl": "images/img13.jpg" },
    { "price": 110, "imageUrl": "images/img12.jpg" },
    { "price": 180, "imageUrl": "images/img14.jpg" },
    { "price": 160, "imageUrl": "images/img15.jpg" },
    { "price": 110, "imageUrl": "images/img16.jpg" },
    { "price": 60, "imageUrl": "images/img17.jpg" },
    { "price": 60, "imageUrl": "images/img18.jpg" },
    { "price": 70, "imageUrl": "images/img19.jpg" },
    { "price": 180, "imageUrl": "images/img20.jpg" },
    { "price": 100, "imageUrl": "images/img21.jpg" },
    { "price": 80, "imageUrl": "images/img22.jpg" },
    { "price": 50, "imageUrl": "images/img23.jpg" },
    { "price": 80, "imageUrl": "images/img24.jpg" },
    { "price": 250, "imageUrl": "images/img25.jpg" },
    { "price": 60, "imageUrl": "images/img26.jpg" },
    { "price": 50, "imageUrl": "images/img27.jpg" },
    { "price": 130, "imageUrl": "images/img28.jpg" },
    { "price": 130, "imageUrl": "images/img29.jpg" },
    { "price": 70, "imageUrl": "images/img30.jpg" },
    { "price": 70, "imageUrl": "images/img31.jpg" },
    { "price": 90, "imageUrl": "images/img32.jpg" },
    { "price": 110, "imageUrl": "images/img33.jpg" },
    { "price": 80, "imageUrl": "images/img34.jpg" },
    { "price": 20, "imageUrl": "images/img35.jpg" },
    { "price": 45, "imageUrl": "images/img36.jpg" },
    { "price": 100, "imageUrl": "images/img37.jpg" },
    { "price": 100, "imageUrl": "images/img38.jpg" },
    { "price": 200, "imageUrl": "images/img39.jpg" },
    { "price": 250, "imageUrl": "images/img40.jpg" },
    { "price": 40, "imageUrl": "images/img41.jpg" },
    { "price": 50, "imageUrl": "images/img42.jpg" },
    { "price": 80, "imageUrl": "images/img43.jpg" },
    { "price": 180, "imageUrl": "images/img44.jpg" },
    { "price": 145, "imageUrl": "images/img45.jpg" },
    { "price": 30, "imageUrl": "images/img46.jpg" },
    { "price": 90, "imageUrl": "images/img47.jpg" },
    { "price": 30, "imageUrl": "images/img48.jpg" },
    { "price": 80, "imageUrl": "images/img49.jpg" },
    { "price": 60, "imageUrl": "images/img50.jpg" },
    { "price": 140, "imageUrl": "images/img51.jpg" },
    { "price": 60, "imageUrl": "images/img52.jpg" },
    { "price": 70, "imageUrl": "images/img53.jpg" },
    { "price": 65, "imageUrl": "images/img54.jpg" },
    { "price": 80, "imageUrl": "images/img55.jpg" },
    { "price": 60, "imageUrl": "images/img56.jpg" },
    { "price": 30, "imageUrl": "images/img57.jpg" },
    { "price": 80, "imageUrl": "images/img58.jpg" },
    { "price": 140, "imageUrl": "images/img59.jpg" },
    { "price": 80, "imageUrl": "images/img60.jpg" },
    { "price": 100, "imageUrl": "images/img61.jpg" },
    { "price": 50, "imageUrl": "images/img62.jpg" },
    { "price": 160, "imageUrl": "images/img63.jpg" },
    { "price": 100, "imageUrl": "images/img64.jpg" },
    { "price": 10, "imageUrl": "images/img65.jpg" },
    { "price": 20, "imageUrl": "images/img66.jpg" },
    { "price": 200, "imageUrl": "images/img67.jpg" },
    { "price": 80, "imageUrl": "images/img68.jpg" },
    { "price": 50, "imageUrl": "images/img69.jpg" },
    { "price": 20, "imageUrl": "images/img70.jpg" },
    { "price": 80, "imageUrl": "images/img71.jpg" }
];

var app = angular.module('myApp', ['ngMaterial']);
app.controller('myCtrl', function ($scope) {
    $scope.products = derp;
    $scope.cart = [];
    $scope.total = 0;
    $scope.startTime = new Date();
    $scope.addToCart = function (price) {
        $scope.total += price;
    };

    $scope.checkout = function (price) {
        var time = (new Date() - $scope.startTime) / 1000;
        // alert("total:" + $scope.total + " time:" + time);

        var url = '/save';
        var data = { money: $scope.total, timeSpentInShop: time }

        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    };
});