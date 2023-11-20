function* generate() {
    console.log('invoked 1st time');
    yield 1;
    console.log('invoked 2nd time');
    yield 2;
}


function* forever() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

let f = forever();
console.log(f.next()); // 0
console.log(f.next()); // 1
console.log(f.next()); // 2


class Sequence {
    constructor( start = 0, end = Infinity, interval = 1 ) {
        this.start = start;
        this.end = end;
        this.interval = interval;
    }
    [Symbol.iterator]() {
        let counter = 0;
        let nextIndex = this.start;
        return  {
            next: () => {
                if ( nextIndex < this.end ) {
                    let result = { value: nextIndex,  done: false }
                    nextIndex += this.interval;
                    counter++;
                    return result;
                }
                return { value: counter, done: true };
            }
        }
    }
}
