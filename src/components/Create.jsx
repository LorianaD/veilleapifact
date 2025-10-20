
function Create() {

    

  return (
    <>
      <section>
        <h2>Ajouter un nouveaux fait sur l'histoir de l'informatique</h2>
        <form action="" method="POST">
          <label htmlFor="fact">Fait intéresant</label>
          <textarea name="fact" id=""></textarea>
          <label htmlFor="tech">Téchnologie liée</label>
          <select name="tech" id="">
            <option value="JS">JavaScript</option>
            <option value="react">React</option>
            <option value="html_css">HTML et CSS</option>
            <option value="symfony">Symfony</option>
            <option value="history">Histoire</option>
          </select>
          <input type="submit" value="Ajouté" />
        </form>
      </section>
    </>
  )
}

export default Create