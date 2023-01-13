/*
-------------------------------Info----------------------------------
This is the agenda controller script
It's responsible for handling the dynamic features of the agenda page.

When the user submits the form with item details, this script will
process the data into variables, construct the appropriate
element structure, and then modify the document by adding a little
rectangle underneath the specified category with details of the item.

It also attaches an event handler to the delete button on the rectangle,
which, when clicked, will seek and destroy its parent element, and therefore
remove the item entry on the agenda.
*/

console.log("Agenda controller loaded!");

function processFormData(event){

    event.preventDefault();

    eventName = document.getElementById("eventName").value;
    eventDescription = document.getElementById("eventDescription").value;
    eventType = document.getElementById("eventType").value;

    addAgendaItem(eventName, eventDescription, eventType);
}

function addAgendaItem(name, description, type){

    var itemDiv = document.createElement("div");
    itemDiv.id = currentItemIndex;
    itemDiv.className = "item";

    var itemName = document.createElement("span");
    itemName.className = "itemName";
    itemName.innerHTML = name;

    var itemDescription = document.createElement("span");
    itemDescription.className = "itemDescription";
    itemDescription.innerHTML = description;

    var itemButton = document.createElement("button");
    itemButton.className = "itemDelete";
    itemButton.innerHTML = "Delete";

    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemDescription);
    itemDiv.appendChild(itemButton);

    itemButton.whichParent = type;
    itemButton.whichTargetID = currentItemIndex;

    if (type == "Pinned"){
        document.getElementById("pinnedList").appendChild(itemDiv);
    }

    else if (type == "Late"){
        document.getElementById("lateList").appendChild(itemDiv);
    }

    else if (type == "Upcoming"){
        document.getElementById("upcomingList").appendChild(itemDiv);
    }
    
    itemButton.addEventListener("click", deleteItem);

    currentItemIndex += 1;
    saveEventData();
}

function deleteItem(event){

    var type = event.target.whichParent;
    var targetID = event.target.whichTargetID;

    var targetItem = document.getElementById(targetID);

    if (type == "Pinned"){
        document.getElementById("pinnedList").removeChild(targetItem);
    }

    else if (type == "Late"){
        document.getElementById("lateList").removeChild(targetItem);
    }

    else if (type == "Upcoming"){
        document.getElementById("upcomingList").removeChild(targetItem);
    }
}

window.onload = () => {
    document.getElementById("addEventButton").addEventListener("click", processFormData);
}