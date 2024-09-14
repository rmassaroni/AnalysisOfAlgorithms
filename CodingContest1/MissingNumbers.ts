'use strict';
/*
 * Complete the 'missingNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER_ARRAY brr
 */

function missingNumbers(arr: number[], brr: number[]): number[] {
    // Write your code here
    
    arr.sort((a, b) => a - b);
    brr.sort((a, b) => a - b);
    
    let p1: number = 0, p2: number = 0;
    let missings: number[] = [];
    
    while(p1 < arr.length) {
        if(arr[p1] == brr[p2]) {
            p1++;
            p2++;
        } else if(arr[p1] > brr[p2]) {
            if(missings[missings.length - 1] != brr[p2])
                missings.push(brr[p2]);
            p2++;
        } else if(arr[p1] < brr[p2])
            p1++;
    }
    
    //add remaining elements of brr
    if(p2 < brr.length)
        for(let i: number = p2 + 1; i < brr.length; i++)
            if(missings[missings.length - 1] != brr[p2])
                missings.push(brr[i]);
    
    return missings;
    
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const m: number = parseInt(readLine().trim(), 10);

    const brr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

    const result: number[] = missingNumbers(arr, brr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}