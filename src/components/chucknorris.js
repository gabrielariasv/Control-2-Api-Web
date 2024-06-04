import axios from 'axios';

const SearchNorris = async (query) => {
  try {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`
    );
    return response.data.result;
  } catch (error) {
    console.error('Error al buscar chistes de Chuck Norris: ', error);
    alert('Error al buscar chistes de Chuck Norris: ' + error.message);
    throw error;
  }
};

export default SearchNorris;