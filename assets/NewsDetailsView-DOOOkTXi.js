import{_ as u,f as _,g as p,c as m,a as s,e as c,w as h,t as a,b as o,F as w,h as f,i as v,r as i,o as b}from"./index-DYxzC_NY.js";const g={class:"container mt-5 mb-5"},k={class:"card ml item pok",style:{width:"50.5rem"}},N=["src"],V={class:"card-body"},x={class:"card-title"},y={class:"card-text"},B={class:"card-text"},R={class:"card-title"},D={class:"but"},S=["href"],C={__name:"NewsDetailsView",setup(F){const l=f(),r=v();_(async()=>{await l.dispatch("fetchNewsdetailsByUuid",r.params.uuid)});const t=p(()=>l.state.selectedNewsdetails);return(L,e)=>{const n=i("RouterLink"),d=i("RouterView");return b(),m(w,null,[s("div",g,[c(n,{to:"/",class:"back"},{default:h(()=>e[0]||(e[0]=[s("i",{class:"fa-solid fa-backward"},null,-1),o(" Back Home")])),_:1}),s("div",k,[s("img",{src:t.value.image_url,class:"card-img-top ht",alt:"..."},null,8,N),s("div",V,[s("h5",x,a(t.value.title),1),s("p",y,a(t.value.published_at),1),s("p",B,[e[1]||(e[1]=o("Source: ")),s("strong",null,a(t.value.source),1)]),s("p",R,a(t.value.description),1)])])]),s("button",D,[s("a",{href:t.value.url},e[2]||(e[2]=[o("View full article "),s("i",{class:"fa-solid fa-arrow-right"},null,-1)]),8,S)]),c(d)],64)}}},H=u(C,[["__scopeId","data-v-24b8d293"]]);export{H as default};
