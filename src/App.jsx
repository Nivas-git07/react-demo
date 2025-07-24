import Nav from './navbar/nav'
import Recommended from "./recommended/recommended"
import Sidebar from "./sidebar/sidebar"
import Products from './product/product'
import { useState } from 'react'


function App() {
  const [query, setquery] = useState("");
  const [category, setcategory] = useState(null);
  const handleInputChange = () => {
    setquery(event.target.value);
  }
  const handlechange = () => {
    setcategory(event.target.value)
  }
  const handleClick = () => {
    setcategory(event.target.value)
  }
  const filteritems = Products.filter((product) => {
    product.title.toLowerCase().indexof(query.toLowerCase()) !== -1
  }
  
++);


return (
  <>
    <Nav query={query} handleInputChange={handleInputChange} />
    <Recommended handleClick={handleChange} />
    <Sidebar handleChange={handleChange} />
    <Products result={result} />

  </>
)


}

export default App;
