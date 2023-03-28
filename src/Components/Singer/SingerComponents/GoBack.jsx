import React from 'react'
import { useNavigate } from 'react-router';

const GoBack = () => {

    const navigate = useNavigate();

    return (
        <div className='go-back-box'>
            <button className='go-back' onClick={() => navigate('/')}>Go back</button>
        </div>
    )
}

export default GoBack