<script setup lang="ts">
import { watch } from 'vue';
import { RouterLink, RouterView, routerKey, useRoute} from 'vue-router';
import Headbar from "@/components/headbar.vue";
import Downbar from "@/components/downbar.vue";
import {ref} from "vue";
const headAccueil = ref(false);
const headReserver = ref(false);
const headCarte = ref(false);
const headContact = ref(false);
let route = useRoute();
const updateHeaderStates = () => {
  let path = route.fullPath;
  if (path.includes("/reserver")) {
    headReserver.value = true;
    headAccueil.value = false;
    headCarte.value = false;
    headContact.value = false;
  } else if (path.includes("/carte")) {
    headCarte.value = true;
    headAccueil.value = false;
    headReserver.value = false;
    headContact.value = false;
  } else if (path.includes("/contact")) {
    headContact.value = true;
    headAccueil.value = false;
    headReserver.value = false;
    headCarte.value = false;
  } else if (path === "/" || path === "/#top" ) {
    headAccueil.value = true;
    headReserver.value = false;
    headCarte.value = false;
    headContact.value = false;
  } else {
    headAccueil.value = false;
    headReserver.value = false;
    headCarte.value = false;
    headContact.value = false;
  }
};

updateHeaderStates();

watch(
      () => route,
      () => {
        updateHeaderStates();
      },
      { deep: true }
    );



</script>

<template>
  <headbar :head_accueil="headAccueil" :head_carte="headCarte" 
  :head_contact="headContact" :head_reserver="headReserver"
  id = "headbar" />

  <RouterView id="content"/>

  <Downbar/>
</template>

<style scoped>
#headbar{
  width:100%;
}
#content {
  position: relative;
}
</style>
