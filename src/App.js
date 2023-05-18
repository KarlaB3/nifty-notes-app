import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/notes" element={<h1>to do</h1>} />
        <Route path="/notes/:noteID" element={<h1>to do</h1>} />
        <Route path="/notes/:noteID/edit" element={<h1>to do</h1>} />
        <Route path="/searchByWord/:word" element={<h1>to do</h1>} />
        <Route path="/sort/duedate" element={<h1>to do</h1>} />
        <Route path="/sort/createddate" element={<h1>to do</h1>} />
        <Route path="/filter/overdue" element={<h1>to do</h1>} />
        <Route path="/filter/done" element={<h1>to do</h1>} />
      </Routes>

    </div>
  );
}

export default App;
