/*
-------------------------------Info----------------------------------
This is the storage controller script
It handles all the saving, loading, parsing, deleting, and everything
with regards to our local storage.

This script is ALWAYS loaded before page-specific controller
scripts, so that we can utilize the functions in this script,
and not have to rewrite them in every single page controller.
(Like a library!)
*/

console.log("Storage controller loaded!");

//-----------------------Global Variables and Init------------------------------

var needsInit = sessionStorage.needsInit;
var needsUpdate;

var picPath;
var firstName;
var lastName;
var role;
var address;
var dateOfBirth;
var ssn;
var maidenName;
var creditCardNumber;
var expDate;
var cvv;

var currentItemIndex;

var pinnedEventList;
var lateEventList;
var upcomingEventList;

//Check if the profile has been initialized
//If it hasn't, then feed default values into it

if (needsInit == undefined){
    defaultProfileData();
    needsInit = JSON.parse(sessionStorage.needsInit);
    needsUpdate = JSON.parse(sessionStorage.needsUpdate);

}

//If it has, then load data into variables
else {
    loadProfileData();
    loadEventData();
    needsInit = JSON.parse(sessionStorage.needsInit);
    needsUpdate = JSON.parse(sessionStorage.needsUpdate);
}

//----------------------Storage Interface Functions-------------------


function defaultProfileData() {
    //Initializes default profile values and event data
    picPath = "./userPic.jpg"
    firstName = "Big";
    lastName = "Doggo";
    role = "Faithful Puppy";
    address = "123 Big Road";
    dateOfBirth = "00/00/0000";
    ssn = "000-000-0000";
    maidenName = "None";
    creditCardNumber = "0000 0000 0000 0000";
    expDate = "00/00/0000";
    cvv = 000;

    currentItemIndex = 0;

    needsInit = false;
    needsUpdate = true;

    saveProfileData();
    saveEventData();
}

function loadProfileData() {
    //Sets global profile variables to their locally stored cousins!
    needsInit = JSON.parse(sessionStorage.needsInit);
    needsUpdate = JSON.parse(sessionStorage.needsUpdate);
    picPath = JSON.parse(sessionStorage.picPath);
    firstName = JSON.parse(sessionStorage.firstName);
    lastName = JSON.parse(sessionStorage.lastName);
    role = JSON.parse(sessionStorage.role);
    address = JSON.parse(sessionStorage.address);
    dateOfBirth = JSON.parse(sessionStorage.dateOfBirth);
    ssn = JSON.parse(sessionStorage.ssn);
    maidenName = JSON.parse(sessionStorage.maidenName);
    creditCardNumber = JSON.parse(sessionStorage.creditCardNumber);
    expDate = JSON.parse(sessionStorage.expDate);
    cvv = JSON.parse(sessionStorage.cvv);

}

function saveProfileData() {
    //Saves all the global profile variables into local storage for safe keeping!
    sessionStorage.picPath = JSON.stringify(picPath);
    sessionStorage.firstName = JSON.stringify(firstName);
    sessionStorage.lastName = JSON.stringify(lastName);
    sessionStorage.role = JSON.stringify(role);
    sessionStorage.address = JSON.stringify(address);
    sessionStorage.dateOfBirth = JSON.stringify(dateOfBirth);
    sessionStorage.ssn = JSON.stringify(ssn);
    sessionStorage.maidenName = JSON.stringify(maidenName);
    sessionStorage.creditCardNumber = JSON.stringify(creditCardNumber);
    sessionStorage.expDate = JSON.stringify(expDate);
    sessionStorage.cvv = JSON.stringify(cvv);
    sessionStorage.needsInit =  JSON.stringify(needsInit);
    sessionStorage.needsUpdate = JSON.stringify(needsUpdate);

}

function nukeData() {
    sessionStorage.clear();
}

function loadEventData() {
    currentItemIndex = JSON.parse(sessionStorage.currentItemIndex);
}

function saveEventData() {
    sessionStorage.currentItemIndex = JSON.stringify(currentItemIndex);
}