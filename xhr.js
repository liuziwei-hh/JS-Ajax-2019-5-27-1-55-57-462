var ajax = createajax();  
 ajax.onreadystatechange = function(){  
 if(ajax.readyState == 4){  
 if((ajax.status >=200 && ajax.status < 300 ) || ajax.status == 304 ){  
 alert(ajax.responseText);  
 }else{  
 alert("Request was unsuccessful : " + ajax.status);  
 }  
 }  
 }  
   //读取example文本  
 ajax.open("get","example.txt",true);  
 ajax.send(null); 
