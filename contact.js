function send_msg()
{
    let form = document.getElementById("msg_form");
    if(form.checkValidity()){
        document.getElementById("suc_msg").innerHTML ="Message sent successfully! Thank you for contacting us.";
        form.reset();
    }
    else {
        form.reportValidity();
    }
}