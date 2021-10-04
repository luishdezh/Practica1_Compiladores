export class Noticia {
    getAll(term) {
        const url = 'https://newsapi.org/v2/everything?q=' + term + '&apiKey=f00e2650cec143ad907e79852f506ec0';
        console.log(url);
        return axios.get(url);
    }
}
