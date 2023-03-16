import React from "react";

class Kanot extends React.Component{
    render(){
        return(
         
            <div className="grid-container">
                <div class="item4"  style={{ backgroundColor: "#BFE4F4" }}>
                    <br/>    
                    <img style={{ padddingLeft: "30px" }} id="mobilepicture" src={require('../files/kanot.jpeg')} alt=""/>
                    <br/>
                </div>
            
                <div class="item6" style={{ backgroundColor: "#BFE4F4" }}>
                    <br/>
                    <h1>Vi har en kanotlada!</h1>
                    <h2>
                    Välkommen att kontakta oss för att söka en kanotplats. Kanotladan ligger grymt
                    bredvid vattnet och det är enkelt att ta i och ur kanoten. Det ligger nära olika typer
                    av sjö så finns mycket variation.    
                    </h2>
                </div>
                <div class="item7" style={{ backgroundColor: "#BFE4F4" }}>
                    <h1> Onsdagsträningar <br/></h1>
                    <h2>
                    Kanotkommittén informerar att det är träning varje onsdag kl 18:30.Samling vid kanotladan.Ta med kläder efter väder.
                    </h2>
                </div>
               
                <div class="item9" style={{ backgroundColor: "#BFE4F4" }}> 
                <br/>
                <img style={{ padddingLeft: "10px" }}id="mobilepicture1" src={require('../files/onsdag.jpeg')} alt=""/>

                <br/>  


                <br/>
                </div>

                   
            </div>
            );  
              }
}

export default Kanot;