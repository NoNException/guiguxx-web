<template>
  <Row :gutter="16">
    <Col span="5">
    <ProjectList />
    </Col>
    <Col span="19">
    <Row>
      <Col span="4">项目名称</Col>
      <Col span="5">weidian-shop</Col>
      <Col span="3" offset='12'>
        <Button type="primary" size="small" to="/codeReleaseDetail">发布项目</Button>
      </Col>
    </Row>
    <Row>
      <br>
      <Table size="small" :columns="columns_release_records" :data="release_records">
        <template slot="operate">
          <Button type="primary" size="small" to="/codeReleaseDetail">操作</Button>
        </template>
      </Table>
    </Row>
    </Col>
  </Row>
</template>
<script>
import ProjectList from "./ProjectList"

export default ({
  data() {
    return {
      columns_release_records: [
        { title: '版本号', key: "releaseVersion" },
        { title: "发布状态", key: "releaseStatus" },
        { title: "Tag分支", key: "gitTags" },
        { title: "发布分支", key: "gitRelease" },
        { title: "Maven版本", key: "mavenVersion" },
        { title: "创建时间", key: "createTime" },
        { title: "操作", key: "operation", slot: "operate", align: "center" },

      ],

      release_records: [
        { releaseVersion: "v1.1.1", releaseStatus: "发布中", createTime: "2021-05-24 20:17", mavenVersion: "v1.12.2" },
        { releaseVersion: "v1.1.0", releaseStatus: "已发布", createTime: "2021-05-24 20:17", mavenVersion: "v1.12.1" }
      ]
    }
  },

  components: {
    "ProjectList": ProjectList
  }
})
</script>
