import React from 'react';
import DogEntry from './DogEntry';

const DogList = (props) => {
  return (
    <div className="list">
      {props.dogs.map((dog, i) => (
        <DogEntry
          dog={dog}
          key={i}
          handleAddtoFavorites={props.handleAddtoFavorites}
        />
      ))}
    </div>
  )
}

export default DogList;