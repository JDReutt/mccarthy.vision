webpackJsonp([0xa6cd3c51205b1000],{"./node_modules/react-md/lib/Media/index.js":function(e,t,o){var n,r,a;!function(s,i){r=[t,o("./node_modules/react-md/lib/Media/Media.js"),o("./node_modules/react-md/lib/Media/MediaOverlay.js")],n=i,a="function"==typeof n?n.apply(t,r):n,!(void 0!==a&&(e.exports=a))}(this,function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0}),e.MediaOverlay=e.Media=void 0;var r=n(t),a=n(o);e.default=r.default,e.Media=r.default,e.MediaOverlay=a.default})},"./src/components/PostListing/PostListing.jsx":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),l=n(i),d=o("./src/components/PostPreview/PostPreview.jsx"),u=n(d),c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.frontmatter.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},t.prototype.render=function(){var e=this.getPostList();return l.default.createElement("div",{className:"md-grid md-grid--no-spacing md-cell--middle"},l.default.createElement("div",{className:"md-grid md-cell--8 mobile-fix"},e.map(function(e){return l.default.createElement(u.default,{key:e.title,postInfo:e})})))},t}(l.default.Component);t.default=c,e.exports=t.default},"./src/components/PostPreview/PostPreview.jsx":function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=o("./node_modules/react/react.js"),l=n(i),d=o("./node_modules/react-md/lib/Cards/Card.js"),u=n(d),c=o("./node_modules/react-md/lib/Cards/CardTitle.js"),f=n(c),p=o("./node_modules/react-md/lib/Buttons/index.js"),m=n(p),b=o("./node_modules/react-md/lib/Avatars/index.js"),h=n(b),y=o("./node_modules/react-md/lib/Cards/CardText.js"),g=n(y),v=o("./node_modules/react-md/lib/FontIcons/index.js"),j=n(v),_=o("./node_modules/gatsby-link/index.js"),w=n(_),x=o("./node_modules/react-md/lib/Media/index.js"),E=n(x),P=o("./src/components/PostTags/PostTags.jsx"),M=n(P);o("./src/components/PostPreview/PostPreview.scss");var O=function(e){function t(o){r(this,t);var n=a(this,e.call(this,o));return n.state={mobile:!0},n.handleResize=n.handleResize.bind(n),n}return s(t,e),t.prototype.componentDidMount=function(){this.handleResize(),window.addEventListener("resize",this.handleResize)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize)},t.prototype.handleResize=function(){window.innerWidth>=640?this.setState({mobile:!1}):this.setState({mobile:!0})},t.prototype.render=function(){var e=this.props.postInfo,t=this.state.mobile,o=t,n=e.cover.startsWith("/")?""+e.cover:e.cover,r=t?162:225;return l.default.createElement(u.default,{key:e.path,raise:!0,className:"md-grid md-cell md-cell--12"},l.default.createElement(w.default,{style:{textDecoration:"none"},to:e.path},l.default.createElement(E.default,{style:{backgroundImage:"url("+n+")",height:r+"px"},className:"post-preview-cover"},l.default.createElement(x.MediaOverlay,null,l.default.createElement(f.default,{title:e.title},l.default.createElement(m.default,{raised:!0,secondary:!0,className:"md-cell--right"},"Read"))))),l.default.createElement(f.default,{expander:o,avatar:l.default.createElement(h.default,{icon:l.default.createElement(j.default,{iconClassName:"fa fa-calendar"})}),title:"Published on "+e.date,subtitle:e.timeToRead+" min read"}),l.default.createElement(g.default,{expandable:o},e.excerpt,l.default.createElement(M.default,{tags:e.tags})))},t}(i.Component);t.default=O,e.exports=t.default},"./src/components/PostPreview/PostPreview.scss":function(e,t){},'./node_modules/babel-loader/lib/index.js?{"plugins":["/home/juice/Desktop/mccarthyvision.github.io/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/home/juice/Desktop/mccarthyvision.github.io/node_modules/babel-plugin-add-module-exports/lib/index.js","/home/juice/Desktop/mccarthyvision.github.io/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/home/juice/Desktop/mccarthyvision.github.io/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/home/juice/Desktop/mccarthyvision.github.io/node_modules/babel-preset-stage-0/lib/index.js","/home/juice/Desktop/mccarthyvision.github.io/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/templates/tag.jsx':function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=o("./node_modules/react/react.js"),l=n(i),d=o("./node_modules/react-helmet/lib/Helmet.js"),u=n(d),c=o("./src/components/PostListing/PostListing.jsx"),f=n(c),p=o("./data/SiteConfig.js"),m=n(p),b=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(){var e=this.props.pathContext.tag,t=this.props.data.allMarkdownRemark.edges;return l.default.createElement("div",{className:"tag-container"},l.default.createElement(u.default,null,l.default.createElement("title",null,'Posts tagged as "'+e+'" | '+m.default.siteTitle),l.default.createElement("link",{rel:"canonical",href:m.default.siteUrl+"/tags/"+e})),l.default.createElement(f.default,{postEdges:t}))},t}(l.default.Component);t.default=b;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-jsx-7756e42550eef05d06ca.js.map