import React, { useEffect, useState } from 'react'

type Animal = {
  name: string,
  name_eng: string,
  image: string,
  color: string,
  audio: string
}

export default function Animal() {

  const [animals, setAnimals] = useState<Animal[]>([])
  const handleClick = (audio: string) => {
    const audioAnimal = new Audio(`./src/assets/sons/${audio}`);
    audioAnimal.play()
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('animals.json');
        const data = await response.json();
        setAnimals(data);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {animals && animals.map((animal, id) => {
        return (
          <article key={id} className={`animal ${animal.color}`} onClick={() => handleClick(animal.audio)}>
            <img src={`./src/assets/images/animals/${animal.image}`} className="block mx-auto" />
            <h2 className="m-0">{animal.name}</h2>
            <h3 className="m-0">{animal.name_eng}</h3>
          </article>
        )
      })}
    </section>
  )
}