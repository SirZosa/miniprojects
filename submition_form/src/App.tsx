import { useState } from 'react'
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
        <label htmlFor="file">Resume</label>
        <label htmlFor="file">Upload Resume*</label>
        <input type="file" name="file" id="file" onChange={(e) => setFile(prev => {
          if (e.target.files && e.target.files.length) {
            return e.target.files[0]
          }
          return prev
        })} placeholder='Upload resume' required />
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
    
    </>

  )
}

export default App
