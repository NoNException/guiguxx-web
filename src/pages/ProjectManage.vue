<template>
  <div>
    <div style="width: 20%">
      <Input v-model="value" placeholder="请输入...">
        <Button slot="append" icon="ios-search" /> </Input
      ><br />
      <ul class="list-group">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
