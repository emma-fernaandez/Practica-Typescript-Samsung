"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direccion, mail, telefono, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleaños = cumpleaños;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direccion = direccion;
        this._mail = mail;
        this._telefono = telefono;
        this._notas = notas;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get apellidos() {
        return this._apellidos;
    }
    set apellidos(value) {
        this._apellidos = value;
    }
    get edad() {
        return this._edad;
    }
    set edad(value) {
        this._edad = value;
    }
    get dni() {
        return this._dni;
    }
    set dni(value) {
        this._dni = value;
    }
    get cumpleaños() {
        return this._cumpleaños;
    }
    set cumpleaños(value) {
        this._cumpleaños = value;
    }
    get colorFavorito() {
        return this._colorFavorito;
    }
    set colorFavorito(value) {
        this._colorFavorito = value;
    }
    get sexo() {
        return this._sexo;
    }
    set sexo(value) {
        this._sexo = value;
    }
    get direccion() {
        return this._direccion;
    }
    set direccion(value) {
        this._direccion = value;
    }
    get mail() {
        return this._mail;
    }
    set mail(value) {
        this._mail = value;
    }
    get telefono() {
        return this._telefono;
    }
    set telefono(value) {
        this._telefono = value;
    }
    get notas() {
        return this._notas;
    }
    set notas(value) {
        this._notas = value;
    }
    modificarPersona(nuevaDireccion, nuevoTelefono, nuevoMail) {
        this._direccion = nuevaDireccion;
        this._telefono = nuevoTelefono;
        this._mail = nuevoMail;
    }
}
exports.Persona = Persona;
