# Plantilla de projecte amb tests amb Selenium i Javascript


## Desenvolupament

Posa els arxius del teu projecte a la carepta ```src```:

Per posar en marxa el projecte:

    $ cd src
    $ php -S 0.0.0.0:8000


## Tests
Requisits:
  * NodeJS >= 20.10
  * Firefox-ESR (no serveix la versió *snap* que sol venir en Ubuntu)

Canviar a Firefox-ESR en Ubuntu:

    # snap remove firefox
    # apt install software-properties-common -y
    # add-apt-repository ppa:mozillateam/ppa
    # apt install firefox-esr


Per executar els tests:

    $ cd .test
    $ npm install
    $ node 01-page-h1.js

Si els vols executar en mode HEADLESS:

    $ HEADLESS=true node 01-page-h1.js

Si tens Chrome instal·lat i vols executar-hi els tests:

    $ CHROME_TESTS=true node 01-page-h1.js


...i així successivament amb la resta de tests en la carpeta. Cadascun hauria de donar com a resultat "TEST OK".
