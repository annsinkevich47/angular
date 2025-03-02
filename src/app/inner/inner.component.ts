import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-inner',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './inner.component.html',
  styleUrl: './inner.component.scss'
})
export class InnerComponent {

  count = signal(0);
  doubleCount = computed(() => this.count() * 2);

  tripleCount = computed(() => this.doubleCount() * 3);
  items = signal<{ title: string }[]>([]);

  constructor(private http: HttpClient) {
    effect(() => {
      console.log(this.count())
    })
  }

  increment() {
    this.count.set(this.count() + 3);
  }
  loadItems() {
    this.http.get<{ title: string }[]>('https://jsonplaceholder.typicode.com/posts').pipe(tap(value => console.log(value))).subscribe(value => this.items.set(value))
  }
}
