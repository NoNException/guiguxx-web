<template>
  <div>
    <Row>
      <Col span="4">代码包路径</Col>
      <Col span="20">
      <Select v-model="codeArtifacts" filterable>
        <Option v-for="item in cityList" :value="item.name" :key="item.name">{{ item.name }}</Option>
      </Select>
      </Col>
    </Row>
    <Table border ref="selection" size="small" :columns="machineDetail" :data="machineInfo">
      <template slot="operation">
        <Button type="primary" size="small">查看控制台</Button>
        <Button type="primary" size="small">启用服务</Button>
      </template>
    </Table>
    <Button type="primary" size="small">开始部署</Button>
    <p>部署日志</p>
    <p>
      dfsdfasdfasdf
    </p>
    <Button type="primary" size="small" to="/codeReleaseDetail/codeClean">下一步</Button>
  </div>
</template>
<script>

export default {
  data() {
    return {
      machineDetail: [
        { type: 'selection', width: 60, align: 'center' },
        { title: '机器编号', key: "machineNumber", },
        { title: 'ip信息', key: "ipInfo", },
        { title: '服务器状态', key: "machineStatus", },
        { title: '服务状态', key: "serviceStatus", },
        { title: '操作', key: "operation", slot: 'operation' },

      ],
      machineInfo: [
        { machineNumber: 'shop_1', ipInfo: '127.0.0.1', machineStatus: '运行中', serviceStatus: "已禁用" }


      ],
      cityList: [
        { name: 'aaa' },
        { name: 'bbb' },
        { name: 'ccc' },
      ],
      codeArtifacts: ''
    }
  }
}


</script>