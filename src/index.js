import React from 'react';
import ReactDOM from 'react-dom/client';

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img src='https://images-na.ssl-images-amazon.com/images/I/71vKs9fwurL._AC_UL600_SR600,400_.jpg' />
);
const Title = () => <h2>Unbroken Bonds of Battle</h2>;
const Author = () => {
  return <h2>Johnny Joey Jones</h2>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
