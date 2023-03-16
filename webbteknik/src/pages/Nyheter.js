import React from "react";
//Function containing showable files with their title
function artiklar(){
var articles = [
    {
      onClickLink: 'https://www.nynashamnsposten.se/2022-08-18/mullrande-batar-intar-nynashamn--dags-for-nynas-offshore',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/VUrkJLSTuqT5ge8wKLdjN9DYpvQ.jpeg?fit=crop&w=1620&h=911',
      title: 'Mullrande båtar intar Nynäshamn – dags för Nynäs Offshore'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2022-06-22/alvar-och-nils-fyra-pa-sitt-forsta-jolle-sm--tuff-segling-i-hard-vind',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/4128a8f0-3c4f-4b5f-9252-ce8665973e5c.jpeg?fit=crop&w=1620&h=911',
      title: 'Alvar och Nils fyra på sitt första jolle-SM – tuff segling i hård vind'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2022-03-26/spadtag-for-nss-nya-varvsomrade--omkring-70-nya-batplatser-till-hosten',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/e9454ead-c701-4d18-b1e1-dba13e02812c.jpeg?fit=crop&w=1620&h=911',
      title: 'Spadtag för NSS nya varvsområde – omkring 70 nya båtplatser till hösten'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2021-08-09/stora-seglingsnamn-pa-plats-under-starbat-sm',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/be07a189-654f-4423-a6cd-762d8fde8724.jpeg?fit=crop&w=1620&h=911',
      title: 'Stora seglingsnamn på plats under starbåt-SM'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2021-08-04/starbat-sm-halls-i-nynashamn--20-batar-tavlar',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/e80f7bc7-0e07-4274-9329-c020ca820cf8.jpeg?fit=crop&w=1620&h=911',
      title: 'Starbåt-SM hålls i Nynäshamn – 20 båtar tävlar'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2021-04-29/priset-ar-i-hamn-nss-ar-arets-batklubb--for-oss-handlar-det-inte-bara-om-segling',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/598f73a0-da2c-42a6-9d3e-dd929d7b99d3.jpeg?fit=crop&w=1620&h=911',
      title: 'Priset är i hamn! NSS är Årets båtklubb – ”För oss handlar det inte bara om segling”'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2021-02-13/nss-utsedd-till-arets-batklubb-sa-roligt-och-ett-kvitto-pa-att-vi-gor-saker-ratt',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/1ba259d2-51c7-4328-9fa9-fe2b3c68fe3d.jpeg?fit=crop&w=1620&h=911',
      title: 'NSS utsedd till Årets Båtklubb: ”Så roligt och ett kvitto på att vi gör saker rätt”'
    },
    {
     
      onClickLink: 'https://www.nynashamnsposten.se/2020-08-15/coronaviruset-slog-ut-de-stora-evenemangen--men-arrangorerna-laddar-for-comeback-en-tragedi-hur-det-blivit',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/2eb431e5-7efa-4d11-9c85-bc5f682f6e3b.png?fit=crop&w=1620&h=911',
      title: 'Coronaviruset slog ut de stora evenemangen – men arrangörerna laddar för comeback: ”En tragedi hur det blivit'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2020-07-28/julia-och-hanna-os-laddar-i-nynashamn-jattebra-vindar--exakt-som-i-japan',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/7c15ae4e-1f28-4941-93aa-9ebd113eca8b.png?fit=crop&w=1620&h=911',
      title: 'Julia och Hanna OS-laddar i Nynäshamn: ”Jättebra vindar – exakt som i Japan”'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2020-02-16/saltstankta-bonan-may-95-om-tuffa-seglingar-och-jamlikhet-pa-sjon-vi-tog-alltid-rodret-varannan-gang',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/6c86e7cb-ac83-43a0-a73f-8f8e720bf686.jpeg?fit=crop&w=1620&h=911',
      title: 'Saltstänkta bönan May, 95, om tuffa seglingar och jämlikhet på sjön: ”Vi tog alltid rodret varannan gång”'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2020-06-29/traning-och-lek-under-en-fartfylld-vecka-pa-vattnet-ett-bra-satt-att-lara-sig-en-ny-sport',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/16a4647a-25aa-43c9-adca-28377f95e8b0.png?fit=crop&w=1620&h=911',
      title: 'Träning och lek under en fartfylld vecka på vattnet: ”Ett bra sätt att lära sig en ny sport”'
    },
    {
      onClickLink: 'https://www.nynashamnsposten.se/2020-03-28/klart-nss-koper-granntomten-pa-strandvagen--satter-punkt-for-en-14-arig-konflikt-kanns-jatteskont',
      imgageSource: 'https://bildix.mmcloud.se/bildix/api/images/99a22c20-5c1c-4add-83a6-ef195ae4ebf4.png?fit=crop&w=1620&h=911',
      title: 'Klart: NSS köper granntomten på Strandvägen – sätter punkt för en 14-årig konflikt: ”Känns jätteskönt”'
    }
  ]
  ihopslagning(articles);
}
function ihopslagning(articles){
    var hiding = document.getElementById("knappfan");
    hiding.style.display = 'none';
    var rootElement = document.getElementById("imageGalleryWithTitle");

      for (let i=0; i < articles.length; i++) {
        //Create the container
        var itemContainer = document.createElement("a");
        itemContainer.classList.add("article-container");
        var href = document.createAttribute("href");
        href.value = articles[i].onClickLink;
        itemContainer.setAttributeNode(href);
        var target = document.createAttribute("target");
        target.value = '_blank';
        itemContainer.setAttributeNode(target);

        //Create Image
        var image = document.createElement("img");
        image.classList.add("article-image");
        var src = document.createAttribute("src");
        src.value = articles[i].imgageSource;
        image.setAttributeNode(src);
        var alt = document.createAttribute("alt");
        alt.value = articles[i].title;
        image.setAttributeNode(alt);
      
        //Create title
        var h3 = document.createElement("h3");
        h3.classList.add("article-title");
        var h3Text = document.createTextNode(articles[i].title);
        h3.appendChild(h3Text);

        //Atach image and title to container
        itemContainer.appendChild(image);
        itemContainer.appendChild(h3);

        //Attach element to root div
        rootElement.appendChild(itemContainer);
      }
}
 
class Nyheter extends React.Component{
    render(){
        return(
         
            <div className="grid-container">
        
                <div className="item10" style={{ backgroundColor: "#BFE4F4" }}>
                        <h1>Nyheter</h1>
                        <button id="knappfan"onClick={artiklar}> Visa nyheter </button>
                        <div id='imageGalleryWithTitle' class="news-container"></div>

                    </div>
            </div>
            );  
              }
}

export default Nyheter;