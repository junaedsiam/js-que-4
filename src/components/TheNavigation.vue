<template>
  <nav class="level has-background-link has-text-white main-navigation is-mobile">
    <BaseContainer>
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5 ">
            <strong class="has-text-white">Post Engine</strong> 
          </p>
        </div>
        <p class="level-item">
            <router-link to="/">Posts</router-link>
        </p>
        <p class="level-item">
            <router-link to="/category">Categories</router-link>
        </p>
      </div>
    </BaseContainer>
  </nav>
</template>

<script>
export default {};
</script>

<style>
    .main-navigation{
        padding:1rem 0;
    }
    .main-navigation .subtitle{
        margin-right:2.5rem;
    }
    .main-navigation a{
        color:white;
    }
    .main-navigation a.router-link-active.router-link-exact-active{
        color:yellow;
    }
    .main-navigation .level-item{
        justify-content: flex-start;
        flex-grow:unset !important;
    }
</style>