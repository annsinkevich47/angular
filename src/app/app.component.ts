import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InnerComponent } from './inner/inner.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InnerComponent, RxjsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-rxjs';
}
