import React from 'react';
import './ProfessionalExperience.css'
class ProfessionalExperience extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            compiled: false
        };
    }

    render()
    {
        return (
            
            <form>
                <h3>Nuova esperienza professionale</h3>
                <label htmlFor="posizione">Occupazione o posizione ricoperta</label>
                <input type="text" placeholder="Titolo dell'occupazione" name="posizione" required></input>
                <label htmlFor="datore">Datore di lavoro</label>
                <input type="text" placeholder="" name="datore" required></input>
                <label htmlFor="città">Città</label>
                <input type="text" placeholder="Luogo di lavoro" name="city" required></input>
                <label htmlFor="paese">Paese</label>
                <input type="text" placeholder="Nazione di lavoro" name="nazione" required></input>
                <label htmlFor="inizio">Data di inizio</label>
                <input type="date" name="start" required></input>
                <label htmlFor="fine">Data di fine</label>
                <input type="date" name="end" required></input>
                <label htmlFor="mansioni">Principali attività e responsabilità</label>
                <textarea placeholder="Descrivi i tuoi compiti e responsabilità" name="mansioni" rows="5"></textarea>
                
                {/*<button onClick={this.props.handleClick}>{`Avanti >`}</button>*/}
             
            </form>
        );
    }
}

export default ProfessionalExperience;