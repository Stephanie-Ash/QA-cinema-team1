import axios from "axios";
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './discussion.css'

const Discussion = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [topics, setTopics] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [date] = useState(createDate());
    const [topic, setTopic] = useState('General');
    const [posts, setPosts] = useState([]);

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
        axios
            .get(`http://localhost:3001/posts/get/General`)
            .then(res => res)
            .then((result) => {
                setIsLoaded(true);
                setPosts(result.data);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });
    }, []);

    const handleSubmit = event => {
        const topic = document.getElementById('topic').value;
        setTopic(topic);
        event.preventDefault();
        axios
            .get(`http://localhost:3001/posts/get/${topic}`)
            .then(res => res)
            .then((result) => {
                setIsLoaded(true);
                setPosts(result.data);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            });

    }
    function createDate() {
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
        const comment = document.getElementById('comment').value;
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
                window.alert("Thank you for your comment, it will be reviewed by a member of our team! ");
            }, (error) => {
                console.log(error);
            });
        event.target.reset();
}
return (
    <>
    <h1> Discussion Board</h1> 
     <form className="d-flex" onSubmit={handleSubmit}>
        <label htmlFor="topics" className="fw-bolder">Choose a topic:</label>
        <select name="topic" id="topic" className="form-select" aria-label="Default select example"> 
        {topics.map((topic, index) => 
        <option key ={index} value={topic.topic_name}>{topic.topic_name}</option>)}
        </select> 
        <button type='submit-button'className="btn btn-danger" > Display Discussion</button>
        </form>

         <ul className="discussion list-group">
         {posts.map((post, index) =>
         <li key = {index} > <p className="username fw-bolder">
            <i className="fa-solid fa-message-smile"></i> Username: {post.username}</p>
         <p> Comment: {post.comment}</p>
          <p className="user-rate"> Rating: {post.rating} Star(s)</p>
          <span className="badge bg-secondary rounded-pill">
          <p className="datePublished"> Date Published: {post.datePublished}</p></span>
          </li>)}
          </ul>

          
          <div className="discussform d-grid gap-2 col-6 mx-auto">
            <button onClick={displayForm}className="btn btn-danger" > Create Post on {topic}
            <i className="fa-solid fa-angles-down"></i></button></div>
            {showForm && (
                <form onSubmit={postForm} className="mb-5">
                    <input type='text' placeholder='Username*' id='Username' required className="form-control" />
                    <div className="input-group">
                        <span className="input-group-text">Your Comment</span>
                        <textarea className="form-control" aria-label="Your comment" rows="4" cols="50" placeholder="Enter a comment*" id='comment' required></textarea>
                        <h4> Select a rating:</h4>
                        <div className="rating">
                            <input type="radio" id="star1" name="rating" value="1" required />

                            <label htmlFor="rating1">1 star</label>
                            <br />

                            <input type="radio" id="star2" name="rating" value="2" required />
                            <label htmlFor="rating2">2 stars</label>
                            <br />
                            <input type="radio" id="star3" name="rating" value="3" required />
                            <label htmlFor="rating3">3 stars</label>
                            <br />
                            <input type="radio" id="star4" name="rating" value="4" required />
                            <label htmlFor="rating4" title="text" >4 stars</label>
                            <br />
                            <input type="radio" id="star5" name="rating" value="5" required />
                            <label htmlFor="rating5" title="text">5 stars</label>
                            <br />
                        </div>
                        <button type="submit-button" className="btn btn-outline-success">Comment</button>
                    </div>
                </form>
            )}
        </>
    )


}
export default Discussion;