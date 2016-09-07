import navConfig from './nav.config.json'

let routes = []
const addRouter = (page) => {
  routes.push({
    path: page.path,
    meta: {
      title: page.title,
      name: page.name
    },
    component: require(`./docs/${page.name}.md`)
  })
}
navConfig.map(nav => {
  if (nav.groups) {
    nav.groups.map(group => {
      group.list.map(page => addRouter(page))
    })
  }
  if (nav.children) {
    nav.children.map(page => addRouter(page))
  }
})

export default routes
