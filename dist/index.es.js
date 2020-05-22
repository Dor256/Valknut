function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

import React from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

___$insertStyle("button.val {\n  display: inline-block;\n  background-color: #bfbfbf;\n  min-width: 120px;\n  min-height: 45px;\n  border: none;\n  border-radius: 100px;\n  color: #6b6b6b;\n  text-transform: uppercase;\n  font-weight: 700;\n  cursor: pointer;\n  font-size: 12px;\n}\nbutton.val:focus {\n  outline: none;\n}\nbutton.val:hover {\n  background-color: #b0b0b0;\n}\nbutton.val:active {\n  background-color: #9e9e9e;\n}\nbutton.val.basic.blue {\n  background-color: transparent;\n  border: 1px solid #438abf;\n  color: #438abf;\n}\nbutton.val.basic.blue:hover {\n  background-color: transparent;\n  border: 1px solid #3978a8;\n  color: #3978a8;\n}\nbutton.val.basic.blue:active {\n  background-color: transparent;\n  border: 1px solid #316b97;\n  color: #316b97;\n}\nbutton.val.basic.green {\n  background-color: transparent;\n  border: 1px solid #339c38;\n  color: #339c38;\n}\nbutton.val.basic.green:hover {\n  background-color: transparent;\n  border: 1px solid #309135;\n  color: #309135;\n}\nbutton.val.basic.green:active {\n  background-color: transparent;\n  border: 1px solid #2b822f;\n  color: #2b822f;\n}\nbutton.val.basic.yellow {\n  background-color: transparent;\n  border: 1px solid #fbbd08;\n  color: #fbbd08;\n}\nbutton.val.basic.yellow:hover {\n  background-color: transparent;\n  border: 1px solid #eeb50b;\n  color: #eeb50b;\n}\nbutton.val.basic.yellow:active {\n  background-color: transparent;\n  border: 1px solid #dda90d;\n  color: #dda90d;\n}\nbutton.val.basic.red {\n  background-color: transparent;\n  border: 1px solid #cf2929;\n  color: #cf2929;\n}\nbutton.val.basic.red:hover {\n  background-color: transparent;\n  border: 1px solid #c02525;\n  color: #c02525;\n}\nbutton.val.basic.red:active {\n  background-color: transparent;\n  border: 1px solid #ad2020;\n  color: #ad2020;\n}\nbutton.val.basic.black {\n  background-color: transparent;\n  border: 1px solid black;\n  color: black;\n}\nbutton.val.basic.black:hover {\n  background-color: transparent;\n  border: 1px solid #141414;\n  color: #141414;\n}\nbutton.val.basic.black:active {\n  background-color: transparent;\n  border: 1px solid #242424;\n  color: #242424;\n}\nbutton.val.basic.purple {\n  background-color: transparent;\n  border: 1px solid #8722ba;\n  color: #8722ba;\n}\nbutton.val.basic.purple:hover {\n  background-color: transparent;\n  border: 1px solid #7a1ea8;\n  color: #7a1ea8;\n}\nbutton.val.basic.purple:active {\n  background-color: transparent;\n  border: 1px solid #6d1b96;\n  color: #6d1b96;\n}\nbutton.val.basic.violet {\n  background-color: transparent;\n  border: 1px solid #7b5f96;\n  color: #7b5f96;\n}\nbutton.val.basic.violet:hover {\n  background-color: transparent;\n  border: 1px solid #6d5485;\n  color: #6d5485;\n}\nbutton.val.basic.violet:active {\n  background-color: transparent;\n  border: 1px solid #634d78;\n  color: #634d78;\n}\nbutton.val.basic.teal {\n  background-color: transparent;\n  border: 1px solid #67b5a8;\n  color: #67b5a8;\n}\nbutton.val.basic.teal:hover {\n  background-color: transparent;\n  border: 1px solid #5ca195;\n  color: #5ca195;\n}\nbutton.val.basic.teal:active {\n  background-color: transparent;\n  border: 1px solid #57998e;\n  color: #57998e;\n}\nbutton.val.basic.orange {\n  background-color: transparent;\n  border: 1px solid #d48919;\n  color: #d48919;\n}\nbutton.val.basic.orange:hover {\n  background-color: transparent;\n  border: 1px solid #cc8416;\n  color: #cc8416;\n}\nbutton.val.basic.orange:active {\n  background-color: transparent;\n  border: 1px solid #c27e15;\n  color: #c27e15;\n}\nbutton.val.basic.brown {\n  background-color: transparent;\n  border: 1px solid #915411;\n  color: #915411;\n}\nbutton.val.basic.brown:hover {\n  background-color: transparent;\n  border: 1px solid #8c510f;\n  color: #8c510f;\n}\nbutton.val.basic.brown:active {\n  background-color: transparent;\n  border: 1px solid #80490d;\n  color: #80490d;\n}\nbutton.val.blue {\n  background-color: #438abf;\n  color: white;\n}\nbutton.val.blue:hover {\n  background-color: #3978a8;\n}\nbutton.val.blue:active {\n  background-color: #316b97;\n}\nbutton.val.green {\n  background-color: #339c38;\n  color: white;\n}\nbutton.val.green:hover {\n  background-color: #309135;\n}\nbutton.val.green:active {\n  background-color: #2b822f;\n}\nbutton.val.yellow {\n  background-color: #fbbd08;\n  color: white;\n}\nbutton.val.yellow:hover {\n  background-color: #eeb50b;\n}\nbutton.val.yellow:active {\n  background-color: #dda90d;\n}\nbutton.val.red {\n  background-color: #cf2929;\n  color: white;\n}\nbutton.val.red:hover {\n  background-color: #c02525;\n}\nbutton.val.red:active {\n  background-color: #ad2020;\n}\nbutton.val.black {\n  background-color: black;\n  color: white;\n}\nbutton.val.black:hover {\n  background-color: #141414;\n}\nbutton.val.black:active {\n  background-color: #242424;\n}\nbutton.val.purple {\n  background-color: #8722ba;\n  color: white;\n}\nbutton.val.purple:hover {\n  background-color: #7a1ea8;\n}\nbutton.val.purple:active {\n  background-color: #6d1b96;\n}\nbutton.val.violet {\n  background-color: #7b5f96;\n  color: white;\n}\nbutton.val.violet:hover {\n  background-color: #6d5485;\n}\nbutton.val.violet:active {\n  background-color: #634d78;\n}\nbutton.val.teal {\n  background-color: #67b5a8;\n  color: white;\n}\nbutton.val.teal:hover {\n  background-color: #5ca195;\n}\nbutton.val.teal:active {\n  background-color: #57998e;\n}\nbutton.val.orange {\n  background-color: #d48919;\n  color: white;\n}\nbutton.val.orange:hover {\n  background-color: #cc8416;\n}\nbutton.val.orange:active {\n  background-color: #c27e15;\n}\nbutton.val.brown {\n  background-color: #915411;\n  color: white;\n}\nbutton.val.brown:hover {\n  background-color: #8c510f;\n}\nbutton.val.brown:active {\n  background-color: #80490d;\n}");

var Button = function (props) {
    var children = props.children, className = props.className, color = props.color, basic = props.basic, buttonProps = __rest(props, ["children", "className", "color", "basic"]);
    var cssClass = "" + (basic ? ' basic' : '') + (color ? " " + color + " " : '') + (className ? "" + className : '');
    return React.createElement("button", __assign({}, buttonProps, { className: "val" + cssClass }), children);
};

___$insertStyle("div.val {\n  max-width: 1000px;\n  margin: 0 auto;\n}\ndiv.val.flex {\n  display: flex;\n  flex-wrap: wrap;\n}");

var Container = function (props) {
    var flex = props.flex, children = props.children, className = props.className, divProps = __rest(props, ["flex", "children", "className"]);
    var cssClass = "" + (flex ? ' flex ' : '') + (className ? "" + className : '');
    return (React.createElement("div", __assign({}, divProps, { className: "val" + cssClass }), children));
};

___$insertStyle("nav.val {\n  position: fixed;\n  display: flex;\n  padding: 0 10px;\n  align-items: center;\n  top: 0;\n  left: 0;\n  height: 50px;\n  width: 100%;\n  background-color: #6e4c9b;\n  box-shadow: -1px -12px 10px 10px black;\n  color: white;\n}");

var Navbar = function (props) {
    var children = props.children, className = props.className, divProps = __rest(props, ["children", "className"]);
    var cssClass = "" + (className ? "" + className : '');
    return (React.createElement("nav", __assign({}, divProps, { className: "val" + cssClass }), children));
};

export { Button, Container, Navbar };
//# sourceMappingURL=index.es.js.map
