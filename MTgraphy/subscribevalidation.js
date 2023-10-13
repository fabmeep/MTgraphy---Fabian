function validation(){
    var name = document.getElementById("name").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var country = document.getElementById("country").value
    var terms = document.getElementById("terms").checked

    if(name.length <= 2){
        alert("Please insert your name (Three minimal characters)");
        return false;
    }

    if(!email.endsWith ("@gmail.com")){
        alert("Please insert an email that ends with @gmail.com");
        return false;
    }

    if(phone.length  == "" || isNaN(phone) || phone.length > 12){
        alert("Please insert a phone number");
        return false;
    }

    if(country == ""){
        alert("Please select a country");
        return false;
    }

    if(!terms){
        alert("You need to agree with the terms and the conditions to subscribe");
    }
    
    alert("Successfully subscribed!");
    return true;

}