import { useEffect, useState } from 'react';

export const UseFetch = (url) => {
  // Estado inicial, data es null y luego se llenará con los datos obtenidos
  const [state, setState] = useState({
    data: null, // Asegúrate de que 'data' esté definido como null o []
    isLoading: true,
    errors: null
  });

  const getData = async () => {
    try {
      if (!url) return;

      const response = await fetch(url);
      const data = await response.json();
      console.log(data); // Asegúrate de que los datos sean correctos

      setState({
        data, // Aquí establecemos los datos que obtuvimos
        isLoading: false,
        errors: null
      });
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        errors: error.message
      });
    }
  };

  useEffect(() => {
    getData();
  }, [url]); // Se asegura de que el fetch se ejecute cuando cambia la URL

  return {
    data: state.data, // Desestructuramos data del estado
    isLoading: state.isLoading,
    errors: state.errors    
  };
};
