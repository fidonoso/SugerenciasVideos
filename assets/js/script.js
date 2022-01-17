class Multimedia{
    constructor(url){
        let _url= url;
        // let _id= id;
        this.getUrl=()=> _url;
        this.setUrl=(nuevaurl)=> _url=nuevaurl;
        // this.getId=()=> _id;
        // this.setId=(nuevoid)=> _id=nuevoid;
    }
    get url(){
        return this.getUrl();
    }
    set url(nuevaurl){
        this.setUrl(nuevaurl)
    }
    // get id(){
    //     return this.getId();
    // }
    // set id(nuevoid){
    //     this.setId(nuevoid);
    // }
    setInicio(){
        alert('Este método es para realizar un cambio en la URL del video')
    }
}
class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        let _id=id;
        this.getId=()=> _id;
        this.setId=(nuevoid)=> _id=nuevoid;
    }
    get id(){
        return this.getId();
    }
    set id(nuevoid){
        this.setId(nuevoid);
    }
    setInicio(){
        '...'
    }
    playMultimedia(){
        // this.get
    }
}

var v1 = new Reproductor("https://www.youtube.com/embed/OAmYyr1xCBA", 'musica')
console.log(v1)
v1.setInicio()

