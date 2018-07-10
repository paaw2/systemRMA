<template>
  <card>
    <h4 slot="header" class="card-title">Dane osobowe</h4>
    <form>
      <div>
        <app-switch v-model="dataSwitch"></app-switch>

      </div>
      <div> {{ dataSwitch }}</div>
      <div class="row">
        <div class="col-md-8">
          <fg-input type="text"
                    label="Nazwa Firmy"
                    placeholder="Nazwa Firmy"
                    v-model.lazy="user.company"
                    :disabled="!dataSwitch" 
                    >
          </fg-input>
        </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="NIP"
                    placeholder="Numer NIP  "
                    v-model.lazy="user.nipnumber"
                    :disabled="!dataSwitch"
                    
                    >
          </fg-input>
        </div>

      </div><hr><br><br>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Imię"
                    placeholder="Imię"
                    v-model="user.firstName">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Nazwisko"
                    placeholder="Nazwisko "
                    v-model="user.lastName">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <fg-input type="text"
                    label="Adres"
                    placeholder="Ulica"
                    v-model="user.address">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Miasto"
                    placeholder="Miasto"
                    v-model="user.city">
          </fg-input>
        </div>
        
        <div class="col-md-6">
          <fg-input type="number"
                    label="Kod Pocztowy"
                    placeholder="Kod Pocztowy"
                    v-model="user.postalCode">
          </fg-input>
        </div>
      </div>

 <div class="row">
        <div class="col-md-6">
          <fg-input type="text"
                    label="Telefon"
                    placeholder="Telefon"
                    v-model="user.telefon">
          </fg-input>
        </div>
      
        <div class="col-md-6">
          <fg-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="user.email">
          </fg-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>Informacje dodatkowe</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Informacje dodatkowe"
                      v-model="user.userdescription">
              </textarea>
          </div>
        </div>
      </div>
      <div class="text-center" >

      
        
      </div>
     
      <div class="clearfix"></div>
      <hr>
       <div>
           <button class="btn btn-info btn-fill float-right" style="display:none">
          Dodaj nowego klienta  
        </button>
      </div>
      
    </form>
  </card>
</template>
<script>
  import { bus } from 'src/main.js';
  import Card from 'src/components/UIComponents/Cards/Card.vue';
  import Switch from 'src/components/Dashboard/Views/UserProfile/Switch.vue';

  

  export default {
    
    components: {
      Card,
      appSwitch: Switch

    
    },
 
    data () {
      return {
        user: {
          nipnumber: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          postalCode: '',
          userdescription: ``
        },
        titles: 'costam',
        dataSwitch: true
      }
      
    },

    

  }

</script>
<style scoped>

</style>
