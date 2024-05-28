<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
      <div id="textView">
     
      <h1 style="padding-top: 50px;">活動時程</h1>

      <div id="textH3" style="padding-bottom: 50px;">

        <h3>活動時間：112年10月28日(星期六)</h3>
        <h3>地點：淡江大學淡水校園學生活動中心</h3>
        <h3>聯絡電話：02-26215656&nbsp;&nbsp;#2547&nbsp;&nbsp;#2645</h3>
        <h3>聯 絡 人：林軒誼 助理、黃暐婷 助理</h3>
        <!-- <h3>活動時程：</h3> -->

      </div>
    </div>
  
  <table class="table">
  <thead>
    <tr >
      <th scope="col" style="width: 10%;">時間</th>
      <th scope="col" style="width: 10%;">內容</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <!-- <th scope="row">09:30~10:30</th> -->
      <td>09:30~10:30</td>
      <td>報到</td>
    </tr>

    <tr>
      <!-- <th scope="row">10:30~11:30</th> -->
      <td>10:30~11:30</td>
      <td>相見歡</td>
    </tr>
    
    <tr>
      <!-- <th scope="row">11:30~12:00</th> -->
      <td>11:30~12:00</td>
      <td>
        慶祝大會<br>
        (提供各式各樣的免費活動，包括:手作活動、遊戲攤位)
      </td>
    </tr>

    <tr>
      <!-- <th scope="row">15:00~</th> -->
      <td>15:00~</td>
      <td>校園巡禮</td>
    </tr>


  </tbody>
</table>
  
  
  </template>

  
  <script>
  export default {
    // 组件的逻辑代码
  }
  </script>
  
  <style scoped>
  thead {
    background-color: lightblue;
  }

  tbody {
    text-align: center;
    
  }
  #textH3 {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 20px;
        }

        #textH3 h3 {
            text-align: left;
            width: auto;
            max-width: 500px; /* 可以根据需要调整这个宽度 */
        }


  @media screen and (max-width: 768px) {

#textH3 h3 {
  font-size: 20px;
  text-align: center;
}

}

  
  </style>
  