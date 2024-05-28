<template>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div style="font-family:Avenir, Helvetica, Arial, sans-serif ;">
      <h1 style="padding-top: 40px; text-align: center;">參加方式</h1>

      <h2 style="padding-top: 15px; text-align: center;">本次餐會採認桌或個人報名方式，相關資訊如下：</h2>
    

    <h2 style="padding-top: 30px;">認桌報名</h2>
    <table class="table">
        <thead class="table-secondary">
            <tr>
            <th scope="col"  style="width: 8%;">方式</th>
            <th scope="col"  style="width: 10%;">費用</th>
            <th scope="col"  style="width: 25%;">說明</th>
            <th scope="col"  style="width: 20%;">紀念品</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row" >單純認桌</th>
            <td>12,000元</td>
            <td>由系上邀請系友參與餐會，認桌者無需提供用餐名單資訊。</td>
            <td rowspan="2">
                <ul >
                    <li>40週年系慶玻璃杯</li>
                    <li>40週年系慶紀念T-shirt</li>
                    <li>40週年系慶手機支架</li>
                </ul>
            </td>
            </tr>
            <tr>
            <th scope="row">一般認桌</th>
            <td>12,000元</td>
            <td>認桌者自行邀請10人（請填寫用餐人員資訊）</td>
            
            </tr>
            
        </tbody>
    </table>       

    <!-- =================================================================== -->
    
         
    <h2 style="padding-top: 30px;">個人報名</h2>
    <table class="table">
        <thead class="table-secondary">
            <tr>
            <th scope="col"  style="width: 10%;">身分</th>
            <th scope="col"  style="width: 10%;">費用</th>
            <th scope="col"  style="width: 25%;">說明</th>
            <th scope="col"  style="width: 20%;">紀念品</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row" >大人、<br>國中以上</th>
            <td>1,200元</td>
            <td rowspan="2">備註：幼童免費</td>
            <td rowspan="2">
                <ul>
                    <!-- <li class="list-group-item">40週年系慶紀念T-shirt</li> -->
                    <li>40週年系慶紀念T-shirt</li>
                    <li>40週年系慶手機支架</li>
                </ul>
            </td>
            </tr>
            <tr>
            <th scope="row">國小學童</th>
            <td>600元</td>
            <!-- <td>認桌者可自行找人（請填寫用餐人員報名資訊，至多10人）</td> -->
            
            </tr>
            
        </tbody>
    </table> 

      <!-- =================================================== -->

      <h2 style="padding-top: 30px;">捐款及報名資訊</h2>
    <table class="table payment">
        <thead class="table-secondary">
            <tr>
            <th scope="col"  style="width: 20%;">捐款方式-行動支付</th>
            
            <!-- <th scope="col"  style="width: 30%;">捐款方式-匯款</th> -->
            <th scope="col"  style="width: 20%;">報名表單(必填)</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td rowspan="2">

                <div style="text-align: center;">
                    <a href="https://reurl.cc/p3Zn8a"><img src="../views/QrCode_TKUIM40_Donate_v2.png" alt="淡江支付平台" width="250px" height="auto"></a>
                </div>

            </td>
            
            <!-- <td rowspan="2">
                <ul style="list-style-type: none; padding: 10px 10px 5px 10px">
                    <li>郵局代號：700</li>
                    <li>帳號：</li>
                    
                    <li>戶名：李世傑</li>
                </ul>

                <span class="material-symbols-outlined" style="display: inline-block;">star_rate</span>
                <h4 style="display: inline-block;">匯款時備註欄請註明匯款人姓名，以利進行後續捐款處理事宜。</h4>

            </td> -->
            <td rowspan="2">
                <div style="text-align: center;">
                    <a href="https://reurl.cc/r9Z4aO"><img src="../views/TKUIM_Form_qrcode.png" alt="TKUIM系慶表單" width="250px" height="auto" ></a>
                </div>
            </td>
            </tr>


            
            
            
        </tbody>
    </table> 

      <!-- =================================================== -->
      <h2 style="padding: 30px;">操作步驟說明 Step by Step</h2>
    <img src="../views/繳款流程圖_工作區域2.jpg" alt="" style="max-width: 50%; height: auto;">

    <div class="container-fluid">
	<div class="row">
		<div class="col-md-3">
		</div>
		<div class="col-md-6">
        <p style="text-align: left; padding: 20px; font-size: 25px;">
            贊助本次活動的金額會以系友的名義捐款給系上，再由學校統一開立正式捐款收據(可用於報稅時個人列舉扣除額扣除)。
※本校將於每年2月上傳前一年度捐款資料至國稅局，以便各捐款人於5月申報個人綜合所得稅時使用，請捐款人務必填寫身分證號碼。
※若您尚需取得紙本捐款收據，請提供您的通訊地址，以便本校寄送。
        </p>
		</div>
		<div class="col-md-3">
		</div>
	</div>
</div>



      
    </div>
  </template>
  
  <script>
  export default {
    // 组件的逻辑代码
  }
  </script>
  
  <style>
  /* 组件的样式 */

  .table {
  border-collapse: collapse; /* 合併邊框 */
}

.table th,
.table td {
  border: 1px solid #ddd; /* 設定邊框樣式及顏色 */
  padding: 8px; /* 設定內邊距 */
  text-align: left; /* 設定文字對齊 */
}

.table th {
  background-color: #f2f2f2; /* 設定表頭背景色 */
}

.payment th{
    
    text-align: center;
}

.table.payment img {
  max-width: 100%; /* 图像的最大宽度为其父容器的100% */
  height: auto; /* 让浏览器自动计算图像的高度，以保持其宽高比 */
}


@media screen and (max-width: 768px) {

    .table{
        width: 100%;
    }
    .table th {
        font-size: 15px;
        width: 10%;
        
    }
    .table td {
        font-size: 13px;
        
    }
    .table ul {
        
        padding: 0;
        margin: 0;
        margin-left: 10px;
        }

    .table li {
        font-size: 14px;
        margin-left: 0;
    }

    .td img{
        max-width: 100%;
        height: auto;

    }
    .payment h4{

        font-size: 14px;
    }

    .payment span{

        font-size: 16px;
        }



}


  </style>
  