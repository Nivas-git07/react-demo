import "./color.css"
import Input from "../../component/input"
const Color = ({handlechange}) => {
    return (
        <div>
            <div>
                <h2 className="sidebar-title color-title">Colors</h2>
                <label className="sidebar-label-container">
                    <input onChange={handlechange} type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    All
                </label>
            </div>
            <Input
                handleChange={handlechange}
                value="black"
                title="Black"
                name="test1"
                color="black"
            />
            <Input
                handleChange={handlechange}
                value="blue"
                title="Blue"
                name="test1"
                color="blue"
            />
            <Input
                handleChange={handlechange}
                value="red"
                title="Red"
                name="test1"
                color="red"
            />
            <Input
                handleChange={handlechange}
                value="green"
                title="Green"
                name="test1"
                color="green"
            />
            <label className="sidebar-label-container">
                <input
                    onChange={handlechange}
                    type="radio"
                    value="white"
                    name="test1"
                />
                <span
                    className="checkmark"
                    style={{ background: "white", border: "2px solid black" }}
                ></span>
                White
            </label>
            
        </div>
    )
}
export default Color;