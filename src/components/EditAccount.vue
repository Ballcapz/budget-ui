<template>
  <form class="account">
    <h2 class="account__header">Account: {{account.name}} </h2>
    <h3 class="account__balance">
      Balance: $ <input type="text" :value="account.balance" name="balance" />
    </h3>
    <h3 class="account__categories">Categories</h3>
    <ul>
      <li v-for="(percent, category, id) in account.percentageByCategory" :key="id">
        <span class="account__key">{{category}}:&nbsp;</span>
        <span class="account__value">
          <input type="text" :value="percent" :id="`percent-${category}`" /> %
        </span>
      </li>
    </ul>
    <button class="account__save" @click="save">Save</button>
  </form>
</template>

<script>

export default {
  name: 'Account',
  props: {
    account: Object,
  },
  data: () => ({
    name: '',
    balance: 0,
    categories: [
      {
        category: '',
        percent: '',
      },
    ],
  }),
  methods: {
    save() {
      // save the singleAccount in the store
      console.log(this.$props.account);
    },
  },
};
</script>


<style lang="sass" scoped>
.account
  font-family: Helvetica, Arial, sans-serif

  .account__header
    font-size: 2em

  .account__balance
    font-size: 1.5em

  .account__categories
    font-size: 1.5em

  .account__save
    margin: 2% auto
    padding: .5em 1em
    border-radius: .25em
    background-color: #3f57b3
    color: #f9f9f9
    width: 6%

    &:hover
      background-color: #9fa3ff
      cursor: pointer

  ul
    list-style-type: none
    margin: 0
    padding: 0

    li
      margin-top: 2%
      .account__key
        font-size: 1em

      .account__value
        font-size: 1em

</style>
