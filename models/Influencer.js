// {
//     key: '02kWvMZfkcZgO4EVp0PontkSMKf2',
//     name: 'Droledemanise',
//     email: 'ashamedCody93@rocketmail.com',
//     img: 'https://firebasestorage.googleapis.com/v0/b/shopmyinfluens.appspot.com/o/shopmyinfluens%2Fbanners%2FDroledemanise.png?alt=media',
//     createdat: '1558440041'
//   }

class Influencer {
    constructor(input) {
        {
            this.key = input?.key;
            this.name = input?.name;
            this.email = input?.email;
            this.img = input?.img;
            this.createdat = input?.createdat;
        }
    }
}

module.exports = Influencer;
