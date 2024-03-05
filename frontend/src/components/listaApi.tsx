import { useState, useEffect } from 'react';

const Lista = () => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    const fetchAnimais = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/animais');
        if (!response.ok) {
          throw new Error('Falha ao obter os dados');
        }
        const data = await response.json();
        setAnimais(data);
      } catch (error) {
        console.error('Erro ao buscar animais:', error);
      }
    };

    fetchAnimais();
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