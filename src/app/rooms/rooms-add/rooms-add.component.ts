import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsServiceService } from '../service/rooms-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css']
})
export class RoomsAddComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
  };

  sucessMessage: string = '';

  constructor(private roomsService: RoomsServiceService) {}

  ngOnInit(): void {}

  AddRoom(roomsForm: NgForm) {
    this.roomsService.addRoom(this.room).subscribe((data) => {
      this.sucessMessage = 'Room Added Successfully';
      roomsForm.resetForm({
        roomType: '',
        amenities: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
      });
    });
  }
}
