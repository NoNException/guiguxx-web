<template>
  <div>
    <Input placeholder="输入项目名称..." @on-focus="projectNameInSearch=''" v-model="projectNameInSearch">
    <Button slot="append" icon="ios-search" @click="searchProjectByName" />
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
      projectNameInSearch: ""
    }
  },
  methods: {
    searchProjectByName: function () {
      this.projects = [];
      this.selectProjectListByName(this.projectNameInSearch);

    },
    selectProjectListByName(projectName) {
      var url = "";
      if (projectName == null || projectName === '' || projectName == undefined) {
        url = "http://127.0.0.1:7777/guiguxx/projects";
      } else {
        url = "http://localhost:7777/guiguxx/projects/search/" + projectName;
      }
      axios.get(url).then(response => {
        this.projects = response.data.data;
      });
    }
  },
  mounted() {
    this.selectProjectListByName();
  }
}
</script>