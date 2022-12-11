// {
//     key: '-N9Dop2pIGViYuUKdSjV',
//     influencer: 'la0NUVFtxnNnYng2JJF9i2FzkYz1',
//     offerid: 2620,
//     amount: '20.8',
//     commission: '02.08',
//     articleid: '-N7ZbyEpLlTlaIL-rHJn',
//     brandname: 'H&M',
//     brandkey: '-MxZWFBi0Qe4XVroNgc6',
//     categ: '-MVVjqB0bnq2XEnBltNY',
//     subcateg: '-Mo47TPiym9ZAVT8jXgs',
//     maincolor: '-MXqPKgcdiQDSAsbzGGG',
//     createdat: 1660253589,
//     countrycode: 'FR',
//     currency: 'EUR',
//     devisetype: 'mobile',
//     os: 'iOS'
//   }
class Conversion {
    /**
     *
     * @param {{
     * key:String
     * influencer:String
     * offerid:Number
     * amount:String
     * commission:String
     * articleid:String
     * brandname:String
     * brandkey:String
     * categ:String
     * subcateg:String
     * maincolor:String
     * createdat:Number
     * countrycode:String
     * currency:String
     * devisetype:String
     * os:String}} input
     */
    constructor(input) {
        this.key = input?.key;
        this.influencer = input?.influencer;
        this.offerid = input?.offerid;
        this.amount = input?.amount;
        this.commission = input?.commission;
        this.articleid = input?.articleid;
        this.brandname = input?.brandname;
        this.brandkey = input?.brandkey;
        this.categ = input?.categ;
        this.subcateg = input?.subcateg;
        this.maincolor = input?.maincolor;
        this.createdat = input?.created;
        this.countrycode = input?.countrycode;
        this.currency = input?.currency;
        this.devisetype = input?.devisetype;
        this.os = input?.os;
    }
}

module.exports = Conversion;
