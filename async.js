console.log("Person 1: shows ticket");
console.log("Person 2: shows ticket");

const preMovie = async () =>{
    const wifeBringsTicket = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve('ticket')
        }, 1000);
    })
    
    const getPopcorn = new Promise((resolve,reject) => resolve(`Popcorn`))
    const getButter = new Promise((resolve,reject) => resolve(`Butter`))
    const getDrinks = new Promise((resolve,reject) => resolve(`Cool Drinks`))

    let ticket = await wifeBringsTicket
    console.log(`Wife: I have the ${ticket}.`)
    console.log("Husband: We should go in.")
    console.log("Wife: I am hungry.")

    let popcorn = await getPopcorn
    console.log(`Husband: I got ${popcorn}`)
    console.log("Husband: We should go in.")
    console.log("Wife: I need butter on my popcorn.")
    
    let butter = await getButter
    console.log(`Husband: I got ${butter}`)
    console.log("Husband: We should go in.")
    console.log("Wife: I need cool drinks.")

    let cooldrink = await getDrinks
    console.log(`Husband: I got ${cooldrink}`)
    console.log("Husband: We should go in.")
    console.log("Wife: C'mon let's go..")

    return ticket
}

preMovie().then((m) => console.log(m))

console.log("Person 4: shows ticket");
console.log("Person 5: shows ticket");