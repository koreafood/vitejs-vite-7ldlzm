<script>
import { TabulatorFull as Tabulator } from 'tabulator-tables'; //import Tabulator library

export default {
  data() {
    return {
      tabulator: null, //variable to hold your table
      tableData: [
        { id: 1, name: '肩', from: '12/15', kayumi: 4 },
        { id: 2, name: '肘', from: '12/15', kayumi: 6 },
        { id: 3, name: '背中', from: '12/11', kayumi: 3 },
        { id: 4, name: '腰', from: '', kayumi: 0 },
        { id: 5, name: '腹', from: '12/18', kayumi: 1 },
        { id: 6, name: '腿', from: '12/10', kayumi: 10 },
      ], //data for table to display
    };
  },
  mounted() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      reactiveData: true, //enable data reactivity
      columns: [
        { title: '部位', field: 'name', width: 150 },
        { title: '痒みだした時期', field: 'from', width: 150 },
        {
          title: '痒み具合',
          field: 'kayumi',
        },
      ], //define table columns
    });
  },
};
</script>

<template>
  <div ref="table"></div>
</template>
