import { AfterViewInit, Component, OnInit, SimpleChanges, SkipSelf, ViewChild } from '@angular/core';
import { Room, RoomList } from './rooms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RoomsServiceService } from './service/rooms-service.service';
import { Observable, catchError } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, AfterViewInit{

  @ViewChild(HeaderComponent/*, {static: true}*/) headerComponent!: HeaderComponent;

  roomName = 'premium'
  room_number = 10
  hide_rooms = false
  selected_room!: RoomList;
  room = {
    total_rooms: 20,
    available_rooms: 10,
    booked_rooms: 10
  };
  rooms: RoomList[] = [];
  stream = new Observable<string>((observer) => {
    observer.next('user1');
    observer.next('user2');
    observer.next('user3');
    observer.complete();
  });
  totalBytes: number = 0;

  constructor(@SkipSelf() private rooms_service: RoomsServiceService) {}

  ngOnInit(): void {

    this.stream.subscribe({
      next: (value) => console.log(value),
      complete: () => console.log("observer completed"),
      error: () => console.log("errored")
    });

    this.rooms_service.getPhotos().subscribe((event) => {
      switch(event.type) {
        case HttpEventType.Sent: {
          console.log('request has been made');
          break;
        }
        case HttpEventType.ResponseHeader: {
          console.log('Request success');
          break;
        }
        case HttpEventType.DownloadProgress: {
          this.totalBytes += event.loaded;
          break;
        }
        case HttpEventType.Response: {
          console.log(event.body);
        }
      }
    });
    
    this.room = {
      total_rooms: 20,
      available_rooms: 10,
      booked_rooms: 10
    }

    this.rooms_service.getRooms().subscribe(roomsList => {
      this.rooms = roomsList;
    });
  }

  ngAfterViewInit(): void {
    this.headerComponent.title = 'Hotel Inventory App';
  }

  toggle(){
    this.hide_rooms = !this.hide_rooms
  }

  selectedRoom(room: RoomList) {
    this.selected_room = room;
  }  

  addRoom() {
    const roomItem: RoomList = {
      roomNumber: '4',
      roomType: "premium",
      amenities: 'all',
      price: 900,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('13 May 2023'),
      checkoutTime: new Date('14 May 2023')
    };

    this.rooms_service.addRoom(roomItem).subscribe(roomItemList => {
      this.rooms = roomItemList;
    });
  }

  editRoom() {
    const roomItem: RoomList = {
      roomNumber: '3',
      roomType: "premium",
      amenities: 'all',
      price: 900,
      photos: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      checkinTime: new Date('13 May 2023'),
      checkoutTime: new Date('14 May 2023')
    };

    this.rooms_service.editRoom(roomItem).subscribe(roomItemList => {
      this.rooms = roomItemList;
    });
  }

  deleteRoom() {
    this.rooms_service.deleteRoom('3').subscribe(roomInteList => {
      this.rooms = roomInteList;
    })
  }
}
