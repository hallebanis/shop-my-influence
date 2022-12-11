const { HttpCodes } = require('../utils/HttpCode');
const { countries, findFlagUrlByIso2Code } = require('country-flags-svg');
/**
 *
 * @param {Array<String>} columns
 * @param {"ASC" | "DESC"} order
 * @returns {String}
 */
const addOrderBy = (columns, order = 'DESC') => {
    if (!columns || columns.length === 0 || !['ASC', 'DESC'].includes(order))
        throw HttpCodes[422];
    let clause = 'ORDER BY';
    columns.forEach((column, index) => {
        clause +=
            index === columns.length - 1 ? ' ' + column : ' ' + column + ',';
    });
    clause += ' ' + order;
    return clause;
};
/**
 * returns coutryDetails from country code
 * @param {String} code
 * @returns {{name:String,flag:String}}
 */
const getCountryDetails = (code) => {
    const country = countries.find((elm) => elm.iso2 === code);
    const flag = findFlagUrlByIso2Code(code);
    return { name: country.name, flag };
};

const getKeyByValue = (object, value) => {
    return Object.keys(object).find((key) => object[key] === value);
};

module.exports = { addOrderBy, getCountryDetails, getKeyByValue };
