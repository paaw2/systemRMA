<template>
  <card>
    <h4 slot="header" class="card-title">Dane o sprzęcie</h4>
    <form>
      
   <br>
          <div class="row">
      <div class="col-md-2">
    <div class="custom-control custom-radio">
    <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation2">Naprawa płatna</label>
  </div>
  </div>
  <div class="col-md-2">
  <div class="custom-control custom-radio mb-3">
    <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required>
    <label class="custom-control-label" for="customControlValidation3">Naprawa gwarancyjna</label>
    <div class="invalid-feedback">Coś poszło nie tak!!t</div>
  </div>
       </div>
       </div>

      <div class="row">
      <div class="col-md-2">
      <label for="exampleFormControlSelect1">Typ</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Laptop</option>
      <option>Komputer PC</option>
      <option>Tablet</option>
      <option>Monitor</option>
      <option>inne</option>
    </select>
       </div>
        <div class="col-md-4">
          <fg-input type="text"
                    label="Producent"
                    placeholder="Producent"
                    v-model="user.producent">
          </fg-input>
        </div>
        <div class="col-md-6">
          <fg-input type="text"
                    label="Model"
                    placeholder="Model "
                    v-model="user.model">
          </fg-input>
        </div>
      </div>


      <div class="row">
        <div class="col-md-4">
          <fg-input type="text"
                    label="Numer seryjny"
                    placeholder="Numer seryjny"
                    v-model="user.city">
          </fg-input>
        </div>

        <div class="col-md-4">
          <fg-input type="text"
                    label="Parametry"
                    placeholder="Parametry"
                    v-model="user.city">
          </fg-input>
        </div>
        
        
        <div class="col-md-4">
          <fg-input type="text"
                    label="Stan obudowy"
                    placeholder="Stan obudowy"
                    v-model="user.postalCode">
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

       <div class="form-group row">
        <div class="col-md-2">

        
       <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck1">
        <label class="custom-control-label" for="customCheck1">Bateria</label>
        
        </div>
        </div>
        <div class="col-md-2">
       <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck2">
        <label class="custom-control-label" for="customCheck2">Zasilacz</label>
        </div>
        </div>
        <div class="col-md-2">
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck3">
        <label class="custom-control-label" for="customCheck3">Modem</label>
        </div>
        </div>
        <div class="col-md-2">
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck4">
        <label class="custom-control-label" for="customCheck4">Torba</label>
        </div>
        </div>
        <div class="col-md-2">
        <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="customCheck5">
        <label class="custom-control-label" for="customCheck5">Nośniki</label>
        </div>
          
        </div>
      </div>
      <div class="text-center" >
      </div>
     
      <div class="clearfix"></div>
      <hr>
      
      
    </form>
  </card>
</template>
<script>
  import { bus } from 'src/main.js';
  import Card from 'src/components/UIComponents/Cards/Card.vue';
  

  

  export default {
    
    components: {
      Card,
      

    
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
          typ: '',
          producent: '',
          model: '',
          userdescription: ``
        },
       
      }
      
    },

    

  }

</script>
<style scoped>

</style>
