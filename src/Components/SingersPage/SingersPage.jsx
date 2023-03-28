import React from 'react';
import { useSelector } from 'react-redux';
import { selectSingersState } from '../../Redux/Slices/singerSlice';
import { Link } from "react-router-dom";
import "../SingersPage/SingersPage.css";

const SingersPage = () => {

    const { singers } = useSelector(selectSingersState);

    return (
        <div className='singers-page'>
            <h1 className='singers'>Singers</h1>
            {singers.map(singer => {
                return (
                    <div key={singer.id} className="singers-box">
                        <p className='name'>{singer.name}</p>
                        <div className='img-box'>
                            <Link to={`${singer.name}`}><img src={singer.src} alt="" /></Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default SingersPage