// http://localhost:8000/api/facts

import {useEffect, useState } from "react";
import {Link, useParams} from "react-router"


function Read() {


  const factID = useParams().id;
  
  const [fact, setFact] = useState([]);

  async function getFact(id) {

    try{
      const res = await fetch("http://localhost:8000/api/facts/"+id);
      const data = await res.json();

      setFact(data["hydra:member"] || data.member || data || []);
        
    } catch (err) {

      alert("Oh Oh !! il y a un probléme !");
      
    }
   
  }

  useEffect(() => {
    getFact(factID);
  }, []);

  // if (!fact) return null;

  return (
    <>
      <section>

        <div>
          
          <h2>{fact.fact}</h2>
          <p>Techno : {fact.techno}</p>
          <div><Link to="/update">Modifier</Link></div>
          <div><Link to="/delete">Supprimer</Link></div>

        </div>
        
      </section>
    </>
  )
}

export default Read;
