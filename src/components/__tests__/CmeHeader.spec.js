import { shallow } from 'vue-test-utils'
import { createRenderer } from 'vue-server-renderer'
import CmeHeader from '@/components/CmeHeader.vue'

describe.skip('CmeHeader.vue', () => {
  it('renders a select element when user has > 1 primaries', () => {

    const primaries = [ 'primary1', 'primary2' ]
    const wrapper = shallow(CmeHeader)

    expect(wrapper.find('select')).anything()
    
  })
})

