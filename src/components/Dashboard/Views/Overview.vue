<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-warning">
              <i class="nc-icon nc-layers-3 text-warning"></i>
            </div>
            <div slot="content">
              <p class="card-category">Ilość zleceń</p>
              <h4 class="card-title"> {{ TotalCounter }}</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh" @click="CountTotal"></i>Aktualizuj
              
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-success">
              <i class="nc-icon nc-money-coins text-success"></i>
            </div>
            <div slot="content">
              <p class="card-category">Obrót brutto</p>
              <h4 class="card-title">pln 1,345</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-calendar-o"></i>Wybierz dzień ( domyślnie - dziś)
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-danger">
              <i class="nc-icon nc-delivery-fast text-danger"></i>
            </div>
            <div slot="content">
              <p class="card-category">Do wydania</p>
              <h4 class="card-title">23</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-clock-o"></i>Dane aktualizują się automatycznie
            </div>
          </stats-card>
        </div>

        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-chat-round text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Komunikaty</p>
              <h4 class="card-title">+45</h4>
            </div>
            <div slot="footer">
              <i class="fa fa-refresh"></i>Aktualizuj
            </div>
          </stats-card>
        </div>

      </div>
      <div class="row">
 

        <div class="col-md-4">
          <chart-card :chart-data="pieChart.data" chart-type="Pie">
            <template slot="header">
              <h4 class="card-title">Status zleceń</h4>
              <p class="card-category">Aktualny podział zleceń wg nadanych statusów</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Przyjęte
                <i class="fa fa-circle text-danger"></i> W trakcie realizacji
                <i class="fa fa-circle text-warning"></i> Do wydania
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-clock-o"></i> Dane aktualizują się automatycznie
              </div>
            </template>
          </chart-card>
        </div>

      <div class="col-md-8">
          <chart-card
            :chart-data="barChart.data"
            :chart-options="barChart.options"
            :chart-responsive-options="barChart.responsiveOptions"
            chart-type="Bar">
            <template slot="header">
              <h4 class="card-title">Statystki przyjęć serwisowych</h4>
              <p class="card-category">Dane dla ostatnich 12 miesięcy</p>
            </template>
            <template slot="footer">
              <div class="legend">
                <i class="fa fa-circle text-info"></i> Przyjęcia gwarancyjne
                <i class="fa fa-circle text-danger"></i> Przyjęcia płatne
              </div>
              <hr>
              <div class="stats">
                <i class="fa fa-check"></i> Aktualizacja danych zakończona sukcesem!
              </div>
            </template>
          </chart-card>
        </div> 


      </div>

         

      <div class="row">
   

        <div class="col-md-12">
          <card>
            <template slot="header">
              <h4 class="card-title">Lista zleceń serwisowych</h4>
              <p class="category">Ostatnio dodane..</p>
            </template>
            <l-table :data="tableData.data"
                     :columns="tableData.columns">
              <template slot="columns"></template>

              <template slot-scope="{row}">
                <td>
                  <Checkbox v-model="row.checked"></Checkbox>
                </td>
                <td>{{row.title}}</td>
                <td class="td-actions text-right">
                  <button type="button" class="btn-simple btn btn-xs btn-info" v-tooltip.top-center="editTooltip">
                    <i class="fa fa-edit"></i>
                  </button>
                  <button type="button" class="btn-simple btn btn-xs btn-danger" v-tooltip.top-center="deleteTooltip">
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </template>
            </l-table>
            <div class="footer">
              <hr>
              <div class="stats">
                <i class="fa fa-history"></i> Zobacz wszystkie
              </div>
            </div>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import LTable from 'src/components/UIComponents/Table.vue'
  import Checkbox from 'src/components/UIComponents/Inputs/Checkbox.vue'
  

  export default {
    components: {
      Checkbox,
      Card,
      LTable,
      ChartCard,
      StatsCard
    },
    data () {
      
      return {
        
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        pieChart: {
          data: {
            labels: ['40%', '20%', '40%'],
            series: [40, 20, 40]
          }
        },
        lineChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 492, 554, 586, 698, 695],
              [67, 152, 143, 240, 287, 335, 435, 437],
              [23, 113, 67, 108, 190, 239, 307, 308]
            ]
          },
          options: {
            low: 0,
            high: 800,
            showArea: false,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: true,
            showLine: true,
            showPoint: true,
            fullWidth: true,
            chartPadding: {
              right: 50
            }
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        barChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
              [412, 243, 280, 580, 453, 353, 300, 364, 368, 410, 636, 695]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          },
          responsiveOptions: [
            ['screen and (max-width: 640px)', {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc (value) {
                  return value[0]
                }
              }
            }]
          ]
        },
        tableData: {
          data: [
            {title: 'Pawel Lindner    || Laptop Dell Latitude e6440     || Opis : Usterka GPU', checked: false},
            {title: 'Pawel Lindner    || Laptop Dell Latitude e6440     || Opis : Usterka GPU', checked: true},
            {title: 'Pawel Lindner    || Laptop Dell Latitude e6440     || Opis : Usterka GPU',checked: true},
            {title: 'Pawel Lindner    || Laptop Dell Latitude e6440     || Opis : Usterka GPU', checked: false},
            {title: 'Pawel Lindner    || Laptop Dell Latitude e6440     || Opis : Usterka GPU', checked: false},
            {title: 'Pawel Lindner    || Laptop Dell Latitude e6440     || Opis : Usterka GPU', checked: false}
          ]
        },
        TotalCounter: ''
      }
      
    },
    
    methods:{
      CountTotal() {
        this.$http.get('data.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
            const TotalNumberArray= [];
            for (let key in data) {
              TotalNumberArray.push(data[key]);
            }
          this.TotalCounter = TotalNumberArray.length;
            console.log(TotalNumberArray.length);
            console.log(TotalCounter);
            
            
        });

      }
    }
  }
</script>
<style>

</style>
