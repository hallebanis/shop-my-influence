// {
//     key: '-MXqPKgY9ZjFzKL--QcH',
//     code: '#FFFFFF',
//     fr_name: 'Blanc',
//     en_name: 'White'
//   }

class Color {
    constructor(input) {
        this.key = input?.key;
        this.code = input?.code;
        this.fr_name = input?.fr_name;
        this.en_name = input?.en_name;
    }
}

module.exports = Color;
