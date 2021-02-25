import React, {useContext, useState} from 'react'
import { GrudgeContext } from '../GrudgeContext'

const NewGrudge =React.memo(() =>{
    const [person, setPerson] = useState('')
    const [reason, setReason] = useState('')
    const {AddGrudge} = useContext(GrudgeContext)
    

    function handlePersonChange(event){
        setPerson(event.target.value)
    }

    function handleReasonChange(event){
        setReason(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault()
        AddGrudge({person, reason})
    }

    return(
        <div>
            <form onSubmit = {handleSubmit} className = "NewGrudge">
                <input 
                    type = "text"  
                    placeholder = "Person" 
                    className = "NewGrudge-input"  
                    onChange = {handlePersonChange}
                    value = {person}
                    />
                <input 
                    type = "text" 
                    placeholder = "Reason" 
                    className = "NewGrudge-input" 
                    onChange = {handleReasonChange} 
                    value = {reason}
                    />
                <input type  = "submit" placeholder = "Submit" className = "NewGrudge-submit button" />
            </form>
        </div>
    )
})
export default NewGrudge