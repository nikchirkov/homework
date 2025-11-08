const user = {
    nikita: {
        age: 22,
        gender: 'Мужской',
        isAdmin: true,
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(user.nikita)
user.nikita.sayHello('Никита')

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
    {
        name: 'dave',
        age: 30,
        isAdmin: false
    }
]

users.push({
    name: 'ivan',
    age: 30,
    isAdmin: false
})
let userscount = null
for (const user of users) {
    if (!user.isAdmin) {
        userscount++
    }
}
console.log(userscount)