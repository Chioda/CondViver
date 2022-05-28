<template>
  <div class="calendario">
    <label for="calendario">Selecione a data do agendamento:</label>
    <date-picker :date="startTime" :option="option" :limit="limit"></date-picker>
  </div>
</template>



<script>
import myDatepicker from 'vue-datepicker'


export default {
  data () {
    return {
      
 
    
      startTime: {
        time: '' 
      },
      endtime: {
        time: ''
      },
 
      option: {
        type: 'day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'DD-MM-YYYY',
        placeholder: 'Escolha uma data',
        inputStyle: {
          
          
          'padding': '5px',
          
          
          'font-size': '16px',
          
          
          
        },
        color: {
          header: '#ccc',
          headerText: '#f00'
        },
        buttons: {
          ok: 'Ok',
          cancel: 'Cancel'
        },
        overlayOpacity: 0.5, // 0.5 as default
        dismissible: true // as true as default
      },
      timeoption: {
        type: 'min',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format: 'YYYY-MM-DD HH:mm'
      },
      multiOption: {
        type: 'multi-day',
        week: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        month: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        format:"YYYY-MM-DD HH:mm"
      },
      limit: [{
        type: 'weekday',
        available: [1, 2, 3, 4, 5]
      },
      {
        type: 'fromto',
        from: '2016-02-01',
        to: '2016-02-20'
      }]
    }
  },
  components: {
    'date-picker': myDatepicker
  }
}
  
</script>  

<style scoped>

label {
    display:inline-block;
    font-weight: bold;
    max-width: 300px;
    margin-bottom: 10px;
    margin-top: 20px;
    color: #222;;
    padding: 3px 10px;    
  }
  
</style>