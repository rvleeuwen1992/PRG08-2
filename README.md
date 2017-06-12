# Mario Car Driving

Oude repository op https://github.com/0845855/PRG08. Door allerlei errors en code wijzigingen bij het commiten heb ik deze nieuwe repository maar gemaakt.

## Besturing

- SPATIE = Springen
- Pijltjestoets links = Langzamer rijden (snelheid wordt minimaal -1)
- Pijltjestoets rechts = Sneller rijden (snelheid wordt maximaal 1)
- Refresh de pagina om opnieuw te beginnen.

## Het doel

Het doel is om zoveel mogelijk punten te verzamelen zonder dat je auto laat crashen op de rotsen die op de weg staan. Wanneer je de muntjes raakt krijg je per keer 5 extra punten.

## Installatie

- Fork mijn project
- Open de map PRG08 in Visual Studio Code om de code te zien.
- Open /docs/index.html in een webbrowser.
- Veel plezier met spelen!

## Code

- In game.ts worden de objecten gemaakt en de loops gemaakt. Ook wordt hier gekeken of er een collision is tussen de auto en de objecten. Ook wordt hier de score op het eind weergegeven.
- In car.ts vind je alle dingen die de auto doet. Bij het sneller of langzamer gaan van de auto en bij het springen wordt de Strategy Pattern gebruikt (behavior.ts, driving.ts, jumping.ts en crashing.ts). Deze werkt op het moment nog niet helemaal perfect.
- In Block.ts en longBlock.ts vind je de code voor de blokken die op je weg staan. Deze krijgen zo snel mogelijk een overerving, omdat nu dubbele code wordt gebruikt.
- In Coin.ts vind je de code voor de muntjes.
- Singleton wordt gebruikt in game.ts en car.ts.

## Toepassingen
- Interface en Strategy Pattern bevatten het gedrag van de auto (behavior.ts, driving.ts, jumping.ts, crashing.ts).
- Library: Ik gebruik Greensock (definitions/greensock.d.ts en player/car.ts) voor de animatie tijdens een crash.
- Encapsulation wordt gebruikt in onder andere game.ts en car.ts. Dit zijn de private variabelen.
- Compostion kan je vinden in game.ts en player/car.ts. In game.ts worden objecten aangemaakt en 'this' meegegeven. In player/car.ts vind je 'g: Game' in de constructor.
- Inheritance wordt gebruikt in miscItems voor block, LongBlock en Coin (overerving).
- Singleton is gebruikt in game.ts, zodat je in player/car.ts geen this.game.functieNaam() hoeft te gebruiken, maar Game.GetInstance.functieNaam().
- Observer wordt gebruikt in car.ts en cloud.ts. Wanneer je sprint krijgt de cloud tijdelijk een andere snelheid.
- Strategy Pattern wordt gebruikt in behavior.ts, driving.ts, jumping.ts en crashing.ts. Dit is het gedrag van de auto.
- behavior.ts is de interface voor het Strategy Pattern. De Interface bevat geen code.
- In game.ts vind je een static method GetInstance.
- Abstracte class vind je in miscItems. De childs gebruiken de draw van miscItems.
- Namespace wordt gebruikt in game.ts, block.ts en longBlock.ts.
- KeyBoardEvents horen bij Polymorphism (KeyboardEvent is een Event (voor Event hoef ik geen code te schrijven, deze bestaat al)).
- Enumerations wordt gebruikt in car.ts voor de toetsen. Code staat in enum/keys.ts.
- In game.ts vind je de gameLoop.

## Spelen!

Spelen kan via https://0845855.github.io/PRG08-2/

## UML

![UML image](https://github.com/0845855/PRG08-2/blob/master/UML.png)