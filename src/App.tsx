import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {

  return (
    <div className="app">
      <header>
        <Header />
      </header>
      <main>
        <Table />
      </main>
    </div>
  );
}

export default App;
