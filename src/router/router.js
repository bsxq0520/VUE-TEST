import App from '../App'
import Home from '../page/home/Home.vue'
import Item from '../page/item/Item.vue'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: Home
  }, {
    path: '/Item',
    component: Item
  }]
}]
