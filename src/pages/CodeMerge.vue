<template>
  <div>
    <Row class="p_label">
      <Col span="4">发布分支</Col>
      <Col offset="21">
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
      <Button type="primary" to="/codeReleaseDetail/codePackage">下一步</Button>
      </Col>
    </Row>
    <Row>执行状态</Row>
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
