import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { AsideRoutingModule } from './aside/aside-routing.module';
import { HomeComponent } from './home/home.component';
import { TwoPathComponent } from './two-path/two-path.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsideRoutingModule, TwoPathComponent, AsideComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-rxjs';

  constructor(private router: Router) { }

  loadTwoComponents() {
    this.router.navigate(['/two-path']);
  }

  loadAside() {
    this.router.navigate(['/anotherComponent']);
  }

  toHome() {
    this.router.navigate([''])
  }

}
