import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db, storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { Form } from "./components/Form/Form.jsx";
import { PrintSummary } from "./components/PrintSummary/PrintSummary.jsx";

function App() {
  const [fileUpload, setFileUpload] = useState(null);
  const [title, setTitle] = useState("");
  const [copyNumber, setCopyNumber] = useState(0);
  const [paperSize, setPaperSize] = useState("A4");
  const [colour, setColour] = useState("Black And White");
  const [side, setSide] = useState("Double");

  const status = ["Queued", "Printing", "Cancelled", "Complete"];

  const printJobsCollectionRef = collection(db, "print-info");

  const uploadFile = () => {
    if (fileUpload === null) return;

    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload);
  };

  const onSubmit = async () => {
    await addDoc(printJobsCollectionRef, {
      title: title,
      copyNumber: copyNumber,
      paperSize: paperSize,
      colour: colour,
      side: side,
      status: status[Math.floor(Math.random() * status.length)],
    });
  };

  return (
    <div className="App">
      <Form
        onTitleChange={(e) => setTitle(e.target.value)}
        onCopyNumberChange={(e) => setCopyNumber(e.target.value)}
        onPaperSizeChange={(e) => setPaperSize(e.target.value)}
        onColourChange={(e) => setColour(e.target.value)}
        onSideChange={(e) => setSide(e.target.value)}
        onSubmit={onSubmit}
        onFileChange={(e) => setFileUpload(e.target.files[0])}
        onFileUpload={uploadFile}
        paperSize={paperSize}
        colour={colour}
        side={side}
        disabled={title === "" || copyNumber === 0}
      />

      <PrintSummary />
    </div>
  );
}

export default App;
