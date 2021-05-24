<template>
  <div>
    <Row>
      <Col span="4">项目名称</Col>
      <Col span="4">weidian-shop</Col>
    </Row>
    <hr>
    <Row>
      <Steps :current="0" size="small">
        <Step title="合并代码"></Step>
        <Step title="编译打包"></Step>
        <Step title="部署发布包"></Step>
        <Step title="运行服务"></Step>
        <Step title="清理代码"></Step>
        <Step title="发布完成"></Step>
      </Steps>
    </Row>
    <br>
    <Row class="p_label">
      <Col span="4">发布分支</Col>
      <Col offset="20">
      <Button type="primary" size="small">继续添加</Button>
      <Button type="primary" size="small">删除 </Button>
      </Col>
    </Row>
    <Table border ref="selection" size="small" :columns="codeInfoColumns" :data="codeInfos">
      <template slot="operation">
        <ButtonGroup size="small">
          <Button type="text">修改</Button>
        </ButtonGroup>
      </template>
      <template slot="featureListSelect">
        <Input size="small" placeholder="输入分支名" />
      </template>
    </Table>
    <Row class="p_label">
      <Col span="4">配置变更</Col>
      <Col offset="21">
         <Checkbox v-model="single">已执行</Checkbox>
      </Col>
    </Row>
    <Input type="textarea" />
    <Row class="p_label">
      <Col span="4">数据库变更</Col>
      <Col offset="21">
         <Checkbox v-model="single">已执行</Checkbox>
      </Col>
    </Row>
    <Input type="textarea" />
    <p class="p_label">发布备注</p>
    <Input type="textarea" />
    <hr>
    <Row :gutter=16>
      <Col offset=0>
      <Button type="primary">暂存</Button>
      <Button type="primary">执行</Button>
      </Col>
    </Row>
  </div>
</template>
<style scoped>
.p_label {
  margin: 5px 0 5px;
}
</style>
<script>

export default {
  data() {
    return {
      codeInfoColumns: [
        { type: 'selection', width: 60, align: 'center' },
        { title: "分支", key: "featureName", slot: "featureListSelect" },
        { title: "备注", key: "featureRemark" },
        { title: "提交人", width: 100, key: "checker" },
        { title: "操作", width: 120, key: "operation", slot: "operation", align: "center" },
      ],
      codeInfos: [
        { featureRemark: "test" }
      ],
      featureListSelected: ''
    }
  }
}
</script>
