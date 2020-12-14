function validation() {
    let mail = document.getElementById('mail').value;
    if (mail == "") {
        alert("Oops! Please add your email");
        console.log(mail);
    }
}