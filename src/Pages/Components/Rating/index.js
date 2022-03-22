import './styles.css';
import Star from '../../../IMG/icon-star.svg'
import Number from '../Numbers';

function Rating(props) {

  function HandleRating(){
    props.Thanks()
  }

    return (
      <div className='RatingBody'>
        <div className='BackImg'>
            <img src={Star}/>
        </div>
        <p1>How did we do?</p1>
        <p2>
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
        </p2>
        <Number
          Score={props.Score}
        />
        <button onClick={HandleRating}>
            SUBMIT
        </button>
      </div>
    );
  }
  
  export default Rating;