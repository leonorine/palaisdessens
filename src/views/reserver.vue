<template>
        
        <div class="container" id = "container">
            <div class="background"  id="bg">
            <div class="header">
                <div class="header-content">
                <h1 class="titre">Réserver</h1>
                <p>Vous pouvez réserver votre table en ligne en remplissant le formulaire ci-dessous. Vous pouvez également réserver par téléphone. <span>Pour les réservations effectuées moins de 24 heures avant la date souhaitée, veuillez nous contacter directement par téléphone : <a href="tel:">02 62 01 73 66</a> - <a href="tel:">06 92 57 81 21</a></span>.</p>
                </div>
            </div>
            <div class="formulaire">
                <form @submit.prevent="sendEmail" id="form-res">
                <div class="field">
                    <div class="control">
                    <input class="input" type="text" placeholder="Nom" required="true" id="resa_name">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                    <input class="input" type="email" placeholder="Email" required="true" id="resa_email">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                    <input class="input" type="tel" placeholder="Téléphone" id="resa_tel">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                    <input class="input" type="number" placeholder="Nombre de personnes"  min=1 max=50 required="true" id="resa_nb">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                    <input class="input" type="date" placeholder="Date" required="true" id="resa_date">
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                    <input class="input"  placeholder="Heure" list="heures" min="19:00"  max="22:00" required="true" id="resa_heure">
                    <datalist id="heures">
                        <option value="19:00"></option>
                        <option value="19:15"></option>
                        <option value="19:30"></option>
                        <option value="19:45"></option>
                        <option value="20:00"></option>
                        <option value="20:15"></option>
                        <option value="20:30"></option>
                        <option value="20:45"></option>
                        <option value="21:00"></option>
                        <option value="21:15"></option>
                        <option value="21:30"></option>
                        <option value="21:45"></option>
                        <option value="22:00"></option>
                    </datalist>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                    <textarea class="textarea" placeholder="Message" id="resa_message"></textarea>
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                    <button class="button is-primary">Réserver</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    </div>
    <div id="custom-alert" class="custom-alert">
        <div id = "custom-alert-content" class="custom-alert-content">
        <h4>Le Palais des Sens</h4>
          <span id = "custom-alert-message" class="custom-alert-message">Votre réservation a bien été prise en compte, nous vous recontacterons rapidement pour confirmer votre réservation.</span>
          <button id="custom-alert-close" class="custom-alert-close" v-on:click="sendEmailBlindDinner">OK</button>
          <button id="custom-alert-null" class="custom-alert-null">Changer de date</button>
        </div>
      </div>

</template>

<style>
a{
    color: #fff;
    text-decoration: none; 
    transition:all 0.3s; 
}

a:hover{
    color: #cba529;
    transition:all 0.3s;
}
.header ,.container{
    text-align: center;
    color:white;
}

.header p{
    font-size: 1.2rem;
    width: 90%;
    margin: 10px auto;
}

.header span, .header a{
    font-weight: bold;
}

.titre{
    font-size: 2rem;
    margin: 20px 0;

}

.titre::after {
    content: "";
    display: block;
    width: 150px;
    height: 2px;
    background-color: #cba529;
    margin: 5px auto;
}


.container{
    background-image: url('../../public/table/salle1.png');
    background-repeat: no-repeat;
    background-size:1200px;
    background-attachment: scroll;
    background-position: center;
    padding: 0 16%;
    margin: 70px 4% 90px 4%;

    
}

.background{
    background-color: rgba(0, 0, 0, 0.840);
    min-height: 570px;
    max-width: 700px;
    margin: 0 auto;
}

.control input, .control textarea{
    width: 40%;
    margin: 12px 5px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid #fff;
    background-color: transparent;
    color: #fff;
    font-size: 1.1rem;
    
}

.control input:focus, .control textarea:focus{
    outline: none;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 2px solid #cba529;
    transition: all 0.1s;
    
}

.control button{
    background-color: #fff;
    color: #000;
    border: none;
    padding: 10px 20px;
    font-size: 1.1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 20px;
    margin-top: 7px;
}

.control button:hover{
    background-color: #cba529;
    color: #000;
    transition: all 0.3s;
}
.custom-alert {
    position: fixed;
    top: 45%;
    left: 30%;
    width: 40%;
    display: none;
    z-index: 9999;
    color: #000;
    box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.727);
    background-color: #fff;
  }

  .custom-alert h4{
    color: #000;
    font-size: 1.5rem;
    margin-bottom: 10px;
  }

  .custom-alert h4::after {
    content: "";
    display: block;
    width: 50px;
    height: 2px;
    background-color: #cba529;
    margin: 5px auto;
  }

  
  .custom-alert-content {
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    font-size: 1.2rem;
  }
  
  .custom-alert-message {
    display: block;
    margin-bottom: 10px;
    color: #000;
  }
  
  .custom-alert-close{
    padding: 5px 10px;
    background-color: #000;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    margin:auto
  }

  .custom-alert-null {
    display: none;
    padding: 5px 10px;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    margin:auto
  }
  

 .custom-alert-null:hover {
    cursor: pointer;
    background-color: #f5423f;
  }

  .custom-alert-close:hover{
    background-color: #cba529;
    cursor: pointer;
  }

  .custom-alert button{
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) and
(max-width: 1023px){
  .header p{
    font-size: 1rem;
  }
  .control input, .control textarea{
    font-size: 1rem;
  }

  .custom-alert{
    width: 66%;
    left:17%;
    top:40%;
  }
}

@media screen and (max-width: 767px) {
  .header p{
    font-size: 0.7rem;
  }
  .control input, .control textarea{
    font-size: 0.6rem;
    margin: 5px 3px;
    width: 50%;
  }
  .titre{
    font-size: 1.3rem;
  }
  .titre::after{
    width: 100px;
    height: 1px;
  }
  .control button{
    padding: 5px 10px;
    font-size: 0.7rem;
}
  .background{
    min-height: 410px;
    min-width: 300px;
  }

  .container{
    padding: 0 5%;
    margin: 70px 2% 90px 2%;
    
  }
  .custom-alert{
    width: 70%;
    left:15%;
    top:40%;
  }
  .custom-alert h4{
    font-size: 1rem;
  }
  .custom-alert-content{
    font-size: 0.7rem;

  }
  .custom-alert-close, .custom-alert-null {
    padding: 3px 7px;
    font-size: 0.7rem;
  }
}
  

</style>

<script lang="ts">

import emailjs from 'emailjs-com';
function showCustomAlert(message: string | null) {
  const customAlert = document.getElementById('custom-alert');
  const customAlertMessage = document.getElementById('custom-alert-message');
  const customAlertClose = document.getElementById('custom-alert-close');
  const customAlertNull = document.getElementById('custom-alert-null');
  const container = document.getElementById('container');
    if (customAlert && customAlertMessage && customAlertClose && container && customAlertNull) {
        customAlertMessage.textContent = message;
        customAlertMessage.style.color = "black";
        customAlert.style.display = 'flex';
        container.style.opacity = '0.3';
        container.style.filter = 'blur(2px)';
        container.style.transition = 'all 0.3s';
        customAlertClose.textContent = "OK";
        customAlertNull.style.display = "none";
        customAlertClose.addEventListener('click', () => {
            customAlert.style.display = 'none';
            container.style.opacity = '1';
            container.style.transition = 'all 0.3s';
            container.style.filter = 'none';
        });
    } 
  
  }

  function isBlindDinner(date:HTMLInputElement){
    if (date.value === '2025-05-21') {
      return true;
    }
    return false;
  }

  function showCustomAlertBlindDinner() {
  const customAlert = document.getElementById('custom-alert');
  const customAlertMessage = document.getElementById('custom-alert-message');
  const customAlertClose = document.getElementById('custom-alert-close');
  const customAlertNull = document.getElementById('custom-alert-null');
  const container = document.getElementById('container');
    if (customAlert && customAlertMessage && customAlertClose && container) {
        customAlertMessage.textContent = "La date que vous avez sélectionnée correspond à une soirée de dîner à l'aveugle. Souhaitez-vous tout de même maintenir votre réservation à cette date ? (En cliquant sur Oui votre réservation sera automatiquement prise en compte)";
        customAlertMessage.style.color = "black";
        customAlert.style.display = 'flex';
        container.style.opacity = '0.3';
        container.style.filter = 'blur(2px)';
        container.style.transition = 'all 0.3s';
        customAlertClose.textContent = "Oui";
        customAlertClose.addEventListener('click', () => {
            customAlert.style.display = 'none';
            container.style.opacity = '1';
            container.style.transition = 'all 0.3s';
            container.style.filter = 'none';
        });
        if (customAlertNull) {
            customAlertNull.style.display = 'block';
            customAlertNull.addEventListener('click', () => {
                customAlert.style.display = 'none';
                container.style.opacity = '1';
                container.style.transition = 'all 0.3s';
                container.style.filter = 'none';
                
            });
        }
        
    } 
  
  }

  function showCustomAlertRouge(message: string | null) {
  const customAlert = document.getElementById('custom-alert');
  const customAlertMessage = document.getElementById('custom-alert-message');
  const customAlertClose = document.getElementById('custom-alert-close');
  const container = document.getElementById('container');
  const customAlertNull = document.getElementById('custom-alert-null');
    if (customAlert && customAlertMessage && customAlertClose && container && customAlertNull) {
        customAlertMessage.textContent = message;
        customAlertMessage.style.color = "red";
        customAlert.style.display = 'flex';
        container.style.opacity = '0.3';
        container.style.filter = 'blur(2px)';
        container.style.transition = 'all 0.3s';
        customAlertClose.textContent = "OK";
        customAlertNull.style.display = 'none';
        customAlertClose.addEventListener('click', () => {
            customAlert.style.display = 'none';
            container.style.opacity = '1';
            container.style.transition = 'all 0.3s';
            container.style.filter = 'none';
        });
    } 
  
  }
  function notSundaysAndMondays(date:HTMLInputElement) {
    
    const dateValue = new Date(`${date.value}T01:00:00`);
    if (dateValue.getDay() === 0 || dateValue.getDay() === 1) {
      return false;
    }
    return true;
}

function isComplet(date:HTMLInputElement){
    if (date.value == '2025-02-14'  || date.value == '2025-02-15') {
      return true;
    }
    return false;
  
}
function notHolidays(date:HTMLInputElement) {
    
    const dateValue = new Date(`${date.value}T01:00:00`);
    if (dateValue < new Date('2024-12-24T01:00:00')|| dateValue > new Date('2024-12-25T01:00:00')) {
      return true;
    }
    return false;
}

export default {
  name: 'ContactUs',
  data() {
    return {
      resa_name : '',
      resa_email: '',
      resa_tel: '',
      resa_nb: '',
      resa_date: '',
      resa_heure: '',
      resa_message: ''
    }
  },
  methods: {
    sendEmail() {
        const resa_name = document.getElementById("resa_name") as HTMLInputElement;
        const resa_email = document.getElementById("resa_email") as HTMLInputElement;
        const resa_tel = document.getElementById("resa_tel") as HTMLInputElement;
        const resa_nb = document.getElementById("resa_nb") as HTMLInputElement;
        const resa_date = document.getElementById("resa_date") as HTMLInputElement;
        const resa_heure = document.getElementById("resa_heure") as HTMLInputElement;
        const resa_message = document.getElementById("resa_message") as HTMLInputElement;
      try {
        const time = new Date(`1970-01-01T${resa_heure.value}:00`);
        if( new Date(`1970-01-01T19:00:00`) > time || time > new Date(`1970-01-01T22:00:00`)){
            showCustomAlertRouge("Votre réservation n'a pas été prise en compte, veuillez choisir une heure entre 19h et 22h.");
            return;
        }
        else if(notSundaysAndMondays(resa_date) == false){
          showCustomAlertRouge("Votre réservation n'a pas été prise en compte, nous sommes fermés les dimanches et les lundis.");
          return;
        }
        else if(notHolidays(resa_date) == false) {
          showCustomAlertRouge("Votre réservation n'a pas été prise en compte, nous sommes fermés le 24 et le 25 décembre inclus.");
          return;
        }
        else if(isComplet(resa_date) == true){
          showCustomAlertRouge("Votre réservation n'a pas été prise en compte, nous sommes complets le 14 et le 15 février 2025.");
          return;
        }
        else if(isBlindDinner(resa_date) == true){
          showCustomAlertBlindDinner();
          return;
            
          }
        
        else{
          emailjs.send('service_mexo8rc', 'template_sx0cvhs', {
            resa_name: resa_name.value,
            resa_email: resa_email.value,
            resa_tel: resa_tel.value,
            resa_nb: resa_nb.value,
            resa_date: resa_date.value.split('-').reverse().join('-'),
            resa_heure: resa_heure.value,
            resa_message: resa_message.value
          }, 'Y9263P4yw98HtXCnm');
          showCustomAlert("Votre réservation a bien été prise en compte, nous vous recontacterons rapidement pour confirmer votre réservation.");
      
        }
        } catch (err) {
           if (err instanceof ReferenceError) {
            showCustomAlert("Votre réservation n'a pas pu être prise en compte, veuillez réessayer. Si l'erreur persiste, veuillez nous contacter par téléphone.");
           } else {
            throw err; // rethrow
           }
      }
      // Reset form field
        
        resa_email.value = '';
        resa_heure.value = '';
        resa_date.value = '';
        resa_message.value = '';
        resa_name.value = '';
        resa_nb.value = '';
        resa_tel.value = '';
    },
    sendEmailBlindDinner() {
        const resa_name = document.getElementById("resa_name") as HTMLInputElement;
        const resa_email = document.getElementById("resa_email") as HTMLInputElement;
        const resa_tel = document.getElementById("resa_tel") as HTMLInputElement;
        const resa_nb = document.getElementById("resa_nb") as HTMLInputElement;
        const resa_date = document.getElementById("resa_date") as HTMLInputElement;
        const resa_heure = document.getElementById("resa_heure") as HTMLInputElement;
        const resa_message = document.getElementById("resa_message") as HTMLInputElement;
      try {
        const time = new Date(`1970-01-01T${resa_heure.value}:00`);
        if( new Date(`1970-01-01T19:00:00`) > time || time > new Date(`1970-01-01T22:00:00`)){
            showCustomAlertRouge("Votre réservation n'a pas été prise en compte, veuillez choisir une heure entre 19h et 22h.");
            return;
        }
        else if(notSundaysAndMondays(resa_date) == false){
          showCustomAlertRouge("Votre réservation n'a pas été prise en compte, nous sommes fermés les dimanches et les lundis.");
          return;
        }
        else if(notHolidays(resa_date) == false){
          showCustomAlertRouge("Votre réservation n'a pas été prise en compte, nous sommes fermés du 30 juillet au 12 août inclus.");
          return;
        }
        else if(isComplet(resa_date)){
          showCustomAlertRouge("Votre réservation n'a pas été prise en compte, nous sommes complets le 14 et le 15 février 2025.");
          return;
        }
        
        else{
           emailjs.send('service_mexo8rc', 'template_sx0cvhs', {
            resa_name: resa_name.value,
            resa_email: resa_email.value,
            resa_tel: resa_tel.value,
            resa_nb: resa_nb.value,
            resa_date: resa_date.value.split('-').reverse().join('-'),
            resa_heure: resa_heure.value,
            resa_message: resa_message.value
          }, 'Y9263P4yw98HtXCnm');
          showCustomAlert("Votre réservation a bien été prise en compte, nous vous recontacterons rapidement pour confirmer votre réservation.");
      
        }
        } catch (err) {
           if (err instanceof ReferenceError) {
            showCustomAlert("Votre réservation n'a pas pu être prise en compte, veuillez réessayer. Si l'erreur persiste, veuillez nous contacter par téléphone.");
           } else {
            throw err; // rethrow
           }
      }
      // Reset form field
        
        resa_email.value = '';
        resa_heure.value = '';
        resa_date.value = '';
        resa_message.value = '';
        resa_name.value = '';
        resa_nb.value = '';
        resa_tel.value = '';
    },
  
  }
}
</script>

