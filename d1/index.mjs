import fs from 'fs';

const fsPromises = fs.promises;

try {
    const data = await fsPromises.readFile('./input.txt', 'utf-8');

    const input = data.toString();
    const array = input.split('\n');
    const frequency = {};

    let acc = 0, index = 0;

    while(1) {

        const element = Number(array[index]);

        acc += element;

        frequency[acc] = frequency[acc] ? frequency[acc] + 1 : 1;    

        if (frequency[acc] === 2) {
            console.log(acc);   
            break;
        }

        index = (index + 1) % array.length;
    }

}
catch (err) {
    throw err;
}