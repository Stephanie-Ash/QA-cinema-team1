import {useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Loggedin = () => {
    const location = useLocation();
    const {isLoggedin} = location.state;
    const [error, setError] = useState(false)
    const [posts, setPosts] = useState([])
  
    
    useEffect(() => {
        axios
            .get("http://localhost:3001/posts/getPending")
            .then(res => res)
            .then((result) => {
                setPosts(result.data);
            }, (error) => {
                setError(error);
                console.log(error)
            });
    }, []);

    const setStatus = (e) => {
        e.preventDefault() 

        axios.put(`http://localhost:3001/posts/update/${e.target.value}`, {
            isApproved: true
        })
            .then((response) => {
                window.alert("This post has now been approved");
                axios
                .get("http://localhost:3001/posts/getPending")
                .then(res => res)
                .then((result) => {
                    setPosts(result.data);
                }, (error) => {
                    setError(error);
                    console.log(error)
                });
            }, (error) => {
                console.log(error);
            });

        }
        const setDelete = (e) => {
        e.preventDefault() 

            axios.delete(`http://localhost:3001/posts/delete/${e.target.value}`, {
            })
                .then((response) => {
                    window.alert("This post has now been deleted");
                    axios
                    .get("http://localhost:3001/posts/getPending")
                    .then(res => res)
                    .then((result) => {
                        setPosts(result.data);
                    }, (error) => {
                        setError(error);
                        console.log(error)
                    });
                }, (error) => {
                    console.log(error);
                });


            }

    if (isLoggedin) {



    
    return(

        <form>
        
        {posts.map((post, index, username) => (
            <div className="feedback2" key = {index}>
                 <div className="feedback3"> {post.username} </div>
                       
    
                    
                    <div className="feedback">
                     {post.comment}
                     </div>
                     <button className="subcom" value = {post._id} onClick = {e => setStatus(e,"value")}>  Approve </button> <button className="subcom" value = {post._id} onClick = {e => setDelete(e,"value")}>  Delete </button>
                        
                        
                        
                
            </div>
            
        ))}
    </form>

    
    )
}else {

    return(<p>You need to be logged in to see this</p>)
}} 

export default Loggedin;
