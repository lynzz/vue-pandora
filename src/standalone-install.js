export default function (PandoraUI) {
  // auto install in standalone mode
  if (typeof window !== 'undefined' && window.Vue) {
    window.PandoraUI = PandoraUI
    window.Vue.use(PandoraUI)
  }
}
