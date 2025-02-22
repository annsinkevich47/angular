import { Component } from '@angular/core';
import { map, Observable, of, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.scss'
})
export class RxjsComponent {
  number$ = of(1, 1, 2, 3).pipe(
    map(value => value >= 2 ? value : value * 3)
  );
  number1$ = of(4, '5', [4, 5]).pipe(
    map(value => isNaN(Number(value)) ? value : Number(value) - 7)
  );
  number2$ = of(7, 1, 4, 9);

  private subscristions = new Subscription();

  numbersObs$ = new Observable((sub) => {
    sub.next(5);
    setTimeout(() => sub.next(1000), 2000);
    sub.next(2);
  })


  showNumber(num: Observable<unknown>) {
    const sub1 = num.pipe(map(value => isNaN(Number(value)) ? value : value + `fsdf`)).subscribe(value => console.log(value));
    const sub2 = this.numbersObs$.subscribe((value) => console.log(value));

    this.subscristions.add(sub1);
    this.subscristions.add(sub2);
    console.log(this.subscristions);
  }

  clearAll() {
    this.subscristions.unsubscribe();
    this.subscristions = new Subscription();
    console.log(this.subscristions)
  }
}
