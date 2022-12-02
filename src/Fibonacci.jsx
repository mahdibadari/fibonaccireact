import React, {useState, useEffect} from 'react'

export default function Fibonacci() {
  const [sequences, setSequences] = useState([]);
  const [value, setValue] = useState();
  const [biggestNumber, setBiggestNumber] = useState();
  const [isHidden, setIsHidden] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleChange = (event) => {
    var index = event.target.value;
    if (index < -1) {
      setIsError(true);
      return;
    }
    if (index > 93) return;
    setValue( event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://localhost:7143/Fibonacci?index="+value)
      .then(res => res.json())
      .then(
        (result) => {
            setSequences(result);
            setBiggestNumber(result[result.length-1]);
        },
        (error) => {
          setSequences([]);
        }
      )
  }

  useEffect(() => {
    if (biggestNumber >= 0) setIsHidden(false);
  }, biggestNumber);
   
  return (
    <>
      <div>Fibonacci Form</div>
      <form onSubmit={handleSubmit}>
        <label>
          Index:
          <input type="number" name="index" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <span hidden={isHidden}>Sequences biggest number is {biggestNumber}</span>
      <span hidden={!isError}>Input index must be higher than 0</span>
      <div className='sequences'>
        <ul>
            <span>{sequences.toString()}</span>
        </ul>
      </div>
    </>    
  )
}
