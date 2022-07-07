import React from 'react';

export const Results = (props) => {
    const options = props.results.map(r => (
        // <li key={r.mal_id}>
        //     {r.title}
        // </li>
        <div className='cardStyle'>
        <img src = { r.images.jpg.image_url } alt={ r.title } className="imgStyle"/>
        <a href={r.url} target="_blank"> { r.title } </a> 
        </div>
    ));
    return (<div className='cards' > { options } </div>);
};

export default Results;