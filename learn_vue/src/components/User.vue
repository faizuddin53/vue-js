<template>
{{ title }}

 <RouterLink  :to="{ name: 'home'}"> Back to Home</RouterLink>
 <button @click="backtohome()"> Back to Home</button>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'User',
    data() {
        return {
            title: 'User Componnent'
        }
    },
    created() {
         // to check the params changes
        this.$watch(
            () => this.$route.params.id,
            (newId, oldId) => {
                // console.log("hi",newId, oldId)
            }
        )
    },
    methods:{
          backtohome(){
              this.$router.push({name:'home'})
          }
    },

    // setUp use for define reative state in option API
    setup() {
    // Define reactive state
    const count = ref(0);

    // Define methods
    function increment() {
      count.value++;
    }

    // Expose variables and functions to the template
    return {
      count,
      increment
    };
  }

}
</script>


<style>
</style>
