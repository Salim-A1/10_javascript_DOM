let mainHeadingId = document.getElementsByTagName("h1")[0];//ZUGRIFF ÜBER DIE ID
mainHeadingId.textContent = "Hello, new heading!";//MODIFIKATION DES HTML-Elements mit der ID=hello
//mainHeadingId.style.color = "red";//Modifikation von CSS-Eigenschaften
mainHeadingId.style.fontFamily = "Roboto";//Modifikation von CSS-Eigenschaften



let Modifikation1 = document.getElementsByClassName("ninja");
Modifikation1.style.fontSize = "55px";

let Modifikation2 = document.getElementById("hello");
Modifikation2.style.backgroundColor = "white";

let Modifikation3 = document.getElementsByTagName("h1");
Modifikation3.fontFamily = "Arial";

/**
 * AUFGABE
 * 1) Modifikation der Schriftgröße
 * 2) Modifikation der Hintergrundfarbe
 * 3) Modifikation einer CSS-Eigenschaft eurer Wahl ;) 
 */