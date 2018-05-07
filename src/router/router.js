import App from '../App'
import Home from '../page/home/Home.vue'
import Item from '../page/item/Item.vue'
import Tabs from '../page/tabs/tabs.vue'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: Home
  }, {
    path: '/Item',
    component: Item
  }, {
    path: '/Tabs',
    component: Tabs
  }]
}]
