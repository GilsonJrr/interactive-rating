import './styles.css';
import Thanks from '../../../IMG/illustration-thank-you.svg'

function Thankyou(props) {

    return (
      <div className='ThanksBody'>
        <img src={Thanks}/>
        <div className='Score'>You selected {props.Score} out of 5</div>
        <p1>Thank you!</p1>
        <p2>We appreciate you taking the time to give a rating. if you ever need more suport, don`t hesitate to get in touch!</p2>
      </div>
    );
  }
  
export default Thankyou;