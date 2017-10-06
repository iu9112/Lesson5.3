class Calculator {
    constructor () {
        console.log('init Calculator');
    }
    add(input) {
        let result;
        let separator = /[,\n]/;
        let separatorAll = /\/\/(<.+>)\n/;
        let sepratorReg = /<[^>]+>/g;
        if(separatorAll.test(input)) {
            let found = input.match(separatorAll);
            let separators = found[1]
            .match(sepratorReg)
            .map(x => {
                x = x.match(/<(.+)>/)[1];
                x = x.replace(/\*/g, '\\*');
                return x;
            })
            .join('|');
            console.log(separators);
            separator = new RegExp(separators);
            input = input.slice(found[0].length);
        }
        
        if (/(,\n|\n,)/.test(input)) {
            result = -1;
        } else {
            result = input
            .split(separator)
            .filter(x => x <= 1000)
            .map((x)=>{
                return x === "" ? 0 : parseInt(x)
            })
            .reduce((x,s,index,arr)=>{
                if (s < 0) {
                    const negativeValues = arr.filter(value => value < 0);
                    throw new Error(`Отрицательные числа не допустимы: ${negativeValues}`);
                }
                return x + s;
            }, 0);
        }
        return result;
    }
}

module.exports = Calculator;