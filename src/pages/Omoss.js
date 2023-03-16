import React from "react";

class Omoss extends React.Component{
    render(){
        return(
         
            <div className="grid-container">

            <div class="item4" style={{ backgroundColor: "#BFE4F4" }}>
                <br/>
                <img style={{ paddingRight: "30px" }} id="mobilepicture" src={require('../files/klubbhus.jpeg')} alt=""/>
                <br/>
            </div>
            
          
            <div class="item6" style={{ backgroundColor: "#BFE4F4" }}>
                <br/>
                <h1 id="text1">Vision och Mål</h1>
                <br/> <br/> <h2 id="text2">
                    Sällskapets ändamål är att verka för ett aktivt båtliv för medlemmar i alla åldrar.
                    Med en verksamhet präglad av god etik och ett gott kamrat- och sjömanskap skall medlemmars intressen och behov av
                    t.ex. tävlings-, brygg- och varvsverksamhet tillvaratas och tillgodoses till för medlemmarna rimliga insatser och kostnader.

                        </h2>
                  
            <br/><br/>
            </div>
            <div class="item7" style={{ backgroundColor: "#BFE4F4" }}>
                <h1> Sponsring <br/></h1>
                <h2>
            NSS söker aktivt efter företag som vill profilera sitt varumärke eller sina produkter mot en aktiv
            båt- och friluftslivsintresserad allmänhet. Ni når självfallet våra över tusentalet medlemmar, men
            också många nynäshamnare, tillresta besökare och tävlingsdeltagare.
            Vi skräddarsyr en lösning för ditt företag, oavsett om du är tävlings- eller anläggningssponsor.
            Vi är även i behov av suppliers med olika tjänster eller produkter som behövs för vår verksamhet.
                </h2>
            </div>
            
         
            <div class="item9" style={{ backgroundColor: "#BFE4F4" }}>
            <br/>
            <img  style={{ paddingRight: "30px" }} id="mobilepicture1" src={require('../files/sponsor.jpeg')} alt=""/>
            <br/>


            <br/>
            </div>

        
            
                
            </div>
            );  
              }
}

export default Omoss;