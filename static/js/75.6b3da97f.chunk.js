"use strict";(self.webpackChunkproject=self.webpackChunkproject||[]).push([[75],{6075:(s,t,e)=>{e.r(t),e.d(t,{default:()=>F});var o=e(2791);const a="MyPosts_postsBlock__9HAQk",r="MyPosts_newPostForm__DEing",i="Post_item__eaGRp";var n=e(184);const c=s=>(0,n.jsxs)("div",{className:i,children:[(0,n.jsx)("img",{src:"https://faunistics.com/wp-content/uploads/2021/01/4.jpg",alt:""}),s.message,(0,n.jsxs)("div",{children:["Like: ",s.likesCount]})]});var l=e(6139),u=e(704),p=e(5304),d=e(8323);const h=(0,p.D)(10),j=o.memo((s=>{console.log("render");let t=s.posts.map((s=>(0,n.jsx)(c,{message:s.message,likesCount:s.likesCount},s.id)));return(0,n.jsxs)("div",{className:a,children:[(0,n.jsx)("h2",{children:"Posts"}),(0,n.jsx)(x,{onSubmit:t=>{s.addPostActionCreator(t.newPostText)}}),t]})})),x=(0,u.Z)({form:"newPost"})((s=>(0,n.jsxs)("form",{onSubmit:s.handleSubmit,className:r,children:[(0,n.jsx)(l.Z,{name:"newPostText",component:d.gx,validate:[p.C,h]}),(0,n.jsx)("button",{type:"submit",children:"Add post"})]}))),f=j,m="ProfileInfo_userPhoto__dG8IE",g="ProfileInfo_descriptionBlock__4BgVd",v="ProfileInfo_socialLinks__jjh7J";var P=e(8794),k=e(2222);const _=s=>{let[t,e]=(0,o.useState)(!1),[a,r]=(0,o.useState)(s.status);(0,o.useEffect)((()=>{r(s.status)}),[s.status]);return(0,n.jsxs)(n.Fragment,{children:[!t&&(0,n.jsx)("div",{children:(0,n.jsx)("span",{onDoubleClick:()=>{e(!0)},children:s.status||"-------"})}),t&&(0,n.jsx)("div",{children:(0,n.jsx)("input",{autoFocus:!0,onChange:t=>{r(t.currentTarget.value),s.updateStatus(a)},onBlur:()=>{e(!1)},value:a})})]})},b=s=>{let{profile:t,status:e,updateStatus:o}=s;return t?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:g,children:[(0,n.jsx)("img",{className:m,src:null==t.photos.small?k:t.photos.small,alt:""}),(0,n.jsx)(_,{status:e,updateStatus:o}),(0,n.jsx)("p",{children:t.aboutMe})]}),(0,n.jsxs)("div",{className:v,children:[t.contacts.facebook&&(0,n.jsx)("a",{href:t.contacts.facebook,children:"Facebook"}),t.contacts.website&&(0,n.jsx)("a",{href:t.contacts.website,children:"website"}),t.contacts.vk&&(0,n.jsx)("a",{href:t.contacts.vk,children:"vk"}),t.contacts.twitter&&(0,n.jsx)("a",{href:t.contacts.twitter,children:"twitter"}),t.contacts.instagram&&(0,n.jsx)("a",{href:t.contacts.instagram,children:"instagram"})]})]}):(0,n.jsx)(P.Z,{})};var w=e(6070),S=e(8687);const C=(0,S.$j)((s=>({posts:s.profilePage.posts,newPostText:s.profilePage.newPostText})),{addPostActionCreator:w.Wl})(f),A=s=>(0,n.jsxs)("div",{children:[(0,n.jsx)(b,{profile:s.profile,status:s.status,updateStatus:s.updateStatus}),(0,n.jsx)(C,{})]});e(1548);var I=e(97),N=e(5628);class D extends o.Component{componentDidMount(){let s=this.props.router.params.userId;s||(s=this.props.authorizedUserId,s||(this.props.router.location.path="/login")),this.props.getUserProfile(s),this.props.getStatus(s)}render(){return(0,n.jsx)("div",{children:(0,n.jsx)(A,{...this.props,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus})})}}const F=(0,I.qC)((0,S.$j)((s=>({profile:s.profilePage.profile,status:s.profilePage.status,authorizedUserId:s.auth.userId,isAuth:s.auth.isAuth})),{getUserProfile:w.et,getStatus:w.lR,updateStatus:w.Nf}),N.Z)(D)},1548:(s,t,e)=>{e.d(t,{D:()=>c});var o=e(2791),a=e(7689),r=e(8687),i=e(184);let n=s=>({isAuth:s.auth.isAuth});const c=s=>{class t extends o.Component{render(){return this.props.isAuth?(0,i.jsx)(s,{...this.props}):(0,i.jsx)(a.Fg,{to:"/login"})}}return(0,r.$j)(n)(t)}}}]);
//# sourceMappingURL=75.6b3da97f.chunk.js.map