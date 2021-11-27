import { Injectable } from '@angular/core';
import {hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service'


@Injectable({
  providedIn: 'root'
})
export class heroService {
  getHeroes():Observable<hero[]>{
    const heroes:any=of(HEROES)
    this.messageService.add('HeroService:fetched heroes')
    return heroes
  }
  constructor(private messageService: MessageService) { 

  }
}
