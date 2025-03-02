import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RxjsComponent } from '../rxjs/rxjs.component';
import { InnerComponent } from '../inner/inner.component';

@Component({
  selector: 'app-two-path',
  standalone: true,
  imports: [RouterOutlet, RxjsComponent, InnerComponent],
  templateUrl: './two-path.component.html',
  styleUrl: './two-path.component.scss'
})
export class TwoPathComponent {

}
