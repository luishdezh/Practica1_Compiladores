import { Noticia } from './noticia.js';
document.getElementById("search").onsubmit = function () {
    getNews();
};
function getNews() {
    const noticia = new Noticia;
    noticia.getAll(document.getElementById("subject").value).then(response => {
        console.log('Results: ', response.data.articles);
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        document.getElementById('news-container').innerHTML = template({ news: response.data.articles });
    }).catch(() => {
        console.log("Error");
    });
}
;
