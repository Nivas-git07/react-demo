import "./color.css"
import Input from "../../component/input"
const Color = ({handleChange}) => {
    return (
        <div>
            <div>
                <h2 className="sidebar-title color-title">Colors</h2>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test1" />
                    <span className="checkmark all"></span>
                    All
                </label>
            </div>
            <Input
                handleChange={handleChange}
                value="black"
                title="Black"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="blue"
                title="Blue"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="red"
                title="Red"
                name="test1"
            />
            <Input
                handleChange={handleChange}
                value="green"
                title="Green"
                name="test1"
            />
            <label className="sidebar-label-container">
                <input
                    onChange={handleChange}
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