<template>
    <section>
        <div class="header">
            <div class="header-content">
                <h1 class="titre">Mentions légales</h1>
                <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site www.groupomania.com l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
            </div>
        </div>
        <div class="mentions" >
            <h2 class="titre">Informations légales</h2>
            <p>Nom de l’entreprise : LA LUNE DAMARO Sarl</p>
            <p>Adresse : 1Bis rue Auguste Babet, 97410 Saint Pierre</p>
            <p>Téléphone : 02 62 01 73 66</p>
            <p>E-Mail : reservationslepalaisdessens974@gmail.com</p>
            <p>Inscription au registre du commerce et des sociétés</p>
            <p>RCS Saint Pierre : 920 329 695 00018 </p>
            <p>Gérant : Monsieur Steve Onier</p>
            <p>Certificat SSL et hébergement : Netlify</p>
            <p>Conception et réalisation du site : Tibere Léonorine</p>
        </div>
        
        
    </section>
</template>

<style lang="scss">
.header{
    color: black;
    text-align: center;
    font-size: 1.3rem;
    margin: 20px auto;
    width: 40%;
    
}

.mentions{
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    color: black;
    font-size: 1.2rem;
    line-height: 1.5;
    text-align: center;
}

.mentions p{
    margin: 15px 0;
}

.titre::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #cba529;
    margin: 10px auto;
}

@media screen and (max-width: 767px){
    .header{
        font-size: 0.7rem;
        width: 60%;
    }
    
    .mentions{
        font-size: 0.7rem;
        line-height: 1.1;
    }

}
</style>  