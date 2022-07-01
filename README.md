<hr>
<hr>

<div align="center">
<img src="https://i.ibb.co/mytvjZL/Title-Readme.png" alt="Title-Readme" width="80%" height="80%">
<h1><i>Lifestyle web app</i></h1>
</div>

### Questo é un progetto per certificare le competenze acquisite con la **Super Guida JavaScript Advanced** di **Start2Impact**, categoria lifestyle.

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

<div id="begin"></div>

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
          <li><a href="#missing">Missing</a></li>
          <li><a href="#error-handling">Error handling</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li><a href="#resources">Resources</a>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#next-steps">Next Steps</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contacts">Contacts</a></li>
  </ol>
</details>

<hr>
<hr>

## About The Project

### Built With

Client:

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML?retiredLocale=it)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS?retiredLocale=it)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript?retiredLocale=it)
  - [Teleport API](https://developers.teleport.org/)
  - [Axios](https://axios-http.com/)
- [Font Awesome Icons](https://fontawesome.com/)

Server:

- [Node.js](https://nodejs.dev/)
  - [Express.js](https://expressjs.com)
  - [Pixabay API](https://pixabay.com/api/docs/)
  - [Canny-Edge-Detector & Image-js](https://github.com/image-js/canny-edge-detector)
- [NeDB](https://github.com/louischatriot/nedb)

Bundler:

- [Webpack](https://webpack.js.org/)
  - [Webpack Packages](https://github.com/Icarus1989/how-is-there--lifestyle-web-app/blob/main/package.json)

<br>
<br>

<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## Description

### Intro

Questa é una web app creata per visualizzare i dati sulla qualità della vita nelle città forniti da [Teleport](https://developers.teleport.org/api/reference/#/).
Questo é il primo progetto in cui combino insieme così tanti elementi: gestione dei dati ottenuti da più servizi esterni, animazioni, gestione degli errori, un menù con i dati salvati e riutilizzabili, la persistenza di tali dati attraverso un database, la creazione di cartelle e file e la loro modifica, l'utilizzo di un bundler sia per il lato client che server ed il deploy dell'app su un Web Host gratuito.
<br>

### Data

Le richieste dei dati verranno effettuate tramite **Axios**. I dati sulle città ottenuti da Teleport verrano presentati in 3 diverse pagine al momento della ricerca: nella prima vi saranno il titolo, con nome della città ricercata, Paese e continente, la descrizione ed il punteggio dato da Teleport in percentuale, ottenuto dalla media tra tutti i valori di ogni singola categoria, che verranno visualizzati nel dettaglio nella seconda e terza pagina inseriti ordinatamente in due tabelle.
<br>
L'app inoltre, in caso di riscontro negativo sulla presenza della città, effettuerà una nuova ricerca tra tutte le città disponibili nell'API Teleport selezionando quelle dello stesso Paese della città ricercata inizialmente e fornendole come alternative.

### Design

Il design delle tre pagine in cui verranno visualizzati i dati della città é volutamente scelto per trasmettere un senso di continuità: elementi come le text boxes allungate verso la seconda pagina o le tabelle leggermente spostate contenute in un unico riquadro sono dettagli pensati per spingere l'utente a scorrere tra le pagine e rendere l'esperienza più fluida e piacevole alla vista.
<br>

<div align="center">
  <img src="https://i.ibb.co/8DLs7HV/image-Complete.png" alt="image-For-Presentation" width="60%" height="60%">
</div>
<br>
L'app nel suo complesso é stata sviluppata con un approccio mobile-first rendendo comunque i vari elements responsive per le varie tipologie di display: mobile, tablet e desktop.
Per ottimizzare la visualizzazione dell'app soprattutto sui dispositivi portatili, dove si può passare da un orientamento portrait ad uno landscape velocemente e la barra di ricerca può apparire ed essere nascosta, ho aggiunto il ricaricamento della pagina al verificarsi di un event resize. Questo favorirà anche la scomparsa di alcuni buttons in favore di altri per migliorare l'usabilità della web app in entrambe le modalità di visualizzazione.

### Node

Le varie parti dell'app si basano sia sul client che sul server side.
Qui ho utilizzato **Node.js** per l'effettivo funzionamento del server e per gestire le varie richieste effettuate dall'utente: il salvataggio di dati, la ricerca tra questi con il controllo sulla loro presenza, la richiesta di immagini da Pixabay, la loro modifica e altro. Per quanto sia basilare come codice, ritengo comunque soddisfacente il fatto che tutto funzioni nel modo corretto.

### Background

Lo sfondo sarà composto da due immagini, la prima sarà una foto ottenuta da **Pixabay**, sempre attraverso Axios ma utilizzato nel server node, alla quale verrà data un'opacità bassissima per ricavarne solamente i colori sfumati, la seconda verrà elaborata dalla prima attraverso **canny-edge-detector** ed **image-js**, due pacchetti NPM che combinati ricaveranno un'immagine con i bordi delle figure presenti nella foto, per poi salvarla rendendola utilizzabile. Quest'immagine unita al filter CSS invert e poi sovrapposta alla prima immagine, creerà uno sfondo con uno stile simile ad un disegno.
Nel caso non fosse presente un'immagine per una determinata città ricercata nell'API di Pixabay, verrà utilizzata quella disponibile nell'API di Teleport con la stessa procedura.
Un effetto che ho voluto inserire nella modalità mobile e tablet farà scorrere l'immagine quando si scrollerà a destra o sinistra rivelando una nuova parte dello sfondo.
La scelta di usare Pixabay é stata presa grazie all'alta qualità artistica e visiva delle foto rispetto ad alcune altre API provate.
<br>

<div align="center">
  <img src="https://i.ibb.co/Ch9n9bk/double-Image.png" alt="double-Image" width="60%" height="60%">
</div>
<br>

### Database

L'app utilizza un database molto basilare, NeDB, mia prima esperienza in questo campo, per la persistenza dei dati. Tramite questo sarà possibile cominciare ad utilizzare l'app con una lista di città predefinite da visualizzare senza la necessità di richieste all'API di Teleport ed inoltre sarà possibile salvarvi le proprie città preferite durante le ricerche o eliminarle a piacere. Ho optato per questo approccio rispetto ad altri, come ad esempio LocalStorage, per poter sopperire ad eventuali problemi futuri dei server Teleport ed avere una base di dati facilmente estendibile, in modo da mantenere utilizzabile l'app con le città salvate nel caso di quest'eventualità.

### Webpack

Come bundler per quest'app ho utilizzato **Webpack 5**.
Sperimentato per la prima volta per questo progetto, Webpack si é dimostrato molto utile per aumentare le prestazioni e la stabilità dell'app. Per quanto a primo impatto mi sembrasse superfluo il suo l'utilizzo, ho dovuto ricredermi: dal rilevare parti di codice non utilizzato, alla possibilità di minificarlo in modo molto semplice, fino ad una maggiore percentuale di riuscita delle request, soprattutto delle immagini, la creazione automatica delle favicon necessarie per ogni sistema operativo e molto altro, si é dimostrato uno strumento utilissimo per migliorare e completare l'app nel suo intero.

### Missing

Questo progetto chiaramente avrà alcune piccole lacune dovute alla mia poca esperienza soprattutto con Node.js e Webpack, che andranno comunque nel breve tempo colmate in modo da aggiornarlo al più presto. Per porre un esempio, una piccola parte da segnalare é non aver trovato una soluzione per inserire nel bundle il file citiesDatabase.db, problema che non interferisce con il corretto funzionamento della web app, ma resta comunque da sistemare per completezza.

### Error handling

Anche se molto sporadici, possono avvenire degli errori nella modifica e nel salvataggio delle immagini. Proprio per questo ho inserito una serie di error handling per coprire la maggioranza delle situazioni, compresi errori critici che porteranno ad un ricaricamento piuttosto che ad un crash della web app.

<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## Resources

Risorse utilizzate:

- [Start2Impact Courses](https://www.start2impact.it)
- [Teleport API Documentation and Explorer](https://developers.teleport.org/api/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [Coding Train "Working with Data and API" Playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Node Academy Tutorial](https://www.nodeacademy.it/tutorial/node-js/)
- [Pixabay API Documentation](https://pixabay.com/api/docs/)
- [canny-edge-detector README](https://github.com/image-js/canny-edge-detector#readme)
- [image-js README](https://github.com/image-js/image-js)
- [NeDB README](https://github.com/louischatriot/nedb)
- [Coding Train "NeDB Tutorial"](https://www.youtube.com/watch?v=xVYa20DCUv0)
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Ben Grunfeld Node "Express - Webpack Tutorial"](https://binyamin.medium.com/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)
- [Gianluca Scocozza "Webpack 5" Playlist](https://www.youtube.com/playlist?list=PLdtVpbcGjJ9qhsYvlIBArBX-DRyc2enbx)

<br>
<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## Usage

La prima schermata dell'app, molto basilare ed intuitiva, dà la possibilità di
scegliere tra:<br>

- :mag: la ricerca di una città<br>
- &#9776; l'utilizzo del menù, per selezionare una delle città salvate in precedenza o per
  eliminarle dalla memoria a piacimento.

<br>
<div align="center">
  <img src="https://i.ibb.co/72RQg7T/readme-Usagei-Phone7.png" alt="readme-Usage-iPhone7" width="60%" height="60%">
</div>
<br>

:mag: Effettuando una ricerca si potranno ottenere vari risultati:

- Se la città é presente nei dati Teleport, compariranno nella prima pagina il titolo, la descrizione, il punteggio in percentuale dato alla città ed i dati sugli aspetti tenuti in considerazione per ottenere tale punteggio, ordinati in due tabelle nella seconda e terza pagina.
  Sarà inoltre possibile salvare tale città tramite l'apposito tasto in basso a sinistra &#9733;. Se si ricercherà il nome di uno Stato invece che di una città, verrà effettuata la ricerca della capitale di tale Stato.
  I nomi possono essere inseriti nelle varie lingue europee, non obbligatoriamente in inglese.

<br>
<div align="center">
  <img src="https://i.ibb.co/T402QVJ/Usage-Video.gif" alt="Usage-Video" width="60%" height="60%">
</div>
<br>

- Se effettuando una ricerca i dati della città non fossero presenti, verrà effettuata una nuova ricerca su tutte le possibili alternative per il Paese di tale città, tra le quali sarà poi possibile scegliere ed osservarne i dati.

<br>
<div align="center">
  <img src="https://i.ibb.co/qDmFFzj/iphone7alternatives-1.png" alt="iphone7alternatives-1" width="60%" height="60%">
</div>
<br>

- Se la città non esistesse o fosse avvenuto un errore nell'inserimento del nome o vi fosse un problema di connessione del dispositivo o altro, compariranno dei messaggi di errore adatti.
<br>
<div align="center">
  <img src="https://i.ibb.co/gvPv6mM/iphone7-errors.png" alt="iphone7-errors" width="60%" height="60%">
</div>
<br>

<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## Demo

L’applicazione é stata pubblicata tramite il servizio di web hosting [Heroku](https://www.heroku.com) con il supplemento del servizio Kaffeine, in modo che l'app possa entrare in mode sleep solo dalle 23:00 alle 5:00 GMT.<br>
E’ possibile utilizzarla al link:
<br>
<br>
:link: [How is There - Lifestyle App](https://how-is-there--lifestyle-app.herokuapp.com/)

<br>
<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## Next Steps

Queste sono le correzioni da effettuare consigliate dal coach di Start2Impact dopo la correzione:

- [ ] aggiungere Lodash per gestire la possibilità che venga restituito undefined dalla request
- [ ] concentrare l'attenzione sull'avere una value di default per le request, legato al primo punto

Questi sono i miglioramenti che verranno effettuati dopo la correzione per modernizzare e migliorare l'app:

- [ ] ottimizzare il controllo della presenza dei dati nel database
- [ ] migrazione database da NeDB a MongoDB
- [ ] miglioramento codice server side dopo lo studio della guida Node.js

## License

Distributed under MIT License.

<br>
<p><a href="#begin">&#9650; Back to summary</a></p>

<hr>
<hr>

## Contacts

Alex<br>
[GitHub](http://https://github.com/Icarus1989)<br>
[Instagram](http://https://www.instagram.com/alex._.1989/)<br>
[Facebook](https://www.facebook.com/alex.valente.92)<br>

:link: [GitHub Repo of this project](https://github.com/Icarus1989/how-is-there--lifestyle-web-app)

<br>
<p><a href="#begin">&#9650; Back to summary</a></p>
