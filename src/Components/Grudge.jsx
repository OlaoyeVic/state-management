import React from 'react';
import { useContext } from 'react'
import { GrudgeContext } from '../GrudgeContext';

function Grudge({grudge}){
    const {checkForgiven} = useContext(GrudgeContext)

    const forgive = () =>{
        checkForgiven(grudge.id)
    }

    return(
        <article className = "Grudge">
            <h3>{grudge.person}</h3>
            <p>{grudge.reason}</p>
            <div className = "Grudge-controls">
                <label className = "Grudge-forgiven">
                    <input type = "checkbox" checked = {grudge.forgiven} onChange = {forgive} />
                    {''}Forgiven
                </label>
            </div>
        </article>
    )
}
export default Grudge