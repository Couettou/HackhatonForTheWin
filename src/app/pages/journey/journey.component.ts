import { Component, OnInit } from '@angular/core';
import { DestinationsService } from 'src/app/shared/destinations.service';
import { Destination } from 'src/app/shared/destination';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent implements OnInit {

  berlin: Destination;
  srilanka: Destination;
  laponie: Destination;
  constructor(private destinationService: DestinationsService) { }

  test2={
    theme: "urban",
    destination : "Berlin",
    destinationDescription:"Berlin est la ville des possibles. Ses constrates saisissants constituent sa plus grande richesse culturelle et architecturale : entre historique et contemporain, le chaland se perd en curiosités artistiques au sens tant fluctuel que profond.", //ok
    destinationAnecdote:"Berlin est très connue pour sa musique électronique - elle en est même sa capitale Européenne. Aussi surprenant que cela soit, de prime abord cette identitié musicale très marquée date de l'époque du Mur de Berlin. Durant cette sombre époque, les Berlinois communiquaient de part et d'autre du mur grâce à un language muscial éléctronique codé - ce n'était donc pas pour rien qu'ils 'écoutaient' la musique si fort.", //ok
    destinationPicture1:"https://images.unsplash.com/photo-1587330979470-3595ac045ab0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    destinationPicture2:"https://img-4.linternaute.com/mH7QJCiTaaeL-GJQPU34xWt1zKg=/660x366/smart/0e14e0292b2f4789b70670372829f200/ccmcms-linternaute/11092357.jpg",
    destinationPicture3:"https://voyageursintrepides.com/wp-content/uploads/2018/07/que-faire-soir-berlin-nuit-1.jpg",
    ride1:"En guise de rue, une allée accessible aussi bien à pied qu’à vélo qui longe les hauts bâtiments et accueille des sculptures en bronze. Installées à la demande de la fondation Ernst Freiberger – du nom de son créateur qui loue également ses bureaux au Ministère – elles rappellent aux promeneurs l’existence des “héros sans épée” qui ont, chacun dans leur domaine, combattu en faveur de la liberté ou ont été victimes du régime hitlérien. Pour Ernst Freiberger, il s’agit de montrer qu’il y avait aussi “des héros positifs en Allemagne dans la première moitié du XXe siècle“, des gens qui ont agi de manière exemplaire en des temps très durs, des Allemands qui ont prôné la paix et refusé d’adhérer au nazisme.",
    ride2:"La cathédrale de Berlin, en allemand Berliner Dom, achevée en 1905, est la plus vaste et plus importante église luthérienne de Berlin, également crypte de la dynastie prussienne des Hohenzollern. Ce remarquable monument baroque de la haute renaissance a associé les Hohenzollern au protestantisme allemand pendant des siècles et subi des phases successives de rénovation architecturale depuis le Moyen-âge",
    chillPlace:"Situé au 10e étage de l'hôtel 25hours, le Monkey Bar offre une vue époustouflante sur la ville ainsi que sur le zoo. Sa terrasse offre le cadre idéal pour boire un verre tout en admirant le coucher du soleil. Outre des boissons internationales et un choix de bons vins, le Monkey Bar propose des plats du restaurant NENI de Berlin. Les événements qui s'y tiennent régulièrement font de ce bar un lieu incontournable.",
    chillPlacePicture:"https://media-cdn.tripadvisor.com/media/photo-o/0a/8a/46/19/monkey-bar-berlin.jpg",
    ride1Picture:"https://vivreaberlin.com/wp-content/uploads/2020/04/berlin-moabit_strasen_der_erinnerung_skulptur_wir_sind_das_volk.jpg",
    ride2Picture:"https://vivreaberlin.com/wp-content/uploads/2015/02/cathedrale-berlin-tour-televison.jpg",
    receipe1: [
      {name:"Boules de Berlin"},
      {picture:"https://p1.storage.canalblog.com/16/15/986026/84367843_o.jpg"},
      {preparationTime:"2h05"},
      {receipe1Ingredients:
        [
          {id:1,ingredient:"625 g de farine tamisée"},
          {id:2,ingredient:"30 g de levure de bière"},
          {id:3,ingredient:"1/2 tasse de lait tiède"},
          {id:4,ingredient:"6 oeufs entiers"},
          {id:5,ingredient:"125 g de sucre en poudre"},
          {id:6,ingredient:"1 pincée de sel"},
          {id:7,ingredient:"185 g de beurre fondu"}
        ]
      },
      {receipe1Steps:
        [
          {step:1, instruction:"Pesez 625 g de farine tamisée et réservez-en une tasse."},
          {step:2, instruction:"Délayez 30 g de levure de bière dans un demi-tasse de lait tiède, et laissez pendant 10 mn à la chaleur."},
          {step:3, instruction:"Battre 6 oeufs entiers en mousse, incorporez-y 125 g de sucre fin et, lorsque ce dernier est fondu, une pincée de sel, une partie de la farine, la levure délayée, le reste de la farine et 185 g de beurre fondu."},
          {step:4, instruction:"Malaxez la pâte, foulez-la et battez-la en ajoutant un peu à la fois la tasse de farine réservée."},
          {step:5, instruction:"Après avoir laissé la pâte recouverte d'une serviette, doubler de volume, roulez-la à 12 mm d'épaisseur et découpez-y des cercles à l'aide d'un verre à vin."},
          {step:6, instruction:"Mettez les boules sur une planche farinée et laissez lever une seconde fois, puis après avoir secoué les boules pour en ôter l'excédent de farine, plongez-les par petites quantités à la fois dans la friture bouillante."},
          {step:7, instruction:"Lorsqu'elles sont bien dorées, égouttez-les et roulez-les immédiatement dans le sucre fin."}
        ]
      }
    ],
    receipe2: [
      {name:"Knödels aux Prunes"},
      {picture:"https://cache.marieclaire.fr/data/photo/w1000_ci/57/quenelles-farcies-aux-mirabelles.jpg"},
      {preparationTime:"1h10"},
      {receipe2Ingredients:
        [
        {id:1,ingredient:"750 g de fromage blanc allégé"},
        {id:2,ingredient:"3 oeufs"},
        {id:3,ingredient:"4 cuillères à soupe de crème fraîche"},
        {id:4,ingredient:"200 g de farine"},
        {id:5,ingredient:"100 g de semoule fine"},
        {id:6,ingredient:"1 kg de prune (fraiches, en conserve/au sirop ou congelées)"},
        {id:7,ingredient:"100 g de sucre en morceaux"},
        {id:8,ingredient:"100 g de biscotte (mixées fines) ou de la chapelure"},
        {id:9,ingredient:"100 g de beurre"},
        {id:10,ingredient:"50 g de sucre"},
        {id:11,ingredient:"cannelle"}
        ]
      },
      {receipe2Steps:[
        {step:1, instruction:"Egouttez le fromage blanc en le pressant dans un torchon, il doit être assez 'compact'."},
        {step:2, instruction:"Ensuite ajoutez-y les oeufs, la crème, la farine et la semoule. Bien mélanger jusqu'à obtenir une pâte lisse."},
        {step:3, instruction:"Lavez les prunes, coupez-les en deux et dénoyautez-les ou égouttez les fruits au sirop ou décongelés."},
        {step:4, instruction:"Etalez la pâte à knödels. Disposez les prunes dessus, en les espacant un peu et sur chaque prune déposez un morceau de sucre (ou un demi morceau selon leur taille et votre goût)."},
        {step:5, instruction:"Découpez la pâte autour de façon à pouvoir rouler les knödels. Plongez-les dans de l'eau en ébullition jusqu'à ce qu'ils remontent en surface."},
        {step:6, instruction:"Mixez les biscottes en chapelure. Roulez les Knödels dans le beurre fondu, encore chaud/tiède, puis dans la chapelure. Saupoudrez de sucre et d'un peu de cannelle."}
      ]}
    ]
  }

  ngOnInit(): void {
    this.destinationService.getBerlin().subscribe(
      (data) => {this.berlin = data; });
    this.destinationService. getSriLanka().subscribe(
      (data) => {this.srilanka = data; });
    this.destinationService. getLaponie().subscribe(
      (data) => {this.laponie = data; });
      }
  }
