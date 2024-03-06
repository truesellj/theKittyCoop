function confirmWithUser(){
    let name = document.getElementById("fName").value;
    let date = document.getElementById("date").value;
    const regex = /\W/g
    const validCheck = name.match(regex);
    console.log(name);

    if(validCheck == null){
        alert("Thank you " + name + ", we will contact you on " + date + ".");
    }
    else{
        alert("Your name entry contained invalid characters\nPlease try again");
    }
    
}
function setContactMethod(method){
    const contactForm = document.getElementById("contactForm");
    const paragraph = document.createElement("p");
    if(method == 1){
        const htmlValue = document.createTextNode("Chosen method of contact is: Phone");
        paragraph.appendChild(htmlValue);
        paragraph.style.color ="red";
        contactForm.appendChild(paragraph);
    }
    else{
        const htmlValue = document.createTextNode("Chosen method of contact is: Email");
        paragraph.appendChild(htmlValue);
        paragraph.style.color ="red";
        contactForm.appendChild(paragraph);
    }
}