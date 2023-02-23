const app = new Vue({
    el: '#app',
    data: {
        mascotas: [],
        nombre: '',
        raza: '',
        color: '',
        imagen: '',
        especie: '',
        genero: '',
        descripcion:'',
        edad:''
    },
    methods: {
        agregarUsuario: function () {
            if (this.mascotas.filter(mascota => mascota.masc == this.nuevaMascota).length <= 0) {
                this.mascotas.push({
                    nombre: this.nombre,
                    raza: this.raza,
                    color: this.color,
                    imagen: this.imagen,
                    especie: this.especie,
                    genero: this.genero,
                    descripcion: this.descripcion,
                    edad: this.edad
                });
                console.log(this.mascotas);
                this.nombre='';
                this.raza='';
                this.color='';
                this.imagen='';
                this.especie='';
                this.genero='';
                this.descripcion='';
                this.edad='';
            } else {
                alert("La mascota ya existe");
            }
        }
    }

});