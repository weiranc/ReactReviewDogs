import React from 'react';
// LESS INFO

const DogEntry = ({dog, handleFavorite}) => {
  return (
    <div className="list-entry">
      <div className="info">
        <h3>{dog.name}</h3>
        <button onClick={() => {handleFavorite(dog)}}>Add to Favorites</button>
        <button>More info</button>
      </div>
      <div className="photo">
        <img src={dog.image.url}/>
      </div>
    </div>
  )
}

// MORE INFO
{/* <div class="list-entry">
  <div class="info">
    <h3>Dog Entry Name</h3>
    <div>Origin: Dog Entry Origin</div>
    <div>Bred For: Dog Entry Bred For</div>
    <div>Temperament: Dog Entry Temperament</div>
    <button>Add to Favorites</button>
    <button>Less info</button>
  </div>
  <div class="photo">
    <img src=Dog Entry Photo Url />
  </div>
</div> */}

export default DogEntry;