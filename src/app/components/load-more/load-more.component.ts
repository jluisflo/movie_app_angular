import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: './load-more.component.html',
  styleUrls: ['./load-more.component.scss']
})
export class LoadMoreComponent implements OnInit {

  @Input('show') show: boolean;
  @Output('loadEmit') loadEmit: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    const show = simpleChanges.show.currentValue;
    if (show) this.show = show;
  }

  load(): void {
    this.loadEmit.emit(true);
  }

}
