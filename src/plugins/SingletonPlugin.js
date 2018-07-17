import SingletonOptions from '../components/SingletonComponent'
import Vue from 'vue'

const SingletonComponent = Vue.extend(SingletonOptions)

let singletonComponent = new SingletonComponent().$mount()

// leave the export, even if you don't use it
export default ({ app, router, Vue }) => {
  Vue.prototype.$singletonComponent = singletonComponent.$el
}
