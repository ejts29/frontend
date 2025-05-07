console.log('Componente montado esta es la pruba de vue.js');


const { createApp } = Vue;
createApp({
  data() {
    return {
      email: '',
      mensajeExito: null,
      mensajeError: null,
      noticias: [
        {
          id: 1,
          img: 'assets/imag/unidad de transito1.jpg',
          titulo: 'Nueva ubicación de la unidad de tránsito',
          texto: 'La unidad de tránsito ahora opera en Av. Pedro de Valdivia 123, en un espacio más amplio y accesible para la comunidad. Ven y conoce sus nuevas dependencias.',
          fecha: 'Mayo 2025'
        },
        {
          id: 2,
          img: 'assets/imag/unidad de transito2.jpg',
          titulo: 'Atención extendida en la unidad de tránsito',
          texto: 'A partir de junio, la unidad de tránsito atenderá de 08:00 a 18:00 hrs para ofrecer mayor disponibilidad de trámites y consultas a los vecinos.',
          fecha: 'Junio 2025'
        },
        {
          id: 3,
          img: 'assets/imag/unidad de transito3.jpg',
          titulo: 'Nuevo sistema de turnos en línea',
          texto: 'Se ha implementado un sistema de turnos en línea que permite reservar atención en la unidad de tránsito desde cualquier dispositivo móvil.',
          fecha: 'Julio 2025'
        }
      ]
    };
  },
  methods: {
    suscribirseNewsletter() {
      const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Limpiar mensajes previos
      this.mensajeExito = null;
      this.mensajeError = null;

      if (!this.email) {
        this.mensajeError = "Por favor, ingresa tu correo electrónico.";
      } else if (!regexCorreo.test(this.email)) {
        this.mensajeError = "El correo no es válido.";
      } else {
        console.log(`Correo suscrito: ${this.email}`);
        this.mensajeExito = "¡Gracias por suscribirte a nuestra newsletter!";
        this.email = '';
      }
    }
  },
  components: {
    'noticia-card': {
      props: ['titulo', 'texto', 'fecha', 'img'],
      template: `
        <div class="col">
          <div class="card h-100">
            <img :src="img" class="card-img-top" :alt="titulo" height="250">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">{{ titulo }}</h5>
              <p class="card-text flex-grow-1">{{ texto }}</p>
              <p class="card-text"><small class="text-body-secondary">{{ fecha }}</small></p>
            </div>
          </div>
        </div>`
    },
    'newsletter-form': {
      template: `
        <div class="d-flex justify-content-center">
          <div class="newsletter-form text-center" style="max-width: 300px; width: 100%;">
            <input
              type="email"
              v-model="email"
              class="form-control mb-2"
              placeholder="Ingresa tu correo"
              required
            >
            <button @click="suscribirseNewsletter" class="btn btn-primary w-100">Suscribirse</button>

            <p class="mt-2 text-success" v-if="mensajeExito">{{ mensajeExito }}</p>
            <p class="mt-2 text-danger" v-if="mensajeError">{{ mensajeError }}</p>
          </div>
        </div>`,
      data() {
        return {
          email: '',
          mensajeExito: null,
          mensajeError: null
        };
      },
      methods: {
        suscribirseNewsletter() {
          const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          // Limpiar mensajes previos
          this.mensajeExito = null;
          this.mensajeError = null;

          if (!this.email) {
            this.mensajeError = "Por favor, ingresa tu correo electrónico.";
          } else if (!regexCorreo.test(this.email)) {
            this.mensajeError = "El correo no es válido.";
          } else {
            console.log(`Correo suscrito: ${this.email}`);
            this.mensajeExito = "¡Gracias por suscribirte a nuestra newsletter!";
            this.email = '';
          }
        }
      }
    }
  }
  
}).mount('#app'); 