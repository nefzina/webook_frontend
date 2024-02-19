import { Component } from '@angular/core';
import {ProfileService} from "../domain/services/profile.service";
import {response} from "express";
import {IUser} from "../domain/interface/IUser";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user!: IUser;
  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {

    this.profileService.getUserById().subscribe((response) => this.user = response )

  }
}
