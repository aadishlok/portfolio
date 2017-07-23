/**
 * Created by Aadi on 5/23/2017.
 */
angular.module('portfolio')
    .directive('destroyAndRebuild', function () {
        return function (scope, element, attrs) {
            $.fn.fullpage.destroy('all');
            $('#fullpage').fullpage({
                sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE'],
                loopBottom: true
            });
        };
    });
