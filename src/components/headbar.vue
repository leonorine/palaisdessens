<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a href="/" :class="['navbar-item',{'navbar-item--accueil':head_accueil}]" style="grid-column-start: 1;
        grid-column-end: 2;" id="Accueil">Accueil</a>
        <a href="/reserver" :class="['navbar-item',{'navbar-item--reserver':head_reserver}]" style="grid-column-start: 3;
        grid-column-end: 4" id="Reserver">Réserver</a>
      <a href="/" class = "nav-logo">
        <img src="../../public/logoPDS.png" alt="Logo">      
      </a>
      <a href="/carte" :class="['navbar-item',{'navbar-item--carte':head_carte}]" style="grid-column-start: 7;
        grid-column-end: 8" id="Carte">Carte</a>
        <a href="/contact" :class="['navbar-item',{'navbar-item--contact':head_contact}]" style="grid-column-start: 9;
        grid-column-end: 10" id = "Contact">Contact</a>
    </div>
  </nav>
</template>



<style scoped>
.navbar {
  background-color: #000000;
  color: #fff;
  text-align: center;
  max-height: max-content;
  box-shadow: 0 2px 15px #2c2c2c;

}


.navbar-item {
  color: #fff;
  font-size:1.3rem;
  text-decoration: none;
  margin: 0 30%;
  grid-row-start: 4;
  grid-row-end: 5;
  width:80px;

  
}

.navbar-item--accueil::after, .navbar-item--carte::after, .navbar-item--contact::after, .navbar-item--reserver::after{
  content: "";
  display: block;
  width: 80px;
  height: 1px;
  background-color: #cba529;
  margin: 4px auto;
  
}
  


.navbar-brand{
  display: grid;
  grid-template-columns:  10% 10% 10% 10% 10% 10% 10% 10% 10% 10%   ;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  height: 140px;
  margin-left: 2%;
  
}




.navbar-brand .navbar-item:hover{
  color: #cba529;
  transition: 0.3s;
  cursor: pointer;

}



.nav-logo{
  position: absolute;
  left:46%
  
}

.nav-logo img{
  width: 120%;
  max-width: 120px;
  min-width: 100px;
  
}

@media screen and (max-width:1023px){
  .nav-logo{
    left: 44%;
  }
}



@media screen and
(max-width: 767px){
  .navbar-brand{
    height: 90px;
  }

  .nav-logo{
    left: 44%;
  }

  .nav-logo img{
    margin-top: 10px;
    width: 80%;
    max-width: 100px;
    min-width: 80px;
  }

  .navbar-item--accueil::after, .navbar-item--carte::after, .navbar-item--contact::after, .navbar-item--reserver::after{
    width: 40px;
    height: 1px;
    
  }
  .navbar-item{
    font-size: 0.8rem;
    width:60px;
    margin: 10px 27%;
  }
}

@media screen and
(max-width: 670px){
  .nav-logo{
    left: 42%;
  }
}

@media screen and
(max-width: 558px){
  .nav-logo{
    left: 40%;
  }

}

@media screen and
(max-width: 434px){
  .nav-logo{
    left: 38%;
  }
}

:root {
  --original-headbar-background-color: #1e2014;
  --new-headbar-background-color: #333;

}
</style>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  head_accueil: boolean;
  head_reserver: boolean;
  head_carte: boolean;
  head_contact: boolean;
}>();



  


</script>