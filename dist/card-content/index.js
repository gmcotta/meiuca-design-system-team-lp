"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CardContent = void 0;

var _react = _interopRequireDefault(require("react"));

require("@gmcotta/design-system-core/dist/components/card");

require("@gmcotta/design-system-core/dist/components/tag");

require("@gmcotta/design-system-core/dist/components/heading");

require("@gmcotta/design-system-core/dist/components/paragraph");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var styles = ".card-content::part(card) {\n  padding: var(--spacing-inset-size-md);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  cursor: pointer;\n}\n.card-content dsc-tag {\n  margin-bottom: auto;\n}\n.card-content dsc-heading {\n  margin-bottom: var(--spacing-size-xxxs);\n}\n.card-content dsc-heading::part(typography) {\n  font-weight: var(--font-weight-bold);\n}\n.card-content dsc-paragraph::part(typography) {\n  line-height: var(--line-height-lg);\n}";
  var fileName = "index_styles";
  var element = document.querySelector("style[data-sass-component='index_styles']");

  if (!element) {
    var styleBlock = document.createElement("style");
    styleBlock.innerHTML = styles;
    styleBlock.setAttribute("data-sass-component", fileName);
    document.head.appendChild(styleBlock);
  } else {
    element.innerHTML = styles;
  }
})();

var CardContent = function CardContent(_ref) {
  var tagContent = _ref.tagContent,
      headingContent = _ref.headingContent,
      paragraphContent = _ref.paragraphContent;
  return /*#__PURE__*/_react.default.createElement("dsc-card", {
    class: "card-content"
  }, /*#__PURE__*/_react.default.createElement("dsc-tag", null, tagContent), /*#__PURE__*/_react.default.createElement("dsc-heading", {
    level: "h3",
    size: "lg"
  }, headingContent), /*#__PURE__*/_react.default.createElement("dsc-paragraph", null, paragraphContent));
};

exports.CardContent = CardContent;