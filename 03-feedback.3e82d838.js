function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},r=t.parcelRequire7baa;null==r&&((r=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return a[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire7baa=r);var l=r("kEUo3");const n=document.querySelector('input[name="email"]'),s=document.querySelector('textarea[name="message"]'),i=document.querySelector(".feedback-form");""===localStorage["feedback-form-state-email"]||void 0===localStorage["feedback-form-state-email"]?n.removeAttribute("value"):n.setAttribute("value",localStorage["feedback-form-state-email"]),""!==localStorage["feedback-form-state-message"]&&(s.textContent=localStorage["feedback-form-state-message"]),n.addEventListener("input",e(l).throttle((e=>{localStorage.setItem("feedback-form-state-email",e.target.value.trim())}),500)),s.addEventListener("input",e(l).throttle((e=>{localStorage.setItem("feedback-form-state-message",e.target.value.trim())}),500)),i.addEventListener("submit",(()=>{console.log(`Email: ${localStorage.getItem("feedback-form-state-email")}, Message: ${localStorage.getItem("feedback-form-state-message")}`),localStorage.clear()}));
//# sourceMappingURL=03-feedback.3e82d838.js.map
