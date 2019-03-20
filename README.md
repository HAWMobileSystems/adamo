# Adamo Modeler

Der Modeler wird im Rahmen des Teilprojekts "Intelligent kooperative Materialflussysteme" (IntSys) entwickelt. Das Teilprojekt stellt dabei einen Teil des EFRE (Europäischen Fonds für regionale Entwicklung) geförderten Projekt "Intelligente Produktionssysteme" dar. 

Ziel ist es durch Zugriff auf digitalisiertes Expertenwissen und einer (Teil-) Automatisierung von Routineaufgaben 
eine Entlastung für Logistikplaner herbeizuführen.
Dazu wurde die BPMN 2.0, zur Darstellung verschiedener Prozessvarianten erweitert. Diese können über Konfigurationsterme aus dem Gesamtmodell erzeugt werden. 


## Installation 


Die einzelnen Bestandteile des Projekts liegen verteilt über verschiedene Repositories.
Durch ausführen der Datei setup.sh werden die zugehörigen Repositories local heruntergeladen.

Zur Initialisierung der einzelnen Submodule muss folgender Befehl ausgeführt werden.
Zum Updaten der Submodule zweiten Befehl nutzen.
```
git submodule update --init --recursive
git pull origin master --recurse-submodules

```