const allDogs = [
    {
        dogName: "APHRODITE",
        breed: "Terrier",
        age: 2
    },
    {
        dogName: "AVOCADO",
        breed: "Terrier",
        age: 2
    },
    {
        dogName: "BARKLEY",
        breed: "Retriever",
        age: 4
    },
    {
        dogName: "BENJI",
        breed: "Retriever",
        age: 6
    },
    {
        dogName: "BOSKO",
        breed: "Terrier",
        age: 1
    },
    {
        dogName: "BRANDI",
        breed: "Terrier",
        age: 2
    },
    {
        dogName: "BRUTUS",
        breed: "Terrier",
        age: 1
    },
    {
        dogName: "CALLIOPE",
        breed: "Terrier",
        age: 1
    },
    {
        dogName: "CAMPFIRE",
        breed: "Bulldog",
        age: 1
    },
    {
        dogName: "CHESTY",
        breed: "German Shepherd",
        age: 10
    },
    
];

//updates visible list of dogs
let list = document.getElementById("dogList");
allDogs.forEach((dog) => {
    let li = document.createElement("li");
      li.innerText = dog.dogName;
      list.appendChild(li);
});

//empty array for selected dogs
let selectedDogs = [];

//selects dogs
const selecting = (age, index, arr) => {
let desiredAge = document.querySelector("#petNum").value;
desiredAge = parseInt(desiredAge);
console.log("Input Test: "+desiredAge); 
    if (arr[index].age >= desiredAge) {
        console.log("Adding Dog: "+arr[index].age);
        selectedDogs.push(arr[index]);
        dogPaste(arr[index]);
    }
    console.log(selectedDogs);
}

//pastes selected dogs onto the page
const dogPaste = (selectedDogs) => {
    let str = `${selectedDogs.dogName} is a ${selectedDogs.breed} and is ${selectedDogs.age} years old.<br>`;
    let area = document.querySelector(".areaPaste");
    area.innerHTML += str;
}