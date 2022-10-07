import { useState } from 'react';
import "./placestogo.css";
const ReadMoreReadLess = ({children, descriptionLength}) => {
    const fullText = children;

    const [isReadMoreShown, setReadMoreShown] = useState(false);
 
  const toggleBtn = () => {
     setReadMoreShown(prevState => !prevState)
  };
        return (
            <p classname="text">
                {isReadMoreShown ? fullText : `${fullText.slice(0,{descriptionLength})}`}
                <span onClick={toggleBtn} className='toggle-button'>
                <button type="button" class="btn btn-outline-danger">
                    {isReadMoreShown ? 'Show Less' : 'Show More'}
                    </button>
                </span>

             </p>
        )
            
}
export default ReadMoreReadLess;