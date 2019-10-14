import { shallowMount } from '@vue/test-utils';
import Account from '@/components/Account.vue';

describe('Account.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(Account);
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
