<template>
    <link rel='stylesheet'  href= "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"> 
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
 
   
    <h2 style="padding: 50px; text-align: center; font-size: 40px;">桌次分配表</h2>
    <br>
   <div class="home">
     <div class="button-wrapper">
        
       <button v-for="(leader, index) in leaders" :key="index" :value="index" class="button name-size" @click="showDialog(index)">
         <div class="button-content">
            <p style="font-size: 16px; color: blue;">桌次{{ index+1 }}</p>
           <img src="./LOGO-40-FINAL-01.png" width="80" height="80">
           <span :class="{'large-text': leader.length <= 5, 'small-text': leader.length > 5}">
            {{ leader }}
           </span>
           
           <!-- {{ leader }} -->
         </div>
       </button>
     </div>
 
     <!-- 对话框 -->
     <dialog id="infoModal">
      <img src="../views/LOGO-40-FINAL-01.png" alt="" width="100px" height="auto">
       <div v-html="dialogContent" class="content"></div>
       <button id="close" @click="closeDialog" style="border-radius: 5px;">close</button>
     </dialog>
 
   </div>
 </template>
 
 <script>
 import 'bootstrap/dist/css/bootstrap.css';
 
 export default {
   name: 'SeatingView',
   data() {
     return {
       leaders: ["貴賓","貴賓",
       '黃明達', '黃明達', '黃明達', '黃明達', '黃明達', 
       '蕭瑞祥', '蕭瑞祥', '鄭哲斌', '鄭培宇', '胡德民',
        '林志銘', '李佳憲', '李佳憲', '王志清', '黃永玄',
         '黃永玄', '周靜芳', '賴振麟', '朱懿忠','陳俊甫', 
         '黃英哲', '龔文儀', '劉炳忠', '施盛寶', '施盛寶'
              ,"","","","",""
              ,"","","","",""
              ,"","",""
              ],

       members: [['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  
                  ['黃明達', '', '', '', '', '', '', '', '', ''],
                  ['黃明達', '', '', '', '', '', '', '', '', ''],
                  ['黃明達', '', '', '', '', '', '', '', '', ''],
                  ['黃明達', '', '', '', '', '', '', '', '', ''],
                  ['黃明達', '', '', '', '', '', '', '', '', ''],
                  ['蕭瑞祥', '', '', '', '', '', '', '', '', ''],
                  ['蕭瑞祥', '', '', '', '', '', '', '', '', ''],
                  ['鄭哲斌', '', '', '', '', '', '', '', '', ''],
                  ['鄭培宇', '', '', '', '', '', '', '', '', ''],
                  ['胡德民', '', '', '', '', '', '', '', '', ''],
                  ['林志銘', '', '', '', '', '', '', '', '', ''],
                  ['李佳憲', '', '', '', '', '', '', '', '', ''],
                  ['李佳憲', '', '', '', '', '', '', '', '', ''],
                  ['王志清', '', '', '', '', '', '', '', '', ''],
                  ['黃永玄', '', '', '', '', '', '', '', '', ''],
                  ['黃永玄', '', '', '', '', '', '', '', '', ''],
                  ['周靜芳', '', '', '', '', '', '', '', '', ''],
                  ['賴振麟', '', '', '', '', '', '', '', '', ''],
                  ['朱懿忠', '', '', '', '', '', '', '', '', ''],
                  ['陳俊甫', '', '', '', '', '', '', '', '', ''],
                  ['黃英哲', '', '', '', '', '', '', '', '', ''],
                  ['龔文儀', '', '', '', '', '', '', '', '', ''],
                  ['劉炳忠', '', '', '', '', '', '', '', '', ''],
                  ['施盛寶', '', '', '', '', '', '', '', '', ''],
                  ['施盛寶', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', ''],
                  ['', '', '', '', '', '', '', '', '', '']
                ],
       dialogContent: ''
     }
   },
   methods: {
     showDialog(index) {
       
       let members = this.members[index];
 
      
       let content = members.join('\n');
 
       
       this.dialogContent = content;
 
       
       let dialog = document.getElementById('infoModal');
       dialog.showModal();
     },
 
     closeDialog() {
       
       let dialog = document.getElementById('infoModal');
       dialog.close();
     }
   }
 }
 </script>
 
 <style scoped>
 .name-size {
   font-size: 30px;
 }
 .content {
   white-space: pre-line; 
 }
 
 .button-wrapper {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between; 
   margin: 0 auto; 
   max-width: 1000px; 
 }
 
 .button-content {
   display: flex;
   flex-direction: column;
   align-items: center;
 }
 
 .button-content img {
   margin-bottom: 5px; 
 }
 
 .button {
   width: calc(20% - 20px); 
   height: 120px; 
   margin-bottom: 20px; 
   background-color: #f0f0f0; 
   border: none; 
   border-radius: 10px; 
   cursor: pointer; 
 }
 
 @media (max-width: 768px) {
   .button-wrapper {
     flex-direction: column;
     align-items: center; 
   }
 
   .button {
     width: 100%;
     
   }
 }
 

 dialog {
   position:fixed;
  
   border: 1px solid #ccc;
   background-color: #fff;
   padding: 20px;
   font-size: 20px; 
   width: 200px;
   border-radius: 10px;
   /* height: 420px; */
 }
 
 
 dialog p {
   margin-bottom: 10px;
 }

 .large-text {
  font-size: 28px;
}

.small-text {
  font-size: 22px;
}


 </style>
 