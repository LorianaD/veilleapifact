import { useEffect, useState } from "react";
import { useParams } from "react-router";


function Update() {

  const factID = useParams().id;
  
  const [fact, setFact] = useState([]);

  async function getFact(id) {

    try{
      const res = await fetch("http://localhost:8000/api/facts/"+id)
      const data = await res.json();

      setFact(data["hydra:member"] || data.member || data || []);
        
    } catch (err) {

      alert("Oh Oh !! il y a un probléme !");
        
    }
   
  }

  useEffect(() => {
    getFact();
  }, []);

  function updateFact() {
    try {

      const res = fetch("http://localhost:8000/api/facts/" + id, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fact: fact, techno: techno })
      })

      const data = res.json();

      alert("Fait modifié avec succès !");

    }catch {

      alert("Un probléme est arrivé");
      
    }

  } 

  return (
    <>
      <section>
        <form action="" method="PATCH">
          <label htmlFor="fact">Modifier le Fait intéresant</label>
          <textarea name="fact" value={fact.fact}></textarea>
          <label htmlFor="techno">Modifier la téchnologie</label>
          <select name="techno">
            <option value="JS">JavaScript</option>
            <option value="react">React</option>
            <option value="html_css">HTML et CSS</option>
            <option value="symfony">Symfony</option>
            <option value="history">Histoire</option>
          </select>
          <input type="submit" value="Modifié" />
        </form>
      </section>
    </>
  )
}

export default Update