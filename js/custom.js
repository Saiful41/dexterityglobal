// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// for email send
 function sendEmail(){
          let name =document.getElementById('inputName4').value;
          let email =document.getElementById("inputEmail4").value;
          let subject =document.getElementById("inputSubject4").value;
          let message = document.getElementById("inputMessage").value;

         let body ="name :" + name + "<br> Email :" + email + "<br> Subject:" + subject +"<br> Message :"+message;       
    Email.send({
       

         SecureToken : "68045421-b5b7-47f4-b6ab-67d1a4115c85",
         To : "mi6516422@gmail.com",
         From: "mi6516422@gmail.com",
          Subject : "New Clint Enquary",
          Body :  body   
      }).then(
        message => alert("message sent sucessfully")
     );
 }
