import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";

export const storage = firebase.storage();

export default function Applod() {
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  function handleChange(e) {
    if (e.target.files[0])
        setFile(e.target.files[0]);
  }

  const handleUpload = async(e)=> {
    e.preventDefault();
    const path = `/images/${file.name}`;
    const ref = storage.ref(path);
    await ref.put(file);
    const url = await ref.getDownloadURL();
    setURL(url);
    setFile(null);
  }

  return (
    <div>
      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      <img src={url} alt="" />
    </div>
  );
}