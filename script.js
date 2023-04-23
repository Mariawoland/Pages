function checkForBlank() {


    let setting_Mail = document.getElementById('iMail');
    let redAlert = document.getElementById('pop-up-hide');

    if (setting_Mail.value == "") {

        setting_Mail.style.borderColor = "rgb(139, 0, 0)";
        setting_Mail.style.background = "rgb(230, 130, 130)";
        redAlert.style.display = "block";
        return false;

    } else if (setting_Mail.value !== "") {

        setting_Mail.style.borderColor = "transparent";
        setting_Mail.style.background = "white"
        redAlert.style.display = "none";

        return;
    }

}
