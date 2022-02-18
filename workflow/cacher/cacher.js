const input = document.getElementById("input")
const btn = document.getElementById("calcButton")
const out = document.getElementById("output")


class Cacher{
    constructor(){
        
    }


    withCache(cachedFunction){
        let cache = {}
        return function(...args){
            const key = args.join()
            if(cache[key]){
                console.log(`Cached function... Arg - ${key}`)
                return cache[key];
            }
            else{
                cache[key] = cachedFunction(...args);
                console.log(`Calculations... Arg - ${key}`)
                return cache[key]
            }
        }
        
    }
}


const factorial = (n) =>{
    let factorial = math.factorial(n)
    return factorial;
}





const cacher = new Cacher();
const cachedFactorial = cacher.withCache(factorial)

const calculation = () =>{
    let startTime = Date.now();
    out.innerHTML = cachedFactorial(input.value)
    console.log(Date.now() - startTime)
}
btn.addEventListener("click", calculation)