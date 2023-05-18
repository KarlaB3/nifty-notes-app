import { useEffect, useRef, useState } from "react"
import { useNoteData } from "../contexts/NotesContext";

export default function NoteDisplay(props) {

    const {id} = props;
    const [localNote, setLocalNote] = useState({});

    const globalNotesData = useNoteData();

    useEffect(() => {
        // On start, find the note in globalNotesData that has an ID match props.id

        setLocalNote(globalNotesData.find(globalSpecificNote => {
            return globalSpecificNote.id === id;
        }));

    }, [globalNotesData, id])


    return (
        <div>
            <h4>{localNote.title}</h4>
            <p>{localNote.description}</p>
            <p>{localNote.isCompleted ? "COMPLETE" : "NOT YET COMPLETE"}</p>
            <input type="checkbox" disabled="disabled" value={localNote.isCompleted}/>
            <h5>Due Date: {new Date(localNote.dueDate).toLocaleString()}</h5>
            <h5>Created At: {new Date(localNote.createdAtDate).toLocaleString()}</h5>
        </div>
    )
}
