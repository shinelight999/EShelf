/*
-------------------------------Info----------------------------------
This is the index controller script
If the profile data for the user has been updated by the user, then the
script will change the threatening message that tells the user to sign up
into a compliment that welcomes them.
*/

console.log("Index controller loaded!")

if (needsUpdate == false) {
    document.getElementById("welcomeMessage").innerHTML = "Welcome to eShelf, " + firstName + " " + lastName + "!";
    document.getElementById("needToRegister").innerHTML = "Looking sharp today!";
}
