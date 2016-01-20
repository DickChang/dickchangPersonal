app_nav.controller( 'nav_controller', ['$scope', function($scope) {
    $scope.navMobile_show = false;
    $scope.openBtn = "./images/menu_icon.png";
    $scope.closeBtn = "./images/menu_close_icon.png";
    $scope.navMobile_toggle = function() {
        $scope.navMobile_show = !($scope.navMobile_show);
    };
} ] );
