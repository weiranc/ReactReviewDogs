import React from 'react';
import DogEntry from './DogEntry';

const DogList = (props) => {
  return (
    <div className="list">
      {props.dogs.map((dog, i) => (
        <DogEntry
          dog={dog}
          key={i}
        />
      ))}
    </div>
  )
}

export default DogList;