import { shallow } from 'vue-test-utils'
import Salutation from '@/components/Salutation.vue'

let name, wrapper, span

beforeEach(() => {

  name = 'Foo'
  wrapper = shallow(Salutation, { propsData: { name } })
  span = wrapper.find('span')

})  

describe('Salutation', () => {

  it('displays the name passed to it', () => {
    expect(span.text()).toContain('Foo')
  })

  it('says good morning during morning hours', () => {

    for (let i = 4; i < 12; i++) {
      wrapper.setData({ hour: i })
      expect(span.text()).toContain('morning')
    }
  })

  it('says good afternoon during afternoon hours', () => {

    for (let i = 12; i < 17; i++) {
      wrapper.setData({ hour: i })
      expect(span.text()).toContain('afternoon')
    }

  })

  it('says good evening during evening hours', () => {
    for (let i = 17; i < 24; i++) {
      wrapper.setData({ hour: i })
      expect(span.text()).toContain('evening')
    }

    for (let i = 0; i < 4; i++) {
      wrapper.setData({ hour: i })
      expect(span.text()).toContain('evening')
    }

  })

})
