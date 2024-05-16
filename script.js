/* const name = 'john snow';
const obj = {
    [name]:"hello",
    [1+2]:"hihi"
}

console.log(name,obj);
function greet(name='', age=30, pet='cat'){
    return `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`
}

//Closures
const first = ()=>{
    const greet = 'Hi';
    const second = () => {
        const name = "Gaby";
        alert(`${greet}  ${name}`);
    }
    return second;
}
first()();
const new1 = first();
new1() */

//Currying
/* const multiply = (a,b) => a*b;
const curriedMultiply = (a)=>(b)=> a*b;
const multiplyBy5 = curriedMultiply(5)(5)
console.log(multiplyBy5)

//Compose
const compose = (f,g)=>(a)=>f(g(a))
const sum = (num)=> {
    console.log(num);
    return num + 1
};
console.log(compose(sum,sum)(5)); */

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
/* console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// Exercise 2: why does this throw an error? How can you fix it?
1n + 3n + 4n

// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo')
console.log(null ?? 'hellooo')
console.log(null || 'hellooo')
console.log((false || null) ?? 'hellooo')
console.log(null ?? (false || 'hellooo'))
console.log("" ?? 500) */

/* const ztmMonsters = [
    {id: 1, monster: 'Mr. Mouse', level: 1},
    {id: 2, monster: 'Mac', level: 30},
    {id: 3, monster: 'Denodude', level: 17},
    {id: 4, monster: 'Pye', level: 5},
    ];
    
    // Old Way
    const advancedMonsters = ztmMonsters.filter(item => item.level > 15)
    console.log(advancedMonsters)
    console.log(advancedMonsters[advancedMonsters.length - 1])
    
    
    // Using findLast()
    const lastMonster = ztmMonsters.findLast(item => item.level > 15);
    console.log(lastMonster);
    // Using findLastIndex()
    const lastMonsterIndex = ztmMonsters.findLastIndex(item => item.level > 15);
    console.log(lastMonsterIndex);
    
    
    const ztmMonstersList = ['Mr. Mouse', 'Mac', 'Denodude', 'Pye'];
    
    //Using reverse()
    const reverseMonsters = ztmMonstersList.reverse();
    console.log(ztmMonstersList) 
    console.log(reverseMonsters) 
    
    //using toReversed()
    const reversedMonstersTo = ztmMonstersList.toReversed();
    console.log(ztmMonstersList) 
    console.log(reversedMonstersTo)
    
    //Using toSorted()
    const sortedMonstersTo = ztmMonstersList.toSorted();
    console.log(ztmMonstersList) 
    console.log(sortedMonstersTo)
    
    //Using toSpliced()
    const spliceMonstersTo = ztmMonstersList.toSpliced(2, 1);
    console.log(ztmMonstersList) 
    console.log(spliceMonstersTo)
    
    //Old Way
    ztmMonstersList[1] = 'Gost';
    console.log(ztmMonstersList)
    
    // Using with()
    const withMonsters = ztmMonstersList.with(1, 'Gost');
    console.log(ztmMonstersList) 
    console.log(withMonsters) */