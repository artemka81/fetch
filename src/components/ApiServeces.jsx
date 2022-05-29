const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '6444317-c61155bd44e68957af67120b1';

export const fetchImages = (query, page) => {

  const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=${API_KEY}`
  console.log(url);

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error('Oops! Nothing found'));
  });

}



// resetPage = () => { }

// incrementPage = () => { }


