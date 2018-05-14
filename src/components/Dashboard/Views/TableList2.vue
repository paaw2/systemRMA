<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
       

        <div class="col-12">
          <card class="card-plain">
            <template slot="header">
              <h4 class="card-title">Archiuwm zleceń</h4>
              <p class="card-category">Na liście znajdują się wyłącznie zlecenia o statusie "Wydano"</p>
              <button class="btn btn-primary" @click="fetchData"> Pobierz Dane</button>

            
<table class="table table-hover">
  <thead>
    <tr>
      
      <th scope="col">Nazwisko </th>
      <th scope="col">Imie </th>
      <th scope="col">Firma </th>
      <th scope="col">Telefon</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
   
    
    <tr v-for ="u in archivelist">
      <td>
        {{ u.lastName }}
      </td>
      <td>
        {{ u.firstName }}
      </td>
      <td>
        {{ u.company }}
      </td>
       <td>
        {{ u.telefon }}
      </td>
      <td>
        {{ u.email }}
      </td>

     
      
      
    </tr>
    
    
  

  </tbody>
</table>

            </template>
       
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/UIComponents/Table.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'

  export default {
    components: {
      LTable,
      Card,
     
    },
    data () {
      return {
        archivelist: []
      }
    },
    methods:{
      fetchData() {
        this.$http.get('data.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
            const archiveArray= [];
            for (let key in data) {
              archiveArray.push(data[key]);
            }
            this.archivelist = archiveArray;
            console.log(archiveArray);
            
            
        });

      }
    }
  }
</script>
<style>
</style>
