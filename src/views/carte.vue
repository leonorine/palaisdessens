<template>
<div class="carte-content">
    <div class="titre">
        <h1>Notre Carte</h1>
    </div>
    <div class="carte">
        <div class="entrees">
            <h2 class="titre-cat">Entrées</h2>
            <div class="carte-item">
                <p class="nom">Tartare de gambas, mayonnaise maison à l'encre de seiche et son guacamole d'avocat</p>
                <p class="prix">17€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Nougat de Camembert parfumé à la truffe et son velouté de petits pois à la menthe</p>
                <p class="prix">19€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Mille-feuille d'artichaut barigoule</p>
                <p class="prix">16€</p>
            </div>
        </div>
        <div class="plats">
            <h2 class="titre-cat">Plats</h2>
            <div class="carte-item">
                <p class="nom">Filet de Bœuf flambé et son jus de veau caramélisé au whisky</p>
                <p class="prix">33€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Magret de canard rôti, sauce miel au poivre de Madagascar et gingembre confit</p>
                <p class="prix">31€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Le Cordon bleu du Palais des Sens, sauce cheddar au paprika fumé</p>
                <p class="prix">28€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Pavé de dorade coryphène rôti, sauce thaï et son émulsion de citron vert</p>
                <p class="prix">33€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Filet de bar rôti, garni à la vierge de légumes, sauce beurre blanc à la passion</p>
                <p class="prix">29€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">L'assiette du potager</p>
                <p class="prix">22€</p>
            </div>
        </div>
        <div class="dessert">
            <h2 class="titre-cat">Desserts</h2>
            <div class="carte-item">
                <p class="nom">Café Liégeois revisité </p>
                <p class="prix">12€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Pavlova exotique</p>
                <p class="prix">12€</p>
            </div>
            <p class="trait">_______________________________</p>
            <div class="carte-item">
                <p class="nom">Cheese Cake aux fruits des bois</p>
                <p class="prix">12€</p>
            </div>
        </div>
    </div>
    <p id = "ttc" class="carte-item">Nos prix sont TTC et service compris, hors boissons</p>
</div>
</template>

<style>
.titre {
    text-align: center;
    font-size: 1.6rem;
    margin: 20px 0;
    color: black;
}
.titre-cat{
    font-size: 1.5rem;
    color: white;
    text-align: center;
    background-color: #000;
    width:150px;
    margin: 30px auto;

}

#ttc {
    margin: 80px 0 -30px 0 !important; 
}

/*.titre::after, .titre-cat::after {
    content: "";
    display: block;
    width: 100px;
    height: 2px;
    background-color: #cba529;
    margin: 10px auto;
}*/

.carte-content{
    color: black;
    text-align: center;
}

.carte-item{
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 15px; 
    font-size: 1.3rem;
}

.carte-item p{
    margin:0 5px;
}

.trait{
    color: #cba529;
    font-weight: 900;

}

@media screen and (min-width: 768px) and
(max-width: 1023px){
    .carte-item{
        margin-left:5%;
        margin-right:5%;
    }
}

@media screen and (max-width: 767px){
    .carte-item{
        font-size: 0.7rem;
        margin-left:6%;
        margin-right:6%;
    }
    .titre {
        text-align: center;
        font-size: 0.9rem;
        margin: 15px 0;
    }
    .titre-cat{
        font-size: 0.9rem;
        margin: 20px auto;
    
    }
}

</style>