<hr>
<hr>

<div align="center">
  <h1>How is There? - Lifestyle web app</h1>
</div>

<p align="center">
  Questo é un progetto Lifestyle per il completamento della guida di start2impact JavaScript Advanced.
</p>

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

<div align="center">
  <p>Immagine mockup combinato con mobile, tablet e desktop version.</p>
  <!-- <img src="https://imagizer.imageshack.com/v2/640x480q90/924/Au00v5.png"> -->
</div>

### Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=it)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=it)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it)
  * [Teleport API](https://developers.teleport.org/) 
  * [Axios](https://axios-http.com/)
* [Node.js](https://nodejs.dev/)
  * [Express.js](https://expressjs.com) 
  * [Cross-Fetch](https://www.npmjs.com/package/cross-fetch)
  * [Pixabay API](https://pixabay.com/api/docs/)
  * [Canny-Edge-Detector & Image-js](https://github.com/image-js/canny-edge-detector)
  * [Regenarator-Runtime](https://www.npmjs.com/package/regenerator-runtime)
* [NeDB](https://github.com/louischatriot/nedb)
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

Questo é il primo progetto in cui combino così tanti elementi facendoli funzionare all'unisono: gestione dei dati ottenuti dall'API di Teleport lato client, la creazione di cartelle e file tramite node.js, tra i quali immagini e la loro modifica, la persistenza dei dati tramite database NeDB, l'utilizzo di webpack ed il deploy dell'app utilizzando heroku.

<!-- Immagine composta senza dati visualizzati -->
Lo sfondo sarà composto da due immagini, la prima sarà effettivamente una foto ricavata da Pixabay con opacità bassissima per vederne solo i colori sfumati, la seconda verrà ricavata dalla prima nel server node utilizzando canny-edge-detector per ricavare i bordi delle figure presenti nella foto. Quest'immagine unita al filter CSS invert ed in seguito alla prima immagine, creerà uno sfondo con uno stile unico simile ad un disegno.

#### Client Side

Qui é dove vengono ricavati i dati dall'API di Teleport ed in seguito vengono visualizzati, creato il menu e tutti gli altri componenti necessari nelle varie fasi d'uso dell'app, dando gli input per il salvataggio, cancellazione e utilizzo dei dati nel database, o per la creazione della lista delle città salvate. Inoltre vengono fornite le alternative in caso di città non presente nei dati Teleport e gestiti gli eventuali errori. 

* Design
* Search Bar
* Menu


#### Server Side

Qui é dove avvengono le richieste all'API di Pixabay ricavandone poi un immagine che verrà salvata nell'apposita cartella, trasformando poi l'immagine e ricavandone una seconda, ed inviate al lato client per comporre l'immagine della città nello sfondo. Viene inoltre creato il database e tramite richieste get/post vengono effettivamente salvati, cancellati o consultati i dati presenti in questo. 


<hr>
<hr>

## Usage

La prima schermata dell'app, molto basilare ed intuitiva, dà la possibilità di
scegliere tra la ricerca di una città o la selezione tra una di
quelle salvate.

<!-- Immagine -->

:mag: - Effettuando una ricerca si potranno ottenere vari risultati: 

<!-- Immagini ottenute da città (cercare una con sfondo accattivante)
prima, seconda e terza schermata -->
* Se la città é presente nei dati Teleport compariranno la descriscrizione, il punteggio in percentuale dato alla città ed i dati sugli aspetti tenuti in considerazione per ottenere tale punteggio, ordinati in due tabelle nella seconda e terza pagina. Sarà inoltre possibile salvare tale città nel menu tramite l'apposito tasto in basso a sinistra &#9733;. 

<!-- Immagine buttons alternatives con Eureka -->
* Se la città non é presente nei dati verrà effettuata una ricerca su tutte le possibili alternative per il Paese di tale città, dalle quali sarà poi possibile scegliere e osservarne i dati

<!-- Immagini vari errors -->
* Se la città non esiste o é avvenuto un errore nell'inserimento del nome o vi fosse un problema di connessione del dispositivo, compariranno dei messaggi di errore adatti

&#9776; - Utilizzando il menu con l'apposito tasto nella parte in basso a 
destra sarà possibile selezionare una delle città salvate in precedenza o 
eliminarle dalla memoria a piacimento.

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


