import React, { useState, useEffect } from "react";
import "./Allbooks.css";

function Allbooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch all books when the component mounts
    fetchAllBooks();
  }, []);

  const fetchAllBooks = async () => {
    try {
      // Make the API request to fetch all books
      const response = await fetch("http://localhost:5000/api/books/allbooks");
      if (!response.ok) {
        throw new Error("Failed to fetch books");
      }
      const data = await response.json();
      // Update the state with the fetched books
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="books-page">
      <div className="books">
        {books.map((book) => (
          <div className="book-card" key={book._id}>
            <img src={book.coverImg} alt={book.bookName}></img>
            <p className="bookcard-title">{book.bookName}</p>
            <p className="bookcard-author">By {book.author}</p>
            <div className="bookcard-category">
              {book.categories.map((category) => (
                <p key={category._id}>{category.categoryName}</p>
              ))}
            </div>
            <div className="bookcard-emptybox"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allbooks;
