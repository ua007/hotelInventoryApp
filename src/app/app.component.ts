import { AfterViewInit, Component, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'hotelinventoryapp';
  @ViewChild('rooms', {read: ViewContainerRef}) viewContainerRef!: ViewContainerRef;

  ngAfterViewInit(): void {
    const componentRef = this.viewContainerRef.createComponent(RoomsComponent);
    componentRef.instance.room_number = 50;
  }
}
