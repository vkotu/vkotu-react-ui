"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Badge = _styled.default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 5px;\n  border-radius: 4px;\n  color: black;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n  margin: 5px;\n  background-color: ", ";\n"])), props => props.type === "success" ? "lightgreen" : "lightcoral");
const BadgeComp = props => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Badge, {
    type: props.type
  }, props.children));
};
var _default = BadgeComp;
exports.default = _default;