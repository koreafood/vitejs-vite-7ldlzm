<template>
  <div>
    <div id="realgrid" style="width: 100%; height: 300px"></div>
    <button @click="loadData">데이터 생성하기.</button>
  </div>
</template>

<script>
import { GridView, LocalDataProvider } from 'realgrid';
import { columns, fields, rows } from './realgrid-data';
let gridView = GridView;
let dataProvider = LocalDataProvider;
export default {
  name: 'RealGrid',
  setup() {
    return {};
  },
  methods: {
    loadData() {
      dataProvider.setRows(rows);
    },
  },
  mounted() {
    dataProvider = new LocalDataProvider(false);
    gridView = new GridView('realgrid');
    gridView.setDataSource(dataProvider);
    dataProvider.setFields(fields);
    gridView.setColumns(columns);
  },
};
</script>
