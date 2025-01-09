import { useState, useEffect } from 'react'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './App.css'

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("male");
  const [file, setFile] = useState<File | null>();
  const [url, setUrl] = useState("");
  const [choice, setChoice] = useState("");
  const [about, setAbout] = useState("");
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pdfUrl, setPdfUrl] = useState("");

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

  function submitForm(e: React.FormEvent){
    e.preventDefault();
    alert("Form submitted");
  }
 
  function resetForm(e: React.FormEvent){
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhoneNumber("");
    setFile(null);
    setUrl("");
    setAbout("");
  }

  useEffect(()=>{
    console.log(pdfUrl)
  },[pdfUrl])

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const pdfFile = event.target.files?.[0];
    if (pdfFile) {
      setFile(pdfFile);
      setPdfUrl(URL.createObjectURL(pdfFile));
    }
  }

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <>
      <h1>Form in React</h1>
      <form onSubmit={submitForm}>
        <label htmlFor="firstName">First Name</label>
        <input required type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Jonh'/>
        <label htmlFor="lastName">Last Name</label>
        <input required type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Johnson'/>
        <label htmlFor="email">Email</label>
        <input required type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='user@email.com'/>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input required type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='999-999-9999'/>
        <label htmlFor="gender">Gender</label>
        <div className="genders">
          Male
          <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}/>
          Female
          <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}/>
          Other
          <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)}/>
        </div>
        <label htmlFor="Upload resume">Upload Resume*</label>
        <input type="file" name="Upload Resume"accept="application/pdf" onChange={onFileChange} />
        <label htmlFor="url">LinkedIn Profile</label>
        <input type="text" name="url" id="url" value={url} onChange={(e) => setUrl(e.target.value)} placeholder='www.linkedin.com/in/user-id'/>
        <label htmlFor="choice">How did you hear about us?</label>
        <select name="choice" id="choice" value={choice} onChange={(e) => setChoice(e.target.value)}>
          <option value="friend">Friend</option>
          <option value="socialMedia">Social Media</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="About">About you</label>
        <textarea name="about" value={about} id="about" placeholder='Something about you...' onChange={(e) => setAbout(e.target.value)}></textarea>
        <div className="buttons">
          <button>SUBMIT</button>
          <button onClick={resetForm}>RESET</button>
        </div>
      </form>
      {pdfUrl && (
        <div>
          <h2>PDF Visualizer</h2>
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(new Array(numPages), (el, index) => (
              <Page key={`page_${index + 1}`} pageNumber={index + 1} />
            ))}
          </Document>
        </div>
      )}
    </>

  )
}

export default App
