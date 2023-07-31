import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

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
  const author = 'Johnny Joey Jones';
  const title = 'Unbroken Bonds of Battle';
  // const img = ;
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/71vKs9fwurL._AC_UL600_SR600,400_.jpg'
        alt='Unbroken Bonds of Battle'
      />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
