import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <div className="grid-container">

            <div className="item13" style={{ backgroundColor: "#BFE4F4" }} id="mobilefooterleft">
                
                <br /> <br /> <br />
                &nbsp; &nbsp; &nbsp; &nbsp; Öppettider <br /> &nbsp; &nbsp; &nbsp; &nbsp; Måndag till fredag 08: 00-12: 00 <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                &nbsp; &nbsp; &nbsp; &nbsp; Kontakta Oss <br />
                &nbsp; &nbsp; &nbsp; &nbsp; 149 34 NYNÄSHAMN <br />
                &nbsp; &nbsp; &nbsp; &nbsp; Tel: 08- 520 128 20 <br />

                &nbsp; &nbsp; &nbsp; &nbsp; Kanslipersonal: <br />
                &nbsp; &nbsp; &nbsp; &nbsp; Christine Titti Åhlander <br />
                &nbsp; &nbsp; &nbsp; &nbsp; Per Gillfjärd <br />
                &nbsp; &nbsp; &nbsp; &nbsp; E-mail: info @nhss.info <br /><br /> <br /> <br />

            </div>



            
            <div className="item15" style={{ backgroundColor: "#BFE4F4" }} id="mobilefooterright">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.4562557675717!2d17.941270816054566!3d58.89023678150737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f5ea05a12739b%3A0x95f7354abfef82c7!2sNyn%C3%A4shamns%20Segels%C3%A4llskap!5e0!3m2!1ssv!2sse!4v1674645100008!5m2!1ssv!2sse" id="mobilemaps"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
            </div>
            </div>
            );
                }
    }
    export default Footer;