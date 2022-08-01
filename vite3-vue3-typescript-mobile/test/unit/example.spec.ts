import {isNumber} from '@/utils/tools'
import { mount } from '@vue/test-utils'
import HelloJest from '@/components/HelloJest.vue'

test("is number",()=>{
    expect(isNumber(3)).toBe(true)
})


describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const wrapper = mount(HelloJest, { props: { msg } })

    expect(wrapper.find('h1').text()).toEqual(msg)
  })
})