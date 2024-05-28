<template>
  <div id="upload">
    
    <h1 style="padding-top: 40px; text-align: center;padding-bottom: 40px;">照片回憶錄-上傳區</h1>

    <div id="content">

      <div id="left-c"></div>
      <div id="middle-c">
        <p>
          系慶的腳步聲越來越近了，想必許多系友們都已迫不及待地想重溫那些青澀卻美好的校園時光。為了讓大家能夠再次感受昔日歡樂的氛圍中，我們特別規劃了「照片回憶錄」活動，誠摯邀請各位系友踴躍上傳學生時期的有趣照片，讓我們一起用鏡頭重現青春的印記，共同譜寫系慶的動人篇章，將由系辦統一匯整後，當天播放。        
        </p>

      </div>
      <div id="right-c"></div>

    </div>
    
    
    <div style="text-align: center; padding-top:10px ">
        <a href="https://reurl.cc/Vz8onb"><img src="../views/upload_GoogleForm.png" alt="上傳照片" width="250px" height="auto"></a>
    </div>


    
  </div>
</template>

<script>

</script>

<style scoped>
/* 在這裡添加樣式，以定制表單的外觀 */

#left-c {
  float: left;
  width: 28%;
  height: 200px;
  background-color: white;

}

#middle-c {
  float: left;
  width: 44%;
  height: 200px;
  background-color: white;
  text-align: left;
  font-size: 22px;
}

#right-c {
  float: left;
  width: 28%;
  height: 200px;
  background-color: white;

}

@media screen and (max-width: 1200px) {

  #left-c {height: 250px;}

  #middle-c {
  float: left;
  /* width: 40%; */
  height: 250px;
  background-color: white;
  text-align: left;
  font-size: 20px;
}

#right-c {height: 250px;}

}


@media screen and (max-width: 800px) {

#left-c {
  float: left;
  width: 25%;
  height: 250px;

}

#middle-c {
  float: left;
  width: 50%;
  height: 250px;
font-size: 18px;
}

#right-c {
  float: left;
  width: 25%;
  height: 250px;

}
}


@media screen and (max-width: 550px) {

#left-c {
  float: left;
  width: 15%;
  height: 260px;

}

#middle-c {
  float: left;
  width: 70%;
  height: 260px;
font-size: 18px;
}

#right-c {
  float: left;
  width: 15%;
  height: 260px;

}
}


</style>
