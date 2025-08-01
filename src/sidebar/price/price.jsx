import Input from "../../component/input"
import "./price.css"
const Price = ({handlechange}) => {
    return (
        <div className="ml">
            <h2 className="sidebar-title price-title">Price</h2>

            <label className="sidebar-label-container">
                <input onChange={handlechange} type="radio" value="" name="test2" />
                <span className="checkmark"></span>All
            </label>
            <Input 
            handleChange={handlechange}
            value="50"
            title="$0 - 50"
            name="test2"
            />
            <Input
            handleChange={handlechange}
            value="100"
            title="$50 - 100"
            name="test2" 
            />
            <Input
            handleChange={handlechange}
            value="150"
            title="$100 - 150"
            name="test2" 
            />
            <Input
            handleChange={handlechange}
            value="200"
            title="$150 - $200"
            name="test2" 
            />
        </div>
    )

}
export default Price;