"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
function urlSearchParamsFactory(queryUrl) {
    var urlSearchParams = new URLSearchParams(queryUrl);
    return {
        urlSearchParams: urlSearchParams,
        /**
         * @description                       [add single param to url search params]
         *
         * @param   {string}        key       [the key of the param to add]
         * @param   {string}        value     [the value the param to add]
         *
         * @return  {string}                  [Url search params string modified]
         *
         * @example
         *  const { addParam } = urlSearchParamsFactory('?key1=value1')
         *  const urlSearchParamsWithAddedParam = addParam({ key:"key2", value:"value2"})
         *
         *  console.log(urlSearchParamsWithAddedParam) => "key1=value1&key2=value2"
         *
         */
        addParam: function (_a) {
            var key = _a.key, value = _a.value;
            urlSearchParams.append(key, value);
            return urlSearchParams.toString();
        },
        /**
         * @description                          [add param list to url search params]
         *
         * @param   {string}         key         [the key of the param to add]
         * @param   {string}         value       [the value the param to add]
         *
         * @return  {string}                     [Url search params string modified]
         *
         * @example
         *  const { addParamList } = urlSearchParamsFactory('?key1=value1')
         *  const urlSearchParamsWithAddedParamList = addParamList([{ key:"key2", value:"value2"},{ key:"key3", value:"value3"}])
         *
         *  console.log(urlSearchParamsWithAddedParamList) => "key1=value1&key2=value2&key3=value3"
         */
        addParamList: function (paramsList) {
            paramsList.forEach(function (_a) {
                var key = _a.key, value = _a.value;
                urlSearchParams.append(key, value);
            });
            return urlSearchParams.toString();
        },
        /**
         * @description           [remove specific param]
         *
         * @param   {string}  key  [param key wanted to remove]
         *
         * @return  {string}      [Url search params string modified]
         *
         * @example
         *  const { removeParam } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3&key4=value4')
         *  const urlSearchParamsWithRemovedParam = removeParam("key2")
         *
         *  console.log(urlSearchParamsWithRemovedParam) => "key1=value1&key3=value3&key4=value4"
         *
         */
        removeParam: function (key) {
            urlSearchParams.delete(key);
            return urlSearchParams.toString();
        },
        /**
         * @description                               [remove params list specified by an array of strings representing the key]
         *
         * @param   { key:string[] }    paramsList        [array of strings representing the keys wanted to remove]
         *
         * @return  {string}                        [Url search params string modified]
         *
         * @example
         *  const { removeParamList } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3&key4=value4')
         *  const urlSearchParamsWithRemovedParamList = removeParamList(["key2", "key3"])
         *
         *  console.log(urlSearchParamsWithRemovedParamList) => "key1=value1&key4=value4"
         */
        removeParamList: function (paramsList) {
            paramsList.forEach(function (key) {
                urlSearchParams.delete(key);
            });
            return urlSearchParams.toString();
        },
        /**
         * @description                                  [if param exists it replaces the param, if it does not exists it adds param]
         *
         * @param   {string}                      key    [param key wanted to to add or replace]
         * @param   {string}                      value  [param value wanted to to add or replace]
         *
         * @return  {string}                             [Url search params string modified]
         *
         * @example
         *  const { addOrReplaceParam } = urlSearchParamsFactory('?key1=value1&key2=value2')
         *  const urlSearchParamsWithAddedOrReplacedParam = addOrReplaceParam({key:"key2", value:"replacedValue2"})
         *
         *  console.log(urlSearchParamsWithAddedOrReplacedParam) => "key1=value1&key2=replacedValue2"
         */
        addOrReplaceParam: function (_a) {
            var key = _a.key, value = _a.value;
            urlSearchParams.set(key, value);
            return urlSearchParams.toString();
        },
        /**
         * @description                                                [if param exists it replaces the param, if it does not exists it adds param]
         *
         * @param   {{ key:string; value:string }[]}       paramsList  [paramsList description]
         *
         * @return  {string}                                           [Url search params string modified]
         *
         * @example
         *  const { addOrReplaceParamList } = urlSearchParamsFactory('?key1=value1&key2=value2')
         *  const urlSearchParamWithAddedAndReplacedParam = addOrReplaceParamList([{key:"key2", value:"replacedValue2"},{key:"key3", value:"addedValue3"}])
         *
         *  console.log(urlSearchParamWithAddedAndReplacedParam) => "key1=value1&key2=replacedValue2&key3=addedValue3"
         */
        addOrReplaceParamList: function (paramsList) {
            paramsList.forEach(function (_a) {
                var key = _a.key, value = _a.value;
                urlSearchParams.set(key, value);
            });
            return urlSearchParams.toString();
        },
        /**
         * @description            [get specific param on url search params]
         *
         * @param   {string}  key  [key of value wanted to get]
         *
         * @return  {string}       [Url search params string modified]
         *
         * @example
         *  const { getParam } = urlSearchParamsFactory('?key1=value1&key2=value2')
         *  const param = getParam("key2")
         *
         *  console.log(param) => "value2"
         *
         */
        getParam: function (key) {
            return urlSearchParams.get(key);
        },
        /**
         * @description                              [get param list on url search params]
         *
         * @param   {string[]}            keys       [Array of values wanted to get params]
         *
         * @return  {string}                          [object containing param values]
         * @example
         *  const { getParamList } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3')
         *  const params = getParamList(["key2","key3"])
         *
         *  console.log(params) => { key2:"value2", key3:"value3"};
         *
         */
        getParamList: function (keys) {
            return keys.reduce(function (acc, key) {
                var _a;
                return __assign(__assign({}, acc), (_a = {}, _a[key] = urlSearchParams.get(key), _a));
            }, {});
        },
        /**
         * @description                                                   [get all params on url search params]
         *
         *
         * @return  {Record<string, string>}                              [object containing all param values]
         *
         *  @example
         *  const { getAllParams } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3')
         *  const params = getAllParams()
         *
         *  console.log(params) => { key1:"value1", key2:"value2", key3:"value3" };
         */
        getAllParams: function () {
            var _a;
            var _b, _c, _d, _e;
            var entries = urlSearchParams.entries();
            var entriesValues = entries.next();
            var params = !entriesValues.done
                ? (_a = {},
                    _a[(_b = entriesValues === null || entriesValues === void 0 ? void 0 : entriesValues.value) === null || _b === void 0 ? void 0 : _b[0]] = (_c = entriesValues.value) === null || _c === void 0 ? void 0 : _c[1],
                    _a) : {};
            while (!entriesValues.done && entriesValues.value) {
                params[(_d = entriesValues === null || entriesValues === void 0 ? void 0 : entriesValues.value) === null || _d === void 0 ? void 0 : _d[0]] = (_e = entriesValues === null || entriesValues === void 0 ? void 0 : entriesValues.value) === null || _e === void 0 ? void 0 : _e[1];
                entriesValues = entries.next();
            }
            return params;
        },
        /**
         * @description        [get Url search params]
         *
         * @return  {string}  [url search params]
         *
         * @example
         *  const { getQueryParamUrl } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3')
         *  const queryParamUrl = getQueryParamUrl()
         *
         *  console.log(queryParamUrl) => "key1=value1&key2=value2&key3=value3";
         */
        getUrlSearchParams: function () {
            return urlSearchParams.toString();
        },
        /**
         * @description                          [compose can be used to execute more than one function and returns the result url search params modified]
         *
         * @param   {Array<Function>}  fns       [functions selected to compose and modify url search params]
         *
         * @return  {string}            [Url search params string modified]
         *
         * @example
         *  const { compose, addOrReplaceParamList, removeParamList } = urlSearchParamsFactory('?key1=value1&key2=value2&key3=value3&key5=value5')
         *  const modifiedUrlSearchParams = compose(
         *  () => addOrReplaceParamList([{key:"key1", value:"replacedValue1"},{key:"key4", value:"value4"}]),
         *  () => removeParamList(["key2", "key5"])
         * )
         *
         *  console.log(modifiedUrlSearchParams) => "?key1=replacedValue1&key3=value3&key4=value4"
         */
        compose: function () {
            var fns = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                fns[_i] = arguments[_i];
            }
            fns.forEach(function (fn) {
                fn();
            });
            return urlSearchParams.toString();
        },
    };
}
exports.default = urlSearchParamsFactory;
