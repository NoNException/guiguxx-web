<template>
  <div>
    <Input placeholder="输入项目名称...">
    <Button slot="append" icon="ios-search" />
    </Input>
    <br />
    <ul class="list-group">
      <li class="list-group-item" v-for="project in projects" :key="project.id" style="overflow: hidden; text-overflow:ellipsis; white-space: nowrap;"> {{ project.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios"



export default {
  data() {
    return {
      projects: [],
      projectTitle: [
        { title: "项目列表", key: "projectName" }
      ]
    }
  },
  mounted() {
    axios.get("http://127.0.0.1:7777/guiguxx/projects").then(
      response => {
        this.projects = response.data.data;
      }
    )
  }
}



</script>