<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  
    <div>
      <h1 style="padding: 30px;">捐款芳名錄</h1>
  
      <table class="table">
        <tbody>
          <tr v-for="(chunk, index) in chunkedUsers" :key="index">
            <td style="text-align: center;" v-for="(user, i) in chunk" :key="i">{{ user }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
        "黃明達", "黃明達", "黃明達", "黃明達", "黃明達", "施主任", "施主任", 
        "遠傳peter胡德民", "林志銘", "neil李佳憲", "neil李佳憲", "黃英哲", 
        "賴振麟kevin", "taien", "龔文儀", "朱懿忠", "鄭哲斌老師", "劉炳忠", 
        "鄭培宇老師", "劉炳忠", "黃憲輝", "黃憲輝", "蕭瑞祥老師", "蕭瑞祥老師",
         "功典資訊陳俊甫", "周靜芳",""
        ],
      };
    },
    computed: {
      chunkedUsers() {
        const chunkSize = 3;
        return this.users.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / chunkSize);
  
          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // 開始一個新的 chunk
          }
  
          resultArray[chunkIndex].push(item);
          return resultArray;
        }, []);
      },
    },
  };
  </script>
  
  <style scoped>
  

  table {
    /* margin-left: -100px; */
    text-align: center;
    
  }
  

  </style>
  