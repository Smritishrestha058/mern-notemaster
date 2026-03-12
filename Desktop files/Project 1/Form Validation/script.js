function validate()
{
    var email=document.myForm.txtEmail.value;
    //Blank validation of First Name
    if(document.myForm.txtFirstName.value=="")
    {
        //Message to the User
        alert("The First Name is Empty.");
        //Set input focus to the invalid textbox
        document.myForm.txtFirstName.focus();
        /* Return false so that the form will not be submitted. */
        return false;
    }
    //Blank validation of Last Name 
    else if(document.myForm.txtLastName.value=="")
    {
        alert("The Last Name is Empty."); 
        document.myForm.txtLastName.focus();
        return false;
    }
    //Validate whether Gender is checked or not
    /*We have two radio buttons with the same name 'optGender so they are
    accessed through index. */
    else if(document.myForm.optGender[0].checked==false &&
    document.myForm.optGender[1].checked==false)
    {
        alert("Gender is not chosen.");
        return false;
    }
    //Blank validation of Phone
    else if(document.myForm.txtPhone.value=="")
    {
        alert("The Phone number field is Empty."); 
        document.myForm.txtPhone.focus(); 
        return false;
    }
    //Check whether Phone is number or not
    
    /* iNaN refers to 'is Not a Number' that returns true when the given value is
    not a valid number. */
    else if(isNaN(document.myForm.txtPhone.value))
    {
        alert("Please enter the valid numbers.");
        document.myForm.txtPhone.focus();
        return false;
    }
    //Blank Validation of Email
    else if(document.myForm.txtEmail.value=="")
    {
        alert("The Email field is empty."); 
        document.myForm.txtEmail.focus();
        return false;
    }
    
    
   /*Refer to the methods of string object we studied earlier which are very important to validate an email address. */
    
    //@ and . must be present in an email address 
    else if(email.indexOf("@")==-1) 
    {
        alert("The email is invalid; @ is not present.");
        document.myForm.txtEmail.focus();
        return false;
    }
    else if(email.indexOf(".") == -1){
        alert("The email is invalid; dot (.) is not present.");
        document.myForm.txtEmail.focus();
        return false;
    }
    //@ and . can't be present in the beginning of an email 
    else if(email.charAt(0)=="@" || email.charAt(0)==".")
    {
        alert("The email is invalid; @ and. can't come at the begining."); 
        document.myForm.txtEmail.focus();
        return false;
    }
    // @and. can't be present in the end of an email
    else if(email.charAt(email.length-1)=="@" || email.charAt(email.length-
    1)==".")
    {
        alert("The email is invalid; @ and. can't come at the end."); 
        document.myForm.txtEmail.focus();
        return false;
    }
    //@ and. can't come together
    else if(email.indexOf("@")==email.indexOf(".")-1){
        alert("The email is invalid; @ and. can't come together."); 
        document.myForm.txtEmail.focus();
        return false;
    }        
}