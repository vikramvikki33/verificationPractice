import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Output() fetureSelected =  new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string) {
    this.fetureSelected.emit(feature);
  }

}
