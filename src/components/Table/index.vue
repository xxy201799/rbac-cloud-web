<template>
  <div>
    <el-table
      :data="tableData"
      height="250"
      border
      style="width: 100%">
      <template v-for="(item, index) in tableTitle">
        <el-table-column
          v-bind:key="index"
          :prop="item.value"
          :label="item.name">
        </el-table-column>
      </template>
    </el-table>
    <Pagination v-if="isPagination" :total="total" :page.sync="page" :limit.sync="limit" @pagination="handlePaginationChange" />
  </div>
</template>
<script>
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
export default {
  name: 'Table',
  components: {
    Pagination
  },
  props: {
    tableTitle: {
      required: true,
      type: Array
    },
    tableData: {
      required: true,
      type: Array
    },
    isPagination: {
      type: Boolean,
      default: false
    },
    // 分页相关
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {}
  },
  methods: {
    handlePaginationChange() {
      this.$emit('pagination')
    }
  }
}
</script>
