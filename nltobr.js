(function () {
    'use strict';

    angular
        .module('ng')
        .filter('nl2br', function () {
            return function (text) {
                return text.replace(/\\n/g, '<br/>');
            };
        });
})();
