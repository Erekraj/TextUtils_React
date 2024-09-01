
import { useState } from 'react';
import './App.css';
// import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  return (
    <>
    
<Navbar title="TextUtils" />
<div className="container my-3">
<TextForm heading = "Enter Text To Analyze"/>
{/* <Aboutus/> */}
<TextForm/>
</div>
</>
);
}

export default App;
