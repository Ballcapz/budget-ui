<template>
  <div class="account">
    <h2 class="account__header">Account: {{account.name}}</h2>
    <h3 class="account__balance">
      Balance: ${{account.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}
    </h3>
    <h3 class="account__categories">Categories</h3>
    <ul>
      <li v-for="(percent, category, id) in account.percentageByCategory" :key="id">
        <span class="account__key">{{category}}:&nbsp;</span>
        <span class="account__value">
          ${{((percent / 100) * account.balance).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Account',
  props: {
    account: Object,
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
