import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {PersonalDataForm} from './components/PersonaDataForm';
import ProfessionalExperience from './components/ProfessionaExperience';
import Education from './components/Education';
import {CVPreview} from './components/CVPreview';

class App extends React.Component
{


  handleClick = (e) =>
  {  
      e.preventDefault();
      localStorage.clear();
      const inputs = [...document.querySelectorAll(`input`)];
      inputs.forEach((input) =>
      {
          localStorage.setItem(input.name, input.value);
      });

      const options = document.querySelector(`select`);
      localStorage.setItem(options.name, options.value);

      const textareas = [...document.querySelectorAll(`textarea`)];
      textareas.forEach((area) =>{
        localStorage.setItem(area.name, area.value);
      });

    ReactDOM.render(<CVPreview/>, document.getElementById(`root`));
  }
  render()
  {
    return (
      <div>
        <h1> Genera CV</h1>
        <PersonalDataForm handleClick={this.handleClick}/>
        <ProfessionalExperience handleClick={this.handleClick}/>
        <Education handleClick={this.handleClick}/>
   
      </div>
    );
    }
}

export default App;
