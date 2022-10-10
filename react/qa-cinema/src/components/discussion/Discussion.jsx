import axios from "axios";
import {useState, useEffect} from 'react';
import {format} from 'date-fns';

const Discussion = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [topics, setTopics] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [date] = useState(createDate());

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
function createDate () {
    let today = new Date()
    let formattedDate = format(today, 'dd/MM/yyyy');
    return formattedDate;
}

const displayForm = event => {
    setShowForm(!showForm);  

}
const postForm = event => {
    event.preventDefault();

    const topic_name = document.getElementById('topic').value;
        const username = document.getElementById('Username').value;
        const comment  = document.getElementById('comment').value;
        const rating = document.querySelector('input[name="rating"]:checked').value;
        const datePublished = date;
        const isApproved = false;
       

        axios.post('http://localhost:3001/posts/create', {

            topic_name: topic_name,
            username: username,
            comment: comment,
            rating: rating,
            datePublished: datePublished,
            isApproved: isApproved
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });


        event.target.reset();

        // document.getElementById('hiddenmessage').innerHTML = "Email has been submitted, a member of our team will contact you shortly.";
        window.alert("Post has been added");
}

return (
    <>
    <h1> Discussion Board:</h1>
    <label htmlFor="topics">Choose a topic:</label>
    <form className="d-flex" onSubmit={handleSubmit}>
<select name="topic" id="topic"> 
{topics.map((topic, index) => 
  <option key ={index} value={topic.topic_name}>{topic.topic_name}</option>)}
</select> 
</form>
<button type='submit'> Display Discussion</button>

<button onClick={displayForm}> Create Post</button>
{showForm && (
        <form onSubmit={postForm}>
            <input type='text'placeholder='Username'id ='Username'required />
            <textarea rows="4" cols="50" placeholder="Enter a comment*" id='comment' required></textarea>
            <h3> Select a rating (optional):</h3>
            <input type="radio" name="rating" value ="1"/>
            <label htmlFor="rating1">1</label>
            <input type="radio" name="rating" value ="2"/>
            <label htmlFor="rating2">2</label>
            <input type="radio" name="rating" value ="3"/>
            <label htmlFor="rating3">3</label>
            <input type="radio" name="rating" value ="4"/>
            <label htmlFor="rating4">4</label>
            <input type="radio" name="rating" value ="5"/>
            <label htmlFor="rating5">5</label>
            <button type='submit'>Post Comment</button>

        </form>
      )}
</>
)


}
export default Discussion;