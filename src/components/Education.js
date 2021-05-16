import React from 'react';
import './Education.css';
class Education extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            compiled: false
        }
    }

    render()
    {
        return (
        <div>
            <h3>Istruzione e Formazione</h3>
            <label htmlFor="titolo">Titolo di studio</label>
            <input type="text" placeholder="Titolo di studio conseguito" name="titolo" required></input>
            <label htmlFor="ente">Ente che fornisce istruzione e formazione</label>
            <input type="text" placeholder="" name="ente" required></input>
            <label htmlFor="città">Città</label>
            <input type="text" placeholder="Città ove ha sede l'ente" name="città" required></input>
            <label htmlFor="paese">Paese</label>
            <input type="text" placeholder="Nazione ove ha sede l'ente" name="paese" required></input>
            <label htmlFor="inizio">Data di inizio</label>
            <input type="date" name="inizio" required></input>
            <label htmlFor="fine">Data di fine</label>
            <input type="date" name="fine" required></input>
            <label htmlFor="mansioni">Principali competenze acquisite</label>
            <textarea placeholder="Descrivi le competenze acquisite durante il percorso di studi" rows="5"></textarea>
            <button onClick={this.props.handleClick}>{`Avanti >`}</button>
        </div>
        );
   
    }
}
export default Education;