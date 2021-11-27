import { Component, OnInit } from '@angular/core';
import {hero} from '../hero';
import {heroService} from '../hero.service'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:hero[]=[]
  selectedHero?:hero
  constructor(private heroService:heroService, private messageService:MessageService) {
  
   }
 
  onSelect(hero:hero){
  this.selectedHero=hero
  this.messageService.add(`HeroesComponent: Selected hero id=${hero.id} name=${hero.name}`)
  }
  
  getHeroes():void{
  this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes)
  }
  ngOnInit(): void {
    this.getHeroes()
  }

}
