import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name: string;
  nim: string;

  constructor() {
    this.name = 'Bryan Rezki Nugraha';
    this.nim = '00000044803'; 
  }
    ngOnInit(): void {
    }
}
