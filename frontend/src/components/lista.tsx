import React, { useEffect, useState } from 'react';

const Lista: React.FC = () => {
  // Definindo o tipo para cada animal
  type Animal = {
    nome: string;
    raça: string;
    cor: string;
    tamanho: string;
  };

  // Definindo o estado para armazenar os animais
  const [animais, setAnimais] = useState<Animal[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('db.json');
        if (!response.ok) {
          throw new Error('Falha ao obter os dados');
        }
        const data = await response.json();
        setAnimais(data);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de Animais</h1>
      <ul>
        {animais.map((animal, index) => (
          <li key={index}>
            <strong>Nome:</strong> {animal.nome}<br />
            <strong>Raça:</strong> {animal.raça}<br />
            <strong>Cor:</strong> {animal.cor}<br />
            <strong>Tamanho:</strong> {animal.tamanho}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lista;
