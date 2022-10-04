console.log("Person 1: shows ticket");

console.log("Person 2: shows ticket");


const wifeBringsTicket = new Promise((resolve, reject) =>{

  setTimeout(() => {

    resolve('ticket')

  }, 3000);

})



const getPopcorn = wifeBringsTicket.then((t) =>{

  console.log("Wife: I have the ticket.")

  console.log("Husband: We should go in.")

  console.log("Wife: I am hungry.")

  return new Promise((resolve, reject) => resolve(`${t} popcorn`))

})


const getButter = getPopcorn.then((t) =>{

  console.log("Husband: I got popcorn")

  console.log("Husband: We should go in.")

  console.log("Wife: I need butter on my popcorn.")

  return new Promise((resolve, reject) => resolve(`${t} butter`))

})


const getCooldrink = getButter.then((t) =>{

  console.log("Husband: I got Butter")

  console.log("Husband: We should go in.")

  console.log("Wife: I need cooldrinks.")

  return new Promise((resolve, reject) => resolve(`${t} cooldrinks`))

})


getCooldrink.then((t) => console.log(t));

console.log("Person 4: shows ticket");

console.log("Person 5: shows ticket");