/*- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
 Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
*/
class User {
    constructor(id, username, sername, email,phone,website) {
        this.id = id;
        this.username = username;
        this.sername = sername;
        this.email = email;
        this.phone = phone;
        this.website = website;
    }
}
let userarr = [
    new User (1,'Leanne Graham','Bret','Sincere@april.biz','1-770-736-8031 x56442', 'hildegard.org')
]


class Adres extends User {
    constructor(id, username, sername, email, phone,website, street, suite, city, zipcode) {
        super(id, username, sername, email, phone,website);
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
    }
}
let Adresarr = [
    new Adres ('Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874')
]

class Geo extends Adres {
    constructor(id, username, sername, email, phone, website, street, suite, city, zipcode, lat, lng) {
        super(id, username, sername, email, phone, website, street, suite, city, zipcode);
        this.lat = lat;
        this.lng = lng;
    }
}
let geoarr = [
    new Geo('-37.3159', '81.1496')
]
class Company extends User {
    constructor(id, username, sername, email, phone, website, name, catchPhrase, bs) {
        super(id, username, sername, email, phone, website);
        this.name = name;
        this.catchPhrase = catchPhrase;
        this.bs = bs;
    }
}
let companyarr = [
    new Company('Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
]