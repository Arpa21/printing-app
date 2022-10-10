import "./App.css";
import { useState, useEffect } from "react";
import { db, storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { collection, addDoc } from "firebase/firestore";
import { Form } from "./components/Form/Form.jsx";

function App() {
  const [printJobs, setPrintJobs] = useState([]);
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

  useEffect(() => {
    const getPrintJobs = async () => {
      const data = await getDocs(printJobsCollectionRef);
      setPrintJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPrintJobs();
  }, []);


  return (
    <div className="App">
      <Form
        onTitleChange={(e) => setTitle(e.target.value)}
        onCopyNumberChange={(e) => setCopyNumber(e.target.value)}
        onPaperSizeChange={(e) => setPaperSize(e.target.value)}
        onColourChange={(e) => setColour(e.target.value)}
        onSideChange={(e) => setSide(e.target.value)}
        onSubmit={onSubmit}
        paperSize={paperSize}
        colour={colour}
        side={side}
        disabled={title === "" || copyNumber === 0}
      />
      {printJobs
        .slice(-10)
        .map((printJob) => {
          return (
            <div>
              <p>Title: {printJob.title}</p>
              <p>Number of copies: {printJob.copyNumber}</p>
              <p>Paper size: {printJob.paperSize}</p>
              <p>Colour: {printJob.colour}</p>
              <p>Side: {printJob.side}</p>
              <p>Status: {printJob.status}</p>
            </div>
          );
        })
        .reverse()}
      <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload File</button>
    </div>
  );
}

export default App;
