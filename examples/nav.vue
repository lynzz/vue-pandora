<template>
  <aside class="aside-container">
    <ul>
      <li>
        <h4>{{componentsData.name}}</h4>
        <ul>
          <template v-for="subGroup of componentsData.groups">
            <li class="type-divider">{{subGroup.groupName}}</li>
            <li v-for="subNav in subGroup.list">
              <router-link :to="subNav.path">
                {{subNav.name | capitalize}}
                <span class="chinese">{{subNav.title}}</span>
              </router-link>
            </li>
          </template>
        </ul>
      </li>
      <li>
        <h4>{{installData.name}}</h4>
        <ul>
          <li v-for="item of installData.children">
            <router-link :to="item.path">
              {{item.name | capitalize}}
              <span class="chinese">{{item.title}}</span>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
</template>

<script>
  import navConfig from './nav.config.json'
  export default {
    name: 'nav',
    data () {
      return {
        componentsData: navConfig[0],
        installData: navConfig[1]
      }
    },
    filters: {
      capitalize (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    }
  }
</script>
