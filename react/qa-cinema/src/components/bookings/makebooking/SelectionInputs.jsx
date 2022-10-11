const SelectionInputs = (props) => {

    return (
        <div className="mb-3">
            <label htmlFor={props.attrs} className="form-label">{props.labelText}</label>
            <select className="form-select" id={props.attrs} value={props.inputValue} onChange={props.selectFunc}>
                {props.options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )

}

export default SelectionInputs;