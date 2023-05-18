export interface Room {
    total_rooms: number;
    available_rooms: number;
    booked_rooms: number;
}

export interface RoomList {
    roomNumber: string;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkoutTime: Date;
}