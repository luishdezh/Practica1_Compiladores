declare let axios;

interface INoticia {
    author:string;
    title:string;
    description?:string;
    url?:string;
    image?:string;
    published?:string;
    content?:string;
}

export class Noticia implements INoticia {
    author:string;
    title:string;
    description:string;
    url:string;
    image:string;
    published:string;
    content:string;

    getAll(term:string): Promise<any> {
        const url: string = 'https://newsapi.org/v2/everything?q='+term+'&apiKey=f00e2650cec143ad907e79852f506ec0';
        console.log(url);
        return axios.get(url);
    }
}