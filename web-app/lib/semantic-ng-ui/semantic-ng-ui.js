(function() {
    'use strict';

    //TODO: add to support for plugin
    var
        version = '1.0.0',

        scriptPath = document.getElementsByTagName("script")[document.getElementsByTagName("script").length-1].src,

        default_options = {
            templateDir: scriptPath.substr(0, scriptPath.lastIndexOf('/') + 1) + 'templates/', //TODO: try to make it loose coupling
            templateExt: 'html'
        },

        singleton = null,

        SemanticUI = function (options) {
            angular.extend(this.options, default_options, options);
        },

        sui = function(options) {
            if(singleton === null) {
                singleton = new SemanticUI(options);
            }
            return singleton;
        };

    SemanticUI.prototype = {
        version: version,
        constructor: SemanticUI,
        options: {}
    };

    sui.templateUrl = function(filepath) {
        return sui().options.templateDir + filepath + '.' + sui().options.templateExt;
    };

    /*
    * TODO: try to give support EACM restrict option where ever possible
    * */
    var directives = {
        accordion: function() {
            return {
                restrict: 'E',
                transclude: true,
                templateUrl: sui.templateUrl('accordion'),
                link: function(scope, el, attr) {
                    angular.extend(scope, attr);
                    el.find('.accordion').accordion()
                }
            }
        }
    };

    (function() {
        var sui_module = angular.module('semantic.ng.ui', []);
        angular.forEach(directives, function(func, name) {
            sui_module.directive(name, func);
        })
    })();
})();