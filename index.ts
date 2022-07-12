import { fromEvent, switchMap, interval, timer, take, concatMap } from 'rxjs';

function test1() {
  console.log('teat1');
  return timer(0, 1000).pipe(take(3));
}

function test2() {
  console.log('test2');
  return timer(0, 1000).pipe(take(3));
}

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(
  concatMap(() => test1()),
  concatMap(() => test2())
);
result.subscribe((x) => console.log(x));
