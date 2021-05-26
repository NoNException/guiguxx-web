<template>
  <div>
    <Row class="p_label">
      <Col span="4">项目名称</Col>
      <Col span="4">weidian-shop</Col>
    </Row>
    <Row>
      <Steps :current="0" size="small">
        <Step title="合并代码"></Step>
        <Step title="编译打包"></Step>
        <Step title="部署发布包"></Step>
        <Step title="清理代码"></Step>
        <Step title="发布完成"></Step>
      </Steps>
    </Row>
    <hr>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.p_label {
  margin: 5px 0 5px;
}
</style>
<script>


</script>
