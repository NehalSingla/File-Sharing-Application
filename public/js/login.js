var user_name=document.getElementById('user_name');
var user_pass= document.getElementById('user_pass');
var user_submit=document.getElementById('user_submit');


user_submit.addEventListener('click',function()
{
	if(user_name.value==''||user_pass.value=='')
    {
	alert('Fields are empty!');
	return;
    }

    var request= new XMLHttpRequest();
    request.open('POST','/checklogin',true);
    request.setReqestHeader('Content-Type','application/json');
    var obj=new Object();
    obj.name=user_name.value;
    obj.password=user_pass.value;
    request.send(JSON.stringify(obj));
    request.addEventListener('load',function()
    {
    	var data=request.responseText
    	console.log(data);    
    })

})
