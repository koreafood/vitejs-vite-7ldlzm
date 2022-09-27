<script>
import { TabulatorFull as Tabulator } from 'tabulator-tables'; //import Tabulator library

const tabledata = [
  { id: 1, name: 'Oli Bob', age: '12', col: 'red', dob: '' },
  { id: 2, name: 'Mary May', age: '1', col: 'blue', dob: '14/05/1982' },
  {
    id: 3,
    name: 'Christine Lobowski',
    age: '42',
    col: 'green',
    dob: '22/05/1982',
  },
  {
    id: 4,
    name: 'Brendon Philips',
    age: '125',
    col: 'orange',
    dob: '01/08/1980',
  },
  {
    id: 5,
    name: 'Margret Marmajuke',
    age: '16',
    col: 'yellow',
    dob: '31/01/1999',
  },
];

export default {
  data() {
    return {
      tabulator: null, //variable to hold your table
      tableData: tabledata, //data for table to display
      count: 0,
    };
  },
  mounted() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.$refs.table, {
      data: this.tableData, //link data to table
      reactiveData: true, //enable data reactivity
      columns: [
        { title: 'Name', field: 'name', width: 150 },
        {
          title: '나이',
          field: 'age',
          hozAlign: 'left',
          formatter: 'progress',
        },
        { title: 'Favourite Color', field: 'col' },
        {
          title: 'Data of Birth',
          field: 'dob',
          //sorter: 'date',
          hozAlign: 'center',
        },
      ], //define table columns
    });
  },
};
</script>

<template>
  <div>
    <div ref="table"></div>

    <button type="button" @click="count++">count is: {{ count }}</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
