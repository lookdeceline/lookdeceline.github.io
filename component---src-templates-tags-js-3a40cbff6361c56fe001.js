(self.webpackChunklookdeceline=self.webpackChunklookdeceline||[]).push([[942],{8020:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(7294);a(1883),a(6162);var l=e=>n.createElement("div",{className:"pagesTitle-module--containerContainer--a1899"},n.createElement("div",{className:"pagesTitle-module--container--f09cc"},n.createElement("h1",{className:"pagesTitle-module--h1--d11e2"},e.title),n.createElement("h2",{className:"pagesTitle-module--h2--ad05c"},e.titleIntro)))},8454:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(7294),l=(a(1883),a(1838));var r=e=>n.createElement("div",{className:"smallTagBox-module--tag--7d214",style:{backgroundColor:(0,l.getColor)(e.tag)}},e.tag)},8511:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),r=(a(6162),a(8454));a(2107),a(100),a(7255),a(3077);var o=e=>{let{node:t}=e;return n.createElement(l.Link,{to:"/blog/"+t.frontmatter.path,key:t.id,className:"smallThumbnailPost-module--cardItem--b8c87"},n.createElement("div",{className:"smallThumbnailPost-module--cardWrapper--fcb12"},n.createElement("div",{className:"smallThumbnailPost-module--cardContent--009f1"},n.createElement("div",{className:"smallThumbnailPost-module--smallTagsContainer--483bf"},t.frontmatter.tags?t.frontmatter.tags.map(((e,t)=>n.createElement(r.Z,{tag:e}))):null),n.createElement("div",{className:"smallThumbnailPost-module--cardContentTitle--5af8e"},t.frontmatter.title),n.createElement("div",{className:"smallThumbnailPost-module--cardContentIntro--bad5a"},t.frontmatter.intro))))}},9014:function(e,t,a){"use strict";a.d(t,{Z:function(){return r}});var n=a(7294),l=a(1883);a(1838);var r=e=>{let{tag:t,isSelected:a}=e;const r=a?"#2C82D2":null,o=a?"600":null;return n.createElement(l.Link,{to:"/tags/"+t.fieldValue,className:"tagTile-module--pillbox--1227e"},n.createElement("span",{className:"tagTile-module--tag--78eb9",style:{color:r,fontWeight:o}},t.fieldValue))}},5905:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var n=a(7294),l=a(1883),r=a(9014),o=a(5918);function s(e){let{selectedTag:t}=e;let a=(0,l.useStaticQuery)("168701078").allMarkdownRemark.group;return n.createElement("div",{className:o.iC},n.createElement("div",{className:o.D4},a.map((e=>n.createElement(r.Z,{tag:e,isSelected:e.fieldValue===t})))),n.createElement("div",{className:o.R}))}},1838:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g},getColor:function(){return C}});var n=a(7294),l=a(8183),r=a(1681),o=a(9134),s=(a(4628),a(8678),"blog-post-styles-module--article--28a9b"),c="blog-post-styles-module--h1--1961f",i="blog-post-styles-module--h2--c0783",u="blog-post-styles-module--tag--4193b",m="blog-post-styles-module--tags--27ada",d="blog-post-styles-module--titleBackground--a69bb",f="blog-post-styles-module--titleContent--e3b5f";function C(e){switch(e){case"SwiftUI":return"#def0fd";case"Programming":return"#e9e0ff";case"Swift":return"#FFE4BE";default:return"#414A56"}}function g(e){let{data:t}=e;const a=t.markdownRemark;return console.log(a),n.createElement("div",null,n.createElement(r.Z,null),n.createElement(l.Z,{title:a.frontmatter.title}),n.createElement("div",{className:d},n.createElement("div",{className:f},n.createElement("div",{className:m},a.frontmatter.tags.map(((e,t)=>n.createElement("div",{className:u,style:{backgroundColor:C(e)}},e+(t!==a.frontmatter.tags.length-1?",":""))))),n.createElement("h1",{className:c},a.frontmatter.title),n.createElement("h2",{className:i},a.frontmatter.intro))),n.createElement("div",{className:s,dangerouslySetInnerHTML:{__html:a.html}}),n.createElement(o.Z,null))}},6602:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),l=(a(1883),a(6162),a(8678),a(1681)),r=a(9134),o=a(8183),s=(a(8020),a(8511)),c=(a(9014),a(5905)),i=a(5918);function u(e){let{pageContext:t,data:a}=e;const{tag:u}=t,{edges:m,totalCount:d}=a.allMarkdownRemark;return n.createElement("div",null,n.createElement(l.Z,null),n.createElement(o.Z,{title:"Tags"}),n.createElement("div",{className:i.postsSectionBackground},n.createElement("div",{className:i.nh},n.createElement(c.Z,{selectedTag:u}),m.map((e=>{let{node:t}=e;return n.createElement(s.Z,{node:t})})))),n.createElement(r.Z,null))}},5918:function(e,t,a){"use strict";a.d(t,{D4:function(){return o},R:function(){return l},iC:function(){return n},nh:function(){return r},qO:function(){return s}});var n="index-module--barContainer--55695",l="index-module--bottomBorder--f595a",r="index-module--pageContainer--6203c",o="index-module--pillboxContainer--644be",s="index-module--projectsPageCardsContainer--44b7c"},3077:function(e,t,a){var n=a(7294);function l(e){return n.createElement("svg",e,n.createElement("path",{d:"M47.9746 42.7461C47.9746 42.1276 47.8525 41.5498 47.6084 41.0127C47.3643 40.4756 47.0143 39.9791 46.5586 39.5234L7.8867 1.63278C7.00777 0.786449 5.93354 0.363281 4.664 0.363281C3.8502 0.363281 3.1015 0.558588 2.4179 0.949188C1.7343 1.33985 1.1972 1.86882 0.806602 2.53609C0.416002 3.20342 0.220703 3.96025 0.220703 4.80659C0.220703 6.01105 0.643869 7.06902 1.4902 7.98048L37.0371 42.7461L1.4902 77.5117C0.643869 78.4232 0.220703 79.4811 0.220703 80.6855C0.220703 81.5319 0.416002 82.2887 0.806602 82.956C1.1972 83.6234 1.7343 84.1523 2.4179 84.543C3.1015 84.9336 3.8502 85.1289 4.664 85.1289C5.93354 85.1289 7.00777 84.6894 7.8867 83.8105L46.5586 45.9688C47.0143 45.5131 47.3643 45.0166 47.6084 44.4795C47.8525 43.9424 47.9746 43.3646 47.9746 42.7461Z"}))}l.defaultProps={width:"48",height:"86",viewBox:"0 0 48 86",fill:"none"},e.exports=l,l.default=l},2107:function(e,t,a){var n=a(7294);function l(e){return n.createElement("svg",e,n.createElement("path",{d:"M58.1972 51.7442C58.1972 51.1583 58.0996 50.6456 57.9043 50.2061C57.709 49.7666 57.3997 49.3516 56.9765 48.961L6.43943 1.50008C5.72329 0.783884 4.84439 0.425781 3.80272 0.425781C3.11912 0.425781 2.50063 0.58042 1.94723 0.889687C1.39389 1.19895 0.954459 1.63025 0.628925 2.18359C0.303392 2.73699 0.140625 3.35549 0.140625 4.03909C0.140625 5.01569 0.482425 5.86205 1.16603 6.57819L49.2617 51.7442L1.16603 96.8614C0.482425 97.5775 0.140625 98.4238 0.140625 99.4004C0.140625 100.117 0.303392 100.751 0.628925 101.305C0.954459 101.858 1.39389 102.289 1.94723 102.599C2.50063 102.908 3.11912 103.063 3.80272 103.063C4.84439 103.063 5.72329 102.704 6.43943 101.988L56.9765 54.5274C57.3997 54.1368 57.709 53.7136 57.9043 53.2579C58.0996 52.8022 58.1972 52.2976 58.1972 51.7442Z"}))}l.defaultProps={width:"59",height:"104",viewBox:"0 0 59 104",fill:"none"},e.exports=l,l.default=l},7255:function(e,t,a){var n=a(7294);function l(e){return n.createElement("svg",e,n.createElement("path",{d:"M8.5259 79.3184L52.2759 87.0332C60.2837 88.4492 65.0689 83.957 65.0689 75.168V27.9512C65.0689 19.6992 60.8696 16.8672 52.813 15.5L10.479 8.0293C4.5708 6.9551 0.615723 10.373 0.615723 16.2812V70.2363C0.615723 75.3633 3.3013 78.3906 8.5259 79.3184ZM10.2349 72.3848C8.5259 72.043 7.647 71.0664 7.647 69.2109V17.4531C7.647 15.6953 8.8677 14.7676 10.772 15.1094L52.4712 22.4336C56.0845 23.0684 58.0376 24.4844 58.0376 27.9023V74.3379C58.0376 78.3906 55.7427 80.4414 51.9341 79.7578L10.2349 72.3848ZM54.6196 20.627H61.6509V11.7891C61.6509 3.34181 56.0356 -0.710891 46.563 0.998009L6.5728 8.0293L9.2583 14.084L49.0532 7.54101C52.5689 7.00391 54.6196 8.46881 54.6196 11.4961V20.627ZM17.2173 31.9551L45.9282 37.0332C47.8813 37.3262 49.1509 36.1055 49.1509 34.2988C49.1509 32.6387 48.3696 31.8086 46.856 31.5156L18.3892 26.5352C16.436 26.1934 15.02 27.3164 15.02 29.123C15.02 30.6367 15.8013 31.7109 17.2173 31.9551ZM17.2173 47.043L45.9282 52.1211C47.8813 52.4141 49.1509 51.1934 49.1509 49.3867C49.1509 47.7266 48.3696 46.8965 46.856 46.6035L18.3892 41.623C16.436 41.2812 15.02 42.4043 15.02 44.2109C15.02 45.7246 15.8013 46.7988 17.2173 47.043Z",style:{fillOpacity:"1"}}))}l.defaultProps={width:"66",height:"88",viewBox:"0 0 66 88",fill:"none"},e.exports=l,l.default=l},100:function(e,t,a){var n=a(7294);function l(e){return n.createElement("svg",e,n.createElement("path",{d:"M33 1L43 11M43 11L33 21M43 11H0",strokeWidth:"2"}))}l.defaultProps={width:"45",height:"22",viewBox:"0 0 45 22"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-templates-tags-js-3a40cbff6361c56fe001.js.map