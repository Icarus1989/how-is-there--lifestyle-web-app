<hr>
<hr>

<div align="center">
  <h1>How is There? - Lifestyle web app</h1>
  <h3>Questo é un progetto per la guida di start2impact JavaScript Advanced categoria lifestyle.</h3>
</div>
<br>
<div align="center">
  <img src="https://i.ibb.co/82M5Yzh/Devices-Mockup-2.png" alt="Devices-Mockup-1" width="70%" height="70%">
</div>

<hr>
<hr>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#description">Description</a>
          <ul>
          <li><a href="#client-side">Client Side</a></li>
          <li><a href="#server-side">Server Side</a></li></ul>
          </li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contacts">Contacts</a></li>
  </ol>
</details>

<hr>
<hr>

## About The Project

### Built With

Client: 
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=it)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=it)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it)
  * [Teleport API](https://developers.teleport.org/) 
  * [Axios](https://axios-http.com/)

Server:
* [Node.js](https://nodejs.dev/)
  * [Express.js](https://expressjs.com) 
  * [Cross-Fetch](https://www.npmjs.com/package/cross-fetch)
  * [Pixabay API](https://pixabay.com/api/docs/)
  * [Canny-Edge-Detector & Image-js](https://github.com/image-js/canny-edge-detector)
  * [Regenarator-Runtime](https://www.npmjs.com/package/regenerator-runtime)
* [NeDB](https://github.com/louischatriot/nedb)

Budler:
* [Webpack](https://webpack.js.org/)
  * [Webpack-CLI]()
  * [Webpack-Dev-Server]()
  * [Webpack-Node-Externals]()
  * [Dotenv-Webpack]()
  * [File-Loader]()
  * [HTML-Loader]()
  * [HTML-Webpack-Loader]()
  * [CSS-Loader]()
  * [Style-Loader]()
  * [Babel](https://babeljs.io/)
<br>
<hr>

### Description

Questo é il primo progetto in cui combino così tanti elementi: gestione dei dati ottenuti dall'API di Teleport, animazioni, gestione degli errori, un menu utilizzabile che utilizza dei dati salvati su database lato client, tramite node.js la gestione dell'API di Pixabay e la creazione di cartelle e file e la loro modifica, la persistenza dei dati tramite database NeDB, l'utilizzo di webpack sia per il lato client che server ed il deploy dell'app utilizzando heroku.
I dati sulle città di Teleport verrano visualizzati in 3 diverse pagine: nella prima vi saranno un titolo con nome della città ricercata, Paese e continente, la descrizione ed il punteggio Teleport in percentuale, ottenuto dalla media tra tutti i valori dei dati più specifici per ogni singola categoria, che verranno rappresentati nel dettaglio nella seconda e terza pagina inseriti ordinatamente in due tabelle.
<br>
<div align="center">
  <img src="https://i.ibb.co/J5FgQfm/iphone7forpres-2.png" alt="screens" width="80%" height="80%">
</div>
<br>
Il design delle tre pagine é volutamente scelto per dare un senso di continuità: elementi come le text boxes iniziali allungate verso la seconda pagina o le tabelle leggermente spostate sono dettagli pensati per spingere a scorrere tra una pagina e rendere l'esperienza più fluida.

<hr>

Lo sfondo sarà composto da due immagini, la prima sarà una foto ottenuta da Pixabay con opacità bassissima per ricavarne solo i colori sfumati, la seconda verrà ricavata dalla prima con canny-edge-detector, un pacchetto NPM utilizzato per ricavare i bordi delle figure presenti nella foto. Quest'immagine unita al filter CSS invert ed in seguito alla prima immagine, creerà uno sfondo con uno stile unico, simile ad un quadro (NOTA ricercare nome stile pittura).
(In modalità mobile, ) quando si scorrerà tra una finestra e l'altra lo sfondo scorrera rivelando una nuova parte dell'immagine.

<div align="center">
  <img src="https://i.ibb.co/Ch9n9bk/double-Image.png" alt="double-Image" width="80%" height="80%">
</div>

<hr>

L'app utilizza un database molto basilare, NeDb, mia prima esperienza dal campo database che utilizzo qui per la prima volta, per avere una persistenza dei dati. Tramite questo sarà sempre possibile avere una lista di partenza di città da visualizzare e salvare le proprie città preferite, ma anche eliminarle a piacere. Ho preferito usare questo approccio, rispetto ad esempio a LocalStorage, per poter sopperire ad eventuali altri problemi futuri dei server Teleport ed avere una base di dati facilmente estendibile, senza troppo codice JavaScript, per mantenere utilizzabile l'app almeno con le città salvate nel caso di quest'eventualità. Questa infatti si avvia già con una base di DIGIT città.

<div align="center">
  <img src="https://i.ibb.co/zscnFcj/menu-Open-Def.png" alt="menu-Open" border="0">
</div>

<hr>
<hr>

## Usage

La prima schermata dell'app, molto basilare ed intuitiva, dà la possibilità di
scegliere tra la ricerca di una città o la selezione tra una di
quelle salvate.

<!-- Immagine -->

:mag: - Effettuando una ricerca si potranno ottenere vari risultati: 

* Se la città é presente nei dati Teleport compariranno la descriscrizione, il punteggio in percentuale dato alla città ed i dati sugli aspetti tenuti in considerazione per ottenere tale punteggio, ordinati in due tabelle nella seconda e terza pagina. Sarà inoltre possibile salvare tale città tramite l'apposito tasto in basso a sinistra &#9733;. 

<div align="center">
  <img src="https://i.ibb.co/K52Mxvc/city-Visualization.gif" alt="cityVisualization" width="25%" height="25%">
</div>

<br>
* Se la città non fosse presente nei dati verrà effettuata una ricerca su tutte le possibili alternative per il Paese di tale città, dalle quali sarà poi possibile scegliere e osservarne i dati

<!-- Immagine buttons alternatives con Eureka -->

<div align="center">
  <img src="https://i.ibb.co/Q6bvXyf/Ricerca-Eureka-1.gif" alt="alternativesSearch" width="50%" height="50%">
</div>


<br>
* Se la città non esistesse o fosse avvenuto un errore nell'inserimento del nome o vi fosse un problema di connessione del dispositivo, compariranno dei messaggi di errore adatti
<br>
<br>

<div align="center">
  <img src="https://i.ibb.co/gvPv6mM/iphone7-errors.png" alt="iphone7-errors" width="80%" height="80%">
</div>
<br>
<br>
&#9776; - Utilizzando il menu con l'apposito tasto nella parte in basso a 
destra sarà possibile selezionare una delle città salvate in precedenza o 
eliminarle dalla memoria a piacimento.

<div align="center">
  <img src="https://i.ibb.co/N2tyRmT/menu-3.gif" alt="menu" width="50%" height="50%" border="0">
</div>

<!-- Immagine menu aperto -->


<hr>
<hr>

## Demo

L’applicazione é stata pubblicata utilizzando Heroku. 
E’ possibile utilizzarla al link:
<br>
:link: https://how-is-there--lifestyle-app.herokuapp.com/

<hr>
<hr>

## License

Distributed under the MIT License.

<hr>
<hr>

## Contacts

Alex<br>
westcoastrapper89@yahoo.it<br>
[GitHub](http://https://github.com/Icarus1989)<br>
[Instagram](http://https://www.instagram.com/alex._.1989/)<br>
[Facebook](https://www.facebook.com/alex.valente.92)<br>

Project Link :link: : [ https://github.com/Icarus1989/how-is-there--lifestyle-web-app ]


