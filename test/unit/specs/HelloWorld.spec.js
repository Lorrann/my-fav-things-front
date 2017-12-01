import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import getStore from "../../../src/store/index";
import Vuex from "vuex";

Vue.use(Vuex);

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld);
    Constructor.prototype.$store = getStore();
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    .to.equal('Welcome to Your Vue.js App')
  })
})
