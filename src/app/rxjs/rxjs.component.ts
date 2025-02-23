import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { combineLatest, distinctUntilChanged, interval, map, mergeMap, Observable, of, skip, Subscription, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {

  constructor(private http: HttpClient) { }
  number$ = of(1, 1, 2, 3).pipe(
    map(value => value >= 2 ? value : value * 3),
    tap(value => console.log(value)),
    skip(3)
  );
  number1$ = of(4, '5', [4, 5]).pipe(
    map(value => isNaN(Number(value)) ? value : Number(value) - 7)
  );
  number2$ = of(7, 1, 4, 9);

  intervalOne$ = interval(100).pipe(take(9));

  mergeFlow$ = interval(1000).pipe(mergeMap(() => this.http.get('https://jsonplaceholder.typicode.com/posts/1')))
  private subscristions = new Subscription();

  numbersObs$ = new Observable((sub) => {
    sub.next(5);
    setTimeout(() => sub.next(1000), 2000);
    sub.next(2);
  })


  showNumber(num: Observable<unknown>) {
    const sub1 = num.pipe(map(value => isNaN(Number(value)) ? value : value + `fsdf`)).subscribe(value => console.log(value));
    // const sub2 = this.numbersObs$.subscribe((value) => console.log(value));
    // const sub3 = this.intervalOne$.subscribe((value) => console.log(value));
    // // const sub4 = this.mergeFlow$.subscribe((value) => console.log(value));
    // const sub5 = combineLatest([this.number2$, this.intervalOne$]).subscribe((value) => console.log(value))

    this.subscristions.add(sub1);
    // this.subscristions.add(sub2);
    // this.subscristions.add(sub3);
    // // this.subscristions.add(sub4);
    // this.subscristions.add(sub5);
    console.log(this.subscristions);
  }

  clearAll() {
    this.subscristions.unsubscribe();
    this.subscristions = new Subscription();
    console.log(this.subscristions)
  }
}
