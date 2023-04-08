import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstBook = {
  author: "Alice Schertle",
  title: "Little Blue Truck's Valentine",
  img: "./images/book-1.jpg",
};

const secondBook = {
  author: "Colleen Hoover",
  title: "It Ends with Us",
  img: "./images/book-2.jpg",
};

const thirdBook = {
  author: "Prince Harry The Duke of Sussex",
  title: "Spare",
  img: "./images/book-3.jpg",
};
const fourthBook = {
  author: "James Clear",
  title: "Atomic Habits",
  img: "./images/book-4.jpg",
};

function BookList() {
  return (
    <section className='booklist'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
          dolore voluptas, blanditiis explicabo eligendi voluptatibus quidem
          nisi magni iusto? Rerum.
        </p>
        <button> click on me </button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
      <Book
        author={fourthBook.author}
        title={fourthBook.title}
        img={fourthBook.img}
      />
    </section>
  );
}

const Book = ({ author, title, img, children }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{author.toUpperCase()}</p>
      {children}
      {/* <p>{6 + 6}</p> */}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
