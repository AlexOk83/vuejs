export default {
  bind(el, bindings, vnode) {
    const arg = bindings.arg;
    el.style[arg] = bindings.value
    console.log('bind')
  },
  inserted(el, bindings, vnode) {

    console.log('inserted')
  },
  update(el, bindings, vnode) {

    console.log('update')
  },
  componentUpdated(el, bindings, vnode) {

    console.log('componentUpdated')
  },
  unbind() {
    console.log('unbind')
  }
}


