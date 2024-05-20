<template>
<div class="downbar">
    <img src="../../public/logoPDS.png" class = "down-logo" alt="Logo">      

    <div class="content">
        <p>Ouvert du Mardi au Samedi : 19:00 - 00:30</p>
        <p id = "adresse">1 bis rue Auguste Babet 97410 St Pierre La Réunion <p><a class="telephone" href="tel:">02 62 01 73 66</a> - <a class="telephone" href="tel:">06 93 85 93 51</a></p></p>
        <div class="icone-reseaux">
            <a class = "icone-fb" href="https://www.facebook.com/people/Le-Palais-des-Sens/100090839094288/">
                <img src="../../public/icones/icone-fb.jpeg" alt="Facebook">
            </a>
            <a class = "icone-insta" href="https://www.instagram.com/palaisdessens974/">
                <img src="../../public/icones/icone-insta.jpeg" alt="Instagram">
            </a>
        </div>
            <a href="#top" class = "BackToTop">
                <img src="../../public/icones/fleche.jpeg" alt="Retour en haut de page">
            </a>
    </div>
    
    
</div>

<div class="infos-complementaires">
    <p>© Web Design : Léonorine Tibere <span>・</span> <a href="/mentions-legales">Mentions légales</a></p>
</div>
</template>

<style scoped>
.downbar {
    background: black;
    color: #fff;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
    margin-top: 48px;
    height: 255px;
    box-shadow: 0 8px 7px 0 rgba(0, 0, 0, 0.5);
    margin-bottom: 0;
}
.telephone:hover{
    color: #cba529;
}

span{
    font-weight: 900;
}



.down-logo{
    margin-top: 10px;
    width:100px;
    
}

.telephone{
    text-decoration: none;
    color: #fff;
}

.icone-reseaux img{
    
    padding: 3px;
    margin: 0 5px;
}

.icone-reseaux{
    margin: 10px;
}

.icone-fb img{
    width:28px;
}

.icone-insta img{
    width:30px;
}

.BackToTop img{
    width: 55px;
    transform: scale(1);
    transition: all 0.3s ease-in-out;
}

.BackToTop{
    position: relative;
    right: -45%;
    bottom: 160px;
    
}

.BackToTop img:hover{
    transform: scale(1.1);
    transition: 0.3s;
}
.infos-complementaires{
    margin: 15px 0 0 0;
    color: #000;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
}

.infos-complementaires a{
    color: #000;
    text-decoration: none;
}

.content p{
    margin-top: 0;
}

@media screen and (min-width: 768px) and
(max-width: 1023px){
    .BackToTop{
        margin-right: 3%;
    }
    .downbar{
        font-size: 1.1rem;
    }
}

@media screen and (max-width: 767px){
    .down-logo{
        width:70px;
        
    }
    .BackToTop img{
        width: 35px;
    }
    .BackToTop{
        margin-right: 5%;
        right: -45%;
        bottom: 50px;
    }
    .downbar{
        font-size: 0.8rem;
        height: 192px;
    }

    .infos-complementaires{
        font-size: 0.8rem;
    }

    .icone-fb img{
        width:23px;
    }
    
    .icone-insta img{
        width:25px;
    }

}


</style>
