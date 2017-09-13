<template>
   <div> 
    <nav class="navbar has-border-bottom" role="navigation" aria-label="main navigation">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <a class="navbar-item is-size-3 has-text-weight-bold" href="/">
            AOA 
          </a>

          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-size-7" href="#">For Patients <i class="arrow-right"></i></a>
            <a class="navbar-item is-size-7" href="#">JAOA <i class="arrow-right"></i></a>
            <a class="navbar-item is-size-7" href="#">The DO <i class="arrow-right"></i></a>
            <a class="navbar-item is-size-7" href="#">Contact Us</a>
            <a class="navbar-item is-size-7 has-text-weight-bold is-uppercase has-letter-space-1" href="#">Board Certification <i class="arrow-right"></i></a>
            <a class="navbar-item is-size-7 has-text-weight-bold is-uppercase has-letter-space-1" href="#">Login</a>
          </div>
        </div>
      </div> <!-- .container -->
    </nav>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container is-fluid">
        <div class="navbar-brand">
          <a class="navbar-item is-size-6" href="#">Students <i class="arrow-down"></i></a>
          <a class="navbar-item is-size-6" href="#">Residents <i class="arrow-down"></i></a>
          <a class="navbar-item is-size-6" href="#">CME <i class="arrow-down"></i></a>
          <a class="navbar-item is-size-6" href="#">Practicing Medicine <i class="arrow-down"></i></a>
          <a class="navbar-item is-size-6" href="#">Opportunities <i class="arrow-down"></i></a>
          <a class="navbar-item is-size-6" href="#">Policy & Advocacy <i class="arrow-down"></i></a>
          <a class="navbar-item is-size-6" href="#">Membership</a>
          <a class="navbar-item is-size-6" href="#">News & Events</a>
        </div>
        <div class="navbar-end">
        </div>
      </div> <!-- .container -->
    </nav>
   </div> 
</template>

<script>

  export default {

    name: 'nav-header',

    data () {

      return {
      }
    }
  }

</script>

<style lang="scss">

  header.header {
    position: relative;
    width: 100%;
    height: 110px;
    background: #888;
    z-index: 999;

    &:after {
      content: "Site nav";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateY(-50%);
      color: #555;
      font-size: 24px;
    }
  }
</style>
