import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-childs-packs',
  templateUrl: './childs-packs.component.html',
  styleUrls: ['./childs-packs.component.css']
})
export class ChildsPacksComponent {

  constructor(private dataService: DataService) {}


}
