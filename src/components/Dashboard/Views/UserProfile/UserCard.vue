<template>
  <card class="card-user">
    <img slot="image" src="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400" alt="..."/>
    <div class="author">
      <a href="#">
        <img class="avatar border-gray" src="static/img/faces/face-3.jpg" alt="..."/>

        <h4 class="title">Jan Kowalski<br />
          <small>Osoba prywatna</small>
        </h4>
      </a>
    </div>
    {{ uss }}
    <!-- <p class="description text-left"> 
      Adres: Jankowe Bory , Ul. polna 3<br>
      Telefon: 71 795 66 59<br>
  
      Email: janek.kowalski@gmail.com<br>
      Zgoda na otrzymywanie newslettera :   TAK<br>
      <br><br>
      Dane dodatkowe : np dane do wysyłki
    </p> -->
    <div slot="footer" class="text-center">
      <p>Przykład wypełnionego profilu klienta</p>

    </div>
  </card>
  
</template>
<script>
  import { bus } from 'src/main.js';
  import Card from 'src/components/UIComponents/Cards/Card.vue'
  import EditProfileForm from './EditProfileForm.vue';

  export default {
    components: {
      Card
    },  
     
    data () {
      return {
        user: {
          companys: '',
          username: '',
          email: '',
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          country: '',
          postalCode: '',
          aboutMe: ``
        },
        uss: 'byle co'
      }
    },
    created(){
     but.$on('moje',(data)=>{
       this.uss = data;
        console.log(data);
        
     });
   },
  
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    },
 
  }

</script>
<style>

</style>
