//Write a “person” class to hold all the details.
class Person{
    constructor(name, age, country){
        this.setNameageCountry(name, age, country)
    }

    getNameAgeCountry(){
        return this.name, this.age, this.country
    }
    setNameageCountry(name, age, country){
        this.name = name
        this.age = age 
        this.country = country
    }

    displayDetails(){
        return (`Name ${this.name} age ${this.age} and country ${this.country}`)
    }
}

let personOneDetails = new  Person("Dasvin",24,"India")
let personTwoDetails = new  Person("10win",24,"America")
console.log("Person Details:")
console.log(personOneDetails.displayDetails())
console.log(personTwoDetails.displayDetails())

//Uber 
class Uber{
    static baseFare = 10
    static costPerMin = 2
    static costPerKM = 15
    static bookFee = 4
    constructor(name,time,km){
        this.setNameTimeKm(name,time,km)
    }

    getNameTimeKm(){
        return this.name, this.time,  this.km
    }
    setNameTimeKm(name,time,km){
        this.name = name
        this.time = time
        this.km = km
    }

    displayUberFare(){
        let total = Uber.baseFare+(Uber.costPerMin*this.time)+(Uber.costPerKM*this.km)+Uber.bookFee
        return (`Hi ${this.name}!, your Uber fare is Rs ${total}`)
    }
}

let personOne = new Uber("Dasvin",15,7)
let personTwo = new Uber("Arun",20,12)
console.log("Uber Fare:")
console.log(personOne.displayUberFare())
console.log(personTwo.displayUberFare())

//Movie Class
class Movie{
    constructor(movieName, studio, rating = 'PG'){
        this.movieName = movieName
        this.studio = studio
        this.rating = rating
    }
    static getPG(Movie){
        let returnMovie=[]
        for(let i=0; i<Movie.length; i++){
            if(Movie[i].rating === 'PG'){
                returnMovie.push(Movie[i].movieName)
            }
        }
        return returnMovie
    }

    displayMovieDetails(){
        return (`Movie name: ${this.movieName}, Studio: ${this.studio}, Rating: ${this.rating}`)
    }
}
let Movie1 = new Movie('Ghilli','Astudio', 'R')
let Movie2 = new Movie('Ben10', 'Tom Studio')
let Movie3 = new Movie('Avengers','Marvel')
let Movie4 = new Movie('GOAT','Venkat studio', 'U/A')
//call getPG method to return list of movie has PG rating
console.log("Movie Names that has PG rating:")
let arr = [Movie1, Movie2, Movie3, Movie4]
console.log(Movie.getPG(arr))
//creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
console.log("Print Movie details of Casino:")
let CasMovie = new Movie('Casino Royale','Eon Productions','PG­13')
console.log(CasMovie.displayMovieDetails())


//Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius = 1.0,color = 'red'){
        this.setRadius(radius)
        this.setColor(color)
    }
    getRadius(){
        return this.radius
    }
    setRadius(radius){
        this.radius = radius
    }
    getColor(){
        return this.color
    }
    setColor(color){
        this.color = color
    }
    toString(){
        return `Circle[radius=${this.radius}, color=${this.color}]`
    }
    getArea(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    getCircumference(){
        return 2 * Math.PI * this.radius 
    }
}
let cir = new Circle(2.5, 'Skyblue')
console.log("Convert the UML diagram to Typescript class:")
console.log(cir.toString())
console.log(`Area: ${cir.getArea()}`)
console.log(`Circumference: ${cir.getCircumference()}`)
