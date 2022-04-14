import react, {useState} from 'react';
import './App.css';

export default function CartCount() {
  const[count,setCount] = useState(0);

  return(
    <div className={NavCount}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>items available</button>
    </div>
  );
}