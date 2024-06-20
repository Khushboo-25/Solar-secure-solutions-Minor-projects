// console.log("form.js loaded");
function validate(){
    // 
    let username=document.getElementById('username').value;
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    let cfpassword=document.getElementById('cf_password').value;
    checkusername(username);
    checkemail(email);
    checkpassword(password);
    checkcf_password(cfpassword,password);


 }
 function checkusername(username){
    if(username.length>7)
        {   
            document.getElementById('username').classList.add('success');
            document.getElementById('username').classList.replace('fail','success');
            document.getElementById('username_error').innerHTML="";
        
            
        }
        else{
            document.getElementById('username').classList.add('fail');
            document.getElementById('username_error').innerHTML="Username must be 8 letters long ";
        }
 }
 
 function checkemail(email){
    
    if(email.length>8 && email.include('@gmail'))
        {   
            document.getElementById('email').classList.add('success');
            document.getElementById('email').classList.replace('fail','success');
            document.getElementById('email_error').innerHTML="";
        
            
        }
        else{
            document.getElementById('email').classList.add('fail');
            document.getElementById('email_error').innerHTML="Email must include @gmail, 8letters long";
        }
 }
 
 function checkpassword(password){
    if(password.legth>7 && password.include('.'))
        {   
            document.getElementById('password').classList.add('success');
            document.getElementById('password').classList.replace('fail','success');
            document.getElementById('password_error').innerHTML="";
        
            
        }
        else{
            document.getElementById('password').classList.add('fail');
            document.getElementById('password_error').innerHTML="password mustinclude '.', alest 7 digits long ";
        }
 }
 
 function checkcf_password(cfpassword,password){
    if(cfpassword===password && cfpassword.length>7)
        {   
            document.getElementById('cf_password').classList.add('success');
            document.getElementById('cf_password').classList.replace('fail','success');
            document.getElementById('cf_password_error').innerHTML=""
        
            
        }
        else{
            document.getElementById('cf_password').classList.add('fail');
            document.getElementById('cf_password_error').innerHTML="password not matched";
        }
 }