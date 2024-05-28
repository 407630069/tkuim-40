<template>

    
  <div class="body">

    <div class="all_intView">
        <div class="left-body">
        <img src="../views/2405082352.png" alt="" >
      </div>
      <div class="right-body">
        <div class="iframe-container">
          <iframe class="responsive-iframe" src="https://www.youtube.com/embed/3V8UC-EWRyo" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>
export default {

};
</script>

<style scoped>


.body {
  width: 100vw;
  height: 1000px;
  background-image: url(../views/宮燈道04.jpg);
  background-size: cover; /* 讓背景圖片完全符合頁面 */
  background-position: center top;
  margin: 0; /* 确保没有任何边距 */
  padding: 0; /* 确保没有任何内边距 */
  overflow-x: hidden; /* 禁用水平滚动条 */
}



.left-body {
  float: left;
  width: 60%; /* 设置侧边栏宽度为容器宽度的 60% */

}

.right-body {
  float: left;
  width: 40%;
  text-align: center;
  
  
}

.footer {
  height: 100px;
  text-align: center;
}

.iframe-container {
  position: relative;
  padding-top: 56.25%; 
  width: 90%;
}

.responsive-iframe {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 100%;
}

iframe {

  width: 100%;
  height: auto;
}




@media screen and (max-width: 1300px) {



.content {
  flex-direction: column;
}

.left-body,
.right-body {
  height: auto;
  width: 90%;
  text-align: center;
}

.right-body{
  padding-top:0px;
  
}

iframe {

width: 80%;
height: auto;
padding: 5%;
}

.responsive-iframe {
  
  position: absolute;
  top: 0;
  left: 0;

}

}

@media  (max-width: 780px) {

  .left-body img{
    max-width: 100%;
    height: auto;
  }

}


</style>
