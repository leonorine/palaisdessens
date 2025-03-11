<template>
<div class="carte-content">
    <div class="titre">
        <h1>Notre Carte</h1>
    </div>
  <div class="carte">
    <div class="entrees">
      <h2 class="titre-cat">Entrées</h2>
      <div class="carte-item">
        <p class="nom">Tartare de thon banane mariné au sera, condiments tamarin et letchi, émulsion citron</p>
        <p class="prix">18€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Foie gras de canard mi-cuit parfumé au rhum vieux, vanille, grué cacao et café, chutney d'oignon caramélisé et brioche toastée</p>
        <p class="prix">19€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Haricot blanc en persillade éclat de noisettes torréfiées, Philadelphia, espuma de chou-fleur et huile noisette</p>
        <p class="prix">15€</p>
      </div>
    </div>

    <div class="plats">
      <h2 class="titre-cat">Plats</h2>
      <div class="carte-item">
        <p class="nom">Bœuf en deux textures, sauce bourguignonne truffée</p>
        <p class="prix">35€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Poitrine de porc confite au miel et gingembre, jus de rôti crémé, condiment tomaté façon barbecue et épices du trappeur</p>
        <p class="prix">27€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Ballottine de poulet jaune fermier farci aux champignons et sauce forestière</p>
        <p class="prix">26€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Pavé de bourgeois rôti, duo de sauces beurre blanc encre de seiche et crème wasabi yuzu</p>
        <p class="prix">28€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Filet de capitaine poêlé sauce blaff et gel bissap</p>
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
        <p class="nom">Tarte passion meringuée destructurée et déclinaison de passion</p>
        <p class="prix">12€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Entremet pecan, vanille et caramel beurre salé</p>
        <p class="prix">12€</p>
      </div>
      <p class="trait">_______________________________</p>
      <div class="carte-item">
        <p class="nom">Mousse chocolat, poire William pochée au caramel, gel poire et crumble amande</p>
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