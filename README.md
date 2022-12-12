# shop-my-influence

this is a technical test for shop my influence

projet: shop my influence test technique
github: https://github.com/hallebanis/shop-my-influence
online url: https://shop-my-influence.onrender.com/
NB: le web service est deployé sur render et l'instance sera désactivée si elleest inactive pour une longue periode , mais lorsqu'elle reçoit une requete elle sera ressucité, donc la premiere requete prendera certain temps avant d'etre executé
api documentation : https://shop-my-influence.onrender.com/api-docs/S

to run the project locally install nodemon then run : npm start or just run node index.js

evry push on master will be deployed automatically

architecture utiliséé: j'ai essayé d'appliquer une clean architecture en divisant la couche business en deux sous couches: service / repository pour augumenter la maintenabilité du projet et limiter au maximum les depnedances; NB on peut ajouter une autre couche: datasources ou datastores pour les interactions avec les diffrentes source de données

endpoints deployés:

/sale/performances : pour fournir les donneés de la premiere section de la page home a savoir chiffre d'affaires, nombre de ventes ... une amelioration sera d'utiliser une systeme de cache pour ces données pour augumenter la rapididté de chargement de la section et le cache sera mis à jour chaque 24 heures ou moin

/sale/insights : pour fournir les données de la seuxieme section : Insights. on peut aussi utliser un cache pour ces données.

/periodSales : statistques de vente selon la periode de la journée

/categorySales : statistques de vente par category avec pagination. par defaut les donneés sont triés et on fournies une premiere page de cinq elements

/deviceSales : statistques de vente par device avec pagination. par defaut les donneés sont triés et on fournies une premiere page de cinq elements
