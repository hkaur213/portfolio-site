import React from 'react';
import BasicInformation from './components/BasicInfo'; 
import Work from './components/Work'; 
import DeveloperSetup from './components/DeveloperSetup';
import Skills from './components/Skills';
import Resources from './components/Resources';

function App() {
  return (
    <div className="App">
      <BasicInformation />
      <Work />
      <DeveloperSetup />
      <Skills />
      <Resources />
    </div>
  );
}

export default App;
