import React from 'react'
import { GrudgeContext } from '../GrudgeContext'
import { useContext } from 'react'
import Grudge from './Grudge'

function Grudges(){
    const {grudges} = useContext(GrudgeContext)
    return(
        <section className = "Grudges">
            <h2>Grudges: {grudges.length}</h2>
            {grudges.map(grudge =>{
                return(
                    <Grudge key = {grudge.id} grudge = {grudge} />
                )  
            })}
        </section>
    )
}
export default Grudges