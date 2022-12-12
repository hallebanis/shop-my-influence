/**
 * @swagger
 * /sale/performances:
 *      get:
 *          summary: provides all data for the global performance section? the api do no have an error response
 *          parameters:
 *              - in: query
 *                name: start
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the start of a period search
 *              - in: query
 *                name: end
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the end of a period search
 *          responses:
 *              200:
 *                  description: return a JSON data for the global performance section
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              example:
 *                                  {"totalSales": 2203615.6399999997,"sales_count": "69553","average_cart": "31.7578123463111486","sibled_country_count": "77","product_sales_count": "7520"}
 *                              properties:
 *                                  totalSales:
 *                                      description: total sales of the company
 *                                      type: intger
 *                                  sales_count:
 *                                      description: total sales of the company
 *                                      type: intger
 *                                  avergae_cart:
 *                                      description: avergae cart
 *                                      type: intger
 *                                  sibled_country_count:
 *                                      description: total count of the coutries where we selle our products
 *                                      type: intger
 *                                  product_sales_count:
 *                                      description: number of products selled
 *                                      type: intger
 * /sale/categorySales:
 *      get:
 *          summary: provides best sells grouped by category
 *          parameters:
 *              - in: query
 *                name: start
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the start of a period search
 *              - in: query
 *                name: end
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the end of a period search
 *              - in: query
 *                name: sort
 *                schema:
 *                  type: string
 *                  enum: [ASC,DESC]
 *                required: false
 *              - in: query
 *                name: count
 *                schema:
 *                  type: intger
 *                required: false
 *                default: 5
 *                description: number of elements per page
 *              - in: query
 *                name: offset
 *                schema:
 *                  type: intger
 *                required: false
 *                default: 0
 *                description: starting index
 *          responses:
 *              200:
 *                  description: return an array of best sells category with the fr names and en names
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              example:
 *                                  [{total: '651027.06', fr_name: 'Mode femme',en_name: "Women' fashion"},{total: '228407.5',fr_name: 'Chaussures',en_name: 'Shoes'},{total: '96587.8',fr_name: 'Beauté',en_name: 'Beauty'},{total: '83253.598',fr_name: 'High-tech',en_name: 'High-tech'},{total: '71523.1',fr_name: 'Maison & jardin ',en_name: 'House & garden'}]
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      total:
 *                                          type: number
 *                                      fr_name:
 *                                          type: string
 *                                      en_name:
 *                                          type: string
 * /sale/periodSales:
 *      get:
 *          summary: provides all data for the global performance section? the api do no have an error response
 *          parameters:
 *              - in: query
 *                name: start
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the start of a period search
 *              - in: query
 *                name: end
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the end of a period search
 *              - in: query
 *                name: sort
 *                schema:
 *                  type: string
 *                  enum: [ASC,DESC]
 *                required: false
 *          responses:
 *              200:
 *                  description: return a JSON data for the global performance section
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              example: {morning: 642767.7000000001,afterNoon: 653086.6241229794,evening: 364762.3,night: 548234.498}
 *                              properties:
 *                                  morning:
 *                                      description: total sales on the morning time from 6 to 12
 *                                      type: number
 *                                  afterNoon:
 *                                      description: total sales on the morning time from 12 to 17
 *                                      type: number
 *                                  evening:
 *                                      description: total sales on the morning time from 17 to 20
 *                                      type: number
 *                                  night:
 *                                      description: total sales on the morning time from 20 to 6am
 *                                      type: number
 * /sale/deviceSales:
 *      get:
 *          summary: provides best sells grouped by devisce type
 *          parameters:
 *              - in: query
 *                name: start
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the start of a period search
 *              - in: query
 *                name: end
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the end of a period search
 *              - in: query
 *                name: sort
 *                schema:
 *                  type: string
 *                  enum: [ASC,DESC]
 *                required: false
 *              - in: query
 *                name: count
 *                schema:
 *                  type: intger
 *                required: false
 *                default: 5
 *                description: number of elements per page
 *              - in: query
 *                name: offset
 *                schema:
 *                  type: intger
 *                required: false
 *                default: 0
 *                description: starting index
 *
 *          responses:
 *              200:
 *                  description: return an array of best sells category with the fr names and en names
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              example:
 *                                  [{total: '651027.06', fr_name: 'Mode femme',en_name: "Women' fashion"},{total: '228407.5',fr_name: 'Chaussures',en_name: 'Shoes'},{total: '96587.8',fr_name: 'Beauté',en_name: 'Beauty'},{total: '83253.598',fr_name: 'High-tech',en_name: 'High-tech'},{total: '71523.1',fr_name: 'Maison & jardin ',en_name: 'House & garden'}]
 *                              items:
 *                                  type: object
 *                                  properties:
 *                                      total:
 *                                          type: number
 *                                      fr_name:
 *                                          type: string
 *                                      en_name:
 *                                          type: string
 * /sale/insights:
 *      get:
 *          summary: provides all data for the insights section
 *          parameters:
 *              - in: query
 *                name: start
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the start of a period search
 *              - in: query
 *                name: end
 *                schema:
 *                  type: intger
 *                required: false
 *                description: timestamp for the end of a period search
 *          responses:
 *              200:
 *                  description: return a JSON data for the insights section
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              example:
 *                                  {"bestSalesDevice": {"total_sales": "1856871.96212297932","devisetype": "mobile"},"bestSalesCategory": {"best_sale_category": "23952","fr_name": "Mode femme","en_name": "Women' fashion"},"bestSalesColor": {"color_total_sales": "273918.3","fr_name": "Noir","en_name": "Black"},"bestSalesDay": {"total_sale": "431810.1","day": "wednesday"},"bestSalesPeriodOfDay": {"period": "afterNoon","total": 653086.6241229794},"bestSalesInfluencer": {"total": "1045897.1","name": "Idee2look","img": "https://firebasestorage.googleapis.com/v0/b/shopmyinfluens.appspot.com/o/shopmyinfluens%2Fbanners%2Fidee2look%40outlook.com.jpg?alt=media"},"bestSalesCountry": {"total": "2108640.92212297932","countrycode": "FR","name": "France","flag": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg"}}
 *                              properties:
 *                                  bestSalesDevice:
 *                                      description: total sales of the company
 *                                      type: object
 *                                      properties:
 *                                          total_sales:
 *                                              type: number
 *                                          devise:
 *                                              type: string
 *                                  bestSalesCategory:
 *                                      description: total sales of the company
 *                                      type: object
 *                                      properties:
 *                                          best_sale_category:
 *                                              type: number
 *                                          fr_name:
 *                                              type: string
 *                                          en_name:
 *                                              type: string
 */
