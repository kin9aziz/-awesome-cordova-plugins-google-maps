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
var _this = this;
import { AwesomeCordovaNativePlugin, instanceAvailability, cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability, getPromise } from '@awesome-cordova-plugins/core';
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
    StreetViewPanorama.pluginName = "StreetViewPanorama";
    StreetViewPanorama.plugin = "cordova-plugin-googlemaps";
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
    GoogleMap.pluginName = "GoogleMaps";
    GoogleMap.plugin = "cordova-plugin-googlemaps";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2dvb2dsZS1tYXBzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkEwN0pBO0FBMTdKQSxPQUFPLHNHQU9MLGlCQUFpQixFQUNqQixVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQztBQUM1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWxDLElBQU0sNkJBQTZCLEdBQWE7SUFDOUMsY0FBYztJQUNkLDJCQUEyQjtJQUMzQixHQUFHO0NBQ0osQ0FBQzs7SUF1QkEsZ0JBQVksR0FBVyxFQUFFLEdBQVc7UUFDbEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUNqQixDQUFDO0lBRUQsdUJBQU0sR0FBTixVQUFPLEtBQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxDQUFDO0lBQzFELENBQUM7SUFFRCx5QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ25DLENBQUM7SUFFRCwyQkFBVSxHQUFWLFVBQVcsU0FBa0I7UUFDM0IsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLENBQUM7UUFFM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekUsQ0FBQztpQkF4REg7Ozs7SUEwRUUsc0JBQVksTUFBa0I7UUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJ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RUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQzs7SUFDTCxDQUFDO0lBTUQsdUNBQWtCO0lBT2xCLDBCQUFLO0lBRUw7OztPQUdHO0lBQ0gsMkJBQU0sR0FBTixjQUFzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBT3pDLCtCQUFVLGFBQUMsT0FBZ0I7SUFPM0IsK0JBQVU7SUFPVixpQ0FBWSxhQUFDLFNBQWtCO0lBTy9CLGlDQUFZO0lBTVosMkJBQU07cUJBbDNKUjtFQTZ5SmdDLFNBQVM7OztJQStFRCxzQ0FBUztJQUkvQyw0QkFBWSxJQUFlLEVBQUUsZUFBb0I7UUFBakQsWUFDRSxrQkFBTSxlQUFlLENBQUMsU0FFdkI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7SUFDbkIsQ0FBQztJQU9ELGtDQUFLO0lBRUw7OztPQUdHO0lBQ0gsbUNBQU0sR0FBTixjQUFzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBT3pDLHVDQUFVLGFBQUMsT0FBa0M7SUFPN0MsMENBQWEsYUFBQyxNQUF3QjtJQVN0QywwQ0FBYTtJQU9iLDBDQUFhO0lBTWIsbUNBQU07NkJBcDdKUjtFQTQzSndDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHksXG4gIGdldFByb21pc2Vcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuY29uc3QgVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVM6IHN0cmluZ1tdID0gW1xuICAnLnNob3ctcGFnZSAjJyxcbiAgJ2lvbi1yb3V0ZXItb3V0bGV0W21haW5dICMnLFxuICAnIydcbl07XG5cbmV4cG9ydCB0eXBlIE1hcFR5cGUgPVxuICAnTUFQX1RZUEVfTk9STUFMJ1xuICB8ICdNQVBfVFlQRV9ST0FETUFQJ1xuICB8ICdNQVBfVFlQRV9TQVRFTExJVEUnXG4gIHwgJ01BUF9UWVBFX0hZQlJJRCdcbiAgfCAnTUFQX1RZUEVfVEVSUkFJTidcbiAgfCAnTUFQX1RZUEVfTk9ORSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUxhdExuZyB7XG4gIGxhdDogbnVtYmVyO1xuICBsbmc6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXRMbmcgaW1wbGVtZW50cyBJTGF0TG5nIHtcblxuICBsYXQ6IG51bWJlcjtcbiAgbG5nOiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IobGF0OiBudW1iZXIsIGxuZzogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXQgPSBsYXQ7XG4gICAgdGhpcy5sbmcgPSBsbmc7XG4gIH1cblxuICBlcXVhbHMob3RoZXI6IElMYXRMbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5sYXQgPT09IG90aGVyLmxhdCAmJiB0aGlzLmxuZyA9PT0gb3RoZXIubG5nO1xuICB9XG5cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5sYXQgKyAnLCcgKyB0aGlzLmxuZztcbiAgfVxuXG4gIHRvVXJsVmFsdWUocHJlY2lzaW9uPzogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBwcmVjaXNpb24gPSBwcmVjaXNpb24gfHwgNjtcblxuICAgIHJldHVybiB0aGlzLmxhdC50b0ZpeGVkKHByZWNpc2lvbikgKyAnLCcgKyB0aGlzLmxuZy50b0ZpeGVkKHByZWNpc2lvbik7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJTGF0TG5nQm91bmRzIHtcbiAgbm9ydGhlYXN0OiBJTGF0TG5nO1xuICBzb3V0aHdlc3Q6IElMYXRMbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTGF0TG5nQm91bmRzIGltcGxlbWVudHMgSUxhdExuZ0JvdW5kcyB7XG5cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3J0aGVhc3Q6IElMYXRMbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc291dGh3ZXN0OiBJTGF0TG5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3Rvcihwb2ludHM/OiBJTGF0TG5nW10pIHtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKSkuTGF0TG5nQm91bmRzKHBvaW50cyk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdG8gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIGZvcm0gXCJsYXRfc3csbG5nX3N3LGxhdF9uZSxsbmdfbmVcIiBmb3IgdGhpcyBib3VuZHMsIHdoZXJlIFwic3dcIiBjb3JyZXNwb25kcyB0byB0aGUgc291dGh3ZXN0IGNvcm5lciBvZiB0aGUgYm91bmRpbmcgYm94LCB3aGlsZSBcIm5lXCIgY29ycmVzcG9uZHMgdG8gdGhlIG5vcnRoZWFzdCBjb3JuZXIgb2YgdGhhdCBib3guXG4gICAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRlbmRzIHRoaXMgYm91bmRzIHRvIGNvbnRhaW4gdGhlIGdpdmVuIHBvaW50LlxuICAgKiBAcGFyYW0gTGF0TG5nIHtJTGF0TG5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZXh0ZW5kKExhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF0L2xuZyBpcyBpbiB0aGlzIGJvdW5kcy5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbnRhaW5zKExhdExuZzogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21wdXRlcyB0aGUgY2VudGVyIG9mIHRoaXMgTGF0TG5nQm91bmRzXG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENlbnRlcigpOiBMYXRMbmcge1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcENvbnRyb2xPcHRpb25zIHtcblxuICAvKipcbiAgICogVHVybnMgdGhlIGNvbXBhc3Mgb24gb3Igb2ZmLlxuICAgKi9cbiAgY29tcGFzcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR1cm5zIHRoZSBteUxvY2F0aW9uIGJ1dHRvbiBvbiBvciBvZmYuIElmIHR1cm5zIG9uIHRoaXMgYnV0dG9uLCB0aGUgYXBwbGljYXRpb24gZGlzcGxheXMgYSBwZXJtaXNzaW9uIGRpYWxvZyB0byBvYnRhaW4gdGhlIGdlb2xvY2F0aW9uIGRhdGEuXG4gICAqL1xuICBteUxvY2F0aW9uQnV0dG9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHVybnMgdGhlIG15TG9jYXRpb24gY29udHJvbChibHVlIGRvdCkgb24gb3Igb2ZmLiBJZiB0dXJucyBvbiB0aGlzIGNvbnRyb2wsIHRoZSBhcHBsaWNhdGlvbiBkaXNwbGF5cyBhIHBlcm1pc3Npb24gZGlhbG9nIHRvIG9idGFpbiB0aGUgZ2VvbG9jYXRpb24gZGF0YS5cbiAgICovXG4gIG15TG9jYXRpb24/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgaW5kb29yIHBpY2tlciBvbiBvciBvZmYuXG4gICAqL1xuICBpbmRvb3JQaWNrZXI/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiAqKkFuZHJvaWQqKlxuICAgKiBUdXJucyB0aGUgbWFwIHRvb2xiYXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgbWFwVG9vbGJhcj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICoqQW5kcm9pZCoqXG4gICAqIFR1cm5zIHRoZSB6b29tIGNvbnRyb2xsZXIgb24gb3Igb2ZmLlxuICAgKi9cbiAgem9vbT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcEdlc3R1cmVPcHRpb25zIHtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHNjcm9sbCBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgc2Nyb2xsPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGRpc2FibGUgdGhlIHRpbHQgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHRpbHQ/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgZmFsc2UgdG8gZGlzYWJsZSB0aGUgem9vbSBnZXN0dXJlIChkZWZhdWx0OiB0cnVlKVxuICAgKi9cbiAgem9vbT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSB0byBkaXNhYmxlIHRoZSByb3RhdGUgZ2VzdHVyZSAoZGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHJvdGF0ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdvb2dsZU1hcFpvb21PcHRpb25zIHtcbiAgbWluWm9vbT86IG51bWJlcjtcbiAgbWF4Wm9vbT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBQYWRkaW5nT3B0aW9ucyB7XG4gIGxlZnQ/OiBudW1iZXI7XG4gIHRvcD86IG51bWJlcjtcbiAgYm90dG9tPzogbnVtYmVyO1xuICByaWdodD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHb29nbGVNYXBQcmVmZXJlbmNlT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIE1pbmltdW0gYW5kIG1heGltdW0gem9vbSBsZXZlbHMgZm9yIHpvb21pbmcgZ2VzdHVyZXMuXG4gICAqL1xuICB6b29tPzogR29vZ2xlTWFwWm9vbU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIFBhZGRpbmdzIG9mIGNvbnRyb2xzLlxuICAgKi9cbiAgcGFkZGluZz86IEdvb2dsZU1hcFBhZGRpbmdPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBUdXJucyB0aGUgM0QgYnVpbGRpbmdzIGxheWVyIG9uIG9yIG9mZi5cbiAgICovXG4gIGJ1aWxkaW5nPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hlbiBmYWxzZSwgbWFwIGljb25zIGFyZSBub3QgY2xpY2thYmxlLiBBIG1hcCBpY29uIHJlcHJlc2VudHMgYSBwb2ludCBvZiBpbnRlcmVzdCwgYWxzbyBrbm93biBhcyBhIFBPSS4gQnkgZGVmYXVsdCBtYXAgaWNvbnMgYXJlIGNsaWNrYWJsZS5cbiAgICovXG4gIGNsaWNrYWJsZUljb25zPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0cyB0aGUgYm91bmRzIGxpbWl0IGZvciB1c2VyIHBhbm5pbmcgZ2VzdHVyZS5cbiAgICovXG4gIHJlc3RyaWN0aW9uPzogSUxhdExuZ0JvdW5kcyB8IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogQWNjZXB0IGV4dHJhIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVzXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29vZ2xlTWFwT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIG1hcFR5cGUgW29wdGlvbnNdXG4gICAqL1xuICBtYXBUeXBlPzogTWFwVHlwZSB8IHN0cmluZztcblxuICAvKipcbiAgICogY29udHJvbHMgW29wdGlvbnNdXG4gICAqL1xuICBjb250cm9scz86IEdvb2dsZU1hcENvbnRyb2xPcHRpb25zO1xuXG4gIC8qKlxuICAgKiBnZXN0dXJlcyBbb3B0aW9uc11cbiAgICovXG4gIGdlc3R1cmVzPzogR29vZ2xlTWFwR2VzdHVyZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIE1hcCBzdHlsZXMgW29wdGlvbnNdXG4gICAqIEByZWYgaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vbWFwcy9kb2N1bWVudGF0aW9uL2phdmFzY3JpcHQvc3R5bGUtcmVmZXJlbmNlXG4gICAqL1xuICBzdHlsZXM/OiBhbnlbXTtcblxuICAvKipcbiAgICogSW5pdGlhbCBjYW1lcmEgcG9zaXRpb24gW29wdGlvbnNdXG4gICAqL1xuICBjYW1lcmE/OiBDYW1lcmFQb3NpdGlvbjxhbnk+O1xuXG4gIC8qKlxuICAgKiBwcmVmZXJlbmNlcyBbb3B0aW9uc11cbiAgICovXG4gIHByZWZlcmVuY2VzPzogR29vZ2xlTWFwUHJlZmVyZW5jZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvc2l0aW9uPFQ+IHtcbiAgLyoqXG4gICAqIFRoZSBjZW50ZXIgbG9jYXRpb24gb2YgdGhlIGNhbWVyYSB2aWV3LlxuICAgKlxuICAgKiBbdXNhZ2UgMV1cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZz4gPSB7XG4gICAqICAgdGFyZ2V0OiB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICB6b29tOiAxMFxuICAgKiB9XG4gICAqXG4gICAqIFt1c2FnZSAyXSBUaGUgem9vbSBwcm9wZXJ0eSBpcyBpZ25vcmVkIHdoZW4geW91IHNwZWNpZnkgbXVsdGlwbGUgcG9zaXRpb25cbiAgICpcbiAgICogbGV0IGNhbWVyYVBvczogQ2FtZXJhUG9zaXRpb248SUxhdExuZ1tdPiA9IHtcbiAgICogICB0YXJnZXQ6IFtcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufSxcbiAgICogICAgICB7bGF0OiAuLi4sIGxuZzogLi4ufVxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgdGFyZ2V0PzogVDtcbiAgLyoqXG4gICAqIFZpZXcgYW5nbGVcbiAgICovXG4gIHRpbHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBab29tIGxldmVsXG4gICAqL1xuICB6b29tPzogbnVtYmVyO1xuICAvKipcbiAgICogTWFwIG9yaWVudGF0aW9uXG4gICAqL1xuICBiZWFyaW5nPzogbnVtYmVyO1xuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIG9mIGFuaW1hdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICovXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xuICAvKipcbiAgICogQ2FtZXJhIHBhZGRpbmcgaW4gcGl4ZWxcbiAgICovXG4gIHBhZGRpbmc/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2lyY2xlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBDZW50ZXIgcG9zaXRpb24gb2YgY2lyY2xlXG4gICAqL1xuICBjZW50ZXI6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFJhZGl1cyBvZiBjaXJjbGUgaW4gbWV0ZXJcbiAgICovXG4gIHJhZGl1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHN0cm9rZSBjb2xvclxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBzdHJva2VDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2Ugd2lkdGggaW4gcGl4ZWxcbiAgICovXG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgY2lyY2xlXG4gICAqIChyZ2IsIHJnYmEsICNSUkdHQkIsIFwiY29sb3JuYW1lXCIsIC4uLmV0YylcbiAgICovXG4gIGZpbGxDb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVjZWl2ZSB0aGUgQ0lSQ0xFX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCB0byBmYWxzZSB0byBoaWRlXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogWi1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEdlb2NvZGVyUmVxdWVzdCB7XG5cbiAgLyoqXG4gICAqIFRoZSBhZGRyZXNzIHByb3BlcnR5IG9yIHBvc2l0aW9uIHByb3BlcnR5IGlzIHJlcXVpcmVkLlxuICAgKiBZb3UgY2FuIG5vdCBzcGVjaWZ5IGJvdGggcHJvcGVydHkgYXQgdGhlIHNhbWUgdGltZS5cbiAgICpcbiAgICogW2dlb2NvZGluZyB1c2FnZTFdXG4gICAqIGxldCByZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QgPSB7XG4gICAqICAgYWRkcmVzczogXCJMb3MgQW5nZWxlcywgQ2FsaWZvcm5pYSwgVVNBXCJcbiAgICogfVxuICAgKlxuICAgKiBbZ2VvY29kaW5nIHVzYWdlMl1cbiAgICogbGV0IHJlcXVlc3Q6IEdlb2NvZGVyUmVxdWVzdCA9IHtcbiAgICogICBhZGRyZXNzOiBbXG4gICAqICAgIFwiTG9zIEFuZ2VsZXMsIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgICBcIlNhbiBGcmFuY2lzY28sIENhbGlmb3JuaWEsIFVTQVwiLFxuICAgKiAgIF1cbiAgICogfVxuICAgKi9cbiAgYWRkcmVzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuXG4gIC8qKlxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UxXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiB7XCJsYXRcIjogMzcuNDIxNjU1LCBcImxuZ1wiOiAtMTIyLjA4NTYzN31cbiAgICogfVxuICAgKlxuICAgKiBbcmV2ZXJzZS1nZW9jb2RpbmcgdXNhZ2UyXVxuICAgKiBsZXQgcmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0ID0ge1xuICAgKiAgIHBvc2l0aW9uOiBbXG4gICAqICAgIHtcImxhdFwiOiAzNy40MjE2NTUsIFwibG5nXCI6IC0xMjIuMDg1NjM3fSxcbiAgICogICAge1wibGF0XCI6IDM3LjMzMiwgXCJsbmdcIjogLTEyMi4wMzA3ODF9XG4gICAqICAgXVxuICAgKiB9XG4gICAqL1xuICBwb3NpdGlvbj86IElMYXRMbmcgfCBJTGF0TG5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgR2VvY29kZXJSZXN1bHQge1xuICBhZG1pbkFyZWE/OiBzdHJpbmc7XG4gIGNvdW50cnk/OiBzdHJpbmc7XG4gIGNvdW50cnlDb2RlPzogc3RyaW5nO1xuICBleHRyYT86IHtcbiAgICBmZWF0dXJlTmFtZT86IHN0cmluZztcbiAgICBsaW5lcz86IHN0cmluZ1tdO1xuICAgIHBlcm1pc2VzPzogc3RyaW5nO1xuICAgIHBob25lPzogc3RyaW5nO1xuICAgIHVybD86IHN0cmluZ1xuICB9O1xuICBsb2NhbGU/OiBzdHJpbmc7XG4gIGxvY2FsaXR5Pzogc3RyaW5nO1xuICBwb3NpdGlvbj86IElMYXRMbmc7XG4gIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gIHN1YkFkbWluQXJlYT86IHN0cmluZztcbiAgc3ViTG9jYWxpdHk/OiBzdHJpbmc7XG4gIHN1YlRob3JvdWdoZmFyZT86IHN0cmluZztcbiAgdGhvcm91Z2hmYXJlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhdGhFbGV2YXRpb25SZXF1ZXN0IHtcbiAgcGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz47XG4gIHNhbXBsZXM6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2NhdGlvbkVsZXZhdGlvblJlcXVlc3Qge1xuICBsb2NhdGlvbnM6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+O1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgRWxldmF0aW9uUmVzdWx0IHtcbiAgZWxldmF0aW9uOiBudW1iZXI7XG4gIGxvY2F0aW9uOiBJTGF0TG5nO1xuICByZXNvbHV0aW9uOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aW9uc1JlbmRlcmVyT3B0aW9ucyB7XG5cbiAgLyoqXG4gICAqIGRpcmVjdGlvbnMgW0RpcmVjdGlvbnNSZXN1bHRdXG4gICAqL1xuICBkaXJlY3Rpb25zPzogRGlyZWN0aW9uc1Jlc3VsdDtcblxuICAvKipcbiAgICogZHJhZ2dhYmxlIFtvcHRpb25zXVxuICAgKi9cbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogaGlkZVJvdXRlTGlzdCBbb3B0aW9uc11cbiAgICovXG4gIGhpZGVSb3V0ZUxpc3Q/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgSW5mb1dpbmRvdyBpbiB3aGljaCB0byByZW5kZXIgdGV4dCBpbmZvcm1hdGlvbiB3aGVuIGEgbWFya2VyIGlzIGNsaWNrZWQuIEV4aXN0aW5nIGluZm8gd2luZG93IGNvbnRlbnQgd2lsbCBiZSBvdmVyd3JpdHRlbiBhbmQgaXRzIHBvc2l0aW9uIG1vdmVkLiBJZiBubyBpbmZvIHdpbmRvdyBpcyBzcGVjaWZpZWQsIHRoZSBEaXJlY3Rpb25zUmVuZGVyZXIgd2lsbCBjcmVhdGUgYW5kIHVzZSBpdHMgb3duIGluZm8gd2luZG93LiBUaGlzIHByb3BlcnR5IHdpbGwgYmUgaWdub3JlZCBpZiBzdXBwcmVzc0luZm9XaW5kb3dzIGlzIHNldCB0byB0cnVlLlxuICAgKi9cbiAgaW5mb1dpbmRvdz86IEh0bWxJbmZvV2luZG93O1xuXG4gIC8qKlxuICAgKiBPcHRpb25zIGZvciB0aGUgbWFya2Vycy4gQWxsIG1hcmtlcnMgcmVuZGVyZWQgYnkgdGhlIERpcmVjdGlvbnNSZW5kZXJlciB3aWxsIHVzZSB0aGVzZSBvcHRpb25zLlxuICAgKi9cbiAgbWFya2VyT3B0aW9ucz86IE1hcmtlck9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIHBhbmVsIFtIVE1MRWxlbWVudCB8IHN0cmluZ11cbiAgICovXG4gIHBhbmVsPzogSFRNTEVsZW1lbnQgfCBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHBvbHlsaW5lT3B0aW9ucyBbUG9seWxpbmVPcHRpb25zXVxuICAgKiBPcHRpb25zIGZvciB0aGUgcG9seWxpbmVzLiBBbGwgcG9seWxpbmVzIHJlbmRlcmVkIGJ5IHRoZSBEaXJlY3Rpb25zUmVuZGVyZXIgd2lsbCB1c2UgdGhlc2Ugb3B0aW9ucy5cbiAgICovXG4gIHBvbHlsaW5lT3B0aW9ucz86IFBvbHlsaW5lT3B0aW9ucztcblxuICAvKipcbiAgICogQnkgZGVmYXVsdCwgdGhlIGlucHV0IG1hcCBpcyBjZW50ZXJlZCBhbmQgem9vbWVkIHRvIHRoZSBib3VuZGluZyBib3ggb2YgdGhpcyBzZXQgb2YgZGlyZWN0aW9ucy4gSWYgdGhpcyBvcHRpb24gaXMgc2V0IHRvIHRydWUsIHRoZSB2aWV3cG9ydCBpcyBsZWZ0IHVuY2hhbmdlZCwgdW5sZXNzIHRoZSBtYXAncyBjZW50ZXIgYW5kIHpvb20gd2VyZSBuZXZlciBzZXQuXG4gICAqL1xuICBwcmVzZXJ2ZVZpZXdwb3J0PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVGhlIGluZGV4IG9mIHRoZSByb3V0ZSB3aXRoaW4gdGhlIERpcmVjdGlvbnNSZXN1bHQgb2JqZWN0LiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyAwLlxuICAgKi9cbiAgcm91dGVJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU3VwcHJlc3MgdGhlIHJlbmRlcmluZyBvZiBpbmZvIHdpbmRvd3MuXG4gICAqL1xuICBzdXBwcmVzc0luZm9XaW5kb3dzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3VwcHJlc3MgdGhlIHJlbmRlcmluZyBvZiBtYXJrZXJzLlxuICAgKi9cbiAgc3VwcHJlc3NNYXJrZXJzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU3VwcHJlc3MgdGhlIHJlbmRlcmluZyBvZiBwb2x5bGluZXMuXG4gICAqL1xuICBzdXBwcmVzc1BvbHlsaW5lcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgdHlwZSBUcmFmZmljTW9kZWwgPVxuICAnQkVTVF9HVUVTUycgfFxuICAnT1BUSU1JU1RJQycgfFxuICAnUEVTU0lNSVNUSUMnO1xuXG5leHBvcnQgdHlwZSBUcmFuc2l0TW9kZSA9XG4gICdCVVMnIHxcbiAgJ1JBSUwnIHxcbiAgJ1NVQldBWScgfFxuICAnVFJBSU4nIHxcbiAgJ1RSQU0nO1xuXG5leHBvcnQgdHlwZSBUcmFuc2l0Um91dGVQcmVmZXJlbmNlID1cbiAgJ0ZFV0VSX1RSQU5TRkVSUycgfFxuICAnTEVTU19XQUxLSU5HJztcblxuZXhwb3J0IHR5cGUgVW5pdFN5c3RlbSA9XG4gICdJTVBFUklBTCcgfFxuICAnTUVUUklDJztcblxuXG5leHBvcnQgdHlwZSBUcmF2ZWxNb2RlID1cbiAgJ0JJQ1lDTElORycgfFxuICAnRFJJVklORycgfFxuICAnVFJBTlNJVCcgfFxuICAnV0FMS0lORyc7XG5cbmV4cG9ydCB0eXBlIFZlaGljbGVUeXBlID1cbiAgJ0JVUycgfFxuICAnQ0FCTEVfQ0FSJyB8XG4gICdDT01NVVRFUl9UUkFJTicgfFxuICAnRkVSUlknIHxcbiAgJ0ZVTklDVUxBUicgfFxuICAnR09ORE9MQV9MSUZUJyB8XG4gICdIRUFWWV9SQUlMJyB8XG4gICdISUdIX1NQRUVEX1RSQUlOJyB8XG4gICdJTlRFUkNJVFlfQlVTJyB8XG4gICdNRVRST19SQUlMJyB8XG4gICdNT05PUkFJTCcgfFxuICAnT1RIRVInIHxcbiAgJ1JBSUwnIHxcbiAgJ1NIQVJFX1RBWEknIHxcbiAgJ1NVQldBWScgfFxuICAnVFJBTScgfFxuICAnVFJPTExFWUJVUyc7XG5cblxuZXhwb3J0IGNvbnN0IFRyYWZmaWNNb2RlbElkID0ge1xuICBCRVNUX0dVRVNTOiAnQkVTVF9HVUVTUycsXG4gIE9QVElNSVNUSUM6ICdPUFRJTUlTVElDJyxcbiAgUEVTU0lNSVNUSUM6ICdQRVNTSU1JU1RJQydcbn07XG5cbmV4cG9ydCBjb25zdCBUcmFuc2l0TW9kZUlkID0ge1xuICBCVVM6ICdCVVMnLFxuICBSQUlMOiAnUkFJTCcsXG4gIFNVQldBWTogJ1NVQldBWScsXG4gIFRSQUlOOiAnVFJBSU4nLFxuICBUUkFNOiAnVFJBTSdcbn07XG5cbmV4cG9ydCBjb25zdCBUcmFuc2l0Um91dGVQcmVmZXJlbmNlSWQgPSB7XG4gIEZFV0VSX1RSQU5TRkVSUzogJ0ZFV0VSX1RSQU5TRkVSUycsXG4gIExFU1NfV0FMS0lORzogJ0xFU1NfV0FMS0lORydcbn07XG5cbmV4cG9ydCBjb25zdCBVbml0U3lzdGVtSWQgPSB7XG4gIElNUEVSSUFMOiAnSU1QRVJJQUwnLFxuICBNRVRSSUM6ICdNRVRSSUMnXG59O1xuXG5cbmV4cG9ydCBjb25zdCBUcmF2ZWxNb2RlSWQgPSB7XG4gIEJJQ1lDTElORzogJ0JJQ1lDTElORycsXG4gIERSSVZJTkc6ICdEUklWSU5HJyxcbiAgVFJBTlNJVDogJ1RSQU5TSVQnLFxuICBXQUxLSU5HOiAnV0FMS0lORydcbn07XG5cbmV4cG9ydCBjb25zdCBWZWhpY2xlVHlwZUlkID0ge1xuICBCVVM6ICdCVVMnLFxuICBDQUJMRV9DQVI6ICdDQUJMRV9DQVInLFxuICBDT01NVVRFUl9UUkFJTjogJ0NPTU1VVEVSX1RSQUlOJyxcbiAgRkVSUlk6ICdGRVJSWScsXG4gIEZVTklDVUxBUjogJ0ZVTklDVUxBUicsXG4gIEdPTkRPTEFfTElGVDogJ0dPTkRPTEFfTElGVCcsXG4gIEhFQVZZX1JBSUw6ICdIRUFWWV9SQUlMJyxcbiAgSElHSF9TUEVFRF9UUkFJTjogJ0hJR0hfU1BFRURfVFJBSU4nLFxuICBJTlRFUkNJVFlfQlVTOiAnSU5URVJDSVRZX0JVUycsXG4gIE1FVFJPX1JBSUw6ICdNRVRST19SQUlMJyxcbiAgTU9OT1JBSUw6ICdNT05PUkFJTCcsXG4gIE9USEVSOiAnT1RIRVInLFxuICBSQUlMOiAnUkFJTCcsXG4gIFNIQVJFX1RBWEk6ICdTSEFSRV9UQVhJJyxcbiAgU1VCV0FZOiAnU1VCV0FZJyxcbiAgVFJBTTogJ1RSQU0nLFxuICBUUk9MTEVZQlVTOiAnVFJPTExFWUJVUydcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGxhY2Uge1xuICBsb2NhdGlvbj86IElMYXRMbmcgfCBMYXRMbmc7XG4gIHBsYWNlSWQ/OiBzdHJpbmc7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNXYXlwb2ludCB7XG4gIGxvY2F0aW9uPzogc3RyaW5nIHwgSUxhdExuZyB8IExhdExuZyB8IFBsYWNlO1xuICBzdG9wb3Zlcj86IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNSZXF1ZXN0IHtcbiAgYXZvaWRGZXJyaWVzPzogYm9vbGVhbjtcbiAgYXZvaWRIaWdod2F5cz86IGJvb2xlYW47XG4gIGF2b2lkVG9sbHM/OiBib29sZWFuO1xuICBkZXN0aW5hdGlvbjogc3RyaW5nIHwgSUxhdExuZyB8IExhdExuZyB8IFBsYWNlO1xuICBkcml2aW5nT3B0aW9ucz86IERyaXZpbmdPcHRpb25zO1xuICBvcHRpbWl6ZVdheXBvaW50cz86IGJvb2xlYW47XG4gIG9yaWdpbjogc3RyaW5nIHwgSUxhdExuZyB8IExhdExuZyB8IFBsYWNlO1xuICBwcm92aWRlUm91dGVBbHRlcm5hdGl2ZXM/OiBib29sZWFuO1xuICByZWdpb24/OiBzdHJpbmc7XG4gIHRyYW5zaXRPcHRpb25zPzogVHJhbnNpdE9wdGlvbnM7XG4gIHRyYXZlbE1vZGU6IFRyYXZlbE1vZGUgfCBzdHJpbmc7XG4gIHVuaXRTeXN0ZW0/OiBVbml0U3lzdGVtIHwgc3RyaW5nO1xuICB3YXlwb2ludHM/OiBEaXJlY3Rpb25zV2F5cG9pbnRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEcml2aW5nT3B0aW9ucyB7XG4gIGRlcGFydHVyZVRpbWU6IERhdGU7XG4gIHRyYWZmaWNNb2RlbD86IFRyYWZmaWNNb2RlbDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0T3B0aW9ucyB7XG4gIGFycml2YWxUaW1lPzogRGF0ZTtcbiAgZGVwYXJ0dXJlVGltZT86IERhdGU7XG4gIG1vZGVzPzogVHJhbnNpdE1vZGVbXTtcbiAgcm91dGluZ1ByZWZlcmVuY2U/OiBUcmFuc2l0Um91dGVQcmVmZXJlbmNlO1xufVxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0RmFyZSB7XG4gIGN1cnJlbmN5OiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aW9uc1Jlc3VsdCB7XG4gIHJlcXVlc3Q/OiBEaXJlY3Rpb25zUmVxdWVzdDtcbiAgZ2VvY29kZWRfd2F5cG9pbnRzOiBEaXJlY3Rpb25zR2VvY29kZWRXYXlwb2ludFtdO1xuICByb3V0ZXM6IERpcmVjdGlvbnNSb3V0ZVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNHZW9jb2RlZFdheXBvaW50IHtcbiAgcGFydGlhbF9tYXRjaDogYm9vbGVhbjtcbiAgcGxhY2VfaWQ6IHN0cmluZztcbiAgdHlwZXM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNSb3V0ZSB7XG4gIGJvdW5kczogSUxhdExuZ0JvdW5kcztcbiAgY29weXJpZ2h0czogc3RyaW5nO1xuICBmYXJlOiBUcmFuc2l0RmFyZTtcbiAgbGVnczogRGlyZWN0aW9uc0xlZ1tdO1xuICBvdmVydmlld19wYXRoOiBJTGF0TG5nW107XG4gIG92ZXJ2aWV3X3BvbHlsaW5lOiBzdHJpbmc7XG4gIHdhcm5pbmdzOiBzdHJpbmdbXTtcbiAgd2F5cG9pbnRfb3JkZXI6IG51bWJlcltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdGlvbnNMZWcge1xuICBhcnJpdmFsX3RpbWU6IFRpbWU7XG4gIGRlcGFydHVyZV90aW1lOiBUaW1lO1xuICBkaXN0YW5jZTogRGlzdGFuY2U7XG4gIGR1cmF0aW9uOiBEdXJhdGlvbjtcbiAgZHVyYXRpb25faW5fdHJhZmZpYzogRHVyYXRpb247XG4gIGVuZF9hZGRyZXNzOiBzdHJpbmc7XG4gIGVuZF9sb2NhdGlvbjogSUxhdExuZztcbiAgc3RhcnRfYWRkcmVzczogc3RyaW5nO1xuICBzdGFydF9sb2NhdGlvbjogSUxhdExuZztcbiAgc3RlcHM6IERpcmVjdGlvbnNTdGVwW107XG4gIHZpYV93YXlwb2ludHM6IElMYXRMbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lIHtcbiAgdGV4dDogc3RyaW5nO1xuICB0aW1lX3pvbmU6IHN0cmluZztcbiAgdmFsdWU6IERhdGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIERpc3RhbmNlIHtcbiAgdGV4dDogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBEdXJhdGlvbiB7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0aW9uc1N0ZXAge1xuICBkaXN0YW5jZTogRGlzdGFuY2U7XG4gIGR1cmF0aW9uOiBEdXJhdGlvbjtcbiAgZW5kX2xvY2F0aW9uOiBJTGF0TG5nO1xuICBpbnN0cnVjdGlvbnM6IHN0cmluZztcbiAgcGF0aDogSUxhdExuZ1tdO1xuICBzdGFydF9sb2NhdGlvbjogSUxhdExuZztcbiAgc3RlcHM6IERpcmVjdGlvbnNTdGVwW107XG4gIHRyYW5zaXQ6IFRyYW5zaXREZXRhaWxzO1xuICB0cmF2ZWxfbW9kZTogVHJhdmVsTW9kZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0RGV0YWlscyB7XG4gIGFycml2YWxfc3RvcDogVHJhbnNpdFN0b3A7XG4gIGFycml2YWxfdGltZTogVGltZTtcbiAgZGVwYXJ0dXJlX3N0b3A6IFRyYW5zaXRTdG9wO1xuICBkZXBhcnR1cmVfdGltZTogVGltZTtcbiAgaGVhZHNpZ246IHN0cmluZztcbiAgaGVhZHdheTogbnVtYmVyO1xuICBsaW5lOiBUcmFuc2l0TGluZTtcbiAgbnVtX3N0b3BzOiBudW1iZXI7XG4gIHRyaXBfc2hvcnRfbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRTdG9wIHtcbiAgbG9jYXRpb246IElMYXRMbmc7XG4gIG5hbWU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUcmFuc2l0TGluZSB7XG4gIGFnZW5jaWVzOiBUcmFuc2l0QWdlbmN5W107XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGljb246IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzaG9ydF9uYW1lOiBzdHJpbmc7XG4gIHRleHRfY29sb3I6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHZlaGljbGU6IFRyYW5zaXRWZWhpY2xlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRBZ2VuY3kge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBob25lOiBzdHJpbmc7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRyYW5zaXRWZWhpY2xlIHtcbiAgaWNvbjogc3RyaW5nO1xuICBsb2NhbF9pY29uOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogVmVoaWNsZVR5cGU7XG59XG5leHBvcnQgaW50ZXJmYWNlIEdyb3VuZE92ZXJsYXlPcHRpb25zIHtcbiAgLyoqXG4gICAqIFVSTCBvZiBvdmVybGF5XG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogQm91bmRzLCBhcnJheSBvZiBJTGF0TG5nXG4gICAqL1xuICBib3VuZHM6IElMYXRMbmdbXTtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gcmVjZWl2ZSB0aGUgR1JPVU5EX09WRVJMQVlfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRvIGZhbHNlIHRvIGhpZGVcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBPcGFjaXR5LiBGcm9tIDAuMCB0byAxLjAgLlxuICAgKi9cbiAgb3BhY2l0eT86IG51bWJlcjtcblxuICAvKipcbiAgICogQmVhcmluZ1xuICAgKi9cbiAgYmVhcmluZz86IG51bWJlcjtcblxuICAvKipcbiAgICogWi1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckljb24ge1xuICB1cmw/OiBzdHJpbmc7XG4gIHNpemU/OiB7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgaGVpZ2h0PzogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlck9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIGljb24gaW1hZ2UgdXJsIG9yIHByb3BlcnRpZXMuIEFsc28geW91IGNhbiBzcGVjaWZ5IEhUTUwgQ29sb3IgdmFsdWVzLiBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gc3BlY2lmeSB0aGUgaW1hZ2UgYXMgQmFzZTY0XG4gICAqL1xuICBpY29uPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgc25pcHBldCBvZiB0aGUgaW5mb1dpbmRvdy5cbiAgICovXG4gIHNuaXBwZXQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgbWFya2VyLlxuICAgKi9cbiAgcG9zaXRpb246IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqICBTcGVjaWZ5IHRoZSBhbmNob3Igb2YgdGhlIEluZm9XaW5kb3dcbiAgICovXG4gIGluZm9XaW5kb3dBbmNob3I/OiBudW1iZXJbXTtcblxuICAvKipcbiAgICogXHRTcGVjaWZ5IHRoZSBhbmNob3Igb2YgaWNvbiBpbWFnZVxuICAgKi9cbiAgYW5jaG9yPzogbnVtYmVyW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGVuYWJsZSB0byBkcmFnIHRoZSBtYXJrZXIuIChEZWZhdWx0OiBmYWxzZSkgSW1wb3J0YW50ISBEcmFnIHN0YXJ0cyBhZnRlciBsb25nIHByZXNzZWQgb24gdGhlIG1hcmtlci5cbiAgICovXG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byB1c2UgYSBmbGF0IG1hcmtlci4gKERlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZmxhdD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqICBTZXQgcm90YXRpb24gYW5nbGUuIChEZWZhdWx0OiAwKVxuICAgKi9cbiAgcm90YXRpb24/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlLiAoRGVmYXVsdDogdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBvcHRpb25zIGZvciB0aXRsZS4gVGhpcyBwcm9wZXJ0eSB3b3JrIGZvciBub3JtYWwgSW5mb1dpbmRvdy5cbiAgICovXG4gIHN0eWxlcz86IGFueTtcblxuICAvKipcbiAgICogV2hpY2ggYW5pbWF0aW9uIHRvIHBsYXkgd2hlbiBtYXJrZXIgaXMgYWRkZWQgdG8gYSBtYXAuXG4gICAqL1xuICBhbmltYXRpb24/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEhpZ2hlciB6SW5kZXggdmFsdWUgb3ZlcmxheXMgd2lsbCBiZSBkcmF3biBvbiB0b3Agb2YgbG93ZXIgekluZGV4IHZhbHVlIHRpbGUgbGF5ZXJzIGFuZCBvdmVybGF5cy5cbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvIHBhbm5pbmcgd2hlbiB0aGUgbWFya2VyIGlzIGNsaWNrZWQuXG4gICAqL1xuICBkaXNhYmxlQXV0b1Bhbj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya2VyTGFiZWwge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGJvbGQgZm9udFxuICAgKi9cbiAgYm9sZD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNldCBmb250IHNpemUgaW4gcGl4ZWxcbiAgICovXG4gIGZvbnRTaXplPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBjb2xvciBzdHJpbmdzXG4gICAqL1xuICBjb2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgdXNlIGl0YWxpYyBmb250XG4gICAqL1xuICBpdGFsaWM/OiBib29sZWFuO1xuXG59XG5leHBvcnQgaW50ZXJmYWNlIE1hcmtlckNsdXN0ZXJJY29uIHtcbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIGNsdXN0ZXJpbmdcbiAgICovXG4gIG1pbj86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2YgY2x1c3RlcmluZ1xuICAgKi9cbiAgbWF4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBhbmNob3IgcG9zaXRpb24gb2YgdGhlIG1hcmtlclxuICAgKi9cbiAgYW5jaG9yPzogYW55O1xuXG4gIC8qKlxuICAgKiBsYWJlbCBvcHRpb24gZm9yIGNsdXN0ZXJlZCBtYXJrZXJcbiAgICovXG4gIGxhYmVsPzogTWFya2VyTGFiZWw7XG5cbiAgLyoqXG4gICAqIGljb24gdXJsXG4gICAqL1xuICB1cmw6IHN0cmluZztcblxuICAvKipcbiAgICogaWNvbiBzaXplXG4gICAqL1xuICBzaXplPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrZXJDbHVzdGVyT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBNYXhpbXVtIHpvb20gbGV2ZWwgb2YgY2x1c3RlcmluZ1xuICAgKiAoZGVmYXVsdDogMTUsIG1heDogMTgpXG4gICAqL1xuICBtYXhab29tTGV2ZWw/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERyYXcgYSByZWN0YW5nbGUgdGhhdCBjb250YWlucyBhbGwgbG9jYXRpb25zIG9mIGNsdXN0ZXJlZCB3aGVuIHlvdSB0YXAgb24gYSBjbHVzdGVyIG1hcmtlci5cbiAgICogKGRlZmF1bHQ6IHRydWUpXG4gICAqL1xuICBib3VuZHNEcmF3PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogUG9zaXRpb24gbGlzdFxuICAgKiBbXG4gICAqICAge3RpdGxlOiBcInN0b3JlIEFcIiwgcG9zaXRpb246IHtsYXQ6IC4uLiwgbG5nOiAuLi59fSxcbiAgICogICB7dGl0bGU6IFwic3RvcmUgQlwiLCBwb3NpdGlvbjoge2xhdDogLi4uLCBsbmc6IC4uLn19LFxuICAgKiAgIHt0aXRsZTogXCJzdG9yZSBDXCIsIHBvc2l0aW9uOiB7bGF0OiAuLi4sIGxuZzogLi4ufX1cbiAgICogXVxuICAgKi9cbiAgbWFya2VyczogTWFya2VyT3B0aW9uc1tdO1xuXG4gIC8qKlxuICAgKiBDb25kaXRpb25zIG9mIGNsdXN0ZXJpbmdcbiAgICogW1xuICAgKiAgIHtpY29uOiBcImFzc2V0cy9zbWFsbC5wbmdcIiwgbWluOiAyLCBtYXg6IDEwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbWlkZGxlLnBuZ1wiLCBtaW46IDExLCBtYXg6IDMwfSxcbiAgICogICB7aWNvbjogXCJhc3NldHMvbGFyZ2UucG5nXCIsIG1pbjogMzF9XG4gICAqIF1cbiAgICovXG4gIGljb25zOiBNYXJrZXJDbHVzdGVySWNvbltdO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE15TG9jYXRpb24ge1xuICBsYXRMbmc/OiBMYXRMbmc7XG4gIGVsYXBzZWRSZWFsdGltZU5hbm9zPzogYW55O1xuICB0aW1lPzogc3RyaW5nO1xuICBhY2N1cmFjeT86IGFueTtcbiAgYmVhcmluZz86IG51bWJlcjtcbiAgYWx0aXR1ZGU/OiBhbnk7XG4gIHNwZWVkPzogbnVtYmVyO1xuICBwcm92aWRlcj86IGFueTtcbiAgaGFzaENvZGU/OiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTXlMb2NhdGlvbk9wdGlvbnMge1xuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gdHJ5IHRvIHVzZSBHUFMgbWFuZGF0b3J5LlxuICAgKiBJbiBmYWxzZSwgdGhlIHBsdWdpbiB0cnkgdG8gdXNlIEdQUyBhbmQgbmV0d29yay5cbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgZW5hYmxlSGlnaEFjY3VyYWN5PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb2x5Z29uT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXSB0byBzcGVjaWZ5IHRoZSB2ZXJ0aXhlcy5cbiAgICogWW91IG5lZWQgdG8gY29udGFpbiB0d28gcG9pbnRzIGF0IGxlYXN0LlxuICAgKi9cbiAgcG9pbnRzOiBJTGF0TG5nW107XG5cbiAgLyoqXG4gICAqIFNldCB0cnVlIGlmIHlvdSB3YW50IHRvIGRyYXcgdGhlIGN1cnZlIHBvbHlnb24gYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICBzdHJva2VXaWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRoZSBpbnNpZGUgY29sb3Igb2YgcG9seWdvblxuICAgKiAocmdiLCByZ2JhLCAjUlJHR0JCLCBcImNvbG9ybmFtZVwiLCAuLi5ldGMpXG4gICAqL1xuICBmaWxsQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBjcmVhdGUgaW52aXNpYmxlIHBvbHlnb25cbiAgICogKEludmlzaWJsZSBwb2x5Z29uIGlzIG5vdCBjbGlja2FibGUsIGRlZmF1bHQgdHJ1ZSlcbiAgICovXG4gIHZpc2libGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBIaWVyYXJjaHkgei1pbmRleFxuICAgKi9cbiAgekluZGV4PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBQYXNzIElMYXRMbmdbXVtdIHRvIGNyZWF0ZSBob2xlcyBpbiBwb2x5Z29uXG4gICAqL1xuICBob2xlcz86IElMYXRMbmdbXVtdO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byByZWNlaXZlIHRoZSBQT0xZR09OX0NMSUNLIGV2ZW50XG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBvd24gcHJvcGVydGllc1xuICAgKiBZb3UgY2FuIGdldCB0aGUgcHJvcGVydHkgbGF0ZXIgdXNpbmcgYGdldCgpYCBtZXRob2QuXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9seWxpbmVPcHRpb25zIHtcbiAgLyoqXG4gICAqIFBhc3MgSUxhdExuZ1tdIHRvIHNwZWNpZnkgdGhlIHZlcnRpeGVzLlxuICAgKiBZb3UgbmVlZCB0byBjb250YWluIHR3byBwb2ludHMgYXQgbGVhc3QuXG4gICAqL1xuICBwb2ludHM6IElMYXRMbmdbXSB8IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgcG9seWxpbmVcbiAgICogKEludmlzaWJsZSBwb2x5bGluZSBpcyBub3QgY2xpY2thYmxlLCBkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gZHJhdyB0aGUgY3VydmUgcG9seWxpbmUgYmFzZWQgb24gdGhlIGVhcnRoXG4gICAqIChkZWZhdWx0OiBmYWxzZSlcbiAgICovXG4gIGdlb2Rlc2ljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBzdHJva2UgY29sb3JcbiAgICogKHJnYiwgcmdiYSwgI1JSR0dCQiwgXCJjb2xvcm5hbWVcIiwgLi4uZXRjKVxuICAgKi9cbiAgY29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgc3Ryb2tlIHdpZHRoIGluIHBpeGVsXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXhcbiAgICovXG4gIHpJbmRleD86IG51bWJlcjtcblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gcmVjZWl2ZSB0aGUgUE9MWUxJTkVfQ0xJQ0sgZXZlbnRcbiAgICogKGRlZmF1bHQ6IGZhbHNlKVxuICAgKi9cbiAgY2xpY2thYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzXG4gICAqIFlvdSBjYW4gZ2V0IHRoZSBwcm9wZXJ0eSBsYXRlciB1c2luZyBgZ2V0KClgIG1ldGhvZC5cbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaWxlT3ZlcmxheU9wdGlvbnMge1xuICAvKipcbiAgICogVGhpcyBjYWxsYmFjayBtdXN0IFJldHVybnMgc3RyaW5nIG9mIGltYWdlIFVSTCwgb3IgUHJvbWlzZS5cbiAgICogSWYgbm8gdGlsZSwgeW91IG5lZWQgdG8gUmV0dXJucyBudWxsLlxuICAgKi9cbiAgLy8gZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPjtcbiAgZ2V0VGlsZTogKHg6IG51bWJlciwgeTogbnVtYmVyLCB6b29tOiBudW1iZXIpID0+IHN0cmluZztcblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBpbnZpc2libGUgdGlsZWxheWVyXG4gICAqIChkZWZhdWx0IHRydWUpXG4gICAqL1xuICB2aXNpYmxlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogSGllcmFyY2h5IHotaW5kZXggb2YgdGlsZWxheWVyXG4gICAqL1xuICB6SW5kZXg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQ6IDUxMnB4XG4gICAqL1xuICB0aWxlU2l6ZT86IG51bWJlcjtcblxuICAvKipcbiAgICogRGVmYXVsdDogMS4wXG4gICAqL1xuICBvcGFjaXR5PzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBkaXNwbGF5IHRoZSB0aWxlIGluZm9ybWF0aW9uIG92ZXIgdGhlIHRpbGUgaW1hZ2VzLlxuICAgKi9cbiAgZGVidWc/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXNcbiAgICogWW91IGNhbiBnZXQgdGhlIHByb3BlcnR5IGxhdGVyIHVzaW5nIGBnZXQoKWAgbWV0aG9kLlxuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvRGF0YVVybE9wdGlvbnMge1xuICAvKipcbiAgICogVHJ1ZSBpZiB5b3Ugd2FudCBnZXQgaGlnaCBxdWFsaXR5IG1hcCBzbmFwc2hvdFxuICAgKi9cbiAgdW5jb21wcmVzcz86IGJvb2xlYW47XG59XG5cblxuLyoqXG4gKiBPcHRpb25zIGZvciBtYXAuYWRkS21sT3ZlcmxheSgpIG1ldGhvZFxuICovXG5leHBvcnQgaW50ZXJmYWNlIEttbE92ZXJsYXlPcHRpb25zIHtcbiAgLypcbiAgICogVGhlIHVybCBvciBmaWxlIHBhdGggb2YgS01MIGZpbGUuIEtNWiBmb3JtYXQgaXMgbm90IHN1cHBvcnRlZC5cbiAgICovXG4gIHVybDogc3RyaW5nO1xuXG4gIC8qXG4gICAqIERvIG5vdCBmaXJlIHRoZSBLTUxfQ0xJQ0sgZXZlbnQgaWYgZmFsc2UuIERlZmF1bHQgaXMgdHJ1ZS5cbiAgICovXG4gIGNsaWNrYWJsZT86IGJvb2xlYW47XG5cbiAgLypcbiAgICogRG8gbm90IGRpc3BsYXkgdGhlIGRlZmF1bHQgaW5mb1dpbmRvdyBpZiB0cnVlLiBEZWZhdWx0IGlzIGZhbHNlLlxuICAgKi9cbiAgc3VwcHJlc3NJbmZvV2luZG93cz86IGJvb2xlYW47XG5cbiAgLypcbiAgICogaWNvbiBvcHRpb25cbiAgICovXG4gIGljb24/OiBzdHJpbmcgfCBNYXJrZXJJY29uO1xuXG4gIC8qKlxuICAgKiBBY2NlcHQgb3duIHByb3BlcnRpZXMgZm9yIGZ1dHVyZSB1cGRhdGVcbiAgICovXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuXG5cbi8qKlxuICogT3B0aW9ucyBmb3IgRW52aXJvbm1lbnQuc2V0RW52KClcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbnZPcHRpb25zIHtcbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwczpgIChvbiBzZXJ2ZXIpXG4gICAqL1xuICBBUElfS0VZX0ZPUl9CUk9XU0VSX1JFTEVBU0U/OiBzdHJpbmc7XG5cbiAgLypcbiAgICogQVBJIGtleSBmb3IgR29vZ2xlIE1hcHMgSmF2YVNjcmlwdCBBUEkgdjMgZm9yIGBodHRwOmAgKGxvY2FsIGRldmVsb3BtZW50KVxuICAgKi9cbiAgQVBJX0tFWV9GT1JfQlJPV1NFUl9ERUJVRz86IHN0cmluZztcblxuICAvKlxuICAgKiBBIHByb3h5IHNlcnZlciBVUkwgZm9yIEdvb2dsZSBXZWIgU2VydmljZXNcbiAgICovXG4gIFJFU1RfQVBJX1BST1hZX1NFUlZFUj86IHN0cmluZztcblxuICAvKipcbiAgICogQWNjZXB0IG93biBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlXG4gICAqL1xuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgVmlzaWJsZVJlZ2lvbiBpbXBsZW1lbnRzIElMYXRMbmdCb3VuZHMge1xuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgbm9ydGhlYXN0IG9mIHRoZSBib3VuZHMgdGhhdCBjb250YWlucyB0aGUgZmFyTGVmdCwgZmFyUmlnaHQsIG5lYXJMZWZ0IGFuZCBuZWFyUmlnaHQuXG4gICAqIFNpbmNlIHRoZSBtYXAgdmlldyBpcyBhYmxlIHRvIHJvdGF0ZSwgdGhlIGZhclJpZ2h0IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgbm9ydGhlYXN0LlxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3J0aGVhc3Q6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBzb3V0aHdlc3Qgb2YgdGhlIGJvdW5kcyB0aGF0IGNvbnRhaW5zIHRoZSBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQgYW5kIG5lYXJSaWdodC5cbiAgICogU2luY2UgdGhlIG1hcCB2aWV3IGlzIGFibGUgdG8gcm90YXRlLCB0aGUgbmVhckxlZnQgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBzb3V0aHdlc3QuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHNvdXRod2VzdDogSUxhdExuZztcblxuICAvKipcbiAgICogVGhlIGZhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSB0b3AtbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhckxlZnQ6IElMYXRMbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBmYXJSaWdodCBpbmRpY2F0ZXMgdGhlIGxhdC9sbmcgb2YgdGhlIHRvcC1yaWdodCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGZhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhckxlZnQgaW5kaWNhdGVzIHRoZSBsYXQvbG5nIG9mIHRoZSBib3R0b20tbGVmdCBvZiB0aGUgbWFwIHZpZXcuXG4gICAqL1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5lYXJMZWZ0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBUaGUgbmVhclJpZ2h0IGluZGljYXRlcyB0aGUgbGF0L2xuZyBvZiB0aGUgYm90dG9tLXJpZ2h0IG9mIHRoZSBtYXAgdmlldy5cbiAgICovXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmVhclJpZ2h0OiBJTGF0TG5nO1xuXG4gIC8qKlxuICAgKiBjb25zdGFudCB2YWx1ZSA6IGBWaXNpYmxlUmVnaW9uYFxuICAgKi9cbiAgQEluc3RhbmNlUHJvcGVydHkoKSB0eXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioc291dGh3ZXN0OiBMYXRMbmdCb3VuZHMsIG5vcnRoZWFzdDogTGF0TG5nQm91bmRzLCBmYXJMZWZ0OiBJTGF0TG5nLCBmYXJSaWdodDogSUxhdExuZywgbmVhckxlZnQ6IElMYXRMbmcsIG5lYXJSaWdodDogSUxhdExuZykge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpKS5WaXNpYmxlUmVnaW9uKHNvdXRod2VzdCwgbm9ydGhlYXN0LCBmYXJMZWZ0LCBmYXJSaWdodCwgbmVhckxlZnQsIG5lYXJSaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydHMgdG8gc3RyaW5nXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJpbmcgb2YgdGhlIGZvcm0gXCJsYXRfc3csbG5nX3N3LGxhdF9uZSxsbmdfbmVcIiBmb3IgdGhpcyBib3VuZHMsIHdoZXJlIFwic3dcIiBjb3JyZXNwb25kcyB0byB0aGUgc291dGh3ZXN0IGNvcm5lciBvZiB0aGUgYm91bmRpbmcgYm94LCB3aGlsZSBcIm5lXCIgY29ycmVzcG9uZHMgdG8gdGhlIG5vcnRoZWFzdCBjb3JuZXIgb2YgdGhhdCBib3guXG4gICAqIEBwYXJhbSBwcmVjaXNpb24ge251bWJlcn1cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgdG9VcmxWYWx1ZShwcmVjaXNpb24/OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbGF0L2xuZyBpcyBpbiB0aGlzIGJvdW5kcy5cbiAgICogQHBhcmFtIExhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGNvbnRhaW5zKExhdExuZzogSUxhdExuZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgU3RyZWV0Vmlld1NvdXJjZSA9IHtcbiAgREVGQVVMVDogJ0RFRkFVTFQnLFxuICBPVVRET09SOiAnT1VURE9PUidcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0UG92T3B0aW9uIHtcbiAgYmVhcmluZzogbnVtYmVyO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdTZXRQb3NpdGlvbk9wdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQYW5vIHtcbiAgdGFyZ2V0OiBzdHJpbmc7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdDYW1lcmFQb3NpdGlvbiB7XG4gIHRhcmdldDogSUxhdExuZztcbiAgc291cmNlPzogc3RyaW5nO1xuICByYWRpdXM/OiBudW1iZXI7XG4gIGJlYXJpbmc/OiBudW1iZXI7XG4gIHRpbHQ/OiBudW1iZXI7XG4gIHpvb20/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0NvbnRyb2xPcHRpb25zIHtcbiAgc3RyZWV0TmFtZXM/OiBib29sZWFuO1xuICBuYXZpZ2F0aW9uPzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0dlc3R1cmVPcHRpb25zIHtcbiAgcGFubmluZz86IGJvb2xlYW47XG4gIHpvb21pbmc/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVldFZpZXdPcHRpb25zIHtcblxuICAvKlxuICAgKiBjYW1lcmE6IFtvcHRpb25zXSBJbml0aWFsIGNhbWVyYSBwb3NpdGlvblxuICAgKi9cbiAgY2FtZXJhPzogU3RyZWV0Vmlld0NhbWVyYVBhbm8gfCBTdHJlZXRWaWV3Q2FtZXJhUG9zaXRpb247XG5cbiAgLyoqXG4gICAqIGNvbnRyb2xzIFtvcHRpb25zXVxuICAgKi9cbiAgY29udHJvbHM/OiBTdHJlZXRWaWV3Q29udHJvbE9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIGdlc3R1cmVzIFtvcHRpb25zXVxuICAgKi9cbiAgZ2VzdHVyZXM/OiBTdHJlZXRWaWV3R2VzdHVyZU9wdGlvbnM7XG5cbiAgLyoqXG4gICAqIEFjY2VwdCBleHRyYSBwcm9wZXJ0aWVzIGZvciBmdXR1cmUgdXBkYXRlc1xuICAgKi9cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld05hdmlnYXRpb25MaW5rIHtcblxuICAvKipcbiAgICogcGFub3JhbWEgSWRcbiAgICovXG4gIHBhbm9JZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBiZWFyaW5nIChoZWFkaW5nKVxuICAgKi9cbiAgYmVhcmluZzogbnVtYmVyO1xuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RyZWV0Vmlld0xvY2F0aW9uIHtcblxuICBsYXRMbmc6IElMYXRMbmc7XG5cbiAgbGlua3M6IFN0cmVldFZpZXdOYXZpZ2F0aW9uTGlua1tdO1xuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICogWW91IGNhbiBsaXN0ZW4gdG8gdGhlc2UgZXZlbnRzIHdoZXJlIGFwcHJvcHJpYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBHb29nbGVNYXBzRXZlbnQgPSB7XG4gIE1BUF9SRUFEWTogJ21hcF9yZWFkeScsXG4gIE1BUF9DTElDSzogJ21hcF9jbGljaycsXG4gIE1BUF9MT05HX0NMSUNLOiAnbWFwX2xvbmdfY2xpY2snLFxuICBQT0lfQ0xJQ0s6ICdwb2lfY2xpY2snLFxuICBNWV9MT0NBVElPTl9DTElDSzogJ215X2xvY2F0aW9uX2NsaWNrJyxcbiAgTVlfTE9DQVRJT05fQlVUVE9OX0NMSUNLOiAnbXlfbG9jYXRpb25fYnV0dG9uX2NsaWNrJyxcbiAgSU5ET09SX0JVSUxESU5HX0ZPQ1VTRUQ6ICdpbmRvb3JfYnVpbGRpbmdfZm9jdXNlZCcsXG4gIElORE9PUl9MRVZFTF9BQ1RJVkFURUQ6ICdpbmRvb3JfbGV2ZWxfYWN0aXZhdGVkJyxcbiAgQ0FNRVJBX01PVkVfU1RBUlQ6ICdjYW1lcmFfbW92ZV9zdGFydCcsXG4gIENBTUVSQV9NT1ZFOiAnY2FtZXJhX21vdmUnLFxuICBDQU1FUkFfTU9WRV9FTkQ6ICdjYW1lcmFfbW92ZV9lbmQnLFxuICBPVkVSTEFZX0NMSUNLOiAnb3ZlcmxheV9jbGljaycsXG4gIFBPTFlHT05fQ0xJQ0s6ICdwb2x5Z29uX2NsaWNrJyxcbiAgUE9MWUxJTkVfQ0xJQ0s6ICdwb2x5bGluZV9jbGljaycsXG4gIENJUkNMRV9DTElDSzogJ2NpcmNsZV9jbGljaycsXG4gIEdST1VORF9PVkVSTEFZX0NMSUNLOiAnZ3JvdW5kb3ZlcmxheV9jbGljaycsXG4gIElORk9fQ0xJQ0s6ICdpbmZvX2NsaWNrJyxcbiAgSU5GT19MT05HX0NMSUNLOiAnaW5mb19sb25nX2NsaWNrJyxcbiAgSU5GT19DTE9TRTogJ2luZm9fY2xvc2UnLFxuICBJTkZPX09QRU46ICdpbmZvX29wZW4nLFxuICBNQVJLRVJfQ0xJQ0s6ICdtYXJrZXJfY2xpY2snLFxuICBNQVJLRVJfRFJBRzogJ21hcmtlcl9kcmFnJyxcbiAgTUFSS0VSX0RSQUdfU1RBUlQ6ICdtYXJrZXJfZHJhZ19zdGFydCcsXG4gIE1BUktFUl9EUkFHX0VORDogJ21hcmtlcl9kcmFnX2VuZCcsXG4gIE1BUF9EUkFHOiAnbWFwX2RyYWcnLFxuICBNQVBfRFJBR19TVEFSVDogJ21hcF9kcmFnX3N0YXJ0JyxcbiAgTUFQX0RSQUdfRU5EOiAnbWFwX2RyYWdfZW5kJyxcbiAgS01MX0NMSUNLOiAna21sX2NsaWNrJyxcbiAgUEFOT1JBTUFfUkVBRFk6ICdwYW5vcmFtYV9yZWFkeScsXG4gIFBBTk9SQU1BX0NBTUVSQV9DSEFOR0U6ICdwYW5vcmFtYV9jYW1lcmFfY2hhbmdlJyxcbiAgUEFOT1JBTUFfTE9DQVRJT05fQ0hBTkdFOiAncGFub3JhbWFfbG9jYXRpb25fY2hhbmdlJyxcbiAgUEFOT1JBTUFfQ0xJQ0s6ICdwYW5vcmFtYV9jbGljaycsXG4gIERJUkVDVElPTlNfQ0hBTkdFRDogJ2RpcmVjdGlvbnNfY2hhbmdlZCdcbn07XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY29uc3QgR29vZ2xlTWFwc0FuaW1hdGlvbiA9IHtcbiAgQk9VTkNFOiAnQk9VTkNFJyxcbiAgRFJPUDogJ0RST1AnXG59O1xuXG5leHBvcnQgY29uc3QgQW5pbWF0aW9uSWQgPSB7XG4gQk9VTkNFOiAnQk9VTkNFJyxcbiBEUk9QOiAnRFJPUCdcbn07XG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNvbnN0IEdvb2dsZU1hcHNNYXBUeXBlSWQgPSB7XG4gIE5PUk1BTDogJ01BUF9UWVBFX05PUk1BTCcsXG4gIFJPQURNQVA6ICdNQVBfVFlQRV9OT1JNQUwnLFxuICBTQVRFTExJVEU6ICdNQVBfVFlQRV9TQVRFTExJVEUnLFxuICBIWUJSSUQ6ICdNQVBfVFlQRV9IWUJSSUQnLFxuICBURVJSQUlOOiAnTUFQX1RZUEVfVEVSUkFJTicsXG4gIE5PTkU6ICdNQVBfVFlQRV9OT05FJ1xufTtcblxuZXhwb3J0IGNvbnN0IE1hcFR5cGVJZCA9IHtcbiBOT1JNQUw6ICdNQVBfVFlQRV9OT1JNQUwnLFxuIFJPQURNQVA6ICdNQVBfVFlQRV9OT1JNQUwnLFxuIFNBVEVMTElURTogJ01BUF9UWVBFX1NBVEVMTElURScsXG4gSFlCUklEOiAnTUFQX1RZUEVfSFlCUklEJyxcbiBURVJSQUlOOiAnTUFQX1RZUEVfVEVSUkFJTicsXG4gTk9ORTogJ01BUF9UWVBFX05PTkUnXG59O1xuLyoqXG4gKiBAbmFtZSBHb29nbGUgTWFwc1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiB1c2VzIHRoZSBuYXRpdmUgR29vZ2xlIE1hcHMgU0RLXG4gKiBOb3RlOiBBcyBvZiBJb25pYyBuYXRpdmUgNC4wLCB0aGlzIHVzaW5nIHRoZSAyLjAgdmVyc2lvbiBvZiB0aGUgZ29vZ2xlIG1hcHMgcGx1Z2luLiBQbGVhc2UgbWFrZSBzdXJlIHlvdXIgcGx1Z2luIGlzIHVwZGF0ZWRcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHtcbiAqICBHb29nbGVNYXBzLFxuICogIEdvb2dsZU1hcCxcbiAqICBHb29nbGVNYXBzRXZlbnQsXG4gKiAgR29vZ2xlTWFwT3B0aW9ucyxcbiAqICBDYW1lcmFQb3NpdGlvbixcbiAqICBNYXJrZXJPcHRpb25zLFxuICogIE1hcmtlclxuICogfSBmcm9tICdAaW9uaWMtbmF0aXZlL2dvb2dsZS1tYXBzJztcbiAqIGltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlL1wiO1xuICpcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ3BhZ2UtaG9tZScsXG4gKiAgIHRlbXBsYXRlVXJsOiAnaG9tZS5odG1sJ1xuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBIb21lUGFnZSB7XG4gKiAgIG1hcDogR29vZ2xlTWFwO1xuICogICBjb25zdHJ1Y3RvcigpIHsgfVxuICpcbiAqICAgaW9uVmlld0RpZExvYWQoKSB7XG4gKiAgICB0aGlzLmxvYWRNYXAoKTtcbiAqICAgfVxuICpcbiAqICBsb2FkTWFwKCkge1xuICpcbiAqICAgICBsZXQgbWFwT3B0aW9uczogR29vZ2xlTWFwT3B0aW9ucyA9IHtcbiAqICAgICAgIGNhbWVyYToge1xuICogICAgICAgICB0YXJnZXQ6IHtcbiAqICAgICAgICAgICBsYXQ6IDQzLjA3NDE5MDQsXG4gKiAgICAgICAgICAgbG5nOiAtODkuMzgwOTgwMlxuICogICAgICAgICB9LFxuICogICAgICAgICB6b29tOiAxOCxcbiAqICAgICAgICAgdGlsdDogMzBcbiAqICAgICAgIH1cbiAqICAgICB9XG4gKlxuICogICAgIHRoaXMubWFwID0gR29vZ2xlTWFwcy5jcmVhdGUoJ21hcF9jYW52YXMnLCBtYXBPcHRpb25zKTtcbiAqXG4gKiAgICAgbGV0IG1hcmtlcjogTWFya2VyID0gdGhpcy5tYXAuYWRkTWFya2VyU3luYyh7XG4gKiAgICAgICB0aXRsZTogJ0lvbmljJyxcbiAqICAgICAgIGljb246ICdibHVlJyxcbiAqICAgICAgIGFuaW1hdGlvbjogJ0RST1AnLFxuICogICAgICAgcG9zaXRpb246IHtcbiAqICAgICAgICAgbGF0OiA0My4wNzQxOTA0LFxuICogICAgICAgICBsbmc6IC04OS4zODA5ODAyXG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKlxuICogICAgIG1hcmtlci5vbihHb29nbGVNYXBzRXZlbnQuTUFSS0VSX0NMSUNLKVxuICogICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gKiAgICAgICAgIGFsZXJ0KCdjbGlja2VkJyk7XG4gKiAgICAgICB9KTtcbiAqICAgICB9KTtcbiAqICAgfVxuICogfVxuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIEdvb2dsZU1hcHNcbiAqIEdvb2dsZU1hcFxuICogU3RyZWV0Vmlld1xuICogQ2lyY2xlXG4gKiBFbmNvZGluZ1xuICogRW52aXJvbm1lbnRcbiAqIEdlb2NvZGVyXG4gKiBHcm91bmRPdmVybGF5XG4gKiBIdG1sSW5mb1dpbmRvd1xuICogR2VvY29kZXJcbiAqIExhdExuZ1xuICogTGF0TG5nQm91bmRzXG4gKiBNYXJrZXJcbiAqIE1hcmtlckNsdXN0ZXJcbiAqIFBvbHlnb25cbiAqIFBvbHlsaW5lXG4gKiBTcGhlcmljYWxcbiAqIEttbE92ZXJsYXlcbiAqIFBvbHlcbiAqIFRpbGVPdmVybGF5XG4gKiBCYXNlQ2xhc3NcbiAqIEJhc2VBcnJheUNsYXNzXG4gKiBAaW50ZXJmYWNlc1xuICogR29vZ2xlTWFwT3B0aW9uc1xuICogQ2FtZXJhUG9zaXRpb25cbiAqIENpcmNsZU9wdGlvbnNcbiAqIEdlb2NvZGVyUmVxdWVzdFxuICogR2VvY29kZXJSZXN1bHRcbiAqIEdyb3VuZE92ZXJsYXlPcHRpb25zXG4gKiBJTGF0TG5nXG4gKiBNYXJrZXJJY29uXG4gKiBNYXJrZXJPcHRpb25zXG4gKiBNYXJrZXJDbHVzdGVySWNvblxuICogTWFya2VyQ2x1c3Rlck9wdGlvbnNcbiAqIE15TG9jYXRpb25cbiAqIE15TG9jYXRpb25PcHRpb25zXG4gKiBQb2x5Z29uT3B0aW9uc1xuICogUG9seWxpbmVPcHRpb25zXG4gKiBUaWxlT3ZlcmxheU9wdGlvbnNcbiAqIEttbE92ZXJsYXlPcHRpb25zXG4gKiBWaXNpYmxlUmVnaW9uXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcHNwbHVnaW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIGRvY3VtZW50OiAnaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9uYXRpdmUvZ29vZ2xlLW1hcHMvJyxcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ0Jyb3dzZXInXVxufSlcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IEdvb2dsZU1hcCBpbnN0YW5jZVxuICAgKiBAcGFyYW0gZWxlbWVudCB7c3RyaW5nIHwgSFRNTEVsZW1lbnR9IEVsZW1lbnQgSUQgb3IgcmVmZXJlbmNlIHRvIGF0dGFjaCB0aGUgbWFwIHRvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtHb29nbGVNYXBPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlKGVsZW1lbnQ6IHN0cmluZyB8IEhUTUxFbGVtZW50IHwgR29vZ2xlTWFwT3B0aW9ucywgb3B0aW9ucz86IEdvb2dsZU1hcE9wdGlvbnMpOiBHb29nbGVNYXAge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBtdXN0IGJlIHVuZGVyIDxib2R5PicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke2VsZW1lbnQudGFnTmFtZX1bX19wbHVnaW5NYXBJZD0nJHtlbGVtZW50LmdldEF0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpfSddIGhhcyBhbHJlYWR5IG1hcC5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgb3B0aW9ucyA9IGVsZW1lbnQgYXMgR29vZ2xlTWFwT3B0aW9ucztcbiAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBnb29nbGVNYXA6IEdvb2dsZU1hcCA9IG5ldyBHb29nbGVNYXAoZWxlbWVudCBhcyBIVE1MRWxlbWVudCB8IHN0cmluZywgb3B0aW9ucyk7XG4gICAgICBnb29nbGVNYXAuc2V0KCdfb3ZlcmxheXMnLCB7fSk7XG4gICAgICByZXR1cm4gZ29vZ2xlTWFwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2U6IHN0cmluZ1tdID0gW1xuICAgICAgICAnW0dvb2dsZU1hcHNdJ1xuICAgICAgXTtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1lvdSBuZWVkIHRvIGV4ZWN1dGUgXCIkPiBpb25pYyBjb3Jkb3ZhIHJ1biBicm93c2VyXCIuJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdcIiQ+IGlvbmljIHNlcnZlXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBpbnN0YWxsZWQgb3Igbm90IHJlYWR5IHlldC4nKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGVsZW1lbnQsIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCkpO1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpICYmIHRhcmdldC5fX3BsdWdpbk1hcElkID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZS5qb2luKCcnKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBrZWVwIHRoaXMgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkuXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNyZWF0ZShlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCB8IEdvb2dsZU1hcE9wdGlvbnMsIG9wdGlvbnM/OiBHb29nbGVNYXBPcHRpb25zKTogR29vZ2xlTWFwIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBQbGVhc2UgdXNlIEdvb2dsZU1hcHMuY3JlYXRlKCknKTtcbiAgICByZXR1cm4gR29vZ2xlTWFwcy5jcmVhdGUoZWxlbWVudCwgb3B0aW9ucyk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBTdHJlZXRWaWV3IGluc3RhbmNlXG4gICAqIEBwYXJhbSBlbGVtZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gRWxlbWVudCBJRCBvciByZWZlcmVuY2UgdG8gYXR0YWNoIHRoZSBtYXAgdG9cbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVldFZpZXdPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtTdHJlZXRWaWV3UGFub3JhbWF9XG4gICAqL1xuICBzdGF0aWMgY3JlYXRlUGFub3JhbWEoZWxlbWVudDogc3RyaW5nIHwgSFRNTEVsZW1lbnQsIG9wdGlvbnM/OiBTdHJlZXRWaWV3T3B0aW9ucyk6IFN0cmVldFZpZXdQYW5vcmFtYSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoIWVsZW1lbnQub2Zmc2V0UGFyZW50KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbGVtZW50IG11c3QgYmUgdW5kZXIgPGJvZHk+Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJykpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7ZWxlbWVudC50YWdOYW1lfVtfX3BsdWdpbk1hcElkPScke2VsZW1lbnQuZ2V0QXR0cmlidXRlKCdfX3BsdWdpbk1hcElkJyl9J10gaGFzIGFscmVhZHkgbWFwLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IFN0cmVldFZpZXdQYW5vcmFtYShlbGVtZW50LCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlLmpvaW4oJycpKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgZGlzcGxheUVycm9yTWVzc2FnZSA9IChlbGVtZW50OiBIVE1MRWxlbWVudCwgbWVzc2FnZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGVycm9yRGl2OiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBlcnJvckRpdi5pbm5lckhUTUwgPSBtZXNzYWdlO1xuICBlcnJvckRpdi5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICBlcnJvckRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIGVycm9yRGl2LnN0eWxlLndpZHRoID0gJzgwJSc7XG4gIGVycm9yRGl2LnN0eWxlLmhlaWdodCA9ICc1MCUnO1xuICBlcnJvckRpdi5zdHlsZS50b3AgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUuYm90dG9tID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gIGVycm9yRGl2LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgZXJyb3JEaXYuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICBlcnJvckRpdi5zdHlsZS5tYXJnaW4gPSAnYXV0byc7XG5cbiAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNjY2M3JztcbiAgZWxlbWVudC5hcHBlbmRDaGlsZChlcnJvckRpdik7XG59O1xuXG5jb25zdCBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIgPSAoX29iamVjdEluc3RhbmNlOiBhbnksIGFyZ3M6IGFueVtdKTogYW55W10gPT4ge1xuICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdIGluc3RhbmNlb2YgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5CYXNlQ2xhc3MpIHtcbiAgICBpZiAoYXJnc1thcmdzLmxlbmd0aCAtIDFdLnR5cGUgPT09ICdNYXAnIHx8IGFyZ3NbYXJncy5sZW5ndGggLSAxXS50eXBlID09PSAnU3RyZWV0Vmlld1Bhbm9yYW1hJykge1xuICAgICAgYXJnc1thcmdzLmxlbmd0aCAtIDFdID0gdGhpcztcbiAgICB9IGVsc2UgaWYgKF9vYmplY3RJbnN0YW5jZS5fX3BnbUlkLmluZGV4T2YoJ21hcmtlcmNsdXN0ZXJfJykgIT09IC0xKSB7XG4gICAgICBjb25zdCBfb3ZlcmxheXM6IGFueSA9IF9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpIHx8IHt9O1xuICAgICAgbGV0IG92ZXJsYXk6IE1hcmtlciA9IF9vdmVybGF5c1thcmdzW2FyZ3MubGVuZ3RoIC0gMV0uZ2V0SWQoKV07XG4gICAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgICAgY29uc3QgbWFya2VySlM6IGFueSA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgbWFya2VySWQ6IHN0cmluZyA9IG1hcmtlckpTLmdldElkKCk7XG4gICAgICAgIGNvbnN0IG1hcmtlckNsdXN0ZXI6IE1hcmtlckNsdXN0ZXIgPSBfb2JqZWN0SW5zdGFuY2UgYXMgTWFya2VyQ2x1c3RlcjtcbiAgICAgICAgb3ZlcmxheSA9IG5ldyBNYXJrZXIobWFya2VyQ2x1c3Rlci5nZXRNYXAoKSwgbWFya2VySlMpO1xuICAgICAgICBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVttYXJrZXJJZF0gPSBvdmVybGF5O1xuICAgICAgICBtYXJrZXJKUy5vbmUobWFya2VySlMuZ2V0SWQoKSArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgIF9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW21hcmtlcklkXSA9IG51bGw7XG4gICAgICAgICAgZGVsZXRlIF9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW21hcmtlcklkXTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBvdmVybGF5O1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPSBfb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVthcmdzW2FyZ3MubGVuZ3RoIC0gMV0uZ2V0SWQoKV07XG4gICAgfVxuICB9XG4gIHJldHVybiBhcmdzO1xufTtcblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQmFzZUNsYXNzL1JFQURNRS5tZFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkJhc2VDbGFzcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VDbGFzcyB7XG4gIHByb3RlY3RlZCBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcihvYmpJbnN0YW5jZT86IGFueSkge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIGlmICghb2JqSW5zdGFuY2UpIHtcbiAgICAgICAgb2JqSW5zdGFuY2UgPSBuZXcgKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUNsYXNzKSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBvYmpJbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBleGVjdXRpbmcgYW55IG1ldGhvZHMuJyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gZXZlbnQgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjayh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWU6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICBvYnNlcnZlci5uZXh0KG5ld0FyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBBdHRhY2hlcyB0aGUgaGFuZGxlciBmb3IgdGhlIGV2ZW50IHRoYXQgaXMgdGhyb3duIGJ5IHRoZSB0YXJnZXQsIHdoZXJlIHRoZSBtaW5pbXVtIGludGVydmFsIGJldHdlZW4gZXZlbnRzIChpbiBtaWxsaXNlY29uZHMpIGlzIHNwZWNpZmllZCBhcyBhIHBhcmFtZXRlci5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBldmVudCBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuXG4gICAqIEBwYXJhbSB0aHJvdHRsZUludGVydmFsIHtudW1iZXJ9IHRocm90dGxlIGludGVydmFsIGluIG1pbGxpc2Vjb25kc1xuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICAvLyBhZGRUaHJvdHRsZWRFdmVudExpc3RlbmVyKGV2ZW50TmFtZTogc3RyaW5nLCB0aHJvdHRsZUludGVydmFsOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgLy8gICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFRocm90dGxlZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgLy8gICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgLy8gICAgICAgb2JzZXJ2ZXIubmV4dChuZXdBcmdzKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cblxuICAvKipcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lciB0aGF0IHdvcmtzIG9uY2UuXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gZXZlbnQgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEV2ZW50TGlzdGVuZXJPbmNlKGV2ZW50TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5vbmUoZXZlbnROYW1lLCAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgICAgY29uc3QgbmV3QXJncyA9IG5vcm1hbGl6ZUFyZ3VtZW50c09mRXZlbnRMaXN0ZW5lci5jYWxsKHRoaXMsIHRoaXMuX29iamVjdEluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgcmVzb2x2ZShuZXdBcmdzKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXIgdGhhdCB3b3JrcyBvbmNlLlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IGV2ZW50IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRMaXN0ZW5lck9uY2UoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnNvbGUud2FybignW0dvb2dsZU1hcHNdIFwiYWRkTGlzdGVuZXJPbmNlXCIgaXMgZGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBcImFkZEV2ZW50TGlzdGVuZXJPbmNlXCIuJyk7XG4gICAgcmV0dXJuIHRoaXMuYWRkRXZlbnRMaXN0ZW5lck9uY2UoZXZlbnROYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgdmFsdWVcbiAgICogQHBhcmFtIGtleSB7YW55fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0KGtleTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhIHZhbHVlXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIGtleSBuYW1lIGZvciB0aGUgdmFsdWUuIGAoa2V5KV9jaGFuZ2VkYCB3aWxsIGJlIGZpcmVkIHdoZW4geW91IHNldCB2YWx1ZSB0aHJvdWdoIHRoaXMgbWV0aG9kLlxuICAgKiBAcGFyYW0gdmFsdWUge2FueX1cbiAgICogQHBhcmFtIG5vTm90aWZ5IHtib29sZWFufSBbb3B0aW9uc10gVHJ1ZSBpZiB5b3Ugd2FudCB0byBwcmV2ZW50IGZpcmluZyB0aGUgYChrZXkpX2NoYW5nZWRgIGV2ZW50LlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55LCBub05vdGlmeT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGEga2V5IHRvIGFub3RoZXIgb2JqZWN0XG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHBhcmFtIHRhcmdldCB7YW55fSBUaGUgdGFyZ2V0IG9iamVjdCB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcGFyYW0gdGFyZ2V0S2V5PyB7c3RyaW5nfSBbb3B0aW9uc10gIFRoZSBwcm9wZXJ0eSBuYW1lIHlvdSB3YW50IHRvIG9ic2VydmUuIElmIHlvdSBvbWl0IHRoaXMsIHRoZSBga2V5YCBhcmd1bWVudCBpcyB1c2VkLlxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gVHJ1ZSBpZiB5b3Ugd2FudCB0byBwcmV2ZW50IGAoa2V5KV9jaGFuZ2VkYCBldmVudCB3aGVuIHlvdSBiaW5kIGZpcnN0IHRpbWUsIGJlY2F1c2UgdGhlIGludGVybmFsIHN0YXR1cyBpcyBjaGFuZ2VkIGZyb20gYHVuZGVmaW5lZGAgdG8gc29tZXRoaW5nLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgYmluZFRvKGtleTogc3RyaW5nLCB0YXJnZXQ6IGFueSwgdGFyZ2V0S2V5Pzogc3RyaW5nLCBub05vdGlmeT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgYWRkRXZlbnRMaXN0ZW5lcmBcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjayh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgb24oZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9uKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIG9ic2VydmVyLm5leHQobmV3QXJncyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgYWRkVGhyb3R0bGVkRXZlbnRMaXN0ZW5lcmBcbiAgICogQHBhcmFtIGtleSB7c3RyaW5nfSBUaGUgcHJvcGVydHkgbmFtZSB5b3Ugd2FudCB0byBvYnNlcnZlLlxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICAvLyBASW5zdGFuY2VDaGVjayh7IG9ic2VydmFibGU6IHRydWUgfSlcbiAgLy8gb25UaHJvdHRsZWQoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAvLyAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZSgob2JzZXJ2ZXIpID0+IHtcbiAgLy8gICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9uVGhyb3R0bGVkKGV2ZW50TmFtZSwgKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gIC8vICAgICAgIGNvbnN0IG5ld0FyZ3MgPSBub3JtYWxpemVBcmd1bWVudHNPZkV2ZW50TGlzdGVuZXIuY2FsbCh0aGlzLCB0aGlzLl9vYmplY3RJbnN0YW5jZSwgYXJncyk7XG4gIC8vICAgICAgIG9ic2VydmVyLm5leHQobmV3QXJncyk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIC8qKlxuICAgKiBBbGlhcyBvZiBgYWRkRXZlbnRMaXN0ZW5lck9uY2VgXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ30gVGhlIHByb3BlcnR5IG5hbWUgeW91IHdhbnQgdG8gb2JzZXJ2ZS5cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBvbmUoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9uZShldmVudE5hbWUsICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdBcmdzID0gbm9ybWFsaXplQXJndW1lbnRzT2ZFdmVudExpc3RlbmVyLmNhbGwodGhpcywgdGhpcy5fb2JqZWN0SW5zdGFuY2UsIGFyZ3MpO1xuICAgICAgICByZXNvbHZlKG5ld0FyZ3MpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhpcyBvYmplY3QgaGFzIGV2ZW50IGxpc3RlbmVyIGZvciBldmVudCBuYW1lXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gRXZlbnQgbmFtZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgaGFzRXZlbnRMaXN0ZW5lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIGFsbCBzdG9yZWQgdmFsdWVzXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBlbXB0eSgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaCBldmVudC5cbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBwYXJhbWV0ZXJzIHthbnl9IFtvcHRpb25zXSBUaGUgZGF0YSB5b3Ugd2FudCB0byBwYXNzIHRvIGV2ZW50IGxpc3Rlcm5lcnMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICB0cmlnZ2VyKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5wYXJhbWV0ZXJzOiBhbnlbXSk6IHZvaWQge1xuICB9XG5cblxuICAvKipcbiAgICogRXhlY3V0ZXMgb2ZmKCkgYW5kIGVtcHR5KClcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX29iamVjdEluc3RhbmNlLnR5cGUgPT09ICdNYXAnKSB7XG4gICAgICBjb25zdCBtYXA6IEdvb2dsZU1hcCA9IHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpO1xuICAgICAgaWYgKG1hcCkge1xuICAgICAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRJZCgpXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGV2ZW50IGxpc3RlbmVyKHMpXG4gICAqIFRoZSBgcmVtb3ZlRXZlbnRMaXN0ZW5lcigpYCBoYXMgdGhyZWUgdXNhZ2VzOlxuICAgKiAgLSByZW1vdmVFdmVudExpc3RlbmVyKFwiZXZlbnROYW1lXCIsIGxpc3RlbmVyRnVuY3Rpb24pO1xuICAgKiAgICAgVGhpcyByZW1vdmVzIG9uZSBwYXJ0aWN1bGFyIGV2ZW50IGxpc3RlbmVyXG4gICAqICAtIHJlbW92ZUV2ZW50TGlzdGVuZXIoXCJldmVudE5hbWVcIik7XG4gICAqICAgICBUaGlzIHJlbW92ZXMgdGhlIGV2ZW50IGxpc3RlbmVycyB0aGF0IGFkZGVkIGZvciB0aGUgZXZlbnQgbmFtZS5cbiAgICogIC0gcmVtb3ZlRXZlbnRMaXN0ZW5lcigpO1xuICAgKiAgICAgVGhpcyByZW1vdmVzIGFsbCBsaXN0ZW5lcnMuXG4gICAqXG4gICAqIEBwYXJhbSBldmVudE5hbWUge3N0cmluZ30gW29wdGlvbnNdIEV2ZW50IG5hbWVcbiAgICogQHBhcmFtIGxpc3RlbmVyIHtGdW5jdGlvbn0gW29wdGlvbnNdIEV2ZW50IGxpc3RlbmVyXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZT86IHN0cmluZywgbGlzdGVuZXI/OiAoLi4ucGFyYW1ldGVyczogYW55W10pID0+IHZvaWQpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEFsaWFzIG9mIGByZW1vdmVFdmVudExpc3RlbmVyYFxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IFtvcHRpb25zXSBFdmVudCBuYW1lXG4gICAqIEBwYXJhbSBsaXN0ZW5lciB7RnVuY3Rpb259IFtvcHRpb25zXSBFdmVudCBsaXN0ZW5lclxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgb2ZmKGV2ZW50TmFtZT86IHN0cmluZywgbGlzdGVuZXI/OiAoLi4ucGFyYW1ldGVyczogYW55W10pID0+IHZvaWQpOiB2b2lkIHt9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKiBodHRwczovL2dpdGh1Yi5jb20vbWFwc3BsdWdpbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzLWRvYy9ibG9iL21hc3Rlci92Mi4wLjAvY2xhc3MvQmFzZUFycmF5Q2xhc3MvUkVBRE1FLm1kXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQmFzZUFycmF5Q2xhc3MnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkJhc2VBcnJheUNsYXNzJ1xufSlcbmV4cG9ydCBjbGFzcyBCYXNlQXJyYXlDbGFzczxUPiBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoaW5pdGlhbERhdGE/OiBUW10gfCBhbnkpIHtcbiAgICBpZiAoaW5pdGlhbERhdGEgaW5zdGFuY2VvZiBHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKSB7XG4gICAgICBzdXBlcihpbml0aWFsRGF0YSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGluaXRpYWxEYXRhKSkge1xuICAgICAgc3VwZXIobmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkJhc2VBcnJheUNsYXNzKShpbml0aWFsRGF0YSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdXBlcihuZXcgKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuQmFzZUFycmF5Q2xhc3MpKFtdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGVsZW1lbnRzIGZyb20gdGhlIGFycmF5LlxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCByZW1vdmVfYXQgZXZlbnRzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHkobm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBmb3JFYWNoKGZuOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgZWFjaCBlbGVtZW50LCBjYWxsaW5nIHRoZSBwcm92aWRlZCBjYWxsYmFjay5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTx2b2lkPn1cbiAgICovXG4gIGZvckVhY2hBc3luYyhmbjogKChlbGVtZW50OiBULCBjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gdm9pZCkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZm9yRWFjaChmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgdGhlbiBSZXR1cm5zIGEgbmV3IHZhbHVlLlxuICAgKiBUaGVuIHlvdSBjYW4gZ2V0IHRoZSByZXN1bHRzIG9mIGVhY2ggY2FsbGJhY2suXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge09iamVjdFtdfSByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIHJlc3VsdHNcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIG1hcChmbjogKGVsZW1lbnQ6IFQsIGluZGV4OiBudW1iZXIpID0+IGFueSk6IGFueVtdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGVhY2ggZWxlbWVudCwgY2FsbGluZyB0aGUgcHJvdmlkZWQgY2FsbGJhY2suXG4gICAqIFRoZW4geW91IGNhbiBnZXQgdGhlIHJlc3VsdHMgb2YgZWFjaCBjYWxsYmFjay5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgbmV3IGFycmF5IHdpdGggdGhlIHJlc3VsdHNcbiAgICovXG4gIG1hcEFzeW5jKGZuOiAoKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAobmV3RWxlbWVudDogYW55KSA9PiB2b2lkKSA9PiB2b2lkKSk6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm1hcChmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2FtZSBhcyBgbWFwQXN5bmNgLCBidXQga2VlcCB0aGUgZXhlY3V0aW9uIG9yZGVyXG4gICAqIEBwYXJhbSBmbiB7RnVuY3Rpb259XG4gICAqIEBwYXJhbSBjYWxsYmFjayB7RnVuY3Rpb259XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIG5ldyBhcnJheSB3aXRoIHRoZSByZXN1bHRzXG4gICAqL1xuICBtYXBTZXJpZXMoZm46ICgoZWxlbWVudDogVCwgY2FsbGJhY2s6IChuZXdFbGVtZW50OiBhbnkpID0+IHZvaWQpID0+IHZvaWQpKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UubWFwU2VyaWVzKGZuLCByZXNvbHZlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmlsdGVyKCkgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7VFtdfSByZXR1cm5zIGEgbmV3IGZpbHRlcmVkIGFycmF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBmaWx0ZXIoZm46IChlbGVtZW50OiBULCBpbmRleDogbnVtYmVyKSA9PiBib29sZWFuKTogVFtdIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZpbHRlckFzeW5jKCkgbWV0aG9kIGNyZWF0ZXMgYSBuZXcgYXJyYXkgd2l0aCBhbGwgZWxlbWVudHMgdGhhdCBwYXNzIHRoZSB0ZXN0IGltcGxlbWVudGVkIGJ5IHRoZSBwcm92aWRlZCBmdW5jdGlvbi5cbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cbiAgICogQHJldHVybiB7UHJvbWlzZTxUW10+fSByZXR1cm5zIGEgbmV3IGZpbHRlcmVkIGFycmF5XG4gICAqL1xuICBmaWx0ZXJBc3luYyhmbjogKGVsZW1lbnQ6IFQsIGNhbGxiYWNrOiAocmVzdWx0OiBib29sZWFuKSA9PiB2b2lkKSA9PiB2b2lkKTogUHJvbWlzZTxUW10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmZpbHRlcihmbiwgcmVzb2x2ZSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIHJlZmVyZW5jZSB0byB0aGUgdW5kZXJseWluZyBBcnJheS5cbiAgICogQHJldHVybiB7T2JqZWN0W119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRBcnJheSgpOiBUW10ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRBdChpbmRleDogbnVtYmVyKTogYW55IHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgdGhlIGVsZW1lbnRzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRMZW5ndGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogVGhlIGluZGV4T2YoKSBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgaW5kZXggYXQgd2hpY2ggYSBnaXZlbiBlbGVtZW50IGNhbiBiZSBmb3VuZCBpbiB0aGUgYXJyYXksIG9yIC0xIGlmIGl0IGlzIG5vdCBwcmVzZW50LlxuICAgKiBAcGFyYW0gZWxlbWVudCB7T2JqZWN0fVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpbmRleE9mKGVsZW1lbnQ6IFQpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcmV2ZXJzZSgpIG1ldGhvZCByZXZlcnNlcyBhbiBhcnJheSBpbiBwbGFjZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJldmVyc2UoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNvcnQoKSBtZXRob2Qgc29ydHMgdGhlIGVsZW1lbnRzIG9mIGFuIGFycmF5IGluIHBsYWNlIGFuZCByZXR1cm5zIHRoZSBhcnJheS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNvcnQoKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyBhbiBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gZWxlbWVudCB7T2JqZWN0fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCBpbnNlcnRfYXQgZXZlbnQuXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGluc2VydEF0KGluZGV4OiBudW1iZXIsIGVsZW1lbnQ6IFQsIG5vTm90aWZ5PzogYm9vbGVhbikge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgYXJyYXkgYW5kIHJldHVybnMgdGhhdCBlbGVtZW50LlxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCByZW1vdmVfYXQgZXZlbnQuXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHBvcChub05vdGlmeT86IGJvb2xlYW4pOiBUIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBvbmUgZWxlbWVudCB0byB0aGUgZW5kIG9mIHRoZSBhcnJheSBhbmQgcmV0dXJucyB0aGUgbmV3IGxlbmd0aCBvZiB0aGUgYXJyYXkuXG4gICAqIEBwYXJhbSBlbGVtZW50IHtvYmplY3R9XG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFNldCB0cnVlIHRvIHByZXZlbnQgaW5zZXJ0X2F0IGV2ZW50cy5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHB1c2goZWxlbWVudDogVCwgbm9Ob3RpZnk/OiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhbiBlbGVtZW50IGZyb20gdGhlIHNwZWNpZmllZCBpbmRleC5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBub05vdGlmeT8ge2Jvb2xlYW59IFtvcHRpb25zXSBTZXQgdHJ1ZSB0byBwcmV2ZW50IHJlbW92ZV9hdCBldmVudC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHJlbW92ZUF0KGluZGV4OiBudW1iZXIsIG5vTm90aWZ5PzogYm9vbGVhbik6IFQgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogU2V0cyBhbiBlbGVtZW50IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXguXG4gICAqIEBwYXJhbSBpbmRleCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gZWxlbWVudCB7b2JqZWN0fVxuICAgKiBAcGFyYW0gbm9Ob3RpZnk/IHtib29sZWFufSBbb3B0aW9uc10gU2V0IHRydWUgdG8gcHJldmVudCBzZXRfYXQgZXZlbnQuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRBdChpbmRleDogbnVtYmVyLCBlbGVtZW50OiBULCBub05vdGlmeT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXBzcGx1Z2luL2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMtZG9jL2Jsb2IvbWFzdGVyL3YyLjAuMC9jbGFzcy9DaXJjbGUvUkVBRE1FLm1kXG4gKi9cbmV4cG9ydCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjZW50ZXIgcG9zaXRpb24uXG4gICAqIEBwYXJhbSBsYXRMbmcge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDZW50ZXIobGF0TG5nOiBJTGF0TG5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjZW50ZXIgcG9zaXRpb25cbiAgICogQHJldHVybiB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENlbnRlcigpOiBJTGF0TG5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgcmFkaXVzLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRSYWRpdXMoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgY2lyY2xlIHJhZGl1cy5cbiAgICogQHBhcmFtIHJhZGl1cyB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UmFkaXVzKHJhZGl1czogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgZmlsbGluZyBjb2xvciAoaW5uZXIgY29sb3IpLlxuICAgKiBAcGFyYW0gY29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZpbGxDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBjaXJjbGUgZmlsbGluZyBjb2xvciAoaW5uZXIgY29sb3IpLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRGaWxsQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgc3Ryb2tlIHdpZHRoLlxuICAgKiBAcGFyYW0gc3Ryb2tlV2lkdGgge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZVdpZHRoKHN0cm9rZVdpZHRoOiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNpcmNsZSBzdHJva2Ugd2lkdGggKHVuaXQ6IHBpeGVsKS5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlV2lkdGgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgc3Ryb2tlIGNvbG9yIChvdXR0ZXIgY29sb3IpLlxuICAgKiBAcGFyYW0gc3Ryb2tlQ29sb3Ige3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cm9rZUNvbG9yKHN0cm9rZUNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNpcmNsZSBzdHJva2UgY29sb3IgKG91dGVyIGNvbG9yKS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBjaXJjbGUuXG4gICAqIEBwYXJhbSBjbGlja2FibGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDbGlja2FibGUoY2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjaXJjbGUgaXMgY2xpY2thYmxlLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjaXJjbGUgekluZGV4IG9yZGVyLlxuICAgKiBAcGFyYW0gekluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGNpcmNsZSB6SW5kZXguXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGNpcmNsZS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBsYXRMbmdCb3VuZHMgKHJlY3RhbmdsZSkgdGhhdCBjb250YWlucyB0aGUgY2lyY2xlLlxuICAgKiBAcmV0dXJuIHtMYXRMbmdCb3VuZHN9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRCb3VuZHMoKTogTGF0TG5nQm91bmRzIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGNpcmNsZSB2aXNpYmlsaXR5XG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjaXJjbGUgaXMgdmlzaWJsZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLmVudmlyb25tZW50JyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgRW52aXJvbm1lbnQge1xuXG4gIC8qKlxuICAgKiBTZXQgZW52aXJvbm1lbnQgdmFyaWFibGVzLlxuICAgKi9cbiAgc3RhdGljIHNldEVudihlbnZPcHRpb25zOiBFbnZPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LnNldEVudihlbnZPcHRpb25zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG9wZW4gc291cmNlIHNvZnR3YXJlIGxpY2Vuc2UgaW5mb3JtYXRpb24gZm9yIEdvb2dsZSBNYXBzIFNESyBmb3IgaU9TLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBzdGF0aWMgZ2V0TGljZW5zZUluZm8oKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKHRleHQ6IHN0cmluZykgPT4gcmVzb2x2ZSh0ZXh0KSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBhcHAuXG4gICAqIEBwYXJhbSBjb2xvclxuICAgKi9cbiAgc3RhdGljIHNldEJhY2tncm91bmRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLmVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcihjb2xvcik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbnZpcm9ubWVudC5nZXRMaWNlbnNlSW5mbygpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGdldExpY2Vuc2VJbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVudmlyb25tZW50LmdldExpY2Vuc2VJbmZvKCknKTtcbiAgICByZXR1cm4gRW52aXJvbm1lbnQuZ2V0TGljZW5zZUluZm8oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcigpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIHNldEJhY2tncm91bmRDb2xvcihjb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVudmlyb25tZW50LnNldEJhY2tncm91bmRDb2xvcigpJyk7XG4gICAgRW52aXJvbm1lbnQuc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2luLmdvb2dsZS5tYXBzLkdlb2NvZGVyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcycsXG4gIHJlcG86ICcnXG59KVxuZXhwb3J0IGNsYXNzIEdlb2NvZGVyIHtcblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBHZW9jb2Rlci5nZW9jb2RlKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZ2VvY29kZShyZXF1ZXN0OiBHZW9jb2RlclJlcXVlc3QpOiBQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10gfCBCYXNlQXJyYXlDbGFzczxHZW9jb2RlclJlc3VsdFtdPj4ge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBHZW9jb2Rlci5nZW9jb2RlKCknKTtcbiAgICByZXR1cm4gR2VvY29kZXIuZ2VvY29kZShyZXF1ZXN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBwb3NpdGlvbiB0byBhZGRyZXNzIGFuZCB2aWNlIHZlcnNhXG4gICAqIEBwYXJhbSB7R2VvY29kZXJSZXF1ZXN0fSByZXF1ZXN0IFJlcXVlc3Qgb2JqZWN0IHdpdGggZWl0aGVyIGFuIGFkZHJlc3Mgb3IgYSBwb3NpdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPEdlb2NvZGVyUmVzdWx0W10gfCBCYXNlQXJyYXlDbGFzczxHZW9jb2RlclJlc3VsdD4+fVxuICAgKi9cbiAgc3RhdGljIGdlb2NvZGUocmVxdWVzdDogR2VvY29kZXJSZXF1ZXN0KTogUHJvbWlzZTxHZW9jb2RlclJlc3VsdFtdIHwgQmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHRbXT4+IHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgaWYgKHJlcXVlc3QuYWRkcmVzcyBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkocmVxdWVzdC5hZGRyZXNzKSB8fFxuICAgICAgcmVxdWVzdC5wb3NpdGlvbiBpbnN0YW5jZW9mIEFycmF5IHx8IEFycmF5LmlzQXJyYXkocmVxdWVzdC5wb3NpdGlvbikpIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIEdlb2NvZGVyLmdlb2NvZGUoe1xuICAgICAgLy8gICBhZGRyZXNzOiBbXG4gICAgICAvLyAgICBcIkt5b3RvLCBKYXBhblwiLFxuICAgICAgLy8gICAgXCJUb2t5bywgSmFwYW5cIlxuICAgICAgLy8gICBdXG4gICAgICAvLyB9KVxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgcmV0dXJuIGdldFByb21pc2U8QmFzZUFycmF5Q2xhc3M8R2VvY29kZXJSZXN1bHRbXT4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5HZW9jb2Rlci5nZW9jb2RlKHJlcXVlc3QsIChtdmNBcnJheTogYW55KSA9PiB7XG4gICAgICAgICAgaWYgKG12Y0FycmF5KSB7XG4gICAgICAgICAgICByZXNvbHZlKG5ldyBCYXNlQXJyYXlDbGFzcyhtdmNBcnJheSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgIC8vIEdlb2NvZGVyLmdlb2NvZGUoe1xuICAgICAgLy8gICBhZGRyZXNzOiBcIkt5b3RvLCBKYXBhblwiXG4gICAgICAvLyB9KVxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgcmV0dXJuIGdldFByb21pc2U8R2VvY29kZXJSZXN1bHRbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkdlb2NvZGVyLmdlb2NvZGUocmVxdWVzdCwgKHJlc3VsdHM6IEdlb2NvZGVyUmVzdWx0W10pID0+IHtcbiAgICAgICAgICBpZiAocmVzdWx0cykge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBEaXJlY3Rpb25zU2VydmljZSB7XG5cbiAgLyoqXG4gICAqIEEgc2VydmljZSBmb3IgY29tcHV0aW5nIGRpcmVjdGlvbnMgYmV0d2VlbiB0d28gb3IgbW9yZSBwbGFjZXMuXG4gICAqIEBwYXJhbSB7RGlyZWN0aW9uc1JlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7UHJvbWlzZTxEaXJlY3Rpb25zUmVzdWx0Pn1cbiAgICovXG4gIHN0YXRpYyByb3V0ZShyZXF1ZXN0OiBEaXJlY3Rpb25zUmVxdWVzdCk6IFByb21pc2U8RGlyZWN0aW9uc1Jlc3VsdD4ge1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxEaXJlY3Rpb25zUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHJlcXVlc3QsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuRWxldmF0aW9uU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBFbGV2YXRpb25TZXJ2aWNlIHtcblxuICAvKipcbiAgICogTWFrZXMgYW4gZWxldmF0aW9uIHJlcXVlc3QgYWxvbmcgYSBwYXRoLCB3aGVyZSB0aGUgZWxldmF0aW9uIGRhdGEgYXJlIHJldHVybmVkIGFzIGRpc3RhbmNlLWJhc2VkIHNhbXBsZXMgYWxvbmcgdGhhdCBwYXRoLlxuICAgKiBAcGFyYW0ge1BhdGhFbGV2YXRpb25SZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEByZXR1cm4ge1Byb21pc2U8RWxldmF0aW9uUmVzdWx0W10+fVxuICAgKi9cbiAgc3RhdGljIGdldEVsZXZhdGlvbkFsb25nUGF0aChyZXF1ZXN0OiBQYXRoRWxldmF0aW9uUmVxdWVzdCk6IFByb21pc2U8RWxldmF0aW9uUmVzdWx0W10+IHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGdldFByb21pc2U8RWxldmF0aW9uUmVzdWx0W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuRWxldmF0aW9uU2VydmljZS5nZXRFbGV2YXRpb25BbG9uZ1BhdGgocmVxdWVzdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlcyBhbiBlbGV2YXRpb24gcmVxdWVzdCBmb3IgYSBsaXN0IG9mIGRpc2NyZXRlIGxvY2F0aW9ucy5cbiAgICogQHBhcmFtIHtMb2NhdGlvbkVsZXZhdGlvblJlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7UHJvbWlzZTxFbGV2YXRpb25SZXN1bHRbXT59XG4gICAqL1xuICBzdGF0aWMgZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zKHJlcXVlc3Q6IFBhdGhFbGV2YXRpb25SZXF1ZXN0KTogUHJvbWlzZTxFbGV2YXRpb25SZXN1bHRbXT4ge1xuXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxFbGV2YXRpb25SZXN1bHRbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5FbGV2YXRpb25TZXJ2aWNlLmdldEVsZXZhdGlvbkZvckxvY2F0aW9ucyhyZXF1ZXN0LCByZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5Mb2NhdGlvblNlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgTG9jYXRpb25TZXJ2aWNlIHtcblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGRldmljZSBsb2NhdGlvbiB3aXRob3V0IG1hcFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE15TG9jYXRpb24+fVxuICAgKi9cbiAgc3RhdGljIGdldE15TG9jYXRpb24ob3B0aW9ucz86IE15TG9jYXRpb25PcHRpb25zKTogUHJvbWlzZTxNeUxvY2F0aW9uPiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNeUxvY2F0aW9uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkxvY2F0aW9uU2VydmljZS5nZXRNeUxvY2F0aW9uKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHRoZSBhcHBsaWNhdGlvbiBoYXMgZ2VvbG9jYXRpb24gcGVybWlzc2lvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fVxuICAgKi9cbiAgc3RhdGljIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkxvY2F0aW9uU2VydmljZS5oYXNQZXJtaXNzaW9uKHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5lbmNvZGluZycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBFbmNvZGluZyB7XG5cbiAgLyoqXG4gICAqIERlY29kZXMgYW4gZW5jb2RlZCBwYXRoIHN0cmluZyBpbnRvIGEgc2VxdWVuY2Ugb2YgTGF0TG5ncy5cbiAgICogQHBhcmFtIGVuY29kZWQge3N0cmluZ30gYW4gZW5jb2RlZCBwYXRoIHN0cmluZ1xuICAgKiBAcGFyYW0gcHJlY2lzaW9uPyB7bnVtYmVyfSBkZWZhdWx0OiA1XG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBkZWNvZGVQYXRoKGVuY29kZWQ6IHN0cmluZywgcHJlY2lzaW9uPzogbnVtYmVyKTogSUxhdExuZ1tdIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LmVuY29kaW5nLmRlY29kZVBhdGgoZW5jb2RlZCwgcHJlY2lzaW9uKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFbmNvZGVzIGEgc2VxdWVuY2Ugb2YgTGF0TG5ncyBpbnRvIGFuIGVuY29kZWQgcGF0aCBzdHJpbmcuXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn0gYSBzZXF1ZW5jZSBvZiBMYXRMbmdzXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIHN0YXRpYyBlbmNvZGVQYXRoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogc3RyaW5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LmVuY29kaW5nLmVuY29kZVBhdGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5kZWNvZGVQYXRoKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZGVjb2RlUGF0aChlbmNvZGVkOiBzdHJpbmcsIHByZWNpc2lvbj86IG51bWJlcik6IElMYXRMbmdbXSB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmRlY29kZVBhdGgoKScpO1xuICAgIHJldHVybiBFbmNvZGluZy5kZWNvZGVQYXRoKGVuY29kZWQsIHByZWNpc2lvbik7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBFbmNvZGluZy5lbmNvZGVQYXRoKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgZW5jb2RlUGF0aChwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IHN0cmluZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIEVuY29kaW5nLmVuY29kZVBhdGgoKScpO1xuICAgIHJldHVybiBFbmNvZGluZy5lbmNvZGVQYXRoKHBhdGgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuZ2VvbWV0cnkucG9seScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBQb2x5IHtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBzcGVjaWZpZWQgbG9jYXRpb24gaXMgaW4gdGhlIHBvbHlnb24gcGF0aFxuICAgKiBAcGFyYW0gbG9jYXRpb24ge0lMYXRMbmd9XG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW119XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBzdGF0aWMgY29udGFpbnNMb2NhdGlvbihsb2NhdGlvbjogSUxhdExuZywgcGF0aDogSUxhdExuZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5wb2x5LmNvbnRhaW5zTG9jYXRpb24obG9jYXRpb24sIHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIGxvY2F0aW9uIGlzIG9uIHRoZSBwb2x5bGluZSBwYXRoXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7SUxhdExuZ31cbiAgICogQHBhcmFtIHBhdGgge0lMYXRMbmdbXX1cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIHN0YXRpYyBpc0xvY2F0aW9uT25FZGdlKGxvY2F0aW9uOiBJTGF0TG5nLCBwYXRoOiBJTGF0TG5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnBvbHkuaXNMb2NhdGlvbk9uRWRnZShsb2NhdGlvbiwgcGF0aCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnR29vZ2xlTWFwcycsXG4gIHBsdWdpblJlZjogJ3BsdWdpbi5nb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcmVwbzogJydcbn0pXG5leHBvcnQgY2xhc3MgU3BoZXJpY2FsIHtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZGlzdGFuY2UsIGluIG1ldGVycywgYmV0d2VlbiB0d28gTGF0TG5ncy5cbiAgICogQHBhcmFtIGxvY2F0aW9uQSB7SUxhdExuZ31cbiAgICogQHBhcmFtIGxvY2F0aW9uQiB7SUxhdExuZ31cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgc3RhdGljIGNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIExhdExuZyByZXN1bHRpbmcgZnJvbSBtb3ZpbmcgYSBkaXN0YW5jZSBmcm9tIGFuIG9yaWdpbiBpbiB0aGUgc3BlY2lmaWVkIGhlYWRpbmcgKGV4cHJlc3NlZCBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIG5vcnRoKVxuICAgKiBAcGFyYW0gZnJvbSB7SUxhdExuZ31cbiAgICogQHBhcmFtIGRpc3RhbmNlIHtudW1iZXJ9XG4gICAqIEBwYXJhbSBoZWFkaW5nIHtudW1iZXJ9XG4gICAqIEByZXR1cm4ge0xhdExuZ31cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlT2Zmc2V0KGZyb206IElMYXRMbmcsIGRpc3RhbmNlOiBudW1iZXIsIGhlYWRpbmc6IG51bWJlcik6IExhdExuZyB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZU9mZnNldChmcm9tLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbG9jYXRpb24gb2Ygb3JpZ2luIHdoZW4gcHJvdmlkZWQgd2l0aCBhIExhdExuZyBkZXN0aW5hdGlvbiwgbWV0ZXJzIHRyYXZlbGxlZCBhbmQgb3JpZ2luYWwgaGVhZGluZy4gSGVhZGluZ3MgYXJlIGV4cHJlc3NlZCBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIE5vcnRoLiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgbnVsbCB3aGVuIG5vIHNvbHV0aW9uIGlzIGF2YWlsYWJsZS5cbiAgICogQHBhcmFtIHRvIHtJTGF0TG5nfSBUaGUgZGVzdGluYXRpb24gTGF0TG5nLlxuICAgKiBAcGFyYW0gZGlzdGFuY2Uge251bWJlcn0gVGhlIGRpc3RhbmNlIHRyYXZlbGxlZCwgaW4gbWV0ZXJzLlxuICAgKiBAcGFyYW0gaGVhZGluZyB7bnVtYmVyfSBUaGUgaGVhZGluZyBpbiBkZWdyZWVzIGNsb2Nrd2lzZSBmcm9tIG5vcnRoLlxuICAgKiBAcmV0dXJuIHtMYXRMbmd9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZU9mZnNldE9yaWdpbih0bzogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKHRvLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGVuZ3RoIG9mIHRoZSBnaXZlbiBwYXRoLlxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz59XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlTGVuZ3RoKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFyZWEgb2YgYSBjbG9zZWQgcGF0aC4gVGhlIGNvbXB1dGVkIGFyZWEgdXNlcyB0aGUgc2FtZSB1bml0cyBhcyB0aGUgcmFkaXVzLlxuICAgKiBAcGFyYW0gcGF0aCB7SUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz59LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBzdGF0aWMgY29tcHV0ZUFyZWEocGF0aDogSUxhdExuZ1tdIHwgQmFzZUFycmF5Q2xhc3M8SUxhdExuZz4pOiBudW1iZXIge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvcmRvdmEtcGx1Z2luLWdvb2dsZW1hcHMgaXMgbm90IHJlYWR5LiBQbGVhc2UgdXNlIHBsYXRmb3JtLnJlYWR5KCkgYmVmb3JlIGFjY2Vzc2luZyB0aGlzIG1ldGhvZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuZ2VvbWV0cnkuc3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2lnbmVkIGFyZWEgb2YgYSBjbG9zZWQgcGF0aC4gVGhlIHNpZ25lZCBhcmVhIG1heSBiZSB1c2VkIHRvIGRldGVybWluZSB0aGUgb3JpZW50YXRpb24gb2YgdGhlIHBhdGguXG4gICAqIEBwYXJhbSBwYXRoIHtJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn0uXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlU2lnbmVkQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZVNpZ25lZEFyZWEocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGVhZGluZyBmcm9tIG9uZSBMYXRMbmcgdG8gYW5vdGhlciBMYXRMbmcuIEhlYWRpbmdzIGFyZSBleHByZXNzZWQgaW4gZGVncmVlcyBjbG9ja3dpc2UgZnJvbSBOb3J0aCB3aXRoaW4gdGhlIHJhbmdlICgtMTgwLDE4MCkuXG4gICAqIEBwYXJhbSBmcm9tIHtJTGF0TG5nfVxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIHN0YXRpYyBjb21wdXRlSGVhZGluZyhmcm9tOiBJTGF0TG5nLCB0bzogSUxhdExuZyk6IG51bWJlciB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KEdvb2dsZU1hcHMuZ2V0UGx1Z2luUmVmKCksIG51bGwsIEdvb2dsZU1hcHMuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgcmVhZHkuIFBsZWFzZSB1c2UgcGxhdGZvcm0ucmVhZHkoKSBiZWZvcmUgYWNjZXNzaW5nIHRoaXMgbWV0aG9kLicpO1xuICAgIH1cbiAgICByZXR1cm4gR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIExhdExuZyB3aGljaCBsaWVzIHRoZSBnaXZlbiBmcmFjdGlvbiBvZiB0aGUgd2F5IGJldHdlZW4gdGhlIG9yaWdpbiBMYXRMbmcgYW5kIHRoZSBkZXN0aW5hdGlvbiBMYXRMbmcuXG4gICAqIEBwYXJhbSBmcm9tIHtJTGF0TG5nfSAgICAgVGhlIExhdExuZyBmcm9tIHdoaWNoIHRvIHN0YXJ0LlxuICAgKiBAcGFyYW0gdG8ge0lMYXRMbmd9ICAgICAgIFRoZSBMYXRMbmcgdG93YXJkIHdoaWNoIHRvIHRyYXZlbC5cbiAgICogQHBhcmFtIGZyYWN0aW9uIHtudW1iZXJ9ICBBIGZyYWN0aW9uIG9mIHRoZSBkaXN0YW5jZSB0byB0cmF2ZWwgZnJvbSAwLjAgdG8gMS4wIC5cbiAgICogQHJldHVybiB7TGF0TG5nfVxuICAgKi9cbiAgc3RhdGljIGludGVycG9sYXRlKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nLCBmcmFjdGlvbjogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSBmYWxzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCByZWFkeS4gUGxlYXNlIHVzZSBwbGF0Zm9ybS5yZWFkeSgpIGJlZm9yZSBhY2Nlc3NpbmcgdGhpcyBtZXRob2QuJyk7XG4gICAgfVxuICAgIHJldHVybiBHb29nbGVNYXBzLmdldFBsdWdpbigpLmdlb21ldHJ5LnNwaGVyaWNhbC5pbnRlcnBvbGF0ZShmcm9tLCB0bywgZnJhY3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlRGlzdGFuY2VCZXR3ZWVuKGZyb206IElMYXRMbmcsIHRvOiBJTGF0TG5nKTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVEaXN0YW5jZUJldHdlZW4oKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbihmcm9tLCB0byk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldCgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVPZmZzZXQoZnJvbTogSUxhdExuZywgZGlzdGFuY2U6IG51bWJlciwgaGVhZGluZzogbnVtYmVyKTogTGF0TG5nIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXQoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZU9mZnNldChmcm9tLCBkaXN0YW5jZSwgaGVhZGluZyk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZU9mZnNldE9yaWdpbigpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVPZmZzZXRPcmlnaW4odG86IElMYXRMbmcsIGRpc3RhbmNlOiBudW1iZXIsIGhlYWRpbmc6IG51bWJlcik6IExhdExuZyB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlT2Zmc2V0T3JpZ2luKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVPZmZzZXRPcmlnaW4odG8sIGRpc3RhbmNlLCBoZWFkaW5nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUxlbmd0aChwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlTGVuZ3RoKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVMZW5ndGgocGF0aCk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0aW9uIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUFyZWEoKVxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBjb21wdXRlQXJlYShwYXRoOiBJTGF0TG5nW10gfCBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPik6IG51bWJlciB7XG4gICAgY29uc29sZS5lcnJvcignR29vZ2xlTWFwcycsICdbZGVwcmVjYXRlZF0gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlQXJlYSgpJyk7XG4gICAgcmV0dXJuIFNwaGVyaWNhbC5jb21wdXRlQXJlYShwYXRoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRpb24gVGhpcyBtZXRob2QgaXMgc3RhdGljLiBQbGVhc2UgdXNlIFNwaGVyaWNhbC5jb21wdXRlU2lnbmVkQXJlYSgpXG4gICAqIEBoaWRkZW5cbiAgICovXG4gIGNvbXB1dGVTaWduZWRBcmVhKHBhdGg6IElMYXRMbmdbXSB8IEJhc2VBcnJheUNsYXNzPElMYXRMbmc+KTogbnVtYmVyIHtcbiAgICBjb25zb2xlLmVycm9yKCdHb29nbGVNYXBzJywgJ1tkZXByZWNhdGVkXSBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKCknKTtcbiAgICByZXR1cm4gU3BoZXJpY2FsLmNvbXB1dGVTaWduZWRBcmVhKHBhdGgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmNvbXB1dGVIZWFkaW5nKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgY29tcHV0ZUhlYWRpbmcoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcpOiBudW1iZXIge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuY29tcHV0ZUhlYWRpbmcoZnJvbSwgdG8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGlvbiBUaGlzIG1ldGhvZCBpcyBzdGF0aWMuIFBsZWFzZSB1c2UgU3BoZXJpY2FsLmludGVycG9sYXRlKClcbiAgICogQGhpZGRlblxuICAgKi9cbiAgaW50ZXJwb2xhdGUoZnJvbTogSUxhdExuZywgdG86IElMYXRMbmcsIGZyYWN0aW9uOiBudW1iZXIpOiBMYXRMbmcge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0dvb2dsZU1hcHMnLCAnW2RlcHJlY2F0ZWRdIFRoaXMgbWV0aG9kIGlzIHN0YXRpYy4gUGxlYXNlIHVzZSBTcGhlcmljYWwuaW50ZXJwb2xhdGUoKScpO1xuICAgIHJldHVybiBTcGhlcmljYWwuaW50ZXJwb2xhdGUoZnJvbSwgdG8sIGZyYWN0aW9uKTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdHJlZXRWaWV3UGFub3JhbWEnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHJlZXRWaWV3UGFub3JhbWEgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBzdHJpbmcgfCBIVE1MRWxlbWVudCwgb3B0aW9ucz86IFN0cmVldFZpZXdPcHRpb25zKSB7XG5cbiAgICBpZiAoY2hlY2tBdmFpbGFiaWxpdHkoR29vZ2xlTWFwcy5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgR29vZ2xlTWFwcy5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAvLyBDcmVhdGUgYSBwYW5vcmFtYVxuICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZWxlbWVudC5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5TdHJlZXRWaWV3LmdldFBhbm9yYW1hKGVsZW1lbnQsIG9wdGlvbnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZWxlbWVudC50YWdOYW1lICsgJyBpcyB0b28gc21hbGwuIE11c3QgYmUgYmlnZ2VyIHRoYW4gMTAweDEwMC4nKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcblxuICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLlN0cmVldFZpZXcuZ2V0UGFub3JhbWEoZ2V0UHJvbWlzZTxhbnlbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgIGxldCBjb3VudDogbnVtYmVyO1xuICAgICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICAgIGNvbnN0IHRpbWVyOiBhbnkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0czogYW55W107XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgVEFSR0VUX0VMRU1FTlRfRklORElOR19RVUVSWVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW3RhcmdldHNbMF0sIG9wdGlvbnNdKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KysgPCA0MCkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCAmJiB0YXJnZXRzWzBdICYmICh0YXJnZXRzWzBdLm9mZnNldFdpZHRoIDwgMTAwIHx8IHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0IDwgMTAwKSkge1xuICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHRhcmdldHNbMF0udGFnTmFtZSArICdbIycgKyBlbGVtZW50ICsgJ10gaXMgdG9vIHNtYWxsLiBNdXN0IGJlIGJpZ2dlciB0aGFuIDEwMHgxMDAuJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ1RoZXJlIGFyZSBtdWx0aXBsZSBcIicgKyBlbGVtZW50ICsgJ1wiIGVsZW1lbnRzLiBVc2UgZGlmZmVyZW50IGlkIHRvIHByZXZlbnQgZXJyb3IuJykpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ0NhbiBub3QgZmluZCB0aGUgZWxlbWVudCBbIycgKyBlbGVtZW50ICsgJ10nKSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KSwgb3B0aW9ucykpO1xuXG4gICAgICB9XG4gICAgfSBlbHNlIHtcblxuICAgICAgY29uc3QgZXJyb3JNZXNzYWdlOiBzdHJpbmdbXSA9IFtcbiAgICAgICAgJ1tHb29nbGVNYXBzXSdcbiAgICAgIF07XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdZb3UgbmVlZCB0byBleGVjdXRlIFwiJD4gaW9uaWMgY29yZG92YSBydW4gYnJvd3NlclwiLicpO1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnXCIkPiBpb25pYyBzZXJ2ZVwiIGlzIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlcnJvck1lc3NhZ2UucHVzaCgnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcyBpcyBub3QgaW5zdGFsbGVkIG9yIG5vdCByZWFkeSB5ZXQuJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZShlbGVtZW50LCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgbGV0IHRhcmdldHM6IGFueVtdID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjJyArIGVsZW1lbnQpKTtcbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRhcmdldHMgPSB0YXJnZXRzLmZpbHRlcigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdKSB7XG4gICAgICAgICAgZGlzcGxheUVycm9yTWVzc2FnZSh0YXJnZXRzWzBdLCBlcnJvck1lc3NhZ2Uuam9pbignPGJyIC8+JykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNZXNzYWdlLmpvaW4oJycpKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHBvaW50IG9mIHZpZXcgZm9yIHRoZSBTdHJlZXQgVmlldyBwYW5vcmFtYS5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBzZXRQb3YocG92OiBTdHJlZXRWaWV3Q2FtZXJhUGFubyk6IHZvaWQge31cblxuICAvKipcbiAgICogU2V0cyB0aGUgU3RyZWV0Vmlld1Bhbm9yYW1hIHRvIGEgZ2l2ZW4gbG9jYXRpb24uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2V0UG9zaXRpb24oY2FtZXJhUG9zaXRpb246IFN0cmluZyB8IFN0cmVldFZpZXdTZXRQb3NpdGlvbk9wdGlvbik6IHZvaWQge31cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgYWJpbGl0eSBmb3IgdXNlcnMgdG8gdXNlIHBhbiBhcm91bmQgb24gdGhlIHBhbm9yYW1hIHVzaW5nIGdlc3R1cmVzLlxuICAgKiBAcGFyYW0gZ2VzdHVyZUVuYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBhbm5pbmdHZXN0dXJlc0VuYWJsZWQoZ2VzdHVyZUVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHBhbm5pbmcgZ2VzdHVyZSBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UGFubmluZ0dlc3R1cmVzRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFiaWxpdHkgZm9yIHVzZXJzIHRvIHpvb20gb24gdGhlIHBhbm9yYW1hIHVzaW5nIGdlc3R1cmVzLlxuICAgKiBAcGFyYW0gZ2VzdHVyZUVuYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpvb21HZXN0dXJlc0VuYWJsZWQoZ2VzdHVyZUVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIHpvb21pbmcgZ2VzdHVyZSBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Wm9vbUdlc3R1cmVzRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFiaWxpdHkgZm9yIHVzZXJzIHRvIHNlZSBzdHJlZXQgbmFtZXMgb24gdGhlIHBhbm9yYW1hLlxuICAgKiBAcGFyYW0gZ2VzdHVyZUVuYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFN0cmVldE5hbWVzRW5hYmxlZChnZXN0dXJlRW5hYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgc3RyZWV0IG5hbWVzIGNvbnRyb2wgaXMgZW5hYmxlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cmVldE5hbWVzRW5hYmxlZCgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGFiaWxpdHkgZm9yIHVzZXJzIHRvIG1vdmUgYmV0d2VlbiBwYW5vcmFtYXMuXG4gICAqIEBwYXJhbSBnZXN0dXJlRW5hYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0TmF2aWdhdGlvbkVuYWJsZWQoZ2VzdHVyZUVuYWJsZTogYm9vbGVhbik6IHZvaWQge31cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgdGhlIG5hdmlnYXRpb24gY29udHJvbCBpcyBlbmFibGVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TmF2aWdhdGlvbkVuYWJsZWQoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIG5hdmlnYXRpb24gbGlua3MgKFN0cmVldFZpZXdMb2NhdGlvbi5saW5rcylcbiAgICogQHJldHVybiB7U3RyZWV0Vmlld05hdmlnYXRpb25MaW5rW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRMaW5rcygpOiBTdHJlZXRWaWV3TmF2aWdhdGlvbkxpbmtbXSB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICogQHJldHVybiB7U3RyZWV0Vmlld0xvY2F0aW9ufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0TG9jYXRpb24oKTogU3RyZWV0Vmlld0xvY2F0aW9uIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwYW5vcmFtYSBpZFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQYW5vSWQoKTogc3RyaW5nIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgY3VycmVudCBwb3NpdGlvbiAoU3RyZWV0Vmlld0xvY2F0aW9uLmxhdExuZylcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0UG9zaXRpb24oKTogSUxhdExuZyB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBEZXN0cm95IGEgcGFub3JhbWEgY29tcGxldGVseVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8YW55PigocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdHb29nbGVNYXBzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlbWFwcydcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlTWFwIGV4dGVuZHMgQmFzZUNsYXNzIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudDogSFRNTEVsZW1lbnQgfCBzdHJpbmcsIG9wdGlvbnM/OiBHb29nbGVNYXBPcHRpb25zLCBfX3RpbWVvdXQ/OiBudW1iZXIpIHtcblxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShHb29nbGVNYXBzLmdldFBsdWdpblJlZigpLCBudWxsLCBHb29nbGVNYXBzLmdldFBsdWdpbk5hbWUoKSkgPT09IHRydWUpIHtcbiAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLVxuICAgICAgLy8gQ3JlYXRlIGEgbWFwXG4gICAgICAvLyAtLS0tLS0tLS0tLS0tLS1cbiAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKCFlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRWxlbWVudCBtdXN0IGJlIHVuZGVyIDxib2R5PicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50Lm9mZnNldFdpZHRoID49IDEwMCAmJiBlbGVtZW50Lm9mZnNldEhlaWdodCA+PSAxMDApIHtcbiAgICAgICAgICBzdXBlcihHb29nbGVNYXBzLmdldFBsdWdpbigpLk1hcC5nZXRNYXAoZWxlbWVudCwgb3B0aW9ucykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlbGVtZW50LnRhZ05hbWUgKyAnIGlzIHRvbyBzbWFsbC4gTXVzdCBiZSBiaWdnZXIgdGhhbiAxMDB4MTAwLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuXG4gICAgICAgIHN1cGVyKEdvb2dsZU1hcHMuZ2V0UGx1Z2luKCkuTWFwLmdldE1hcChnZXRQcm9taXNlPGFueVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgbGV0IGNvdW50OiBudW1iZXI7XG4gICAgICAgICAgbGV0IGk6IG51bWJlcjtcbiAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgICAgY29uc3QgdGltZXI6IGFueSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTW2ldICsgZWxlbWVudCkpO1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpICYmIHRhcmdldC5fX3BsdWdpbk1hcElkID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShbdGFyZ2V0c1swXSwgb3B0aW9uc10pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQrKyA8IDQwKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwICYmIHRhcmdldHNbMF0gJiYgKHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPCAxMDAgfHwgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPCAxMDApKSB7XG4gICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IodGFyZ2V0c1swXS50YWdOYW1lICsgJ1sjJyArIGVsZW1lbnQgKyAnXSBpcyB0b28gc21hbGwuIE11c3QgYmUgYmlnZ2VyIHRoYW4gMTAweDEwMC4nKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignVGhlcmUgYXJlIG11bHRpcGxlIFwiJyArIGVsZW1lbnQgKyAnXCIgZWxlbWVudHMuIFVzZSBkaWZmZXJlbnQgaWQgdG8gcHJldmVudCBlcnJvci4nKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignQ2FuIG5vdCBmaW5kIHRoZSBlbGVtZW50IFsjJyArIGVsZW1lbnQgKyAnXScpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIF9fdGltZW91dCA9PSBudWxsID8gMTAwIDogX190aW1lb3V0KTtcbiAgICAgICAgfSksIG9wdGlvbnMpKTtcblxuICAgICAgfSBlbHNlIGlmIChlbGVtZW50ID09PSBudWxsICYmIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoR29vZ2xlTWFwcy5nZXRQbHVnaW4oKS5NYXAuZ2V0TWFwKG51bGwsIG9wdGlvbnMpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuXG4gICAgICBjb25zdCBlcnJvck1lc3NhZ2U6IHN0cmluZ1tdID0gW1xuICAgICAgICAnW0dvb2dsZU1hcHNdJ1xuICAgICAgXTtcbiAgICAgIGlmICghd2luZG93LmNvcmRvdmEpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlLnB1c2goJ1lvdSBuZWVkIHRvIGV4ZWN1dGUgXCIkPiBpb25pYyBjb3Jkb3ZhIHJ1biBicm93c2VyXCIuJyk7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdcIiQ+IGlvbmljIHNlcnZlXCIgaXMgbm90IHN1cHBvcnRlZC4nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yTWVzc2FnZS5wdXNoKCdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzIGlzIG5vdCBpbnN0YWxsZWQgb3Igbm90IHJlYWR5IHlldC4nKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNZXNzYWdlLmpvaW4oJycpKTtcblxuICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKGVsZW1lbnQsIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICBsZXQgdGFyZ2V0czogYW55W10gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyMnICsgZWxlbWVudCkpO1xuICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuZmlsdGVyKCh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpICYmIHRhcmdldC5fX3BsdWdpbk1hcElkID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0pIHtcbiAgICAgICAgICBkaXNwbGF5RXJyb3JNZXNzYWdlKHRhcmdldHNbMF0sIGVycm9yTWVzc2FnZS5qb2luKCc8YnIgLz4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBtYXAgZGl2XG4gICAqIEBwYXJhbSBkb21Ob2RlIHtIVE1MRWxlbWVudCB8IHN0cmluZ30gW29wdGlvbnNdIElmIHlvdSB3YW50IHRvIGRpc3BsYXkgdGhlIG1hcCBpbiBhbiBodG1sIGVsZW1lbnQsIHlvdSBuZWVkIHRvIHNwZWNpZnkgYW4gZWxlbWVudCBvciBpZC4gSWYgb21pdCB0aGlzIGFyZ3VtZW50LCB0aGUgbWFwIGlzIGRldGFjaGVkIGZyb20gd2Vidmlldy5cbiAgICogQHJldHVybnMgUHJvbWlzZTx2b2lkPlxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBzZXREaXYoZG9tTm9kZT86IEhUTUxFbGVtZW50IHwgc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2V0RGl2KCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZG9tTm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiAoZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgbGV0IGNvdW50OiBudW1iZXI7XG4gICAgICAgIGxldCBpOiBudW1iZXI7XG4gICAgICAgIGNvdW50ID0gMDtcbiAgICAgICAgY29uc3QgdGltZXI6IGFueSA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBsZXQgdGFyZ2V0czogYW55W107XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXJnZXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTW2ldICsgZG9tTm9kZSkpO1xuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnX19wbHVnaW5NYXBJZCcpICYmIHRhcmdldC5fX3BsdWdpbk1hcElkID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhcmdldHMubGVuZ3RoID09PSAxICYmIHRhcmdldHNbMF0gJiYgdGFyZ2V0c1swXS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgdGFyZ2V0c1swXS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICAgICAgICByZXNvbHZlKHRhcmdldHNbMF0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvdW50KysgPCA0MCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgICByZWplY3QoJ0NhbiBub3QgZmluZCBbIycgKyBkb21Ob2RlICsgJ10gZWxlbWVudCcpO1xuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIC8qXG4gICAgICAgIGxldCBpLCB0YXJnZXRzOiBhbnlbXTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IFRBUkdFVF9FTEVNRU5UX0ZJTkRJTkdfUVVFUllTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdGFyZ2V0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfRUxFTUVOVF9GSU5ESU5HX1FVRVJZU1tpXSArIGRvbU5vZGUpKTtcbiAgICAgICAgICBpZiAodGFyZ2V0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXRzID0gdGFyZ2V0cy5maWx0ZXIoKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gIXRhcmdldC5oYXNBdHRyaWJ1dGUoJ19fcGx1Z2luTWFwSWQnKSAmJiB0YXJnZXQuX19wbHVnaW5NYXBJZCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0YXJnZXRzLmxlbmd0aCA9PT0gMSAmJiB0YXJnZXRzWzBdICYmIHRhcmdldHNbMF0ub2Zmc2V0V2lkdGggPj0gMTAwICYmIHRhcmdldHNbMF0ub2Zmc2V0SGVpZ2h0ID49IDEwMCkge1xuICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXRzWzBdIGFzIEhUTUxFbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZWplY3QoJ0NhbiBub3QgZmluZCBbIycgKyBkb21Ob2RlICsgJ10gZWxlbWVudCcpO1xuICAgICAgICAqL1xuICAgICAgfSkpXG4gICAgICAudGhlbigoZWxlbWVudDogSFRNTEVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29iamVjdEluc3RhbmNlLnNldERpdihlbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZG9tTm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmXG4gICAgICAgICAgIWRvbU5vZGUub2Zmc2V0UGFyZW50ICYmXG4gICAgICAgICAgZG9tTm9kZS5vZmZzZXRXaWR0aCA+PSAxMDAgJiYgZG9tTm9kZS5vZmZzZXRIZWlnaHQgPj0gMTAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vYmplY3RJbnN0YW5jZS5zZXREaXYoZG9tTm9kZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZG9tTm9kZS50YWdOYW1lICsgJyBpcyB0b28gc21hbGwuIE11c3QgYmUgYmlnZ2VyIHRoYW4gMTAweDEwMC4nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIEhUTUwgZWxlbWVudFxuICAgKiBAcmV0dXJuIHtIVE1MRWxlbWVudH1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldERpdigpOiBIVE1MRWxlbWVudCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIG1hcCB0eXBlIGlkXG4gICAqIEBwYXJhbSBtYXBUeXBlSWQge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE1hcFR5cGVJZChtYXBUeXBlSWQ6IE1hcFR5cGUgfCBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlcyB0aGUgY2FtZXJhIHdpdGggYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBhbmltYXRlQ2FtZXJhKGNhbWVyYVBvc2l0aW9uOiBDYW1lcmFQb3NpdGlvbjxhbnk+KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBpbiB0aGUgY2FtZXJhIHdpdGggYW5pbWF0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBhbmltYXRlQ2FtZXJhWm9vbUluKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFpvb21pbmcgb3V0IHRoZSBjYW1lcmEgd2l0aCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGFuaW1hdGVDYW1lcmFab29tT3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmVzIHRoZSBjYW1lcmEgd2l0aG91dCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIG1vdmVDYW1lcmEoY2FtZXJhUG9zaXRpb246IENhbWVyYVBvc2l0aW9uPGFueT4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBab29taW5nIGluIHRoZSBjYW1lcmEgd2l0aG91dCBhbmltYXRpb25cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIG1vdmVDYW1lcmFab29tSW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogWm9vbWluZyBvdXQgdGhlIGNhbWVyYSB3aXRob3V0IGFuaW1hdGlvblxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgbW92ZUNhbWVyYVpvb21PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwb3NpdGlvbiBvZiB0aGUgY2FtZXJhLlxuICAgKiBAcmV0dXJuIHtDYW1lcmFQb3NpdGlvbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYVBvc2l0aW9uKCk6IENhbWVyYVBvc2l0aW9uPElMYXRMbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGNhbWVyYSB0YXJnZXQgcG9zaXRpb25cbiAgICogQHJldHVybiB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYVRhcmdldCgpOiBJTGF0TG5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGNhbWVyYSB6b29tIGxldmVsXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYVpvb20oKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGNhbWVyYSBiZWFyaW5nXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENhbWVyYUJlYXJpbmcoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IGNhbWVyYSB0aWx0ICh2aWV3IGFuZ2xlKVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDYW1lcmFUaWx0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgY2VudGVyIHBvc2l0aW9uIG9mIHRoZSBjYW1lcmEgdmlld1xuICAgKiBAcGFyYW0gbGF0TG5nIHtJTGF0TG5nIHwgSUxhdExuZ1tdfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhVGFyZ2V0KGxhdExuZzogSUxhdExuZyB8IElMYXRMbmdbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB6b29tIGxldmVsIG9mIHRoZSBjYW1lcmFcbiAgICogQHBhcmFtIHpvb21MZXZlbCB7bnVtYmVyfSBab29tIGxldmVsXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRDYW1lcmFab29tKHpvb21MZXZlbDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBjYW1lcmEgdmlldyBhbmdsZVxuICAgKiBAcGFyYW0gdGlsdEFuZ2xlIHtudW1iZXJ9IFRpbHQgYW5nbGVcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENhbWVyYVRpbHQodGlsdEFuZ2xlOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFNldCBjYW1lcmEgYmVhcmluZ1xuICAgKiBAcGFyYW0gYmVhcmluZyB7YW55fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2FtZXJhQmVhcmluZyhiZWFyaW5nOiBhbnkpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBjZW50ZXIgb2YgdGhlIG1hcCBieSB0aGUgZ2l2ZW4gZGlzdGFuY2UgaW4gcGl4ZWxzXG4gICAqIEBwYXJhbSB4IHtudW1iZXJ9XG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBwYW5CeSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCB2aXNpYmxlIHJlZ2lvbiAoc291dGhXZXN0IGFuZCBub3J0aEVhc3QpXG4gICAqIEByZXR1cm4ge1Zpc2libGVSZWdpb259XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlUmVnaW9uKCk6IFZpc2libGVSZWdpb24ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgZGV2aWNlIGxvY2F0aW9uXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TXlMb2NhdGlvbj59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgZ2V0TXlMb2NhdGlvbihvcHRpb25zPzogTXlMb2NhdGlvbk9wdGlvbnMpOiBQcm9taXNlPE15TG9jYXRpb24+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxNeUxvY2F0aW9uPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBHb29nbGVNYXBzLmdldFBsdWdpbigpLkxvY2F0aW9uU2VydmljZS5nZXRNeUxvY2F0aW9uKG9wdGlvbnMsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZhbHNlIHRvIGlnbm9yZSBhbGwgY2xpY2tzIG9uIHRoZSBtYXBcbiAgICogQHBhcmFtIGlzQ2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGlzQ2xpY2thYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSBhIG1hcCBjb21wbGV0ZWx5XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmdldCgnX292ZXJsYXlzJykpLmZvckVhY2goKG92ZXJsYXlJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgoKSA9PiByZXNvbHZlKCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBhbGwgb3ZlcmxheXMsIHN1Y2ggYXMgbWFya2VyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLmdldCgnX292ZXJsYXlzJykpLmZvckVhY2goKG92ZXJsYXlJZDogc3RyaW5nKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgZGVsZXRlIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmNsZWFyKCgpID0+IHJlc29sdmUoKSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29udmVydCB0aGUgdW5pdCBmcm9tIExhdExuZyB0byB0aGUgcGl4ZWxzIGZyb20gdGhlIGxlZnQvdG9wIG9mIHRoZSBtYXAgZGl2XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICBmcm9tTGF0TG5nVG9Qb2ludChsYXRMbmc6IElMYXRMbmcpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgdGhlIHVuaXQgZnJvbSB0aGUgcGl4ZWxzIGZyb20gdGhlIGxlZnQvdG9wIHRvIHRoZSBMYXRMbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxMYXRMbmc+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGZyb21Qb2ludFRvTGF0TG5nKHBvaW50OiBudW1iZXJbXSk6IFByb21pc2U8TGF0TG5nPiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBNeUxvY2F0aW9uIGNvbnRyb2wgKGJsdWUgZG90KVxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE15TG9jYXRpb25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBNeUxvY2F0aW9uIGJ1dHRvblxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE15TG9jYXRpb25CdXR0b25FbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudGx5IGZvY3VzZWQgYnVpbGRpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGdldEZvY3VzZWRCdWlsZGluZygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBpbmRvb3IgbWFwXG4gICAqIEBwYXJhbSBlbmFibGVkIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SW5kb29yRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gc2hvdyB0aGUgdHJhZmZpYyBsYXllclxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFRyYWZmaWNFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3Ugd2FudCB0byBzaG93IHRoZSBjb21wYXNzIGJ1dHRvblxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENvbXBhc3NFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwcmVmZXJlbmNlIGZvciB3aGV0aGVyIGFsbCBnZXN0dXJlcyBzaG91bGQgYmUgZW5hYmxlZCBvciBkaXNhYmxlZFxuICAgKiBAcGFyYW0gZW5hYmxlZCB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEFsbEdlc3R1cmVzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHZpc2liaWxpdHkgb2YgdGhlIG1hcFxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdCB0aGUgbWFwIHBhZGRpbmcgKHNhbWUgYXMgQ1NTIHBhZGRpbmcgcnVsZSlcbiAgICogQHBhcmFtIHRvcCB7bnVtYmVyfVxuICAgKiBAcGFyYW0gcmlnaHQge251bWJlcn1cbiAgICogQHBhcmFtIGxlZnQge251bWJlcn1cbiAgICogQHBhcmFtIGJvdHRvbSB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0UGFkZGluZyh0b3A6IG51bWJlciwgcmlnaHQ/OiBudW1iZXIsIGJvdHRvbT86IG51bWJlciwgbGVmdD86IG51bWJlcik6IHZvaWQgeyB9XG5cbiAgLyoqXG4gICAqIFNldCBvcHRpb25zXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcHRpb25zKG9wdGlvbnM6IEdvb2dsZU1hcE9wdGlvbnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtNYXJrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWFya2VyPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyKG9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiBQcm9taXNlPE1hcmtlciB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPE1hcmtlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyKG9wdGlvbnMsIChtYXJrZXI6IGFueSkgPT4ge1xuICAgICAgICBpZiAobWFya2VyKSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBtYXJrZXIuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5OiBNYXJrZXIgPSBuZXcgTWFya2VyKHRoaXMsIG1hcmtlcik7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIG1hcmtlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIG1hcmtlciBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAUmV0dXJucyB7TWFya2VyfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXJTeW5jKG9wdGlvbnM6IE1hcmtlck9wdGlvbnMpOiBNYXJrZXIge1xuICAgIGNvbnN0IG1hcmtlcjogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkTWFya2VyKG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gbWFya2VyLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheTogTWFya2VyID0gbmV3IE1hcmtlcih0aGlzLCBtYXJrZXIpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBtYXJrZXIub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBtYXJrZXIgY2x1c3RlclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7TWFya2VyQ2x1c3Rlck9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxNYXJrZXJDbHVzdGVyPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkTWFya2VyQ2x1c3RlcihvcHRpb25zOiBNYXJrZXJDbHVzdGVyT3B0aW9ucyk6IFByb21pc2U8TWFya2VyQ2x1c3RlciB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPE1hcmtlckNsdXN0ZXI+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlckNsdXN0ZXIob3B0aW9ucywgKG1hcmtlckNsdXN0ZXI6IGFueSkgPT4ge1xuICAgICAgICBpZiAobWFya2VyQ2x1c3Rlcikge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZCA9IG1hcmtlckNsdXN0ZXIuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IE1hcmtlckNsdXN0ZXIodGhpcywgbWFya2VyQ2x1c3Rlcik7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIG1hcmtlckNsdXN0ZXIub25lKCdyZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgbWFya2VyQ2x1c3Rlci5zZXQoJ19vdmVybGF5cycsIG5ldyBCYXNlQXJyYXlDbGFzcygpKTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgbWFya2VyIGNsdXN0ZXIgaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge01hcmtlckNsdXN0ZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEBSZXR1cm5zIHtNYXJrZXJDbHVzdGVyfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRNYXJrZXJDbHVzdGVyU3luYyhvcHRpb25zOiBNYXJrZXJDbHVzdGVyT3B0aW9ucyk6IE1hcmtlckNsdXN0ZXIge1xuICAgIGNvbnN0IG1hcmtlckNsdXN0ZXI6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZE1hcmtlckNsdXN0ZXIob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBtYXJrZXJDbHVzdGVyLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheTogTWFya2VyQ2x1c3RlciA9IG5ldyBNYXJrZXJDbHVzdGVyKHRoaXMsIG1hcmtlckNsdXN0ZXIpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBtYXJrZXJDbHVzdGVyLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBtYXJrZXJDbHVzdGVyLnNldCgnX292ZXJsYXlzJywgbmV3IEJhc2VBcnJheUNsYXNzKCkpO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBjaXJjbGVcbiAgICogQHBhcmFtIG9wdGlvbnMge0NpcmNsZU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxDaXJjbGU+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRDaXJjbGUob3B0aW9uczogQ2lyY2xlT3B0aW9ucyk6IFByb21pc2U8Q2lyY2xlIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8Q2lyY2xlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRDaXJjbGUob3B0aW9ucywgKGNpcmNsZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChjaXJjbGUpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGNpcmNsZS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgQ2lyY2xlKHRoaXMsIGNpcmNsZSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIGNpcmNsZS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNpcmNsZSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7Q2lyY2xlT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtDaXJjbGV9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZENpcmNsZVN5bmMob3B0aW9uczogQ2lyY2xlT3B0aW9ucyk6IENpcmNsZSB7XG4gICAgY29uc3QgY2lyY2xlOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRDaXJjbGUob3B0aW9ucyk7XG4gICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBjaXJjbGUuZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IENpcmNsZSh0aGlzLCBjaXJjbGUpO1xuICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICBjaXJjbGUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgcG9seWdvblxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWdvbk9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxQb2x5Z29uPn1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkUG9seWdvbihvcHRpb25zOiBQb2x5Z29uT3B0aW9ucyk6IFByb21pc2U8UG9seWdvbiB8IGFueT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlPFBvbHlnb24+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlnb24ob3B0aW9ucywgKHBvbHlnb246IGFueSkgPT4ge1xuICAgICAgICBpZiAocG9seWdvbikge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWdvbi5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgUG9seWdvbih0aGlzLCBwb2x5Z29uKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgcG9seWdvbi5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHBvbHlnb24gaW4gc3luY2hyb25vdXNcbiAgICogQHBhcmFtIG9wdGlvbnMge1BvbHlnb25PcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1BvbHlnb259XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFBvbHlnb25TeW5jKG9wdGlvbnM6IFBvbHlnb25PcHRpb25zKTogUG9seWdvbiB7XG4gICAgY29uc3QgcG9seWdvbjogYW55ID0gdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkUG9seWdvbihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlnb24uZ2V0SWQoKTtcbiAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlnb24odGhpcywgcG9seWdvbik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIHBvbHlnb24ub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvdmVybGF5O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5bGluZVxuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWxpbmVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8UG9seWxpbmU+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5bGluZShvcHRpb25zOiBQb2x5bGluZU9wdGlvbnMpOiBQcm9taXNlPFBvbHlsaW5lIHwgYW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8UG9seWxpbmU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLmFkZFBvbHlsaW5lKG9wdGlvbnMsIChwb2x5bGluZTogYW55KSA9PiB7XG4gICAgICAgIGlmIChwb2x5bGluZSkge1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gcG9seWxpbmUuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IFBvbHlsaW5lKHRoaXMsIHBvbHlsaW5lKTtcbiAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgICAgICAgcG9seWxpbmUub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBwb2x5bGluZSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7UG9seWxpbmVPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1BvbHlsaW5lfVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRQb2x5bGluZVN5bmMob3B0aW9uczogUG9seWxpbmVPcHRpb25zKTogUG9seWxpbmUge1xuICAgIGNvbnN0IHBvbHlsaW5lOiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRQb2x5bGluZShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHBvbHlsaW5lLmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBQb2x5bGluZSh0aGlzLCBwb2x5bGluZSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIHBvbHlsaW5lLm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgdGlsZSBvdmVybGF5XG4gICAqIEBwYXJhbSBvcHRpb25zIHtUaWxlT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7UHJvbWlzZTxUaWxlT3ZlcmxheT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZFRpbGVPdmVybGF5KG9wdGlvbnM6IFRpbGVPdmVybGF5T3B0aW9ucyk6IFByb21pc2U8VGlsZU92ZXJsYXkgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxUaWxlT3ZlcmxheT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkVGlsZU92ZXJsYXkob3B0aW9ucywgKHRpbGVPdmVybGF5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKHRpbGVPdmVybGF5KSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSB0aWxlT3ZlcmxheS5nZXRJZCgpO1xuICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgVGlsZU92ZXJsYXkodGhpcywgdGlsZU92ZXJsYXkpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICB0aWxlT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmVzb2x2ZShvdmVybGF5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHRpbGUgb3ZlcmxheSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7VGlsZU92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1RpbGVPdmVybGF5fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRUaWxlT3ZlcmxheVN5bmMob3B0aW9uczogVGlsZU92ZXJsYXlPcHRpb25zKTogVGlsZU92ZXJsYXkge1xuICAgIGNvbnN0IHRpbGVPdmVybGF5OiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRUaWxlT3ZlcmxheShvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IHRpbGVPdmVybGF5LmdldElkKCk7XG4gICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBUaWxlT3ZlcmxheSh0aGlzLCB0aWxlT3ZlcmxheSk7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIHRpbGVPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3ZlcmxheTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wdGlvbnMge0dyb3VuZE92ZXJsYXlPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8R3JvdW5kT3ZlcmxheT59XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZEdyb3VuZE92ZXJsYXkob3B0aW9uczogR3JvdW5kT3ZlcmxheU9wdGlvbnMpOiBQcm9taXNlPEdyb3VuZE92ZXJsYXkgfCBhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxHcm91bmRPdmVybGF5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRHcm91bmRPdmVybGF5KG9wdGlvbnMsIChncm91bmRPdmVybGF5OiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGdyb3VuZE92ZXJsYXkpIHtcbiAgICAgICAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGdyb3VuZE92ZXJsYXkuZ2V0SWQoKTtcbiAgICAgICAgICBjb25zdCBvdmVybGF5ID0gbmV3IEdyb3VuZE92ZXJsYXkodGhpcywgZ3JvdW5kT3ZlcmxheSk7XG4gICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgICAgICAgIGdyb3VuZE92ZXJsYXkub25lKG92ZXJsYXlJZCArICdfcmVtb3ZlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0KCdfb3ZlcmxheXMnKSkge1xuICAgICAgICAgICAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG51bGw7XG4gICAgICAgICAgICAgIG92ZXJsYXkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJlc29sdmUob3ZlcmxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBncm91bmQgb3ZlcmxheSBpbiBzeW5jaHJvbm91c1xuICAgKiBAcGFyYW0gb3B0aW9ucyB7R3JvdW5kT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAgICogQHJldHVybiB7R3JvdW5kT3ZlcmxheX1cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgYWRkR3JvdW5kT3ZlcmxheVN5bmMob3B0aW9uczogR3JvdW5kT3ZlcmxheU9wdGlvbnMpOiBHcm91bmRPdmVybGF5IHtcbiAgICBjb25zdCBncm91bmRPdmVybGF5OiBhbnkgPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5hZGRHcm91bmRPdmVybGF5KG9wdGlvbnMpO1xuICAgIGNvbnN0IG92ZXJsYXlJZDogc3RyaW5nID0gZ3JvdW5kT3ZlcmxheS5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgR3JvdW5kT3ZlcmxheSh0aGlzLCBncm91bmRPdmVybGF5KTtcbiAgICB0aGlzLmdldCgnX292ZXJsYXlzJylbb3ZlcmxheUlkXSA9IG92ZXJsYXk7XG4gICAgZ3JvdW5kT3ZlcmxheS5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGttbCBvdmVybGF5XG4gICAqIEBwYXJhbSBvcHRpb25zIHtLbWxPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlPEttbE92ZXJsYXk+fVxuICAgKi9cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBhZGRLbWxPdmVybGF5KG9wdGlvbnM6IEttbE92ZXJsYXlPcHRpb25zKTogUHJvbWlzZTxLbWxPdmVybGF5PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2U8S21sT3ZlcmxheT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UuYWRkS21sT3ZlcmxheShvcHRpb25zLCAoa21sT3ZlcmxheTogYW55KSA9PiB7XG4gICAgICAgIGlmIChrbWxPdmVybGF5KSB7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheUlkOiBzdHJpbmcgPSBrbWxPdmVybGF5LmdldElkKCk7XG4gICAgICAgICAgY29uc3Qgb3ZlcmxheSA9IG5ldyBLbWxPdmVybGF5KHRoaXMsIGttbE92ZXJsYXkpO1xuICAgICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gb3ZlcmxheTtcbiAgICAgICAgICBrbWxPdmVybGF5Lm9uZShvdmVybGF5SWQgKyAnX3JlbW92ZScsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldCgnX292ZXJsYXlzJykpIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBudWxsO1xuICAgICAgICAgICAgICBvdmVybGF5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXNvbHZlKG92ZXJsYXkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgZGlyZWN0aW9ucyByZW5kZXJlclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7RGlyZWN0aW9uc1JlbmRlcmVyT3B0aW9uc30gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtEaXJlY3Rpb25zUmVuZGVyZXJ9XG4gICAqL1xuICBASW5zdGFuY2VDaGVjaygpXG4gIGFkZERpcmVjdGlvbnNSZW5kZXJlclN5bmMob3B0aW9uczogYW55KTogRGlyZWN0aW9uc1JlbmRlcmVyIHtcbiAgICBjb25zdCBkaXJlY3Rpb25zUmVuZGVyZXI6IGFueSA9IHRoaXMuX29iamVjdEluc3RhbmNlLmFkZERpcmVjdGlvbnNSZW5kZXJlcihvcHRpb25zKTtcbiAgICBjb25zdCBvdmVybGF5SWQ6IHN0cmluZyA9IGRpcmVjdGlvbnNSZW5kZXJlci5nZXRJZCgpO1xuICAgIGNvbnN0IG92ZXJsYXkgPSBuZXcgRGlyZWN0aW9uc1JlbmRlcmVyKHRoaXMsIGRpcmVjdGlvbnNSZW5kZXJlcik7XG4gICAgdGhpcy5nZXQoJ19vdmVybGF5cycpW292ZXJsYXlJZF0gPSBvdmVybGF5O1xuICAgIGRpcmVjdGlvbnNSZW5kZXJlci5vbmUob3ZlcmxheUlkICsgJ19yZW1vdmUnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5nZXQoJ19vdmVybGF5cycpKSB7XG4gICAgICAgIHRoaXMuZ2V0KCdfb3ZlcmxheXMnKVtvdmVybGF5SWRdID0gbnVsbDtcbiAgICAgICAgb3ZlcmxheS5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG92ZXJsYXk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYmFzZTY0IGVuY29kZWQgc2NyZWVuIGNhcHR1cmUgb2YgdGhlIG1hcC5cbiAgICogQHBhcmFtIG9wdGlvbnMge1RvRGF0YVVybE9wdGlvbnN9IFtvcHRpb25zXSBvcHRpb25zXG4gICAqIEByZXR1cm4ge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICB0b0RhdGFVUkwob3B0aW9ucz86IFRvRGF0YVVybE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4geyByZXR1cm47IH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIEdyb3VuZE92ZXJsYXkgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBib3VuZHMgb2YgdGhlIEdyb3VuZE92ZXJsYXlcbiAgICogQHBhcmFtIGJvdW5kcyB7IElMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEJvdW5kcyhib3VuZHM6IElMYXRMbmdbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGJlYXJpbmcgb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSBiZWFyaW5nIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRCZWFyaW5nKGJlYXJpbmc6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgYmVhcmluZyB2YWx1ZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0QmVhcmluZygpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBpbWFnZSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIGltYWdlVXJsIHtzdHJpbmd9IFVSTCBvZiBpbWFnZVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SW1hZ2UoaW1hZ2VVcmw6IHN0cmluZyk6IHZvaWQge31cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgb3BhY2l0eSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXkgZnJvbSAwLjAgdG8gMS4wXG4gICAqIEBwYXJhbSBvcGFjaXR5IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRPcGFjaXR5KG9wYWNpdHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgb3BhY2l0eVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRPcGFjaXR5KCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgY2xpY2stYWJpbGl0eSBvZiB0aGUgZ3JvdW5kIG92ZXJsYXlcbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdyb3VuZCBvdmVybGF5IGlzIGNsaWNrYWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0Q2xpY2thYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBncm91bmQgb3ZlcmxheSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBncm91bmQgb3ZlcmxheSB6SW5kZXggb3JkZXJcbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZ3JvdW5kIG92ZXJsYXkgekluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIGdyb3VuZCBvdmVybGF5XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVtYXBzJyxcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZU1hcHMnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW4uZ29vZ2xlLm1hcHMuSHRtbEluZm9XaW5kb3cnLFxuICByZXBvOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBIdG1sSW5mb1dpbmRvdyBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIobmV3IChHb29nbGVNYXBzLmdldFBsdWdpbigpLkh0bWxJbmZvV2luZG93KSgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kQ29sb3JcbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2V0QmFja2dyb3VuZENvbG9yKGNvbG9yOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgeW91ciBIVE1MIGNvbnRlbnRzLlxuICAgKiBAcGFyYW0gY29udGVudCB7YW55fSBTdHJpbmcgY29udGFpbmluZyB0ZXh0IG9yIEhUTUwgZWxlbWVudFxuICAgKiBAcGFyYW0gY3NzT3B0aW9ucz8ge2FueX0gQ1NTIHN0eWxlcyBmb3IgdGhlIGNvbnRhaW5lciBlbGVtZW50IG9mIEhUTUxJbmZvV2luZG93XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgc2V0Q29udGVudChjb250ZW50OiBzdHJpbmcgfCBFbGVtZW50LCBjc3NPcHRpb25zPzogYW55KTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogT3BlbiB0aGUgaHRtbEluZm9XaW5kb3dcbiAgICogQHBhcmFtIG1hcmtlciB7TWFya2VyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIG9wZW4obWFya2VyOiBhbnkpOiBhbnkge1xuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlIHRoZSBodG1sSW5mb1dpbmRvd1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIGNsb3NlKCk6IHZvaWQge1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBNYXJrZXIgZXh0ZW5kcyBCYXNlQ2xhc3Mge1xuXG4gIHByaXZhdGUgX21hcDogR29vZ2xlTWFwO1xuXG4gIGNvbnN0cnVjdG9yKF9tYXA6IEdvb2dsZU1hcCwgX29iamVjdEluc3RhbmNlOiBhbnkpIHtcbiAgICBzdXBlcihfb2JqZWN0SW5zdGFuY2UpO1xuICAgIHRoaXMuX21hcCA9IF9tYXA7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgSUQgb2YgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1hcCBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7R29vZ2xlTWFwfVxuICAgKi9cbiAgZ2V0TWFwKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1hcmtlciBwb3NpdGlvbi5cbiAgICogQHBhcmFtIGxhdExuZyB7SUxhdExuZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBvc2l0aW9uKGxhdExuZzogSUxhdExuZyk6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXJrZXIgcG9zaXRpb24uXG4gICAqIEByZXR1cm4ge0lMYXRMbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRQb3NpdGlvbigpOiBJTGF0TG5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgbm9ybWFsIGluZm9XaW5kb3cgb2YgdGhlIG1hcmtlci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNob3dJbmZvV2luZG93KCk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIG5vcm1hbCBpbmZvV2luZG93IG9mIHRoZSBtYXJrZXIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBoaWRlSW5mb1dpbmRvdygpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGVjaWZ5IHRoZSBhbmltYXRpb24gZWl0aGVyIGBEUk9QYCBvciBgQk9VTkNFYFxuICAgKiBAcGFyYW0gYW5pbWF0aW9uIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRBbmltYXRpb24oYW5pbWF0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3UgKipkbyBub3Qgd2FudCoqIHRvIG1vdmUgdGhlIG1hcCB3aGVuIHlvdSBjbGljayBvbiB0aGUgbWFya2VyLlxuICAgKiBAcGFyYW0gZGlzYWJsZUF1dG9QYW4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXREaXNhYmxlQXV0b1BhbihkaXNhYmxlQXV0b1BhbjogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBmYWxzZSBpZiB5b3Ugd2FudCB0byBoaWRlIHRoZSBtYXJrZXIuXG4gICAqIEBwYXJhbSB2aXNpYmxlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1hcmtlciBpcyB2aXNpYmxlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpc1Zpc2libGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGl0bGUgb2YgdGhlIG5vcm1hbCBpbmZvV2luZG93LlxuICAgKiBAcGFyYW0gdGl0bGUge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB0aXRsZSBzdHJpbmdzLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRUaXRsZSgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHNuaXBwZXQgb2YgdGhlIG5vcm1hbCBpbmZvV2luZG93LlxuICAgKiBAcGFyYW0gc25pcHBldCB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U25pcHBldChzbmlwcGV0OiBzdHJpbmcpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBzbmlwcGV0IHN0cmluZ3MuXG4gICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFNuaXBwZXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgbWFya2VyIG9wYWNpdHkgZnJvbSAwLjAgdG8gMS4wLlxuICAgKiBAcGFyYW0gYWxwaGEge251bWJlcn0gT3BhY2l0eVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3BhY2l0eShhbHBoYTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFya2VyIG9wYWNpdHkuXG4gICAqIEByZXR1cm4ge251bWJlcn0gT3BhY2l0eVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0T3BhY2l0eSgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIG1hcmtlci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgZGVsZXRlIHRoaXMuX29iamVjdEluc3RhbmNlLmdldE1hcCgpLmdldCgnX292ZXJsYXlzJylbdGhpcy5nZXRJZCgpXTtcbiAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB0aGlzLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBpbmZvIHdpbmRvdyBhbmNob3IuIFRoaXMgZGVmYXVsdHMgdG8gNTAlIGZyb20gdGhlIGxlZnQgb2YgdGhlIGltYWdlIGFuZCBhdCB0aGUgYm90dG9tIG9mIHRoZSBpbWFnZS5cbiAgICogQHBhcmFtIHgge251bWJlcn0gRGlzdGFuY2UgZnJvbSBsZWZ0IG9mIHRoZSBpY29uIGltYWdlIGluIHBpeGVscy5cbiAgICogQHBhcmFtIHkge251bWJlcn0gRGlzdGFuY2UgZnJvbSB0b3Agb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0SWNvbkFuY2hvcih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIGluZm8gd2luZG93IGFuY2hvci4gVGhpcyBkZWZhdWx0cyB0byA1MCUgZnJvbSB0aGUgbGVmdCBvZiB0aGUgaW1hZ2UgYW5kIGF0IHRoZSB0b3Agb2YgdGhlIGltYWdlLlxuICAgKiBAcGFyYW0geCB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIGxlZnQgb2YgdGhlIGljb24gaW1hZ2UgaW4gcGl4ZWxzLlxuICAgKiBAcGFyYW0geSB7bnVtYmVyfSBEaXN0YW5jZSBmcm9tIHRvcCBvZiB0aGUgaWNvbiBpbWFnZSBpbiBwaXhlbHMuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRJbmZvV2luZG93QW5jaG9yKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBpbmZvV2luZG93IGlzIHNob3duIG9uIHRoZSBtYXJrZXJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGlzSW5mb1dpbmRvd1Nob3duKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWdoZXIgekluZGV4IHZhbHVlIG92ZXJsYXlzIHdpbGwgYmUgZHJhd24gb24gdG9wIG9mIGxvd2VyIHpJbmRleCB2YWx1ZSB0aWxlIGxheWVycyBhbmQgb3ZlcmxheXMuXG4gICAqIEBwYXJhbSB5IHtudW1iZXJ9IHotaW5kZXhcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFpJbmRleCh6SW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB6LWluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdHJ1ZSBpZiB5b3UgYWxsb3cgYWxsIHVzZXJzIHRvIGRyYWcgdGhlIG1hcmtlci5cbiAgICogQHBhcmFtIGRyYWdnYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldERyYWdnYWJsZShkcmFnZ2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG1hcmtlciBkcmFnIGlzIGVuYWJsZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBpc0RyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRydWUgaWYgeW91IHdhbnQgdG8gYmUgZmxhdCBtYXJrZXIuXG4gICAqIEBwYXJhbSBmbGF0IHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmxhdChmbGF0OiBib29sZWFuKTogdm9pZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgaWNvbiB1cmwgYW5kL29yIHNpemVcbiAgICogQHBhcmFtIGljb25cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEljb24oaWNvbjogTWFya2VySWNvbik6IHZvaWQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIG1hcmtlciByb3RhdGlvbiBhbmdsZS5cbiAgICogQHBhcmFtIHJvdGF0aW9uIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRSb3RhdGlvbihyb3RhdGlvbjogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFya2VyIHJvdGF0aW9uIGFuZ2xlLlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRSb3RhdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgTWFya2VyQ2x1c3RlciBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQWRkIG9uZSBtYXJrZXIgbG9jYXRpb25cbiAgICogQHBhcmFtIG1hcmtlciB7TWFya2VyT3B0aW9uc30gb25lIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBza2lwUmVkcmF3PyB7Ym9vbGVhbn0gbWFya2VyIGNsdXN0ZXIgZG9lcyBub3QgcmVkcmF3IHRoZSBtYXJrZXIgY2x1c3RlciBpZiB0cnVlLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgYWRkTWFya2VyKG1hcmtlcjogTWFya2VyT3B0aW9ucyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZCBtYXJrZXIgbG9jYXRpb25zXG4gICAqIEBwYXJhbSBtYXJrZXJzIHtNYXJrZXJPcHRpb25zW119IG11bHRpcGxlIGxvY2F0aW9uXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBhZGRNYXJrZXJzKG1hcmtlcnM6IE1hcmtlck9wdGlvbnNbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgbWFya2VyIGNsdXN0ZXJcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2Uuc2V0KCdfb3ZlcmxheXMnLCB1bmRlZmluZWQpO1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBQb2x5Z29uIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiBwb2ludHMuXG4gICAqIEBwYXJhbSBwb2ludHMge0lMYXRMbmdbXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFBvaW50cyhwb2ludHM6IElMYXRMbmdbXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIEJhc2VBcnJheUNsYXNzLlxuICAgKiBZb3UgY2FuIG1vZGlmeSB0aGUgcG9pbnRzLlxuICAgKiBAcmV0dXJuIHtCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICovXG4gIGdldFBvaW50cygpOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPiB7XG4gICAgcmV0dXJuIG5ldyBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPih0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRQb2ludHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWdvbiBob2xlcy5cbiAgICogQHBhcmFtIGhvbGVzIHtJTGF0TG5nW11bXX1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEhvbGVzKGhvbGVzOiBJTGF0TG5nW11bXSk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhlIEJhc2VBcnJheUNsYXNzLlxuICAgKiBZb3UgY2FuIG1vZGlmeSB0aGUgaG9sZXMuXG4gICAqIEByZXR1cm4ge0Jhc2VBcnJheUNsYXNzPElMYXRMbmdbXT59XG4gICAqL1xuICBnZXRIb2xlcygpOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+IHtcbiAgICBjb25zdCBob2xlczogSUxhdExuZ1tdW10gPSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRQb2ludHMoKTtcbiAgICBjb25zdCByZXN1bHRzOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nW10+ID0gbmV3IEJhc2VBcnJheUNsYXNzPElMYXRMbmdbXT4oKTtcbiAgICBob2xlcy5mb3JFYWNoKChob2xlOiBJTGF0TG5nW10pID0+IHtcbiAgICAgIHJlc3VsdHMucHVzaChob2xlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBmaWxsaW5nIGNvbG9yIChpbm5lciBjb2xvcilcbiAgICogQHBhcmFtIGZpbGxDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RmlsbENvbG9yKGZpbGxDb2xvcjogc3RyaW5nKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5Z29uIGZpbGxpbmcgY29sb3IgKGlubmVyIGNvbG9yKS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RmlsbENvbG9yKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHN0cm9rZSBjb2xvciAob3V0ZXIgY29sb3IpXG4gICAqIEBwYXJhbSBzdHJva2VDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWdvbiBzdHJva2UgY29sb3IgKG91dGVyIGNvbG9yKVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRTdHJva2VDb2xvcigpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIHBvbHlnb25cbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlnb24gaXMgY2xpY2thYmxlXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdmlzaWJpbGl0eSBvZiB0aGUgcG9seWdvblxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWdvbiBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHRoZSBwb2x5Z29uIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIHpJbmRleCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0WkluZGV4KHpJbmRleDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBwb2x5Z29uIHpJbmRleFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBwb2x5Z29uLlxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlnb24gc3Ryb2tlIHdpZHRoXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRTdHJva2VXaWR0aChzdHJva2VXaWR0aDogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcG9seWdvbiBzdHJva2Ugd2lkdGhcbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgZWRnZXMgb2YgdGhlIHBvbHlnb24gYXJlIGludGVycHJldGVkIGFzIGdlb2Rlc2ljIGFuZCB3aWxsIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mIHRoZSBFYXJ0aC5cbiAgICogQHBhcmFtIGdlb2Rlc2ljIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0R2VvZGVzaWMoZ2VvZGVzaWM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlnb24gaXMgZ2VvZGVzaWMuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRHZW9kZXNpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIFBvbHlsaW5lIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBtYXAgaW5zdGFuY2UuXG4gICAqIEByZXR1cm4ge0dvb2dsZU1hcH1cbiAgICovXG4gIGdldE1hcCgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9tYXA7XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgcG9pbnRzLlxuICAgKiBAcGFyYW0gcG9pbnRzIHtJTGF0TG5nW119XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRQb2ludHMocG9pbnRzOiBJTGF0TG5nW10pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoZSBCYXNlQXJyYXlDbGFzc1xuICAgKiBZb3UgY2FuIG1vZGlmeSB0aGUgcG9pbnRzLlxuICAgKiBAcmV0dXJuIHtCYXNlQXJyYXlDbGFzczxJTGF0TG5nPn1cbiAgICovXG4gIGdldFBvaW50cygpOiBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPiB7XG4gICAgcmV0dXJuIG5ldyBCYXNlQXJyYXlDbGFzczxJTGF0TG5nPih0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRQb2ludHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBlZGdlcyBvZiB0aGUgcG9seWxpbmUgYXJlIGludGVycHJldGVkIGFzIGdlb2Rlc2ljIGFuZCB3aWxsIGZvbGxvdyB0aGUgY3VydmF0dXJlIG9mIHRoZSBFYXJ0aC5cbiAgICogQHBhcmFtIGdlb0Rlc2ljIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0R2VvRGVzaWMoZ2VvRGVzaWM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHBvbHlsaW5lIGlzIGdlb2Rlc2ljXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRHZW9kZXNpYygpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB2aXNpYmlsaXR5IG9mIHRoZSBwb2x5bGluZVxuICAgKiBAcGFyYW0gdmlzaWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldFZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWxpbmUgaXMgdmlzaWJsZVxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyBjbGljay1hYmlsaXR5IG9mIHRoZSBwb2x5bGluZVxuICAgKiBAcGFyYW0gY2xpY2thYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0Q2xpY2thYmxlKGNsaWNrYWJsZTogYm9vbGVhbik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcG9seWxpbmUgaXMgY2xpY2thYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRDbGlja2FibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIGNvbG9yXG4gICAqIEBwYXJhbSBzdHJva2VDb2xvciB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlQ29sb3Ioc3Ryb2tlQ29sb3I6IHN0cmluZyk6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWxpbmUgY29sb3JcbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0U3Ryb2tlQ29sb3IoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlcyB0aGUgcG9seWxpbmUgc3Ryb2tlIHdpZHRoXG4gICAqIEBwYXJhbSBzdHJva2VXaWR0aCB7bnVtYmVyfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0U3Ryb2tlV2lkdGgoc3Ryb2tlV2lkdGg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgc3Ryb2tlIHdpZHRoICh1bml0OiBwaXhlbCkuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZXMgdGhlIHBvbHlsaW5lIHpJbmRleCBvcmRlci5cbiAgICogQHBhcmFtIGluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcG9seWxpbmUgekluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFpJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHBvbHlsaW5lXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBUaWxlT3ZlcmxheSBleHRlbmRzIEJhc2VDbGFzcyB7XG5cbiAgcHJpdmF0ZSBfbWFwOiBHb29nbGVNYXA7XG5cbiAgY29uc3RydWN0b3IoX21hcDogR29vZ2xlTWFwLCBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xuICAgIHN1cGVyKF9vYmplY3RJbnN0YW5jZSk7XG4gICAgdGhpcy5fbWFwID0gX21hcDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBJRCBvZiBpbnN0YW5jZS5cbiAgICogQHJldHVybiB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5fbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCB3aGV0aGVyIHRoZSB0aWxlcyBzaG91bGQgZmFkZSBpbi5cbiAgICogQHBhcmFtIGZhZGVJbiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldEZhZGVJbihmYWRlSW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgd2hldGhlciB0aGUgdGlsZXMgc2hvdWxkIGZhZGUgaW5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldEZhZGVJbigpOiBib29sZWFuIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSB6SW5kZXggb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcGFyYW0gekluZGV4IHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRaSW5kZXgoekluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB6SW5kZXggb2YgdGhlIHRpbGUgb3ZlcmxheVxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRaSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBvcGFjaXR5IG9mIHRoZSB0aWxlIG92ZXJsYXlcbiAgICogQHBhcmFtIG9wYWNpdHkge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldE9wYWNpdHkob3BhY2l0eTogbnVtYmVyKTogdm9pZCB7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb3BhY2l0eSBvZiB0aGUgdGlsZSBvdmVybGF5XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldE9wYWNpdHkoKTogbnVtYmVyIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2V0IGZhbHNlIGlmIHlvdSB3YW50IHRvIGhpZGVcbiAgICogQHBhcmFtIHZpc2libGUge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBzZXRWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHRpbGUgb3ZlcmxheSBpcyB2aXNpYmxlXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGlsZSBzaXplXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRUaWxlU2l6ZSgpOiBhbnkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHRpbGUgb3ZlcmxheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBLbWxPdmVybGF5IGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsICdjYW1lcmEnLCB7XG4gICAgICAgIHZhbHVlOiB0aGlzLl9vYmplY3RJbnN0YW5jZS5jYW1lcmEsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAna21sRGF0YScsIHtcbiAgICAgICAgdmFsdWU6IHRoaXMuX29iamVjdEluc3RhbmNlLmttbERhdGEsXG4gICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpZXdwb3J0IHRvIGNvbnRhaW5zIGFsbCBvdmVybGF5c1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgZ2V0RGVmYXVsdFZpZXdwb3J0KCk6IENhbWVyYVBvc2l0aW9uPElMYXRMbmcgfCBJTGF0TG5nW10+IHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogR29vZ2xlTWFwIHsgcmV0dXJuIHRoaXMuX21hcDsgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIHZpc2liaWxpdHkgb2YgdGhlIGttbCBvdmVybGF5XG4gICAqIEBwYXJhbSB2aXNpYmxlIHtib29sZWFufVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuKTogdm9pZCB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGttbCBvdmVybGF5IGlzIHZpc2libGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldFZpc2libGUoKTogYm9vbGVhbiB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBDaGFuZ2VzIGNsaWNrLWFiaWxpdHkgb2YgdGhlIEttbE92ZXJsYXlcbiAgICogQHBhcmFtIGNsaWNrYWJsZSB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIHNldENsaWNrYWJsZShjbGlja2FibGU6IGJvb2xlYW4pOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgS21sT3ZlcmxheSBpcyBjbGlja2FibGVcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXG4gIGdldENsaWNrYWJsZSgpOiBib29sZWFuIHsgcmV0dXJuOyB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgS21sT3ZlcmxheVxuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSgpXG4gIHJlbW92ZSgpOiB2b2lkIHtcbiAgICBkZWxldGUgdGhpcy5fb2JqZWN0SW5zdGFuY2UuZ2V0TWFwKCkuZ2V0KCdfb3ZlcmxheXMnKVt0aGlzLmdldElkKCldO1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnJlbW92ZSgpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgRGlyZWN0aW9uc1JlbmRlcmVyIGV4dGVuZHMgQmFzZUNsYXNzIHtcblxuICBwcml2YXRlIF9tYXA6IEdvb2dsZU1hcDtcblxuICBjb25zdHJ1Y3RvcihfbWFwOiBHb29nbGVNYXAsIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XG4gICAgc3VwZXIoX29iamVjdEluc3RhbmNlKTtcbiAgICB0aGlzLl9tYXAgPSBfbWFwO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIElEIG9mIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRJZCgpOiBzdHJpbmcgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbWFwIGluc3RhbmNlLlxuICAgKiBAcmV0dXJuIHtHb29nbGVNYXB9XG4gICAqL1xuICBnZXRNYXAoKTogR29vZ2xlTWFwIHsgcmV0dXJuIHRoaXMuX21hcDsgfVxuXG4gIC8qKlxuICAgKiBTZXQgb3B0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0T3B0aW9ucyhvcHRpb25zOiBEaXJlY3Rpb25zUmVuZGVyZXJPcHRpb25zKTogUHJvbWlzZTx2b2lkPiB7fVxuXG4gIC8qKlxuICAgKiBTZXQgZGlyZWN0aW9uc1xuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKi9cbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcbiAgc2V0RGlyZWN0aW9ucyhyZXN1bHQ6IERpcmVjdGlvbnNSZXN1bHQpOiBQcm9taXNlPHZvaWQ+IHt9XG5cblxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50ICh6ZXJvLWJhc2VkKSByb3V0ZSBpbmRleCBpbiB1c2UgYnkgdGhpcyBEaXJlY3Rpb25zUmVuZGVyZXIgb2JqZWN0LlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXRSb3V0ZUluZGV4KCk6IG51bWJlciB7IHJldHVybjsgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZW5kZXJlcidzIGN1cnJlbnQgc2V0IG9mIGRpcmVjdGlvbnMuXG4gICAqIEByZXR1cm4ge0RpcmVjdGlvbnNSZXN1bHR9XG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxuICBnZXREaXJlY3Rpb25zKCk6IERpcmVjdGlvbnNSZXN1bHQgeyByZXR1cm47IH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBkaXJlY3Rpb25zIHJlbmRlcmVyXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IHZvaWQge1xuICAgIGRlbGV0ZSB0aGlzLl9vYmplY3RJbnN0YW5jZS5nZXRNYXAoKS5nZXQoJ19vdmVybGF5cycpW3RoaXMuZ2V0SWQoKV07XG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UucmVtb3ZlKCk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gIH1cbn1cbiJdfQ==
