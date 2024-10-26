"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3106],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=u(r),p=a,h=d["".concat(s,".").concat(p)]||d[p]||m[p]||o;return r?n.createElement(h,i(i({ref:e},c),{},{components:r})):n.createElement(h,i({ref:e},c))}));function h(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6634:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={},i="Using Git in a Team Project",l={unversionedId:"tech/info/git",id:"tech/info/git",title:"Using Git in a Team Project",description:"Introduction",source:"@site/docs/tech/info/git.md",sourceDirName:"tech/info",slug:"/tech/info/git",permalink:"/tech/info/git",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Databases",permalink:"/tech/info/databases"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Git Basics",id:"git-basics",level:2},{value:"Git Commands",id:"git-commands",level:2}],c={toc:u},d="wrapper";function m(t){let{components:e,...o}=t;return(0,a.kt)(d,(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"using-git-in-a-team-project"},"Using Git in a Team Project"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Git is a version control system that allows you to track changes to your code over time. It is a powerful tool that allows you to collaborate with others on a project, and is a standard tool in the software development industry."),(0,a.kt)("p",null,"This is not a comprehensive guide to Git, but rather a quick introduction to the most common commands you will use when working on a team project. "),(0,a.kt)("p",null,"Feel free to use this as a reference, but you will likely need to do additional research to learn more about Git."),(0,a.kt)("h2",{id:"git-basics"},"Git Basics"),(0,a.kt)("p",null,"The basic workflow of Git can be summed up in the following graphic:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Git Workflow",src:r(3771).Z,width:"880",height:"625"})),(0,a.kt)("h2",{id:"git-commands"},"Git Commands"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git init")),(0,a.kt)("td",{parentName:"tr",align:null},"Initializes a new Git repository in the current directory. You shouldn't need to do this for HCP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git clone <url>")),(0,a.kt)("td",{parentName:"tr",align:null},"Clones a remote Git repository to your local machine. You will use this to create a local copy of your repo")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git add <file>")),(0,a.kt)("td",{parentName:"tr",align:null},"Adds a file to the staging area. You will use this to add files before you commit them")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git commit -m <message>")),(0,a.kt)("td",{parentName:"tr",align:null},"Commits the staged files to the local repository. You will use this to save your changes to your local repo")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git push")),(0,a.kt)("td",{parentName:"tr",align:null},"Pushes your local commits to the remote repository. You will use this to share your changes with your team")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git pull")),(0,a.kt)("td",{parentName:"tr",align:null},"Pulls the latest changes from the remote repository. You will use this to get the latest changes from your team")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git status")),(0,a.kt)("td",{parentName:"tr",align:null},"Shows the current status of your local repository. You will use this to see which files have been changed, added, or deleted")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git log")),(0,a.kt)("td",{parentName:"tr",align:null},"Shows the commit history of your local repository. You will use this to see the commit messages and commit hashes of your commits")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git branch")),(0,a.kt)("td",{parentName:"tr",align:null},"Shows the current branch you are on. You will use this to see which branch you are working on")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git switch <branch>")),(0,a.kt)("td",{parentName:"tr",align:null},"Switches to the specified branch. You will use this to switch between branches")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git switch -c <branch>")),(0,a.kt)("td",{parentName:"tr",align:null},"Creates a new branch and switches to it. You will use this to create a new branch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git reset --hard <commit>")),(0,a.kt)("td",{parentName:"tr",align:null},"Resets the repository to the specified commit. You will use this to undo changes to your local repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git reset --hard origin/<branch>")),(0,a.kt)("td",{parentName:"tr",align:null},"Resets the repository to the latest commit on the specified branch. You will use this to undo changes to your local repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git reset --hard HEAD~<number>")),(0,a.kt)("td",{parentName:"tr",align:null},"Resets the repository to the specified number of commits ago. You will use this to undo changes to your local repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git reset --hard")),(0,a.kt)("td",{parentName:"tr",align:null},"Resets the repository to the last commit. You will use this to undo changes to your local repository")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"git reset --hard origin/master")),(0,a.kt)("td",{parentName:"tr",align:null},"Resets the repository to the latest commit on the master branch. You will use this to undo changes to your local repository")))))}m.isMDXComponent=!0},3771:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/git-diagram-dc80314230b1e63f04e23e12678a58ce.jpeg"}}]);