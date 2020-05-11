<template>
  <div class="page-padding">
    <Table :table-title="tableTitle" :table-data="userList" :is-pagination="true" :total="total" @deleteRow="deleteRow" />
  </div>
</template>
<script>
import Table from '@/components/Table'
import { getList } from '@/api/permission/user-manage'
import { parseTime } from '@/utils/index.js'

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
      limit: 20,
      total: 0
    }
  },
  created() {
    this.getUserList()
  },
  methods: {
    getUserList() {
      getList({ current: this.page, size: this.limit }).then(res => {
        this.total = res.data.total
        if (res.data && res.data.records) {
          res.data.records.forEach(item => {
            item.createTime = parseTime(new Date(item.createTime))
            item.updateTime = parseTime(new Date(item.updateTime))
            item.lockFlag = item.lockFlag == 0 ? '否' : '是'
          })
        }
        this.userList = res.data.records
      })
    },
    // 用户删除
    deleteRow(data) {
      console.log(data)
      this.$confirm('确认要删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    }
  }
}
</script>
