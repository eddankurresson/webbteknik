import React from "react";

class Header extends React.Component{
    render(){
        return(
            <div className="grid-container" style={{maxHeight: '50px'}}>

            <div className="item1">
                <a href="/"> <img src={require('../files/logga.png')} style={{ maxWidth: '12%' }} alt="" />  </a>
            </div>
            <div className="item2">
                <div id="desktop">
                    <a href="/Omoss">Om Oss </a>
                    <a href="/Kanot">Kanot</a>
                    <a href="/Ungdomsverksamhet">Ungdomsverksamhet</a>
                    <a href="/Blimedlem">Bli Medlem</a>
                    <a href="Veckobrev">Veckobrev</a>
                </div>

                <div className="menu" id="mobile">

                    <button className="toggle" >Meny</button>
                    <ul className="list"> 
                        <a href="Omoss"> <li className="list-item">Om Oss </li> </a>
                        <a href="Kanot"> <li className="list-item">Kanot</li></a>
                        <a href="Ungdomsverksamhet"><li className="list-item">Ungdomsverksamhet </li> </a>
                        <a href="Blimedlem"> <li className="list-item">Bli Medlem</li> </a>
                        <a href="Veckobrev"> <li className="list-item">Veckobrev</li> </a>
                        <a href="https://www.klubbtryck.se/nhss/"><li className="list-item">Kläder</li></a>
                        <a href="Nyheter"> <li className="list-item">Nyhetsarkiv</li> </a>
                        <a href="#mobilemaps"> <li className="list-item"> Kontakt</li> </a>

                    </ul>

                </div>
            </div>

            <div id="desktop1">
                <div className="item3">
                    <a href="https://www.klubbtryck.se/nhss/">Kläder</a>
                    <a href="Nyheter">Nyhetsarkiv</a>
                    <a href="#mobilemaps" className="button">&nbsp;Kontakt&nbsp;</a>
                </div>
            </div>
            </div>
            );
                }
    }
    export default Header;