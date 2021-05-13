import React from 'react';

class ProfessionalExperience extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <form>
                <fieldset>
                    <legend>Esperienze professionali</legend>
                    <label htmlFor="posizione">Occupazione o posizione ricoperta</label>
                    <input type="text" placeholder="Titolo dell\'occupazione" name="posizione" required></input>
                    <label htmlFor="datore">Datore di lavoro</label>
                    <input type="text" placeholder="" name="datore" required></input>
                    <label htmlFor="città">Città</label>
                    <input type="text" placeholder="Luogo di lavoro" name="città" required></input>
                    <label htmlFor="paese">Paese</label>
                    <input type="text" placeholder="Nazione di lavoro" name="paese" required></input>
                    <label htmlFor="inizio">Data di inizio</label>
                    <input type="date" name="inizio" required></input>
                    <label htmlFor="fine">Data di fine</label>
                    <input type="date" name="fine" required></input>
                    <button>{`Avanti >`}</button>
                </fieldset>
            </form>
        );
    }
}

export default ProfessionalExperience;