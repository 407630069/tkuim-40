<template>
    <div id="TitleFormat">
        <nav id="TF" >
            <router-link to="/">首頁</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/seating">Seat</router-link> |
            <router-link to="/LogoView">Logo</router-link> |
            <router-link to="/OtherView">Other</router-link>
      
    </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
#TitleFormat {
            
            text-align: center;
            padding: 10px;   
            position: relative;
            /* background-size:100%100%; 讓背景圖片完全符合頁面 */
            /* background-position: center top; */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            font-size: 20px;
        }


nav {
  padding: 100px;
  padding-top: 35px; /* 文字上移50像素 */

  /* width: 100%; */
}

nav a {
  font-weight: bold;
  color:darkorange
  
}

nav a.router-link-exact-active {
  color: white
}

</style>