<template>
  <div class="page-padding">
    <Table :table-title="tableTitle" :table-data="userList" :is-pagination="true" />
  </div>
</template>
<script>
import Table from '@/components/Table'
import { getList } from '@/api/permission/user-manage'

export default {
  name: 'UserManage',
  components: {
    Table
  },
  data() {
    return {
      tableTitle: [
        { name: '姓名', value: 'username' },
        { name: '手机号码', value: 'phone' },
        { name: '拥有角色', value: 'roleList' },
        { name: '头像', value: 'avatar' },
        { name: '微信OPENID', value: 'wxOpenid' },
        { name: 'QQOPENID', value: 'qqOpenid' },
        { name: '是否锁定', value: 'lockFlag' },
        { name: '创建时间', value: 'createTime' },
        { name: '更新时间', value: 'updateTime' }
      ],
      userList: [],
      page: 1,
      limit: 20
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      getList({ current: this.page, size: this.limit })
    }
  }
}
</script>
