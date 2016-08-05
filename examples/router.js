export default {
  '/docs/introduce': {
    component: require('./docs/introduce')
  },
  '/docs/getting-started': {
    component: require('./docs/getting-started')
  },
  '/button': {
    name: 'button',
    groupName: 'basic',
    component: require('./basic/button')
  },

  '/layout': {
    name: 'layout',
    groupName: 'basic',
    component: require('./basic/layout')
  },

  '/checkbox': {
    name: 'checkbox',
    component: require('./form/checkbox')
  },

  '/form': {
    name: 'form',
    component: require('./form/form')
  }
}
