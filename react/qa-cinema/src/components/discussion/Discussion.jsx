import axios from "axios";
import {useState, useEffect} from 'react';

const Discussion = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [topics, setTopics] = useState([]);

useEffect(() => {
    axios
    .get("http://localhost:3001/topics/getAll")
    .then(res => res)
    .then((result) => {
        setIsLoaded(true);
        setTopics(result.data);
    }, (error) => {
        setIsLoaded(true);
        setError(error);
    });
}, []);

const handleSubmit = event => {
    event.preventDefault();
    axios
    .get("http://localhost:3001/topics/getAll")
    .then(res => res)
    .then((result) => {
        setIsLoaded(true);
        setTopics(result.data);
    }, (error) => {
        setIsLoaded(true);
        setError(error);
    });
 
}
const showForm = event => {
console.log("working button")
}


return (
    <>
    <h1> Discussion Board:</h1>
    <label for="topics">Choose a topic:</label>
    <form className="d-flex" onSubmit={handleSubmit}>
<select name="cars" id="cars"> 
{topics.map((topic, index) => 
  <option key ={index} value={topic.topic_name}>{topic.topic_name}</option>)}
</select>
<button type='submit'> Display Discussion</button>
</form>
<button onClick={showForm}> Create Post</button>

    </>
)


}
export default Discussion;