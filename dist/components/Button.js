"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styled = _interopRequireDefault(require("@emotion/styled"));
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
const Button = _styled.default.button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  padding: 32px;\n  font-size: 24px;\n  margin: 5px;\n  border-radius: 4px;\n  font-weight: bold;\n  &:hover {\n    color: white;\n  }\n  background-color: ", ";\n"])), props => props.primary ? "hotpink" : "turquoise");
const ButtonComp = props => {
  return /*#__PURE__*/React.createElement(Button, {
    primary: props.isPrimary
  }, "This is ", props.isPrimary ? "primary" : "secondary", " button");
};
var _default = ButtonComp;
exports.default = _default;