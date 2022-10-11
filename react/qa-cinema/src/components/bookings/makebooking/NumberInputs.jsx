const NumberInputs = (props) => {

    return (
        <div className="col-12 num-in">
            <label htmlFor={props.attrs} className="form-label">{props.labelText}</label>
            <input type="number" className="form-control" id={props.attrs} value={props.inputValue} onChange={props.selectFunc} />
        </div>
    )

}

export default NumberInputs;