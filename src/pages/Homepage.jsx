import NoteForm from "../components/NoteForm";
import NoteParent from "../components/NoteParent";
import { useNoteData } from "../contexts/NotesContext"


export default function Homepage(props){

	const globalNotesData = useNoteData();
	// const [someData, someFunction] = useContext(SomeContext);

	return (
		<div class="content">
			<h1>Welcome to Nifty Notes!</h1>

			{/* Note Count Component */}
			<h3>You have {globalNotesData.length} notes in storage</h3>

			{/* Note Form Component */}
			<h3>CREATE A NEW NOTE</h3>
			<NoteForm />

			{/* List Of All Notes Component */}
			<h3>ALL NOTES</h3>
			{globalNotesData.map((note) => {
				return(
				<div key={note.id}>
					{/* <NoteDisplay id={note.id} /> */}
					<NoteParent id={note.id} />
				</div>
				);
			})}
		</div>
	)
}