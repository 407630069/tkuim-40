<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

  <div id="app" class="background"  style="max-width: 100%; height: auto;">
    <nav id="appNav" >
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
      <div style="font-family: 'Avenir, Helvetica, Arial, sans-serif'; font-weight: bold; text-align: center; font-size: 25px; color: #3F6C90;">
        <img src="../views/LOGO-40-FINAL-01.png" alt="" width="250" height="auto">
        <!-- <h2 style="font-family: '標楷體'; font-weight: bold; text-align: center; font-size: 25px; color: #3F6C90;"> -->
          <br>資管40 智慧創新 永續發展
        <!-- </h2> -->
      </div>
    </nav>
    <router-view/>

  </div>

  <h1 style="padding: 45px;">校園停車資訊</h1>
  <div id="info"  style="max-width: 100%; height: auto;">

    
    

    <h3>
      <i class="fas fa-exclamation-circle"></i>  
      <!-- <span style="color: #ff0000; font-weight: 800;">本校自112年8月1日起</span> 
      <span style="color: #ff0000; font-weight: 800;">汽車進入本校臨停時需繳納停車費！</span> -->
    </h3>
      
    <!-- <a href="https://agox-system.tku.edu.tw/VE/t_park.aspx">
      <img src="../views/parking.png" alt="" style="max-width: 100%; height: auto;">
    </a> -->

    <img src="../views/tku_map.jpg" alt="" style="max-width: 100%; height: auto;">
</div>
</template>

<script>
export default {
  // 组件的逻辑代码
}
</script>

<style scoped>
#app {
  
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
  background-image: url(../views/navbar_background.jpg);
  /* width: 100%; */
}

nav a {
  font-weight: bold;
  color:#3F6C90
  
}

nav a.router-link-exact-active {
  color: #DF9055;
}




#info h1 {

  padding: 20px;
    font-size: 50px; /* 标题字体大小 */
    color: rgb(36, 152, 187); /* 标题颜色 */
    margin-bottom: 20px; /* 标题下方外边距 */
    

    
  }

  @media screen and (max-width: 768px) {

    #info h3 {
      
      font-size: 14px;
      padding-bottom: 10px;
    }

  }

</style>
