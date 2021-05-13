import React from 'react';
import './PersonaDataForm.css';

export class PersonalDataForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            name: undefined,
            surname: undefined,
            birthdate: undefined,
            gender: undefined,
            nationality: undefined
        };
    }

    render()
    {
        return (
            <form>
                
                <label htmlFor="name">Nome*</label>
                <input type="text" name="name" required></input>
                
                <label htmlFor="surname">Cognome*</label>
                <input type="text" name="surname" required></input>

                <label htmlFor="birthdate">Data di nascita</label>
                <input type="date" required name="birthdate"></input>

                <label htmlFor="gender">Sesso</label>
                <select name="gender">
                    <option value="uomo">M</option>
                    <option value="donna">F</option>
                </select>

                <label htmlFor="nationality">Nazionalità</label>
                <input type="text" required></input>
                <button onClick={this.props.handleClick}>{`Avanti >`}</button>
            </form>
        );
    }
}