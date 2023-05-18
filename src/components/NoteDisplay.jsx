import { useEffect, useRef } from "react"
import { useNoteData } from "../contexts/NotesContext";

export default function NoteDisplay(props) {

    const {id} = props;
    let note = useRef({});

    const globalNotesData = useNoteData();

    useEffect(() => {
        // On start, find the note in globalNotesData that has an ID match props.id
        note.current = globalNotesData.filter(globalSpecificNote => {
        return globalSpecificNote.id === id;
        })
    }, [globalNotesData], id)


    return (
        <div>
            <h4>{note.title}</h4>
            <p>{note.description}</p>
            <p>{note.isCompleted ? "COMPLETE" : "NOT YET COMPLETE"}</p>
            <input type="checkbox" disabled="disabled" value={note.isCompleted}/>
            h5>Due Date: {new Date(note.dueDate).toLocaleString()}</h5>
            <h5>Created At: {new Date(note.createdAtDate).toLocaleString()}</h5>
        </div>
    )
}
