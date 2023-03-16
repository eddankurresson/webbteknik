import React from "react";
//Function containing showable files with their title
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
 
class Veckobrev extends React.Component{
    render(){
        return(
         
            <div className="grid-container">
        
                <div className="item10" style={{ backgroundColor: "#BFE4F4" }}>
                        <h1>Nyheter</h1>
                        <button id="knappfan"onClick={filer}> Visa Veckobreven </button>
                        <div id='imageGalleryWithTitle' class="news-container"></div>

                    </div>
            </div>
            );  
              }
}

export default Veckobrev;