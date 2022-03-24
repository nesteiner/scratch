<template>
  <button class="setting-button">
    <img src="@/assets/config-white.png"/>
    <span>Setting</span>
  </button>
</template>

<style lang="scss" scoped>
 button.setting-button {
   text-align: center;
   border-radius: 4px;
   cursor: pointer;
   opacity: 0.9;
   background: rgba(255, 255, 255, 0.2) none repeat scroll 0% 0%;
   box-shadow: none;
   margin-left: 10px;
   font-size: 13px;
   padding: 8px 12px;
   min-width: 70px;
   border: medium none;
   color: white !important;

   img {
     width: 16px;
   }

   span {
     margin-left: 4px;
   }
 }
</style>