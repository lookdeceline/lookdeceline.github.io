(self.webpackChunklookdeceline=self.webpackChunklookdeceline||[]).push([[853],{4662:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var a=n(7294),l=(n(1883),n(6162),n(7309)),r=n.n(l),o=n(8257),c=n.n(o);var m=e=>{let t="icon-note-module--iconSmall--dd69e",n="icon-note-module--textSmall--19ae6";"medium"===e.size&&(t="icon-note-module--iconMedium--cfdcd",n="icon-note-module--textMedium--35585");let l=a.createElement(r(),{className:t});return"research"===e.type&&(l=a.createElement(c(),{className:t})),a.createElement("div",{className:"icon-note-module--container--1a290"},a.createElement("div",{className:n},"# ",e.text))}},8020:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(7294);n(1883),n(6162);var l=e=>a.createElement("div",{className:"pagesTitle-module--containerContainer--a1899"},a.createElement("div",{className:"pagesTitle-module--container--f09cc"},a.createElement("h1",{className:"pagesTitle-module--h1--d11e2"},e.title),a.createElement("h2",{className:"pagesTitle-module--h2--ad05c"},e.titleIntro)))},8454:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var a=n(7294),l=(n(1883),n(1838));var r=e=>a.createElement("div",{className:"smallTagBox-module--tag--7d214",style:{backgroundColor:(0,l.getColor)(e.tag)}},e.tag)},5921:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),l=n(1883),r=n(6162),o=n(8678),c=n(8183),m=n(8020),s=(n(8454),n(4662));var i=e=>{let{node:t}=e;return a.createElement(l.Link,{to:"/projects/"+t.frontmatter.path,style:{flexGrow:1,flexBasis:"50%"}},a.createElement("div",{key:t.id,className:"bigThumbnailPost-module--cardItem--01fe9",style:{backgroundColor:t.frontmatter.backgroundColor}},a.createElement("div",{className:"bigThumbnailPost-module--imageContainer--18815"},a.createElement(r.Z,{className:"bigThumbnailPost-module--image--13b4f",fluid:t.frontmatter.featuredImage.childImageSharp.fluid})),a.createElement("div",{className:"bigThumbnailPost-module--cardContent--6c3c9"},a.createElement("div",{className:"bigThumbnailPost-module--cardContentTitle--c8ad8"},t.frontmatter.title),a.createElement("div",{className:"bigThumbnailPost-module--cardContentIntro--49344"},t.frontmatter.intro),a.createElement(s.Z,{type:t.frontmatter.type,text:t.frontmatter.text,size:"small"}))))};var u=n(5918);function d(e){let{data:t}=e;return a.createElement(o.Z,null,a.createElement(c.Z,{title:"Projects"}),a.createElement(m.Z,{title:"Projects",titleIntro:"These are my selected projects. Personal projects, term projects, etc."}),a.createElement("div",{className:u.qO},t.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return a.createElement(i,{node:t})}))))}},1838:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E},getColor:function(){return g}});var a=n(7294),l=n(8183),r=n(1681),o=n(9134),c=(n(4628),n(8678),"blog-post-styles-module--article--28a9b"),m="blog-post-styles-module--h1--1961f",s="blog-post-styles-module--h2--c0783",i="blog-post-styles-module--h5--7345e",u="blog-post-styles-module--tag--4193b",d="blog-post-styles-module--tags--27ada",C="blog-post-styles-module--titleBackground--a69bb",f="blog-post-styles-module--titleContent--e3b5f";function g(e){switch(e){case"SwiftUI":return"#def0fd";case"Programming":return"#e9e0ff";case"Swift":return"#FFE4BE";default:return"#414A56"}}function E(e){let{data:t}=e;const n=t.markdownRemark;return a.createElement("div",null,a.createElement(r.Z,null),a.createElement(l.Z,{description:n.frontmatter.intro,title:n.frontmatter.title}),a.createElement("div",{className:C},a.createElement("div",{className:f},a.createElement("div",{className:d},n.frontmatter.tags.map(((e,t)=>a.createElement("div",{className:u,style:{backgroundColor:g(e)}},e+(t!==n.frontmatter.tags.length-1?",":""))))),a.createElement("h1",{className:m},n.frontmatter.title),a.createElement("h2",{className:s},n.frontmatter.intro),a.createElement("h5",{className:i},n.frontmatter.date))),a.createElement("div",{className:c,dangerouslySetInnerHTML:{__html:n.html}}),a.createElement(o.Z,null))}},5918:function(e,t,n){"use strict";n.d(t,{D4:function(){return o},R:function(){return l},iC:function(){return a},nh:function(){return r},qO:function(){return c}});var a="index-module--barContainer--55695",l="index-module--bottomBorder--f595a",r="index-module--pageContainer--6203c",o="index-module--pillboxContainer--644be",c="index-module--projectsPageCardsContainer--44b7c"},7309:function(e,t,n){var a=n(7294);function l(e){return a.createElement("svg",e,a.createElement("path",{d:"M6.4935 15.247C7.49784 16.251 8.50217 16.251 9.50649 15.247L10.4762 14.2776C10.5455 14.2084 10.5974 14.1911 10.684 14.1911H12.0606C13.4805 14.1911 14.1905 13.4727 14.1905 12.0619V10.6858C14.1905 10.5992 14.2164 10.5386 14.2771 10.478L15.2468 9.50869C16.2511 8.50469 16.2511 7.50071 15.2468 6.49672L14.2771 5.52734C14.2078 5.4581 14.1905 5.40619 14.1905 5.31963V3.94347C14.1905 2.52404 13.4719 1.81432 12.0606 1.81432H10.684C10.5974 1.81432 10.5368 1.78835 10.4762 1.72777L9.50649 0.758407C8.4935 -0.254239 7.49784 -0.25424 6.4935 0.767057L5.52381 1.72777C5.46321 1.78835 5.4026 1.81432 5.31602 1.81432H3.93939C2.51948 1.81432 1.80952 2.51539 1.80952 3.94347V5.31963C1.80952 5.40619 1.78354 5.46677 1.72294 5.52734L0.753249 6.49672C-0.251083 7.50071 -0.251083 8.50469 0.753249 9.50869L1.72294 10.478C1.78354 10.5386 1.80952 10.5992 1.80952 10.6858V12.0619C1.80952 13.4814 2.52815 14.1911 3.93939 14.1911H5.31602C5.4026 14.1911 5.45455 14.2084 5.52381 14.2776L6.4935 15.247ZM6.9264 11.5859C6.62338 11.5859 6.31168 11.482 6.07793 11.2224L4.09523 8.99803C3.93939 8.82494 3.85282 8.5826 3.85282 8.36622C3.85282 7.78633 4.25974 7.37087 4.83983 7.37087C5.16017 7.37087 5.41125 7.49205 5.60173 7.70842L6.90909 9.17979L9.70563 5.05997C9.92208 4.76571 10.1905 4.62722 10.5368 4.62722C11.1429 4.62722 11.5671 5.0167 11.5671 5.57063C11.5671 5.75238 11.4892 5.99473 11.342 6.19379L7.82685 11.1531C7.5671 11.4907 7.27273 11.5859 6.9264 11.5859Z",fill:"#0B70CA"}))}l.defaultProps={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none"},e.exports=l,l.default=l},8257:function(e,t,n){var a=n(7294);function l(e){return a.createElement("svg",e,a.createElement("path",{d:"M2.12913 12.1197H5.6231C5.13858 11.5942 4.83149 10.8982 4.79055 10.1407H2.44305C2.10184 10.1407 1.97901 9.99055 1.97901 9.67664V2.44305C1.97901 2.12914 2.10184 1.97901 2.44305 1.97901H7.6021C7.94331 1.97901 8.06614 2.12914 8.06614 2.44305V6.85827C8.82362 6.8924 9.51969 7.19948 10.0451 7.68399V2.12914C10.0451 0.791606 9.25355 0 7.916 0H2.12913C0.791603 0 0 0.791606 0 2.12914V9.99056C0 11.3281 0.791603 12.1197 2.12913 12.1197ZM3.4189 4.13544H6.63308C6.85145 4.13544 7.01522 3.96484 7.01522 3.74646C7.01522 3.53491 6.85145 3.37113 6.63308 3.37113H3.4189C3.1937 3.37113 3.02992 3.53491 3.02992 3.74646C3.02992 3.96484 3.1937 4.13544 3.4189 4.13544ZM3.4189 5.77323H6.63308C6.85145 5.77323 7.01522 5.60262 7.01522 5.38425C7.01522 5.17271 6.85145 5.00893 6.63308 5.00893H3.4189C3.1937 5.00893 3.02992 5.17271 3.02992 5.38425C3.02992 5.60262 3.1937 5.77323 3.4189 5.77323ZM7.92966 12.1197C8.23675 12.1197 8.53019 12.0514 8.79633 11.9354L9.66298 12.7953C9.80629 12.9318 9.99055 13 10.1816 13C10.5842 13 10.8913 12.6929 10.8913 12.2835C10.8913 12.0992 10.8367 11.9218 10.6866 11.7717L9.84042 10.9255C9.9769 10.6457 10.052 10.3318 10.052 9.99738C10.052 8.8441 9.1034 7.88189 7.92966 7.88189C6.77638 7.88189 5.81417 8.8441 5.81417 9.99738C5.81417 11.1643 6.77638 12.1197 7.92966 12.1197ZM7.92966 11.0756C7.33596 11.0756 6.85145 10.6047 6.85145 9.99738C6.85145 9.40368 7.33596 8.92598 7.92966 8.92598C8.53018 8.92598 9.00788 9.40368 9.00788 9.99738C9.00788 10.6047 8.53018 11.0756 7.92966 11.0756Z",fill:"#0B70CA"}))}l.defaultProps={width:"11",height:"13",viewBox:"0 0 11 13",fill:"none"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-pages-projects-js-2bce4e83e03041c7834f.js.map