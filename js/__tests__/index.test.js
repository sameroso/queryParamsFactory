"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __importDefault(require("../index"));
describe("Testing queryParamsFactory functionalities", function () {
    test("add param", function () {
        var addParam = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2").addParam;
        var urlSearchParamsWithAddedParam = addParam({
            key: "testKey3",
            value: "addedValue3",
        });
        expect(urlSearchParamsWithAddedParam).toBe("testKey1=testValue1&testKey2=testValue2&testKey3=addedValue3");
    });
    test("add param List", function () {
        var addParamList = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2").addParamList;
        var urlSearchParamsWithAddedParamList = addParamList([
            {
                key: "testKey3",
                value: "addedValue3",
            },
            {
                key: "testKey4",
                value: "addedValue4",
            },
        ]);
        expect(urlSearchParamsWithAddedParamList).toBe("testKey1=testValue1&testKey2=testValue2&testKey3=addedValue3&testKey4=addedValue4");
    });
    test("remove param", function () {
        var removeParam = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2&testKey3=testValue3").removeParam;
        var urlSearchParamsWithRemovedParams = removeParam("testKey2");
        expect(urlSearchParamsWithRemovedParams).toBe("testKey1=testValue1&testKey3=testValue3");
    });
    test("remove param List", function () {
        var removeParamList = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2&testKey3=testValue3&testKey4=testValue4").removeParamList;
        var urlSearchParamsWithRemovedParamList = removeParamList([
            "testKey2",
            "testKey3",
        ]);
        expect(urlSearchParamsWithRemovedParamList).toBe("testKey1=testValue1&testKey4=testValue4");
    });
    test("addOrReplaceParam adds param when there is no param in the url", function () {
        var addOrReplaceParam = (0, index_1.default)("?testKey1=testValue1").addOrReplaceParam;
        var urlSearchParamsWithParamAdded = addOrReplaceParam({
            key: "testKey2",
            value: "testValue2&",
        });
        expect(urlSearchParamsWithParamAdded).toBe("testKey1=testValue1&testKey2=testValue2%26");
    });
    test("addOrReplaceParam replace param when there is an existing param in the Url", function () {
        var addOrReplaceParam = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2").addOrReplaceParam;
        var urlSearchParamsWithReplacedParam = addOrReplaceParam({
            key: "testKey1",
            value: "replacedValue1+",
        });
        expect(urlSearchParamsWithReplacedParam).toBe("testKey1=replacedValue1%2B&testKey2=testValue2");
    });
    test("add or replace param list when there is existing params in the Url", function () {
        var addOrReplaceParamList = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2").addOrReplaceParamList;
        var urlSearchParamsWithReplacedParamList = addOrReplaceParamList([
            {
                key: "testKey1",
                value: "replacedValue1",
            },
            {
                key: "testKey2",
                value: "replacedValue2",
            },
        ]);
        expect(urlSearchParamsWithReplacedParamList).toBe("testKey1=replacedValue1&testKey2=replacedValue2");
    });
    test("add or replace param list when there is existing \n  params in the Url and add more params when it does not exist", function () {
        var queryParamUrlWithReplacedParamList = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2").addOrReplaceParamList([
            {
                key: "testKey1",
                value: "replacedValue1",
            },
            {
                key: "testKey2",
                value: "replacedValue2",
            },
            {
                key: "testKey3",
                value: "addedValue3",
            },
            {
                key: "testKey4",
                value: "addedValue4",
            },
        ]);
        expect(queryParamUrlWithReplacedParamList).toBe("testKey1=replacedValue1&testKey2=replacedValue2&testKey3=addedValue3&testKey4=addedValue4");
    });
    test("get param", function () {
        var param = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2%26&testKey3=testValue3").getParam("testKey2");
        expect(param).toBe("testValue2&");
    });
    test("get param list", function () {
        var paramList = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2%26&testKey3=testValue3").getParamList(["testKey2", "testKey3"]);
        expect(paramList).toEqual({
            testKey2: "testValue2&",
            testKey3: "testValue3",
        });
    });
    test("get param list with empty string returns null on param keys", function () {
        var paramList = (0, index_1.default)("").getParamList(["testKey2", "testKey3"]);
        expect(paramList).toEqual({
            testKey2: null,
            testKey3: null,
        });
    });
    test("get all params", function () {
        var paramList = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2%26&testKey3=testValue3").getAllParams();
        console.log(paramList.testKey1);
        expect(paramList).toEqual({
            testKey1: "testValue1",
            testKey2: "testValue2&",
            testKey3: "testValue3",
        });
    });
    test("get all params with empty string return empty object", function () {
        var paramList = (0, index_1.default)("").getAllParams();
        expect(paramList).toEqual({});
    });
    test("get Query param Url", function () {
        var queryParamsUrl = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2%26&testKey3=testValue3").getUrlSearchParams();
        expect(queryParamsUrl).toEqual("testKey1=testValue1&testKey2=testValue2%26&testKey3=testValue3");
    });
    test("compose", function () {
        var _a = (0, index_1.default)("?testKey1=testValue1&testKey2=testValue2%26&testKey3=testValue3"), compose = _a.compose, addOrReplaceParamList = _a.addOrReplaceParamList, removeParam = _a.removeParam, addParamList = _a.addParamList;
        var newQueryParamUrl = compose(function () {
            return addOrReplaceParamList([{ key: "testKey1", value: "replacedValue1" }]);
        }, function () { return removeParam("testKey3"); }, function () { return addParamList([{ key: "testValue4", value: "addedValue4" }]); });
        expect(newQueryParamUrl).toEqual("testKey1=replacedValue1&testKey2=testValue2%26&testValue4=addedValue4");
    });
});
