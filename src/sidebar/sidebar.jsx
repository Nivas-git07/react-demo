import "./sidebar.css"
import Price from "./price/price";
import Category from "./category/category";
import Color from "./color/color"
const Sidebar = ({handleChange}) => {
    return (
        <section className="sidebar">
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <div className="sidebar_next">
            <Price  handlechange={handleChange}/>
            <Category  handlechange={handleChange}/>
            <Color  handlechange={handleChange}/>
            </div>

        </section>
    )
}
export default Sidebar;