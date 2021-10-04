import { Noticia } from './noticia.js'

declare let axios;
declare let Handlebars;

document.getElementById("search").onsubmit = function() {
    getNews()
};

function getNews() {
    const noticia  = new Noticia;
    noticia.getAll((document.getElementById("subject") as HTMLInputElement).value).then( response => {
        console.log('Results: ', response.data.articles);
        const templateSource = document.getElementById('news-template').innerHTML;
        const template = Handlebars.compile(templateSource);
        document.getElementById('news-container').innerHTML = template({news: response.data.articles});
    }).catch( ()=> {
         console.log("Error");
    });
};
