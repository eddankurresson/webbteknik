import React from "react";

//Function to show date next to cursor
window.onmousemove = function(e) {
   var date = new Date();
    var year = date.getFullYear();
   var  month = date.getMonth() + 1;
   var day = date.getDate();
    document.getElementsByClassName("currentdate")[0].innerHTML = "Dagens datum " + day + "/" + month + "/" + year;
    if (e.target.classList.contains('date')) {
    		//	Content of date which is hovered
        var $target = e.target.nextElementSibling;

        //	Only work with hovered target
        //	Add visible class hovered elem to distinguish
        if (!$target.classList.contains('visible')) {
        		$target.classList.add('visible');
        } else {
            //	Get viewport offset of tooltip element
            var offset = $target.parentElement.getBoundingClientRect();
            //	Tooltip distance from mouse(px)
            var tipDist = 5;
            //	Calc and set new tooltip location
            $target.style.top = (e.clientY - offset.top + tipDist) + 'px';
            $target.style.left = (e.clientX - offset.left + tipDist) + 'px';
        }
    } else {
    		//	Remove visible class
        var floattext = document.getElementsByClassName('floattext');
        for (var i = 0; i < floattext.length; i++) {
        		floattext[i].classList.remove('visible');
        }
    }

};
function filer(){
    var articles = [
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 12'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 11'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 10'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 9'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 8'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 7'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 6'
        },
        {

          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 5'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 4'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 3'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 2'
        },
        {
          onClickLink: 'files/formelblad.pdf',
          imgageSource: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBWqTVt47eUdTDHNMu0_DGe0mD9scQePsFcA&usqp=CAU',
          title: 'Vecka 1'
        }
      ]
      ihopslagning(articles);
}
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
        }
      ]

          ihopslagning(articles);
        }
        function ihopslagning(articles){
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
class Home extends React.Component{
    render(){
        return(
         
            <div className="grid-container">
        
                    <div className="item4" style={{ backgroundColor: "#BFE4F4" }}>
                        <br />
                        <img style={{ paddingLeft: "30px" }} id="mobilepicture" src={require('../files/batomoss.jpg')} alt="" />
                        <br />
                    </div>

                    <div className="item6" style={{ backgroundColor: "#BFE4F4" }}>
                        <h1>V&auml;lkommen Till <br /> Nyn&auml;shamns Segels&auml;llskap <br /></h1>
                        <h2>
                            NSS &auml;r en aktiv och betydelsefull akt&ouml;r i  Nyn&auml;shamn med en naturlig och m&aring;ng&aring;rig
                            verksamhet med inriktning p&aring; sj&ouml;liv, b&aring;tsport, segling och ungdoms- verksamhet.
                            NSS &auml;ger en f&ouml;rn&auml;lig klubbanl&auml;ggning, varv och bryggor vid Fagerviken, m&aring;nga bryggor i
                            Treh&ouml; rningsviken samt klubbholmen Lacka strax norr om Nyn&auml; shamn.
                        </h2>
                    </div>
                    <div className="item7" style={{ backgroundColor: "#BFE4F4" }}>

                        <h1> Senaste styrelsemötet och nya listor <br /></h1>

                        <h2>
                            Här är informationen från senaste styrelsemötet. Vi har kommit fram till många olika saker. Bland annat det första det andra och det tredje. Listor har också kommit ut för isättning av båtar samt bryggvakt.
                        </h2>

                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="files/files/formelblad.pdf" className="button" target="_blank">&nbsp;Bryggvakt&nbsp;</a>
                        <a href="files/files/formelblad.pdf" className="button" target="_blank">&nbsp;Isättning&nbsp;</a>

                    </div>

                    <div className="item9 datecursor" style={{ backgroundColor: "#BFE4F4" }}>
                        <br />

                        <img src="https://bildix.mmcloud.se/bildix/api/images/kpTnboHCr3OqY3sieb1QTf2sq0k.jpeg?fit=crop&w=980&h=551" id="mobilepicture1" alt="" className="date" />
                        <div className="floattext">

                            <h2 className="currentdate"> </h2>
                            <h2>Uppladdat datum 10/2/23</h2>
                        </div>

                        <br />
                    </div>
                    <div className="item10" style={{ backgroundColor: "#BFE4F4" }}>
                        <h1>Nyheter</h1>
                        {artiklar}
                    </div>

                   

                
            </div>
            );  
              }
}

export default Home;