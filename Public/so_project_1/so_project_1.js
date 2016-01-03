"use strict";

var app = angular.module('searchApp', []);

app.controller('SearchController', function($scope) {

    $scope.record = [
        {
            name: 'Alfreds Futterkiste',
            city: 'Berlin',
            country: 'Germany'
        },
        {
            name: 'Ana Trujillo Emparedados y helados',
            city: 'Mexico D.F.',
            country: 'Mexico'
        },
        {
            name: 'Antonio Moreno Taquería',
            city: 'Mexico D.F.',
            country: 'Mexico'
        },
        {
            name: 'Around the Horn',
            city: 'London',
            country: 'United Kingdom'
        },
        {
            name: 'Bahiyah Omar Talib',
            city: 'Singapore',
            country: 'Singapore'
        },
        {
            name: 'Beverages',
            city: 'London',
            country: 'United Kingdom'
        },
        {
            name: 'Hanan Abud',
            city: 'Batu Pahat',
            country: 'Malaysia'
        },
        {
            name: 'Harry Styles',
            city: 'London',
            country: 'United Kingdom'
        },
        {
            name: 'Liam Payne',
            city: 'London',
            country: 'United Kingdom'
        },
        {
            name: 'Louis Tomlinson',
            city: 'London',
            country: 'United Kingdom'
        },
        {
            name: 'Niall James Horan',
            city: 'Dublin',
            country: 'Ireland'
        }
    ];

    $scope.IsVisible = false;
    $scope.usedCountry = [];

    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    };

    $scope.AddRow = function() {
        $scope.record.push({'name':$scope.name, 'city':$scope.city, 'country':$scope.country});
    };

    $scope.filterCountry = function(){
        return function(p){
            for(var i in $scope.usedCountry){
                if(p.country == $scope.group[i] && $scope.usedCountry[i]){
                    return true;
                }
            }
        }
    };
});

app.controller('RecordController', function($scope){
    $scope.record = {};
});

// Function: Highlight filter
app.filter('highlight', function ($sce) {
    return function (record, phrase) {
        if (phrase) record = record.replace(new RegExp('(' + phrase + ')', 'gi'),
            '<span class="highlighted">$1</span>')
        return $sce.trustAsHtml(record)
    };
});

app.filter('unique', function() {
    return function(collection, keyname) {
        var output = [],
            keys = [];

        angular.forEach(collection, function(item) {
            var key = item[keyname];
            if(keys.indexOf(key) === -1) {
                keys.push(key);
                output.push(item);
            }
        });
        return output;
    };
});

app.filter('count', function() {
    return function(collection, key) {
        var out = "test";
        for (var i = 0; i < collection.length; i++) {
            //console.log(collection[i].pants);
            //var out = myApp.filter('filter')(collection[i].pants, "42", true);
        }
        return out;
    }
});

app.directive('searchTemplate', function(){
    return {
        restrict: 'E',
        templateUrl: 'so_project_1/searchTemplate.html'
    };
});