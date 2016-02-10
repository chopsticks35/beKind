angular.module("myApp", ["ng-fusioncharts"])

angular.module("myApp")
    .controller("myController", function ($scope) {
              $scope.myDataSource = {
                chart: {
                    caption: "February Attendance",
                    subCaption: "Sorted by Teacher",
                },
                data:[{
                    label: "Ti Wegmeyer",
                    value: "150"
                },
                {
                    label: "Keturah Stewart",
                    value: "100"
                },
                {
                    label: "Moniqua Acosta",
                    value: "78"
                },
                {
                    label: "Deena Gilbert",
                    value: "75"
                },
                {
                    label: "Robin Goldsmith",
                    value: "62"
                }]
              };
            });