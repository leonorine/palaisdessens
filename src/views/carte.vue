<template>
<div class="carte-content">
    <div class="titre">
        <h1>Notre Carte</h1>
    </div>
  <div class="carte">
    <div class="entrees">
      <h2 class="titre-cat">Entrées</h2>
      <div class="carte-item">
        <p class="nom">Betterave confite à la grenadine, pommade de chèvre miel, crumble aux noix et coulis de betterave</p>
        <p class="prix">16€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Maquereau mariné au soja, miso et miel, condiment pomme, framboise, échalotes confites et menthe</p>
        <p class="prix">18€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Salade César revisitée (espuma de sauce César, sucrine, gel de bouillon de poulet parfumé aux herbes et crumble parmesan)</p>
        <p class="prix">17€</p>
      </div>
    </div>

    <div class="plats">
      <h2 class="titre-cat">Plats</h2>
      <div class="carte-item">
        <p class="nom">Filet de bœuf fumé, laqué à la mélasse de canne et flambé au rhum vieux, jus de bœuf corsé parfumé au jus de canne, herbes de Provence et poivre de Madagascar</p>
        <p class="prix">31€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Magret de canard rôti, duo de sauce au poivre et sauce vin jaune</p>
        <p class="prix">28€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Raviole d'agneau façon tajine</p>
        <p class="prix">27€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Filet de merlu poêlé sauce beurre blanc au champagne, œufs de saumon et herbe fine</p>
        <p class="prix">28€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Bourride provençale (mix de poisson du moment mariné) poêlé de pommes de terre et aïoli</p>
        <p class="prix">27€</p>
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
        <p class="nom">Entremet fraise crème brûlée</p>
        <p class="prix">12€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Riz au lait coco et vanille, ganache chocolat blanc vanille matcha et nougatine sésame et riz soufflé</p>
        <p class="prix">12€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Duo de mousse chocolat et crème diplomate à la vanille et crumble</p>
        <p class="prix">12€</p>
      </div>
    </div>
  </div>

  <p id="ttc" class="carte-item">Nos prix sont TTC et service compris, hors boissons</p>
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