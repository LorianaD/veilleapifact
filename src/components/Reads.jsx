// http://localhost:8000/api/facts

import { useEffect, useState } from "react"

function Reads() {

    const [facts, setFacts] = useState([]);

    async function getFacts() {

      try {

        const res = await fetch("http://localhost:8000/api/facts");
        const data = await res.json();

        setFacts(data);
        
      } catch (err) {

        alert("Oh Oh !! il y a un probléme !");

      }
      
    }

    useEffect(() => {
      getFacts();
    }, []);

  return (
    <>
      <section>

        <h2>Faits intéréssants sur l'informatique</h2>
        
        <div>

          {facts.map(fact => (

            <div key={fact.id}>
              <p>{fact.fact}</p>
              <p>Techno : {fact.techno}</p>
            </div>

          ))}

        </div>

      </section>
    </>
  )
}

export default Reads