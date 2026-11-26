// function must return a single element
// fragement can be used to return multiple elements
// <> </> is a shorthand for <React.Fragment> </React.Fragment>
//component name should start with capital letter
//component name should be same as file name
//the tag must be closed properly
//component can be called as html tag
//component -any js function returns html directly
import React from 'react'
function Hello(args) { 
  return (
    <>
         <h1>{args.name}</h1>
         <img src={args.image_link} alt={args.name} />
         <h2>{args.price}</h2>
         <h2>{args.rating}</h2>
         <h3>{args.author}</h3> 
    </>
  )
}
export default function App() {
  const books = [
  {
    "name": "Atomic Habits",
    "author": "James Clear",
    "price": 14.99,
    "rating": 4.8,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "The Psychology of Money",
    "author": "Morgan Housel",
    "price": 12.50,
    "rating": 4.7,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "1984",
    "author": "George Orwell",
    "price": 9.99,
    "rating": 4.7,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "price": 10.99,
    "rating": 4.8,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "price": 11.49,
    "rating": 4.6,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "Dune",
    "author": "Frank Herbert",
    "price": 15.99,
    "rating": 4.7,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "Sapiens: A Brief History of Humankind",
    "author": "Yuval Noah Harari",
    "price": 16.99,
    "rating": 4.6,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "price": 13.99,
    "rating": 4.8,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "Deep Work",
    "author": "Cal Newport",
    "price": 14.49,
    "rating": 4.6,
    "image_link": "https://ssl-images-amazon.com"
  },
  {
    "name": "Project Hail Mary",
    "author": "Andy Weir",
    "price": 16.49,
    "rating": 4.9,
    "image_link": "https://ssl-images-amazon.com"
  }
];
 
return (
    <>  
     <h1>Hello react</h1>
     <Hello name="Let us see" price="355" author="Arpit Patel" />
     <Hello name="we will see" price="198" author="arnav " />
     <Hello {...books[0]} />
     {books.map((item) =><Hello{...item} />)}
    </>
  );
}
