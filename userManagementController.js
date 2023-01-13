//This script manages the user profile display page (not the editor)
console.log("User management controller loaded!")

document.getElementById("userPic").src = picPath;
document.getElementById("userName").innerHTML = firstName + " " + lastName;
document.getElementById("userRole").innerHTML = role;
