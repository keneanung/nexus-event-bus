"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[103],{4924:function(e,a,t){t.d(a,{Z:function(){return v}});var l=t(7294),r=t(6010),n=t(3905),i=t(5999),s=t(9960),m=t(5749),o=t(7314),c=t(1217),d=t(6753),g="blogPostTitle_rzP5",u="blogPostData_Zg1s",p="blogPostDetailsFull_h6_j";var v=function(e){var a,t,v,b=(t=(0,m.c2)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),E=e.children,h=e.frontMatter,_=e.metadata,N=e.truncated,f=e.isBlogPostPage,k=void 0!==f&&f,Z=_.date,w=_.formattedDate,I=_.permalink,T=_.tags,P=_.readingTime,L=_.title,x=_.editUrl,M=h.author,R=h.image,A=h.keywords,y=h.author_url||h.authorURL,C=h.author_title||h.authorTitle,F=h.author_image_url||h.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:A,image:R}),l.createElement("article",{className:k?void 0:"margin-bottom--xl"},(v=k?"h1":"h2",l.createElement("header",null,l.createElement(v,{className:g},k?L:l.createElement(s.Z,{to:I},L)),l.createElement("div",{className:(0,r.Z)(u,"margin-vert--md")},l.createElement("time",{dateTime:Z},w),P&&l.createElement(l.Fragment,null," \xb7 ",b(P))),l.createElement("div",{className:"avatar margin-vert--md"},F&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:y},l.createElement("img",{src:F,alt:M})),l.createElement("div",{className:"avatar__intro"},M&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:y},M)),l.createElement("small",{className:"avatar__subtitle"},C)))))),l.createElement("div",{className:"markdown"},l.createElement(n.Zo,{components:o.Z},E)),(T.length>0||N)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",(a={},a[p]=k,a))},T.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),T.map((function(e){var a=e.label,t=e.permalink;return l.createElement(s.Z,{key:t,className:"margin-horiz--sm",to:t},a)}))),k&&x&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:x})),!k&&N&&l.createElement("div",{className:"col text--right"},l.createElement(s.Z,{to:_.permalink,"aria-label":"Read more about "+L},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},9360:function(e,a,t){t.r(a),t.d(a,{default:function(){return g}});var l=t(7294),r=t(5663),n=t(4924),i=t(5999),s=t(9960);var m=function(e){var a=e.nextItem,t=e.prevItem;return l.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s.Z,{className:"pagination-nav__link",to:t.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),l.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.createElement(s.Z,{className:"pagination-nav__link",to:a.permalink},l.createElement("div",{className:"pagination-nav__sublabel"},l.createElement(i.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),l.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},o=t(439),c=t(3920),d=t(5749);var g=function(e){var a=e.content,t=e.sidebar,i=a.frontMatter,s=a.metadata,g=s.title,u=s.description,p=s.nextItem,v=s.prevItem,b=i.hide_table_of_contents;return l.createElement(r.Z,{title:g,description:u,wrapperClassName:d.kM.wrapper.blogPages,pageClassName:d.kM.page.blogPostPage},a&&l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("aside",{className:"col col--3"},l.createElement(o.Z,{sidebar:t})),l.createElement("main",{className:"col col--7"},l.createElement(n.Z,{frontMatter:i,metadata:s,isBlogPostPage:!0},l.createElement(a,null)),(p||v)&&l.createElement(m,{nextItem:p,prevItem:v})),!b&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(c.Z,{toc:a.toc})))))}},439:function(e,a,t){t.d(a,{Z:function(){return u}});var l=t(7294),r=t(6010),n=t(9960),i="sidebar_a9qW",s="sidebarItemTitle_uKok",m="sidebarItemList_Kvuv",o="sidebarItem_CF0Q",c="sidebarItemLink_miNk",d="sidebarItemLinkActive_RRTD",g=t(5999);function u(e){var a=e.sidebar;return 0===a.items.length?null:l.createElement("nav",{className:(0,r.Z)(i,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(s,"margin-bottom--md")},a.title),l.createElement("ul",{className:m},a.items.map((function(e){return l.createElement("li",{key:e.permalink,className:o},l.createElement(n.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:d},e.title))}))))}}}]);