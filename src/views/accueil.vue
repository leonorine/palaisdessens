<template>
    <section>
    <div class="header">
    <div class="head-video">
        <video muted autoplay preload="auto" playsinline  loop>
             <source src = "../../public/PDSvideoMini.mov" type="video/mp4"/>
            <a href="../../public/PDSvideoMini.mov"></a>
        </video>
    </div>
    <div class="header-content">
        <h1 class = "titre"> Bienvenue au Palais des Sens</h1> 
        <p>
            Si vous cherchez une expérience gastronomique hors du commun, 
            Le Palais des Sens est l'endroit parfait pour vous. Situé dans 
            la rue Auguste Babet à Saint Pierre, ce restaurant vous promet 
            de stimuler tous vos sens. À commencer par la vue des assiettes 
            dressées avec passion par nos jeunes chefs qui sont là pour vous 
            faire entrer dans un univers plein de sensations culinaires. 
            De plus, une fois par mois, nos 
            jeunes chefs talentueux vous invitent à participer 
            à une dégustation dans l'obscurité, une expérience qui élèvera vos 
            sens à de nouveaux sommets et vous emmènera vers l'extase culinaire.
        </p>
        
    </div>
    </div>
        <div class="titre-gallery"><h1 class="titre" style = "color:black;">Galerie Photos</h1></div>
          
        <div class="gallery">
            
            <div class="gallery__column">

                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/rectangle/declinaison-de-pommes-de-terre.jpg" alt="Déclinaison de pommes de terre" class="gallery__image" >
                        <figcaption class="gallery__caption">Déclinaison de pommes de terre</figcaption>
                    </figure>


                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/carre/filet-de-boeuf.jpg" alt="Filet de bœuf caramel au whisky sauce béarnaise" class="gallery__image">
                        <figcaption class="gallery__caption">Filet de bœuf caramel au whisky sauce béarnaise</figcaption>
                    </figure>

        
                
            </div>
            <div class="gallery__column">

                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/carre/mousseline-de-julienne-et-son-calamar.jpg" alt="Mousseline de Julienne et son calamar poêlé sauce à l'encre de seiche" class="gallery__image">
                        <figcaption class="gallery__caption">Mousseline de Julienne et son calamar poêlé sauce à l'encre de seiche</figcaption>
                    </figure>


                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/rectangle/trifle-framboise-et-nougatine-pop-corn.jpg" alt="Trifle framboise et sa nougatine au pop-corn" class="gallery__image">
                        <figcaption class="gallery__caption">Trifle framboise et sa nougatine au pop-corn</figcaption>
                    </figure>

            </div>

            
            <div class="gallery__column">

                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/rectangle/pavlova.jpg" alt="Pavlova" class="gallery__image">
                        <figcaption class="gallery__caption">Pavlova</figcaption>
                    </figure>


                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/carre/sole-meuniere.jpg" alt="Sole meunière rôti et son beurre tressé parfumé à l'aneth" class="gallery__image">
                        <figcaption class="gallery__caption">Sole meunière rôti et son beurre tressé parfumé à l'aneth</figcaption>
                    </figure>

        
                
            </div>
            <div class="gallery__column">

                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/carre/IMG_8030.jpg" alt="Risotto au corail d'oursin gambas mariné séra flambée au rhum vieux" class="gallery__image">
                        <figcaption class="gallery__caption">Risotto au corail d'oursin gambas mariné séra flambée au rhum vieux </figcaption>
                    </figure>


                    <figure class="gallery__thumb">
                        <img src="../../public/plats-accueil/rectangle/entremet-aux-fruits-exotiques.jpg" alt="Entremet aux fruits exotiques" class="gallery__image">
                        <figcaption class="gallery__caption">Entremet aux fruits exotiques</figcaption>
                    </figure>
                
        
                
            </div>
            
        </div>
        <div class="chefs-header">
            <h1 class="titre">Nos Chefs</h1>
        </div>
            <div class="chefs">
            <div class="chefs-image">
                <img src="../../public/chefs.jpg" alt="Nos Chefs">
            </div>
            <div class="chefs-content">
                <p> Découvrez les maîtres de la gastronomie derrière les délices du 
                    Palais des Sens, Steve Onier et Alexandre Basileu. Malgré leur 
                    jeunesse, ces deux chefs sont des experts dans l'art subtil de 
                    marier les saveurs et les textures. Dans la cuisine ouverte de 
                    notre établissement, ce duo dynamique s'engage dans un ballet 
                    culinaire envoûtant, offrant à nos convives une expérience gustative 
                    inoubliable.</p>
                
            </div>
        </div>
    
    </section>
</template>


<style lang="scss">

    
    .header {
        margin-top: 0;
        color: #fff;
        height: max-content;
        display: grid;
        margin-bottom: 0;
        text-align: center;
        margin:auto;
    }
    

    .header-content{
        text-align: center;
        margin-top: 20px;
        color: #000;
        grid-row: 1;
        margin-bottom: 30px;
        

        
    }

    .header-content p {
        margin: 0 20%;
        font-size: 1.2rem;
        
    }
    .titre {
        text-align: center;
        font-size: 2rem;
        margin: 20px 0;
    }


    .titre::after {
        content: "";
        display: block;
        width: 100px;
        height: 2px;
        background-color: #cba529;
        margin: 10px auto;
    }

    .titre-gallery{
        text-align: center;
        font-size: 2rem;
        margin-top: 15px;
    }

    .titre-gallery::before{
        content: "";
        display: grid;
        width: 70%;
        height: 2px;
        background-color: #000;
        margin: 0  auto;
        margin-bottom: 20px;
    }

    .head-video{
        grid-row: 2;
    }
    .head-video video {
        
        height: 400px;
        margin-bottom: 20px;


    }


    .gallery {
        color: #000;
        display: flex;
        padding: 5px;
        transition: .3s;
        justify-content: center;

    }
        
    .gallery__column {
        display: flex;
        flex-direction: column;
        
    }
    
    .gallery__image {
        display: block;
        width: 100%;
        transition: .3s;
    }

    .gallery__thumb {
        position: relative;
        overflow: hidden;
        margin: 5px;
        border-radius: 5px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        transition: .3s;
    }
        
    .gallery__caption {
        display: none;
    }

    .gallery img{
        width: 200px;
    }

    .gallery__thumb:hover .gallery__caption {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        transition: .3s;
        text-align: center;

    }

    

    .chefs-header::before{
        content: "";
        display: grid;
        width: 70%;
        height: 2px;
        background-color: #000;
        margin: 0  auto;
        margin-bottom: 20px;
        margin-top: 50px;
        
    }
    .chefs, .chefs-header {
        color: black;
    }

    

    .chefs-image img {
        width: 300px;
        box-shadow: 0 0 5px rgba(0, 0, 0, .5);
        border-radius: 100%;
        
    }
    .chefs-image{
        grid-column: 1;
        margin: 0 15%;
        padding-left:20%;
        margin-left: 10px;
        
    }

    .chefs-content {
        grid-column: 2;
        margin: 0 0 0 13%;
        font-size: 1.2rem;
        text-align: justify;
    }

    .chefs{
        display: grid;
        margin: 30px 10% 120px 10%;
        align-items: center; 
        grid-template-columns: 30% 70%;
        
    }
    .chefs-content p {
        margin: 0 10%;
    }
    
    @media screen and (min-width: 768px) and
(max-width: 1023px){
    .chefs-image img {
        width: 230px;
    }

    .chefs-image{
        padding-left:15%;
        
    }
    .chefs-content {
        font-size: 1rem;
    }
    .titre{
        font-size:1.8rem;
    }

    .gallery img{
        width: 180px;
    }

    .header-content p{
        margin: 0 10%;
    }
}

@media screen and
(max-width: 767px){
    .header-content p{
        margin: 0 5%;
        font-size: 0.8rem;
    }
    .titre{
        font-size:1.5rem;
    }
    .head-video video {
        width: 95%;
        max-width: 400px;
        margin-top:-60px;
        margin-bottom: -50px;

    }

    .header-content{
        margin:0;
        
    }
    
    .gallery img{
        width:73px;
    }

    .gallery__image:hover img{
        transform: scale(1.3);
        
    }

    .gallery__thumb:hover .gallery__caption {
        font-size: 0.6rem;
    }

    .chefs{
        display: flex;
        flex-direction: column;
        margin: 15px 0;

    }

    .chefs-image img {
        width: 200px;
        
    }
    .chefs-image{
        padding-left:0;
        margin:0 auto;
    }
    .chefs-content {
        margin:10px 1%;
        font-size: 0.8rem;
    }

}

</style>


<script setup  lang="ts">


</script>