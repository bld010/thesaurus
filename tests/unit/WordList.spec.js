import WordList from '../../src/components/WordList.vue';
import { shallowMount } from '@vue/test-utils';
import '@vue/cli-plugin-unit-jest'

describe('WordList', () => {
  it('should match the snapshot', () => {
    const wrapper = shallowMount(WordList);

    expect(wrapper).toMatchSnapshot();
  })
})