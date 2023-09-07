

let total = 0
const sum = (n)=>{

   
    for(let i = 0;i<=n;i++){
        total = total + i
    }

    return total
}


const memo = (fun)=>{

    let cache = {}
    
    return function(...args){

        let n = args[0]

        if(n in cache){
            console.log('cache')
            return cache[n]

        }else{
            console.log('first time')
            let y = sum(n);

            cache[n] = y;

            return y
        }
    }
}

console.time()
let  res = memo(sum)
console.log(res(5))

console.timeEnd()


console.time()
console.log(res(5))
console.timeEnd();