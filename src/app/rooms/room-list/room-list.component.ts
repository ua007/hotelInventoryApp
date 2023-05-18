import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, OnDestroy} from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit, OnChanges, OnDestroy{
  @Input() rooms: RoomList[] | null = [];

  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  emitSelectedRoom(room: RoomList){
    this.selectedRoom.emit(room);
  }

  ngOnDestroy(): void {
    console.log('room list component is destroyed');
  }
}
