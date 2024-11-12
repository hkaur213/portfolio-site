import React from 'react';
import BasicInformation from './components/BasicInfo'; 
import Work from './components/Work'; 
import Skills from './components/Skills';
import Resources from './components/Resources';

function App() {
  return (
    <div className="App">
      <BasicInformation />
      <Work />
      <Skills />
      <Resources />
    </div>
  );
}

export default App;
