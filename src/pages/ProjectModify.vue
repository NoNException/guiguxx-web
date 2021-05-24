<template>
  <Form :model="projectModifyForm" :label-width="100">
    <FormItem label="项目名称">
      <Input size="small" />
    </FormItem>
    <FormItem label="代码仓库">
      <Input size="small" />
    </FormItem>
    <FormItem label="DubboGroup">
      <Input size="small" />
    </FormItem>
    <FormItem label="Dubbo端口">
      <Input size="small" />
    </FormItem>
    <FormItem label="JsonRpc端口">
      <Input size="small" />
    </FormItem>
    <FormItem label="ZK配置">
        <Select size="small">
            <Option value="">192.168.0.1</Option>
            <Option value="">192.168.0.2</Option>
        </Select>
    </FormItem>
    <FormItem>
            <Button type="primary">提交</Button>
            <Button style="margin-left: 8px">取消</Button>
        </FormItem>
  </Form>
</template>
