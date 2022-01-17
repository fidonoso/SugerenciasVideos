class Multimedia{
    constructor(url){
        let _url= url;
        this.getUrl=()=> _url;
        this.setUrl=(nuevaurl)=> _url=nuevaurl;
    }
    get url(){
        return this.getUrl();
    }
    set url(nuevaurl){
        this.setUrl(nuevaurl)
    }
    setInicio(){
        console.log('Este método es para realizar un cambio en la URL del video')
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
    setInicio(tiempo){
        fpublic(this.getUrl()+`?start=${tiempo}`, this.getId());
    }
    playMultimedia(){
      fpublic(this.getUrl(), this.getId());

    }
}
const fpublic =(url, id)=>{
    // agregar al DOM
    var id2=document.getElementById(id)
    id2.setAttribute('src', url)
};
//Instanciar video musical
var m1 = new Reproductor("https://www.youtube.com/embed/OAmYyr1xCBA", 'musica')
//instanciar pelicula
var p1= new Reproductor("https://www.youtube.com/embed/gHggOUt9DA8", 'peliculas')
//instanciar series
var s1=new Reproductor('https://www.youtube.com/embed/WDGEFEtkXSQ', 'series')
//agregar musica, peliculas y series al DOM
m1.playMultimedia()
p1.playMultimedia()
s1.playMultimedia()
//reproducir video musical desde el segundo 9 (muy buen tema) con el metodo setInicio
m1.setInicio(9)

