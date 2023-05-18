import NoteDisplay from "../components/NoteDisplay";
import { useNoteData } from "../contexts/NotesContext"


export default function Homepage(props) {

    const globalNotesData = useNoteData();

    return (
        <div>
            <h1>Nitfy Notes</h1>

            {/* Note Count Component */}
            <h3>We have {globalNotesData.length} notes in storage</h3>

            {/* Note Form Component */}

            {/* List of All Notes Component */}
            <h3>List of all notes:</h3>
            {globalNotesData.map((note) => {
                return (
                <div key={note.id}>
                    <NoteDisplay id={note.id} />
                </div>
                )
            })}
        </div>
    )
}