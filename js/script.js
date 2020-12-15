

$(function() {
  // Sidebar toggle behavior
  $("#sidebarCollapse").on('click', function() {
    $('#sidebar,#content').toggleClass('active');
    $("#main_section").toggleClass('without_button');
  })
  
 
});


function printError(elemId, hintMsg) {
  document.getElementById(elemId).innerHTML = hintMsg;
}



function validateForm(){


var name = document.contactForm.name.value;
var email = document.contactForm.email.value;
var message = document.contactForm.message.value;

// Defining error variables with a default value
var nameErr = emailErr = messageErr = true;

  // Validate name
  if(name == "") {
    printError("nameErr", "Please enter your name");
} else {
    var regex = /^[a-zA-Z\s]+$/;                
    if(regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
    } else {
        printError("nameErr", "");
        nameErr = false;
    }
}
  // Validate message
if(email == "") {
  printError("emailErr", "Please enter your email address");
} else {
  // Regular expression for basic email validation
  var regex = /^\S+@\S+\.\S+$/;
  if(regex.test(email) === false) {
      printError("emailErr", "Please enter a valid email address");
  } else{
      printError("emailErr", "");
      emailErr = false;
  }
}
if(message == "") {
  printError("messageErr", "Please enter your message");
} 
else {
  // Regular expression for basic email validation
  var regex = /{200}$/;
  if(regex.test(message) === false) {
      printError("emailErr", "Please enter a valid email address");
  } else{
      printError("emailErr", "");
      messageErr = false;
  }
}

    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || messageErr ) == true) {
      return false;
   } 
   else{
    $.ajax({
        type: "POST",
        url: 'index.php',
        data:{name:name, email:email, message:message},
        success: function(data){
            alert(data);
        }
    });
  
   }


}
