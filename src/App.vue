<template>
  <div id="appVue" class="background">
    <nav id="appNav" v-show="!(path ==='/LogoView' || path ==='/OtherView' || path ==='/InviteViewVer3' || path ==='/')">
      <router-link to="/LogoView">首頁</router-link> |
      <!-- <router-link to="/InviteViewCopy">邀請函</router-link> | -->
      <router-link to="/InviteViewVer3">邀請函</router-link> |
      <router-link to="/ScheduleView">活動資訊</router-link> |
      <!-- <router-link to="/about">關於</router-link> | -->
      <router-link to="/seating">桌次</router-link> |
      <!-- <router-link to="/">首頁</router-link> | -->
      <router-link to="/DonationView">參加方式</router-link> |
      <router-link to="/DonateListView">捐款名錄</router-link> |
      <router-link to="/UploadImg">照片上傳區</router-link> |
      <router-link to="/OtherView">停車資訊</router-link>

      <!-- ScheduleView -->
      <div style="font-family: 'Avenir, Helvetica, Arial, sans-serif'; font-weight: bold; text-align: center; font-size: 25px; color: #3F6C90;">
        <img src="../src/views/LOGO-40-FINAL-01.png" alt="" width="250" height="auto">
        <!-- <h2 style="font-family: '標楷體'; font-weight: bold; text-align: center; font-size: 25px; color: #3F6C90;"> -->
          <br>資管40 智慧創新 永續發展
        <!-- </h2> -->
      </div>
    </nav>
    
    <router-view/>
    
  </div>

  <!-- <footer>
    <p>From 2024</p>
    <p>聯繫方式： L4J</p>
  </footer> -->


</template>

<script>
export default {
  name:'App',
  data() {
    return {
      path:''
    }
  },
  mounted() {
    this.path=this.$route.path;
  },
  watch:{
    $route(to){
      this.path=to.path
    }
  }
}
</script>


<style>
#appVue {
  margin: 0 auto;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 22px;
}

#appNav {
  
  /* padding: 30px; */
  padding-top: 30px; /* 文字上移50像素 */
  background-size: cover;
  /* background-image: url(../src/celebrate.gif); */
  background-image: url(../src/views/navbar_background.jpg);
  /* width: 100%; */
}
#appNav img {
  /* margin-left: -250px; /* 调整图像与导航链接之间的间距 */
  /* margin-bottom: -100px; */ 
  
}
nav a {
  margin:0 auto;
  font-weight: bold;
  color:#3F6C90;
  
}

nav a.router-link-exact-active {
  /* color: darkorange; */
  color: #DF9055;
}


/* footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff; 
  padding: 10px; 
  text-align: center; 
} */


@media screen and (max-width: 1000px) {

  #appNav  {
    font-size: 20px; /* 调整字体大小 */
    display: block;
  }

}

</style>
