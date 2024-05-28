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

    
    <div id="mail">

        
        <div class="letter">
            <!-- <p class="date">2024年4月8日</p> -->
            <p>親愛的資管系友:</p><br>
            
            <p style="text-align: left;">光陰如白駒過隙，轉眼間淡江大學資管系已走過了40年的光輝歷程。在這充滿光榮與挑戰的40年裡，資管系秉持著培育優秀資訊技術與管理人才，為社會孕育出數千位卓越的菁英分子。

                當我們已從年輕學子成為社會中堅，您是否還會回憶起那段求學歲月的點點滴滴？還記得克難坡上洒下的汗水、宮燈教室裡激烈的討論、學生活動中心的歡聲笑語，以及商管大樓內熱烈的思想激盪嗎?那段青春歲月已成為我們資管人難以磨滅的記憶。
            
                40年來在歷屆系主任、系上教授與系辦同仁努力耕耘下，資管系蓬勃發展，雖然近年陸續有教師退休，但很感謝所有退休老師奠定了資管系過去的發展基礎，提升本系的能見度與好口碑。此外，我們也積極延攬新的師資加入，不僅能延續本系的優良傳統，更希冀期能開創新局與未來願景。
            
                正值資管系創系40週年，我們誠摯地邀請您回到母校淡江，與老師及校友們齊聚一堂，重溫青春歲月，見證資管系的蛻變與成長，一同暢談資管系的承先啟後，再造光輝資管。
            
                懇請您傳遞這個盛會的消息，號召更多資管校友回到淡江，一同在10月26日的「資管40週年」慶祝餐會上，用實際行動支持母系，譜寫資管更燦爛的明天。
            
            <br><br>今日，您以資管系為榮;明日，資管系將因您們而更顯光華。</p>
            <p>期待與您們共同歡聚淡江。</p>
            <p class="closing">淡江大學 資訊管理學系<br>系主任 施盛寶<br>敬邀</p>

            <h3>淡江大學資管系40週年系慶</h3>
            <h3>活動時間：113年10月26日(星期六)9:00-16:00</h3>
            <h3>活動地點：淡江大學-淡水校園-學生活動中心</h3>
        </div>
    </div>

    
  
    
  </template>
  
  <script>
  export default {
    // 组件的逻辑代码
  }
  </script>
  
  <style scoped>
  /* 基本样式 */
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
  padding-top: 30px;
  background-size: cover;
  background-image: url(../views/navbar_background.jpg);
}

nav a {
  font-weight: bold;
  color: #3F6C90;
}

nav a.router-link-exact-active {
  color: darkorange;
}

#info h1 {
  padding: 20px;
  font-size: 50px;
  color: rgb(36, 152, 187);
  margin-bottom: 20px;
}

#mail {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: block;
  align-items: center;
  justify-content: center;
  height: auto;
  background-color: #c2deee;
  background-image: url("宮燈道04.jpg");
  background-size: cover;
  background-position: center bottom;
}

.letter {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.501);
  box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
  color: #fafafa;
  font-family: 'Times New Roman';
}

.date, .closing {
  text-align: right;
}

.buttons {
  position: absolute;
  right: 20px;
  top: 20px;
  display: flex;
  gap: 10px;
}

.select {
  display: flex;
  align-items: center;
  gap: 5px;
}

.logo {
  width: 20px;
  height: 20px;
}

.letter p {
  font-size: 22px;
  line-height: 2;
  font-family: "標楷體", "Microsoft JhengHei", sans-serif;
}

.letter h3 {
  font-family: "標楷體", "Microsoft JhengHei", sans-serif;
}

/* 响应式缩放样式 */
@media (max-width: 1600px) {
  .scale-container {
    transform: scale(0.9);
    transform-origin: top left;
  }
}

@media (max-width: 1200px) {
  .scale-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
}

@media (max-width: 768px) {
  .scale-container {
    transform: scale(0.6);
    transform-origin: top left;
  }

  #mail h3 {
    font-size: 14px;
  }

  .letter p {
  font-size: 14px;
  line-height: 1.5;
  font-family: "標楷體", "Microsoft JhengHei", sans-serif;
}
  
}

  
  </style>
  