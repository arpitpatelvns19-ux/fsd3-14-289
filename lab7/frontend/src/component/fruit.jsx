const products = [
  { title: "Apple", id: 1, isfruit: true},
  { title: "Banana", id: 2, isfruit: true},
  { title: "Carrot", id: 3, isfruit: false},
  { title: "Date", id: 4, isfruit: true},
];

const listitems = products.map((item) => <li>  {item.id} style {item.title} </li>);
console.log(listitems);

const Fruit = () => {
    return <div>Fruit</div>
};

export default Fruit;
  