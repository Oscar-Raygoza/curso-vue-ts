# curso-vue-ts

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

# Requirement

* Node > v14
* Vs Code 
* las bases de html, css y javascript

## Deploy
vite build --mode prod

## Index

* Historia
* Alternativas ( otros framewors para la creación de interfaces )
* Vue ( introducción a la programación reactiva ) 
    * reactividad en JavaScript
    * reactividad
    * estado
    * interfaz basada en el estado  
    * componentes
    * Programación Reactiva orientada a Componentes
    * framework progresivo
    * características principales
    * SPA
    * SSR
    * Ecosystem Vue Js
* directivas
    * interpolacion 
* options api
* ciclos de vida
* composition API
* vue router
* vue 2 vs vue 3 (vue 3 -> Tiene mejor soporte para typescript)
* tree-shaking ( mejoras en el bundle en vue 3 )
* example post data
* composition function or composables ( custom hooks )
* vuex

## Historia 

<a href="https://www.youtube.com/watch?v=OrxmtDw4pVI&ab_channel=Honeypot">Documental de Evan You</a><br>
<a href="https://evanyou.me/"> Pagina de Evan You</a>

![image](https://user-images.githubusercontent.com/37164456/166176357-f35dabf7-c330-4384-aa42-1cf131d0ce64.png)

## Alternativas

Vue no es la única herramienta que nos permite crear interfaces para nuestros desarrollos, existen gran variedad de frameworks y librerías que nos dan las herramientas para crear nuestras interfaces.

![image](https://user-images.githubusercontent.com/37164456/166173812-22017256-f9b3-40a3-a8a1-d1eaeb4c9818.png)

* Vanilla
* Solid
* Inferno
* Svelte
* Preact
* Vue
* React
* Angular
* Ember

Las características principales de estos frameworks es que cada uno de ellos destaca de javascript, y todos con un enfoque diferente para actualizar el DOM, manejando los eventos del navegador, y brindado una experiencia más satisfactoria para crear nuestros desarrollos.

The Progressive
JavaScript Framework

An approachable, performant and versatile framework for building web user interfaces.
(Un marco accesible, eficaz y versátil para crear interfaces de usuario web.)

## Vue

* <a href="https://vuejs.org/">Documentación de Vue</a>

### reactividad en JavaScript

Para comprender el paradigma de la programación reactiva en JavaScript y entender cómo es que funcionan internamente librerías y frameworks como React, Angular, Vue, Svelte, Polymer, etc; es necesario comprender algunos conceptos importantes:


### reactividad
¿Qué es reactivo ?

La reactividad de los datos, simplemente es que la interfaz de usuario de un sitio o aplicación se modifica a los cambios en los datos de la misma.

Cada vez que se actualizan los datos, la interfaz de usuario lo hace automáticamente para que coincida con la lógica de programación de la aplicación.

### estado
¿Cuál es el estado ?

El estado son los datos de tu aplicación.

Entonces, ¿por qué se le llama estado en lugar de datos?

Porque tiene una duración determinada, el estado son datos en un momento particular de la aplicación, por ello decimos: <b>el estado actual de los datos de la aplicación.</b>

### interfaz basada en el estado
Una interfaz basada en el estado, es aquella que usa los datos de la aplicación en todo momento para pintar sus elementos visuales.

Los elementos visuales de la interfaz suelen llamarse componentes.

### componentes

Para definir el término componente citaré la definición de Nicole Sullivan que dice:

“It's a repeating visual pattern, that can be abstracted into an independent snippet of HTML, CSS and possibly JavaScript.” Nicole Sullivan.

Traduciendo:

Es un patrón visual repetido, que se puede resumir en un fragmento independiente de HTML, CSS y posiblemente JavaScript.

<b>Los componentes</b>:

Son un fragmento de la interfaz que cumple una única función.
Son reutilizables ( principio DRY - Don´t Repeat Yourself ).
Son independientes, tanto de su contexto como del resto de componentes.
Son autocontenidos, no filtran estilos o funcionalidad a otros componentes.

### Programación Reactiva orientada a Componentes

Con lo descrito anteriormente podemos decir que una aplicación reactiva y basada en componentes nos permiten separar el código y los elementos de la interfaz en pequeñas piezas independientes y reutilizables que estarán aisladas una de otras, y en lugar de intentar apuntar y manipular directamente los elementos del DOM cuando la aplicación reaccioné a las acciones del usuario, ésta actualizará su estado y luego la interfaz se repintará con los cambios en el estado.

![image](https://user-images.githubusercontent.com/37164456/166182487-0c4d1929-994c-4821-a9a2-ad8547243587.png)

<a href="https://jonmircha.com/reactividad-javascript#:~:text=La%20reactividad%20de%20los%20datos,de%20programaci%C3%B3n%20de%20la%20aplicaci%C3%B3n.">más información</a>

### framework progresivo
¿Qué es un framework "progresivo"?

Vue es considerado un framework progresivo, lo que quiere decir que puede ser usado tanto para tareas muy básicas, como alternativa a JQuery, como para tareas bastante más complejas como puede ser la creación de una SPA (Single-page application) completa.

<b>Dejen de usar jquery en 2022!</b>

Las funcionalidades principales (el renderizado y el sistema de componentes) están en una pequeña biblioteca, sin embargo es posible añadir todas las funcionalidades que tienen otros frameworks completos como el routing en el lado del cliente , build systems como webpack o systemjs y manejo de estados con herramientas como vuex o redux, añadiendo bibliotecas adicionales. La filosofía detrás de esta forma de construir el framework la explica su creador en esta conferencia donde explica que los frameworks introducen complejidad con el objetivo de disminuir la complejidad de la construcción de aplicaciones, sin embargo muchas veces, o se quedan cortos (si la aplicación es muy grande), o se pasan (si el framework introduce más complejidad de la que necesita la aplicación). Por lo tanto este esquema progresivo permite incluir en la aplicación solo las herramientas que se necesitan.

### características principales

Entre las características principales de vue, encontramos que es un framwork <b>Reactivo</b> que implementa el enlace de datos en dos direcciones (entre vista y modelo) de una manera muy eficiente y rápida.

![image](https://user-images.githubusercontent.com/37164456/166180319-d0924614-9f31-4b46-b542-de37f4259172.png)

Lo que nos permite crear componentes re-utilizables dentro de nuestra aplicacion.

<img src="https://user-images.githubusercontent.com/37164456/166181353-fc9e7cef-6d45-4b6d-b259-afba86e23459.png" width="750px" height="386px"/>

### ¿que pasa con vue y el virtual dom?

![image](https://user-images.githubusercontent.com/37164456/166187583-a2213ca0-728a-460c-bf15-a34b613418c9.png)

El <b>DOM</b> o <b>Document Object Model</b> es el árbol de nodos que generan los navegadores para entender nuestro código HTML. Y el Virtual DOM es un falso DOM, una copia que nos permite hacer cálculos pesados sin afectar el rendimiento del verdadero DOM.

![image](https://user-images.githubusercontent.com/37164456/166186986-3e52fea3-6597-4fa2-8b77-defae3b88e4a.png)
![image](https://user-images.githubusercontent.com/37164456/166187860-4ba8c9a5-af2d-48bf-bbd4-f599f87c1063.png)


### Ventajas:

* Te permite controlar cuando se actualiza el DOM real, si un elemento se modifica repetidas veces podemos hacer que se renderize solo su última modificación.
* Es mucho menos costoso modificar una propiedad de un objeto JS que un elemento de un árbol, por lo que una aplicación web con DOM virtual será mucho mas eficiente.
* Sólo se vuelven a renderizar los elementos que hayan sufrido algún cambio, por ejemplo, si queremos cambiar de una página a otra sólo se velverán a renderizar los elementos que tengan alguna diferencia con el de la página anterior.

### Desventajas:

* Consume mas recursos, ya que necesita tener una copia del DOM cargada en memoria mientras siga funcionando la aplicación.
* En un programa pequeño y con cambios pocos frecuentes en sus elementos el DOM virtual puede hacer que la aplicación funcione mas lenta que con el DOM real, ya que agrega lógica a cada actualización.
    
![image](https://user-images.githubusercontent.com/37164456/166188338-eeee9e75-cc59-44ac-8fff-4de08041ce4a.png)

<b>referencias</b>
https://platzi.com/blog/virtual-dom/
https://somospnt.com/blog/88-post-dom-virtual-2

### SPA
¿Qué es una SPA ? ( Single page application )

### SSR
¿Qué es una SSR ( Server side rendering )

### Ecosystem Vue Js

| Project               | Status                                                       | Description                                             |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------------------- |
| [vue-router]          | [![vue-router-status]][vue-router-package]                   | Single-page application routing                         |
| [vuex]                | [![vuex-status]][vuex-package]                               | Large-scale state management                            |
| [vue-cli]             | [![vue-cli-status]][vue-cli-package]                         | Project scaffolding                                     |
| [vue-loader]          | [![vue-loader-status]][vue-loader-package]                   | Single File Component (`*.vue` file) loader for webpack |
| [vue-server-renderer] | [![vue-server-renderer-status]][vue-server-renderer-package] | Server-side rendering support                           |
| [vue-class-component] | [![vue-class-component-status]][vue-class-component-package] | TypeScript decorator for a class-based API              |
| [vue-rx]              | [![vue-rx-status]][vue-rx-package]                           | RxJS integration                                        |
| [vue-devtools]        | [![vue-devtools-status]][vue-devtools-package]               | Browser DevTools extension                              |

[vue-router]: https://github.com/vuejs/vue-router
[vuex]: https://github.com/vuejs/vuex
[vue-cli]: https://github.com/vuejs/vue-cli
[vue-loader]: https://github.com/vuejs/vue-loader
[vue-server-renderer]: https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer
[vue-class-component]: https://github.com/vuejs/vue-class-component
[vue-rx]: https://github.com/vuejs/vue-rx
[vue-devtools]: https://github.com/vuejs/vue-devtools
[vue-router-status]: https://img.shields.io/npm/v/vue-router.svg
[vuex-status]: https://img.shields.io/npm/v/vuex.svg
[vue-cli-status]: https://img.shields.io/npm/v/@vue/cli.svg
[vue-loader-status]: https://img.shields.io/npm/v/vue-loader.svg
[vue-server-renderer-status]: https://img.shields.io/npm/v/vue-server-renderer.svg
[vue-class-component-status]: https://img.shields.io/npm/v/vue-class-component.svg
[vue-rx-status]: https://img.shields.io/npm/v/vue-rx.svg
[vue-devtools-status]: https://img.shields.io/chrome-web-store/v/nhdogjmejiglipccpnnnanhbledajbpd.svg
[vue-router-package]: https://npmjs.com/package/vue-router
[vuex-package]: https://npmjs.com/package/vuex
[vue-cli-package]: https://npmjs.com/package/@vue/cli
[vue-loader-package]: https://npmjs.com/package/vue-loader
[vue-server-renderer-package]: https://npmjs.com/package/vue-server-renderer
[vue-class-component-package]: https://npmjs.com/package/vue-class-component
[vue-rx-package]: https://npmjs.com/package/vue-rx
[vue-devtools-package]: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd



## Directivas

 {{ interpolacion }}
<a href="https://fernando-herrera.com/docs/VueJS-atajos.pdf">Guía de atajos de vue</a>

### v-model

Puede usar la directiva v-model para crear bindings de datos bidireccionales (two-way binding) en elementos input, textarea y select de un formulario. La directiva busca automáticamente la manera correcta de actualizar el elemento según el tipo de entrada. Aunque un poco mágico, v-model es esencialmente syntax sugar para actualización de datos a través de eventos de entradas del usuario, además de mostrar un cuidado especial para algunos casos de borde.

``` html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>test</title>
</head>

<body>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
  <div id="app">
    <span>El mensaje multilínea es:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="agregar múltiples líneas"></textarea>
  </div>
  <script>
    const app = new Vue({
      el: "#app",
      data: {
        message: "v-model"
      }
    })
  </script>
</body>
</html>   
```

### propiedades computadas

Las expresiones en el template son muy convenientes, pero están diseñadas para operaciones simples. Poner demasiada lógica en sus templates puede hacerlos grandes, complejos y difíciles de mantener. Por ejemplo:

``` html
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

En este punto, el template ya no es simple y declarativo. Debe mirarlo por un segundo antes de darse cuenta de que muestra message al revés. El problema se agrava cuando desea incluir el mensaje invertido en su template más de una vez.

Es por eso que para cualquier lógica compleja, deberia usar una propiedad computada.

``` html
<div id="example">
  <p>Mensaje original: "{{ message }}"</p>
  <p>Mensaje invertido computado: "{{ reversedMessage }}"</p>
  <textarea v-model="message" placeholder="agregar múltiples líneas"></textarea>

</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>

<script>
  const vm = new Vue({
  el: '#example',
  data: {
    message: 'test'
  },
  computed: {
    // un getter computado
    reversedMessage: function () {
      // `this` apunta a la instancia vm
      return this.message.split('').reverse().join('')
    }
  }
})
</script>
```

https://es.vuejs.org/v2/guide/computed.html

### watch

``` html
<div id="example">
  <p>Mensaje watch: "{{ fullMessage }}"</p>
  <p>Mensaje original: "{{ message }}"</p>
  <p>debouncedSearchValue: "{{ debouncedSearchValue }}"</p>
  <p>Mensaje invertido computado: "{{ reversedMessage }}"</p>
  <textarea v-model="message" placeholder="agregar múltiples líneas"></textarea>

</div>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>

<script>
  const vm = new Vue({
  el: '#example',
  data: {
    message: 'test',
    firstName: 'Foo',
    lastName: 'Bar',
    debouncedSearchTiemeOut: null,
    debouncedSearchValue: null
  },
  computed: {
    // un getter computado
    reversedMessage: function () {
      // `this` apunta a la instancia vm
      return this.message.split('').reverse().join('')
    },
    fullMessage: function() {
      return this.firstName + " " + this.lastName + " " + this.message;
    },
  },
  watch: {
    message: "serchValue"
  },
  methods: {
    serchValue(value, oldValue) {
      // Create debounced
      console.log({value, oldValue})
      if (this.debouncedSearchTiemeOut)
        clearTimeout(this.debouncedSearchTiemeOut);

      this.debouncedSearchTiemeOut = setTimeout(() => {
        this.debouncedSearchValue = value
      }, 1000);
    }
  },
})
</script>
```

## Proyecto de Backend

 * <a href="https://github.com/Oscar-Raygoza/backend-pokedex">Link Repository</a>


## Proyecto de fetch github

Creacion de proyecto con vue desde un solo componente para ver nuevas propiedades y practicar desde 0 hasta refactorizar y separa en componentes.

<a href="https://github.com/Oscar-Raygoza/vue-github-commits">vue-github-commits</a>

## Proyecto de  vuex y router blog

Creacion de proyecto de un blog con vuex y vue router

<a href="https://www.github-com/Oscar-Raygoza/blog-vuex-router">link del proyecto</a>

generar un proyecto de typescript con vue@2 y ts.

``` shell
npm init vue@2
```

``` shell
C:\Users\omiramontes\Documents\proyectos4k>npm init vue@2
√ Project name: ... blog-vuex-router
√ Add TypeScript? ... No / *Yes
√ Add Vue Router for Single Page Application development? ... No / *Yes
√ Add Pinia for state management? ... *No / Yes
√ Add Cypress for testing? ... No / *Yes
```
## Official Documentation

 * <a href="https://vuejs.org/">Vue 3</a>
 * <a href="https://github.com/logaretm/vee-validate">Vee Validate Documentation</a>

