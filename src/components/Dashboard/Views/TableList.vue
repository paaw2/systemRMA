<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Lista zleceń gwarancyjnych</h4>
              <p class="card-category">Zobacz więcej</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover table-striped"
                       :columns="table1.columns"
                       :data="table1.data">
              </l-table>
            </div>
          </card>

        </div>

        <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Lista zleceń płatnych</h4>
              <p class="card-category">Zobacz więcej</p>
            </template>
            <div class="table-responsive">
              <l-table class="table-hover"
                       :columns="table2.columns"
                       :data="table2.data">
              </l-table>
            </div>
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  const tableColumns = ['Id', 'Klient', 'Item', 'Wycena', 'Zaliczka', 'Serwisant', 'Status']
  const tableData = [{
    id: 1,
    klient: 'Jan Kowalski',
    item : 'Laptop 15,6',
    wycena: 'PLN 308,00',
    zaliczka: 'PLN 0,00',
    serwisant: 'Oud-Turnhout',
    status: 'Przyjęto'
  },
  {
    id: 2,
    klient: 'Jasio Fasola',
    item : 'Laptop 15,6',
    wycena: 'PLN 248,00',
    zaliczka: 'PLN 100,00',
    serwisant: 'Sinaai-Waas',
    status: 'Przyjęto'
  },
  {
    id: 3,
    klient: 'Marcin Kopaniec',
    item : 'Laptop 15,6',
    wycena: 'PLN 400,00',
    zaliczka: 'PLN 0,00',
    serwisant: 'Baileux',
    status: 'W trakcie naprawy'
  },
  {
    id: 4,
    klient: 'Jarek Komareky',
    item : 'Laptop 15,6',
    wycena: 'PLN 999,00',
    zaliczka: 'PLN 0,00',
    serwisant: 'Overland Park',
    status: 'W trakcie naprawy'
  },
  {
    id: 5,
    klient: 'Janina Marczewska',
    item : 'Laptop 15,6',
    wycena: 'PLN 69,00',
    zaliczka: 'PLN 0,00',
    serwisant: 'Feldkirchen in Kärnten',
    status: 'Do wydania'
  }]
  export default {
    components: {
      LTable,
      Card
    },
    data () {
      return {
        table1: {
          columns: [...tableColumns],
          data: [...tableData]
        },
        table2: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    }
  }
</script>
<style>
</style>
