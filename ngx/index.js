var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _this = this;
import { AwesomeCordovaNativePlugin, instanceAvailability,  cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability, getPromise } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var TARGET_ELEMENT_FINDING_QUERYS = [
    '.show-page #',
    'ion-router-outlet[main] #',
    '#'
];
var LatLng = /** @class */ (function () {
    function LatLng(lat, lng) {
        this.lat = lat;
        this.lng = lng;
    }
    LatLng.prototype.equals = function (other) {
        return this.lat === other.lat && this.lng === other.lng;
    };
    LatLng.prototype.toString = function () {
        return this.lat + ',' + this.lng;
    };
    LatLng.prototype.toUrlValue = function (precision) {
        precision = precision || 6;
        return this.lat.toFixed(precision) + ',' + this.lng.toFixed(precision);
    };
    return LatLng;
}());
export { LatLng };
var LatLngBounds = /** @class */ (function () {
    function LatLngBounds(points) {
        this._objectInstance = new (GoogleMaps.getPlugin()).LatLngBounds(points);
    }
    LatLngBounds.prototype.toString = function () { return cordovaInstance(this, "toString", { "sync": true }, arguments); };
    LatLngBounds.prototype.toUrlValue = function (precision) { return cordovaInstance(this, "toUrlValue", { "sync": true }, arguments); };
    LatLngBounds.prototype.extend = function (LatLng) { return cordovaInstance(this, "extend", { "sync": true }, arguments); };
    LatLngBounds.prototype.contains = function (LatLng) { return cordovaInstance(this, "contains", { "sync": true }, arguments); };
    LatLngBounds.prototype.getCenter = function () { return cordovaInstance(this, "getCenter", { "sync": true }, arguments); };
    Object.defineProperty(LatLngBounds.prototype, "northeast", {
        get: function () { return instancePropertyGet(this, "northeast"); },
        set: function (value) { instancePropertySet(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "southwest", {
        get: function () { return instancePropertyGet(this, "southwest"); },
        set: function (value) { instancePropertySet(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LatLngBounds.prototype, "type", {
        get: function () { return instancePropertyGet(this, "type"); },
        set: function (value) { instancePropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return LatLngBounds;
}());
export { LatLngBounds };
export var TrafficModelId = {
    BEST_GUESS: 'BEST_GUESS',
    OPTIMISTIC: 'OPTIMISTIC',
    PESSIMISTIC: 'PESSIMISTIC'
};
export var TransitModeId = {
    BUS: 'BUS',
    RAIL: 'RAIL',
    SUBWAY: 'SUBWAY',
    TRAIN: 'TRAIN',
    TRAM: 'TRAM'
};
export var TransitRoutePreferenceId = {
    FEWER_TRANSFERS: 'FEWER_TRANSFERS',
    LESS_WALKING: 'LESS_WALKING'
};
export var UnitSystemId = {
    IMPERIAL: 'IMPERIAL',
    METRIC: 'METRIC'
};
export var TravelModeId = {
    BICYCLING: 'BICYCLING',
    DRIVING: 'DRIVING',
    TRANSIT: 'TRANSIT',
    WALKING: 'WALKING'
};
export var VehicleTypeId = {
    BUS: 'BUS',
    CABLE_CAR: 'CABLE_CAR',
    COMMUTER_TRAIN: 'COMMUTER_TRAIN',
    FERRY: 'FERRY',
    FUNICULAR: 'FUNICULAR',
    GONDOLA_LIFT: 'GONDOLA_LIFT',
    HEAVY_RAIL: 'HEAVY_RAIL',
    HIGH_SPEED_TRAIN: 'HIGH_SPEED_TRAIN',
    INTERCITY_BUS: 'INTERCITY_BUS',
    METRO_RAIL: 'METRO_RAIL',
    MONORAIL: 'MONORAIL',
    OTHER: 'OTHER',
    RAIL: 'RAIL',
    SHARE_TAXI: 'SHARE_TAXI',
    SUBWAY: 'SUBWAY',
    TRAM: 'TRAM',
    TROLLEYBUS: 'TROLLEYBUS'
};
var VisibleRegion = /** @class */ (function () {
    function VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight) {
        this._objectInstance = new (GoogleMaps.getPlugin()).VisibleRegion(southwest, northeast, farLeft, farRight, nearLeft, nearRight);
    }
    VisibleRegion.prototype.toString = function () { return cordovaInstance(this, "toString", { "sync": true }, arguments); };
    VisibleRegion.prototype.toUrlValue = function (precision) { return cordovaInstance(this, "toUrlValue", { "sync": true }, arguments); };
    VisibleRegion.prototype.contains = function (LatLng) { return cordovaInstance(this, "contains", { "sync": true }, arguments); };
    Object.defineProperty(VisibleRegion.prototype, "northeast", {
        get: function () { return instancePropertyGet(this, "northeast"); },
        set: function (value) { instancePropertySet(this, "northeast", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "southwest", {
        get: function () { return instancePropertyGet(this, "southwest"); },
        set: function (value) { instancePropertySet(this, "southwest", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farLeft", {
        get: function () { return instancePropertyGet(this, "farLeft"); },
        set: function (value) { instancePropertySet(this, "farLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "farRight", {
        get: function () { return instancePropertyGet(this, "farRight"); },
        set: function (value) { instancePropertySet(this, "farRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearLeft", {
        get: function () { return instancePropertyGet(this, "nearLeft"); },
        set: function (value) { instancePropertySet(this, "nearLeft", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "nearRight", {
        get: function () { return instancePropertyGet(this, "nearRight"); },
        set: function (value) { instancePropertySet(this, "nearRight", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VisibleRegion.prototype, "type", {
        get: function () { return instancePropertyGet(this, "type"); },
        set: function (value) { instancePropertySet(this, "type", value); },
        enumerable: true,
        configurable: true
    });
    return VisibleRegion;
}());
export { VisibleRegion };
/**
 * @hidden
 */
export var StreetViewSource = {
    DEFAULT: 'DEFAULT',
    OUTDOOR: 'OUTDOOR'
};
/**
 * @hidden
 * You can listen to these events where appropriate
 */
export var GoogleMapsEvent = {
    MAP_READY: 'map_ready',
    MAP_CLICK: 'map_click',
    MAP_LONG_CLICK: 'map_long_click',
    POI_CLICK: 'poi_click',
    MY_LOCATION_CLICK: 'my_location_click',
    MY_LOCATION_BUTTON_CLICK: 'my_location_button_click',
    INDOOR_BUILDING_FOCUSED: 'indoor_building_focused',
    INDOOR_LEVEL_ACTIVATED: 'indoor_level_activated',
    CAMERA_MOVE_START: 'camera_move_start',
    CAMERA_MOVE: 'camera_move',
    CAMERA_MOVE_END: 'camera_move_end',
    OVERLAY_CLICK: 'overlay_click',
    POLYGON_CLICK: 'polygon_click',
    POLYLINE_CLICK: 'polyline_click',
    CIRCLE_CLICK: 'circle_click',
    GROUND_OVERLAY_CLICK: 'groundoverlay_click',
    INFO_CLICK: 'info_click',
    INFO_LONG_CLICK: 'info_long_click',
    INFO_CLOSE: 'info_close',
    INFO_OPEN: 'info_open',
    MARKER_CLICK: 'marker_click',
    MARKER_DRAG: 'marker_drag',
    MARKER_DRAG_START: 'marker_drag_start',
    MARKER_DRAG_END: 'marker_drag_end',
    MAP_DRAG: 'map_drag',
    MAP_DRAG_START: 'map_drag_start',
    MAP_DRAG_END: 'map_drag_end',
    KML_CLICK: 'kml_click',
    PANORAMA_READY: 'panorama_ready',
    PANORAMA_CAMERA_CHANGE: 'panorama_camera_change',
    PANORAMA_LOCATION_CHANGE: 'panorama_location_change',
    PANORAMA_CLICK: 'panorama_click',
    DIRECTIONS_CHANGED: 'directions_changed'
};
/**
 * @hidden
 */
export var GoogleMapsAnimation = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
export var AnimationId = {
    BOUNCE: 'BOUNCE',
    DROP: 'DROP'
};
/**
 * @hidden
 */
export var GoogleMapsMapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
export var MapTypeId = {
    NORMAL: 'MAP_TYPE_NORMAL',
    ROADMAP: 'MAP_TYPE_NORMAL',
    SATELLITE: 'MAP_TYPE_SATELLITE',
    HYBRID: 'MAP_TYPE_HYBRID',
    TERRAIN: 'MAP_TYPE_TERRAIN',
    NONE: 'MAP_TYPE_NONE'
};
var GoogleMaps = /** @class */ (function (_super) {
    __extends(GoogleMaps, _super);
    function GoogleMaps() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Creates a new GoogleMap instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {GoogleMapOptions} [options] Options
     * @return {GoogleMap}
     */
    GoogleMaps.create = function (element, options) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            else if (typeof element === 'object') {
                options = element;
                element = null;
            }
            var googleMap = new GoogleMap(element, options);
            googleMap.set('_overlays', {});
            return googleMap;
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    /**
     * @deprecation keep this for backward compatibility.
     * @hidden
     */
    GoogleMaps.prototype.create = function (element, options) {
        console.error('GoogleMaps', '[deprecated] Please use GoogleMaps.create()');
        return GoogleMaps.create(element, options);
    };
    /**
     * Creates a new StreetView instance
     * @param element {string | HTMLElement} Element ID or reference to attach the map to
     * @param options {StreetViewOptions} [options] Options
     * @return {StreetViewPanorama}
     */
    GoogleMaps.createPanorama = function (element, options) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.getAttribute('__pluginMapId')) {
                    throw new Error(element.tagName + "[__pluginMapId='" + element.getAttribute('__pluginMapId') + "'] has already map.");
                }
            }
            return new StreetViewPanorama(element, options);
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
    };
    GoogleMaps.pluginName = "GoogleMaps";
    GoogleMaps.pluginRef = "plugin.google.maps";
    GoogleMaps.plugin = "cordova-plugin-googlemaps";
    GoogleMaps.repo = "https://github.com/mapsplugin/cordova-plugin-googlemaps";
    GoogleMaps.document = "https://ionicframework.com/docs/native/google-maps/";
    GoogleMaps.install = "ionic cordova plugin add cordova-plugin-googlemaps";
    GoogleMaps.platforms = ["Android", "iOS", "Browser"];
    GoogleMaps = __decorate([], GoogleMaps);
    return GoogleMaps;
}(AwesomeCordovaNativePlugin));
export { GoogleMaps };
var displayErrorMessage = function (element, message) {
    var errorDiv = document.createElement('div');
    errorDiv.innerHTML = message;
    errorDiv.style.color = 'red';
    errorDiv.style.position = 'absolute';
    errorDiv.style.width = '80%';
    errorDiv.style.height = '50%';
    errorDiv.style.top = '0px';
    errorDiv.style.bottom = '0px';
    errorDiv.style.right = '0px';
    errorDiv.style.left = '0px';
    errorDiv.style.padding = '0px';
    errorDiv.style.margin = 'auto';
    element.style.position = 'relative';
    element.style.backgroundColor = '#ccc7';
    element.appendChild(errorDiv);
};
var ??0 = displayErrorMessage;
var normalizeArgumentsOfEventListener = function (_objectInstance, args) {
    if (args[args.length - 1] instanceof GoogleMaps.getPlugin().BaseClass) {
        if (args[args.length - 1].type === 'Map' || args[args.length - 1].type === 'StreetViewPanorama') {
            args[args.length - 1] = _this;
        }
        else if (_objectInstance.__pgmId.indexOf('markercluster_') !== -1) {
            var _overlays = _objectInstance.getMap().get('_overlays') || {};
            var overlay = _overlays[args[args.length - 1].getId()];
            if (!overlay) {
                var markerJS = args[args.length - 1];
                var markerId_1 = markerJS.getId();
                var markerCluster = _objectInstance;
                overlay = new Marker(markerCluster.getMap(), markerJS);
                _objectInstance.getMap().get('_overlays')[markerId_1] = overlay;
                markerJS.one(markerJS.getId() + '_remove', function () {
                    _objectInstance.getMap().get('_overlays')[markerId_1] = null;
                    delete _objectInstance.getMap().get('_overlays')[markerId_1];
                });
            }
            args[args.length - 1] = overlay;
        }
        else {
            args[args.length - 1] = _objectInstance.getMap().get('_overlays')[args[args.length - 1].getId()];
        }
    }
    return args;
};
var ??1 = normalizeArgumentsOfEventListener;
var BaseClass = /** @class */ (function () {
    function BaseClass(objInstance) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            if (!objInstance) {
                objInstance = new (GoogleMaps.getPlugin().BaseClass)();
            }
            this._objectInstance = objInstance;
        }
        else {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before executing any methods.');
        }
    }
    BaseClass.prototype.addEventListener = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.addEventListener(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addEventListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.addListenerOnce = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                console.warn('[GoogleMaps] "addListenerOnce" is deprecated. Please use "addEventListenerOnce".');
                return _this.addEventListenerOnce(eventName);
            }
        })();
    };
    BaseClass.prototype.get = function (key) { return cordovaInstance(this, "get", { "sync": true }, arguments); };
    BaseClass.prototype.set = function (key, value, noNotify) { return cordovaInstance(this, "set", { "sync": true }, arguments); };
    BaseClass.prototype.bindTo = function (key, target, targetKey, noNotify) { return cordovaInstance(this, "bindTo", { "sync": true }, arguments); };
    BaseClass.prototype.on = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return new Observable(function (observer) {
                    _this._objectInstance.on(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        observer.next(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.one = function (eventName) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    _this._objectInstance.one(eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var newArgs = normalizeArgumentsOfEventListener.call(_this, _this._objectInstance, args);
                        resolve(newArgs);
                    });
                });
            }
        })();
    };
    BaseClass.prototype.hasEventListener = function () { return cordovaInstance(this, "hasEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.empty = function () { return cordovaInstance(this, "empty", { "sync": true }, arguments); };
    BaseClass.prototype.trigger = function (eventName) {
        var parameters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            parameters[_i - 1] = arguments[_i];
        }
        return cordovaInstance(this, "trigger", { "sync": true }, arguments);
    };
    BaseClass.prototype.destroy = function () { return cordovaInstance(this, "destroy", { "sync": true }, arguments); };
    BaseClass.prototype.removeEventListener = function (eventName, listener) { return cordovaInstance(this, "removeEventListener", { "sync": true }, arguments); };
    BaseClass.prototype.off = function (eventName, listener) { return cordovaInstance(this, "off", { "sync": true }, arguments); };
    BaseClass.plugin = "cordova-plugin-googlemaps";
    BaseClass.pluginName = "GoogleMaps";
    BaseClass.pluginRef = "plugin.google.maps.BaseClass";
    BaseClass.repo = "";
    BaseClass = __decorate([
        __metadata("design:paramtypes", [Object])
    ], BaseClass);
    return BaseClass;
}());
export { BaseClass };
var BaseArrayClass = /** @class */ (function (_super) {
    __extends(BaseArrayClass, _super);
    function BaseArrayClass(initialData) {
        var _this = this;
        if (initialData instanceof GoogleMaps.getPlugin().BaseArrayClass) {
            _this = _super.call(this, initialData) || this;
        }
        else if (Array.isArray(initialData)) {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)(initialData)) || this;
        }
        else {
            _this = _super.call(this, new (GoogleMaps.getPlugin().BaseArrayClass)([])) || this;
        }
        return _this;
    }
    BaseArrayClass.prototype.empty = function (noNotify) { return cordovaInstance(this, "empty", { "sync": true }, arguments); };
    BaseArrayClass.prototype.forEach = function (fn) { return cordovaInstance(this, "forEach", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * @param fn {Function}
     * @return {Promise<void>}
     */
    BaseArrayClass.prototype.forEachAsync = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.forEach(fn, resolve);
        });
    };
    BaseArrayClass.prototype.map = function (fn) { return cordovaInstance(this, "map", { "sync": true }, arguments); };
    /**
     * Iterate over each element, calling the provided callback.
     * Then you can get the results of each callback.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapAsync = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.map(fn, resolve);
        });
    };
    /**
     * Same as `mapAsync`, but keep the execution order
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<any>} returns a new array with the results
     */
    BaseArrayClass.prototype.mapSeries = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.mapSeries(fn, resolve);
        });
    };
    BaseArrayClass.prototype.filter = function (fn) { return cordovaInstance(this, "filter", { "sync": true }, arguments); };
    /**
     * The filterAsync() method creates a new array with all elements that pass the test implemented by the provided function.
     * @param fn {Function}
     * @param callback {Function}
     * @return {Promise<T[]>} returns a new filtered array
     */
    BaseArrayClass.prototype.filterAsync = function (fn) {
        var _this = this;
        return getPromise(function (resolve) {
            _this._objectInstance.filter(fn, resolve);
        });
    };
    BaseArrayClass.prototype.getArray = function () { return cordovaInstance(this, "getArray", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getAt = function (index) { return cordovaInstance(this, "getAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.getLength = function () { return cordovaInstance(this, "getLength", { "sync": true }, arguments); };
    BaseArrayClass.prototype.indexOf = function (element) { return cordovaInstance(this, "indexOf", { "sync": true }, arguments); };
    BaseArrayClass.prototype.reverse = function () { return cordovaInstance(this, "reverse", { "sync": true }, arguments); };
    BaseArrayClass.prototype.sort = function () { return cordovaInstance(this, "sort", { "sync": true }, arguments); };
    BaseArrayClass.prototype.insertAt = function (index, element, noNotify) { return cordovaInstance(this, "insertAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.pop = function (noNotify) { return cordovaInstance(this, "pop", { "sync": true }, arguments); };
    BaseArrayClass.prototype.push = function (element, noNotify) { return cordovaInstance(this, "push", { "sync": true }, arguments); };
    BaseArrayClass.prototype.removeAt = function (index, noNotify) { return cordovaInstance(this, "removeAt", { "sync": true }, arguments); };
    BaseArrayClass.prototype.setAt = function (index, element, noNotify) { return cordovaInstance(this, "setAt", { "sync": true }, arguments); };
    BaseArrayClass.pluginName = "BaseArrayClass";
    BaseArrayClass.plugin = "cordova-plugin-googlemaps";
    BaseArrayClass.pluginRef = "plugin.google.maps.BaseArrayClass";
    BaseArrayClass = __decorate([
        __metadata("design:paramtypes", [Object])
    ], BaseArrayClass);
    return BaseArrayClass;
}(BaseClass));
export { BaseArrayClass };
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Circle.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Circle.prototype.getMap = function () {
        return this._map;
    };
    Circle.prototype.setCenter = function (latLng) { return cordovaInstance(this, "setCenter", { "sync": true }, arguments); };
    Circle.prototype.getCenter = function () { return cordovaInstance(this, "getCenter", { "sync": true }, arguments); };
    Circle.prototype.getRadius = function () { return cordovaInstance(this, "getRadius", { "sync": true }, arguments); };
    Circle.prototype.setRadius = function (radius) { return cordovaInstance(this, "setRadius", { "sync": true }, arguments); };
    Circle.prototype.setFillColor = function (color) { return cordovaInstance(this, "setFillColor", { "sync": true }, arguments); };
    Circle.prototype.getFillColor = function () { return cordovaInstance(this, "getFillColor", { "sync": true }, arguments); };
    Circle.prototype.setStrokeWidth = function (strokeWidth) { return cordovaInstance(this, "setStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.getStrokeWidth = function () { return cordovaInstance(this, "getStrokeWidth", { "sync": true }, arguments); };
    Circle.prototype.setStrokeColor = function (strokeColor) { return cordovaInstance(this, "setStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.getStrokeColor = function () { return cordovaInstance(this, "getStrokeColor", { "sync": true }, arguments); };
    Circle.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    Circle.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    Circle.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Circle.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Circle.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Circle.prototype.getBounds = function () { return cordovaInstance(this, "getBounds", { "sync": true }, arguments); };
    Circle.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Circle.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    return Circle;
}(BaseClass));
export { Circle };
var Environment = /** @class */ (function () {
    function Environment() {
    }
    /**
     * Set environment variables.
     */
    Environment.setEnv = function (envOptions) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setEnv(envOptions);
    };
    /**
     * Get the open source software license information for Google Maps SDK for iOS.
     * @return {Promise<any>}
     */
    Environment.getLicenseInfo = function () {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve) {
            GoogleMaps.getPlugin().environment.getLicenseInfo(function (text) { return resolve(text); });
        });
    };
    /**
     * Specifies the background color of the app.
     * @param color
     */
    Environment.setBackgroundColor = function (color) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        GoogleMaps.getPlugin().environment.setBackgroundColor(color);
    };
    /**
     * @deprecation This method is static. Please use Environment.getLicenseInfo()
     * @hidden
     */
    Environment.prototype.getLicenseInfo = function () {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.getLicenseInfo()');
        return Environment.getLicenseInfo();
    };
    /**
     * @deprecation This method is static. Please use Environment.setBackgroundColor()
     * @hidden
     */
    Environment.prototype.setBackgroundColor = function (color) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Environment.setBackgroundColor()');
        Environment.setBackgroundColor(color);
    };
    Environment.plugin = "cordova-plugin-googlemaps";
    Environment.pluginName = "GoogleMaps";
    Environment.pluginRef = "plugin.google.maps.environment";
    Environment.repo = "";
    Environment = __decorate([], Environment);
    return Environment;
}());
export { Environment };
var Geocoder = /** @class */ (function () {
    function Geocoder() {
    }
    /**
     * @deprecation This method is static. Please use Geocoder.geocode()
     * @hidden
     */
    Geocoder.prototype.geocode = function (request) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Geocoder.geocode()');
        return Geocoder.geocode(request);
    };
    /**
     * Converts position to address and vice versa
     * @param {GeocoderRequest} request Request object with either an address or a position
     * @return {Promise<GeocoderResult[] | BaseArrayClass<GeocoderResult>>}
     */
    Geocoder.geocode = function (request) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        if (request.address instanceof Array || Array.isArray(request.address) ||
            request.position instanceof Array || Array.isArray(request.position)) {
            // -------------------------
            // Geocoder.geocode({
            //   address: [
            //    "Kyoto, Japan",
            //    "Tokyo, Japan"
            //   ]
            // })
            // -------------------------
            return getPromise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (mvcArray) {
                    if (mvcArray) {
                        resolve(new BaseArrayClass(mvcArray));
                    }
                    else {
                        reject();
                    }
                });
            });
        }
        else {
            // -------------------------
            // Geocoder.geocode({
            //   address: "Kyoto, Japan"
            // })
            // -------------------------
            return getPromise(function (resolve, reject) {
                GoogleMaps.getPlugin().Geocoder.geocode(request, function (results) {
                    if (results) {
                        resolve(results);
                    }
                    else {
                        reject();
                    }
                });
            });
        }
    };
    Geocoder.pluginName = "GoogleMaps";
    Geocoder.pluginRef = "plugin.google.maps.Geocoder";
    Geocoder.plugin = "cordova-plugin-googlemaps";
    Geocoder.repo = "";
    Geocoder = __decorate([], Geocoder);
    return Geocoder;
}());
export { Geocoder };
var DirectionsService = /** @class */ (function () {
    function DirectionsService() {
    }
    /**
     * A service for computing directions between two or more places.
     * @param {DirectionsRequest} request
     * @return {Promise<DirectionsResult>}
     */
    DirectionsService.route = function (request) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve, reject) {
            GoogleMaps.getPlugin().DirectionsService.route(request, resolve, reject);
        });
    };
    DirectionsService.pluginName = "GoogleMaps";
    DirectionsService.pluginRef = "plugin.google.maps.DirectionsService";
    DirectionsService.plugin = "cordova-plugin-googlemaps";
    DirectionsService.repo = "";
    DirectionsService = __decorate([], DirectionsService);
    return DirectionsService;
}());
export { DirectionsService };
var ElevationService = /** @class */ (function () {
    function ElevationService() {
    }
    /**
     * Makes an elevation request along a path, where the elevation data are returned as distance-based samples along that path.
     * @param {PathElevationRequest} request
     * @return {Promise<ElevationResult[]>}
     */
    ElevationService.getElevationAlongPath = function (request) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve, reject) {
            GoogleMaps.getPlugin().ElevationService.getElevationAlongPath(request, resolve, reject);
        });
    };
    /**
     * Makes an elevation request for a list of discrete locations.
     * @param {LocationElevationRequest} request
     * @return {Promise<ElevationResult[]>}
     */
    ElevationService.getElevationForLocations = function (request) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve, reject) {
            GoogleMaps.getPlugin().ElevationService.getElevationForLocations(request, resolve, reject);
        });
    };
    ElevationService.pluginName = "GoogleMaps";
    ElevationService.pluginRef = "plugin.google.maps.ElevationService";
    ElevationService.plugin = "cordova-plugin-googlemaps";
    ElevationService.repo = "";
    ElevationService = __decorate([], ElevationService);
    return ElevationService;
}());
export { ElevationService };
var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    /**
     * Get the current device location without map
     * @return {Promise<MyLocation>}
     */
    LocationService.getMyLocation = function (options) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.getMyLocation(options, resolve, reject);
        });
    };
    /**
     * Return true if the application has geolocation permission
     * @return {Promise<boolean>}
     */
    LocationService.hasPermission = function () {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return getPromise(function (resolve, reject) {
            GoogleMaps.getPlugin().LocationService.hasPermission(resolve, reject);
        });
    };
    LocationService.pluginName = "GoogleMaps";
    LocationService.pluginRef = "plugin.google.maps.LocationService";
    LocationService.plugin = "cordova-plugin-googlemaps";
    LocationService.repo = "";
    LocationService = __decorate([], LocationService);
    return LocationService;
}());
export { LocationService };
var Encoding = /** @class */ (function () {
    function Encoding() {
    }
    /**
     * Decodes an encoded path string into a sequence of LatLngs.
     * @param encoded {string} an encoded path string
     * @param precision? {number} default: 5
     * @return {LatLng}
     */
    Encoding.decodePath = function (encoded, precision) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.encoding.decodePath(encoded, precision);
    };
    /**
     * Encodes a sequence of LatLngs into an encoded path string.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>} a sequence of LatLngs
     * @return {string}
     */
    Encoding.encodePath = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.encoding.encodePath(path);
    };
    /**
     * @deprecation This method is static. Please use Encoding.decodePath()
     * @hidden
     */
    Encoding.prototype.decodePath = function (encoded, precision) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.decodePath()');
        return Encoding.decodePath(encoded, precision);
    };
    /**
     * @deprecation This method is static. Please use Encoding.encodePath()
     * @hidden
     */
    Encoding.prototype.encodePath = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Encoding.encodePath()');
        return Encoding.encodePath(path);
    };
    Encoding.pluginName = "GoogleMaps";
    Encoding.pluginRef = "plugin.google.maps.geometry.encoding";
    Encoding.plugin = "cordova-plugin-googlemaps";
    Encoding.repo = "";
    Encoding = __decorate([], Encoding);
    return Encoding;
}());
export { Encoding };
var Poly = /** @class */ (function () {
    function Poly() {
    }
    /**
     * Returns true if the specified location is in the polygon path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.containsLocation = function (location, path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.containsLocation(location, path);
    };
    /**
     * Returns true if the specified location is on the polyline path
     * @param location {ILatLng}
     * @param path {ILatLng[]}
     * @return {boolean}
     */
    Poly.isLocationOnEdge = function (location, path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.poly.isLocationOnEdge(location, path);
    };
    Poly.pluginName = "GoogleMaps";
    Poly.pluginRef = "plugin.google.maps.geometry.poly";
    Poly.plugin = "cordova-plugin-googlemaps";
    Poly.repo = "";
    Poly = __decorate([], Poly);
    return Poly;
}());
export { Poly };
var Spherical = /** @class */ (function () {
    function Spherical() {
    }
    /**
     * Returns the distance, in meters, between two LatLngs.
     * @param locationA {ILatLng}
     * @param locationB {ILatLng}
     * @return {number}
     */
    Spherical.computeDistanceBetween = function (from, to) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeDistanceBetween(from, to);
    };
    /**
     * Returns the LatLng resulting from moving a distance from an origin in the specified heading (expressed in degrees clockwise from north)
     * @param from {ILatLng}
     * @param distance {number}
     * @param heading {number}
     * @return {LatLng}
     */
    Spherical.computeOffset = function (from, distance, heading) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffset(from, distance, heading);
    };
    /**
     * Returns the location of origin when provided with a LatLng destination, meters travelled and original heading. Headings are expressed in degrees clockwise from North. This function returns null when no solution is available.
     * @param to {ILatLng} The destination LatLng.
     * @param distance {number} The distance travelled, in meters.
     * @param heading {number} The heading in degrees clockwise from north.
     * @return {LatLng}
     */
    Spherical.computeOffsetOrigin = function (to, distance, heading) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * Returns the length of the given path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}
     * @return {number}
     */
    Spherical.computeLength = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the area of a closed path. The computed area uses the same units as the radius.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeArea = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeLength(path);
    };
    /**
     * Returns the signed area of a closed path. The signed area may be used to determine the orientation of the path.
     * @param path {ILatLng[] | BaseArrayClass<ILatLng>}.
     * @return {number}
     */
    Spherical.computeSignedArea = function (path) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeSignedArea(path);
    };
    /**
     * Returns the heading from one LatLng to another LatLng. Headings are expressed in degrees clockwise from North within the range (-180,180).
     * @param from {ILatLng}
     * @param to {ILatLng}
     * @return {number}
     */
    Spherical.computeHeading = function (from, to) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.computeHeading(from, to);
    };
    /**
     * Returns the LatLng which lies the given fraction of the way between the origin LatLng and the destination LatLng.
     * @param from {ILatLng}     The LatLng from which to start.
     * @param to {ILatLng}       The LatLng toward which to travel.
     * @param fraction {number}  A fraction of the distance to travel from 0.0 to 1.0 .
     * @return {LatLng}
     */
    Spherical.interpolate = function (from, to, fraction) {
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === false) {
            throw new Error('cordova-plugin-googlemaps is not ready. Please use platform.ready() before accessing this method.');
        }
        return GoogleMaps.getPlugin().geometry.spherical.interpolate(from, to, fraction);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeDistanceBetween()
     * @hidden
     */
    Spherical.prototype.computeDistanceBetween = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeDistanceBetween()');
        return Spherical.computeDistanceBetween(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffset()
     * @hidden
     */
    Spherical.prototype.computeOffset = function (from, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffset()');
        return Spherical.computeOffset(from, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeOffsetOrigin()
     * @hidden
     */
    Spherical.prototype.computeOffsetOrigin = function (to, distance, heading) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeOffsetOrigin()');
        return Spherical.computeOffsetOrigin(to, distance, heading);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeLength()
     * @hidden
     */
    Spherical.prototype.computeLength = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeLength()');
        return Spherical.computeLength(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeArea()
     * @hidden
     */
    Spherical.prototype.computeArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeArea()');
        return Spherical.computeArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeSignedArea()
     * @hidden
     */
    Spherical.prototype.computeSignedArea = function (path) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeSignedArea()');
        return Spherical.computeSignedArea(path);
    };
    /**
     * @deprecation This method is static. Please use Spherical.computeHeading()
     * @hidden
     */
    Spherical.prototype.computeHeading = function (from, to) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.computeHeading()');
        return Spherical.computeHeading(from, to);
    };
    /**
     * @deprecation This method is static. Please use Spherical.interpolate()
     * @hidden
     */
    Spherical.prototype.interpolate = function (from, to, fraction) {
        console.error('GoogleMaps', '[deprecated] This method is static. Please use Spherical.interpolate()');
        return Spherical.interpolate(from, to, fraction);
    };
    Spherical.pluginName = "GoogleMaps";
    Spherical.pluginRef = "plugin.google.maps.geometry.spherical";
    Spherical.plugin = "cordova-plugin-googlemaps";
    Spherical.repo = "";
    Spherical = __decorate([], Spherical);
    return Spherical;
}());
export { Spherical };
var StreetViewPanorama = /** @class */ (function (_super) {
    __extends(StreetViewPanorama, _super);
    function StreetViewPanorama(element, options) {
        var _this = this;
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // -------------------
            // Create a panorama
            // -------------------
            if (element instanceof HTMLElement) {
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().StreetView.getPanorama(getPromise(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 40) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && (targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100)) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            if (targets.length > 1) {
                                reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
                            }
                            else {
                                reject(new Error('Can not find the element [#' + element + ']'));
                            }
                        }
                    }, 100);
                }), options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
            throw new Error(errorMessage.join(''));
        }
        return _this;
    }
    StreetViewPanorama.prototype.setPov = function (pov) { return cordovaInstance(this, "setPov", {}, arguments); };
    StreetViewPanorama.prototype.setPosition = function (cameraPosition) { return cordovaInstance(this, "setPosition", {}, arguments); };
    StreetViewPanorama.prototype.setPanningGesturesEnabled = function (gestureEnable) { return cordovaInstance(this, "setPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanningGesturesEnabled = function () { return cordovaInstance(this, "getPanningGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setZoomGesturesEnabled = function (gestureEnable) { return cordovaInstance(this, "setZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getZoomGesturesEnabled = function () { return cordovaInstance(this, "getZoomGesturesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setStreetNamesEnabled = function (gestureEnable) { return cordovaInstance(this, "setStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getStreetNamesEnabled = function () { return cordovaInstance(this, "getStreetNamesEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.setNavigationEnabled = function (gestureEnable) { return cordovaInstance(this, "setNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getNavigationEnabled = function () { return cordovaInstance(this, "getNavigationEnabled", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLinks = function () { return cordovaInstance(this, "getLinks", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getLocation = function () { return cordovaInstance(this, "getLocation", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPanoId = function () { return cordovaInstance(this, "getPanoId", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.getPosition = function () { return cordovaInstance(this, "getPosition", { "sync": true }, arguments); };
    StreetViewPanorama.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    var _a, _b;
    StreetViewPanorama.pluginName = "StreetViewPanorama";
    StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
    StreetViewPanorama = __decorate([
        __metadata("design:paramtypes", [Object, typeof (_b = typeof StreetViewOptions !== "undefined" && StreetViewOptions) === "function" ? _b : Object])
    ], StreetViewPanorama);
    return StreetViewPanorama;
}(BaseClass));
export { StreetViewPanorama };
var GoogleMap = /** @class */ (function (_super) {
    __extends(GoogleMap, _super);
    function GoogleMap(element, options, __timeout) {
        var _this = this;
        if (checkAvailability(GoogleMaps.getPluginRef(), null, GoogleMaps.getPluginName()) === true) {
            // ---------------
            // Create a map
            // ---------------
            if (element instanceof HTMLElement) {
                if (!element.offsetParent) {
                    throw new Error('Element must be under <body>');
                }
                if (element.offsetWidth >= 100 && element.offsetHeight >= 100) {
                    _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(element, options)) || this;
                }
                else {
                    throw new Error(element.tagName + ' is too small. Must be bigger than 100x100.');
                }
            }
            else if (typeof element === 'string') {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(getPromise(function (resolve, reject) {
                    var count;
                    var i;
                    count = 0;
                    var timer = setInterval(function () {
                        var targets;
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                            targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + element));
                            if (targets.length > 0) {
                                targets = targets.filter(function (target) {
                                    return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                                });
                            }
                            if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                clearInterval(timer);
                                resolve([targets[0], options]);
                                return;
                            }
                        }
                        if (count++ < 40) {
                            return;
                        }
                        clearInterval(timer);
                        _this._objectInstance.remove();
                        if (targets.length > 0 && targets[0] && (targets[0].offsetWidth < 100 || targets[0].offsetHeight < 100)) {
                            reject(new Error(targets[0].tagName + '[#' + element + '] is too small. Must be bigger than 100x100.'));
                        }
                        else {
                            if (targets.length > 1) {
                                reject(new Error('There are multiple "' + element + '" elements. Use different id to prevent error.'));
                            }
                            else {
                                reject(new Error('Can not find the element [#' + element + ']'));
                            }
                        }
                    }, __timeout == null ? 100 : __timeout);
                }), options)) || this;
            }
            else if (element === null && options) {
                _this = _super.call(this, GoogleMaps.getPlugin().Map.getMap(null, options)) || this;
            }
        }
        else {
            var errorMessage = [
                '[GoogleMaps]'
            ];
            if (!window.cordova) {
                errorMessage.push('You need to execute "$> ionic cordova run browser".');
                errorMessage.push('"$> ionic serve" is not supported.');
            }
            else {
                errorMessage.push('cordova-plugin-googlemaps is not installed or not ready yet.');
            }
            console.error(errorMessage.join(''));
            if (element instanceof HTMLElement) {
                displayErrorMessage(element, errorMessage.join('<br />'));
            }
            else if (typeof element === 'string') {
                var targets = Array.from(document.querySelectorAll('#' + element));
                if (targets.length > 0) {
                    targets = targets.filter(function (target) {
                        return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                    });
                }
                if (targets.length === 1 && targets[0]) {
                    displayErrorMessage(targets[0], errorMessage.join('<br />'));
                }
            }
        }
        return _this;
    }
    GoogleMap.prototype.setDiv = function (domNode) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                if (!domNode) {
                    return _this._objectInstance.setDiv();
                }
                if (typeof domNode === 'string') {
                    return (getPromise(function (resolve, reject) {
                        var count;
                        var i;
                        count = 0;
                        var timer = setInterval(function () {
                            var targets;
                            for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                                targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));
                                if (targets.length > 0) {
                                    targets = targets.filter(function (target) {
                                        return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                                    });
                                }
                                if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                                    clearInterval(timer);
                                    resolve(targets[0]);
                                    return;
                                }
                            }
                            if (count++ < 40) {
                                return;
                            }
                            clearInterval(timer);
                            reject('Can not find [#' + domNode + '] element');
                        }, 100);
                        /*
                        let i, targets: any[];
                        for (i = 0; i < TARGET_ELEMENT_FINDING_QUERYS.length; i++) {
                          targets = Array.from(document.querySelectorAll(TARGET_ELEMENT_FINDING_QUERYS[i] + domNode));
                          if (targets.length > 0) {
                            targets = targets.filter((target) => {
                              return !target.hasAttribute('__pluginMapId') && target.__pluginMapId === undefined;
                            });
                          }
                          if (targets.length === 1 && targets[0] && targets[0].offsetWidth >= 100 && targets[0].offsetHeight >= 100) {
                            resolve(targets[0] as HTMLElement);
                            return;
                          }
                
                        }
                        reject('Can not find [#' + domNode + '] element');
                        */
                    }))
                        .then(function (element) {
                        return _this._objectInstance.setDiv(element);
                    });
                }
                else {
                    if (domNode instanceof HTMLElement &&
                        !domNode.offsetParent &&
                        domNode.offsetWidth >= 100 && domNode.offsetHeight >= 100) {
                        return _this._objectInstance.setDiv(domNode);
                    }
                    else {
                        throw new Error(domNode.tagName + ' is too small. Must be bigger than 100x100.');
                    }
                }
            }
        })();
    };
    GoogleMap.prototype.getDiv = function () { return cordovaInstance(this, "getDiv", { "sync": true }, arguments); };
    GoogleMap.prototype.setMapTypeId = function (mapTypeId) { return cordovaInstance(this, "setMapTypeId", { "sync": true }, arguments); };
    GoogleMap.prototype.animateCamera = function (cameraPosition) { return cordovaInstance(this, "animateCamera", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomIn = function () { return cordovaInstance(this, "animateCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.animateCameraZoomOut = function () { return cordovaInstance(this, "animateCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.moveCamera = function (cameraPosition) { return cordovaInstance(this, "moveCamera", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomIn = function () { return cordovaInstance(this, "moveCameraZoomIn", {}, arguments); };
    GoogleMap.prototype.moveCameraZoomOut = function () { return cordovaInstance(this, "moveCameraZoomOut", {}, arguments); };
    GoogleMap.prototype.getCameraPosition = function () { return cordovaInstance(this, "getCameraPosition", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTarget = function () { return cordovaInstance(this, "getCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraZoom = function () { return cordovaInstance(this, "getCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraBearing = function () { return cordovaInstance(this, "getCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.getCameraTilt = function () { return cordovaInstance(this, "getCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTarget = function (latLng) { return cordovaInstance(this, "setCameraTarget", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraZoom = function (zoomLevel) { return cordovaInstance(this, "setCameraZoom", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraTilt = function (tiltAngle) { return cordovaInstance(this, "setCameraTilt", { "sync": true }, arguments); };
    GoogleMap.prototype.setCameraBearing = function (bearing) { return cordovaInstance(this, "setCameraBearing", { "sync": true }, arguments); };
    GoogleMap.prototype.panBy = function (x, y) { return cordovaInstance(this, "panBy", { "sync": true }, arguments); };
    GoogleMap.prototype.getVisibleRegion = function () { return cordovaInstance(this, "getVisibleRegion", { "sync": true }, arguments); };
    GoogleMap.prototype.getMyLocation = function (options) { return cordovaInstance(this, "getMyLocation", {}, arguments); };
    GoogleMap.prototype.setClickable = function (isClickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    GoogleMap.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    GoogleMap.prototype.clear = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                if (_this.get('_overlays')) {
                    Object.keys(_this.get('_overlays')).forEach(function (overlayId) {
                        _this.get('_overlays')[overlayId] = null;
                        delete _this.get('_overlays')[overlayId];
                    });
                }
                return getPromise(function (resolve) {
                    _this._objectInstance.clear(function () { return resolve(); });
                });
            }
        })();
    };
    GoogleMap.prototype.fromLatLngToPoint = function (latLng) { return cordovaInstance(this, "fromLatLngToPoint", {}, arguments); };
    GoogleMap.prototype.fromPointToLatLng = function (point) { return cordovaInstance(this, "fromPointToLatLng", {}, arguments); };
    GoogleMap.prototype.setMyLocationEnabled = function (enabled) { return cordovaInstance(this, "setMyLocationEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setMyLocationButtonEnabled = function (enabled) { return cordovaInstance(this, "setMyLocationButtonEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.getFocusedBuilding = function () { return cordovaInstance(this, "getFocusedBuilding", {}, arguments); };
    GoogleMap.prototype.setIndoorEnabled = function (enabled) { return cordovaInstance(this, "setIndoorEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setTrafficEnabled = function (enabled) { return cordovaInstance(this, "setTrafficEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setCompassEnabled = function (enabled) { return cordovaInstance(this, "setCompassEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setAllGesturesEnabled = function (enabled) { return cordovaInstance(this, "setAllGesturesEnabled", { "sync": true }, arguments); };
    GoogleMap.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    GoogleMap.prototype.setPadding = function (top, right, bottom, left) { return cordovaInstance(this, "setPadding", { "sync": true }, arguments); };
    GoogleMap.prototype.setOptions = function (options) { return cordovaInstance(this, "setOptions", { "sync": true }, arguments); };
    GoogleMap.prototype.addMarker = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addMarker(options, function (marker) {
                        if (marker) {
                            var overlayId_1 = marker.getId();
                            var overlay_1 = new Marker(_this, marker);
                            _this.get('_overlays')[overlayId_1] = overlay_1;
                            marker.one(overlayId_1 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_1] = null;
                                    overlay_1.destroy();
                                }
                            });
                            resolve(overlay_1);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var marker = _this._objectInstance.addMarker(options);
                var overlayId = marker.getId();
                var overlay = new Marker(_this, marker);
                _this.get('_overlays')[overlayId] = overlay;
                marker.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addMarkerCluster = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addMarkerCluster(options, function (markerCluster) {
                        if (markerCluster) {
                            var overlayId_2 = markerCluster.getId();
                            var overlay_2 = new MarkerCluster(_this, markerCluster);
                            _this.get('_overlays')[overlayId_2] = overlay_2;
                            markerCluster.one('remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_2] = null;
                                    overlay_2.destroy();
                                }
                            });
                            markerCluster.set('_overlays', new BaseArrayClass());
                            resolve(overlay_2);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addMarkerClusterSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var markerCluster = _this._objectInstance.addMarkerCluster(options);
                var overlayId = markerCluster.getId();
                var overlay = new MarkerCluster(_this, markerCluster);
                _this.get('_overlays')[overlayId] = overlay;
                markerCluster.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                markerCluster.set('_overlays', new BaseArrayClass());
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addCircle = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addCircle(options, function (circle) {
                        if (circle) {
                            var overlayId_3 = circle.getId();
                            var overlay_3 = new Circle(_this, circle);
                            _this.get('_overlays')[overlayId_3] = overlay_3;
                            circle.one(overlayId_3 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_3] = null;
                                    overlay_3.destroy();
                                }
                            });
                            resolve(overlay_3);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addCircleSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var circle = _this._objectInstance.addCircle(options);
                var overlayId = circle.getId();
                var overlay = new Circle(_this, circle);
                _this.get('_overlays')[overlayId] = overlay;
                circle.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolygon = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addPolygon(options, function (polygon) {
                        if (polygon) {
                            var overlayId_4 = polygon.getId();
                            var overlay_4 = new Polygon(_this, polygon);
                            _this.get('_overlays')[overlayId_4] = overlay_4;
                            polygon.one(overlayId_4 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_4] = null;
                                    overlay_4.destroy();
                                }
                            });
                            resolve(overlay_4);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolygonSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var polygon = _this._objectInstance.addPolygon(options);
                var overlayId = polygon.getId();
                var overlay = new Polygon(_this, polygon);
                _this.get('_overlays')[overlayId] = overlay;
                polygon.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addPolyline = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addPolyline(options, function (polyline) {
                        if (polyline) {
                            var overlayId_5 = polyline.getId();
                            var overlay_5 = new Polyline(_this, polyline);
                            _this.get('_overlays')[overlayId_5] = overlay_5;
                            polyline.one(overlayId_5 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_5] = null;
                                    overlay_5.destroy();
                                }
                            });
                            resolve(overlay_5);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addPolylineSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var polyline = _this._objectInstance.addPolyline(options);
                var overlayId = polyline.getId();
                var overlay = new Polyline(_this, polyline);
                _this.get('_overlays')[overlayId] = overlay;
                polyline.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addTileOverlay = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addTileOverlay(options, function (tileOverlay) {
                        if (tileOverlay) {
                            var overlayId_6 = tileOverlay.getId();
                            var overlay_6 = new TileOverlay(_this, tileOverlay);
                            _this.get('_overlays')[overlayId_6] = overlay_6;
                            tileOverlay.one(overlayId_6 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_6] = null;
                                    overlay_6.destroy();
                                }
                            });
                            resolve(overlay_6);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addTileOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var tileOverlay = _this._objectInstance.addTileOverlay(options);
                var overlayId = tileOverlay.getId();
                var overlay = new TileOverlay(_this, tileOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                tileOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlay = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addGroundOverlay(options, function (groundOverlay) {
                        if (groundOverlay) {
                            var overlayId_7 = groundOverlay.getId();
                            var overlay_7 = new GroundOverlay(_this, groundOverlay);
                            _this.get('_overlays')[overlayId_7] = overlay_7;
                            groundOverlay.one(overlayId_7 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_7] = null;
                                    overlay_7.destroy();
                                }
                            });
                            resolve(overlay_7);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addGroundOverlaySync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var groundOverlay = _this._objectInstance.addGroundOverlay(options);
                var overlayId = groundOverlay.getId();
                var overlay = new GroundOverlay(_this, groundOverlay);
                _this.get('_overlays')[overlayId] = overlay;
                groundOverlay.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.addKmlOverlay = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.addKmlOverlay(options, function (kmlOverlay) {
                        if (kmlOverlay) {
                            var overlayId_8 = kmlOverlay.getId();
                            var overlay_8 = new KmlOverlay(_this, kmlOverlay);
                            _this.get('_overlays')[overlayId_8] = overlay_8;
                            kmlOverlay.one(overlayId_8 + '_remove', function () {
                                if (_this.get('_overlays')) {
                                    _this.get('_overlays')[overlayId_8] = null;
                                    overlay_8.destroy();
                                }
                            });
                            resolve(overlay_8);
                        }
                        else {
                            reject();
                        }
                    });
                });
            }
        })();
    };
    GoogleMap.prototype.addDirectionsRendererSync = function (options) {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                var directionsRenderer = _this._objectInstance.addDirectionsRenderer(options);
                var overlayId = directionsRenderer.getId();
                var overlay = new DirectionsRenderer(_this, directionsRenderer);
                _this.get('_overlays')[overlayId] = overlay;
                directionsRenderer.one(overlayId + '_remove', function () {
                    if (_this.get('_overlays')) {
                        _this.get('_overlays')[overlayId] = null;
                        overlay.destroy();
                    }
                });
                return overlay;
            }
        })();
    };
    GoogleMap.prototype.toDataURL = function (options) { return cordovaInstance(this, "toDataURL", {}, arguments); };
    var _c, _d;
    GoogleMap.pluginName = "GoogleMaps";
    GoogleMap.plugin = "cordova-plugin-googlemaps";
    GoogleMap = __decorate([
        __metadata("design:paramtypes", [Object, typeof (_d = typeof GoogleMapOptions !== "undefined" && GoogleMapOptions) === "function" ? _d : Object, Number])
    ], GoogleMap);
    return GoogleMap;
}(BaseClass));
export { GoogleMap };
var GroundOverlay = /** @class */ (function (_super) {
    __extends(GroundOverlay, _super);
    function GroundOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    GroundOverlay.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    GroundOverlay.prototype.getMap = function () {
        return this._map;
    };
    GroundOverlay.prototype.setBounds = function (bounds) { return cordovaInstance(this, "setBounds", { "sync": true }, arguments); };
    GroundOverlay.prototype.setBearing = function (bearing) { return cordovaInstance(this, "setBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.getBearing = function () { return cordovaInstance(this, "getBearing", { "sync": true }, arguments); };
    GroundOverlay.prototype.setImage = function (imageUrl) { return cordovaInstance(this, "setImage", { "sync": true }, arguments); };
    GroundOverlay.prototype.setOpacity = function (opacity) { return cordovaInstance(this, "setOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.getOpacity = function () { return cordovaInstance(this, "getOpacity", { "sync": true }, arguments); };
    GroundOverlay.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    GroundOverlay.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    GroundOverlay.prototype.setZIndex = function (index) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    GroundOverlay.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return GroundOverlay;
}(BaseClass));
export { GroundOverlay };
var HtmlInfoWindow = /** @class */ (function (_super) {
    __extends(HtmlInfoWindow, _super);
    function HtmlInfoWindow() {
        return _super.call(this, new (GoogleMaps.getPlugin().HtmlInfoWindow)()) || this;
    }
    HtmlInfoWindow.prototype.setBackgroundColor = function (color) { return cordovaInstance(this, "setBackgroundColor", {}, arguments); };
    HtmlInfoWindow.prototype.setContent = function (content, cssOptions) { return cordovaInstance(this, "setContent", {}, arguments); };
    HtmlInfoWindow.prototype.open = function (marker) { return cordovaInstance(this, "open", {}, arguments); };
    HtmlInfoWindow.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    HtmlInfoWindow.plugin = "cordova-plugin-googlemaps";
    HtmlInfoWindow.pluginName = "GoogleMaps";
    HtmlInfoWindow.pluginRef = "plugin.google.maps.HtmlInfoWindow";
    HtmlInfoWindow.repo = "";
    HtmlInfoWindow = __decorate([
        __metadata("design:paramtypes", [])
    ], HtmlInfoWindow);
    return HtmlInfoWindow;
}(BaseClass));
export { HtmlInfoWindow };
var Marker = /** @class */ (function (_super) {
    __extends(Marker, _super);
    function Marker(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Marker.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Marker.prototype.getMap = function () {
        return this._map;
    };
    Marker.prototype.setPosition = function (latLng) { return cordovaInstance(this, "setPosition", { "sync": true }, arguments); };
    Marker.prototype.getPosition = function () { return cordovaInstance(this, "getPosition", { "sync": true }, arguments); };
    Marker.prototype.showInfoWindow = function () { return cordovaInstance(this, "showInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.hideInfoWindow = function () { return cordovaInstance(this, "hideInfoWindow", { "sync": true }, arguments); };
    Marker.prototype.setAnimation = function (animation) { return cordovaInstance(this, "setAnimation", { "sync": true }, arguments); };
    Marker.prototype.setDisableAutoPan = function (disableAutoPan) { return cordovaInstance(this, "setDisableAutoPan", { "sync": true }, arguments); };
    Marker.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Marker.prototype.isVisible = function () { return cordovaInstance(this, "isVisible", { "sync": true }, arguments); };
    Marker.prototype.setTitle = function (title) { return cordovaInstance(this, "setTitle", { "sync": true }, arguments); };
    Marker.prototype.getTitle = function () { return cordovaInstance(this, "getTitle", { "sync": true }, arguments); };
    Marker.prototype.setSnippet = function (snippet) { return cordovaInstance(this, "setSnippet", { "sync": true }, arguments); };
    Marker.prototype.getSnippet = function () { return cordovaInstance(this, "getSnippet", { "sync": true }, arguments); };
    Marker.prototype.setOpacity = function (alpha) { return cordovaInstance(this, "setOpacity", { "sync": true }, arguments); };
    Marker.prototype.getOpacity = function () { return cordovaInstance(this, "getOpacity", { "sync": true }, arguments); };
    Marker.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Marker.prototype.setIconAnchor = function (x, y) { return cordovaInstance(this, "setIconAnchor", { "sync": true }, arguments); };
    Marker.prototype.setInfoWindowAnchor = function (x, y) { return cordovaInstance(this, "setInfoWindowAnchor", { "sync": true }, arguments); };
    Marker.prototype.isInfoWindowShown = function () { return cordovaInstance(this, "isInfoWindowShown", { "sync": true }, arguments); };
    Marker.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Marker.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Marker.prototype.setDraggable = function (draggable) { return cordovaInstance(this, "setDraggable", { "sync": true }, arguments); };
    Marker.prototype.isDraggable = function () { return cordovaInstance(this, "isDraggable", { "sync": true }, arguments); };
    Marker.prototype.setFlat = function (flat) { return cordovaInstance(this, "setFlat", { "sync": true }, arguments); };
    Marker.prototype.setIcon = function (icon) { return cordovaInstance(this, "setIcon", { "sync": true }, arguments); };
    Marker.prototype.setRotation = function (rotation) { return cordovaInstance(this, "setRotation", { "sync": true }, arguments); };
    Marker.prototype.getRotation = function () { return cordovaInstance(this, "getRotation", { "sync": true }, arguments); };
    return Marker;
}(BaseClass));
export { Marker };
var MarkerCluster = /** @class */ (function (_super) {
    __extends(MarkerCluster, _super);
    function MarkerCluster(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    MarkerCluster.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarker = function (marker) { return cordovaInstance(this, "addMarker", { "sync": true }, arguments); };
    MarkerCluster.prototype.addMarkers = function (markers) { return cordovaInstance(this, "addMarkers", { "sync": true }, arguments); };
    MarkerCluster.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    MarkerCluster.prototype.getMap = function () {
        return this._map;
    };
    return MarkerCluster;
}(BaseClass));
export { MarkerCluster };
var Polygon = /** @class */ (function (_super) {
    __extends(Polygon, _super);
    function Polygon(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polygon.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polygon.prototype.getMap = function () {
        return this._map;
    };
    Polygon.prototype.setPoints = function (points) { return cordovaInstance(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polygon.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polygon.prototype.setHoles = function (holes) { return cordovaInstance(this, "setHoles", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass.
     * You can modify the holes.
     * @return {BaseArrayClass<ILatLng[]>}
     */
    Polygon.prototype.getHoles = function () {
        var holes = this._objectInstance.getPoints();
        var results = new BaseArrayClass();
        holes.forEach(function (hole) {
            results.push(hole);
        });
        return results;
    };
    Polygon.prototype.setFillColor = function (fillColor) { return cordovaInstance(this, "setFillColor", { "sync": true }, arguments); };
    Polygon.prototype.getFillColor = function () { return cordovaInstance(this, "getFillColor", { "sync": true }, arguments); };
    Polygon.prototype.setStrokeColor = function (strokeColor) { return cordovaInstance(this, "setStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeColor = function () { return cordovaInstance(this, "getStrokeColor", { "sync": true }, arguments); };
    Polygon.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    Polygon.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    Polygon.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Polygon.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    Polygon.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Polygon.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Polygon.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Polygon.prototype.setStrokeWidth = function (strokeWidth) { return cordovaInstance(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.getStrokeWidth = function () { return cordovaInstance(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polygon.prototype.setGeodesic = function (geodesic) { return cordovaInstance(this, "setGeodesic", { "sync": true }, arguments); };
    Polygon.prototype.getGeodesic = function () { return cordovaInstance(this, "getGeodesic", { "sync": true }, arguments); };
    return Polygon;
}(BaseClass));
export { Polygon };
var Polyline = /** @class */ (function (_super) {
    __extends(Polyline, _super);
    function Polyline(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    Polyline.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    Polyline.prototype.getMap = function () {
        return this._map;
    };
    Polyline.prototype.setPoints = function (points) { return cordovaInstance(this, "setPoints", { "sync": true }, arguments); };
    /**
     * Returns an instance of the BaseArrayClass
     * You can modify the points.
     * @return {BaseArrayClass<ILatLng>}
     */
    Polyline.prototype.getPoints = function () {
        return new BaseArrayClass(this._objectInstance.getPoints());
    };
    Polyline.prototype.setGeoDesic = function (geoDesic) { return cordovaInstance(this, "setGeoDesic", { "sync": true }, arguments); };
    Polyline.prototype.getGeodesic = function () { return cordovaInstance(this, "getGeodesic", { "sync": true }, arguments); };
    Polyline.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    Polyline.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    Polyline.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    Polyline.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeColor = function (strokeColor) { return cordovaInstance(this, "setStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeColor = function () { return cordovaInstance(this, "getStrokeColor", { "sync": true }, arguments); };
    Polyline.prototype.setStrokeWidth = function (strokeWidth) { return cordovaInstance(this, "setStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.getStrokeWidth = function () { return cordovaInstance(this, "getStrokeWidth", { "sync": true }, arguments); };
    Polyline.prototype.setZIndex = function (index) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    Polyline.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    Polyline.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return Polyline;
}(BaseClass));
export { Polyline };
var TileOverlay = /** @class */ (function (_super) {
    __extends(TileOverlay, _super);
    function TileOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    TileOverlay.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    TileOverlay.prototype.getMap = function () {
        return this._map;
    };
    TileOverlay.prototype.setFadeIn = function (fadeIn) { return cordovaInstance(this, "setFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.getFadeIn = function () { return cordovaInstance(this, "getFadeIn", { "sync": true }, arguments); };
    TileOverlay.prototype.setZIndex = function (zIndex) { return cordovaInstance(this, "setZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.getZIndex = function () { return cordovaInstance(this, "getZIndex", { "sync": true }, arguments); };
    TileOverlay.prototype.setOpacity = function (opacity) { return cordovaInstance(this, "setOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.getOpacity = function () { return cordovaInstance(this, "getOpacity", { "sync": true }, arguments); };
    TileOverlay.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    TileOverlay.prototype.getTileSize = function () { return cordovaInstance(this, "getTileSize", { "sync": true }, arguments); };
    TileOverlay.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return TileOverlay;
}(BaseClass));
export { TileOverlay };
var KmlOverlay = /** @class */ (function (_super) {
    __extends(KmlOverlay, _super);
    function KmlOverlay(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        Object.defineProperty(self, 'camera', {
            value: _this._objectInstance.camera,
            writable: false
        });
        Object.defineProperty(self, 'kmlData', {
            value: _this._objectInstance.kmlData,
            writable: false
        });
        return _this;
    }
    KmlOverlay.prototype.getDefaultViewport = function () { return cordovaInstance(this, "getDefaultViewport", { "sync": true }, arguments); };
    KmlOverlay.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    KmlOverlay.prototype.getMap = function () { return this._map; };
    KmlOverlay.prototype.setVisible = function (visible) { return cordovaInstance(this, "setVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.getVisible = function () { return cordovaInstance(this, "getVisible", { "sync": true }, arguments); };
    KmlOverlay.prototype.setClickable = function (clickable) { return cordovaInstance(this, "setClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.getClickable = function () { return cordovaInstance(this, "getClickable", { "sync": true }, arguments); };
    KmlOverlay.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return KmlOverlay;
}(BaseClass));
export { KmlOverlay };
var DirectionsRenderer = /** @class */ (function (_super) {
    __extends(DirectionsRenderer, _super);
    function DirectionsRenderer(_map, _objectInstance) {
        var _this = _super.call(this, _objectInstance) || this;
        _this._map = _map;
        return _this;
    }
    DirectionsRenderer.prototype.getId = function () { return cordovaInstance(this, "getId", { "sync": true }, arguments); };
    /**
     * Returns the map instance.
     * @return {GoogleMap}
     */
    DirectionsRenderer.prototype.getMap = function () { return this._map; };
    DirectionsRenderer.prototype.setOptions = function (options) { return cordovaInstance(this, "setOptions", { "sync": true }, arguments); };
    DirectionsRenderer.prototype.setDirections = function (result) { return cordovaInstance(this, "setDirections", { "sync": true }, arguments); };
    DirectionsRenderer.prototype.getRouteIndex = function () { return cordovaInstance(this, "getRouteIndex", { "sync": true }, arguments); };
    DirectionsRenderer.prototype.getDirections = function () { return cordovaInstance(this, "getDirections", { "sync": true }, arguments); };
    DirectionsRenderer.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    return DirectionsRenderer;
}(BaseClass));
export { DirectionsRenderer };
export { ??0, ??1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1tYXBzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBMDdKQTtBQTE3SkEsT0FBTyxzR0FPTCxpQkFBaUIsRUFDakIsVUFBVSxFQUNYLE1BQU0sb0JBQW9CLENBQUM7QUFDNUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxJQUFNLDZCQUE2QixHQUFhO0lBQzlDLGNBQWM7SUFDZCwyQkFBMkI7SUFDM0IsR0FBRztDQUNKLENBQUM7O0lBdUJBLGdCQUFZLEdBQVcsRUFBRSxHQUFXO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUFNLEdBQU4sVUFBTyxLQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLEtBQUssS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUMxRCxDQUFDO0lBRUQseUJBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkJBQVUsR0FBVixVQUFXLFNBQWtCO1FBQzNCLFNBQVMsR0FBRyxTQUFTLElBQUksQ0FBQyxDQUFDO1FBRTNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7aUJBeERIOzs7O0lBMEVFLHNCQUFZLE1BQWtCO1FBQzVCLElBQUks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QWE7SUFPYiwwQ0FBYTtJQU1iLG1DQUFNOzZCQXA3SlI7RUE0M0p3QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlQ2hlY2ssXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG4gIGNoZWNrQXZhaWxhYmlsaXR5LFxuICBnZXRQcm9taXNlXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTOiBzdHJpbmdbXSA9IFtcbiAgJy5zaG93LXBhZ2UgIycsXG4gICdpb24tcm91dGVyLW91dGxldFttYWluXSAjJyxcbiAgJyMnXG5dO1xuXG5leHBvcnQgdHlwZSBNYXBUeXBlID1cbiAgJ01BUF9UWVBFX05PUk1BTCdcbiAgfCAnTUFQX1RZUEVfUk9BRE1BUCdcbiAgfCAnTUFQX1RZUEVfU0FURUxMSVRFJ1xuICB8ICdNQVBfVFlQRV9IWUJSSUQnXG4gIHwgJ01BUF9UWVBFX1RFUlJBSU4nXG4gIHwgJ01BUF9UWVBFX05PTkUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElMYXRMbmcge1xuICBsYXQ6IG51bWJlcjtcbiAgbG5nOiBudW1iZXI7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTGF0TG5nIGltcGxlbWVudHMgSUxhdExuZyB7XG5cbiAgbGF0OiBudW1iZXI7XG4gIGxuZzogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGxhdDogbnVtYmVyLCBsbmc6IG51bWJlcikge1xuICAgIHRoaXMubGF0ID0gbGF0O1xuICAgIHRoaXMubG5nID0gbG5nO1xuICB9XG5cbiAgZXF1YWxzKG90aGVyOiBJTGF0TG5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubGF0ID09PSBvdGhlci5sYXQgJiYgdGhpcy5sbmcgPT09IG90aGVyLmxuZztcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMubGF0ICsgJywnICsgdGhpcy5sbmc7XG4gIH1cblxuICB0b1VybFZhbHVlKHByZWNpc2lvbj86IG51bWJlcik6IHN0cmluZyB7XG4gICAgcHJlY2lzaW9uID0gcHJlY2lzaW9uIHx8IDY7XG5cbiAgICByZXR1cm4gdGhpcy5sYXQudG9GaXhlZChwcmVjaXNpb24pICsgJywnICsgdGhpcy5sbmcudG9GaXhlZChwcmVjaXNpb24pO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxhdExuZ0JvdW5kcyB7XG4gIG5vcnRoZWFzdDogSUxhdExuZztcbiAgc291dGh3ZXN0OiBJTGF0TG5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIExhdExuZ0JvdW5kcyBpbXBsZW1lbnRzIElMYXRMbmdCb3VuZHMge1xuXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm9ydGhlYXN0OiBJTGF0TG5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHNvdXRod2VzdDogSUxhdExuZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocG9pbnRzPzogSUxhdExuZ1tdKSB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBuZXcgKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkpLkxhdExuZ0JvdW5kcyhwb2ludHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRvIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSBmb3JtIFwibGF0X3N3LGxuZ19zdyxsYXRfbmUsbG5nX25lXCIgZm9yIHRoaXMgYm91bmRzLCB3aGVyZSBcInN3XCIgY29ycmVzcG9uZHMgdG8gdGhlIHNvdXRod2VzdCBjb3JuZXIgb2YgdGhlIGJvdW5kaW5nIGJveCwgd2hpbGUgXCJuZVwiIGNvcnJlc3BvbmRzIHRvIHRoZSBub3J0aGVhc3QgY29ybmVyIG9mIHRoYXQgYm94LlxuICAgKiBAcGFyYW0gcHJlY2lzaW9uIHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvVXJsVmFsdWUocHJlY2lzaW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRXh0ZW5kcyB0aGlzIGJvdW5kcyB0byBjb250YWluIHRoZSBnaXZlbiBwb2ludC5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGV4dGVuZChMYXRMbmc6IElMYXRMbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGxhdC9sbmcgaXMgaW4gdGhpcyBib3VuZHMuXG4gICAqIEBwYXJhbSBMYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBjb250YWlucyhMYXRMbmc6IElMYXRMbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29tcHV0ZXMgdGhlIGNlbnRlciBvZiB0aGlzIExhdExuZ0JvdW5kc1xuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDZW50ZXIoKTogTGF0TG5nIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBDb250cm9sT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBjb21wYXNzIG9uIG9yIG9mZi5cbiAgICovXG4gIGNvbXBhc3M/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgbXlMb2NhdGlvbiBidXR0b24gb24gb3Igb2ZmLiBJZiB0dXJucyBvbiB0aGlzIGJ1dHRvbiwgdGhlIGFwcGxpY2F0aW9uIGRpc3BsYXlzIGEgcGVybWlzc2lvbiBkaWFsb2cgdG8gb2J0YWluIHRoZSBnZW9sb2NhdGlvbiBkYXRhLlxuICAgKi9cbiAgbXlMb2NhdGlvbkJ1dHRvbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBteUxvY2F0aW9uIGNvbnRyb2woYmx1ZSBkb3QpIG9uIG9yIG9mZi4gSWYgdHVybnMgb24gdGhpcyBjb250cm9sLCB0aGUgYXBwbGljYXRpb24gZGlzcGxheXMgYSBwZXJtaXNzaW9uIGRpYWxvZyB0byBvYnRhaW4gdGhlIGdlb2xvY2F0aW9uIGRhdGEuXG4gICAqL1xuICBteUxvY2F0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIGluZG9vciBwaWNrZXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgaW5kb29yUGlja2VyPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogKipBbmRyb2lkKipcbiAgICogVHVybnMgdGhlIG1hcCB0b29sYmFyIG9uIG9yIG9mZi5cbiAgICovXG4gIG1hcFRvb2xiYXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAqKkFuZHJvaWQqKlxuICAgKiBUdXJucyB0aGUgem9vbSBjb250cm9sbGVyIG9uIG9yIG9mZi5cbiAgICovXG4gIHpvb20/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBHZXN0dXJlT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSBzY3JvbGwgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHNjcm9sbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSB0aWx0IGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICB0aWx0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHpvb20gZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHpvb20/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgcm90YXRlIGdlc3R1cmUgKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICByb3RhdGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBab29tT3B0aW9ucyB7XG4gIG1pblpvb20/OiBudW1iZXI7XG4gIG1heFpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwUGFkZGluZ09wdGlvbnMge1xuICBsZWZ0PzogbnVtYmVyO1xuICB0b3A/OiBudW1iZXI7XG4gIGJvdHRvbT86IG51bWJlcjtcbiAgcmlnaHQ/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwUHJlZmVyZW5jZU9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBNaW5pbXVtIGFuZCBtYXhpbXVtIHpvb20gbGV2ZWxzIGZvciB6b29taW5nIGdlc3R1cmVzLlxuICAgKi9cbiAgem9vbT86IEdvb2dsZU1hcFpvb21PcHRpb25zO1xuXG4gIC8qKlxuICAgKiBQYWRkaW5ncyBvZiBjb250cm9scy5cbiAgICovXG4gIHBhZGRpbmc/OiBHb29nbGVNYXBQYWRkaW5nT3B0aW9ucztcblxuICAvKipcbiAgICogVHVybnMgdGhlIDNEIGJ1aWxkaW5ncyBsYXllciBvbiBvciBvZmYuXG4gICAqL1xuICBidWlsZGluZz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZW4gZmFsc2UsIG1hcCBpY29ucyBhcmUgbm90IGNsaWNrYWJsZS4gQSBtYXAgaWNvbiByZXByZXNlbnRzIGEgcG9pbnQgb2YgaW50ZXJlc3QsIGFsc28ga25vd24gYXMgYSBQT0kuIEJ5IGRlZmF1bHQgbWFwIGljb25zIGFyZSBjbGlja2FibGUuXG4gICAqL1xuICBjbGlja2FibGVJY29ucz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGJvdW5kcyBsaW1pdCBmb3IgdXNlciBwYW5uaW5nIGdlc3R1cmUuXG4gICAqL1xuICByZXN0cmljdGlvbj86IElMYXRMbmdCb3VuZHMgfCBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcE9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBtYXBUeXBlIFtvcHRpb25zXVxuICAgKi9cbiAgbWFwVHlwZT86IE1hcFR5cGUgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGNvbnRyb2xzIFtvcHRpb25zXVxuICAgKi9cbiAgY29udHJvbHM/OiBHb29nbGVNYXBDb250cm9sT3B0aW9ucztcblxuICAvKipcbiAgICogZ2VzdHVyZXMgW29wdGlvbnNdXG4gICAqL1xuICBnZXN0dXJlcz86IEdvb2dsZU1hcEdlc3R1cmVPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBNYXAgc3R5bGVzIFtvcHRpb25zXVxuICAgKiBAcmVmIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3N0eWxlLXJlZmVyZW5jZVxuICAgKi9cbiAgc3R5bGVzPzogYW55W107XG5cbiAgLyoqXG4gICAqIEluaXRpYWwgY2FtZXJhIHBvc2l0aW9uIFtvcHRpb25zXVxuICAgKi9cbiAgY2FtZXJhPzogQ2FtZXJhUG9zaXRpb248YW55PjtcblxuICAvKipcbiAgICogcHJlZmVyZW5jZXMgW29wdGlvbnNdXG4gICAqL1xuICBwcmVmZXJlbmNlcz86IEdvb2dsZU1hcFByZWZlcmVuY2VPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFQb3NpdGlvbjxUPiB7XG4gIC8qKlxuICAgKiBUaGUgY2VudGVyIGxvY2F0aW9uIG9mIHRoZSBjYW1lcmEgdmlldy5cbiAgICpcbiAgICogW3VzYWdlIDFdXG4gICAqXG4gICAqIGxldCBjYW1lcmFQb3M6IENhbWVyYVBvc2l0aW9uPElMYXRMbmc+ID0ge1xuICAgKiAgIHRhcmdldDoge2xhdDogLi4uLCBsbmc6IC4uLn0sXG4gICAqICAgem9vbTogMTBcbiAgICogfVxuICAgKlxuICAgKiBbdXNhZ2UgMl0gVGhlIHpvb20gcHJvcGVydHkgaXMgaWdub3JlZCB3aGVuIHlvdSBzcGVjaWZ5IG11bHRpcGxlIHBvc2l0aW9uXG4gICAqXG4gICAqIGxldCBjYW1lcmFQb3M6IENhbWVyYVBvc2l0aW9uPElMYXRMbmdbXT4gPSB7XG4gICAqICAgdGFyZ2V0OiBbXG4gICAqICAgICAge2xhdDogLi4uLCBsbmc6IC4uLn0sXG4gICAqICAgICAge2xhdDogLi4uLCBsbmc6IC4uLn0sXG4gICAqICAgICAge2xhdDogLi4uLCBsbmc6IC4uLn1cbiAgICogICBdXG4gICAqIH1cbiAgICovXG4gIHRhcmdldD86IFQ7XG4gIC8qKlxuICAgKiBWaWV3IGFuZ2xlXG4gICAqL1xuICB0aWx0PzogbnVtYmVyO1xuICAvKipcbiAgICogWm9vbSBsZXZlbFxuICAgKi9cbiAgem9vbT86IG51bWJlcjtcbiAgLyoqXG4gICAqIE1hcCBvcmllbnRhdGlvblxuICAgKi9cbiAgYmVhcmluZz86IG51bWJlcjtcbiAgLyoqXG4gICAqIFRoZSBkdXJhdGlvbiBvZiBhbmltYXRpb24gaW4gbWlsbGlzZWNvbmRzXG4gICAqL1xuICBkdXJhdGlvbj86IG51bWJlcjtcbiAgLyoqXG4gICAqIENhbWVyYSBwYWRkaW5nIGluIHBpeGVsXG4gICAqL1xuICBwYWRkaW5nPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENpcmNsZU9wdGlvbnMge1xuICAvKipcbiAgICogQ2VudGVyIHBvc2l0aW9uIG9mIGNpcmNsZVxuICAgKi9cbiAgY2VudGVyOiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBSYWRpdXMgb2YgY2lyY2xlIGluIG1ldGVyXG4gICAqL1xuICByYWRpdXM6IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgaW5zaWRlIGNvbG9yIG9mIGNpcmNsZVxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlY2VpdmUgdGhlIENJUkNMRV9DTElDSyBldmVudFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdG8gZmFsc2UgdG8gaGlkZVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHZW9jb2RlclJlcXVlc3Qge1xuXG4gIC8qKlxuICAgKiBUaGUgYWRkcmVzcyBwcm9wZXJ0eSBvciBwb3NpdGlvbiBwcm9wZXJ0eSBpcyByZXF1aXJlZC5cbiAgICogWW91IGNhbiBub3Qgc3BlY2lmeSBib3RoIHByb3BlcnR5IGF0IHRoZSBzYW1lIHRpbWUuXG4gICAqXG4gICAqIFtnZW9jb2RpbmcgdXNhZ2UxXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIGFkZHJlc3M6IFwiTG9zIEFuZ2VsZXMsIENhbGlmb3JuaWEsIFVTQVwiXG4gICAqIH1cbiAgICpcbiAgICogW2dlb2NvZGluZyB1c2FnZTJdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgYWRkcmVzczogW1xuICAgKiAgICBcIkxvcyBBbmdlbGVzLCBDYWxpZm9ybmlhLCBVU0FcIixcbiAgICogICAgXCJTYW4gRnJhbmNpc2NvLCBDYWxpZm9ybmlhLCBVU0FcIixcbiAgICogICBdXG4gICAqIH1cbiAgICovXG4gIGFkZHJlc3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcblxuICAvKipcbiAgICpcbiAgICogW3JldmVyc2UtZ2VvY29kaW5nIHVzYWdlMV1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBwb3NpdGlvbjoge1wibGF0XCI6IDM3LjQyMTY1NSwgXCJsbmdcIjogLTEyMi4wODU2Mzd9XG4gICAqIH1cbiAgICpcbiAgICogW3JldmVyc2UtZ2VvY29kaW5nIHVzYWdlMl1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBwb3NpdGlvbjogW1xuICAgKiAgICB7XCJsYXRcIjogMzcuNDIxNjU1LCBcImxuZ1wiOiAtMTIyLjA4NTYzN30sXG4gICAqICAgIHtcImxhdFwiOiAzNy4zMzIsIFwibG5nXCI6IC0xMjIuMDMwNzgxfVxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgcG9zaXRpb24/OiBJTGF0TG5nIHwgSUxhdExuZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyUmVzdWx0IHtcbiAgYWRtaW5BcmVhPzogc3RyaW5nO1xuICBjb3VudHJ5Pzogc3RyaW5nO1xuICBjb3VudHJ5Q29kZT86IHN0cmluZztcbiAgZXh0cmE/OiB7XG4gICAgZmVhdHVyZU5hbWU/OiBzdHJpbmc7XG4gICAgbGluZXM/OiBzdHJpbmdbXTtcbiAgICBwZXJtaXNlcz86IHN0cmluZztcbiAgICBwaG9uZT86IHN0cmluZztcbiAgICB1cmw/OiBzdHJpbmdcbiAgfTtcbiAgbG9jYWxlPzogc3RyaW5nO1xuICBsb2NhbGl0eT86IHN0cmluZztcbiAgcG9zaXRpb24/OiBJTGF0TG5nO1xuICBwb3N0YWxDb2RlPzogc3RyaW5nO1xuICBzdWJBZG1pbkFyZWE/OiBzdHJpbmc7XG4gIHN1YkxvY2FsaXR5Pzogc3RyaW5nO1xuICBzdWJUaG9yb3VnaGZhcmU/OiBzdHJpbmc7XG4gIHRob3JvdWdoZmFyZT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYXRoRWxldmF0aW9uUmVxdWVzdCB7XG4gIHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+O1xuICBzYW1wbGVzOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9jYXRpb25FbGV2YXRpb25SZXF1ZXN0IHtcbiAgbG9jYXRpb25zOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPjtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIEVsZXZhdGlvblJlc3VsdCB7XG4gIGVsZXZhdGlvbjogbnVtYmVyO1xuICBsb2NhdGlvbjogSUxhdExuZztcbiAgcmVzb2x1dGlvbjogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNSZW5kZXJlck9wdGlvbnMge1xuXG4gIC8qKlxuICAgKiBkaXJlY3Rpb25zIFtEaXJlY3Rpb25zUmVzdWx0XVxuICAgKi9cbiAgZGlyZWN0aW9ucz86IERpcmVjdGlvbnNSZXN1bHQ7XG5cbiAgLyoqXG4gICAqIGRyYWdnYWJsZSBbb3B0aW9uc11cbiAgICovXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIGhpZGVSb3V0ZUxpc3QgW29wdGlvbnNdXG4gICAqL1xuICBoaWRlUm91dGVMaXN0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIEluZm9XaW5kb3cgaW4gd2hpY2ggdG8gcmVuZGVyIHRleHQgaW5mb3JtYXRpb24gd2hlbiBhIG1hcmtlciBpcyBjbGlja2VkLiBFeGlzdGluZyBpbmZvIHdpbmRvdyBjb250ZW50IHdpbGwgYmUgb3ZlcndyaXR0ZW4gYW5kIGl0cyBwb3NpdGlvbiBtb3ZlZC4gSWYgbm8gaW5mbyB3aW5kb3cgaXMgc3BlY2lmaWVkLCB0aGUgRGlyZWN0aW9uc1JlbmRlcmVyIHdpbGwgY3JlYXRlIGFuZCB1c2UgaXRzIG93biBpbmZvIHdpbmRvdy4gVGhpcyBwcm9wZXJ0eSB3aWxsIGJlIGlnbm9yZWQgaWYgc3VwcHJlc3NJbmZvV2luZG93cyBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIGluZm9XaW5kb3c/OiBIdG1sSW5mb1dpbmRvdztcblxuICAvKipcbiAgICogT3B0aW9ucyBmb3IgdGhlIG1hcmtlcnMuIEFsbCBtYXJrZXJzIHJlbmRlcmVkIGJ5IHRoZSBEaXJlY3Rpb25zUmVuZGVyZXIgd2lsbCB1c2UgdGhlc2Ugb3B0aW9ucy5cbiAgICovXG4gIG1hcmtlck9wdGlvbnM/OiBNYXJrZXJPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBwYW5lbCBbSFRNTEVsZW1lbnQgfCBzdHJpbmddXG4gICAqL1xuICBwYW5lbD86IEhUTUxFbGVtZW50IHwgc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBwb2x5bGluZU9wdGlvbnMgW1BvbHlsaW5lT3B0aW9uc11cbiAgICogT3B0aW9ucyBmb3IgdGhlIHBvbHlsaW5lcy4gQWxsIHBvbHlsaW5lcyByZW5kZXJlZCBieSB0aGUgRGlyZWN0aW9uc1JlbmRlcmVyIHdpbGwgdXNlIHRoZXNlIG9wdGlvbnMuXG4gICAqL1xuICBwb2x5bGluZU9wdGlvbnM/OiBQb2x5bGluZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQsIHRoZSBpbnB1dCBtYXAgaXMgY2VudGVyZWQgYW5kIHpvb21lZCB0byB0aGUgYm91bmRpbmcgYm94IG9mIHRoaXMgc2V0IG9mIGRpcmVjdGlvbnMuIElmIHRoaXMgb3B0aW9uIGlzIHNldCB0byB0cnVlLCB0aGUgdmlld3BvcnQgaXMgbGVmdCB1bmNoYW5nZWQsIHVubGVzcyB0aGUgbWFwJ3MgY2VudGVyIGFuZCB6b29tIHdlcmUgbmV2ZXIgc2V0LlxuICAgKi9cbiAgcHJlc2VydmVWaWV3cG9ydD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleCBvZiB0aGUgcm91dGUgd2l0aGluIHRoZSBEaXJlY3Rpb25zUmVzdWx0IG9iamVjdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMC5cbiAgICovXG4gIHJvdXRlSW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFN1cHByZXNzIHRoZSByZW5kZXJpbmcgb2YgaW5mbyB3aW5kb3dzLlxuICAgKi9cbiAgc3VwcHJlc3NJbmZvV2luZG93cz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN1cHByZXNzIHRoZSByZW5kZXJpbmcgb2YgbWFya2Vycy5cbiAgICovXG4gIHN1cHByZXNzTWFya2Vycz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFN1cHByZXNzIHRoZSByZW5kZXJpbmcgb2YgcG9seWxpbmVzLlxuICAgKi9cbiAgc3VwcHJlc3NQb2x5bGluZXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IHR5cGUgVHJhZmZpY01vZGVsID1cbiAgJ0JFU1RfR1VFU1MnIHxcbiAgJ09QVElNSVNUSUMnIHxcbiAgJ1BFU1NJTUlTVElDJztcblxuZXhwb3J0IHR5cGUgVHJhbnNpdE1vZGUgPVxuICAnQlVTJyB8XG4gICdSQUlMJyB8XG4gICdTVUJXQVknIHxcbiAgJ1RSQUlOJyB8XG4gICdUUkFNJztcblxuZXhwb3J0IHR5cGUgVHJhbnNpdFJvdXRlUHJlZmVyZW5jZSA9XG4gICdGRVdFUl9UUkFOU0ZFUlMnIHxcbiAgJ0xFU1NfV0FMS0lORyc7XG5cbmV4cG9ydCB0eXBlIFVuaXRTeXN0ZW0gPVxuICAnSU1QRVJJQUwnIHxcbiAgJ01FVFJJQyc7XG5cblxuZXhwb3J0IHR5cGUgVHJhdmVsTW9kZSA9XG4gICdCSUNZQ0xJTkcnIHxcbiAgJ0RSSVZJTkcnIHxcbiAgJ1RSQU5TSVQnIHxcbiAgJ1dBTEtJTkcnO1xuXG5leHBvcnQgdHlwZSBWZWhpY2xlVHlwZSA9XG4gICdCVVMnIHxcbiAgJ0NBQkxFX0NBUicgfFxuICAnQ09NTVVURVJfVFJBSU4nIHxcbiAgJ0ZFUlJZJyB8XG4gICdGVU5JQ1VMQVInIHxcbiAgJ0dPTkRPTEFfTElGVCcgfFxuICAnSEVBVllfUkFJTCcgfFxuICAnSElHSF9TUEVFRF9UUkFJTicgfFxuICAnSU5URVJDSVRZX0JVUycgfFxuICAnTUVUUk9fUkFJTCcgfFxuICAnTU9OT1JBSUwnIHxcbiAgJ09USEVSJyB8XG4gICdSQUlMJyB8XG4gICdTSEFSRV9UQVhJJyB8XG4gICdTVUJXQVknIHxcbiAgJ1RSQU0nIHxcbiAgJ1RST0xMRVlCVVMnO1xuXG5cbmV4cG9ydCBjb25zdCBUcmFmZmljTW9kZWxJZCA9IHtcbiAgQkVTVF9HVUVTUzogJ0JFU1RfR1VFU1MnLFxuICBPUFRJTUlTVElDOiAnT1BUSU1JU1RJQycsXG4gIFBFU1NJTUlTVElDOiAnUEVTU0lNSVNUSUMnXG59O1xuXG5leHBvcnQgY29uc3QgVHJhbnNpdE1vZGVJZCA9IHtcbiAgQlVTOiAnQlVTJyxcbiAgUkFJTDogJ1JBSUwnLFxuICBTVUJXQVk6ICdTVUJXQVknLFxuICBUUkFJTjogJ1RSQUlOJyxcbiAgVFJBTTogJ1RSQU0nXG59O1xuXG5leHBvcnQgY29uc3QgVHJhbnNpdFJvdXRlUHJlZmVyZW5jZUlkID0ge1xuICBGRVdFUl9UUkFOU0ZFUlM6ICdGRVdFUl9UUkFOU0ZFUlMnLFxuICBMRVNTX1dBTEtJTkc6ICdMRVNTX1dBTEtJTkcnXG59O1xuXG5leHBvcnQgY29uc3QgVW5pdFN5c3RlbUlkID0ge1xuICBJTVBFUklBTDogJ0lNUEVSSUFMJyxcbiAgTUVUUklDOiAnTUVUUklDJ1xufTtcblxuXG5leHBvcnQgY29uc3QgVHJhdmVsTW9kZUlkID0ge1xuICBCSUNZQ0xJTkc6ICdCSUNZQ0xJTkcnLFxuICBEUklWSU5HOiAnRFJJVklORycsXG4gIFRSQU5TSVQ6ICdUUkFOU0lUJyxcbiAgV0FMS0lORzogJ1dBTEtJTkcnXG59O1xuXG5leHBvcnQgY29uc3QgVmVoaWNsZVR5cGVJZCA9IHtcbiAgQlVTOiAnQlVTJyxcbiAgQ0FCTEVfQ0FSOiAnQ0FCTEVfQ0FSJyxcbiAgQ09NTVVURVJfVFJBSU46ICdDT01NVVRFUl9UUkFJTicsXG4gIEZFUlJZOiAnRkVSUlknLFxuICBGVU5JQ1VMQVI6ICdGVU5JQ1VMQVInLFxuICBHT05ET0xBX0xJRlQ6ICdHT05ET0xBX0xJRlQnLFxuICBIRUFWWV9SQUlMOiAnSEVBVllfUkFJTCcsXG4gIEhJR0hfU1BFRURfVFJBSU46ICdISUdIX1NQRUVEX1RSQUlOJyxcbiAgSU5URVJDSVRZX0JVUzogJ0lOVEVSQ0lUWV9CVVMnLFxuICBNRVRST19SQUlMOiAnTUVUUk9fUkFJTCcsXG4gIE1PTk9SQUlMOiAnTU9OT1JBSUwnLFxuICBPVEhFUjogJ09USEVSJyxcbiAgUkFJTDogJ1JBSUwnLFxuICBTSEFSRV9UQVhJOiAnU0hBUkVfVEFYSScsXG4gIFNVQldBWTogJ1NVQldBWScsXG4gIFRSQU06ICdUUkFNJyxcbiAgVFJPTExFWUJVUzogJ1RST0xMRVlCVVMnXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFBsYWNlIHtcbiAgbG9jYXRpb24/OiBJTGF0TG5nIHwgTGF0TG5nO1xuICBwbGFjZUlkPzogc3RyaW5nO1xuICBxdWVyeT86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3Rpb25zV2F5cG9pbnQge1xuICBsb2NhdGlvbj86IHN0cmluZyB8IElMYXRMbmcgfCBMYXRMbmcgfCBQbGFjZTtcbiAgc3RvcG92ZXI/OiBib29sZWFuO1xufVxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3Rpb25zUmVxdWVzdCB7XG4gIGF2b2lkRmVycmllcz86IGJvb2xlYW47XG4gIGF2b2lkSGlnaHdheXM/OiBib29sZWFuO1xuICBhdm9pZFRvbGxzPzogYm9vbGVhbjtcbiAgZGVzdGluYXRpb246IHN0cmluZyB8IElMYXRMbmcgfCBMYXRMbmcgfCBQbGFjZTtcbiAgZHJpdmluZ09wdGlvbnM/OiBEcml2aW5nT3B0aW9ucztcbiAgb3B0aW1pemVXYXlwb2ludHM/OiBib29sZWFuO1xuICBvcmlnaW46IHN0cmluZyB8IElMYXRMbmcgfCBMYXRMbmcgfCBQbGFjZTtcbiAgcHJvdmlkZVJvdXRlQWx0ZXJuYXRpdmVzPzogYm9vbGVhbjtcbiAgcmVnaW9uPzogc3RyaW5nO1xuICB0cmFuc2l0T3B0aW9ucz86IFRyYW5zaXRPcHRpb25zO1xuICB0cmF2ZWxNb2RlOiBUcmF2ZWxNb2RlIHwgc3RyaW5nO1xuICB1bml0U3lzdGVtPzogVW5pdFN5c3RlbSB8IHN0cmluZztcbiAgd2F5cG9pbnRzPzogRGlyZWN0aW9uc1dheXBvaW50W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJpdmluZ09wdGlvbnMge1xuICBkZXBhcnR1cmVUaW1lOiBEYXRlO1xuICB0cmFmZmljTW9kZWw/OiBUcmFmZmljTW9kZWw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpdE9wdGlvbnMge1xuICBhcnJpdmFsVGltZT86IERhdGU7XG4gIGRlcGFydHVyZVRpbWU/OiBEYXRlO1xuICBtb2Rlcz86IFRyYW5zaXRNb2RlW107XG4gIHJvdXRpbmdQcmVmZXJlbmNlPzogVHJhbnNpdFJvdXRlUHJlZmVyZW5jZTtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpdEZhcmUge1xuICBjdXJyZW5jeTogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNSZXN1bHQge1xuICByZXF1ZXN0PzogRGlyZWN0aW9uc1JlcXVlc3Q7XG4gIGdlb2NvZGVkX3dheXBvaW50czogRGlyZWN0aW9uc0dlb2NvZGVkV2F5cG9pbnRbXTtcbiAgcm91dGVzOiBEaXJlY3Rpb25zUm91dGVbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3Rpb25zR2VvY29kZWRXYXlwb2ludCB7XG4gIHBhcnRpYWxfbWF0Y2g6IGJvb2xlYW47XG4gIHBsYWNlX2lkOiBzdHJpbmc7XG4gIHR5cGVzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3Rpb25zUm91dGUge1xuICBib3VuZHM6IElMYXRMbmdCb3VuZHM7XG4gIGNvcHlyaWdodHM6IHN0cmluZztcbiAgZmFyZTogVHJhbnNpdEZhcmU7XG4gIGxlZ3M6IERpcmVjdGlvbnNMZWdbXTtcbiAgb3ZlcnZpZXdfcGF0aDogSUxhdExuZ1tdO1xuICBvdmVydmlld19wb2x5bGluZTogc3RyaW5nO1xuICB3YXJuaW5nczogc3RyaW5nW107XG4gIHdheXBvaW50X29yZGVyOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEaXJlY3Rpb25zTGVnIHtcbiAgYXJyaXZhbF90aW1lOiBUaW1lO1xuICBkZXBhcnR1cmVfdGltZTogVGltZTtcbiAgZGlzdGFuY2U6IERpc3RhbmNlO1xuICBkdXJhdGlvbjogRHVyYXRpb247XG4gIGR1cmF0aW9uX2luX3RyYWZmaWM6IER1cmF0aW9uO1xuICBlbmRfYWRkcmVzczogc3RyaW5nO1xuICBlbmRfbG9jYXRpb246IElMYXRMbmc7XG4gIHN0YXJ0X2FkZHJlc3M6IHN0cmluZztcbiAgc3RhcnRfbG9jYXRpb246IElMYXRMbmc7XG4gIHN0ZXBzOiBEaXJlY3Rpb25zU3RlcFtdO1xuICB2aWFfd2F5cG9pbnRzOiBJTGF0TG5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgdGltZV96b25lOiBzdHJpbmc7XG4gIHZhbHVlOiBEYXRlO1xufVxuZXhwb3J0IGludGVyZmFjZSBEaXN0YW5jZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRHVyYXRpb24ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNTdGVwIHtcbiAgZGlzdGFuY2U6IERpc3RhbmNlO1xuICBkdXJhdGlvbjogRHVyYXRpb247XG4gIGVuZF9sb2NhdGlvbjogSUxhdExuZztcbiAgaW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XG4gIHBhdGg6IElMYXRMbmdbXTtcbiAgc3RhcnRfbG9jYXRpb246IElMYXRMbmc7XG4gIHN0ZXBzOiBEaXJlY3Rpb25zU3RlcFtdO1xuICB0cmFuc2l0OiBUcmFuc2l0RGV0YWlscztcbiAgdHJhdmVsX21vZGU6IFRyYXZlbE1vZGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpdERldGFpbHMge1xuICBhcnJpdmFsX3N0b3A6IFRyYW5zaXRTdG9wO1xuICBhcnJpdmFsX3RpbWU6IFRpbWU7XG4gIGRlcGFydHVyZV9zdG9wOiBUcmFuc2l0U3RvcDtcbiAgZGVwYXJ0dXJlX3RpbWU6IFRpbWU7XG4gIGhlYWRzaWduOiBzdHJpbmc7XG4gIGhlYWR3YXk6IG51bWJlcjtcbiAgbGluZTogVHJhbnNpdExpbmU7XG4gIG51bV9zdG9wczogbnVtYmVyO1xuICB0cmlwX3Nob3J0X25hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0U3RvcCB7XG4gIGxvY2F0aW9uOiBJTGF0TG5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVHJhbnNpdExpbmUge1xuICBhZ2VuY2llczogVHJhbnNpdEFnZW5jeVtdO1xuICBjb2xvcjogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgc2hvcnRfbmFtZTogc3RyaW5nO1xuICB0ZXh0X2NvbG9yOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xuICB2ZWhpY2xlOiBUcmFuc2l0VmVoaWNsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0QWdlbmN5IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0VmVoaWNsZSB7XG4gIGljb246IHN0cmluZztcbiAgbG9jYWxfaWNvbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFZlaGljbGVUeXBlO1xufVxuZXhwb3J0IGludGVyZmFjZSBHcm91bmRPdmVybGF5T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBVUkwgb2Ygb3ZlcmxheVxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEJvdW5kcywgYXJyYXkgb2YgSUxhdExuZ1xuICAgKi9cbiAgYm91bmRzOiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIHJlY2VpdmUgdGhlIEdST1VORF9PVkVSTEFZX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBoaWRlXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogT3BhY2l0eS4gRnJvbSAwLjAgdG8gMS4wIC5cbiAgICovXG4gIG9wYWNpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEJlYXJpbmdcbiAgICovXG4gIGJlYXJpbmc/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJJY29uIHtcbiAgdXJsPzogc3RyaW5nO1xuICBzaXplPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBpY29uIGltYWdlIHVybCBvciBwcm9wZXJ0aWVzLiBBbHNvIHlvdSBjYW4gc3BlY2lmeSBIVE1MIENvbG9yIHZhbHVlcy4gQWx0ZXJuYXRpdmVseSB5b3UgY2FuIHNwZWNpZnkgdGhlIGltYWdlIGFzIEJhc2U2NFxuICAgKi9cbiAgaWNvbj86IGFueTtcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGluZm9XaW5kb3cuXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHNuaXBwZXQgb2YgdGhlIGluZm9XaW5kb3cuXG4gICAqL1xuICBzbmlwcGV0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIHBvc2l0aW9uOiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiAgU3BlY2lmeSB0aGUgYW5jaG9yIG9mIHRoZSBJbmZvV2luZG93XG4gICAqL1xuICBpbmZvV2luZG93QW5jaG9yPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFx0U3BlY2lmeSB0aGUgYW5jaG9yIG9mIGljb24gaW1hZ2VcbiAgICovXG4gIGFuY2hvcj86IG51bWJlcltdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBlbmFibGUgdG8gZHJhZyB0aGUgbWFya2VyLiAoRGVmYXVsdDogZmFsc2UpIEltcG9ydGFudCEgRHJhZyBzdGFydHMgYWZ0ZXIgbG9uZyBwcmVzc2VkIG9uIHRoZSBtYXJrZXIuXG4gICAqL1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gdXNlIGEgZmxhdCBtYXJrZXIuIChEZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGZsYXQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAgU2V0IHJvdGF0aW9uIGFuZ2xlLiAoRGVmYXVsdDogMClcbiAgICovXG4gIHJvdGF0aW9uPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gaGlkZS4gKERlZmF1bHQ6IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgb3B0aW9ucyBmb3IgdGl0bGUuIFRoaXMgcHJvcGVydHkgd29yayBmb3Igbm9ybWFsIEluZm9XaW5kb3cuXG4gICAqL1xuICBzdHlsZXM/OiBhbnk7XG5cbiAgLyoqXG4gICAqIFdoaWNoIGFuaW1hdGlvbiB0byBwbGF5IHdoZW4gbWFya2VyIGlzIGFkZGVkIHRvIGEgbWFwLlxuICAgKi9cbiAgYW5pbWF0aW9uPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIaWdoZXIgekluZGV4IHZhbHVlIG92ZXJsYXlzIHdpbGwgYmUgZHJhd24gb24gdG9wIG9mIGxvd2VyIHpJbmRleCB2YWx1ZSB0aWxlIGxheWVycyBhbmQgb3ZlcmxheXMuXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgYXV0byBwYW5uaW5nIHdoZW4gdGhlIG1hcmtlciBpcyBjbGlja2VkLlxuICAgKi9cbiAgZGlzYWJsZUF1dG9QYW4/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckxhYmVsIHtcbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHVzZSBib2xkIGZvbnRcbiAgICovXG4gIGJvbGQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZm9udCBzaXplIGluIHBpeGVsXG4gICAqL1xuICBmb250U2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogY29sb3Igc3RyaW5nc1xuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHVzZSBpdGFsaWMgZm9udFxuICAgKi9cbiAgaXRhbGljPzogYm9vbGVhbjtcblxufVxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJDbHVzdGVySWNvbiB7XG4gIC8qKlxuICAgKiBNaW5pbXVtIG51bWJlciBvZiBjbHVzdGVyaW5nXG4gICAqL1xuICBtaW4/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGNsdXN0ZXJpbmdcbiAgICovXG4gIG1heD86IG51bWJlcjtcblxuICAvKipcbiAgICogYW5jaG9yIHBvc2l0aW9uIG9mIHRoZSBtYXJrZXJcbiAgICovXG4gIGFuY2hvcj86IGFueTtcblxuICAvKipcbiAgICogbGFiZWwgb3B0aW9uIGZvciBjbHVzdGVyZWQgbWFya2VyXG4gICAqL1xuICBsYWJlbD86IE1hcmtlckxhYmVsO1xuXG4gIC8qKlxuICAgKiBpY29uIHVybFxuICAgKi9cbiAgdXJsOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIGljb24gc2l6ZVxuICAgKi9cbiAgc2l6ZT86IHtcbiAgICB3aWR0aD86IG51bWJlcjtcbiAgICBoZWlnaHQ/OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyQ2x1c3Rlck9wdGlvbnMge1xuICAvKipcbiAgICogTWF4aW11bSB6b29tIGxldmVsIG9mIGNsdXN0ZXJpbmdcbiAgICogKGRlZmF1bHQ6IDE1LCBtYXg6IDE4KVxuICAgKi9cbiAgbWF4Wm9vbUxldmVsPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEcmF3IGEgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgYWxsIGxvY2F0aW9ucyBvZiBjbHVzdGVyZWQgd2hlbiB5b3UgdGFwIG9uIGEgY2x1c3RlciBtYXJrZXIuXG4gICAqIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgYm91bmRzRHJhdz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFBvc2l0aW9uIGxpc3RcbiAgICogW1xuICAgKiAgIHt0aXRsZTogXCJzdG9yZSBBXCIsIHBvc2l0aW9uOiB7bGF0OiAuLi4sIGxuZzogLi4ufX0sXG4gICAqICAge3RpdGxlOiBcInN0b3JlIEJcIiwgcG9zaXRpb246IHtsYXQ6IC4uLiwgbG5nOiAuLi59fSxcbiAgICogICB7dGl0bGU6IFwic3RvcmUgQ1wiLCBwb3NpdGlvbjoge2xhdDogLi4uLCBsbmc6IC4uLn19XG4gICAqIF1cbiAgICovXG4gIG1hcmtlcnM6IE1hcmtlck9wdGlvbnNbXTtcblxuICAvKipcbiAgICogQ29uZGl0aW9ucyBvZiBjbHVzdGVyaW5nXG4gICAqIFtcbiAgICogICB7aWNvbjogXCJhc3NldHMvc21hbGwucG5nXCIsIG1pbjogMiwgbWF4OiAxMH0sXG4gICAqICAge2ljb246IFwiYXNzZXRzL21pZGRsZS5wbmdcIiwgbWluOiAxMSwgbWF4OiAzMH0sXG4gICAqICAge2ljb246IFwiYXNzZXRzL2xhcmdlLnBuZ1wiLCBtaW46IDMxfVxuICAgKiBdXG4gICAqL1xuICBpY29uczogTWFya2VyQ2x1c3Rlckljb25bXTtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNeUxvY2F0aW9uIHtcbiAgbGF0TG5nPzogTGF0TG5nO1xuICBlbGFwc2VkUmVhbHRpbWVOYW5vcz86IGFueTtcbiAgdGltZT86IHN0cmluZztcbiAgYWNjdXJhY3k/OiBhbnk7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIGFsdGl0dWRlPzogYW55O1xuICBzcGVlZD86IG51bWJlcjtcbiAgcHJvdmlkZXI/OiBhbnk7XG4gIGhhc2hDb2RlPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb25PcHRpb25zIHtcbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHRyeSB0byB1c2UgR1BTIG1hbmRhdG9yeS5cbiAgICogSW4gZmFsc2UsIHRoZSBwbHVnaW4gdHJ5IHRvIHVzZSBHUFMgYW5kIG5ldHdvcmsuXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGVuYWJsZUhpZ2hBY2N1cmFjeT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWdvbk9wdGlvbnMge1xuICAvKipcbiAgICogUGFzcyBJTGF0TG5nW10gdG8gc3BlY2lmeSB0aGUgdmVydGl4ZXMuXG4gICAqIFlvdSBuZWVkIHRvIGNvbnRhaW4gdHdvIHBvaW50cyBhdCBsZWFzdC5cbiAgICovXG4gIHBvaW50czogSUxhdExuZ1tdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBkcmF3IHRoZSBjdXJ2ZSBwb2x5Z29uIGJhc2VkIG9uIHRoZSBlYXJ0aFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBnZW9kZXNpYz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIGNvbG9yXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIHN0cm9rZUNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbFxuICAgKi9cbiAgc3Ryb2tlV2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgaW5zaWRlIGNvbG9yIG9mIHBvbHlnb25cbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gY3JlYXRlIGludmlzaWJsZSBwb2x5Z29uXG4gICAqIChJbnZpc2libGUgcG9seWdvbiBpcyBub3QgY2xpY2thYmxlLCBkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogUGFzcyBJTGF0TG5nW11bXSB0byBjcmVhdGUgaG9sZXMgaW4gcG9seWdvblxuICAgKi9cbiAgaG9sZXM/OiBJTGF0TG5nW11bXTtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gcmVjZWl2ZSB0aGUgUE9MWUdPTl9DTElDSyBldmVudFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvbHlsaW5lT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXSB0byBzcGVjaWZ5IHRoZSB2ZXJ0aXhlcy5cbiAgICogWW91IG5lZWQgdG8gY29udGFpbiB0d28gcG9pbnRzIGF0IGxlYXN0LlxuICAgKi9cbiAgcG9pbnRzOiBJTGF0TG5nW10gfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHBvbHlsaW5lXG4gICAqIChJbnZpc2libGUgcG9seWxpbmUgaXMgbm90IGNsaWNrYWJsZSwgZGVmYXVsdCB0cnVlKVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGRyYXcgdGhlIGN1cnZlIHBvbHlsaW5lIGJhc2VkIG9uIHRoZSBlYXJ0aFxuICAgKiAoZGVmYXVsdDogZmFsc2UpXG4gICAqL1xuICBnZW9kZXNpYz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIGNvbG9yXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIGNvbG9yPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSB3aWR0aCBpbiBwaXhlbFxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIEhpZXJhcmNoeSB6LWluZGV4XG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHJlY2VpdmUgdGhlIFBPTFlMSU5FX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGlsZU92ZXJsYXlPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoaXMgY2FsbGJhY2sgbXVzdCBSZXR1cm5zIHN0cmluZyBvZiBpbWFnZSBVUkwsIG9yIFByb21pc2UuXG4gICAqIElmIG5vIHRpbGUsIHlvdSBuZWVkIHRvIFJldHVybnMgbnVsbC5cbiAgICovXG4gIC8vIGdldFRpbGU6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgem9vbTogbnVtYmVyKSA9PiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz47XG4gIGdldFRpbGU6ICh4OiBudW1iZXIsIHk6IG51bWJlciwgem9vbTogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHRpbGVsYXllclxuICAgKiAoZGVmYXVsdCB0cnVlKVxuICAgKi9cbiAgdmlzaWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEhpZXJhcmNoeSB6LWluZGV4IG9mIHRpbGVsYXllclxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0OiA1MTJweFxuICAgKi9cbiAgdGlsZVNpemU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQ6IDEuMFxuICAgKi9cbiAgb3BhY2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gZGlzcGxheSB0aGUgdGlsZSBpbmZvcm1hdGlvbiBvdmVyIHRoZSB0aWxlIGltYWdlcy5cbiAgICovXG4gIGRlYnVnPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb0RhdGFVcmxPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRydWUgaWYgeW91IHdhbnQgZ2V0IGhpZ2ggcXVhbGl0eSBtYXAgc25hcHNob3RcbiAgICovXG4gIHVuY29tcHJlc3M/OiBib29sZWFuO1xufVxuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgbWFwLmFkZEttbE92ZXJsYXkoKSBtZXRob2RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBLbWxPdmVybGF5T3B0aW9ucyB7XG4gIC8qXG4gICAqIFRoZSB1cmwgb3IgZmlsZSBwYXRoIG9mIEtNTCBmaWxlLiBLTVogZm9ybWF0IGlzIG5vdCBzdXBwb3J0ZWQuXG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKlxuICAgKiBEbyBub3QgZmlyZSB0aGUgS01MX0NMSUNLIGV2ZW50IGlmIGZhbHNlLiBEZWZhdWx0IGlzIHRydWUuXG4gICAqL1xuICBjbGlja2FibGU/OiBib29sZWFuO1xuXG4gIC8qXG4gICAqIERvIG5vdCBkaXNwbGF5IHRoZSBkZWZhdWx0IGluZm9XaW5kb3cgaWYgdHJ1ZS4gRGVmYXVsdCBpcyBmYWxzZS5cbiAgICovXG4gIHN1cHByZXNzSW5mb1dpbmRvd3M/OiBib29sZWFuO1xuXG4gIC8qXG4gICAqIGljb24gb3B0aW9uXG4gICAqL1xuICBpY29uPzogc3RyaW5nIHwgTWFya2VySWNvbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cblxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIEVudmlyb25tZW50LnNldEVudigpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRW52T3B0aW9ucyB7XG4gIC8qXG4gICAqIEFQSSBrZXkgZm9yIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHYzIGZvciBgaHR0cHM6YCAob24gc2VydmVyKVxuICAgKi9cbiAgQVBJX0tFWV9GT1JfQlJPV1NFUl9SRUxFQVNFPzogc3RyaW5nO1xuXG4gIC8qXG4gICAqIEFQSSBrZXkgZm9yIEdvb2dsZSBNYXBzIEphdmFTY3JpcHQgQVBJIHYzIGZvciBgaHR0cDpgIChsb2NhbCBkZXZlbG9wbWVudClcbiAgICovXG4gIEFQSV9LRVlfRk9SX0JST1dTRVJfREVCVUc/OiBzdHJpbmc7XG5cbiAgLypcbiAgICogQSBwcm94eSBzZXJ2ZXIgVVJMIGZvciBHb29nbGUgV2ViIFNlcnZpY2VzXG4gICAqL1xuICBSRVNUX0FQSV9QUk9YWV9TRVJWRVI/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZVxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFZpc2libGVSZWdpb24gaW1wbGVtZW50cyBJTGF0TG5nQm91bmRzIHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICAvKipcbiAgICogVGhlIG5vcnRoZWFzdCBvZiB0aGUgYm91bmRzIHRoYXQgY29udGFpbnMgdGhlIGZhckxlZnQsIGZhclJpZ2h0LCBuZWFyTGVmdCBhbmQgbmVhclJpZ2h0LlxuICAgKiBTaW5jZSB0aGUgbWFwIHZpZXcgaXMgYWJsZSB0byByb3RhdGUsIHRoZSBmYXJSaWdodCBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIG5vcnRoZWFzdC5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm9ydGhlYXN0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc291dGh3ZXN0IG9mIHRoZSBib3VuZHMgdGhhdCBjb250YWlucyB0aGUgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0IGFuZCBuZWFyUmlnaHQuXG4gICAqIFNpbmNlIHRoZSBtYXAgdmlldyBpcyBhYmxlIHRvIHJvdGF0ZSwgdGhlIG5lYXJMZWZ0IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgc291dGh3ZXN0LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzb3V0aHdlc3Q6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmYXJMZWZ0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgdG9wLWxlZnQgb2YgdGhlIG1hcCB2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBmYXJMZWZ0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmFyUmlnaHQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSB0b3AtcmlnaHQgb2YgdGhlIG1hcCB2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBmYXJSaWdodDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIG5lYXJMZWZ0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgYm90dG9tLWxlZnQgb2YgdGhlIG1hcCB2aWV3LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuZWFyTGVmdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIG5lYXJSaWdodCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIGJvdHRvbS1yaWdodCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5lYXJSaWdodDogSUxhdExuZztcblxuICAvKipcbiAgICogY29uc3RhbnQgdmFsdWUgOiBgVmlzaWJsZVJlZ2lvbmBcbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHNvdXRod2VzdDogTGF0TG5nQm91bmRzLCBub3J0aGVhc3Q6IExhdExuZ0JvdW5kcywgZmFyTGVmdDogSUxhdExuZywgZmFyUmlnaHQ6IElMYXRMbmcsIG5lYXJMZWZ0OiBJTGF0TG5nLCBuZWFyUmlnaHQ6IElMYXRMbmcpIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKSkuVmlzaWJsZVJlZ2lvbihzb3V0aHdlc3QsIG5vcnRoZWFzdCwgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0LCBuZWFyUmlnaHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRvIHN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSBmb3JtIFwibGF0X3N3LGxuZ19zdyxsYXRfbmUsbG5nX25lXCIgZm9yIHRoaXMgYm91bmRzLCB3aGVyZSBcInN3XCIgY29ycmVzcG9uZHMgdG8gdGhlIHNvdXRod2VzdCBjb3JuZXIgb2YgdGhlIGJvdW5kaW5nIGJveCwgd2hpbGUgXCJuZVwiIGNvcnJlc3BvbmRzIHRvIHRoZSBub3J0aGVhc3QgY29ybmVyIG9mIHRoYXQgYm94LlxuICAgKiBAcGFyYW0gcHJlY2lzaW9uIHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvVXJsVmFsdWUocHJlY2lzaW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIGxhdC9sbmcgaXMgaW4gdGhpcyBib3VuZHMuXG4gICAqIEBwYXJhbSBMYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBjb250YWlucyhMYXRMbmc6IElMYXRMbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IFN0cmVldFZpZXdTb3VyY2UgPSB7XG4gIERFRkFVTFQ6ICdERUZBVUxUJyxcbiAgT1VURE9PUjogJ09VVERPT1InXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNldFBvdk9wdGlvbiB7XG4gIGJlYXJpbmc6IG51bWJlcjtcbiAgcmFkaXVzPzogbnVtYmVyO1xuICB6b29tPzogbnVtYmVyO1xuICBkdXJhdGlvbjogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3U2V0UG9zaXRpb25PcHRpb24ge1xuICB0YXJnZXQ6IElMYXRMbmc7XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcmFkaXVzPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3Q2FtZXJhUGFubyB7XG4gIHRhcmdldDogc3RyaW5nO1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICB0aWx0PzogbnVtYmVyO1xuICB6b29tPzogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3Q2FtZXJhUG9zaXRpb24ge1xuICB0YXJnZXQ6IElMYXRMbmc7XG4gIHNvdXJjZT86IHN0cmluZztcbiAgcmFkaXVzPzogbnVtYmVyO1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICB0aWx0PzogbnVtYmVyO1xuICB6b29tPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDb250cm9sT3B0aW9ucyB7XG4gIHN0cmVldE5hbWVzPzogYm9vbGVhbjtcbiAgbmF2aWdhdGlvbj86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdHZXN0dXJlT3B0aW9ucyB7XG4gIHBhbm5pbmc/OiBib29sZWFuO1xuICB6b29taW5nPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTdHJlZXRWaWV3T3B0aW9ucyB7XG5cbiAgLypcbiAgICogY2FtZXJhOiBbb3B0aW9uc10gSW5pdGlhbCBjYW1lcmEgcG9zaXRpb25cbiAgICovXG4gIGNhbWVyYT86IFN0cmVldFZpZXdDYW1lcmFQYW5vIHwgU3RyZWV0Vmlld0NhbWVyYVBvc2l0aW9uO1xuXG4gIC8qKlxuICAgKiBjb250cm9scyBbb3B0aW9uc11cbiAgICovXG4gIGNvbnRyb2xzPzogU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBnZXN0dXJlcyBbb3B0aW9uc11cbiAgICovXG4gIGdlc3R1cmVzPzogU3RyZWV0Vmlld0dlc3R1cmVPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgZXh0cmEgcHJvcGVydGllcyBmb3IgZnV0dXJlIHVwZGF0ZXNcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdOYXZpZ2F0aW9uTGluayB7XG5cbiAgLyoqXG4gICAqIHBhbm9yYW1hIElkXG4gICAqL1xuICBwYW5vSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogYmVhcmluZyAoaGVhZGluZylcbiAgICovXG4gIGJlYXJpbmc6IG51bWJlcjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdMb2NhdGlvbiB7XG5cbiAgbGF0TG5nOiBJTGF0TG5nO1xuXG4gIGxpbmtzOiBTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXTtcblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIFlvdSBjYW4gbGlzdGVuIHRvIHRoZXNlIGV2ZW50cyB3aGVyZSBhcHByb3ByaWF0ZVxuICovXG5leHBvcnQgY29uc3QgR29vZ2xlTWFwc0V2ZW50ID0ge1xuICBNQVBfUkVBRFk6ICdtYXBfcmVhZHknLFxuICBNQVBfQ0xJQ0s6ICdtYXBfY2xpY2snLFxuICBNQVBfTE9OR19DTElDSzogJ21hcF9sb25nX2NsaWNrJyxcbiAgUE9JX0NMSUNLOiAncG9pX2NsaWNrJyxcbiAgTVlfTE9DQVRJT05fQ0xJQ0s6ICdteV9sb2NhdGlvbl9jbGljaycsXG4gIE1ZX0xPQ0FUSU9OX0JVVFRPTl9DTElDSzogJ215X2xvY2F0aW9uX2J1dHRvbl9jbGljaycsXG4gIElORE9PUl9CVUlMRElOR19GT0NVU0VEOiAnaW5kb29yX2J1aWxkaW5nX2ZvY3VzZWQnLFxuICBJTkRPT1JfTEVWRUxfQUNUSVZBVEVEOiAnaW5kb29yX2xldmVsX2FjdGl2YXRlZCcsXG4gIENBTUVSQV9NT1ZFX1NUQVJUOiAnY2FtZXJhX21vdmVfc3RhcnQnLFxuICBDQU1FUkFfTU9WRTogJ2NhbWVyYV9tb3ZlJyxcbiAgQ0FNRVJBX01PVkVfRU5EOiAnY2FtZXJhX21vdmVfZW5kJyxcbiAgT1ZFUkxBWV9DTElDSzogJ292ZXJsYXlfY2xpY2snLFxuICBQT0xZR09OX0NMSUNLOiAncG9seWdvbl9jbGljaycsXG4gIFBPTFlMSU5FX0NMSUNLOiAncG9seWxpbmVfY2xpY2snLFxuICBDSVJDTEVfQ0xJQ0s6ICdjaXJjbGVfY2xpY2snLFxuICBHUk9VTkRfT1ZFUkxBWV9DTElDSzogJ2dyb3VuZG92ZXJsYXlfY2xpY2snLFxuICBJTkZPX0NMSUNLOiAnaW5mb19jbGljaycsXG4gIElORk9fTE9OR19DTElDSzogJ2luZm9fbG9uZ19jbGljaycsXG4gIElORk9fQ0xPU0U6ICdpbmZvX2Nsb3NlJyxcbiAgSU5GT19PUEVOOiAnaW5mb19vcGVuJyxcbiAgTUFSS0VSX0NMSUNLOiAnbWFya2VyX2NsaWNrJyxcbiAgTUFSS0VSX0RSQUc6ICdtYXJrZXJfZHJhZycsXG4gIE1BUktFUl9EUkFHX1NUQVJUOiAnbWFya2VyX2RyYWdfc3RhcnQnLFxuICBNQVJLRVJfRFJBR19FTkQ6ICdtYXJrZXJfZHJhZ19lbmQnLFxuICBNQVBfRFJBRzogJ21hcF9kcmFnJyxcbiAgTUFQX0RSQUdfU1RBUlQ6ICdtYXBfZHJhZ19zdGFydCcsXG4gIE1BUF9EUkFHX0VORDogJ21hcF9kcmFnX2VuZCcsXG4gIEtNTF9DTElDSzogJ2ttbF9jbGljaycsXG4gIFBBTk9SQU1BX1JFQURZOiAncGFub3JhbWFfcmVhZHknLFxuICBQQU5PUkFNQV9DQU1FUkFfQ0hBTkdFOiAncGFub3JhbWFfY2FtZXJhX2NoYW5nZScsXG4gIFBBTk9SQU1BX0xPQ0FUSU9OX0NIQU5HRTogJ3Bhbm9yYW1hX2xvY2F0aW9uX2NoYW5nZScsXG4gIFBBTk9SQU1BX0NMSUNLOiAncGFub3JhbWFfY2xpY2snLFxuICBESVJFQ1RJT05TX0NIQU5HRUQ6ICdkaXJlY3Rpb25zX2NoYW5nZWQnXG59O1xuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEdvb2dsZU1hcHNBbmltYXRpb24gPSB7XG4gIEJPVU5DRTogJ0JPVU5DRScsXG4gIERST1A6ICdEUk9QJ1xufTtcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGlvbklkID0ge1xuIEJPVU5DRTogJ0JPVU5DRScsXG4gRFJPUDogJ0RST1AnXG59O1xuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjb25zdCBHb29nbGVNYXBzTWFwVHlwZUlkID0ge1xuICBOT1JNQUw6ICdNQVBfVFlQRV9OT1JNQUwnLFxuICBST0FETUFQOiAnTUFQX1RZUEVfTk9STUFMJyxcbiAgU0FURUxMSVRFOiAnTUFQX1RZUEVfU0FURUxMSVRFJyxcbiAgSFlCUklEOiAnTUFQX1RZUEVfSFlCUklEJyxcbiAgVEVSUkFJTjogJ01BUF9UWVBFX1RFUlJBSU4nLFxuICBOT05FOiAnTUFQX1RZUEVfTk9ORSdcbn07XG5cbmV4cG9ydCBjb25zdCBNYXBUeXBlSWQgPSB7XG4gTk9STUFMOiAnTUFQX1RZUEVfTk9STUFMJyxcbiBST0FETUFQOiAnTUFQX1RZUEVfTk9STUFMJyxcbiBTQVRFTExJVEU6ICdNQVBfVFlQRV9TQVRFTExJVEUnLFxuIEhZQlJJRDogJ01BUF9UWVBFX0hZQlJJRCcsXG4gVEVSUkFJTjogJ01BUF9UWVBFX1RFUlJBSU4nLFxuIE5PTkU6ICdNQVBfVFlQRV9OT05FJ1xufTtcbi8qKlxuICogQG5hbWUgR29vZ2xlIE1hcHNcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gdXNlcyB0aGUgbmF0aXZlIEdvb2dsZSBNYXBzIFNES1xuICogTm90ZTogQXMgb2YgSW9uaWMgbmF0aXZlIDQuMCwgdGhpcyB1c2luZyB0aGUgMi4wIHZlcnNpb24gb2YgdGhlIGdvb2dsZSBtYXBzIHBsdWdpbi4gUGxlYXNlIG1ha2Ugc3VyZSB5b3VyIHBsdWdpbiBpcyB1cGRhdGVkXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7XG4gKiAgR29vZ2xlTWFwcyxcbiAqICBHb29nbGVNYXAsXG4gKiAgR29vZ2xlTWFwc0V2ZW50LFxuICogIEdvb2dsZU1hcE9wdGlvbnMsXG4gKiAgQ2FtZXJhUG9zaXRpb24sXG4gKiAgTWFya2VyT3B0aW9ucyxcbiAqICBNYXJrZXJcbiAqIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtbWFwcyc7XG4gKiBpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9cIjtcbiAqXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdwYWdlLWhvbWUnLFxuICogICB0ZW1wbGF0ZVVybDogJ2hvbWUuaHRtbCdcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgSG9tZVBhZ2Uge1xuICogICBtYXA6IEdvb2dsZU1hcDtcbiAqICAgY29uc3RydWN0b3IoKSB7IH1cbiAqXG4gKiAgIGlvblZpZXdEaWRMb2FkKCkge1xuICogICAgdGhpcy5sb2FkTWFwKCk7XG4gKiAgIH1cbiAqXG4gKiAgbG9hZE1hcCgpIHtcbiAqXG4gKiAgICAgbGV0IG1hcE9wdGlvbnM6IEdvb2dsZU1hcE9wdGlvbnMgPSB7XG4gKiAgICAgICBjYW1lcmE6IHtcbiAqICAgICAgICAgdGFyZ2V0OiB7XG4gKiAgICAgICAgICAgbGF0OiA0My4wNzQxOTA0LFxuICogICAgICAgICAgIGxuZzogLTg5LjM4MDk4MDJcbiAqICAgICAgICAgfSxcbiAqICAgICAgICAgem9vbTogMTgsXG4gKiAgICAgICAgIHRpbHQ6IDMwXG4gKiAgICAgICB9XG4gKiAgICAgfVxuICpcbiAqICAgICB0aGlzLm1hcCA9IEdvb2dsZU1hcHMuY3JlYXRlKCdtYXBfY2FudmFzJywgbWFwT3B0aW9ucyk7XG4gKlxuICogICAgIGxldCBtYXJrZXI6IE1hcmtlciA9IHRoaXMubWFwLmFkZE1hcmtlclN5bmMoe1xuICogICAgICAgdGl0bGU6ICdJb25pYycsXG4gKiAgICAgICBpY29uOiAnYmx1ZScsXG4gKiAgICAgICBhbmltYXRpb246ICdEUk9QJyxcbiAqICAgICAgIHBvc2l0aW9uOiB7XG4gKiAgICAgICAgIGxhdDogNDMuMDc0MTkwNCxcbiAqICAgICAgICAgbG5nOiAtODkuMzgwOTgwMlxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqICAgICBtYXJrZXIub24oR29vZ2xlTWFwc0V2ZW50Lk1BUktFUl9DTElDSylcbiAqICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICogICAgICAgICBhbGVydCgnY2xpY2tlZCcpO1xuICogICAgICAgfSk7XG4gKiAgICAgfSk7XG4gKiAgIH1cbiAqIH1cbiAqXG4gKiBgYGBcbiAqIEBjbGFzc2VzXG4gKiBHb29nbGVNYXBzXG4gKiBHb29nbGVNYXBcbiAqIFN0cmVldFZpZXdcbiAqIENpcmNsZVxuICogRW5jb2RpbmdcbiAqIEVudmlyb25tZW50XG4gKiBHZW9jb2RlclxuICogR3JvdW5kT3ZlcmxheVxuICogSHRtbEluZm9XaW5kb3dcbiAqIEdlb2NvZGVyXG4gKiBMYXRMbmdcbiAqIExhdExuZ0JvdW5kc1xuICogTWFya2VyXG4gKiBNYXJrZXJDbHVzdGVyXG4gKiBQb2x5Z29uXG4gKiBQb2x5bGluZVxuICogU3BoZXJpY2FsXG4gKiBLbWxPdmVybGF5XG4gKiBQb2x5XG4gKiBUaWxlT3ZlcmxheVxuICogQmFzZUNsYXNzXG4gKiBCYXNlQXJyYXlDbGFzc1xuICogQGludGVyZmFjZXNcbiAqIEdvb2dsZU1hcE9wdGlvbnNcbiAqIENhbWVyYVBvc2l0aW9uXG4gKiBDaXJjbGVPcHRpb25zXG4gKiBHZW9jb2RlclJlcXVlc3RcbiAqIEdlb2NvZGVyUmVzdWx0XG4gKiBHcm91bmRPdmVybGF5T3B0aW9uc1xuICogSUxhdExuZ1xuICogTWFya2VySWNvblxuICogTWFya2VyT3B0aW9uc1xuICogTWFya2VyQ2x1c3Rlckljb25cbiAqIE1hcmtlckNsdXN0ZXJPcHRpb25zXG4gKiBNeUxvY2F0aW9uXG4gKiBNeUxvY2F0aW9uT3B0aW9uc1xuICogUG9seWdvbk9wdGlvbnNcbiAqIFBvbHlsaW5lT3B0aW9uc1xuICogVGlsZU92ZXJsYXlPcHRpb25zXG4gKiBLbWxPdmVybGF5T3B0aW9uc1xuICogVmlzaWJsZVJlZ2lvblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXBzcGx1Z2luL2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBkb2N1bWVudDogJ2h0dHBzOi8vaW9uaWNmcmFtZXdvcmsuY29tL2RvY3MvbmF0aXZlL2dvb2dsZS1tYXBzLycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ11cbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwcyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHb29nbGVNYXAgaW5zdGFuY2VcbiAgICogQHBhcmFtIGVsZW1lbnQge3N0cmluZyB8IEhUTUxFbGVtZW50fSBFbGVtZW50IElEIG9yIHJlZmVyZW5jZSB0byBhdHRhY2ggdGhlIG1hcCB0b1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7R29vZ2xlTWFwT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEdvb2dsZU1hcE9wdGlvbnMsIG9wdGlvbnM/OiBHb29nbGVNYXBPcHRpb25zKTogR29vZ2xlTWFwIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbXVzdCBiZSB1bmRlciA8Ym9keT4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgJHtlbGVtZW50LnRhZ05hbWV9W19fcGx1Z2luTWFwSWQ9JyR7ZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKX0nXSBoYXMgYWxyZWFkeSBtYXAuYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIG9wdGlvbnMgPSBlbGVtZW50IGFzIEdvb2dsZU1hcE9wdGlvbnM7XG4gICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgfVxuICAgICAgY29uc3QgZ29vZ2xlTWFwOiBHb29nbGVNYXAgPSBuZXcgR29vZ2xlTWFwKGVsZW1lbnQgYXMgSFRNTEVsZW1lbnQgfCBzdHJpbmcsIG9wdGlvbnMpO1xuICAgICAgZ29vZ2xlTWFwLnNldCgnX292ZXJsYXlzJywge30pO1xuICAgICAgcmV0dXJuIGdvb2dsZU1hcDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2Uuam9pbignJykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24ga2VlcCB0aGlzIGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5LlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjcmVhdGUoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQgfCBHb29nbGVNYXBPcHRpb25zLCBvcHRpb25zPzogR29vZ2xlTWFwT3B0aW9ucyk6IEdvb2dsZU1hcCB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gUGxlYXNlIHVzZSBHb29nbGVNYXBzLmNyZWF0ZSgpJyk7XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuY3JlYXRlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgU3RyZWV0VmlldyBpbnN0YW5jZVxuICAgKiBAcGFyYW0gZWxlbWVudCB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IEVsZW1lbnQgSUQgb3IgcmVmZXJlbmNlIHRvIGF0dGFjaCB0aGUgbWFwIHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlZXRWaWV3T3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHJldHVybiB7U3RyZWV0Vmlld1Bhbm9yYW1hfVxuICAgKi9cbiAgc3RhdGljIGNyZWF0ZVBhbm9yYW1hKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogU3RyZWV0Vmlld09wdGlvbnMpOiBTdHJlZXRWaWV3UGFub3JhbWEge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBtdXN0IGJlIHVuZGVyIDxib2R5PicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2VsZW1lbnQudGFnTmFtZX1bX19wbHVnaW5NYXBJZD0nJHtlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpfSddIGhhcyBhbHJlYWR5IG1hcC5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBTdHJlZXRWaWV3UGFub3JhbWEoZWxlbWVudCwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykgJiYgdGFyZ2V0Ll9fcGx1Z2luTWFwSWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UodGFyZ2V0c1swXSwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlFcnJvck1lc3NhZ2UgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQsIG1lc3NhZ2U6IHN0cmluZykgPT4ge1xuICBjb25zdCBlcnJvckRpdjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZXJyb3JEaXYuaW5uZXJIVE1MID0gbWVzc2FnZTtcbiAgZXJyb3JEaXYuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgZXJyb3JEaXYuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBlcnJvckRpdi5zdHlsZS53aWR0aCA9ICc4MCUnO1xuICBlcnJvckRpdi5zdHlsZS5oZWlnaHQgPSAnNTAlJztcbiAgZXJyb3JEaXYuc3R5bGUudG9wID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLmJvdHRvbSA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5yaWdodCA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLnBhZGRpbmcgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUubWFyZ2luID0gJ2F1dG8nO1xuXG4gIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICBlbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjY2NjNyc7XG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZXJyb3JEaXYpO1xufTtcblxuY29uc3Qgbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyID0gKF9vYmplY3RJbnN0YW5jZTogYW55LCBhcmdzOiBhbnlbXSk6IGFueVtdID0+IHtcbiAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXSBpbnN0YW5jZW9mIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUNsYXNzKSB7XG4gICAgaWYgKGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnTWFwJyB8fCBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0udHlwZSA9PT0gJ1N0cmVldFZpZXdQYW5vcmFtYScpIHtcbiAgICAgIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9IHRoaXM7XG4gICAgfSBlbHNlIGlmIChfb2JqZWN0SW5zdGFuY2UuX19wZ21JZC5pbmRleE9mKCdtYXJrZXJjbHVzdGVyXycpICE9PSAtMSkge1xuICAgICAgY29uc3QgX292ZXJsYXlzOiBhbnkgPSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKSB8fCB7fTtcbiAgICAgIGxldCBvdmVybGF5OiBNYXJrZXIgPSBfb3ZlcmxheXNbYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCldO1xuICAgICAgaWYgKCFvdmVybGF5KSB7XG4gICAgICAgIGNvbnN0IG1hcmtlckpTOiBhbnkgPSBhcmdzW2FyZ3MubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IG1hcmtlcklkOiBzdHJpbmcgPSBtYXJrZXJKUy5nZXRJZCgpO1xuICAgICAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBNYXJrZXJDbHVzdGVyID0gX29iamVjdEluc3RhbmNlIGFzIE1hcmtlckNsdXN0ZXI7XG4gICAgICAgIG92ZXJsYXkgPSBuZXcgTWFya2VyKG1hcmtlckNsdXN0ZXIuZ2V0TWFwKCksIG1hcmtlckpTKTtcbiAgICAgICAgX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbbWFya2VySWRdID0gb3ZlcmxheTtcbiAgICAgICAgbWFya2VySlMub25lKG1hcmtlckpTLmdldElkKCkgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF0gPSBudWxsO1xuICAgICAgICAgIGRlbGV0ZSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF07XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gb3ZlcmxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbYXJnc1thcmdzLmxlbmd0aCAtIDFdLmdldElkKCldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJncztcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VDbGFzcy9SRUFETUUubWRcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQ2xhc3MnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlQ2xhc3Mge1xuICBwcm90ZWN0ZWQgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgY29uc3RydWN0b3Iob2JqSW5zdGFuY2U/OiBhbnkpIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICBpZiAoIW9iakluc3RhbmNlKSB7XG4gICAgICAgIG9iakluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VDbGFzcykoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gb2JqSW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgZXhlY3V0aW5nIGFueSBtZXRob2RzLicpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQXR0YWNoZXMgdGhlIGhhbmRsZXIgZm9yIHRoZSBldmVudCB0aGF0IGlzIHRocm93biBieSB0aGUgdGFyZ2V0LCB3aGVyZSB0aGUgbWluaW11bSBpbnRlcnZhbCBiZXR3ZWVuIGV2ZW50cyAoaW4gbWlsbGlzZWNvbmRzKSBpcyBzcGVjaWZpZWQgYXMgYSBwYXJhbWV0ZXIuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gZXZlbnQgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcGFyYW0gdGhyb3R0bGVJbnRlcnZhbCB7bnVtYmVyfSB0aHJvdHRsZSBpbnRlcnZhbCBpbiBtaWxsaXNlY29uZHNcbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gYWRkVGhyb3R0bGVkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZywgdGhyb3R0bGVJbnRlcnZhbDogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaHJvdHRsZWRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gIC8vICAgICAgIG9ic2VydmVyLm5leHQobmV3QXJncyk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB3b3JrcyBvbmNlLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRFdmVudExpc3RlbmVyT25jZShldmVudE5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uub25lKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIHJlc29sdmUobmV3QXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZFxuICAgKiBBZGRzIGFuIGV2ZW50IGxpc3RlbmVyIHRoYXQgd29ya3Mgb25jZS5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTGlzdGVuZXJPbmNlKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zb2xlLndhcm4oJ1tHb29nbGVNYXBzXSBcImFkZExpc3RlbmVyT25jZVwiIGlzIGRlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgXCJhZGRFdmVudExpc3RlbmVyT25jZVwiLicpO1xuICAgIHJldHVybiB0aGlzLmFkZEV2ZW50TGlzdGVuZXJPbmNlKGV2ZW50TmFtZSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHZhbHVlXG4gICAqIEBwYXJhbSBrZXkge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldChrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSB2YWx1ZVxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBrZXkgbmFtZSBmb3IgdGhlIHZhbHVlLiBgKGtleSlfY2hhbmdlZGAgd2lsbCBiZSBmaXJlZCB3aGVuIHlvdSBzZXQgdmFsdWUgdGhyb3VnaCB0aGlzIG1ldGhvZC5cbiAgICogQHBhcmFtIHZhbHVlIHthbnl9XG4gICAqIEBwYXJhbSBub05vdGlmeSB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBmaXJpbmcgdGhlIGAoa2V5KV9jaGFuZ2VkYCBldmVudC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQmluZCBhIGtleSB0byBhbm90aGVyIG9iamVjdFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSB0YXJnZXQge2FueX0gVGhlIHRhcmdldCBvYmplY3QgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHBhcmFtIHRhcmdldEtleT8ge3N0cmluZ30gW29wdGlvbnNdICBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLiBJZiB5b3Ugb21pdCB0aGlzLCB0aGUgYGtleWAgYXJndW1lbnQgaXMgdXNlZC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFRydWUgaWYgeW91IHdhbnQgdG8gcHJldmVudCBgKGtleSlfY2hhbmdlZGAgZXZlbnQgd2hlbiB5b3UgYmluZCBmaXJzdCB0aW1lLCBiZWNhdXNlIHRoZSBpbnRlcm5hbCBzdGF0dXMgaXMgY2hhbmdlZCBmcm9tIGB1bmRlZmluZWRgIHRvIHNvbWV0aGluZy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGJpbmRUbyhrZXk6IHN0cmluZywgdGFyZ2V0OiBhbnksIHRhcmdldEtleT86IHN0cmluZywgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIG9uKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbihldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZFRocm90dGxlZEV2ZW50TGlzdGVuZXJgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgLy8gQEluc3RhbmNlQ2hlY2soeyBvYnNlcnZhYmxlOiB0cnVlIH0pXG4gIC8vIG9uVGhyb3R0bGVkKGV2ZW50TmFtZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgLy8gICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XG4gIC8vICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vblRocm90dGxlZChldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAvLyAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAvLyAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICAvKipcbiAgICogQWxpYXMgb2YgYGFkZEV2ZW50TGlzdGVuZXJPbmNlYFxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9IFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgb25lKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbmUoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgcmVzb2x2ZShuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoaXMgb2JqZWN0IGhhcyBldmVudCBsaXN0ZW5lciBmb3IgZXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IEV2ZW50IG5hbWVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGhhc0V2ZW50TGlzdGVuZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgc3RvcmVkIHZhbHVlc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHkoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2ggZXZlbnQuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gcGFyYW1ldGVycyB7YW55fSBbb3B0aW9uc10gVGhlIGRhdGEgeW91IHdhbnQgdG8gcGFzcyB0byBldmVudCBsaXN0ZXJuZXJzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdHJpZ2dlcihldmVudE5hbWU6IHN0cmluZywgLi4ucGFyYW1ldGVyczogYW55W10pOiB2b2lkIHtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIG9mZigpIGFuZCBlbXB0eSgpXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBkZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9vYmplY3RJbnN0YW5jZS50eXBlID09PSAnTWFwJykge1xuICAgICAgY29uc3QgbWFwOiBHb29nbGVNYXAgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKTtcbiAgICAgIGlmIChtYXApIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0SWQoKV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcihzKVxuICAgKiBUaGUgYHJlbW92ZUV2ZW50TGlzdGVuZXIoKWAgaGFzIHRocmVlIHVzYWdlczpcbiAgICogIC0gcmVtb3ZlRXZlbnRMaXN0ZW5lcihcImV2ZW50TmFtZVwiLCBsaXN0ZW5lckZ1bmN0aW9uKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBvbmUgcGFydGljdWxhciBldmVudCBsaXN0ZW5lclxuICAgKiAgLSByZW1vdmVFdmVudExpc3RlbmVyKFwiZXZlbnROYW1lXCIpO1xuICAgKiAgICAgVGhpcyByZW1vdmVzIHRoZSBldmVudCBsaXN0ZW5lcnMgdGhhdCBhZGRlZCBmb3IgdGhlIGV2ZW50IG5hbWUuXG4gICAqICAtIHJlbW92ZUV2ZW50TGlzdGVuZXIoKTtcbiAgICogICAgIFRoaXMgcmVtb3ZlcyBhbGwgbGlzdGVuZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFtvcHRpb25zXSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBsaXN0ZW5lciB7RnVuY3Rpb259IFtvcHRpb25zXSBFdmVudCBsaXN0ZW5lclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgcmVtb3ZlRXZlbnRMaXN0ZW5lcmBcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBbb3B0aW9uc10gRXZlbnQgbmFtZVxuICAgKiBAcGFyYW0gbGlzdGVuZXIge0Z1bmN0aW9ufSBbb3B0aW9uc10gRXZlbnQgbGlzdGVuZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIG9mZihldmVudE5hbWU/OiBzdHJpbmcsIGxpc3RlbmVyPzogKC4uLnBhcmFtZXRlcnM6IGFueVtdKSA9PiB2b2lkKTogdm9pZCB7fVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcy1kb2MvYmxvYi9tYXN0ZXIvdjIuMC4wL2NsYXNzL0Jhc2VBcnJheUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0Jhc2VBcnJheUNsYXNzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5CYXNlQXJyYXlDbGFzcydcbn0pXG5leHBvcnQgY2xhc3MgQmFzZUFycmF5Q2xhc3M8VD4gZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKGluaXRpYWxEYXRhPzogVFtdIHwgYW55KSB7XG4gICAgaWYgKGluaXRpYWxEYXRhIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykge1xuICAgICAgc3VwZXIoaW5pdGlhbERhdGEpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpbml0aWFsRGF0YSkpIHtcbiAgICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQXJyYXlDbGFzcykoaW5pdGlhbERhdGEpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3VwZXIobmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKShbXSkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGFsbCBlbGVtZW50cyBmcm9tIHRoZSBhcnJheS5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50cy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGVtcHR5KG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZm9yRWFjaChmbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAqL1xuICBmb3JFYWNoQXN5bmMoZm46ICgoZWxlbWVudDogVCwgY2FsbGJhY2s6ICgpID0+IHZvaWQpID0+IHZvaWQpKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmZvckVhY2goZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIHRoZW4gUmV0dXJucyBhIG5ldyB2YWx1ZS5cbiAgICogVGhlbiB5b3UgY2FuIGdldCB0aGUgcmVzdWx0cyBvZiBlYWNoIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtPYmplY3RbXX0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBtYXAoZm46IChlbGVtZW50OiBULCBpbmRleDogbnVtYmVyKSA9PiBhbnkpOiBhbnlbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGUgb3ZlciBlYWNoIGVsZW1lbnQsIGNhbGxpbmcgdGhlIHByb3ZpZGVkIGNhbGxiYWNrLlxuICAgKiBUaGVuIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHRzIG9mIGVhY2ggY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBtYXBBc3luYyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKG5ld0VsZW1lbnQ6IGFueSkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5tYXAoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNhbWUgYXMgYG1hcEFzeW5jYCwgYnV0IGtlZXAgdGhlIGV4ZWN1dGlvbiBvcmRlclxuICAgKiBAcGFyYW0gZm4ge0Z1bmN0aW9ufVxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBuZXcgYXJyYXkgd2l0aCB0aGUgcmVzdWx0c1xuICAgKi9cbiAgbWFwU2VyaWVzKGZuOiAoKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAobmV3RWxlbWVudDogYW55KSA9PiB2b2lkKSA9PiB2b2lkKSk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm1hcFNlcmllcyhmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZpbHRlcigpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1RbXX0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZmlsdGVyKGZuOiAoZWxlbWVudDogVCwgaW5kZXg6IG51bWJlcikgPT4gYm9vbGVhbik6IFRbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmaWx0ZXJBc3luYygpIG1ldGhvZCBjcmVhdGVzIGEgbmV3IGFycmF5IHdpdGggYWxsIGVsZW1lbnRzIHRoYXQgcGFzcyB0aGUgdGVzdCBpbXBsZW1lbnRlZCBieSB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8VFtdPn0gcmV0dXJucyBhIG5ldyBmaWx0ZXJlZCBhcnJheVxuICAgKi9cbiAgZmlsdGVyQXN5bmMoZm46IChlbGVtZW50OiBULCBjYWxsYmFjazogKHJlc3VsdDogYm9vbGVhbikgPT4gdm9pZCkgPT4gdm9pZCk6IFByb21pc2U8VFtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55W10+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5maWx0ZXIoZm4sIHJlc29sdmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIHVuZGVybHlpbmcgQXJyYXkuXG4gICAqIEByZXR1cm4ge09iamVjdFtdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXJyYXkoKTogVFtdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHJldHVybiB7T2JqZWN0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QXQoaW5kZXg6IG51bWJlcik6IGFueSB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIHRoZSBlbGVtZW50cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBpbmRleE9mKCkgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGluZGV4IGF0IHdoaWNoIGEgZ2l2ZW4gZWxlbWVudCBjYW4gYmUgZm91bmQgaW4gdGhlIGFycmF5LCBvciAtMSBpZiBpdCBpcyBub3QgcHJlc2VudC5cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaW5kZXhPZihlbGVtZW50OiBUKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIHJldmVyc2UoKSBtZXRob2QgcmV2ZXJzZXMgYW4gYXJyYXkgaW4gcGxhY2UuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZXZlcnNlKCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzb3J0KCkgbWV0aG9kIHNvcnRzIHRoZSBlbGVtZW50cyBvZiBhbiBhcnJheSBpbiBwbGFjZSBhbmQgcmV0dXJucyB0aGUgYXJyYXkuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzb3J0KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge09iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgaW5zZXJ0X2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpbnNlcnRBdChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBULCBub05vdGlmeT86IGJvb2xlYW4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBsYXN0IGVsZW1lbnQgb2YgdGhlIGFycmF5IGFuZCByZXR1cm5zIHRoYXQgZWxlbWVudC5cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgcmVtb3ZlX2F0IGV2ZW50LlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwb3Aobm9Ob3RpZnk/OiBib29sZWFuKTogVCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgb25lIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhlIG5ldyBsZW5ndGggb2YgdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gZWxlbWVudCB7b2JqZWN0fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBTZXQgdHJ1ZSB0byBwcmV2ZW50IGluc2VydF9hdCBldmVudHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwdXNoKGVsZW1lbnQ6IFQsIG5vTm90aWZ5PzogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYW4gZWxlbWVudCBmcm9tIHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCByZW1vdmVfYXQgZXZlbnQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVBdChpbmRleDogbnVtYmVyLCBub05vdGlmeT86IGJvb2xlYW4pOiBUIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFNldHMgYW4gZWxlbWVudCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICAgKiBAcGFyYW0gaW5kZXgge251bWJlcn1cbiAgICogQHBhcmFtIGVsZW1lbnQge29iamVjdH1cbiAgICogQHBhcmFtIG5vTm90aWZ5PyB7Ym9vbGVhbn0gW29wdGlvbnNdIFNldCB0cnVlIHRvIHByZXZlbnQgc2V0X2F0IGV2ZW50LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QXQoaW5kZXg6IG51bWJlciwgZWxlbWVudDogVCwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQ2lyY2xlL1JFQURNRS5tZFxuICovXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2VudGVyIHBvc2l0aW9uLlxuICAgKiBAcGFyYW0gbGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2VudGVyKGxhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2VudGVyIHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDZW50ZXIoKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIHJhZGl1cy5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UmFkaXVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGNpcmNsZSByYWRpdXMuXG4gICAqIEBwYXJhbSByYWRpdXMge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFJhZGl1cyhyYWRpdXM6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGaWxsQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgY2lyY2xlIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmlsbENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSB3aWR0aC5cbiAgICogQHBhcmFtIHN0cm9rZVdpZHRoIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIHdpZHRoICh1bml0OiBwaXhlbCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSBjb2xvciAob3V0dGVyIGNvbG9yKS5cbiAgICogQHBhcmFtIHN0cm9rZUNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VDb2xvcihzdHJva2VDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgY2lyY2xlLlxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIGNsaWNrYWJsZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2lyY2xlIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgekluZGV4LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBjaXJjbGUuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGF0TG5nQm91bmRzIChyZWN0YW5nbGUpIHRoYXQgY29udGFpbnMgdGhlIGNpcmNsZS5cbiAgICogQHJldHVybiB7TGF0TG5nQm91bmRzfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Qm91bmRzKCk6IExhdExuZ0JvdW5kcyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjaXJjbGUgdmlzaWJpbGl0eVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY2lyY2xlIGlzIHZpc2libGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5lbnZpcm9ubWVudCcsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEVudmlyb25tZW50IHtcblxuICAvKipcbiAgICogU2V0IGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAgICovXG4gIHN0YXRpYyBzZXRFbnYoZW52T3B0aW9uczogRW52T3B0aW9ucyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRFbnYoZW52T3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBvcGVuIHNvdXJjZSBzb2Z0d2FyZSBsaWNlbnNlIGluZm9ybWF0aW9uIGZvciBHb29nbGUgTWFwcyBTREsgZm9yIGlPUy5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgc3RhdGljIGdldExpY2Vuc2VJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCh0ZXh0OiBzdHJpbmcpID0+IHJlc29sdmUodGV4dCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYXBwLlxuICAgKiBAcGFyYW0gY29sb3JcbiAgICovXG4gIHN0YXRpYyBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5lbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3IpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBnZXRMaWNlbnNlSW5mbygpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygpJyk7XG4gICAgcmV0dXJuIEVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBzZXRCYWNrZ3JvdW5kQ29sb3IoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5zZXRCYWNrZ3JvdW5kQ29sb3IoKScpO1xuICAgIEVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcihjb2xvcik7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5HZW9jb2RlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBHZW9jb2RlciB7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogUHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHRbXT4+IHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgR2VvY29kZXIuZ2VvY29kZSgpJyk7XG4gICAgcmV0dXJuIEdlb2NvZGVyLmdlb2NvZGUocmVxdWVzdCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgcG9zaXRpb24gdG8gYWRkcmVzcyBhbmQgdmljZSB2ZXJzYVxuICAgKiBAcGFyYW0ge0dlb2NvZGVyUmVxdWVzdH0gcmVxdWVzdCBSZXF1ZXN0IG9iamVjdCB3aXRoIGVpdGhlciBhbiBhZGRyZXNzIG9yIGEgcG9zaXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHQ+Pn1cbiAgICovXG4gIHN0YXRpYyBnZW9jb2RlKHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCk6IFByb21pc2U8R2VvY29kZXJSZXN1bHRbXSB8IEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PiB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIGlmIChyZXF1ZXN0LmFkZHJlc3MgaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QuYWRkcmVzcykgfHxcbiAgICAgIHJlcXVlc3QucG9zaXRpb24gaW5zdGFuY2VvZiBBcnJheSB8fCBBcnJheS5pc0FycmF5KHJlcXVlc3QucG9zaXRpb24pKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogW1xuICAgICAgLy8gICAgXCJLeW90bywgSmFwYW5cIixcbiAgICAgIC8vICAgIFwiVG9reW8sIEphcGFuXCJcbiAgICAgIC8vICAgXVxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEJhc2VBcnJheUNsYXNzPEdlb2NvZGVyUmVzdWx0W10+PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuR2VvY29kZXIuZ2VvY29kZShyZXF1ZXN0LCAobXZjQXJyYXk6IGFueSkgPT4ge1xuICAgICAgICAgIGlmIChtdmNBcnJheSkge1xuICAgICAgICAgICAgcmVzb2x2ZShuZXcgQmFzZUFycmF5Q2xhc3MobXZjQXJyYXkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBHZW9jb2Rlci5nZW9jb2RlKHtcbiAgICAgIC8vICAgYWRkcmVzczogXCJLeW90bywgSmFwYW5cIlxuICAgICAgLy8gfSlcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIHJldHVybiBnZXRQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5HZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QsIChyZXN1bHRzOiBHZW9jb2RlclJlc3VsdFtdKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uc1NlcnZpY2Uge1xuXG4gIC8qKlxuICAgKiBBIHNlcnZpY2UgZm9yIGNvbXB1dGluZyBkaXJlY3Rpb25zIGJldHdlZW4gdHdvIG9yIG1vcmUgcGxhY2VzLlxuICAgKiBAcGFyYW0ge0RpcmVjdGlvbnNSZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEByZXR1cm4ge1Byb21pc2U8RGlyZWN0aW9uc1Jlc3VsdD59XG4gICAqL1xuICBzdGF0aWMgcm91dGUocmVxdWVzdDogRGlyZWN0aW9uc1JlcXVlc3QpOiBQcm9taXNlPERpcmVjdGlvbnNSZXN1bHQ+IHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8RGlyZWN0aW9uc1Jlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5EaXJlY3Rpb25zU2VydmljZS5yb3V0ZShyZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkVsZXZhdGlvblNlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgRWxldmF0aW9uU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIE1ha2VzIGFuIGVsZXZhdGlvbiByZXF1ZXN0IGFsb25nIGEgcGF0aCwgd2hlcmUgdGhlIGVsZXZhdGlvbiBkYXRhIGFyZSByZXR1cm5lZCBhcyBkaXN0YW5jZS1iYXNlZCBzYW1wbGVzIGFsb25nIHRoYXQgcGF0aC5cbiAgICogQHBhcmFtIHtQYXRoRWxldmF0aW9uUmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEVsZXZhdGlvblJlc3VsdFtdPn1cbiAgICovXG4gIHN0YXRpYyBnZXRFbGV2YXRpb25BbG9uZ1BhdGgocmVxdWVzdDogUGF0aEVsZXZhdGlvblJlcXVlc3QpOiBQcm9taXNlPEVsZXZhdGlvblJlc3VsdFtdPiB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPEVsZXZhdGlvblJlc3VsdFtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkVsZXZhdGlvblNlcnZpY2UuZ2V0RWxldmF0aW9uQWxvbmdQYXRoKHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWFrZXMgYW4gZWxldmF0aW9uIHJlcXVlc3QgZm9yIGEgbGlzdCBvZiBkaXNjcmV0ZSBsb2NhdGlvbnMuXG4gICAqIEBwYXJhbSB7TG9jYXRpb25FbGV2YXRpb25SZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEByZXR1cm4ge1Byb21pc2U8RWxldmF0aW9uUmVzdWx0W10+fVxuICAgKi9cbiAgc3RhdGljIGdldEVsZXZhdGlvbkZvckxvY2F0aW9ucyhyZXF1ZXN0OiBQYXRoRWxldmF0aW9uUmVxdWVzdCk6IFByb21pc2U8RWxldmF0aW9uUmVzdWx0W10+IHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8RWxldmF0aW9uUmVzdWx0W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuRWxldmF0aW9uU2VydmljZS5nZXRFbGV2YXRpb25Gb3JMb2NhdGlvbnMocmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuTG9jYXRpb25TZXJ2aWNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIExvY2F0aW9uU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBkZXZpY2UgbG9jYXRpb24gd2l0aG91dCBtYXBcbiAgICogQHJldHVybiB7UHJvbWlzZTxNeUxvY2F0aW9uPn1cbiAgICovXG4gIHN0YXRpYyBnZXRNeUxvY2F0aW9uKG9wdGlvbnM/OiBNeUxvY2F0aW9uT3B0aW9ucyk6IFByb21pc2U8TXlMb2NhdGlvbj4ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8TXlMb2NhdGlvbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5Mb2NhdGlvblNlcnZpY2UuZ2V0TXlMb2NhdGlvbihvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgYXBwbGljYXRpb24gaGFzIGdlb2xvY2F0aW9uIHBlcm1pc3Npb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxib29sZWFuPn1cbiAgICovXG4gIHN0YXRpYyBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5Mb2NhdGlvblNlcnZpY2UuaGFzUGVybWlzc2lvbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuZW5jb2RpbmcnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgRW5jb2Rpbmcge1xuXG4gIC8qKlxuICAgKiBEZWNvZGVzIGFuIGVuY29kZWQgcGF0aCBzdHJpbmcgaW50byBhIHNlcXVlbmNlIG9mIExhdExuZ3MuXG4gICAqIEBwYXJhbSBlbmNvZGVkIHtzdHJpbmd9IGFuIGVuY29kZWQgcGF0aCBzdHJpbmdcbiAgICogQHBhcmFtIHByZWNpc2lvbj8ge251bWJlcn0gZGVmYXVsdDogNVxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgZGVjb2RlUGF0aChlbmNvZGVkOiBzdHJpbmcsIHByZWNpc2lvbj86IG51bWJlcik6IElMYXRMbmdbXSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5lbmNvZGluZy5kZWNvZGVQYXRoKGVuY29kZWQsIHByZWNpc2lvbik7XG4gIH1cblxuICAvKipcbiAgICogRW5jb2RlcyBhIHNlcXVlbmNlIG9mIExhdExuZ3MgaW50byBhbiBlbmNvZGVkIHBhdGggc3RyaW5nLlxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz59IGEgc2VxdWVuY2Ugb2YgTGF0TG5nc1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgZW5jb2RlUGF0aChwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IHN0cmluZyB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5lbmNvZGluZy5lbmNvZGVQYXRoKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZGVjb2RlUGF0aCgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGRlY29kZVBhdGgoZW5jb2RlZDogc3RyaW5nLCBwcmVjaXNpb24/OiBudW1iZXIpOiBJTGF0TG5nW10ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5kZWNvZGVQYXRoKCknKTtcbiAgICByZXR1cm4gRW5jb2RpbmcuZGVjb2RlUGF0aChlbmNvZGVkLCBwcmVjaXNpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgRW5jb2RpbmcuZW5jb2RlUGF0aCgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGVuY29kZVBhdGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBzdHJpbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5lbmNvZGVQYXRoKCknKTtcbiAgICByZXR1cm4gRW5jb2RpbmcuZW5jb2RlUGF0aChwYXRoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmdlb21ldHJ5LnBvbHknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgUG9seSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIGlzIGluIHRoZSBwb2x5Z29uIHBhdGhcbiAgICogQHBhcmFtIGxvY2F0aW9uIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdfVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgc3RhdGljIGNvbnRhaW5zTG9jYXRpb24obG9jYXRpb246IElMYXRMbmcsIHBhdGg6IElMYXRMbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkucG9seS5jb250YWluc0xvY2F0aW9uKGxvY2F0aW9uLCBwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHNwZWNpZmllZCBsb2NhdGlvbiBpcyBvbiB0aGUgcG9seWxpbmUgcGF0aFxuICAgKiBAcGFyYW0gbG9jYXRpb24ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW119XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgaXNMb2NhdGlvbk9uRWRnZShsb2NhdGlvbjogSUxhdExuZywgcGF0aDogSUxhdExuZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5wb2x5LmlzTG9jYXRpb25PbkVkZ2UobG9jYXRpb24sIHBhdGgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuc3BoZXJpY2FsJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIFNwaGVyaWNhbCB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGRpc3RhbmNlLCBpbiBtZXRlcnMsIGJldHdlZW4gdHdvIExhdExuZ3MuXG4gICAqIEBwYXJhbSBsb2NhdGlvbkEge0lMYXRMbmd9XG4gICAqIEBwYXJhbSBsb2NhdGlvbkIge0lMYXRMbmd9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb20sIHRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBMYXRMbmcgcmVzdWx0aW5nIGZyb20gbW92aW5nIGEgZGlzdGFuY2UgZnJvbSBhbiBvcmlnaW4gaW4gdGhlIHNwZWNpZmllZCBoZWFkaW5nIChleHByZXNzZWQgaW4gZGVncmVlcyBjbG9ja3dpc2UgZnJvbSBub3J0aClcbiAgICogQHBhcmFtIGZyb20ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSBkaXN0YW5jZSB7bnVtYmVyfVxuICAgKiBAcGFyYW0gaGVhZGluZyB7bnVtYmVyfVxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZU9mZnNldChmcm9tOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQoZnJvbSwgZGlzdGFuY2UsIGhlYWRpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvY2F0aW9uIG9mIG9yaWdpbiB3aGVuIHByb3ZpZGVkIHdpdGggYSBMYXRMbmcgZGVzdGluYXRpb24sIG1ldGVycyB0cmF2ZWxsZWQgYW5kIG9yaWdpbmFsIGhlYWRpbmcuIEhlYWRpbmdzIGFyZSBleHByZXNzZWQgaW4gZGVncmVlcyBjbG9ja3dpc2UgZnJvbSBOb3J0aC4gVGhpcyBmdW5jdGlvbiByZXR1cm5zIG51bGwgd2hlbiBubyBzb2x1dGlvbiBpcyBhdmFpbGFibGUuXG4gICAqIEBwYXJhbSB0byB7SUxhdExuZ30gVGhlIGRlc3RpbmF0aW9uIExhdExuZy5cbiAgICogQHBhcmFtIGRpc3RhbmNlIHtudW1iZXJ9IFRoZSBkaXN0YW5jZSB0cmF2ZWxsZWQsIGluIG1ldGVycy5cbiAgICogQHBhcmFtIGhlYWRpbmcge251bWJlcn0gVGhlIGhlYWRpbmcgaW4gZGVncmVlcyBjbG9ja3dpc2UgZnJvbSBub3J0aC5cbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVPZmZzZXRPcmlnaW4odG86IElMYXRMbmcsIGRpc3RhbmNlOiBudW1iZXIsIGhlYWRpbmc6IG51bWJlcik6IExhdExuZyB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZU9mZnNldE9yaWdpbih0bywgZGlzdGFuY2UsIGhlYWRpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxlbmd0aCBvZiB0aGUgZ2l2ZW4gcGF0aC5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZUxlbmd0aChwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUxlbmd0aChwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhcmVhIG9mIGEgY2xvc2VkIHBhdGguIFRoZSBjb21wdXRlZCBhcmVhIHVzZXMgdGhlIHNhbWUgdW5pdHMgYXMgdGhlIHJhZGl1cy5cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+fS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNpZ25lZCBhcmVhIG9mIGEgY2xvc2VkIHBhdGguIFRoZSBzaWduZWQgYXJlYSBtYXkgYmUgdXNlZCB0byBkZXRlcm1pbmUgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwYXRoLlxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz59LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZVNpZ25lZEFyZWEocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhlYWRpbmcgZnJvbSBvbmUgTGF0TG5nIHRvIGFub3RoZXIgTGF0TG5nLiBIZWFkaW5ncyBhcmUgZXhwcmVzc2VkIGluIGRlZ3JlZXMgY2xvY2t3aXNlIGZyb20gTm9ydGggd2l0aGluIHRoZSByYW5nZSAoLTE4MCwxODApLlxuICAgKiBAcGFyYW0gZnJvbSB7SUxhdExuZ31cbiAgICogQHBhcmFtIHRvIHtJTGF0TG5nfVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZUhlYWRpbmcoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKGZyb20sIHRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBMYXRMbmcgd2hpY2ggbGllcyB0aGUgZ2l2ZW4gZnJhY3Rpb24gb2YgdGhlIHdheSBiZXR3ZWVuIHRoZSBvcmlnaW4gTGF0TG5nIGFuZCB0aGUgZGVzdGluYXRpb24gTGF0TG5nLlxuICAgKiBAcGFyYW0gZnJvbSB7SUxhdExuZ30gICAgIFRoZSBMYXRMbmcgZnJvbSB3aGljaCB0byBzdGFydC5cbiAgICogQHBhcmFtIHRvIHtJTGF0TG5nfSAgICAgICBUaGUgTGF0TG5nIHRvd2FyZCB3aGljaCB0byB0cmF2ZWwuXG4gICAqIEBwYXJhbSBmcmFjdGlvbiB7bnVtYmVyfSAgQSBmcmFjdGlvbiBvZiB0aGUgZGlzdGFuY2UgdG8gdHJhdmVsIGZyb20gMC4wIHRvIDEuMCAuXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBpbnRlcnBvbGF0ZShmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZywgZnJhY3Rpb246IG51bWJlcik6IExhdExuZyB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuaW50ZXJwb2xhdGUoZnJvbSwgdG8sIGZyYWN0aW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlRGlzdGFuY2VCZXR3ZWVuKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlT2Zmc2V0KGZyb206IElMYXRMbmcsIGRpc3RhbmNlOiBudW1iZXIsIGhlYWRpbmc6IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0KCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQoZnJvbSwgZGlzdGFuY2UsIGhlYWRpbmcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4oKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlT2Zmc2V0T3JpZ2luKHRvOiBJTGF0TG5nLCBkaXN0YW5jZTogbnVtYmVyLCBoZWFkaW5nOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldE9yaWdpbigpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKHRvLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUxlbmd0aCgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVMZW5ndGgocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUxlbmd0aCgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVBcmVhKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUFyZWEocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUFyZWEoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUFyZWEocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlU2lnbmVkQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlSGVhZGluZygpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVIZWFkaW5nKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKGZyb20sIHRvKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5pbnRlcnBvbGF0ZSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGludGVycG9sYXRlKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nLCBmcmFjdGlvbjogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmludGVycG9sYXRlKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmludGVycG9sYXRlKGZyb20sIHRvLCBmcmFjdGlvbik7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RyZWV0Vmlld1Bhbm9yYW1hJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcydcbn0pXG5leHBvcnQgY2xhc3MgU3RyZWV0Vmlld1Bhbm9yYW1hIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsIG9wdGlvbnM/OiBTdHJlZXRWaWV3T3B0aW9ucykge1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gQ3JlYXRlIGEgcGFub3JhbWFcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0V2lkdGggPj0gMTAwICYmIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuU3RyZWV0Vmlldy5nZXRQYW5vcmFtYShlbGVtZW50LCBvcHRpb25zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVsZW1lbnQudGFnTmFtZSArICcgaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG5cbiAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5TdHJlZXRWaWV3LmdldFBhbm9yYW1hKGdldFByb21pc2U8YW55W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICBsZXQgY291bnQ6IG51bWJlcjtcbiAgICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgICBjb25zdCB0aW1lcjogYW55ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVNbaV0gKyBlbGVtZW50KSk7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykgJiYgdGFyZ2V0Ll9fcGx1Z2luTWFwSWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoID49IDEwMCAmJiB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKFt0YXJnZXRzWzBdLCBvcHRpb25zXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudCsrIDwgNDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDAgJiYgdGFyZ2V0c1swXSAmJiAodGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA8IDEwMCB8fCB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA8IDEwMCkpIHtcbiAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih0YXJnZXRzWzBdLnRhZ05hbWUgKyAnWyMnICsgZWxlbWVudCArICddIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdUaGVyZSBhcmUgbXVsdGlwbGUgXCInICsgZWxlbWVudCArICdcIiBlbGVtZW50cy4gVXNlIGRpZmZlcmVudCBpZCB0byBwcmV2ZW50IGVycm9yLicpKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCdDYW4gbm90IGZpbmQgdGhlIGVsZW1lbnQgWyMnICsgZWxlbWVudCArICddJykpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSksIG9wdGlvbnMpKTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGNvbnN0IGVycm9yTWVzc2FnZTogc3RyaW5nW10gPSBbXG4gICAgICAgICdbR29vZ2xlTWFwc10nXG4gICAgICBdO1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnWW91IG5lZWQgdG8gZXhlY3V0ZSBcIiQ+IGlvbmljIGNvcmRvdmEgcnVuIGJyb3dzZXJcIi4nKTtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1wiJD4gaW9uaWMgc2VydmVcIiBpcyBub3Qgc3VwcG9ydGVkLicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IGluc3RhbGxlZCBvciBub3QgcmVhZHkgeWV0LicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UoZWxlbWVudCwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnIycgKyBlbGVtZW50KSk7XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykgJiYgdGFyZ2V0Ll9fcGx1Z2luTWFwSWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSkge1xuICAgICAgICAgIGRpc3BsYXlFcnJvck1lc3NhZ2UodGFyZ2V0c1swXSwgZXJyb3JNZXNzYWdlLmpvaW4oJzxiciAvPicpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuXG4gIH1cblxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwb2ludCBvZiB2aWV3IGZvciB0aGUgU3RyZWV0IFZpZXcgcGFub3JhbWEuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2V0UG92KHBvdjogU3RyZWV0Vmlld0NhbWVyYVBhbm8pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIFN0cmVldFZpZXdQYW5vcmFtYSB0byBhIGdpdmVuIGxvY2F0aW9uLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldFBvc2l0aW9uKGNhbWVyYVBvc2l0aW9uOiBTdHJpbmcgfCBTdHJlZXRWaWV3U2V0UG9zaXRpb25PcHRpb24pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFiaWxpdHkgZm9yIHVzZXJzIHRvIHVzZSBwYW4gYXJvdW5kIG9uIHRoZSBwYW5vcmFtYSB1c2luZyBnZXN0dXJlcy5cbiAgICogQHBhcmFtIGdlc3R1cmVFbmFibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQYW5uaW5nR2VzdHVyZXNFbmFibGVkKGdlc3R1cmVFbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBwYW5uaW5nIGdlc3R1cmUgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBhbm5pbmdHZXN0dXJlc0VuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhYmlsaXR5IGZvciB1c2VycyB0byB6b29tIG9uIHRoZSBwYW5vcmFtYSB1c2luZyBnZXN0dXJlcy5cbiAgICogQHBhcmFtIGdlc3R1cmVFbmFibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRab29tR2VzdHVyZXNFbmFibGVkKGdlc3R1cmVFbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSB6b29taW5nIGdlc3R1cmUgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpvb21HZXN0dXJlc0VuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhYmlsaXR5IGZvciB1c2VycyB0byBzZWUgc3RyZWV0IG5hbWVzIG9uIHRoZSBwYW5vcmFtYS5cbiAgICogQHBhcmFtIGdlc3R1cmVFbmFibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJlZXROYW1lc0VuYWJsZWQoZ2VzdHVyZUVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHN0cmVldCBuYW1lcyBjb250cm9sIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJlZXROYW1lc0VuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBhYmlsaXR5IGZvciB1c2VycyB0byBtb3ZlIGJldHdlZW4gcGFub3JhbWFzLlxuICAgKiBAcGFyYW0gZ2VzdHVyZUVuYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE5hdmlnYXRpb25FbmFibGVkKGdlc3R1cmVFbmFibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBuYXZpZ2F0aW9uIGNvbnRyb2wgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE5hdmlnYXRpb25FbmFibGVkKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBuYXZpZ2F0aW9uIGxpbmtzIChTdHJlZXRWaWV3TG9jYXRpb24ubGlua3MpXG4gICAqIEByZXR1cm4ge1N0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TGlua3MoKTogU3RyZWV0Vmlld05hdmlnYXRpb25MaW5rW10geyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAqIEByZXR1cm4ge1N0cmVldFZpZXdMb2NhdGlvbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldExvY2F0aW9uKCk6IFN0cmVldFZpZXdMb2NhdGlvbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcGFub3JhbWEgaWRcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UGFub0lkKCk6IHN0cmluZyB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgcG9zaXRpb24gKFN0cmVldFZpZXdMb2NhdGlvbi5sYXRMbmcpXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFBvc2l0aW9uKCk6IElMYXRMbmcgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogRGVzdHJveSBhIHBhbm9yYW1hIGNvbXBsZXRlbHlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnXG59KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcCBleHRlbmRzIEJhc2VDbGFzcyB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgc3RyaW5nLCBvcHRpb25zPzogR29vZ2xlTWFwT3B0aW9ucywgX190aW1lb3V0PzogbnVtYmVyKSB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIENyZWF0ZSBhIG1hcFxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tXG4gICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGlmICghZWxlbWVudC5vZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VsZW1lbnQgbXVzdCBiZSB1bmRlciA8Ym9keT4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKGVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudC50YWdOYW1lICsgJyBpcyB0b28gc21hbGwuIE11c3QgYmUgYmlnZ2VyIHRoYW4gMTAweDEwMC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLk1hcC5nZXRNYXAoZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyO1xuICAgICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgIGNvbnN0IHRpbWVyOiBhbnkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0czogYW55W107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW3RhcmdldHNbMF0sIG9wdGlvbnNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KysgPCA0MCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCAmJiB0YXJnZXRzWzBdICYmICh0YXJnZXRzWzBdLm9mZnNldFdpZHRoIDwgMTAwIHx8IHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0IDwgMTAwKSkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHRhcmdldHNbMF0udGFnTmFtZSArICdbIycgKyBlbGVtZW50ICsgJ10gaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZXJlIGFyZSBtdWx0aXBsZSBcIicgKyBlbGVtZW50ICsgJ1wiIGVsZW1lbnRzLiBVc2UgZGlmZmVyZW50IGlkIHRvIHByZXZlbnQgZXJyb3IuJykpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCB0aGUgZWxlbWVudCBbIycgKyBlbGVtZW50ICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBfX3RpbWVvdXQgPT0gbnVsbCA/IDEwMCA6IF9fdGltZW91dCk7XG4gICAgICAgIH0pLCBvcHRpb25zKSk7XG5cbiAgICAgIH0gZWxzZSBpZiAoZWxlbWVudCA9PT0gbnVsbCAmJiBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChudWxsLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFwIGRpdlxuICAgKiBAcGFyYW0gZG9tTm9kZSB7SFRNTEVsZW1lbnQgfCBzdHJpbmd9IFtvcHRpb25zXSBJZiB5b3Ugd2FudCB0byBkaXNwbGF5IHRoZSBtYXAgaW4gYW4gaHRtbCBlbGVtZW50LCB5b3UgbmVlZCB0byBzcGVjaWZ5IGFuIGVsZW1lbnQgb3IgaWQuIElmIG9taXQgdGhpcyBhcmd1bWVudCwgdGhlIG1hcCBpcyBkZXRhY2hlZCBmcm9tIHdlYnZpZXcuXG4gICAqIEByZXR1cm5zIFByb21pc2U8dm9pZD5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgc2V0RGl2KGRvbU5vZGU/OiBIVE1MRWxlbWVudCB8IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghZG9tTm9kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdigpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGRvbU5vZGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gKGdldFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCBjb3VudDogbnVtYmVyO1xuICAgICAgICBsZXQgaTogbnVtYmVyO1xuICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIGNvbnN0IHRpbWVyOiBhbnkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdO1xuICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGRvbU5vZGUpKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXRzWzBdKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb3VudCsrIDwgNDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgcmVqZWN0KCdDYW4gbm90IGZpbmQgWyMnICsgZG9tTm9kZSArICddIGVsZW1lbnQnKTtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAvKlxuICAgICAgICBsZXQgaSwgdGFyZ2V0czogYW55W107XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHRhcmdldHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVNbaV0gKyBkb21Ob2RlKSk7XG4gICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuICF0YXJnZXQuaGFzQXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykgJiYgdGFyZ2V0Ll9fcGx1Z2luTWFwSWQgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPT09IDEgJiYgdGFyZ2V0c1swXSAmJiB0YXJnZXRzWzBdLm9mZnNldFdpZHRoID49IDEwMCAmJiB0YXJnZXRzWzBdLm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0c1swXSBhcyBIVE1MRWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmVqZWN0KCdDYW4gbm90IGZpbmQgWyMnICsgZG9tTm9kZSArICddIGVsZW1lbnQnKTtcbiAgICAgICAgKi9cbiAgICAgIH0pKVxuICAgICAgLnRoZW4oKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vYmplY3RJbnN0YW5jZS5zZXREaXYoZWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGRvbU5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJlxuICAgICAgICAgICFkb21Ob2RlLm9mZnNldFBhcmVudCAmJlxuICAgICAgICAgIGRvbU5vZGUub2Zmc2V0V2lkdGggPj0gMTAwICYmIGRvbU5vZGUub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2V0RGl2KGRvbU5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRvbU5vZGUudGFnTmFtZSArICcgaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBIVE1MIGVsZW1lbnRcbiAgICogQHJldHVybiB7SFRNTEVsZW1lbnR9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREaXYoKTogSFRNTEVsZW1lbnQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBtYXAgdHlwZSBpZFxuICAgKiBAcGFyYW0gbWFwVHlwZUlkIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRNYXBUeXBlSWQobWFwVHlwZUlkOiBNYXBUeXBlIHwgc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogTW92ZXMgdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYShjYW1lcmFQb3NpdGlvbjogQ2FtZXJhUG9zaXRpb248YW55Pik6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgaW4gdGhlIGNhbWVyYSB3aXRoIGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgYW5pbWF0ZUNhbWVyYVpvb21JbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIG91dCB0aGUgY2FtZXJhIHdpdGggYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBhbmltYXRlQ2FtZXJhWm9vbU91dCgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhKGNhbWVyYVBvc2l0aW9uOiBDYW1lcmFQb3NpdGlvbjxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBpbiB0aGUgY2FtZXJhIHdpdGhvdXQgYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBtb3ZlQ2FtZXJhWm9vbUluKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgb3V0IHRoZSBjYW1lcmEgd2l0aG91dCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIG1vdmVDYW1lcmFab29tT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcG9zaXRpb24gb2YgdGhlIGNhbWVyYS5cbiAgICogQHJldHVybiB7Q2FtZXJhUG9zaXRpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFQb3NpdGlvbigpOiBDYW1lcmFQb3NpdGlvbjxJTGF0TG5nPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgdGFyZ2V0IHBvc2l0aW9uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFUYXJnZXQoKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgem9vbSBsZXZlbFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFab29tKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgYmVhcmluZ1xuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFCZWFyaW5nKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCBjYW1lcmEgdGlsdCAodmlldyBhbmdsZSlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2FtZXJhVGlsdCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGNlbnRlciBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhIHZpZXdcbiAgICogQHBhcmFtIGxhdExuZyB7SUxhdExuZyB8IElMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVRhcmdldChsYXRMbmc6IElMYXRMbmcgfCBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgem9vbSBsZXZlbCBvZiB0aGUgY2FtZXJhXG4gICAqIEBwYXJhbSB6b29tTGV2ZWwge251bWJlcn0gWm9vbSBsZXZlbFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhWm9vbSh6b29tTGV2ZWw6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY2FtZXJhIHZpZXcgYW5nbGVcbiAgICogQHBhcmFtIHRpbHRBbmdsZSB7bnVtYmVyfSBUaWx0IGFuZ2xlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFUaWx0KHRpbHRBbmdsZTogbnVtYmVyKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBTZXQgY2FtZXJhIGJlYXJpbmdcbiAgICogQHBhcmFtIGJlYXJpbmcge2FueX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYUJlYXJpbmcoYmVhcmluZzogYW55KTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2VudGVyIG9mIHRoZSBtYXAgYnkgdGhlIGdpdmVuIGRpc3RhbmNlIGluIHBpeGVsc1xuICAgKiBAcGFyYW0geCB7bnVtYmVyfVxuICAgKiBAcGFyYW0geSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgcGFuQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgdmlzaWJsZSByZWdpb24gKHNvdXRoV2VzdCBhbmQgbm9ydGhFYXN0KVxuICAgKiBAcmV0dXJuIHtWaXNpYmxlUmVnaW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZVJlZ2lvbigpOiBWaXNpYmxlUmVnaW9uIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGRldmljZSBsb2NhdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE15TG9jYXRpb24+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldE15TG9jYXRpb24ob3B0aW9ucz86IE15TG9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxNeUxvY2F0aW9uPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8TXlMb2NhdGlvbj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5Mb2NhdGlvblNlcnZpY2UuZ2V0TXlMb2NhdGlvbihvcHRpb25zLCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBpZ25vcmUgYWxsIGNsaWNrcyBvbiB0aGUgbWFwXG4gICAqIEBwYXJhbSBpc0NsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShpc0NsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIERlc3Ryb3kgYSBtYXAgY29tcGxldGVseVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5nZXQoJ19vdmVybGF5cycpKS5mb3JFYWNoKChvdmVybGF5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIG92ZXJsYXlzLCBzdWNoIGFzIG1hcmtlclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgT2JqZWN0LmtleXModGhpcy5nZXQoJ19vdmVybGF5cycpKS5mb3JFYWNoKChvdmVybGF5SWQ6IHN0cmluZykgPT4ge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5jbGVhcigoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHVuaXQgZnJvbSBMYXRMbmcgdG8gdGhlIHBpeGVscyBmcm9tIHRoZSBsZWZ0L3RvcCBvZiB0aGUgbWFwIGRpdlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZnJvbUxhdExuZ1RvUG9pbnQobGF0TG5nOiBJTGF0TG5nKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IHRoZSB1bml0IGZyb20gdGhlIHBpeGVscyBmcm9tIHRoZSBsZWZ0L3RvcCB0byB0aGUgTGF0TG5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TGF0TG5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBmcm9tUG9pbnRUb0xhdExuZyhwb2ludDogbnVtYmVyW10pOiBQcm9taXNlPExhdExuZz4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgTXlMb2NhdGlvbiBjb250cm9sIChibHVlIGRvdClcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRNeUxvY2F0aW9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgTXlMb2NhdGlvbiBidXR0b25cbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRNeUxvY2F0aW9uQnV0dG9uRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGJ1aWxkaW5nXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBnZXRGb2N1c2VkQnVpbGRpbmcoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgaW5kb29yIG1hcFxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEluZG9vckVuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgdGhlIHRyYWZmaWMgbGF5ZXJcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRUcmFmZmljRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgY29tcGFzcyBidXR0b25cbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDb21wYXNzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJlZmVyZW5jZSBmb3Igd2hldGhlciBhbGwgZ2VzdHVyZXMgc2hvdWxkIGJlIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAgICogQHBhcmFtIGVuYWJsZWQge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRBbGxHZXN0dXJlc0VuYWJsZWQoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB2aXNpYmlsaXR5IG9mIHRoZSBtYXBcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGp1c3QgdGhlIG1hcCBwYWRkaW5nIChzYW1lIGFzIENTUyBwYWRkaW5nIHJ1bGUpXG4gICAqIEBwYXJhbSB0b3Age251bWJlcn1cbiAgICogQHBhcmFtIHJpZ2h0IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBsZWZ0IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBib3R0b20ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBhZGRpbmcodG9wOiBudW1iZXIsIHJpZ2h0PzogbnVtYmVyLCBib3R0b20/OiBudW1iZXIsIGxlZnQ/OiBudW1iZXIpOiB2b2lkIHsgfVxuXG4gIC8qKlxuICAgKiBTZXQgb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBHb29nbGVNYXBPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1hcmtlcj59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlcihvcHRpb25zOiBNYXJrZXJPcHRpb25zKTogUHJvbWlzZTxNYXJrZXIgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNYXJrZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlcihvcHRpb25zLCAobWFya2VyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1hcmtlcikge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gbWFya2VyLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheTogTWFya2VyID0gbmV3IE1hcmtlcih0aGlzLCBtYXJrZXIpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBtYXJrZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQFJldHVybnMge01hcmtlcn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyU3luYyhvcHRpb25zOiBNYXJrZXJPcHRpb25zKTogTWFya2VyIHtcbiAgICBjb25zdCBtYXJrZXI6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlcihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IG1hcmtlci5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXk6IE1hcmtlciA9IG5ldyBNYXJrZXIodGhpcywgbWFya2VyKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgbWFya2VyLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyIGNsdXN0ZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlckNsdXN0ZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWFya2VyQ2x1c3Rlcj59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZE1hcmtlckNsdXN0ZXIob3B0aW9uczogTWFya2VyQ2x1c3Rlck9wdGlvbnMpOiBQcm9taXNlPE1hcmtlckNsdXN0ZXIgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNYXJrZXJDbHVzdGVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXJDbHVzdGVyKG9wdGlvbnMsIChtYXJrZXJDbHVzdGVyOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKG1hcmtlckNsdXN0ZXIpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQgPSBtYXJrZXJDbHVzdGVyLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBNYXJrZXJDbHVzdGVyKHRoaXMsIG1hcmtlckNsdXN0ZXIpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBtYXJrZXJDbHVzdGVyLm9uZSgncmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG1hcmtlckNsdXN0ZXIuc2V0KCdfb3ZlcmxheXMnLCBuZXcgQmFzZUFycmF5Q2xhc3MoKSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlciBjbHVzdGVyIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJDbHVzdGVyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAUmV0dXJucyB7TWFya2VyQ2x1c3Rlcn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyQ2x1c3RlclN5bmMob3B0aW9uczogTWFya2VyQ2x1c3Rlck9wdGlvbnMpOiBNYXJrZXJDbHVzdGVyIHtcbiAgICBjb25zdCBtYXJrZXJDbHVzdGVyOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRNYXJrZXJDbHVzdGVyKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gbWFya2VyQ2x1c3Rlci5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXk6IE1hcmtlckNsdXN0ZXIgPSBuZXcgTWFya2VyQ2x1c3Rlcih0aGlzLCBtYXJrZXJDbHVzdGVyKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgbWFya2VyQ2x1c3Rlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgbWFya2VyQ2x1c3Rlci5zZXQoJ19vdmVybGF5cycsIG5ldyBCYXNlQXJyYXlDbGFzcygpKTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgY2lyY2xlXG4gICAqIEBwYXJhbSBvcHRpb25zIHtDaXJjbGVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q2lyY2xlPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkQ2lyY2xlKG9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiBQcm9taXNlPENpcmNsZSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPENpcmNsZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkQ2lyY2xlKG9wdGlvbnMsIChjaXJjbGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAoY2lyY2xlKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBjaXJjbGUuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IENpcmNsZSh0aGlzLCBjaXJjbGUpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBjaXJjbGUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaXJjbGUgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge0NpcmNsZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7Q2lyY2xlfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRDaXJjbGVTeW5jKG9wdGlvbnM6IENpcmNsZU9wdGlvbnMpOiBDaXJjbGUge1xuICAgIGNvbnN0IGNpcmNsZTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkQ2lyY2xlKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gY2lyY2xlLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBDaXJjbGUodGhpcywgY2lyY2xlKTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgY2lyY2xlLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIHBvbHlnb25cbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlnb25PcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UG9seWdvbj59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlnb24ob3B0aW9uczogUG9seWdvbk9wdGlvbnMpOiBQcm9taXNlPFBvbHlnb24gfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxQb2x5Z29uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5Z29uKG9wdGlvbnMsIChwb2x5Z29uOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHBvbHlnb24pIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlnb24uZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlnb24odGhpcywgcG9seWdvbik7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIHBvbHlnb24ub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5Z29uIGluIHN5bmNocm9ub3VzXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQb2x5Z29uT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQb2x5Z29ufVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5Z29uU3luYyhvcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFBvbHlnb24ge1xuICAgIGNvbnN0IHBvbHlnb246IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlnb24ob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5Z29uLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5Z29uKHRoaXMsIHBvbHlnb24pO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBwb2x5Z29uLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWxpbmVcbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlsaW5lT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPFBvbHlsaW5lPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWxpbmUob3B0aW9uczogUG9seWxpbmVPcHRpb25zKTogUHJvbWlzZTxQb2x5bGluZSB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFBvbHlsaW5lPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5bGluZShvcHRpb25zLCAocG9seWxpbmU6IGFueSkgPT4ge1xuICAgICAgICBpZiAocG9seWxpbmUpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlsaW5lLmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5bGluZSh0aGlzLCBwb2x5bGluZSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIHBvbHlsaW5lLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWxpbmUgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlsaW5lT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQb2x5bGluZX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWxpbmVTeW5jKG9wdGlvbnM6IFBvbHlsaW5lT3B0aW9ucyk6IFBvbHlsaW5lIHtcbiAgICBjb25zdCBwb2x5bGluZTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWxpbmUob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBwb2x5bGluZS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWxpbmUodGhpcywgcG9seWxpbmUpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBwb2x5bGluZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHRpbGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7VGlsZU92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8VGlsZU92ZXJsYXk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRUaWxlT3ZlcmxheShvcHRpb25zOiBUaWxlT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPFRpbGVPdmVybGF5IHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8VGlsZU92ZXJsYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFRpbGVPdmVybGF5KG9wdGlvbnMsICh0aWxlT3ZlcmxheTogYW55KSA9PiB7XG4gICAgICAgIGlmICh0aWxlT3ZlcmxheSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gdGlsZU92ZXJsYXkuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IFRpbGVPdmVybGF5KHRoaXMsIHRpbGVPdmVybGF5KTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgdGlsZU92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB0aWxlIG92ZXJsYXkgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge1RpbGVPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtUaWxlT3ZlcmxheX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkVGlsZU92ZXJsYXlTeW5jKG9wdGlvbnM6IFRpbGVPdmVybGF5T3B0aW9ucyk6IFRpbGVPdmVybGF5IHtcbiAgICBjb25zdCB0aWxlT3ZlcmxheTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkVGlsZU92ZXJsYXkob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSB0aWxlT3ZlcmxheS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGlsZU92ZXJsYXkodGhpcywgdGlsZU92ZXJsYXkpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICB0aWxlT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBvcHRpb25zIHtHcm91bmRPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPEdyb3VuZE92ZXJsYXk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRHcm91bmRPdmVybGF5KG9wdGlvbnM6IEdyb3VuZE92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxHcm91bmRPdmVybGF5IHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8R3JvdW5kT3ZlcmxheT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkR3JvdW5kT3ZlcmxheShvcHRpb25zLCAoZ3JvdW5kT3ZlcmxheTogYW55KSA9PiB7XG4gICAgICAgIGlmIChncm91bmRPdmVybGF5KSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBncm91bmRPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBHcm91bmRPdmVybGF5KHRoaXMsIGdyb3VuZE92ZXJsYXkpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBncm91bmRPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZ3JvdW5kIG92ZXJsYXkgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge0dyb3VuZE92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge0dyb3VuZE92ZXJsYXl9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEdyb3VuZE92ZXJsYXlTeW5jKG9wdGlvbnM6IEdyb3VuZE92ZXJsYXlPcHRpb25zKTogR3JvdW5kT3ZlcmxheSB7XG4gICAgY29uc3QgZ3JvdW5kT3ZlcmxheTogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkR3JvdW5kT3ZlcmxheShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGdyb3VuZE92ZXJsYXkuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IEdyb3VuZE92ZXJsYXkodGhpcywgZ3JvdW5kT3ZlcmxheSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIGdyb3VuZE92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBrbWwgb3ZlcmxheVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7S21sT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxLbWxPdmVybGF5Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkS21sT3ZlcmxheShvcHRpb25zOiBLbWxPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8S21sT3ZlcmxheT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPEttbE92ZXJsYXk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZEttbE92ZXJsYXkob3B0aW9ucywgKGttbE92ZXJsYXk6IGFueSkgPT4ge1xuICAgICAgICBpZiAoa21sT3ZlcmxheSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0ga21sT3ZlcmxheS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgS21sT3ZlcmxheSh0aGlzLCBrbWxPdmVybGF5KTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAga21sT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGRpcmVjdGlvbnMgcmVuZGVyZXJcbiAgICogQHBhcmFtIG9wdGlvbnMge0RpcmVjdGlvbnNSZW5kZXJlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7RGlyZWN0aW9uc1JlbmRlcmVyfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGREaXJlY3Rpb25zUmVuZGVyZXJTeW5jKG9wdGlvbnM6IGFueSk6IERpcmVjdGlvbnNSZW5kZXJlciB7XG4gICAgY29uc3QgZGlyZWN0aW9uc1JlbmRlcmVyOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGREaXJlY3Rpb25zUmVuZGVyZXIob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBkaXJlY3Rpb25zUmVuZGVyZXIuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IERpcmVjdGlvbnNSZW5kZXJlcih0aGlzLCBkaXJlY3Rpb25zUmVuZGVyZXIpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBkaXJlY3Rpb25zUmVuZGVyZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJhc2U2NCBlbmNvZGVkIHNjcmVlbiBjYXB0dXJlIG9mIHRoZSBtYXAuXG4gICAqIEBwYXJhbSBvcHRpb25zIHtUb0RhdGFVcmxPcHRpb25zfSBbb3B0aW9uc10gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgdG9EYXRhVVJMKG9wdGlvbnM/OiBUb0RhdGFVcmxPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHsgcmV0dXJuOyB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBHcm91bmRPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYm91bmRzIG9mIHRoZSBHcm91bmRPdmVybGF5XG4gICAqIEBwYXJhbSBib3VuZHMgeyBJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRCb3VuZHMoYm91bmRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBiZWFyaW5nIG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gYmVhcmluZyB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QmVhcmluZyhiZWFyaW5nOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGJlYXJpbmcgdmFsdWVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEJlYXJpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW1hZ2Ugb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBpbWFnZVVybCB7c3RyaW5nfSBVUkwgb2YgaW1hZ2VcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEltYWdlKGltYWdlVXJsOiBzdHJpbmcpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG9wYWNpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5IGZyb20gMC4wIHRvIDEuMFxuICAgKiBAcGFyYW0gb3BhY2l0eSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3BhY2l0eShvcGFjaXR5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IG9wYWNpdHlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0T3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBncm91bmQgb3ZlcmxheSBpcyBjbGlja2FibGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ3JvdW5kIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZ3JvdW5kIG92ZXJsYXkgekluZGV4IG9yZGVyXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGdyb3VuZCBvdmVybGF5IHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBncm91bmQgb3ZlcmxheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkh0bWxJbmZvV2luZG93JyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgSHRtbEluZm9XaW5kb3cgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5IdG1sSW5mb1dpbmRvdykoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgYmFja2dyb3VuZENvbG9yXG4gICAqIEBwYXJhbSBjb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldEJhY2tncm91bmRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHlvdXIgSFRNTCBjb250ZW50cy5cbiAgICogQHBhcmFtIGNvbnRlbnQge2FueX0gU3RyaW5nIGNvbnRhaW5pbmcgdGV4dCBvciBIVE1MIGVsZW1lbnRcbiAgICogQHBhcmFtIGNzc09wdGlvbnM/IHthbnl9IENTUyBzdHlsZXMgZm9yIHRoZSBjb250YWluZXIgZWxlbWVudCBvZiBIVE1MSW5mb1dpbmRvd1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHNldENvbnRlbnQoY29udGVudDogc3RyaW5nIHwgRWxlbWVudCwgY3NzT3B0aW9ucz86IGFueSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIGh0bWxJbmZvV2luZG93XG4gICAqIEBwYXJhbSBtYXJrZXIge01hcmtlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBvcGVuKG1hcmtlcjogYW55KTogYW55IHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgaHRtbEluZm9XaW5kb3dcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBjbG9zZSgpOiB2b2lkIHtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWFya2VyIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXJrZXIgcG9zaXRpb24uXG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb3NpdGlvbihsYXRMbmc6IElMYXRMbmcpOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFya2VyIHBvc2l0aW9uLlxuICAgKiBAcmV0dXJuIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UG9zaXRpb24oKTogSUxhdExuZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIG5vcm1hbCBpbmZvV2luZG93IG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzaG93SW5mb1dpbmRvdygpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBub3JtYWwgaW5mb1dpbmRvdyBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaGlkZUluZm9XaW5kb3coKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmeSB0aGUgYW5pbWF0aW9uIGVpdGhlciBgRFJPUGAgb3IgYEJPVU5DRWBcbiAgICogQHBhcmFtIGFuaW1hdGlvbiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0QW5pbWF0aW9uKGFuaW1hdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91ICoqZG8gbm90IHdhbnQqKiB0byBtb3ZlIHRoZSBtYXAgd2hlbiB5b3UgY2xpY2sgb24gdGhlIG1hcmtlci5cbiAgICogQHBhcmFtIGRpc2FibGVBdXRvUGFuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGlzYWJsZUF1dG9QYW4oZGlzYWJsZUF1dG9QYW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgaWYgeW91IHdhbnQgdG8gaGlkZSB0aGUgbWFya2VyLlxuICAgKiBAcGFyYW0gdmlzaWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXJrZXIgaXMgdmlzaWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRpdGxlIG9mIHRoZSBub3JtYWwgaW5mb1dpbmRvdy5cbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdGl0bGUgc3RyaW5ncy5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBzbmlwcGV0IG9mIHRoZSBub3JtYWwgaW5mb1dpbmRvdy5cbiAgICogQHBhcmFtIHNuaXBwZXQge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFNuaXBwZXQoc25pcHBldDogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc25pcHBldCBzdHJpbmdzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTbmlwcGV0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcmtlciBvcGFjaXR5IGZyb20gMC4wIHRvIDEuMC5cbiAgICogQHBhcmFtIGFscGhhIHtudW1iZXJ9IE9wYWNpdHlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wYWNpdHkoYWxwaGE6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciBvcGFjaXR5LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IE9wYWNpdHlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE9wYWNpdHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgaW5mbyB3aW5kb3cgYW5jaG9yLiBUaGlzIGRlZmF1bHRzIHRvIDUwJSBmcm9tIHRoZSBsZWZ0IG9mIHRoZSBpbWFnZSBhbmQgYXQgdGhlIGJvdHRvbSBvZiB0aGUgaW1hZ2UuXG4gICAqIEBwYXJhbSB4IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gbGVmdCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9IERpc3RhbmNlIGZyb20gdG9wIG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEljb25BbmNob3IoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBpbmZvIHdpbmRvdyBhbmNob3IuIFRoaXMgZGVmYXVsdHMgdG8gNTAlIGZyb20gdGhlIGxlZnQgb2YgdGhlIGltYWdlIGFuZCBhdCB0aGUgdG9wIG9mIHRoZSBpbWFnZS5cbiAgICogQHBhcmFtIHgge251bWJlcn0gRGlzdGFuY2UgZnJvbSBsZWZ0IG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICogQHBhcmFtIHkge251bWJlcn0gRGlzdGFuY2UgZnJvbSB0b3Agb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SW5mb1dpbmRvd0FuY2hvcih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgaW5mb1dpbmRvdyBpcyBzaG93biBvbiB0aGUgbWFya2VyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpc0luZm9XaW5kb3dTaG93bigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSGlnaGVyIHpJbmRleCB2YWx1ZSBvdmVybGF5cyB3aWxsIGJlIGRyYXduIG9uIHRvcCBvZiBsb3dlciB6SW5kZXggdmFsdWUgdGlsZSBsYXllcnMgYW5kIG92ZXJsYXlzLlxuICAgKiBAcGFyYW0geSB7bnVtYmVyfSB6LWluZGV4XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgei1pbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IGFsbG93IGFsbCB1c2VycyB0byBkcmFnIHRoZSBtYXJrZXIuXG4gICAqIEBwYXJhbSBkcmFnZ2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREcmFnZ2FibGUoZHJhZ2dhYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBtYXJrZXIgZHJhZyBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaXNEcmFnZ2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGJlIGZsYXQgbWFya2VyLlxuICAgKiBAcGFyYW0gZmxhdCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZsYXQoZmxhdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGljb24gdXJsIGFuZC9vciBzaXplXG4gICAqIEBwYXJhbSBpY29uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJY29uKGljb246IE1hcmtlckljb24pOiB2b2lkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBtYXJrZXIgcm90YXRpb24gYW5nbGUuXG4gICAqIEBwYXJhbSByb3RhdGlvbiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Um90YXRpb24ocm90YXRpb246IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcmtlciByb3RhdGlvbiBhbmdsZS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Um90YXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIE1hcmtlckNsdXN0ZXIgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBvbmUgbWFya2VyIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBtYXJrZXIge01hcmtlck9wdGlvbnN9IG9uZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gc2tpcFJlZHJhdz8ge2Jvb2xlYW59IG1hcmtlciBjbHVzdGVyIGRvZXMgbm90IHJlZHJhdyB0aGUgbWFya2VyIGNsdXN0ZXIgaWYgdHJ1ZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGFkZE1hcmtlcihtYXJrZXI6IE1hcmtlck9wdGlvbnMpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGQgbWFya2VyIGxvY2F0aW9uc1xuICAgKiBAcGFyYW0gbWFya2VycyB7TWFya2VyT3B0aW9uc1tdfSBtdWx0aXBsZSBsb2NhdGlvblxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkTWFya2VycyhtYXJrZXJzOiBNYXJrZXJPcHRpb25zW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG1hcmtlciBjbHVzdGVyXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNldCgnX292ZXJsYXlzJywgdW5kZWZpbmVkKTtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgUG9seWdvbiBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gcG9pbnRzLlxuICAgKiBAcGFyYW0gcG9pbnRzIHtJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb2ludHMocG9pbnRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzcy5cbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIHBvaW50cy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqL1xuICBnZXRQb2ludHMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4ge1xuICAgIHJldHVybiBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4odGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gaG9sZXMuXG4gICAqIEBwYXJhbSBob2xlcyB7SUxhdExuZ1tdW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRIb2xlcyhob2xlczogSUxhdExuZ1tdW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzcy5cbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIGhvbGVzLlxuICAgKiBAcmV0dXJuIHtCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+fVxuICAgKi9cbiAgZ2V0SG9sZXMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPiB7XG4gICAgY29uc3QgaG9sZXM6IElMYXRMbmdbXVtdID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCk7XG4gICAgY29uc3QgcmVzdWx0czogQmFzZUFycmF5Q2xhc3M8SUxhdExuZ1tdPiA9IG5ldyBCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+KCk7XG4gICAgaG9sZXMuZm9yRWFjaCgoaG9sZTogSUxhdExuZ1tdKSA9PiB7XG4gICAgICByZXN1bHRzLnB1c2goaG9sZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZmlsbGluZyBjb2xvciAoaW5uZXIgY29sb3IpXG4gICAqIEBwYXJhbSBmaWxsQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZpbGxDb2xvcihmaWxsQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcikuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZpbGxDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBzdHJva2UgY29sb3IgKG91dGVyIGNvbG9yKVxuICAgKiBAcGFyYW0gc3Ryb2tlQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlnb24gc3Ryb2tlIGNvbG9yIChvdXRlciBjb2xvcilcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBwb2x5Z29uXG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIGNsaWNrYWJsZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIHBvbHlnb25cbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlnb24gaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSB6SW5kZXgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiB6SW5kZXhcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcG9seWdvbi5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIHN0cm9rZSB3aWR0aFxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBvbHlnb24gc3Ryb2tlIHdpZHRoXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGVkZ2VzIG9mIHRoZSBwb2x5Z29uIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbCBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZiB0aGUgRWFydGguXG4gICAqIEBwYXJhbSBnZW9kZXNpYyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEdlb2Rlc2ljKGdlb2Rlc2ljOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5Z29uIGlzIGdlb2Rlc2ljLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0R2VvZGVzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2x5bGluZSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHBvaW50cy5cbiAgICogQHBhcmFtIHBvaW50cyB7SUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UG9pbnRzKHBvaW50czogSUxhdExuZ1tdKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgQmFzZUFycmF5Q2xhc3NcbiAgICogWW91IGNhbiBtb2RpZnkgdGhlIHBvaW50cy5cbiAgICogQHJldHVybiB7QmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqL1xuICBnZXRQb2ludHMoKTogQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4ge1xuICAgIHJldHVybiBuZXcgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4odGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0UG9pbnRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgZWRnZXMgb2YgdGhlIHBvbHlsaW5lIGFyZSBpbnRlcnByZXRlZCBhcyBnZW9kZXNpYyBhbmQgd2lsbCBmb2xsb3cgdGhlIGN1cnZhdHVyZSBvZiB0aGUgRWFydGguXG4gICAqIEBwYXJhbSBnZW9EZXNpYyB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEdlb0Rlc2ljKGdlb0Rlc2ljOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwb2x5bGluZSBpcyBnZW9kZXNpY1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0R2VvZGVzaWMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUgcG9seWxpbmVcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgcG9seWxpbmVcbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIGNsaWNrYWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSBjb2xvclxuICAgKiBAcGFyYW0gc3Ryb2tlQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlsaW5lIGNvbG9yXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZUNvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHN0cm9rZSB3aWR0aFxuICAgKiBAcGFyYW0gc3Ryb2tlV2lkdGgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHN0cm9rZSB3aWR0aCAodW5pdDogcGl4ZWwpLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5bGluZSB6SW5kZXggb3JkZXIuXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHBvbHlsaW5lIHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwb2x5bGluZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVGlsZU92ZXJsYXkgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgd2hldGhlciB0aGUgdGlsZXMgc2hvdWxkIGZhZGUgaW4uXG4gICAqIEBwYXJhbSBmYWRlSW4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRGYWRlSW4oZmFkZUluOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHdoZXRoZXIgdGhlIHRpbGVzIHNob3VsZCBmYWRlIGluXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGYWRlSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgekluZGV4IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgekluZGV4IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0WkluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgb3BhY2l0eSBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEBwYXJhbSBvcGFjaXR5IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcGFjaXR5KG9wYWNpdHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9wYWNpdHkgb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlXG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0aWxlIG92ZXJsYXkgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRpbGUgc2l6ZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VGlsZVNpemUoKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSB0aWxlIG92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgS21sT3ZlcmxheSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnY2FtZXJhJywge1xuICAgICAgICB2YWx1ZTogdGhpcy5fb2JqZWN0SW5zdGFuY2UuY2FtZXJhLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgJ2ttbERhdGEnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLl9vYmplY3RJbnN0YW5jZS5rbWxEYXRhLFxuICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aWV3cG9ydCB0byBjb250YWlucyBhbGwgb3ZlcmxheXNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldERlZmF1bHRWaWV3cG9ydCgpOiBDYW1lcmFQb3NpdGlvbjxJTGF0TG5nIHwgSUxhdExuZ1tdPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IEdvb2dsZU1hcCB7IHJldHVybiB0aGlzLl9tYXA7IH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBrbWwgb3ZlcmxheVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBrbWwgb3ZlcmxheSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4geyByZXR1cm47IH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBLbWxPdmVybGF5XG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIEttbE92ZXJsYXkgaXMgY2xpY2thYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIEttbE92ZXJsYXlcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIERpcmVjdGlvbnNSZW5kZXJlciBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IEdvb2dsZU1hcCB7IHJldHVybiB0aGlzLl9tYXA7IH1cblxuICAvKipcbiAgICogU2V0IG9wdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wdGlvbnMob3B0aW9uczogRGlyZWN0aW9uc1JlbmRlcmVyT3B0aW9ucyk6IFByb21pc2U8dm9pZD4ge31cblxuICAvKipcbiAgICogU2V0IGRpcmVjdGlvbnNcbiAgICogQHBhcmFtIG9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERpcmVjdGlvbnMocmVzdWx0OiBEaXJlY3Rpb25zUmVzdWx0KTogUHJvbWlzZTx2b2lkPiB7fVxuXG5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCAoemVyby1iYXNlZCkgcm91dGUgaW5kZXggaW4gdXNlIGJ5IHRoaXMgRGlyZWN0aW9uc1JlbmRlcmVyIG9iamVjdC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Um91dGVJbmRleCgpOiBudW1iZXIgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVuZGVyZXIncyBjdXJyZW50IHNldCBvZiBkaXJlY3Rpb25zLlxuICAgKiBAcmV0dXJuIHtEaXJlY3Rpb25zUmVzdWx0fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGlyZWN0aW9ucygpOiBEaXJlY3Rpb25zUmVzdWx0IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGlyZWN0aW9ucyByZW5kZXJlclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG4iXX0=
