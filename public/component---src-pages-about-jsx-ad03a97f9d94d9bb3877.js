webpackJsonp([0x83323ebd9d39f800],{"./src/components/About/About.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),u=o(l),i=n("./node_modules/react-md/lib/Cards/Card.js"),c=o(i),f=n("./node_modules/react-md/lib/Cards/CardText.js"),d=o(f),p=n("./src/components/UserLinks/UserLinks.jsx"),m=o(p),b=n("./data/SiteConfig.js"),h=o(b);n("./src/components/About/About.scss");var y=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"about-container md-grid mobile-fix"},u.default.createElement(c.default,{className:"md-grid md-cell--8"},u.default.createElement("div",{className:"about-wrapper"},u.default.createElement("img",{src:h.default.userAvatar,className:"about-img",alt:h.default.userName}),u.default.createElement(d.default,null,u.default.createElement("p",{className:"about-text md-body-1"},h.default.userDescription)),u.default.createElement(m.default,{labeled:!0,config:h.default}))))},t}(l.Component);t.default=y,e.exports=t.default},"./src/components/About/About.scss":function(e,t){},"./src/components/UserLinks/UserLinks.jsx":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),u=o(l),i=n("./node_modules/react-md/lib/Buttons/index.js"),c=o(i);n("./src/components/UserLinks/UserLinks.scss");var f=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.getLinkElements=function(){var e=this.props.config.userLinks,t=this.props.labeled;return e.map(function(e){return u.default.createElement(c.default,{icon:!t,flat:t,secondary:!0,key:e.label,iconClassName:e.iconClassName,href:e.url},t?e.label:"")})},t.prototype.render=function(){var e=this.props.config.userLinks;return e?u.default.createElement("div",{className:"user-links"},this.getLinkElements()):null},t}(l.Component);t.default=f,e.exports=t.default},"./src/components/UserLinks/UserLinks.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/juice/Desktop/mccarthy.vision/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/juice/Desktop/mccarthy.vision/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/juice/Desktop/mccarthy.vision/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/juice/Desktop/mccarthy.vision/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/juice/Desktop/mccarthy.vision/node_modules/babel-preset-stage-0/lib/index.js","/home/juice/Desktop/mccarthy.vision/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/about.jsx':function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n("./node_modules/react/react.js"),u=o(l),i=n("./node_modules/react-helmet/lib/Helmet.js"),c=o(i),f=n("./src/components/About/About.jsx"),d=o(f),p=n("./data/SiteConfig.js"),m=o(p),b=function(e){function t(){return r(this,t),s(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"about-container"},u.default.createElement(c.default,null,u.default.createElement("title",null,"About | "+m.default.siteTitle),u.default.createElement("link",{rel:"canonical",href:m.default.siteUrl+"/about/"})),u.default.createElement(d.default,null))},t}(l.Component);t.default=b,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-about-jsx-ad03a97f9d94d9bb3877.js.map