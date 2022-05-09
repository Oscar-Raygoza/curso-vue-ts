// Autofocus input with `v-focus` directive
export default {
    bind (el: HTMLElement, binding: any) {
      el.focus()
      el.innerHTML = import.meta.env.VITE_BASE_BACKEND_URL ?  import.meta.env.VITE_BASE_BACKEND_URL : "custom base url";
      el.style.background = "#ff0";
      el.style.color = "#000";
    }
  }