export default function SingleAnimal({ props }: any) {
  const { animal, handleClick } = props;
  return (
    <>
      <article key={animal.id} className={`animal ${animal.color}`} onClick={() => handleClick(animal.audio)}>
        <img src={`./src/assets/images/animals/${animal.image}`} className="block mx-auto" />
        <h2 className="m-0">{animal.name}</h2>
        <h3 className="m-0">{animal.name_eng}</h3>
      </article>
    </>
  )
}