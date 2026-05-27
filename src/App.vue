<script setup>
import { ref, onMounted } from 'vue'

// 1. DATOS EMBEBIDOS (Metidos directamente aquí para evitar errores de rutas)
const SERVICIOS_FESTIVAL = [
  {
    id: 1,
    titulo: 'Música',
    descripcion: 'Sumérgete en beats y atmósferas de música electrónica: energía, luces y noches sin parar.',
    textoBoton: 'Más información',
    tipo: 'descanso'
  },
  {
    id: 2,
    titulo: 'Creatividad',
    descripcion: 'Espacios y talleres para explorar ideas, técnicas y procesos creativos durante el evento.',
    textoBoton: 'Más información',
    tipo: 'creatividad'
  },
  {
    id: 3,
    titulo: 'Pensamiento',
    descripcion: 'Charlas y encuentros para reflexionar, dialogar y expandir la manera de ver el mundo.',
    textoBoton: 'Más información',
    tipo: 'pensamiento'
  }
]


// 2. LÓGICA DEL TEMPORIZADOR (Modificación dinámica del DOM)
const tiempo = ref({ dias: 84, horas: 4, minutos: 35, segundos: 48 })

onMounted(() => {
  setInterval(() => {
    if (tiempo.value.segundos > 0) {
      tiempo.value.segundos--
    } else {
      tiempo.value.segundos = 59
      if (tiempo.value.minutos > 0) {
        tiempo.value.minutos--
      } else {
        tiempo.value.minutos = 59
        if (tiempo.value.horas > 0) {
          tiempo.value.horas--
        } else {
          tiempo.value.horas = 23
          if (tiempo.value.dias > 0) tiempo.value.dias--
        }
      }
    }
  }, 1000)
})
</script>

<template>
  <div class="w-full min-h-screen bg-yellow-400 text-zinc-900 dark:bg-yellow-400 dark:text-zinc-900 font-sans antialiased">
    
    <nav class="w-full py-4 px-4 sm:px-6 border-b border-rose-500/30 bg-yellow-400/90 backdrop-blur flex justify-between items-center sticky top-0 z-50">

      <div class="flex items-center">
        <img src="/LOGO.png" alt="Logo" class="h-8 sm:h-10 w-auto" />
      </div>

      <div class="hidden md:flex gap-6 text-[11px] uppercase font-bold tracking-wider text-zinc-600 dark:text-zinc-300">
        <span class="cursor-pointer hover:opacity-70">Home</span>
        <span class="cursor-pointer hover:opacity-70">Line Up</span>
        <span class="cursor-pointer hover:opacity-70">Info</span>
        <span class="cursor-pointer hover:opacity-70">Taquilla</span>
      </div>

      <div class="text-[11px] sm:text-xs px-2 py-1 bg-zinc-200 dark:bg-zinc-800 rounded font-medium whitespace-nowrap">
        ES ↓
      </div>
    </nav>

    <main class="w-full space-y-24 pb-24">
      
      <header class="relative min-h-[70vh] flex flex-col items-center justify-center text-center p-6 bg-zinc-100 dark:bg-zinc-900/50 border-b">
        <div class="absolute inset-0 flex items-center justify-center opacity-5 text-3xl font-black tracking-widest uppercase pointer-events-none">
          [ Espacio de Imagen / Banner Principal de Fondo ]
        </div>

        <div class="relative z-10 space-y-8 w-full max-w-3xl">
          <div class="p-6 sm:p-10 border-2 border-dashed border-zinc-400 rounded-xl max-w-lg mx-auto font-mono text-sm uppercase tracking-widest bg-white/50 dark:bg-zinc-800/50">
            <img src="/ESCLAT.png" alt="ESCLAT" class="h-16 sm:h-20 w-auto mx-auto" />
          </div>

          <div class="grid grid-cols-4 gap-2 md:gap-4 max-w-md mx-auto">
            <div v-for="(valor, unidad) in tiempo" :key="unidad" class="p-3 md:p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700">
              <span class="block text-2xl md:text-4xl font-black font-mono text-zinc-800 dark:text-zinc-100">{{ valor }}</span>
              <span class="text-[10px] uppercase tracking-widest text-zinc-400 block mt-1">{{ unidad }}</span>
            </div>
          </div>

          <div>
            <button class="px-8 py-3 bg-rose-500 text-white font-bold rounded shadow-md hover:bg-rose-600 transition uppercase tracking-wider text-xs">
              Acceso Entradas
            </button>
          </div>
        </div>
      </header>

      <section class="max-w-5xl mx-auto px-4 space-y-8">
        <div class="text-center space-y-2">
          <h2 class="inline-block bg-rose-500/90 text-white px-4 py-2 rounded-full text-2xl md:text-3xl font-black tracking-tight uppercase">
            Creatividad, musica y pensamiento
          </h2>

          <div class="w-12 h-1 bg-zinc-400 mx-auto rounded"></div>
        </div>

        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="servicio in SERVICIOS_FESTIVAL"
            :key="servicio.id"
            class="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl flex flex-col justify-between items-center text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div class="space-y-3 my-4 w-full">
              <h3
              class="text-base font-bold uppercase tracking-wider text-white px-4 py-2 rounded-lg bg-rose-500"
              >{{ servicio.titulo }}</h3>
              <p class="text-xs text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed mx-auto">{{ servicio.descripcion }}</p>

              <div v-if="servicio.titulo === 'Música'" class="mt-4 flex flex-col items-center gap-3">
                <div class="w-full max-w-xs text-[10px] uppercase tracking-widest font-mono" style="color:#eae611">
                  Música
                </div>
              </div>

            </div>

            <a
              :href="servicio.titulo === 'Zona de Descanso' ? '/info/descanso' : '/info/general'"
              target="_blank"
              rel="noreferrer"
              class="px-5 py-2 bg-rose-500 text-white rounded text-[10px] font-bold uppercase tracking-wider hover:bg-rose-600 transition inline-flex items-center justify-center shadow-sm"
            >
              {{ servicio.textoBoton }}
            </a>
          </div>
        </div>
      </section>

      <section class="max-w-5xl mx-auto px-4 space-y-8">
        <div class="text-center">
          <h2 class="text-2xl font-black tracking-tight uppercase">Galería del Evento</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[260px]">
          <div class="border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-lg flex flex-col justify-between p-4 bg-zinc-100/50 dark:bg-zinc-900/50">
            <span class="text-[10px] font-mono text-zinc-400">[Contenedor Multimedia 01]</span>
            <span class="text-xs uppercase tracking-wider font-bold text-zinc-400">Escenario</span>
          </div>
          <div class="border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-lg flex flex-col justify-between p-4 bg-zinc-100/50 dark:bg-zinc-900/50">
            <span class="text-[10px] font-mono text-zinc-400">[Contenedor Multimedia 02]</span>
            <span class="text-xs uppercase tracking-wider font-bold text-zinc-400">Ambiente</span>
          </div>
          <div class="border-2 border-dashed border-zinc-300 dark:border-zinc-800 rounded-lg flex flex-col justify-between p-4 bg-zinc-100/50 dark:bg-zinc-900/50">
            <span class="text-[10px] font-mono text-zinc-400">[Contenedor Multimedia 03]</span>
            <span class="text-xs uppercase tracking-wider font-bold text-zinc-400">Entorno</span>
          </div>
        </div>
      </section>

    </main>
  </div>
</template>
