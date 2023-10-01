
// import { useState } from "react";
// import  storage  from "./Firbaseconfig";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// function ImesUplooo() {
//    // State to store uploaded file
//    const [file, setFile] = useState("");
 
//    // progress
//    const [percent, setPercent] = useState(0);

//    // Handle file upload event and update state
//    function handleChange(event) {
//        setFile(event.target.files[0]);
//    }

//    const handleUpload = () => {
//        if (!file) {
//            alert("Please upload an image first!");
//        }

//        const storageRef = ref(storage, `/files/${file.name}`);

//        // progress can be paused and resumed. It also exposes progress updates.
//        // Receives the storage reference and the file to upload.
//        const uploadTask = uploadBytesResumable(storageRef, file);

//        uploadTask.on(
//            "state_changed",
//            (snapshot) => {
//                const percent = Math.round(
//                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//                );

//                // update progress
//                setPercent(percent);
//            },
//            (err) => console.log(err),
//            () => {
//                // download url
//                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
//                    console.log(url);
//                });
//            }
//        );
//    };

//    return (
//        <div>
//            <input type="file" onChange={handleChange} accept="/image/*" />
//            <button onClick={handleUpload}>Upload to Firebase</button>
//            <p>{percent} "% done"</p>
//        </div>
//    );
// }
 
// export default ImesUplooo;





import { storage } from '../Firebasess';
import React from 'react'
import { useState ,useEffect} from 'react';
import {ref,uploadBytes,getDownloadURL,listAll}from 'firebase/storage'


// import { v4 } from 'uuid';


export default function Uploadedimages() {
const[imagesUpload,setuploadimages]=useState('')
const[imageslist,setimageslistst]=useState([])
const imageLisREF=ref(storage,"images/")
    const UploImages=()=>{
if(imagesUpload ==null)return;
const imagesREf=ref(storage,`images/${imagesUpload.name }`);
uploadBytes(imagesREf,imagesUpload).then(()=>{
    alert('images uploaded')
})
    };
    useEffect(()=>{
        listAll(imageLisREF).then((response)=>{
           // console.log(response)
           response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setimageslistst((prev)=>[...prev,url])
            })
           })
        })
    },[])

  return (
    <div>
    <>
    <div className='mt-2'>
        <h5>welcoe</h5>
           <input type="file" onChange={(event)=>{setuploadimages(event.target.files[0])}}accept="/image/*" />
           <button onClick={UploImages}>Upload to Firebase</button>
            <p> "% done"</p>
            {imageslist.map((url,index)=>{
                return<div key={index}>
                    <img src={url}/>
                    </div>
            })}
        </div>
    </></div>
  )
}
