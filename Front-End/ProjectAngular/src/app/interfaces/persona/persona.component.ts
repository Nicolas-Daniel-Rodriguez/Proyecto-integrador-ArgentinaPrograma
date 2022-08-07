export class Persona{
    id?:number;
    nombre: String;
    apellido: String;
    pais: String;
    telefono: String;
    email: String;
    instagram: String;
    github: String;
    linkedin: String;
    imgPortada: String;
    imgPerfil: String;
    ocupacionCorta: String;
    ocupacion: String;
    acercaDe: String;

    constructor (nombre: String, apellido: String, pais: String, telefono: String, email: String, instagram: String, github: String, linkedin: String, imgPortada: String, imgPerfil: String, ocupacionCorta: String, ocupacion: String, acercaDe: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais= pais;
        this.telefono= telefono;
        this.email= email;
        this.instagram= instagram;
        this.github= github;
        this.linkedin= linkedin;
        this.imgPortada= imgPortada;
        this.imgPerfil= imgPerfil;
        this.ocupacionCorta= ocupacionCorta;
        this.ocupacion= ocupacion;
        this.acercaDe= acercaDe;
    }
}
