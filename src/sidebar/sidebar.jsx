import "./sidebar.css"
import Price from "./price/price";
import Category from "./category/category";
import Color from "./color/color"
const Sidebar = ({handlechange}) => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Price handlechange={handlechange}/>
            <Category handlechange={handlechange}/>
            <Color handlechange={handlechange}/>
        </section>
    )
}
export default Sidebar;