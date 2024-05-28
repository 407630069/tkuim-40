<template>
  <div id="app" class="background" style="font-family:Avenir, Helvetica, Arial, sans-serif ;">
    <div id="info">
      <nav id="LogoNav">
      
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
      
    </nav>
      <router-view/>
    
      <!-- <img src="../views/LOGO-40-FINAL-02.png" alt="" > -->
      <div style="font-family: 'Avenir, Helvetica, Arial, sans-serif'; font-weight: bold; text-align: center; font-size: 25px; color: #3F6C90;">
        <img src="../views/LOGO-40-FINAL-02.png" alt="" width="250" height="auto">
        <!-- <h2 style="font-family: '標楷體'; font-weight: bold; text-align: center; font-size: 25px; color: #3F6C90;"> -->
          <br>資管40 智慧創新 永續發展
        <!-- </h2> -->
      </div>
      <div class="ScheduleHeader">
        <h1 style="padding-top: 30px;">淡江大學資管系40週年系慶</h1>
        <h3>活動時間：113年10月26日(星期六)9:00-16:00</h3>
        <h3>&nbsp;活動地點：淡江大學-淡水校園-學生活動中心&nbsp;&nbsp;&nbsp;</h3>
      </div>
    </div>

    <div class="content">
      <div class="left-body">
        <h2>活動介紹</h2>
        <p>
          淡江大學資訊管理學系自創立以來，已走過了四十年的光輝歷程，今年迎來了一個重要的里程碑。
          在這漫長的歲月中，資訊管理學系培育了無數傑出的專業人才，
          在各行各業中發光發熱，為社會做出了卓越貢獻。

          為了慶祝這個特別的時刻，我們籌劃了一場盛大的系慶餐會慶祝活動。
          這次活動不僅是為了慶祝四十週年，
          更是為了凝聚系友情誼，共同回顧過去的成就，展望未來的發展。我們希望透過這次活動，
          讓各位系友有機會相聚一堂，共同分享彼此的故事與成就，
          同時也為系上的未來發展注入新的動力與活力。

          活動中，我們將安排豐富精彩的節目，包括回顧系史的影片播放、
          嘉賓分享以及交流互動環節等。除此之外，我們還準備了精美的禮品和紀念品，
          以表達我們對各位系友一直以來的支持與感激之情。

          誠摯邀請各位系友蒞臨參加，共同見證這個特別時刻的到來。
        </p>
      </div>

      <div class="right-body">
        
           <video  controls>
              <source src="../views/淡江資管40周年慶宣傳影片1.mp4" type="video/mp4">
              您的瀏覽器不支援影片播放。
          </video>
      </div>

      
    </div>


    

      
    


  </div>
</template>

<script>
export default {
  name: "AboutView",
};
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
  font-size: 20px;
}

#LogoNav {
  text-align: center;
  font-size: 22px;
}



nav {
  text-align: center;
  padding-top: 30px; 
  display: block;
}

nav a {
  font-weight: bold;
  color: #3F6C90;
}

nav a.router-link-exact-active {
  color: #DF9055;
}





#info {
  text-align: center;
  padding: 10px;
  background-color: #c8f0f7;
  position: relative;
  background-image: url("navbar_background.jpg");
  background-size: 100% 100%; /* 讓背景圖片完全符合頁面 */
  background-position: center top;

  max-width: 100%;
  height: auto;

}

#info img {
  
  height: auto;
  max-width: 40%;
}



.ScheduleHeader {
  text-align: center;
  max-width: 100%;
  height: auto;

}



.left-body {

  float: left;
  width: 50%;
  height: 500px;
  padding: 35px;
  text-align: left;

}

.right-body{
  float: left;
  width: 40%;
  padding: 30px;

}


.right-body video{
  width: 90%;
  height: 90%;
  padding-top: 10%;

}



@media screen and (max-width: 1000px) {

  #LogoNav  {
    font-size: 20px; /* 调整字体大小 */
    display: block;
  }

  .ScheduleHeader h1 {
    font-size: 24px; /* 调整标题字体大小 */
  }
  
  .ScheduleHeader h3 {
    font-size: 16px; /* 调整副标题字体大小 */
  }

  .content {
    flex-direction: column;
  }

  .left-body,
  .right-body {
    height: auto;
    width: 90%;
  }

  .right-body{
    padding-top:0px;
    
  }

  

}


</style>
