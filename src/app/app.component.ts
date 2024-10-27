import { AfterContentChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Logger } from './utils/decorators/logger.decorator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnChanges, OnInit, DoCheck, AfterContentChecked{
  
  title = 'angular-starting';

  @Logger
  ngOnChanges(changes: SimpleChanges): void {
  }
  
  @Logger
  ngOnInit(): void {
    this.title = this.title + " " +this.add(2,3);
  }

  @Logger
  ngDoCheck(): void {
  }

  @Logger
  ngAfterContentChecked(): void {
  }

  @Logger
  add( num1: number, num2: number){
    return num1+num2;    
  }
  
}
