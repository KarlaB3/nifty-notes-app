
// Set up initial data structure for Notes
const initialNotesData = [
    {
        id: 1,
        title: "Welcome to the Nifty Notes note taking app!",
        description: "Create your notes here",
        isCompleted: false,
        dueDate: new Date().setDate(new Date().getDate() + 1), // Get current time, but one day ahead in the future
        createdAtDate: Date.now() // Set note created date to today
    }
]

// Return new state, which is edited based on instructions provided
const notesReducer = (previousState, instructions) => {
    let stateEditable = [...previousState];

    switch (instructions.type){
        case "create":
            console.log("To do: create note and add to state");
            break;
        case "update":
            console.log("To do: update a specific note and overwrite the current state of the note");
            break;
        case "delete":
            console.log("To do: delete note from state");
            break;
        case "sortByDueDate":
            console.log("To do: sort notes by due date using state data");
            break;
        case "sortByCreatedDate":
            console.log("To do: sort notes by created date using state data");
            break;
        case "sortById":
            console.log("To do: sort notes by ID key. This is the default order.");
            break;
        default:
            console.log("Invalid instruction type provided, it was " + instructions.type);
            return previousState;
    }
}