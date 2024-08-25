import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, isFormControl, NgModel, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'new-app';
  username = 'youngtech';
  favoriteFramework = '';

  showframework() {
    console.log(this.favoriteFramework)
  }
}

