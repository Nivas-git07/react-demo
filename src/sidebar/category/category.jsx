import "./category.css"
import Input from "../../component/input"
const Category = ({handlechange}) => {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div>
                <label className="sidebar-label-container">
                    <input onChange={handlechange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
            </div>
            <Input
                handleChange={handlechange}
                value="sneakers"
                title="sneakers"
                name="test"
            />
            <Input
                handleChange={handlechange}
                value="Flats"
                title="Flats"
                name="test"
            />
            <Input
                handleChange={handlechange}
                value="Heels"
                title="Heels"
                name="test"
            />
            <Input
                handleChange={handlechange}
                value="sandals"
                title="sandals"
                name = "test"

            />
        </div>
    )
}
export default Category;