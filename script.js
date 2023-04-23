function checkForBlank() {

    if (document.getElementById('iMail').value == "") {

        let setting_Mail = document.getElementById('iMail');
        setting_Mail.style.borderColor = "rgb(139, 0, 0)";
        setting_Mail.style.background = "rgb(230, 130, 130)";
        return false;
    }
}