/*-- створити об'єкт (не меньше 5ти властивостей) який описує
- собаку
- людину
- автомобіль
- квартиру
- книгу*/
/*let object1={
    dog:{
        species: 'German Shepherd',
        height: 100,
        years: 1
    },
    human:{
        name: 'Vlad',
        years: '19',
        hobbie: 'Marceting',
        height: 189 + 'см'
    },
    car:{
        model: 'Impala',
        nake: 'Chevrolet',
        yers: 1967
    },
    apartment:{
        rooms: 1,
        floor: 8,
        adress: 'Kostopil, str. Rivnenskya 6, 169'
    },
    books:{
        name: 'Букварик',
        numberOfPages: 30,
        yearOfPublication:1980
    }
};
console.log(object1);*/
/*-- Створити масив та вивести його в консоль:
- з 5 собак
- 3 5 людей
- з 5 автомобілів*/
/*
let object2={
    dog:{
        dog1:{
            name: 'Bobby',
            years:8
        },
        dog2:{
            name: 'Vasya',
            years: 15
        },
        dog3:{
            name: 'Сніжок',
            years: 2
        },
        dog4:{
            name: 'barsik',
            years: 20
        },
        dog5:{
            name:'leva',
            years:1
        }
    },
    human:{
        human1:{
            name: 'Богдан',
            years:18
        },
        human2:{
            name: 'Володимир',
            years: 35
        },
        human3:{
            name: 'Олександр',
            years: 22
        },
        human4:{
            name: 'Влад',
            years: 19
        },
        human5:{
            name:'Ілля',
            years: 23
        }
    },
    car:{
        car1: 'bmw',
        car2: 'audi',
        car3: 'mersedes',
        car4: 'reno',
        car5: 'subaru'
    }
}



console.log(object2);*/
/*-- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей
 обов'язково повинна бути об'єктом,ще одна - масивом
- будинок
- водій
- іграшку
- стіл
- сумка*/

/*object3={

house:['house1', 'house2', 'house3','house4', 'house5'],
driver:{
    driver1:'driver1',
    driver2:'driver2',
    driver3:'driver3',
    driver4:'driver4',
    driver5:'driver5'
},
table:{
    games1: 'games1', 
    games2: 'games2', 
    games3: 'games3',
    games4: 'games4',
    games5: 'games5'},
bag:{
    bag1:'bag1',
    bag2:'bag2',
    bag3:'bag3',
    bag4:'bag4',
    bag5:'bag5'}
};
*/
let users = [
				{name: 'vasya', age: 31, status: false},
				{name: 'petya', age: 30, status: true},
				{name: 'kolya', age: 29, status: true},
				{name: 'olya', age: 28, status: false},
				{name: 'max', age: 30, status: true},
				{name: 'anya', age: 31, status: false},
				{name: 'oleg', age: 28, status: false},
				{name: 'andrey', age: 29, status: true},
				{name: 'masha', age: 30, status: true},
				{name: 'olya', age: 31, status: false},
				{name: 'max', age: 31, status: true}
			];
/*- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
- статус Андрія
- статус Максима
- ім'я передостаннього об'єкту
- ім'я третього об'єкта
- вік Олега
- вік Олі
- вік + ім'я 5го об'єкта
- вік + сатус Анни*/
for (let user of users) {
    if (user.name === 'andrey'){
        console.log(user.status);
    }
}
for(user of users){
    if (user.name === 'max'){
        console.log(user.status)
    }
}
/*for (user of users){
    if(user.name===users[length-1]){
        console.log(user.name);
    }}//Не работает*/
    

/*for(user of users){
    if(users===$users.name[2]){
        console.log(users.name);
    }//не працює
}*/
for(user of users){
    if (user.name ==='oleg'){
        console.log(user.age);
    }
}
for(user of users){
    if (user.name ==='olya'){
        console.log(user.age);
    }
}
for(user of users){
    if(user.name === 'anya'){
        console.log(user.age + ' ' + user.name);
    }
}






