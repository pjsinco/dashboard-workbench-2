import { mount } from 'vue-test-utils'
import MessageToggle from '@/components/MessageToggle.vue'

describe('MessageToggle.vue', () => {

  it('displays default message', () => {
    const wrapper = mount(MessageToggle)
    expect(wrapper.text()).toContain('default message')
  })

  it('toggles the message when button is clicked', () => {
    const wrapper = mount(MessageToggle)
    const button = wrapper.find('#toggleMessage')
    const p = wrapper.find('p')

    button.trigger('click')

    expect(p.text()).toBe('message')

    button.trigger('click')

    expect(p.text()).toBe('toggled message')
  })

})

