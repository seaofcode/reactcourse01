import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const author = 'Johnny Joey Jones';
const title = 'Unbroken Bonds of Battle';
const img = './images/book1.jpg';

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
