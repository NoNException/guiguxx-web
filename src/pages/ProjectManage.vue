<template>
  <Row :gutter="16">
    <Col span="5">
      <Input placeholder="请输入...">
        <Button slot="append" icon="ios-search" />
      </Input>
      <br />
      <ul class="list-group">
        <li class="list-group-item">weidian-shop</li>
        <li class="list-group-item">weidian-cms</li>
        <li class="list-group-item">weidian-psp</li>
        <li class="list-group-item">weidiango-pps</li>
        <li class="list-group-item">weidiango-order</li>
      </ul>
    </Col>
    <Col span="19">
      <Row>
        <Col span="4" offset="20">
          <Button type="info" size="small" @click="addProject = true">添加</Button>
          <Drawer title="新增项目" :closable="false" v-model="addProject">
             aaaaaaaa 
          </Drawer>
          <Button type="info" size="small">删除</Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Row>项目配置</Row>
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
      <br>
      <Row>
        <Row>服务配置</Row>
        <Row>
          <Row> Dubbo配置 </Row>
          <Row>
            <Col span="4">GroupName</Col>
            <Col span="4">xxxx </Col>
            <Col span="4">dubbo端口</Col>
            <Col span="4">xxxx </Col>
            <Col span="4">jsonrpc端口</Col>
            <Col span="4">xxxx </Col>
          </Row>
        </Row>
      </Row>
    </Col>
  </Row>
</template>
<script>
export default {
    data () {
            return {
                addProject: false
            }
        }
};
</script>
