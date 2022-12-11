// {
//     key: '-MVVjqArILS7OyGutYuC',
//     fr_name: 'Accessoires',
//     en_name: 'Accessories'
//   }
class Category {
    constructor(input) {
        this.key = input?.key;
        this.fr_name = input?.fr_name;
        this.en_name = input?.en_name;
    }
}

module.exports = Category;
