import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){

  return (
    <div>
        <h2>I like {name}  </h2>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name} />
    </div>
  )
}

const foodLike = [
  {
    id:1,
    name: "kimchi",
    image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.tzydFiWcxH-O7yWJzKD9tgHaEK%26pid%3DApi&f=1',
    rating:5
  },
  {
    id:2,
    name:'Samgyeopsal',
    image:'https://cdn.pixabay.com/photo/2016/04/05/09/17/pork-1308988_1280.jpg',
    rating:4.5
  },
  {
    id:3,
    name:'Bibimbap',
    image:'https://cdn.pixabay.com/photo/2016/10/13/19/15/bibimbap-1738580_1280.jpg',
    rating:2
  },
  {
    id:4,
    name:'Doncasu',
    image:'https://cdn.pixabay.com/photo/2016/09/23/23/23/restaurant-1690696_1280.jpg',
    rating:3.5
  },
  {
    id:5,
    name:'Kimbap',
    image:'https://cdn.pixabay.com/photo/2015/06/09/15/12/kim-rice-803637_1280.jpg',
    rating:3
  }

];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />;
// }

// 화살표함수
//const renderFood = (dish)=> <Food name={dish.name} picture={dish.image} />

function App() {
  
  return (
    <div> 
      {foodLike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        )
      )}

      {/*map() 인자로 함수로 변경 */}
      {/* {foodLike.map(renderFood)} */}

    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating:PropTypes.number
};

export default App;