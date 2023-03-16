import React from "react";
import Video from "../files/knopar.mp4"

class Home extends React.Component{
    render(){
        return(
         
            <div className="grid-container">
        
        <div class="item4"  style={{ backgroundColor: "#BFE4F4" }}  >
  <br/>    
  <img style={{ padddingLeft: "30px" }} id="mobilepicture" src={require('../files/lager.jpeg')} alt=""/>
  <br/>
  </div>
 
  <div class="item6"  style={{ backgroundColor: "#BFE4F4" }}>
    <br/>
    <h1>Nu är årets lägeranmälningar öppna! </h1>
   
            <table style={{ width: "80%" }}>
              <tr>
                <th>Läger 1</th>
                <th>Läger 2</th>
                <th>Läger 3</th>
                <th>Läger 4</th>
            
              </tr>
              <tr>
                <td>Vecka 24</td>








                
                <td>Vecka 26</td>
                <td>Vecka 31</td>
                <td>Vecka 32</td>
              </tr>
              <tr>
                <td>Måndag 13.juni - Fredag 18 Juni.</td>
                <td>Måndag 27 Juni - Fredag 1 Juli</td>
                <td>Måndag 1 Augusti - Fredag 5 Augusti</td>
                <td>Måndag 8 Augusti - Fredag 12 Augusti</td>
              </tr>
            
            </table>
            &nbsp; &nbsp; &nbsp;
            <a href="https://simplesignup.se/" class="button">&nbsp;Anmälan&nbsp;</a>
  </div>
  <div class="item7"  style={{ backgroundColor: "#BFE4F4" }}>
    <h1> Knopskola <br/></h1>
    <h2 id="text1">
      Vi tycker att det kan vara ganska bra att lära sig några knopar innan lägret. <br/>
      Om du har tid rekommenderar vi skarpt den här videon.
    </h2>
  </div>

  <div class="item9"  style={{ backgroundColor: "#BFE4F4" }}> 
   <br/>
 
  <video width="320px" height="240px" controls>
    <source src={Video} type="video/mp4"/>
    Your browser does not support the video tag.
  </video>
  <br/>  


  <br/>
  </div>
 


                
            </div>
            );  
              }
}

export default Home;