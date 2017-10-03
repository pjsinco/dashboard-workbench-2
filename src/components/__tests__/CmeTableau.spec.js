import { mount } from 'vue-test-utils'
import CmeTableau from '@/components/CmeTableau.vue'

const data = { "general": { 
                  "earned": 67,
                  "cat1aEarned": 26 
               },
               "primaries": [
                 { "desc": "Pediatrics",
                   "earned": 25.5,
                   "required": 50,
                   "generalRequired": 96,
                   "cat1aRequired": 0,
                   "subs": [
                     { "desc": "Pediatric Neurology",
                       "earned": 1.5,
                       "required": 13 }
                   ] },
                 { "desc": "Family Medicine",
                   "earned": 3,
                   "required": 30,
                   "generalRequired": 150,
                   "cat1aRequired": 30,
                   "subs": [] }
               ] }

const primary = data.primaries.map(primary => {
    return Object.assign({}, 
                         primary ,
                         { general: data.general })
})[0]

describe('CmeTableau', () => {

  it('generates 2 tableaus for ', () => {

    const wrapper = mount(CmeTableau, { propsData: { primary } })

    const containers = wrapper.findAll('.column')

    expect(containers.length).toBe(2)

  })

})

