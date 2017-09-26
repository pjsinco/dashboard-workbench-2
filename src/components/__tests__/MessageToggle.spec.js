import Vue from 'vue'
import MessageToggle from '@/components/MessageToggle.vue'

describe('MessageToggle.vue', () => {
  it('displays default message', () => {
    const Ctor = Vue.extend(MessageToggle)
    const vm = new Ctor().$mount()

    expect(vm.$el.textContent).toContain('default message')
  })
})

