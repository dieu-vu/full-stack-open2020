import React, {useState} from 'react';

const Button = ({text, handleClick}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <table>
        <tbody>
        <tr>
          <td>
          {text} {value}
          </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad;
  let average = ((good - bad)/total).toFixed(1);
  let positive = (good / total * 100).toFixed(2);
  if (good + neutral + bad !== 0) {
    return (
      <>
        <h1>Statistics</h1>

        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={average}/>
        <StatisticLine text="positive" value={`${positive} %`}/>

      </>
    )
  } else {
    return (
      <p>No feedback given</p>
    )
  }
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <Button text="good" handleClick={()=>setGood(good+1)} />
        <Button text="neutral" handleClick={()=>setNeutral(neutral+1)}/>
        <Button text="bad" handleClick={()=>setBad(bad+1)}/>
      </div>
      <Statistics good={good} neutral= {neutral} bad={bad} />
      </>
  );
}

export default App;
