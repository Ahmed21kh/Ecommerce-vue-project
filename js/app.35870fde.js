(function(t){function e(e){for(var o,i,s=e[0],l=e[1],c=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],o=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var o={},n={app:0},r=[];function i(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=o,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(a,o,function(e){return t[e]}.bind(null,o));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/Ecommerce-vue-project/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0157":function(t,e,a){},"16b1":function(t,e,a){},"1c2a":function(t,e,a){"use strict";a("f239")},2608:function(t,e,a){},"2a56":function(t,e,a){},"327f":function(t,e,a){},4144:function(t,e,a){},"480e":function(t,e,a){"use strict";a("5c19")},"4bc6":function(t,e,a){},"4c21":function(t,e,a){"use strict";a("4bc6")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark  "},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Electronic")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ms-auto mb-2 mb-lg-0"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[a("router-link",{attrs:{to:"/home"}},[t._v("Home")])],1)]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/admin/products"}},[t._v("Products")])],1)]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[a("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")])],1)])])])])])]),a("router-view")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i=(a("5c0b"),a("2877")),s={},l=Object(i["a"])(s,n,r,!1,null,null,null),c=l.exports,d=a("2909"),u=(a("99af"),a("8c4f")),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._m(0),a("h3",[t._v("Installed CLI Plugins")]),t._m(1),a("h3",[t._v("Essential Links")]),t._m(2),a("h3",[t._v("Ecosystem")]),t._m(3)])},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),t._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],h={name:"HelloWorld",props:{msg:String}},g=h,b=(a("6f12"),Object(i["a"])(g,p,v,!1,null,"5cc7f8f0",null)),_=b.exports,C={name:"Home",components:{HelloWorld:_}},y=C,w=Object(i["a"])(y,f,m,!1,null,null,null),E=w.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"nav-opened":t.navVisibility},attrs:{id:"admin-content-body"}},[a("link",{attrs:{href:"https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,100&display=swap",rel:"stylesheet"}}),a("h1"),a("admin-header"),a("router-view")],1)},M=[],j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"admin-header"})},$=[],P={data:function(){return{}},computed:{navVisibility:function(){return this.$store.state.admin.navVisibility}},methods:{toggleNav:function(){this.$store.commit("updateNavVisibility",!this.navVisibility)}}},x=P,O=(a("7a87"),Object(i["a"])(x,j,$,!1,null,"0b4880f6",null)),D=O.exports,N={components:{AdminHeader:D},computed:{navVisibility:function(){return this.$store.state.admin.navVisibility}}},S=N,F=(a("4c21"),Object(i["a"])(S,k,M,!1,null,"896778da",null)),H=F.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section-header",{on:{addModalEvent:t.showModalHandler},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Products List ")]},proxy:!0},{key:"action",fn:function(){},proxy:!0}])}),a("div",{staticClass:"page"},[t.products?a("div",{staticClass:"products-container"},t._l(t.products,(function(e){return a("product-card",{key:e.id,attrs:{product:e,"is-admin":!0},on:{deleteProduct:t.showDeleteModalHandler,editProduct:t.showModalHandler}})})),1):a("v-e-loader",{staticClass:"page-loader"})],1),a("v-e-modal",{attrs:{show:t.showModal,width:800},on:{close:t.hideModalHandler}},[a("product-form",{attrs:{product:t.selectedProduct},on:{cancelform:t.hideModalHandler}})],1),a("delete-modal",{attrs:{show:t.showDeleteModal},on:{close:t.hideModalHandler,deleteProduct:t.deleteProductForm}})],1)},L=[],T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["size-"+t.size,"lds-ring"]},[a("div"),a("div"),a("div"),a("div")])},A=[],B={name:"ve-loader",props:{size:{type:String,required:!1,default:"default",validator:function(t){return-1!==["default","small","large"].indexOf(t)}},color:{type:String,required:!1,default:"default",validator:function(t){return-1!==["default","white"].indexOf(t)}}}},I=B,U=(a("aab2"),Object(i["a"])(I,T,A,!1,null,"ccd9c45e",null)),q=U.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.show?a("div",{staticClass:"modal-container",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[a("div",{staticClass:"modal-content",style:{"max-width":t.width+"px"}},[t._t("default")],2)]):t._e()])},R=[],W=(a("a9e3"),{name:"ve-modal",props:{show:{type:Boolean,required:!1,default:!1},width:{type:Number,required:!1,default:500}}}),Y=W,G=(a("b1f4"),Object(i["a"])(Y,z,R,!1,null,"58e469d1",null)),J=G.exports,K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-header"},[a("h3",{staticClass:"section-title"},[t._t("title")],2),a("div",{staticClass:"action"},[a("v-e-button",{attrs:{type:"button"},on:{click:t.fireAddModalEvent}},[t._v(" add ")])],1)])},Z=[],Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{class:["ve-btn","ve-btn-"+t.color],attrs:{type:t.type,disabled:t.disabled,loading:t.loading},on:{click:function(e){return t.$emit("click")}}},[t.loading?a("v-e-loader"):t._t("default")],2)},X=[],tt={components:{VELoader:q},name:"ve-button",props:{type:{type:String,required:!1,default:"button"},disabled:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},color:{type:String,required:!1,default:"default",validator:function(t){return-1!==["default","success","error","info"].indexOf(t)}}}},et=tt,at=(a("6ca3"),Object(i["a"])(et,Q,X,!1,null,"cc40dfaa",null)),ot=at.exports,nt=a("29e4"),rt={components:{VEButton:ot},methods:{fireAddModalEvent:function(){console.log("hallo"),this.$emit("addModalEvent")},changeLocale:function(t){nt["a"].locale=t}}},it=rt,st=(a("a07e"),Object(i["a"])(it,K,Z,!1,null,"3dc97490",null)),lt=st.exports,ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-e-modal",{attrs:{show:t.show,width:400},on:{close:t.close}},[a("h4",{staticClass:"modal-title"},[t._v("Are You Sure ? :(")]),a("v-e-button",{attrs:{desabled:t.loading,loading:t.loading},on:{click:t.deleteProduct}},[t._v("Delete")]),a("v-e-button",{on:{click:t.close}},[t._v("Cancel")]),t.loading?a("v-e-loader"):t._t("default")],2)},dt=[],ut={name:"DeleteModal",components:{VEModal:J,VEButton:ot,VELoader:q},props:["show","loading","desabled"],methods:{close:function(){this.$emit("close")},deleteProduct:function(){this.$emit("deleteProduct"),this.close()}}},ft=ut,mt=(a("6335"),Object(i["a"])(ft,ct,dt,!1,null,"7bf34ba1",null)),pt=mt.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("label",[a("span",{staticClass:"input-title"},[t._v(" Name ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.Name,expression:"form.Name"}],staticClass:"inp",attrs:{placeholder:" name",id:"fullName",type:"text"},domProps:{value:t.form.Name},on:{input:function(e){e.target.composing||t.$set(t.form,"Name",e.target.value)}}})]),a("label",[a("span",{staticClass:"input-title"},[t._v(" Price ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.price,expression:"form.price"}],staticClass:"inp",attrs:{placeholder:" price",id:"fullName",type:"text"},domProps:{value:t.form.price},on:{input:function(e){e.target.composing||t.$set(t.form,"price",e.target.value)}}})]),a("label",[a("span",{staticClass:"input-title"},[t._v(" Image ")]),a("div",{staticClass:"preview-image"},[a("img",{attrs:{src:t.imageUrl}})]),a("input",{directives:[{name:"modal",rawName:"v-modal",value:t.form.imagefile,expression:"form.imagefile"}],staticClass:"inp",attrs:{type:"file",accept:"image/*"},on:{change:t.imageInputChangeHandler}})]),a("div",{class:t.form-t.te},[a("v-e-button",{staticClass:"COLOR",attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Submit")]),a("v-e-button",{staticClass:"cancel",on:{click:t.cancel}},[t._v("Cancel")]),t.loading?t._e():t._t("default")],2)])},ht=[],gt=function(){return{Name:null,price:null}},bt={props:["product"],data:function(){return{imagefile:null,imageUrl:null,form:gt(),loading:!1,reader:new FileReader}},created:function(){var t=this;this.reader.onload=function(){t.imageUrl=t.reader.result}},components:{VEButton:ot},methods:{cancel:function(){this.$emit("cancelform")},imageInputChangeHandler:function(t){this.imagefile=t.target.files[0],this.reader.readAsDataURL(this.imagefile)},fillFormData:function(){var t=this.product,e=t.Name,a=t.price,o=t.imageUrl;this.form={Name:e,price:a},this.imageUrl=o},addProduct:function(){return this.$store.dispatch("submitProductForm",{product:this.form,imagefile:this.imagefile})},editProduct:function(){return this.$store.dispatch("submitEditProductForm",{product:this.form,imagefile:this.imagefile,id:this.product.id})},submit:function(){var t=this;this.loading=!0;var e=this.isEditMod?"editProduct":"addProduct";this[e]().then((function(){t.form=gt(),t.$emit("cancelform"),t.loading=!1}))},resetForm:function(){this.form=gt(),this.imageUrl=null}},computed:{isEditMod:function(){return!!this.product}},mounted:function(){this.isEditMod&&this.fillFormData()}},_t=bt,Ct=(a("88b8"),Object(i["a"])(_t,vt,ht,!1,null,"7982810a",null)),yt=Ct.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-card"},[t.isAdmin?a("div",{staticClass:"admin-actions"},[a("v-e-button",{attrs:{color:"info"},on:{click:t.editProduct}},[t._v("Edit")]),a("v-e-button",{attrs:{color:"info"},on:{click:t.deletProduct}},[t._v("Delete")])],1):t._e(),a("div",{staticClass:"card-btn"}),a("div",{staticClass:"card-img"},[a("img",{attrs:{src:t.product.imageUrl,alt:t.product.Name,height:"350px",width:"300px"}})]),a("div",{staticClass:"card-body"},[a("h3",[t._v(t._s(t.product.Name))]),a("p",[t._v(t._s(t.product.price)+" $")])])])},Et=[],kt={components:{VEButton:ot},name:"product-card",props:["product","isAdmin"],methods:{editProduct:function(){this.$emit("editProduct",this.product)},deletProduct:function(){this.$emit("deleteProduct",this.product.id)}}},Mt=kt,jt=(a("dd77"),Object(i["a"])(Mt,wt,Et,!1,null,"a52829a8",null)),$t=jt.exports,Pt={components:{SectionHeader:lt,ProductForm:yt,ProductCard:$t,VEModal:J,VELoader:q,DeleteModal:pt},data:function(){return{showModal:!1,showDeleteModal:!1,selectProductToDelete:null,selectedProduct:null}},computed:{products:function(){return this.$store.state.admin.products}},mounted:function(){this.$store.dispatch("getProductForm")},methods:{showModalHandler:function(t){this.showModal=!0,this.selectedProduct=t},showDeleteModalHandler:function(t){this.showDeleteModal=!0,this.selectProductToDelete=t},hideModalHandler:function(){this.showModal=!1,this.showDeleteModal=!1},deleteProductForm:function(){var t=this;this.$store.dispatch("deleteProductForm",this.selectProductToDelete).then((function(){t.selectProductToDelete=null}))}}},xt=Pt,Ot=(a("1c2a"),Object(i["a"])(xt,V,L,!1,null,"8e17f594",null)),Dt=Ot.exports,Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("section-header",{on:{addModalEvent:t.showModalHandler},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" Categories List ")]},proxy:!0},{key:"action",fn:function(){},proxy:!0}])}),a("div",{staticClass:"page"},[t.categories?a("div",{staticClass:"categories-container"},t._l(t.categories,(function(e){return a("category-card",{key:e.id,attrs:{category:e},on:{deleteCatogary:t.showDeleteModalHandler,editCatogary:t.showModalHandler}})})),1):a("v-e-loader",{staticClass:"page-loader"})],1),a("v-e-modal",{attrs:{show:t.showModal,width:800},on:{close:t.hideModalHandler}},[a("category-form",{attrs:{selectedCategory:t.selectedCategory},on:{cancelform:t.hideModalHandler}})],1),a("delete-modal",{attrs:{show:t.showDeleteModal},on:{close:t.hideModalHandler,deleteCatogary:t.deleteCategoryForm}})],1)},St=[],Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[a("label",[a("span",{staticClass:"input-title"},[t._v(" Category Name : ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.categoryName,expression:"categoryName"}],staticClass:"inp",attrs:{placeholder:" name",id:"fullName",type:"text"},domProps:{value:t.categoryName},on:{input:function(e){e.target.composing||(t.categoryName=e.target.value)}}})]),a("div",{staticClass:"form-footer"},[a("v-e-button",{staticClass:"COLOR",attrs:{type:"submit",disabled:t.loading,loading:t.loading}},[t._v("Submit")]),a("v-e-button",{staticClass:"cancel",on:{click:t.cancel}},[t._v("Cancel")]),t.loading?t._e():t._t("default")],2)])},Ht=[],Vt=(a("b0c0"),{props:["selectedCategory"],data:function(){return{categoryName:null,loading:!1}},computed:{isEditMod:function(){return!!this.selectedCategory}},components:{VEButton:ot},mounted:function(){this.isEditMod&&this.fillFormData()},methods:{cancel:function(){this.$emit("cancelform")},addCategory:function(){return this.$store.dispatch("submitCategoryForm",{name:this.categoryName})},editCategory:function(){return this.$store.dispatch("submitEditCategoryForm",{category:{name:this.categoryName},id:this.selectedCategory.id})},submit:function(){var t=this;this.loading=!0;var e=this.isEditMod?"editCategory":"addCategory";this[e]().then((function(){t.categoryName=null,t.$emit("cancelform"),t.loading=!1}))},fillFormData:function(){this.categoryName=this.selectedCategory.name}}}),Lt=Vt,Tt=(a("d040"),Object(i["a"])(Lt,Ft,Ht,!1,null,"e3f274ae",null)),At=Tt.exports,Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-e-modal",{attrs:{show:t.show,width:400},on:{close:t.close}},[a("h4",{staticClass:"modal-title"},[t._v("Are You Sure ? :(")]),a("v-e-button",{attrs:{desabled:t.loading,loading:t.loading},on:{click:t.deleteCatogary}},[t._v("Delete")]),a("v-e-button",{on:{click:t.close}},[t._v("Cancel")]),t.loading?a("v-e-loader"):t._t("default")],2)},It=[],Ut={name:"DeleteModal",components:{VEModal:J,VEButton:ot,VELoader:q},props:["show","loading","desabled"],methods:{close:function(){this.$emit("close")},deleteCatogary:function(){this.$emit("deleteCatogary"),this.close()}}},qt=Ut,zt=(a("a0f3"),Object(i["a"])(qt,Bt,It,!1,null,"fbdb5b64",null)),Rt=zt.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"category-card"},[t._v(" "+t._s(t.category.name)+" "),a("div",[a("v-e-button",{staticClass:"vbtn",on:{click:function(e){return t.$emit("deleteCatogary",t.category.id)}}},[t._v("DELETE")]),a("v-e-button",{staticClass:"vbtn1",on:{click:function(e){return t.$emit("editCatogary",t.category)}}},[t._v("EDIT")])],1)])},Yt=[],Gt={components:{VEButton:ot},props:["category"]},Jt=Gt,Kt=(a("f10d"),Object(i["a"])(Jt,Wt,Yt,!1,null,"15d00f6e",null)),Zt=Kt.exports,Qt={components:{SectionHeader:lt,VEModal:J,DeleteModal:Rt,CategoryCard:Zt,CategoryForm:At,VELoader:q},data:function(){return{showModal:!1,showDeleteModal:!1,selectCategoryToDelete:null,selectedCategory:null}},computed:{categories:function(){return this.$store.state.admin.categories}},mounted:function(){this.$store.dispatch("getCategoryForm")},methods:{showModalHandler:function(t){this.showModal=!0,this.selectedCategory=t},showDeleteModalHandler:function(t){this.showDeleteModal=!0,this.selectCategoryToDelete=t},hideModalHandler:function(){this.showModal=!1,this.showDeleteModal=!1},deleteCategoryForm:function(){var t=this;this.$store.dispatch("deleteCategoryForm",this.selectCategoryToDelete).then((function(){t.selectCategoryToDelete=null}))}}},Xt=Qt,te=(a("480e"),Object(i["a"])(Xt,Nt,St,!1,null,"772a4358",null)),ee=te.exports,ae=[{path:"/admin",component:H,name:"admin",children:[{path:"products",component:Dt,name:"products"},{path:"categories",component:ee,name:"categories"}]}],oe=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ne=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("Navbar")]),a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})]),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#",routerlink:""}},[t._v("Home")])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")])]),a("li",{staticClass:"nav-item dropdown"},[a("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v(" Dropdown ")]),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"navbarDropdown"}},[a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")])]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")])]),a("li",[a("hr",{staticClass:"dropdown-divider"})]),a("li",[a("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Something else here")])])])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link disabled"},[t._v("Disabled")])])]),a("form",{staticClass:"d-flex"},[a("input",{staticClass:"form-control me-2",attrs:{type:"search",placeholder:"Search","aria-label":"Search"}}),a("button",{staticClass:"btn btn-outline-success",attrs:{type:"submit"}},[t._v("Search")])])])])])])}],re={},ie=Object(i["a"])(re,oe,ne,!1,null,null,null),se=ie.exports;o["a"].use(u["a"]);var le=[{path:"",name:"/products",component:Dt},{path:"/",name:"Home",component:E},{path:"/admin",name:"Admin",component:se}],ce=[].concat(Object(d["a"])(ae),le),de=new u["a"]({routes:ce,mode:"history"}),ue=de,fe=a("2f62"),me=a("5530"),pe=(a("d81d"),a("4de4"),a("d3b7"),a("59ca")),ve=a.n(pe),he=(a("e71f"),a("588e"),{apiKey:"AIzaSyCkBhyov3l6Yct78iIeMbSxqswpNb0yGn4",authDomain:"ahmed-19615.firebaseapp.com",projectId:"ahmed-19615",storageBucket:"ahmed-19615.appspot.com",messagingSenderId:"1093527769518",appId:"1:1093527769518:web:eecda75234fc586a3a383f",measurementId:"G-L12MFVKZ3V"});ve.a.initializeApp(he);ve.a.firestore();var ge=ve.a.storage(),be="products",_e=function(t){var e=ge.ref("".concat(be,"/").concat(t.name));return e.put(t).then((function(t){return t.ref.getDownloadURL()}))},Ce={namespace:!0,state:{navVisibility:!1,categories:[],products:[]},mutations:{updateNavVisibility:function(t,e){t.navVisibility=e},updateCategories:function(t,e){t.categories=e},updateProducts:function(t,e){t.products=e}},actions:{submitCategoryForm:function(t,e){var a=t.commit,o=t.state;return ve.a.firestore().collection("categories").add(e).then((function(t){a("updateCategories",o.categories.concat(Object.assign({},e,{id:t.id})))}))},submitEditCategoryForm:function(t,e){var a=t.commit,o=t.state,n=e.category,r=e.id;return ve.a.firestore().collection("categories").doc(r).update(n).then((function(){a("updateCategories",o.categories.map((function(t){return t.id==r?Object.assign({},t,n):t})))}))},getCategoryForm:function(t){var e=t.commit;ve.a.firestore().collection("categories").orderBy("name").get().then((function(t){var a=t.docs.map((function(t){return Object.assign({},t.data(),{id:t.id})}));e("updateCategories",a)}))},deleteCategoryForm:function(t,e){var a=t.commit,o=t.state;return ve.a.firestore().collection("categories").doc(e).delete().then((function(){a("updateCategories",o.categories.filter((function(t){return t.id!=e})))}))},submitProductForm:function(t,e){var a=t.commit,o=t.state,n=e.product,r=e.imagefile;return _e(r).then((function(t){var e=Object(me["a"])(Object(me["a"])({},n),{},{imageUrl:t});return ve.a.firestore().collection("products").add(e).then((function(t){a("updateProducts",o.products.concat(Object.assign({},n,{id:t.id})))}))}))},submitEditProductForm:function(t,e){var a=t.commit,o=t.state,n=e.product,r=e.id,i=e.imagefile,s=i?_e(i):Promise.resolve(null);return s.then((function(t){var e=Object(me["a"])({},n);return t&&(e["imageUrl"]=t),ve.a.firestore().collection("products").doc(r).update(e).then((function(){a("updateProducts",o.products.map((function(t){return t.id==r?Object.assign({},n,e):t})))}))}))},getProductForm:function(t){var e=t.commit;ve.a.firestore().collection("products").orderBy("Name").get().then((function(t){var a=t.docs.map((function(t){return Object.assign({},t.data(),{id:t.id})}));e("updateProducts",a)}))},deleteProductForm:function(t,e){var a=t.commit,o=t.state;return ve.a.firestore().collection("products").doc(e).delete().then((function(){a("updateProducts",o.products.filter((function(t){return t.id!=e})))}))}}};o["a"].use(fe["a"]);var ye=new fe["a"].Store({state:{},mutations:{},actions:{},modules:{admin:Ce}});o["a"].config.productionTip=!1,new o["a"]({router:ue,store:ye,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5c19":function(t,e,a){},6335:function(t,e,a){"use strict";a("2608")},"6ca3":function(t,e,a){"use strict";a("8d13")},"6f12":function(t,e,a){"use strict";a("2a56")},"75bb":function(t,e,a){},"7a87":function(t,e,a){"use strict";a("75bb")},"88b8":function(t,e,a){"use strict";a("9356")},"8d13":function(t,e,a){},9356:function(t,e,a){},"9c0c":function(t,e,a){},a07e:function(t,e,a){"use strict";a("e9c5")},a0f3:function(t,e,a){"use strict";a("16b1")},aab2:function(t,e,a){"use strict";a("327f")},acb0:function(t,e,a){},b1f4:function(t,e,a){"use strict";a("fbab")},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d040:function(t,e,a){"use strict";a("4144")},dd77:function(t,e,a){"use strict";a("acb0")},e9c5:function(t,e,a){},f10d:function(t,e,a){"use strict";a("0157")},f239:function(t,e,a){},fbab:function(t,e,a){}});
//# sourceMappingURL=app.35870fde.js.map