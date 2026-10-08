import Book from './components/Book';
import Pen from './components/Pen';
import Fruit from './components/Fruit';
import Event from './components/Event';
import { books } from './data/books';
import { pens } from './data/pens';


{/*

const b1 = {
  picUrl: "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
  bname: "Harry Potter and the philosopher's stone",
  price: 1199,
  quantity: 10,
  rating: 5.0,
};

const b2 = {
  picUrl: "https://m.media-amazon.com/images/I/818umIdoruL._AC_UF1000,1000_QL80_.jpg",
  bname: "Harry Potter and the chamber of secrets",
  price: 1349,
  quantity: 15,
  rating: 5.0,
};

const p1 = {
  picUrl: "https://m.media-amazon.com/images/I/71rzb-oaO6L._AC_UF1000,1000_QL80_.jpg",
  bname: "Parker Classic Gold Trim Ball Pen",
  price: 425,
  quantity: 15,
  rating: 5.0,
};

const p2 = {
  picUrl: "https://m.media-amazon.com/images/I/81VW+wgiMmL.jpg",
  bname: "Reynolds TRIMAX GOLD RollerBall Pen",
  price: 169,
  quantity: 15,
  rating: 4.9,
};

*/}

const MyButton = () => {
  const handleSubmit = () => {
    alert("Button Clicked!");
  };
  return(
    <button className = "bg-black text-white text-xl rounded-md m-4 px-4 py-2" onClick={handleSubmit}>
      Submit
    </button>
  )
}

export default function App() {
  return (
    <>
    {/*
      <h1><u>Online Book Store</u></h1>
      <div className="container">
        <Book book={books[0]} />
        <Book book={books[1]} />
        <Book book={books[0]} />
        <Book book={books[1]} />
    </div>
    <h1><u>Online Pen Store</u></h1>
    <div className="container">
        <Pen pen={pens[0]} />
        <Pen pen={pens[1]} />
    </div>
    <h1><u>Online Fruit Store</u></h1>
    <div className="container">
        <Fruit />
    </div>
    <Event />
    */}
    <MyButton/>
    </>
  );
}