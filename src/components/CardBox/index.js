import React from 'react';
import Post from '../Post/index';
import Data from '../../Data/data';
import './style.css';

const CardBox = (props) => {
    let button = props.number;
    let DATA_FILTER = Data.filter(element => element.address === button);
  return (
    <section className="posts">
      {DATA_FILTER.map((element) => (
        <Post key={element.id} imageUrl={element.imageUrl} image={element.image} title={element.title} />
      ))}
    </section>
  );
};

export default CardBox;