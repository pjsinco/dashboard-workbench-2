import { shallow } from 'vue-test-utils'
import ProgressBar from '@/components/ProgressBar.vue'
import { createRenderer } from 'vue-server-renderer'
import CountUp from 'countUp'

describe('ProgressBar', () => {

  let id, title, wrapper

  beforeEach(() => {
    id = 'foo'
    title = 'bar'
    wrapper = shallow(ProgressBar, 
                     { propsData: { id,
                                    chartData: {
                                      earned: 10.0,
                                      required: 120.0,
                                      name: title
                                    } } })
  })

  it('uses the id passed to it', () => {
    expect(wrapper.contains('#foo')).toBe(true)
  })

  it('displays the name of the chart', () => {
    const title = wrapper.find('.dbviz__title')
    expect(title).toBe(title)
  })

  it.skip('displays the credits earned', () => {
    const earned = wrapper.find(`#count-${id}`)
    expect(earned.text()).toBe('10')
  })

  it('displays the credits required', () => {
    const required = wrapper.find('.tail--required > span')
    expect(required.text()).toBe('120')
  })

  it('displays the credits togo', () => {
    const required = wrapper.find('.tail--togo')
    expect(required.text()).toBe('110 to go')
  })

  it('has .has-text-danger when progress is < 33%', () => {
    const earned = wrapper.find(`#count-${id}`)
    const tailEarned = wrapper.find('.tail--earned')
    expect(earned.hasClass('has-text-danger')).toBe(true)
    expect(tailEarned.hasClass('has-text-danger')).toBe(true)
  })

  it ('has .has-text-warning when 33% <= progress < 67%', () => {
    const id = 'foo'
    const title = 'bar'
    let wrapper = shallow(ProgressBar, 
                     { propsData: { id,
                                    chartData: {
                                      earned: 40,
                                      required: 120,
                                      name: title
                                    } } })
    let earned = wrapper.find(`#count-${id}`)
    let tailEarned = wrapper.find('.tail--earned')
    expect(earned.hasClass('has-text-warning')).toBe(true)
    expect(tailEarned.hasClass('has-text-warning')).toBe(true)


    wrapper = shallow(ProgressBar, 
                     { propsData: { id,
                                    chartData: {
                                      earned: 39,
                                      required: 120,
                                      name: title
                                    } } })
    earned = wrapper.find(`#count-${id}`)
    tailEarned = wrapper.find('.tail--earned')
    expect(earned.hasClass('has-text-warning')).toBe(false)
    expect(tailEarned.hasClass('has-text-warning')).toBe(false)

    wrapper = shallow(ProgressBar, 
                     { propsData: { id,
                                    chartData: {
                                      earned: 80,
                                      required: 120,
                                      name: title
                                    } } })
    earned = wrapper.find(`#count-${id}`)
    tailEarned = wrapper.find('.tail--earned')
    expect(earned.hasClass('has-text-warning')).toBe(false)
    expect(tailEarned.hasClass('has-text-warning')).toBe(false)
  })

  it ('has .has-text-success progress >= 67%', () => {
    const id = 'foo'
    const title = 'bar'
    let wrapper = shallow(ProgressBar, 
                     { propsData: { id,
                                    chartData: {
                                      earned: 80,
                                      required: 120,
                                      name: title
                                    } } })

    let earned = wrapper.find(`#count-${id}`)
    let tailEarned = wrapper.find('.tail--earned')
    expect(earned.hasClass('has-text-success')).toBe(true)
    expect(tailEarned.hasClass('has-text-success')).toBe(true)

    wrapper = shallow(ProgressBar, 
                     { propsData: { id,
                                    chartData: {
                                      earned: 79,
                                      required: 120,
                                      name: title
                                    } } })

    earned = wrapper.find(`#count-${id}`)
    tailEarned = wrapper.find('.tail--earned')
    expect(earned.hasClass('has-text-success')).toBe(false)
    expect(tailEarned.hasClass('has-text-success')).toBe(false)

    wrapper = shallow(ProgressBar, 
                     { propsData: { id,
                                    chartData: {
                                      earned: 179,
                                      required: 120,
                                      name: title
                                    } } })

    earned = wrapper.find(`#count-${id}`)
    tailEarned = wrapper.find('.tail--earned')
    expect(earned.hasClass('has-text-success')).toBe(true)
    expect(tailEarned.hasClass('has-text-success')).toBe(true)
  })
})

