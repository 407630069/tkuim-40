<template>
  <div class="responsive-layout">
    <!-- <div class="header">
      Header
    </div> -->
    <div class="content">
      <div class="sidebar">
        
        <letter-view></letter-view>
      </div>
      <div class="body">
        
          
          <iframe width="95%" height="315" src="https://www.youtube.com/embed/3V8UC-EWRyo" frameborder="0" allowfullscreen></iframe>
          <iframe width="95%" height="315" src="https://www.youtube.com/embed/3V8UC-EWRyo" frameborder="0" allowfullscreen></iframe>
          
        
      </div>
    </div>
    <div class="footer">
      Footer
    </div>
  </div>
</template>

<script>

import LetterView from '../components/LetterView.vue';

export default {
  name:"AboutView",
  components:{
    LetterView
  }
}
</script>

<style scoped>
.responsive-layout {
  max-width: 100%; /* 设置最大宽度 */
  margin: 0 auto; /* 水平居中 */
}

.header {
  background: orange;
  height: 100px;
  width: 100%;
  text-align: center;
  line-height: 100px;
}

.content {
  display: flex; /* 使用 Flexbox 布局 */
}

.sidebar {
  background: rgb(189, 211, 230);
  width: 70%; /* 设置侧边栏宽度为容器宽度的 20% */
  text-align: center;
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  line-height: 200px;
}


.body {
  background: white;
  flex: 1; /* 自动填充剩余空间 */
  text-align: center;
  line-height: 250px;
  align-items: center;
}

.footer {
  background: orange;
  height: 100px;
  text-align: center;
  line-height: 100px;
}


</style>
