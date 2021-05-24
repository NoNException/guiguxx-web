<template>
  <Row :gutter="16">
    <Col span="5" >
        <ProjectList/>
    </Col>
    <Col span="19">
    <Row>
      <Col span="4" offset="20">
      <Button type="info" size="small" @click="addProject = true">新增</Button>
      <Button type="info" size="small" @click="deleteProject = true">删除</Button>
      <Drawer title="新增项目" :closable="false" v-model="addProject" width='25'>
        <ProjectModify> </ProjectModify>
      </Drawer>
      </Col>
    </Row>
    <hr />
    <Row>
      <Row>
        <Col span="4">项目配置</Col>
        <Col span="4" offset="16">
            <Button type="info" size="small" @click="modifyProject = true">修改配置</Button>
        </Col>
        <Drawer title="修改配置" :closable="false" v-model="modifyProject" width='25'>
          <ProjectModify> </ProjectModify>
        </Drawer>
      </Row>
      <Row>
        <Col span="4">项目名称</Col>
        <Col>weidian-shop</Col>
      </Row>
      <Row>
        <Col span="4">代码仓库</Col>
        <Col span="4">xxxxxxxxx</Col>
        <Col span="4">代码路径</Col>
        <Col span="4">xxxxxxxxxxxx</Col>
      </Row>
    </Row>
    <hr />
    <Row>
      <Row>服务配置</Row>
      <Row>
        <Row>Dubbo配置</Row>
        <Row>
          <Col span="4">GroupName</Col>
          <Col span="4">xxxx </Col>
          <Col span="4">dubbo端口</Col>
          <Col span="4">xxxx </Col>
          <Col span="4">jsonrpc端口</Col>
          <Col span="4">xxxx </Col>
        </Row>
        <br />
        <Row>
          <Row>ZK配置</Row>
          <Row>
            <Col span="4">IP地址</Col>
            <Col span="4">xxxxxxxxxx</Col>
          </Row>
        </Row>
        <hr>
        <Row>
          <Col span="4"> 服务器配置 </Col>
          <Col span="4" offset="16">
          <Button type="info" size="small" @click="addMachine = true">新增服务器</Button>
          </Col>
        </Row>
        <br />
        <Row>
          <Table :columns="columns1" :data="data1">
            <template slot-scope="{ index }" slot="operate">
              <Button type="primary" size="small" @click="show(index)">Update</Button>
              <Button type="error" size="small" @click="remove(index)">Delete</Button>
            </template>
          </Table>
        </Row>
      </Row>
    </Row>

    </Col>
  </Row>
</template>
<script>
import ProjectModify from "./ProjectModify"
import ProjectList from "./ProjectList"
export default {

  data() {
    return {
      addProject: false,
      deleteProject: false,
      modifyProject: false,
      columns1: [
        { title: "No.", key: "numbers" },
        { title: "Ip Address", key: "ipAddress" },
        { title: "User Name", key: "userName" },
        { title: "Password", key: "password" },
        { title: "Tomcat House", key: "tomcatHouse" },
        { title: "Operation", slot: "operate", align: "center" },
      ],
      data1: [
        {
          numbers: "weidian_shop_1",
          ipAddress: "127.0.0.1",
          userName: "root",
          password: "xxxx",
          tomcatHouse: "/root/tomcat/tomcat_shop",
        },
        {
          numbers: "weidian_shop_1",
          ipAddress: "127.0.0.1",
          userName: "root",
          password: "xxxx",
          tomcatHouse: "/root/tomcat/tomcat_shop",
        },
      ],
      addMachine: false,
    };
  },
  components: {
    "ProjectModify": ProjectModify,
    "ProjectList": ProjectList,
  }
};
</script>
