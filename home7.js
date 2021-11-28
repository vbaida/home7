
    /*Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
    створити пустий масив, наповнити його 10 об'єктами new User(....)*/

    function User(id, name, surname, email, phone)
    {
    this.id = id
    this.username = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

    let userarr = [
    new User(1, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(2, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(3, 'vitaliy', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(4, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(5, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(6, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(7, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(8, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(9, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652),
    new User(10, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652)
    ]
    console.log(userarr)
    /* - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

    let filterUser = userarr.filter((item) => {
    if (item.id % 2 === 0) {
    return item
}
});
    console.log(filterUser)
    /* - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
    let filter1User = userarr.sort((a, b) => b.id - a.id)
    console.log(filter1User)

    /*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
    створити пустий масив, наповнити його 10 об'єктами Client.*/
    class Client {
    constructor(id, username, surname, email, phone, order) {
    this.id = id;
    this.username = username;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}}

    let clientarr = [
    new Client(1, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,55),
    new Client(2, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,87),
    new Client(3, 'vitaliy', 'baida', 'vbaida@gmail.com', 673525785652,65),
    new Client(4, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,110),
    new Client(5, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,25),
    new Client(6, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,45),
    new Client(7, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,16),
    new Client(8, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,30),
    new Client(9, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,77),
    new Client(10, 'volodymyr', 'baida', 'vbaida@gmail.com', 673525785652,91)
    ]
    console.log(clientarr)


    /* - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
    console.log(clientarr.sort((a,b)=>a.order-b.order))
