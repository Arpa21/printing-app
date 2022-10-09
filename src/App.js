import "./App.css";
import { useState, useEffect } from "react";
import { db, storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { collection, doc, getDocs, addDoc } from "firebase/firestore";

function App() {
  const [printJobs, setPrintJobs] = useState([]);
  const [fileUpload, setFileUpload] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newCopyNumber, setNewCopyNumber] = useState(0);

  const fileListRef = ref(storage, "files/");

  const printJobsCollectionRef = collection(db, "print-info");

  const uploadFile = () => {
    if (fileUpload === null) return;

    const fileRef = ref(storage, `files/${fileUpload.name + v4()}`);
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
  };

  const print = async () => {
    await addDoc(printJobsCollectionRef, {
      title: newTitle,
      copyNumber: newCopyNumber,
    });
  };

  useEffect(() => {
    const getPrintJobs = async () => {
      const data = await getDocs(printJobsCollectionRef);
      setPrintJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPrintJobs();
  }, []);

  useEffect(() => {
    listAll(fileListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="App">
      <input
        placeholder="Title..."
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number of copies..."
        onChange={(e) => setNewCopyNumber(e.target.value)}
      />
      <button onClick={print}>Print</button>
      {printJobs.map((printJob) => {
        return (
          <div>
            <p>Title: {printJob.title}</p>
            <p>Number of copies: {printJob.copyNumber}</p>
          </div>
        );
      })}
      <input
        type="file"
        onChange={(event) => {
          setFileUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload File</button>
      {fileList.map((url) => {
        return <object data={url} width="400" height="300"></object>;
      })}
    </div>
  );
}

export default App;
