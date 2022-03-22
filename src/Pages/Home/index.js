import React,{useState} from 'react';
import './styles.css'
import Rating from "../Components/Rating";
import Thankyou from '../Components/Thankyou';

function Home() {

  const [thanks, setThanks] = useState(false)
  const [score, setScore] = useState()

    return (
      <div className='Card'>
        { thanks == true && <Thankyou Score={score}/> }
        { thanks == false && 
          <Rating  
            Thanks={()=> setThanks(true)}
            Score={setScore}
          /> 
        }
      </div>
    );
  }
  
  export default Home;