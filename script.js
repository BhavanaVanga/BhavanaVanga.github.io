var data1={image : "me.2.jpg",name : "V BHAVANA",designation:"intern"};
var data2={image : "me.5.jpg",name : "Bhavya",designation:"student"};
var isdata1=true;
var displaydata;
var changeMyPic=function(){
    if(isdata1)
    {
        displaydata=data2;
        isdata1=false;
    }
    else
    {
        displaydata=data1;
        isdata1=true;
    }
    document.getElementById("myimage").src=displaydata.image;
    document.getElementById("myname").innerHTML=displaydata.name;
    document.getElementById("mydest").innerHTML=displaydata.designation;

}
