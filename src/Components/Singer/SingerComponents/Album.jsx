import React from 'react'
import { v4 as uuidv4 } from 'uuid';

const AlbumMap = ({ singerAlbum }) => {
    return (
        <div>
            <p className='description'><span className='about-singer'>About Singer: </span> {singerAlbum.description}</p>
            {singerAlbum.album.map(item => {
                return (
                    <div className='link-box' key={uuidv4()}>
                        <p className='about-singer'>{item.title}: </p>
                        <a className='links' href={item.link}>{item.link}</a>
                    </div>
                )
            })}
        </div>
    )
}

export default AlbumMap