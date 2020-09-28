import React from 'react';
import './App.css';
import Top from './landingpage/Top';
import Header from './landingpage/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header />
      <br /><br />
      <Top />
      <h1>Belajar React Di Hari Jumat</h1>
      <Footer pesanDariProps="Ini Pesan Dari Props" />
    </div>
  );
}

export default App;
