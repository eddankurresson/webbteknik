import React from "react";

class Home extends React.Component{
    render(){
        return(
         
            <div className="grid-container">
                <div className="item1">
                    <a href="index.html"> <img src="files/logga.png" style={{ maxWidth: '100%' }} alt="" />  </a>
                </div>
                <div className="item2">
                    <div id="desktop">
                        <a href="omoss.html">Om Oss </a>
                        <a href="kanot.html">Kanot</a>
                        <a href="ungdomsverksamhet.html">Ungdomsverksamhet</a>
                        <a href="blimedlem.html">Bli Medlem</a>
                        <a href="veckobrev.html">Veckobrev</a>
                    </div>

                    <div className="menu" id="mobile">

                        <button className="toggle">Meny</button>
                        <ul className="list">
                            <a href="omoss.html"> <li className="list-item">Om Oss </li> </a>
                            <a href="kanot.html"> <li className="list-item">Kanot</li></a>
                            <a href="ungdomsverksamhet.html"><li className="list-item">Ungdomsverksamhet </li> </a>
                            <a href="blimedlem.html"> <li className="list-item">Bli Medlem</li> </a>
                            <a href="veckobrev.html"> <li className="list-item">Veckobrev</li> </a>
                            <a href="https://www.klubbtryck.se/nhss/"><li className="list-item">Kläder</li></a>
                            <a href="nyheter.html"> <li className="list-item">Nyhetsarkiv</li> </a>
                            <a href="#mobilemaps"> <li className="list-item"> Kontakt</li> </a>

                        </ul>

                    </div>


                    <div id="desktop1">
                        <div className="item3">
                            <a href="https://www.klubbtryck.se/nhss/">Kläder</a>
                            <a href="nyheter.html">Nyhetsarkiv</a>
                            <a href="#mobilemaps" className="button">&nbsp;Kontakt&nbsp;</a>
                        </div>
                    </div>
                    <div className="item4" style={{ backgroundColor: "#BFE4F4" }}>
                        <br />
                        <img style={{ paddingLeft: "30px" }, { paddingBottom: "10px" }} id="mobilepicture" src="files/batomoss.jpg" alt="" />
                        <br />
                    </div>

                    <div className="item6" style={{ backgroundColor: "#BFE4F4" }}>
                        <h1>V&auml; lkommen Till <br /> Nyn&auml; shamns Segels&auml; llskap <br /></h1>
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

                            <h2 className="currentdate"></h2>
                            <h2>Uppladdat datum 10/2/23</h2>
                        </div>

                        <br />
                    </div>
                    <div className="item10" style={{ backgroundColor: "#BFE4F4" }}>
                        <h1>nyheter</h1>

                    </div>

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



                    <div className="item14" style={{ backgroundColor: "#BFE4F4" }}>
                    </div>

                    <div className="item15" style={{ backgroundColor: "#BFE4F4" }} id="mobilefooterright">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2061.4562557675717!2d17.941270816054566!3d58.89023678150737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f5ea05a12739b%3A0x95f7354abfef82c7!2sNyn%C3%A4shamns%20Segels%C3%A4llskap!5e0!3m2!1ssv!2sse!4v1674645100008!5m2!1ssv!2sse" id="mobilemaps" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            );  
              }
}

export default Home;