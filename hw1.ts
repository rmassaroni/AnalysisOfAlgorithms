'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}



function main() {
    const t: number = parseInt(readLine().trim(), 10);

    for (let tItr: number = 0; tItr < t; tItr++) {
        const n: number = parseInt(readLine().trim(), 10);
        const floor: number = Math.floor(Math.sqrt(n));
        let sum: number = 0;
        let a: number[] = Array.from({ length: n + 1 }, (_, i) => i);
        a[0] = 0;
        a[1] = 0;
        for(let i: number = 2; i <= n; i++) {
            if(i <= floor) {
                let multiplier: number = 2;
                while(i * multiplier <= n) {
                    a[i * multiplier] = 0;
                    multiplier++;
                }
            }
            sum += a[i];
        }
        
        console.log(sum);
    }
}

