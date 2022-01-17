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
      fpublic(this.getUrl(), this.getId());

    }
}
const fpublic =(url, id)=>{
    // alert(id)
    var id2=document.getElementById(id)
    id2.setAttribute('src', url)
};
var m1 = new Reproductor("https://www.youtube.com/embed/OAmYyr1xCBA", 'musica')
var p1= new Reproductor("https://www.youtube.com/embed/gHggOUt9DA8", 'peliculas')
var s1=new Reproductor('https://www.youtube.com/embed/WDGEFEtkXSQ', 'series')
console.log(m1)
m1.playMultimedia()
p1.playMultimedia()
s1.playMultimedia()

