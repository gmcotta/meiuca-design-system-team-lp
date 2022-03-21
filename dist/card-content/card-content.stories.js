"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CardContent = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Landing Page/Card Content',
  component: _.CardContent
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      width: '320px',
      height: '420px'
    }
  }, /*#__PURE__*/_react.default.createElement(_.CardContent, args));
};

var CardContent = Template.bind({});
exports.CardContent = CardContent;
CardContent.args = {
  tagContent: 'Tag Highlight',
  headingContent: 'Heading',
  paragraphContent: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente iusto asperiores ullam molestiae dolore, distinctio laborum minus minima eius nihil nesciunt odit quisquam ratione! Dignissimos exercitationem alias tempora. Quibusdam, temporibus?'
};