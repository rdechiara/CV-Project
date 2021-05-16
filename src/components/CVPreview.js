import React from 'react';
import './CVPreview.css'
export class CVPreview extends React.Component
{
    render()
    {
        return (
            <div>
                <section>
                    <h3>Dati anagrafici</h3>
                    <p><strong>Nome: </strong>{localStorage.getItem(`firstname`)}</p>
                    <p><strong>Cognome: </strong>{localStorage.getItem(`surname`)}</p>
                    <p><strong>Data di nascita: </strong>{localStorage.getItem(`birthdate`)}</p>
                    <p><strong>Sesso: </strong>{localStorage.getItem(`gender`) === `uomo`? `M` : `F`}</p>
                    <p><strong>Nazionalità: </strong>{localStorage.getItem(`nationality`)}</p>
                </section>
                <section>
                    <h3>Esperienze Professionali</h3>
                    <p><strong>Posizione/Ruolo: </strong>{localStorage.getItem(`posizione`)}</p>
                    <p><strong>Azienda/Datore di lavoro: </strong>{localStorage.getItem(`datore`)}</p>
                    <p><strong>Sede di lavoro: </strong> {localStorage.getItem(`city`)},
                    { localStorage.getItem(`nazione`)}</p>
                    <p><strong>Data di inizio: </strong>{localStorage.getItem(`start`) + ` `}
                    <strong>Data di fine rapporto: </strong>{localStorage.getItem(`end`)}</p>
                    <strong>Descrizione</strong>
                    <p> {localStorage.getItem(`mansioni`)} </p>
                </section>
                <section>
                    <h3>Istruzione e Formazione</h3>
                    <p><strong>Titolo di studio: </strong>{localStorage.getItem(`titolo`)}</p>
                    <p><strong>Ente: </strong>{localStorage.getItem(`ente`)}</p>
                    <p><strong>Luogo: </strong>{localStorage.getItem(`città`)},
                     {` ` + localStorage.getItem(`paese`)}</p>
                    <p><strong>Data di inizio: </strong>{localStorage.getItem(`inizio`) + ` `}
                    <strong>Data di fine: </strong>{localStorage.getItem(`fine`)}</p>
                    <strong>Competenze acquisite</strong>
                    <p>{localStorage.getItem(`competenze`)}</p>
                </section>
            </div>
        )
    }
}
