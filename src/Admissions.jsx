import './assets/stylesss.css'
import { useState } from 'react';
function Admissions() {
    const [admissions, setAdmissions] = useState(0);
   function increment  () {
        setAdmissions(admissions + 1);
    }
    const decrement = () => {
        setAdmissions(admissions - 1);
    }
    return (
        <main>
            <h1>Admissions</h1>
            <h2>no of admissions:{admissions}</h2>
            <button onClick= { increment }>Increse</button>
            <button onClick= { decrement }>decrese</button>

        </main>
    )
}
export default Admissions;