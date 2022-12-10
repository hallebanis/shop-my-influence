const { HttpCodes } = require('../utils/HttpCode');
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

module.exports = { addOrderBy };
