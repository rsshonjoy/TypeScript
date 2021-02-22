"use strict";
var ResponsesType;
(function (ResponsesType) {
    ResponsesType[ResponsesType["SUCCESS"] = 0] = "SUCCESS";
    ResponsesType[ResponsesType["FAILURE"] = 1] = "FAILURE";
    ResponsesType[ResponsesType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponsesType[ResponsesType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(ResponsesType || (ResponsesType = {}));
;
const response = {
    status: 200,
    type: ResponsesType.SUCCESS,
    data: 'test'
};
console.log(response);
