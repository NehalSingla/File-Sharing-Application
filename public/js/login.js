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
    request.open('POST','/login/checkLogin',true);
    request.setRequestHeader("Content-Type", "application/json");
    var obj=new Object();
    obj.email=user_name.value;
    obj.password=user_pass.value;
    request.send(JSON.stringify(obj));
    request.addEventListener('load',function()
    {
    	var data=request.responseText
    	console.log(data);  
        if(data == 'false') {
            $.confirm({
              title: 'Password ?',
              content: "Password Doesn't Match !! ",
              draggable: true,
              buttons: {
                OK: {
                    btnClass: 'btn-danger any-other-class',
                     action: function () {      
                  }
                  },
                  }
            });
        }
        else if(data == 'not exits') {
            $.confirm({
              title: 'Email ?',
              content: "Email not exits !! ",
              draggable: true,
              buttons: {
                OK: {
                    btnClass: 'btn-danger any-other-class',
                     action: function () {      
                  }
                  },
                  }
            });
        }
        else if(data == 'deactivate') {
            $.confirm({
                title: 'Account ?',
                content: "Account has been deactivated !! ",
                draggable: true,
                buttons: {
                  OK: {
                      btnClass: 'btn-danger any-other-class',
                       action: function () {}
                    },
                }
            });
        }
        else {
            window.location = data;
        }  
    })

})
