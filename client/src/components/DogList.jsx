import React from 'react';
import DogEntry from './DogEntry';

const DogList = ({dogs, handleFavorite}) => {
  const dogEntries = dogs.map(dog => (
    <DogEntry
      key = {dog.id}
      dog = {dog}
      handleFavorite={handleFavorite}
    />
  ));

  return (
    <div className="list">
      {dogEntries}
    </div>
  );
}

export default DogList;