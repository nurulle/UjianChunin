//https://www.javascripttutorial.net/javascript-fetch-api/
//wpu ke 11 lnjutan

fetch('https://dhiyo-api-article.herokuapp.com/articles')
    .then(api => api.json())
    .then(json => json.data.map(ambil => {
        console.log(ambil.tittle);
    }));