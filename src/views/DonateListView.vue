<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  
    <div>
      <h1 style="padding: 45px;">捐款芳名錄</h1>
  
      <!-- <table class="table">
        <tbody>
          <tr v-for="(chunk, index) in chunkedUsers" :key="index">
            <td style="text-align: center;" v-for="(user, i) in chunk" :key="i">{{ user }}</td>
          </tr>
        </tbody>
      </table> -->
    </div>

    <div id="content">
      <div id="left-c"></div>
      <div id="middle-c">
        <table class="table table-light">
        <tbody>
          <tr v-for="(chunk, index) in chunkedUsers" :key="index">
            <td style="text-align: center; border: none;" v-for="(user, i) in chunk" :key="i">{{ user }}</td>
          </tr>
        </tbody>
      </table>

      </div>
      <div id="right-c"></div>
    </div>


  </template>
  
  <script>
  export default {
    data() {
      return {
        users: [
          "黃明達", "李佳憲", "陳俊甫", "蕭瑞祥", "王志清", "黃英哲", "鄭哲斌", "黃永玄", "龔文儀", "鄭培宇", "周靜芳", "劉炳忠", "胡德民", "賴振麟", "施盛寶", "林志銘", "朱懿忠",""
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
    border-collapse: collapse;
    
  }

  table, th, td {
  border: none; /* 移除表格和單元格的邊框 */
}

  #content {
  display: flex;
  flex-wrap: nowrap;
  }

  #left-c, #middle-c, #right-c {
    background-color: white;
    height: auto; /* 自动调整高度 */
  }

  #left-c {
    flex: 1; /* 使左右栏根据中间栏的高度自动调整 */
    background-color: white;
    height: auto; /* 自动调整高度 */
  }

  #right-c {
    flex: 1; /* 使左右栏根据中间栏的高度自动调整 */
    background-color: white;
    height: auto; /* 自动调整高度 */
  }

  #middle-c {
    flex: 3; /* 使中间栏占据更大的宽度比例 */
    background-color: white;
    height: auto; /* 自动调整高度 */
  }
  

  </style>
  