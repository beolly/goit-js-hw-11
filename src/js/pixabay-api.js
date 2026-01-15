
apiKey: '54210933-10e757df1700daa886d01a2cd',
  baseUrl: 'https://pixabay.com/api'
const getImagesByQuery = (query) => {
    const url = `${this.baseUrl}/?key=${this.apiKey}&q=${encodeURIComponent(query)}&image_type=photo&pretty=true`;  
    return fetch(url)
      .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => data.hits)
      .catch(error => {
        console.error('Error fetching images:', error);
        throw error;
      });   

}


export default { getImagesByQuery };