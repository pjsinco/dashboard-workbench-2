import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import List from '@/components/List.vue'

describe('List.vue', () => {
  it('renders li for each item in props.items', () => {
    const items = ['foo', 'bar', 'baz']
    const wrapper = shallow(List, { propsData: { items } })

    expect(wrapper.findAll('li')).toHaveLength(items.length)
  })

  it('has the same HTML structure', () => {
    const items = ['foo', 'bar', 'baz']
    const renderer = createRenderer()
    const wrapper = shallow(List, { propsData: { items } })
    
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    })
  })
})

