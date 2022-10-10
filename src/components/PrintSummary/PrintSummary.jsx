import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";

export const PrintSummary = () => {
  const [printJobs, setPrintJobs] = useState([]);

  let navigate = useNavigate();

  const printJobsCollectionRef = collection(db, "print-info");

  useEffect(() => {
    const getPrintJobs = async () => {
      const data = await getDocs(printJobsCollectionRef);
      setPrintJobs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPrintJobs();
  }, []);

  return (
    <div>
      <button onClick={() => navigate("/")}>Back</button>
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
    </div>
  );
};
