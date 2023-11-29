import React, { createContext, useContext, useState, useEffect } from 'react';

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    // This code will run whenever bookData changes
    console.log('Updated state:', bookData);
  }, [bookData]);
  const onBooking = (data) => {
    setBookData(data);
    console.log(data);
  };

  const bookContextValue = {
    bookData,
    onBooking,
  };

  return (
    <BookContext.Provider value={bookContextValue}>
      {children}
    </BookContext.Provider>
  );
};

export const useBooking = () => {
  return useContext(BookContext);
};