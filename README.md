<hr>
<hr>

<div align="center">
<img src="https://i.ibb.co/mytvjZL/Title-Readme.png" alt="Title-Readme" width="80%" height="80%">
<h1><i>Lifestyle web app</i></h1>
</div>

### Questo é un progetto per certificare le competenze acquisite con la **Super Guida JavaScript Advanced** di **Start2Impact** categoria lifestyle.
<br>

<hr>
<hr>

<p align="center">
<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Icarus1989/how-is-there--lifestyle-web-app?style=flat-square">
<img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/Icarus1989/how-is-there--lifestyle-web-app">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/Icarus1989/how-is-there--lifestyle-web-app">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Icarus1989/how-is-there--lifestyle-web-app">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Icarus1989/how-is-there--lifestyle-web-app">
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
          <li><a href="#intro">Intro</a></li>
          <li><a href="#data">Data</a></li>
          <li><a href="#design">Design</a></li>
          <li><a href="#node">Node.js</a></li>
          <li><a href="#background">Background</a></li>
          <li><a href="#database">Database</a></li>
          <li><a href="#webpack">Webpack</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#resources">Resources</a>
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
  * [Pixabay API](https://pixabay.com/api/docs/)
  * [Canny-Edge-Detector & Image-js](https://github.com/image-js/canny-edge-detector)
  * [Regenarator-Runtime](https://www.npmjs.com/package/regenerator-runtime)
* [NeDB](https://github.com/louischatriot/nedb)

Bundler:
* [Webpack](https://webpack.js.org/)
  * [Webpack Packages](https://github.com/Icarus1989/how-is-there--lifestyle-web-app/blob/main/package.json)
<br>
<hr>
<hr>

## Description

### Intro

Questa é una web app creata per visualizzare i dati sulla qualità delle città forniti da [Teleport](https://developers.teleport.org/api/reference/#/). Questo é il primo progetto in cui combino insieme così tanti elementi: gestione dei dati ottenuti da più servizi esterni, animazioni, gestione degli errori, un menù con la possibilità di salvare i dati e riutilizzarli, la creazione di cartelle e file e la loro modifica, la persistenza dei dati tramite database, l'utilizzo di un bundler sia per il lato client che server ed il deploy dell'app su un Web Host.
<br>

### Data

Le richieste dei dati Teleport verranno effettuate tramite **Axios**. I dati sulle città ottenuti da Teleport verrano presentati in 3 diverse pagine al momento della ricerca: nella prima vi saranno il titolo, con nome della città ricercata, Paese e continente, la descrizione ed il punteggio Teleport in percentuale, ottenuto dalla media tra tutti i valori di ogni singola categoria, che verranno visualizzati nel dettaglio nella seconda e terza pagina inseriti ordinatamente in due tabelle.
<br>
L'app inoltre, in caso di riscontro negativo sulla presenza della città, effettuerà una nuova ricerca tra tutte le città disponibili nell'API Teleport selezionando quelle dello stesso Paese della città ricercata inizialmente e fornendole come alternative, potendo visualizzarne i dati.

### Design

Il design delle tre pagine in cui verranno visualizzati i dati della città é volutamente scelto per trasmettere un senso di continuità: elementi come le text boxes allungate verso la seconda pagina o le tabelle leggermente spostate contenute in un unico container sono dettagli pensati per spingere a scorrere tra le pagine e rendere l'esperienza più fluida e piacevole alla vista.
<br>
<div align="center">
  <img src="https://i.ibb.co/J5FgQfm/iphone7forpres-2.png" alt="screens" width="60%" height="60%">
</div>
<br>
L'app nel suo complesso é stata sviluppata con una metodologia Mobile-first rendendo comunque i vari elements responsive per le varie tipologie di display: mobile, con orientamento portrait e landscape, tablet e desktop. 

<!-- Immagine per Responsive? -->

### Node

Le varie parti dell'app si basano sia sul client che sul server side, dove ho utilizzato **Node.js** per l'effettivo funzionamento del server e per gestire le varie richieste effettuate dall'utente: il salvataggio di dati, la ricerca tra questi con il controllo della loro presenza o meno, la richiesta di immagini da Pixabay, la modifica di immagini e altro. Per quanto sia basilare come codice, ritengo comunque soddisfacente il fatto che tutto funzioni nel modo corretto. 


### Background

Lo sfondo sarà composto da due immagini, la prima sarà una foto ottenuta da **Pixabay**, sempre tramite Axios ma utilizzato nel server node, con opacità bassissima per ricavarne solo i colori sfumati, la seconda verrà elaborata dalla prima attraverso **canny-edge-detector** ed **image-js**, due pacchetti NPM che combinati ricaveranno un'immagine con i bordi delle figure presenti nella foto, per poi salvarla rendendola utilizzabile. Quest'immagine unita al filter CSS invert e poi sovrapposta alla prima immagine, creerà uno sfondo con uno stile simile ad un disegno.
Un effetto che ho voluto inserire nella modalità mobile e tablet farà scorrere l'immagine quando si scrollerà a destra o sinistra rivelando una nuova parte dello sfondo. 
<br>
<div align="center">
  <img src="https://i.ibb.co/Ch9n9bk/double-Image.png" alt="double-Image" width="60%" height="60%">
</div>
<br>


### Database

L'app utilizza un database molto basilare, NeDB, mia prima esperienza dal campo database, per ottenere la persistenza dei dati. Tramite questo sarà possibile cominciare ad utilizzare l'app con una lista di città predefinite da visualizzare senza la necessità di richieste all'API di Teleport ed inoltre sarà possibile salvarvi le proprie città preferite o eliminarle a piacere. Ho preferito servirmi di questo approccio rispetto ad altri, come ad esempio LocalStorage, per poter sopperire ad eventuali problemi futuri dei server Teleport ed avere una base di dati facilmente estendibile, senza troppo codice JavaScript, per mantenere utilizzabile l'app con le città salvate nel caso di quest'eventualità già accaduta.


### Webpack

Come bundler per quest'app é stato utilizzato **Webpack 5**. Utilizzato per la prima volta per questo progetto, Webpack si é dimostrato molto utile per aumentare le prestazioni e la stabilità dell'app. Per quanto a primo impatto mi sembrasse superfluo il suo l'utilizzo, ho dovuto ricredermi: dal rilevare parti di codice non utilizzato, alla possibilità di minificare il codice in modo molto semplice, fino ad una maggiore percentuale di riuscita delle request, soprattutto delle immagini, la creazione automatica delle icone necessarie per ogni sistema operativo e molto altro, si é dimostrato uno strumento utilissimo per migliorare e completare l'app nel suo intero.

<hr>
<hr>

## Resources

Risorse utilizzate:
* [Teleport API Documentation and Explorer](https://developers.teleport.org/api/)
* [Axios Documentation](https://axios-http.com/docs/intro)
* [Coding Train Working with Data and API Playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
* [Node.js Documentation](https://nodejs.org/en/docs/)
* [Node Academy Tutorial](https://www.nodeacademy.it/tutorial/node-js/)
* [Pixabay API Documentation](https://pixabay.com/api/docs/)
* [canny-edge-detector README](https://github.com/image-js/canny-edge-detector#readme)
* [image-js README](https://github.com/image-js/image-js)
* [NeDB README](https://github.com/louischatriot/nedb)
* [Coding Train NeDB Tutorial](https://www.youtube.com/watch?v=xVYa20DCUv0)
* [Webpack Documentation](https://webpack.js.org/concepts/)
* [Ben Grunfeld Node - Express - Webpack Tutorial](https://binyamin.medium.com/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)
* [Gianluca Scocozza Webpack 5 Tutorial](https://www.youtube.com/playlist?list=PLdtVpbcGjJ9qhsYvlIBArBX-DRyc2enbx)

<hr>
<hr>

## Usage

La prima schermata dell'app, molto basilare ed intuitiva, dà la possibilità di
scegliere tra:<br>
* :mag: la ricerca di una città<br>
* &#9776; l'utilizzo del menù per selezionare una delle città salvate in precedenza o per 
eliminarle dalla memoria a piacimento.

<br>
<div align="center">
  <img src="https://i.ibb.co/72RQg7T/readme-Usagei-Phone7.png" alt="readme-Usage-iPhone7" width="60%" height="60%">
</div>
<br>

:mag: Effettuando una ricerca si potranno ottenere vari risultati: 

* Se la città é presente nei dati Teleport, compariranno la descriscrizione, il punteggio in percentuale dato alla città ed i dati sugli aspetti tenuti in considerazione per ottenere tale punteggio, ordinati in due tabelle nella seconda e terza pagina. Sarà inoltre possibile salvare tale città tramite l'apposito tasto in basso a sinistra &#9733;.

<br>
<div align="center">
  <img src="https://i.ibb.co/T402QVJ/Usage-Video.gif" alt="Usage-Video" width="60%" height="60%">
</div>
<br>

* Se effettuando una ricerca i dati della città non fossero presenti, verrà effettuata una nuova ricerca su tutte le possibili alternative per il Paese di tale città, tra le quali sarà poi possibile sceglierne ed osservarne i dati.

<br>
<div align="center">
  <img src="https://i.ibb.co/qDmFFzj/iphone7alternatives-1.png" alt="iphone7alternatives-1" width="60%" height="60%">
</div>
<br>

* Se la città non esistesse o fosse avvenuto un errore nell'inserimento del nome o vi fosse un problema di connessione del dispositivo, compariranno dei messaggi di errore adatti
<br>
<div align="center">
  <img src="https://i.ibb.co/gvPv6mM/iphone7-errors.png" alt="iphone7-errors" width="60%" height="60%">
</div>
<br>

<hr>
<hr>

## Demo

L’applicazione é stata pubblicata tramite il servizio di web hosting [Heroku](https://www.heroku.com). 
E’ possibile utilizzarla al link:
<br>
:link: [How is There - Lifestyle App](https://how-is-there--lifestyle-app.herokuapp.com/)
 

<hr>
<hr>

## License

Distributed under the MIT License.

<hr>
<hr>

## Contacts

Alex<br>
[GitHub](http://https://github.com/Icarus1989)<br>
[Instagram](http://https://www.instagram.com/alex._.1989/)<br>
[Facebook](https://www.facebook.com/alex.valente.92)<br>

:link: [GitHub Repo of this project](https://github.com/Icarus1989/how-is-there--lifestyle-web-app)