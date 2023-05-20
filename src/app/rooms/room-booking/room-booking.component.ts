import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.css']
})
export class RoomBookingComponent {

  id$ = this.router.paramMap.pipe(
    map((params) => params.get('id'))
  );
  constructor(private router: ActivatedRoute) {
    // this.id = this.router.snapshot.params['id'];
    // this.router.paramMap.subscribe((params) => {
    //   params.get('id')
    // });
  }
}
