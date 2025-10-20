

function Update() {

  const factID = useParams().id;
  
  const [fact, setFact] = useState([]);

  async function addFact(id) {

    // try{
    //     const res = await fetch("http://localhost:8000/api/facts/");
    //     const data = await res.json();

    //     setFact(data["hydra:member"] || data.member || data || []);
        
    // } catch (err) {

    // // alert("Oh Oh !! il y a un probléme !");
        
    // }
   
  }

  useEffect(() => {
    getFact();
  }, []);

  // if (!fact) return null;

  return (
    <>
      <section>
        <form action="">

        </form>
      </section>
    </>
  )
}

export default Update