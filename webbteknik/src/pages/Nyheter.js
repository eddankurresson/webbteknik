import React from "react";

    //Function to make a new "image" containing both text and image into a link 
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
                            Treh&ouml; rningsviken samt klubbholmen Lacka strax norr om Nyn&auml;shamn.
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
                  
                    </div>
            </div>
            );  
              }
}

export default Home;