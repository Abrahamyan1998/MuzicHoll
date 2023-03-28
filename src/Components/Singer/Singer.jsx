import React from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { selectSingersState } from '../../Redux/Slices/singerSlice';
import Album from './SingerComponents/Album';
import "../Singer/Singer.css"
import GoBack from './SingerComponents/GoBack';

const Singer = () => {

    const { name } = useParams();
    const { singers } = useSelector(selectSingersState);
    const singersFilter = singers.filter(singer => singer.name === name);

    return (
        <div className='singer'>
            <h1 className='singers'>Singer</h1>
            {singersFilter.length > 0 ? singersFilter.map(singer => {
                return (
                    <div key={singer.id} className="singer-box">
                        <p className='name singer-name'>{singer.name}</p>
                        <Album singerAlbum={singer} />
                        <GoBack />
                    </div>
                )
            }) : <GoBack />}
        </div>
    )
}

export default Singer