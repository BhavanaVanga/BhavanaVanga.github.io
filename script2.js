var userinfo={name:"",image:"",username:""};
var changemypic=function(){
 fetch("https://randomuser.me/api").then((response)=>response.json()).then((data)=>{
    userinfo.name=data.results[0].name.first;
    userinfo.image=data.results[0].picture;
    userinfo.username=data.results[0].username.first;
 })
}