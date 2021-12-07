
const userOne = {
    name : "Jane",
    lastName : "Swallow",
    age : 34,

    user() {
        console.log(`Привет! Я ${this.name} ${this.lastName}`);
    }
}

const userTwo = {
    name : "Dan",
    lastName : "Smith",
    age : 34,

}

userTwo.user = userOne.user.bind(userTwo)
userOne.user()
userTwo.user();
