import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Searchbox = () => {

    const [search, setSearch] = useState("");

    const newSearch = ({ target }) => {
        setSearch(target.value)
    }

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
        navigate("/search", { state: { newPageSearch: search } })
    }

    return (
        <form className="d-flex" onSubmit={handleSubmit}>
            <input className="form-control me-2" type="search" placeholder="Search Term" aria-label="Search" onChange={newSearch} />
            <button className="btnav" type="submit">Search</button>
        </form>
    )
}

export default Searchbox