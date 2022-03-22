import './styles.css';

function Number(props) {

    const numbers = ([
        {value: 1},{value: 2},{value: 3},
        {value: 4},{value: 5},
    ])

    function HandleRating(value){
        props.Score(value)
    } 

    return (
      <div className='NumbersBody'>
        {numbers.map((iten)=>{
            return(
                <button className='Number' onClick={()=>HandleRating(iten.value)}>
                {iten.value}
                </button>
            )
        })}
      </div>
    );
  }
  
  export default Number;