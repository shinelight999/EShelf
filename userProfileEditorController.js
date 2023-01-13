/*
-------------------------------Info----------------------------------
This is the user profile editor controller script
It's responsible for controlling the handling of profile data
harvested from the forms.

After the user agrees to have their data sold,
then the script will load the profile field values into
their respective global variables, and tell
the storage controller to save these values into session storage.
*/

console.log("User profile editor controller loaded!");


function processFormData(event){

    event.preventDefault();

    picPath = document.getElementById("formPicture").value;
    picPath = picPath.replace(/^.*\\/, "")
    firstName = document.getElementById("formFirstName").value;
    lastName = document.getElementById("formLastName").value;
    role = document.getElementById("formRole").value;
    address = document.getElementById("formAddress").value;
    dateOfBirth = document.getElementById("formDOB").value;
    needsUpdate = false;

    console.log(role);
    console.log(picPath.replace(/^.*\\/, ""))

    saveProfileData();
}

function loadSavedFormFields(){
    /*
    document.getElementById("formPicture").value = picPath;
    document.getElementById("formFirstName").innerHTML = firstName;
    document.getElementById("formLastName").innerHTML = lastName;
    document.getElementById("formRole").value = role;
    document.getElementById("formAddress").innerHTML =  address;
    document.getElementById("formDOB").innerHTML = dateOfBirth;
    */
}

function haltAndCatchFire(event){
    event.preventDefault();
    defaultProfileData();
}


window.onload = () => {
    document.getElementById("consentButton").addEventListener("click", processFormData);
    document.getElementById("nukeDefaultButton").addEventListener("click",haltAndCatchFire);
    loadSavedFormFields();
}