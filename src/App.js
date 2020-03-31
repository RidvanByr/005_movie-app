import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Navbar';
import GeneralWiew from './components/GeneralWiew'



function App() {
  return (
    <div className="container">
      <Header />
      <GeneralWiew />
    </div>
  );
}

export default App;
