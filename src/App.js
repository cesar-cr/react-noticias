import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // Definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const requestApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=10023c320d84485690049b62be7c015f`;
      const respuesta = await fetch(url);
      const noti = await respuesta.json();
      guardarNoticias(noti.articles);
    }
    requestApi();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscandor de noticias" />
      <div className="container white">
        <Formulario
          guardarCategoria={ guardarCategoria }
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
