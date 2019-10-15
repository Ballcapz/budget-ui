<template>
  <div>
    <EditAccount :account="account" />
  </div>
</template>

<script>
import EditAccount from '@/components/EditAccount.vue';

export default {
  name: 'Edit',
  components: {
    EditAccount,
  },
  computed: {
    account() {
      return this.$store.state.singleAccount;
    },
  },
  methods: {
    async getAccountDetails() {
      try {
        await this.$store.dispatch('getAccountByName', this.$route.params.name);
      } catch (ex) {
        console.error(ex);
      }
    },
  },
  mounted() {
    this.getAccountDetails();
  },
};
</script>

<style>

</style>
