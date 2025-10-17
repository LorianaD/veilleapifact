// http://localhost:8000/api/facts
import Read from "./Read";
import { useEffect, useState } from "react"
import { Link } from "react-router";

function Reads() {

    const [facts, setFacts] = useState([]);
    // const [selectFact, setSelectFact] = useState();

    async function getFacts() {

      try {

        const res = await fetch("http://localhost:8000/api/facts");
        const data = await res.json();

        setFacts(data["hydra:member"] || data.member || data || []);

        // console.log(data);
        
      } catch (err) {

        alert("Oh Oh !! il y a un probléme !");

      }
      
    }

    useEffect(() => {
      getFacts();
      // console.log('selectFact =', selectFact);
    }, []);
    

  
  return (
    <>
      <section className="reads-facts-section">

        <h2>Faits intéréssants sur l'informatique</h2>
        
        <div className="facts-list">

          {facts && facts.length > 0 ? facts.map(fact => (

            <div key={fact.id} className="facts-cards">
              <p>{fact.fact}</p>
              <p>Techno : {fact.techno}</p>
              {/* <button onClick={() => setSelectFact(fact)}>Voir</button> */}
              <Link to={`/read/${fact.id}`}>Voir</Link>
            </div>

          )) : (
            <p>Aucun fait disponible pour le moment.</p>
          )}

        </div>

        {/* {selectFact && <Read fact={selectFact} />} */}

      </section>
    </>
  )
}

export default Reads