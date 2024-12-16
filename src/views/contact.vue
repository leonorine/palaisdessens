<template>
    <section>
        <div class="content-contact" id="content-contact">
            <div class="texte" id="texte">
                <div class="header-content">
                    <h1 class="titre">Infos Pratiques</h1>
                    <h2>Nos horaires</h2>
                    <p> Du Mardi au Samedi : 19h - 00h30</p>
                    <p> Dimanche et Lundi : Fermé</p>
                    <h2>Adresse et Contact</h2>
                    <p>1 bis rue Auguste Babet, 97410 Saint Pierre</p>
                    <p><a href="tel:+">02 62 01 73 66</a> - <a href="tel:+">06 92 57 81 21</a></p>
                </div>
            <button id = "contact-active">
                Contactez-nous
            </button>
            </div>    
            <div class="api-maps" id="api-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.0730000000003!2d2.352221315674781!3d48.85661497928852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x1e1b3d1d1c1b8f!2s1%20bis%20Rue%20Auguste%20Babet%2C%2097410%20Saint%20Pierre!5e0!3m2!1sfr!2sfr!4v1615886820003!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" loading="lazy" id="maps"></iframe>
            </div>  
        
            <div class="contact-form" id = "contact-form">
                <h1 class = "titre" id="white"> Contactez-nous</h1>
                <form id="form" @submit.prevent="sendEmail">
                        <div class="field">
                            <div class="control">
                            <input class="input" type="text" placeholder="Nom" required="true" id="contact_name">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                            <input class="input" type="email" placeholder="Email" required="true" id="contact_email">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                            <input class="input" type="tel" placeholder="Téléphone" id="contact_tel">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                            <textarea class="textarea" placeholder="Message" required="true" id="contact_message"></textarea>
                            </div>
                        </div>
                        <div class="button">
                            <div class="field">
                                <div class="control" id="annuler">
                                <button class="button">Annuler</button>
                                </div>
                            </div>
                            <div class="field">
                                <div class="control" id="envoyer">
                                <button class="button is-primary">Envoyer</button>
                                </div>
                            </div>
                            
                        </div>
                </form>
            </div>  
        </div>
        <div id="message">
            <p> Votre message a bien été envoyé</p>
        </div>

    </section>
</template>

<style lang="scss"> 
.header-contact, .content-contact{
    color: #000;
}

.content-contact{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 20px 5px;
    padding: 20px 0;

}

.header-content h2{
    margin-top: 30px;
    font-size: 1.7rem;
    font-weight: 900;
}

.header-content p{
    margin: 5px 0;
    font-size: 1.2rem;
}

.contact-form{
    display: none;
    position:fixed;
    background-color: #000;
    padding: 0 25px;
    width :40%;
    margin: 0 40% 0 40%;
    height: 450px;
    text-align: center;
    top: 25%;
    
    
}
#white{
    color: #fff;

}

.texte{
    text-align: justify;
    margin-left: 10%;
}

.field{
    margin: 18px 0;
    
}

.field input,.field textarea{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: none;
    font-family: 'Times New Roman', Times, serif;
    padding: 5px;
    color: #000;
    font-size: 1.1rem;
    min-width: 220px;
    max-width: 220px;
    border: #000 4px solid !important;
}
.control input:focus, .control textarea:focus{
    outline: none;
    border: #cba529 4px solid !important;
    
}

.field textarea{
    min-height: 60px;
    max-height: 60px;
}

.api-maps iframe{
    margin: 0 20px;
    border: none;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    margin-top: 35px;
    margin-bottom: 10px;
}
.api-maps iframe:hover{
    box-shadow: 0 0 20px rgba(0,0,0,0.5);   
}
.header-content{
    text-align: center;
}

#contact-active{
    background:radial-gradient( #ffd64f,#f5c62e,#cba529);
    color: #000;
    border: none;
    border-radius: 25px;
    padding: 10px;
    margin: 35px 15%;
    width: 70%;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: #00000094 1px 1px 5px;
    transition: all 0.3s;
    
}

#contact-active:hover{
    filter:contrast(80%);
    transition: all 0.3s;
}

#form{
    margin-top: 35px;
}

.button{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30px;
    width: 90px;
    margin:5px auto;
}

#envoyer,#annuler{
    margin: 15px; 
}

#envoyer button,#annuler button{
    background-color: #fff;
    border-radius: 10px;
    border: none;
}

#envoyer button:hover,#annuler button:hover{
    background-color: #cba529;
    color: #fff;
    transition: all 0.3s;
}

.titre{
    font-size: 2rem;
    margin: 20px 0;

}

.titre::after {
    content: "";
    display: block;
    width: 150px;
    height: 3px;
    background-color: #cba529;
    margin: 5px auto;
}

a{
    color: #000;
    text-decoration: none; 
    transition:all 0.3s; 
}

a:hover{
    color: #cba529;
    transition:all 0.3s;
}

#message{
    display: block;
    position: absolute;
    top: -80px;
    height: 60px;
    width: 100%;
    background-color: #2e2e2e;
    color: #fff;
    text-align: center;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: 900;
    z-index: -1;


}

@media screen and
(max-width: 1023px){
    .api-maps iframe{
        width: 90%;
        margin : 15px 5%;
    }

    .content-contact{
        flex-direction: column;
    }
    .texte{
        width: 70%;
        margin : 0 15%;
    }

    .contact-form{
        margin: 0 40% 0 30%;
        
        
    }

}
@media screen and
(max-width: 767px){

    .titre{
        font-size: 1.2rem;
        margin: 20px 0;
    
    }
    
    .titre::after {
        width: 130px;
        height: 2px;
        margin: 3px auto;
    }
    .header-content h2{
        margin-top: 20px;
        font-size: 1rem;
        font-weight: 700;
    }
    
    .header-content p{
        margin: 5px 0;
        font-size: 0.7rem;
    }
    #contact-active{
        padding: 5px;
        margin: 25px 25%;
        width: 50%;
        font-size: 0.7rem;
        
    }

    .api-maps iframe{
        width: 90%;
        height: 250px;
        margin : 15px 5%;
    }
    .contact-form{
        width :70%;
        min-width :max-content;
        max-width: 350px;
        margin: 0 40% 0 35%;
        height: 290px;
        text-align: center;
        top: 25%;
        left: -60px;
        
    }
    .field{
        margin: 15px 0;
        
    }
    
    .field input,.field textarea{
        padding: 2px;
        font-size: 0.8rem;
        min-width: 80%;
        max-width: 90%;
        border: #000 2px solid !important;
    }

    .field textarea{
        min-height: 40px;
        max-height: 40px;
    }
    .control input:focus, .control textarea:focus{
        border: #cba529 2px solid !important;
        
    }

    #form{
        margin-top: 10px;
    }
    
    .button{
        height: 20px;
        width: 70px;
        margin:5px auto;
        font-size: 0.7rem;
        color: #000;
    }
    
    #envoyer,#annuler{
        margin: 0 10px; 
    }
    
    #envoyer button,#annuler button{
        background-color: #fff;
        border-radius: 10px;
        border: none;
    }

    #message{
        top: -80px;
        height: 50px;
        font-size: 0.9rem;
        font-weight: 700;
    
    
    }

}

@media screen and
(max-width: 670px){
    .contact-form{
        margin: 0 40% 0 30%; 
        
    }
}

@media screen and
(max-width: 558px){
    .contact-form{
        margin: 0 40% 0 28%; 
        
    }
}

@media screen and
(min-width: 1235px){
    .contact-form{
        top:15%
        
    }
}



</style>

<script lang="ts">
import emailjs from 'emailjs-com';

function closeForm(){
    const form = document.getElementById('contact-form');
    const texte = document.getElementById('texte');
    const maps = document.getElementById('api-maps');
    if(form && texte && maps){
        form.style.display = 'none';
        texte.style.opacity = '1';
        texte.style.filter = 'none';
        texte.style.transition = 'all 0.3s';
        maps.style.opacity = '1';
        maps.style.filter = 'none';
        maps.style.transition = 'all 0.3s';
    }

}
function formActive(){
    const form = document.getElementById('contact-form');
    const texte = document.getElementById('texte');
    const maps = document.getElementById('api-maps');
    const annuler = document.getElementById('annuler');
    if(form && texte && maps && annuler){
        texte.style.opacity = '0.3';
        texte.style.filter = 'blur(3px)';
        maps.style.opacity = '0.3';
        maps.style.filter = 'blur(3px)';
        form.style.filter = 'none';
        texte.style.transition = 'all 0.3s';
        maps.style.transition = 'all 0.3s';
        form.style.display = 'block';
        annuler.addEventListener('click',()=>{
            closeForm();
        })
    }

}

function showMessage(){
    const message = document.getElementById('message');
    if(message){
        message.style.top = '-20px';
        message.style.transition = 'all 0.4s';
        
        setTimeout(()=>{
            message.style.top = '-80px';
            message.style.transition = 'all 0.5s';
        },3000)
    }
        
    }
    
export default {
    
    mounted(){
        const active = document.getElementById('contact-active');
        if(active){
            active.addEventListener('click',()=>{
                formActive();
            })
        }
    },
    data() {
        return {
        contact_name : '',
        contact_email: '',
        contact_tel: '',
        contact_message: ''
        }
  },
  methods: {
    sendEmail() {
        const contact_name = document.getElementById("contact_name") as HTMLInputElement;
        const contact_email = document.getElementById("contact_email") as HTMLInputElement;
        const contact_tel = document.getElementById("contact_tel") as HTMLInputElement;
        const contact_message = document.getElementById("contact_message") as HTMLInputElement;
      try {
        
         emailjs.send('service_i9ne9fq', 'template_baladfu', {
            contact_name: contact_name.value,
            contact_email: contact_email.value,
            contact_tel: contact_tel.value,
            contact_message: contact_message.value
        }, 's2agBIP-I9AkmDp3u');
        closeForm();  
        showMessage();     
      } catch (err) {
           if (err instanceof ReferenceError) {
           } else {
            throw err; // rethrow
           }
      }
      // Reset form field
        
      contact_email.value = '';
      contact_message.value = '';
      contact_name.value = '';
      contact_tel.value = '';
    },
  }

}
</script>