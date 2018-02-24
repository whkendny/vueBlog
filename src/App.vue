<style lang="css">
  #app {
      height: 100%;
  }
</style>

<!--其他所有的.vue都是放在App.vue中，所以只需要加载App.vue就完全可以把其他的东西加载出-->
<template lang="html">
  <div id="app" v-cloak>
      <router-view></router-view>
  </div>
</template>


<script>
<<<<<<< HEAD
import NProgress from 'nprogress' //页面顶部进度条
import 'nprogress/nprogress.css'
NProgress.configure({
    showSpinner: false
});
import {
    mapState
}
from 'vuex'
=======
// import NProgress from 'nprogress'//页面顶部进度条
// import 'nprogress/nprogress.css'
// NProgress.configure({ showSpinner: false });
import {mapState} from 'vuex'
>>>>>>> 055cf1b3a186aa5c112ec4775302fd2728431161
export default {
    components: {

<<<<<<< HEAD
    },
    methods: {},
    computed: mapState(['progress']),
    watch: {
        progress(val) {
            if (val == 0) {
                // NProgress.set(0)
                NProgress.start();
            } else if (val == 100) {
                NProgress.done();
            } else {
                NProgress.set(val / 100)
                NProgress.start();
            }
        }
    },
    mounted() {
        // NProgress.start();
    }
=======
  },
  methods:{
  },
  computed:mapState(['progress']),
  // watch:{
  //   progress(val){
  //     if(val==0){
  //       NProgress.start();
  //     }else if(val==100){
  //       NProgress.done();
  //     }else{
  //       NProgress.set(val/100)
  //       // NProgress.start();
  //     }
  //   }
  // },
  mounted(){
  }
>>>>>>> 055cf1b3a186aa5c112ec4775302fd2728431161
}

</script>
