import { createContext, useContext, useEffect, useReducer } from "react";
import { useLocalStorage } from "react-use";

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
        case "setup": 
        console.log("Apply persistent data to state now.");
        // instructions.data is provided when the dispatch function is called
        stateEditable = instructions.data;
        // Data that is returned is now the newest version of state
        return stateEditable;
        case "create":
            console.log("To do:");

            let newNote = instructions.newNote;
            stateEditable.push(newNote);

            return stateEditable;

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

// Set reducer state and reducer dispatch to global availability
export const NoteDataContext = createContext(null);
export const NoteDispatchContext = createContext(null);

// Custom hooks that provide direct access to a reducer switch case
export function useNoteData() {
    return useContext(NoteDataContext);
}

export function useNoteDispatch() {
    return useContext(NoteDispatchContext);
}

// Set up provider to make data available globally. The provider wraps around the component tree so any child component
// has access to the note data via useNoteData and useNoteDispatch
export default function NotesProvider(props) {
    const [notesData, notesDispatch] = useReducer(notesReducer, initialNotesData);

    const[persistentData, setPersistentData] = useLocalStorage("notes", initialNotesData);

    useEffect(() => {
        // On app start, overwrite notesData with persistentData
        notesDispatch({type: "setup", data: persistentData});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Confirm local storage is updating
    useEffect(() => {
        console.log("Local storage: " + persistentData);
    }, [persistentData]);

    // If the dispatch function runs, autosave changes to notes from reducer state into local storage
    useEffect(() => {
        setPersistentData(notesData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notesData]);

    return (
        <NoteDataContext.Provider value={notesData}>
            <NoteDispatchContext.Provider value={notesDispatch}>
                {props.children}
            </NoteDispatchContext.Provider>
        </NoteDataContext.Provider>
    )

}