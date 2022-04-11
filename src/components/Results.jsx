import React from 'react';

export const Results = (props) => {
    const options = props.results.map(r => (
        // <li key={r.mal_id}>
        //     {r.title}
        // </li>
        <div style = { cardStyle }>
        <img src = { r.image_url } alt={ r.title } style={ imgStyle }/>
        <p> { r.title } </p> 
        </div>
    ));
    return (<div style = { cards } > { options } </div>);
};

const cardStyle = {
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    transition: '0.3s',
    borderRadius: '5px',
    width: '60%',
    float: 'left',
    margin: 'auto',
    textAlign: 'center'
};

const cards = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: 'auto',
    gridGap: '1rem'
};

const imgStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '80%',
    padding: '5px',
};

export default Results;