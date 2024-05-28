<template>
    <div class="responsive-layout">
      <!-- <div class="header">
        Header
      </div> -->
      <div class="content">
        <div class="body">
          <img src="../views/2405082352.png" alt="" class="responsive-image">
        </div>
      </div>
      <div class="footer">
        Footer
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "AboutView",
  };
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
  }
  
  .content {
    display: flex; /* 使用 Flexbox 布局 */
    justify-content: center; /* 水平居中 */
  }
  
  .body {
    text-align: center;
    display: flex; /* 使用 Flexbox 布局 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    line-height: 200px;
  }
  
  .footer {
    background: orange;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
  
  /* Responsive image styling */
  .responsive-image {
    max-width: 100%;
    height: auto;
  }
  </style>
  