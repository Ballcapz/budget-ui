<template>
  <div class="home">
    <div class="account-container" v-for="account in accounts" :key="account.name">
      <Account :account="account" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Account from '@/components/Account.vue';

export default {
  name: 'home',
  data: () => ({
    isLoading: true,
  }),
  components: {
    Account,
  },
  computed: {
    accounts() {
      return this.$store.state.accounts;
    },
  },
  methods: {
    async getAccounts() {
      try {
        this.isLoading = true;
        await this.$store.dispatch('getAccounts');
      } catch (ex) {
        console.error(ex);
      }
      this.accounts = this.$store.state.accounts;
      this.isLoading = false;
    },
  },
  mounted() {
    this.getAccounts();
  },
};
</script>
