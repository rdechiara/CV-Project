import React from 'react';
import './SocialSkills.css';
class SocialSkills extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            compiled: false,
        }
    }

    render()
    {
        return (
            <form>
                <h2>Competenze interpersonali</h2>
                <h3>Descrivi le tue competenze linguistiche e digitali</h3>
                <label htmlFor="mothertongue">Lingua Madre</label>
                <input type="text" name="mothertongue" placeholder="Seleziona" required></input>
    
                <label htmlFor="otherlang">Altra lingua</label>
                <input type="text" name="otherlang" placeholder="Seleziona"required></input>
                <h3>Comprensione</h3>
                <label htmlFor="ascolto">Ascolto</label>
                <select name="ascolto">
                    <option value="A1"> A1</option>
                    <option value="A2"> A2</option>
                    <option value="B1"> B1</option>
                    <option value="B2"> B2</option>
                    <option value="C1"> C1</option>
                    <option value="C2"> C2</option>
                </select>
                <label htmlFor="lettura">Lettura</label>
                <select name="lettura">
                    <option value="A1"> A1</option>
                    <option value="A2"> A2</option>
                    <option value="B1"> B1</option>
                    <option value="B2"> B2</option>
                    <option value="C1"> C1</option>
                    <option value="C2"> C2</option>
                </select>
                <h3>Espressione Orale</h3>
                <label htmlFor="interazione">Interazione orale</label>
                <select name="inteazione">
                    <option value="A1"> A1</option>
                    <option value="A2"> A2</option>
                    <option value="B1"> B1</option>
                    <option value="B2"> B2</option>
                    <option value="C1"> C1</option>
                    <option value="C2"> C2</option>
                </select>
                <label htmlFor="produzione">Produzione</label>
                <select name="produzione">
                    <option value="A1"> A1</option>
                    <option value="A2"> A2</option>
                    <option value="B1"> B1</option>
                    <option value="B2"> B2</option>
                    <option value="C1"> C1</option>
                    <option value="C2"> C2</option>
                </select>
                <h3>Scrittura</h3>
                <label htmlFor="scrittura">Produzione scritta</label>
                <select name="scrittura">
                    <option value="A1"> A1</option>
                    <option value="A2"> A2</option>
                    <option value="B1"> B1</option>
                    <option value="B2"> B2</option>
                    <option value="C1"> C1</option>
                    <option value="C2"> C2</option>
                </select>
               
                <h3>Competenze digitali</h3>
                <label htmlFor="digital">Competenze digitali</label>
                <textarea name="digital" rows="5" placeholder="Descrivere le proprie capacità informatiche"></textarea>
                {/*<button onClick={this.props.handleClick}>{`Avanti >`}</button>*/}
            </form>
        );
    }
}
export default SocialSkills;