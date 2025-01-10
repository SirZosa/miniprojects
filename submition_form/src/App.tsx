import { useState } from 'react'
import InputField from './components/input-field/input-field.tsx'
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
    setPdfUrl("");
  }

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
      <div className="container">
        <form onSubmit={submitForm}>
          <InputField type="text" fc={(e)=>setFirstName(e.target.value)}>First Name</InputField>
          <InputField type="text" fc={(e)=>setLastName(e.target.value)}>Last Name</InputField>
          <InputField type="email" fc={(e)=>setEmail(e.target.value)}>Email</InputField>
          <InputField type="tel" fc={(e)=>setPhoneNumber(e.target.value)}>Phone Number</InputField>
          <InputField type='url' fc={(e)=>setUrl(e.target.value)} >LinkedIn</InputField>
          <label className='labels' htmlFor="gender">Gender</label>
          <div className="genders">
            Male
            <input type="radio" name="gender" value="male" id="male" checked={gender === "male"} onChange={(e) => setGender(e.target.value)}/>
            Female
            <input type="radio" name="gender" value="female" id="female" checked={gender === "female"} onChange={(e) => setGender(e.target.value)}/>
            Other
            <input type="radio" name="gender" value="other" id="other" checked={gender === "other"} onChange={(e) => setGender(e.target.value)}/>
          </div>
          <label className='labels' htmlFor="Upload resume">Upload Resume*</label>
          <input type="file" name="Upload Resume"accept="application/pdf" onChange={onFileChange} />
          <label className='labels' htmlFor="choice">How did you hear about us?</label>
          <select name="choice" id="choice" value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="friend">Friend</option>
            <option value="socialMedia">Social Media</option>
            <option value="other">Other</option>
          </select>
          <label className='labels' htmlFor="About">About you</label>
          <textarea name="about" value={about} id="about" placeholder='Something about you...' onChange={(e) => setAbout(e.target.value)}></textarea>
          <div className="buttons">
            <button>SUBMIT</button>
            <button onClick={resetForm}>RESET</button>
          </div>
        </form>
      </div>
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
