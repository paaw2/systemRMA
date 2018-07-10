<template>
  <div>
    <div class="row">
      <div class="col-md-12 col-md-offset-2">
        <div class="card card-wizard" id="wizardCard">
          <form-wizard shape="tab"

                       error-color="#EB5E28"
                       color="#66615B">
            <tab-content title="Dane Osobowe"
                         
                         icon="nc-icon nc-circle-09">
            <first-step></first-step>
              
            </tab-content>

            <tab-content title="Dane dot. sprzętu"
                         
                         icon="nc-icon nc-notes">
            <second-step>cc</second-step>
            </tab-content>

            <tab-content title="Opis zlecenia"
                         icon="nc-icon nc-paper-2">
              <h2 class="text-center text-space">Prawie Gotowe
                <br>
                <small>Kliknij w  "<b>Zapisz</b>" Aby zapisać i zobaczyć podsumowanie</small>
              </h2>
            </tab-content>

            <button slot="prev" class="btn btn-default btn-fill btn-wd btn-back">Back</button>
            <button slot="next" class="btn btn-info btn-fill btn-wd btn-next">Next</button>
            <button slot="finish" class="btn btn-info btn-fill btn-wd">Finish</button>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {FormWizard, TabContent} from 'vue-form-wizard'
  import 'vue-form-wizard/dist/vue-form-wizard.min.css'

  import swal from 'sweetalert2'
  import FirstStep from './Wizard/FirstStep.vue'  
  import SecondStep from './Wizard/SecondStep.vue' 

  export default {
    data () {
      return {
        wizardModel: {}
      }
    },
    components: {
      FormWizard,
      TabContent,
      FirstStep,
      SecondStep
    },
    methods: {
      
      }
  }
</script>
<style>
  .vue-form-wizard .wizard-icon-circle.tab_shape {
    background-color: #9A9A9A !important;
    color: white;
  }
</style>
