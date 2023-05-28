import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteDisplay from "./NoteDisplay";


export default function NoteParent(props){

	const [editMode, setEditMode] = useState(false);

	const toggleEditMode = () => {
		setEditMode(!editMode);
	}


	return(
		<div>
			{editMode ? <NoteForm id={props.id} /> : <NoteDisplay id={props.id} />}
			<button class="note-button" onClick={toggleEditMode}>Toggle Note Editing</button>
		</div>
	)
}