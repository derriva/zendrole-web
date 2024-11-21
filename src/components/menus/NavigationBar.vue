<template>
  <el-menu :ellipsis="false" class="el-menu-demo" mode="horizontal">
    <el-menu-item class="root-menu-item" index="0">
      <router-link id="app-icon" to="/">
        <img alt="Element logo" src="/src/assets/mock-logo.svg" style="width: 100px"/>
      </router-link>
    </el-menu-item>

    <el-menu-item class="root-menu-item" index="1">
      <router-link to="/">My Tasks</router-link>
    </el-menu-item>


    <el-sub-menu class="root-menu-item" index="2">
      <template #title>
        <el-icon>
          <User/>
        </el-icon>
        User
      </template>

      <el-menu-item class="sub-menu-item" index="2-1">
        <router-link to="/logout">Logout</router-link>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import {User} from "@element-plus/icons-vue";
</script>

<style>
.el-menu--horizontal > .root-menu-item:nth-child(2) {
  margin-right: auto;
}

.root-menu-item {
  padding: 0;
}

.el-menu-item a {
  padding: 0 20px;
}

#app-icon {
  display: flex;
  align-content: center;
}

a {
  text-decoration: none;
  color: inherit;
}

.sub-menu-item a {
  width: 100%;
}
</style>