import React from 'react';

const DogEntry = (props) => {
  return (
    <div className="list-entry">
      <h3>{props.dog.name} </h3>
      <div>{props.dog.origin}</div>
      <div className="photo">
        <img src={props.dog.image.url} />
      </div>
      <button>Add to Favorites</button>
      <button>More info</button>
    </div>
  )
};

export default DogEntry;