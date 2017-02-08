'use strict';

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Auto, AutoWithProperties;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export('Auto', Auto = function () {
                function Auto(data) {
                    _classCallCheck(this, Auto);

                    this.make = data.make;
                    this.model = data.model;
                    this.year = data.year;
                    this.price = data.price;
                }

                _createClass(Auto, [{
                    key: 'getTotal',
                    value: function getTotal(taxRate) {
                        return this.price + this.price * taxRate;
                    }
                }, {
                    key: 'getDetails',
                    value: function getDetails() {
                        return this.year + ' ' + this.make + ' ' + this.model;
                    }
                }]);

                return Auto;
            }());

            _export('Auto', Auto);

            _export('AutoWithProperties', AutoWithProperties = function () {
                function AutoWithProperties(data) {
                    _classCallCheck(this, AutoWithProperties);

                    this._make;
                    this._model;
                }

                _createClass(AutoWithProperties, [{
                    key: 'make',
                    get: function get() {
                        return this._make;
                    },
                    set: function set(val) {
                        if (val) {
                            this._make = val;
                        } else {
                            this._make = 'No Make';
                        }
                    }
                }, {
                    key: 'model',
                    get: function get() {
                        return this._model;
                    },
                    set: function set(val) {
                        if (val) {
                            this._model = val;
                        } else {
                            this._model = 'No Model';
                        }
                    }
                }]);

                return AutoWithProperties;
            }());

            _export('AutoWithProperties', AutoWithProperties);
        }
    };
});
//# sourceMappingURL=auto.js.map
