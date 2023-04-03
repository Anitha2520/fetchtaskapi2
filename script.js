var title = document.createElement("h1");
title.innerHTML = "IP Geolocation API";
title.setAttribute("class","text-center");
var divflexcontainer = document.createElement("div");
divflexcontainer.setAttribute("class","d-flex p-2 justify-content-center");

var input=document.createElement("input");
input.setAttribute("class","mr-3");
input.setAttribute("type","text");
input.setAttribute("id","ipaddress");

var button=document.createElement("button");
button.innerHTML="Display data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);
divflexcontainer.append(input,button);
var maindiv = document.createElement("div");
maindiv.classList="container p-2 justify-content-center";
maindiv.innerHTML=""; 
document.body.append(title, divflexcontainer,maindiv);

function createdisplaydiv(id,value,text){
    div1=document.createElement("div");
    div1.innerHTML=text+" "+value;
    div1.setAttribute("class","d-flex justify-content-left");
    div1.setAttribute("id",id);
    document.body.append(div1);

}
function displaydata(){
    maindiv.innerHTML="";
    var ip = document.getElementById("ipaddress").value;      
    var res=fetch("https://ipgeolocation.abstractapi.com/v1/?api_key=2232f69bc039434b8c35b344bdaa1d6b&ip_address="+ip);    
    res.then((data)=>data.json())
    .then((data1)=>fetchdata(data1))
    .catch((error)=>console.log(error));    
}

function fetchdata(data1){          
    createdisplaydiv("worddisp",data1.ip_address,"<b>Ip Address: &nbsp;</b>");
    createdisplaydiv("citydisp",data1.city,"<b>City: &nbsp;</b>");
    createdisplaydiv("regiondisp",data1.postal_code," <b>Postal Code: &nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.country," <b>Country: &nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.country_code," <b>Country code: &nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.continent," <b>Continent; </b> ");
    createdisplaydiv("regiondisp",data1.longitude," <b>Longitude:&nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.latitude," <b>Latitude: &nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.timezone.name," <b>Timezone: &nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.connection_type," <b>Connection type: &nbsp;</b> ");
    createdisplaydiv("regiondisp",data1.organization_name," <b>Organization name: &nbsp;</b>");    
}

function createdisplaydiv(id,value,text){
    div1=document.createElement("div");
    div1.innerHTML=text+" "+value;
    div1.setAttribute("class","d-flex justify-content-left p-2");
    div1.setAttribute("id",id);
    maindiv.append(div1);
}
    

