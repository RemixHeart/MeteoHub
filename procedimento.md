# Descrizione del procedimento per realizzare il programma MeteoHub.

Dopo averci introdotto la libreria di JavaScripts REACT , il professore ci ha assegnato in diversi gruppi per la realizzazione di una
applicazione in React mediante l' uso di chiamate a siti esterni attraverso delle API. In una prima lezione ci siamo consultati su quale
applicazione potesse riscuotere interesse e fosse carina da realizzare visionando anche se fosse possibile trovare ed 
usare le varie API gratuitamente.
Dopo questa fase abbiamo scelto di realizzare un' applicazione che fornisse i dati relativi al meteo ed alla mappa di una determinata 
città , fornendo i dati attraverso la compilazione di un Form. 
Per realizzare quest' applicazione nel minor tempo possibile ci siamo divisi i ruoli in modo tale che ognuno avesse qualcosa da fare.
Abbiamo dunque usato la API di [OpenWeatherMap](https://openweathermap.org/)
L'applicazione consiste in un Form in cui vengono inseriti i nomi della città e della relativa nazione. Sotto questo form vi sono due
bottoni . Il primo consente di recuperare attraverso chiamate i vari dati relativi alle condizioni meteo in tempo reale. Il secondo
invece permette di visualizzare la mappa della città in base alle sue coordinate e tramite un checkbox laterale permette di visualizzare 
diversi livelli della mapppa : dalla cartina politica a quela con i dati relativi alle varie temperature , umidità , ... .
Per testare che l' obiettivo primario dell' applicazione , ovvero quello di fornire dati corretti e precisi  fosse stato adempito , 
ci è bastato visualizzare i dati visitando un sito di previsioni meteo

Ringraziamenti a [buche](https://github.com/buche) per la sua [leaflet map repository](https://github.com/buche/leaflet-openweathermap) 
