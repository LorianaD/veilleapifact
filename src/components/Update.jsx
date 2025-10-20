import { useEffect, useState } from "react";
import { useParams } from "react-router";


function Update() {

  const factID = useParams().id;
  
  const [fact, setFact] = useState([]);

  async function getFact(id) {

    try{
        const res = await fetch("http://localhost:8000/api/facts/");
        const data = await res.json();

        setFact(data["hydra:member"] || data.member || data || []);

        // if(){

        // }
        
    } catch (err) {

    alert("Oh Oh !! il y a un probléme !");
        
    }
   
  }

  useEffect(() => {
    getFact();
  }, []);

  // if (!fact) return null;

  return (
    <>
      <section>
        <form action="" method="POST">
          <label htmlFor="fact">modifier le Fait intéresant</label>
          <textarea name="fact" id=""></textarea>
          <label htmlFor="tech">Modifier la téchnologie</label>
          <input type="text" name="tech" />
        </form>
      </section>
    </>
  )
}

export default Update