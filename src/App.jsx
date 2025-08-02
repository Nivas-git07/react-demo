import Nav from './navbar/nav'
import Recommended from "./recommended/recommended"
import Sidebar from "./sidebar/sidebar"
import Products from './product/product'
import { useState } from 'react'
import "./index.css"
import Card from "./component/card"
import products from './db/data';



function App() {
  const [query, setquery] = useState("");
  const [SelectCategory, setSelectCategory] = useState(null);

  const handleInputChange = (event) => {
    setquery(event.target.value);
  }
  const handleChange = (event) => {
    setSelectCategory(event.target.value)
    console.log("this button will work")
  }
  const handleClick = (event) => {
    console.log("this button will work")
    setSelectCategory(event.target.value)
  }
  const filterItems = products.filter(
    (Product) => Product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1

  );
  function filterdata(products, selected, query) {
    let filterproducts = products;
    if (query) {
      filterproducts = filterItems;
    }
    if (selected) {

      filterproducts = filterproducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      )

    }
    return filterproducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}


      />
    )
    )

  }

  const result = filterdata(products, SelectCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />

    </>
  )


}

export default App;
