/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import SingleAnimal from './SingleAnimal'
import Section from '../Section'

type Animal = {
  id: Number,
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
    <Section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
      {animals && animals.map((animal) => {
        return (
          <SingleAnimal animal={animal} handleClick={handleClick} />
        )
      })}
    </Section>
  )
}