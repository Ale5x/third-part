const product_card_item ={
        "giftCertificateDtoId": 1,
        "name": "Auto",
        "description": "Description of the car certificate",
        "price": 33.00,
        "duration": 3,
        "createDate": "2022-05-10T14:33:33",
        "lastUpdateDate": "2022-05-10T14:33:33",
        "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
    };

const product_card = 
    {
    "_embedded": {
        "giftCertificateDtoList": [
            {
                "giftCertificateDtoId": 1,
                "name": "Auto",
                "description": "Description of the car certificate",
                "price": 33.00,
                "duration": 3,
                "createDate": "2022-05-10T14:33:33",
                "lastUpdateDate": "2022-05-10T14:33:33",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 2,
                "name": "Tesla",
                "description": "Description of the Tesla certificate",
                "price": 100.00,
                "duration": 50,
                "createDate": "2020-01-01T12:10:10",
                "lastUpdateDate": "2022-10-10T12:10:10",
                "tags": "#Tag 5, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 3,
                "name": "Object",
                "description": "Description of the object certificate",
                "price": 300.00,
                "duration": 150,
                "createDate": "2020-05-05T12:10:10",
                "lastUpdateDate": "2022-10-10T12:10:10",
                "tags": "#Tag 5, #Tag 4, #Tag 2"
            },
            {
                "giftCertificateDtoId": 4,
                "name": "Balance space & Complex for the car \"CleanArt\"",
                "description": "[2] then the new consuls, having sent fetials, as commanded by the people, to declare war on the Samnites,",
                "price": 36.00,
                "duration": 270,
                "createDate": "1992-10-10T19:13",
                "lastUpdateDate": "1992-10-10T19:13",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 5,
                "name": "Relaxing aroma massage & Aroma Care \"Hot Cherry\"",
                "description": "Looked forward to the coming of their fellow Greeks, the young men of Tarentum, to enable",
                "price": 35.00,
                "duration": 96,
                "createDate": "2007-08-22T16:38",
                "lastUpdateDate": "2007-08-22T16:38",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2, #Tag 3"
            },
            {
                "giftCertificateDtoId": 6,
                "name": "Dinner at a Georgian restaurant & Expobel-bowling",
                "description": "that reinforcements were on their way, both from Tarentum and from the Samnites, they felt that",
                "price": 70.00,
                "duration": 135,
                "createDate": "2020-10-14T04:30",
                "lastUpdateDate": "2020-10-14T04:30",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 3"
            },
            {
                "giftCertificateDtoId": 7,
                "name": "Nova Shangrila Luxury SPA & Fitness & School of drawing \"All Malevichi\"",
                "description": "where the Samnites were established, appointing [p. 103]Lucius Quinctius",
                "price": 9.00,
                "duration": 158,
                "createDate": "2017-02-06T11:34",
                "lastUpdateDate": "2017-02-06T11:34",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 8,
                "name": "Aroma Care \"Hot Cherry\" & School of massage \"Clarity\"",
                "description": "And praying that it might tum out a good and favourable and fortunate thing for Palaepolis",
                "price": 10.00,
                "duration": 86,
                "createDate": "1998-04-23T16:42",
                "lastUpdateDate": "1998-04-23T16:42",
                "tags": "#Tag 5, #Tag 1, #Tag 2"
            },
            {
                "giftCertificateDtoId": 9,
                "name": "Set \"Caprice\" & Master class \"Painting in two hours\"",
                "description": "[p. 101]children and their wives, and suffered all the horrors2 of captured cities. [7] and so, on a report ",
                "price": 71.00,
                "duration": 222,
                "createDate": "2021-01-01T02:42",
                "lastUpdateDate": "2021-01-01T02:42",
                "tags": "#Tag 5, #Tag 4, #Tag 1, #Tag 2"
            }
        ]
    },
    "_links": {
        "Previous": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=1&size=9",
            "type": "GET"
        },
        "Next": {
            "href": "http://localhost:8080/store/certificate/getAllCertificates?page=2&size=9",
            "type": "GET"
        }
    }
}
;

// const product_card = [
//     {
//         id: 1,
//         product_name: "Rayes Alpha",
//         description: "Description",
//         price: 350,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     },
//     {
//         id: 2,
//         product_name: "Rayes Alpha V2",
//         description: "Description",
//         price: 150,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     },
//     {
//         id: 3,
//         product_name: "Rayes Alpha V1.5",
//         description: "Description",
//         price: 500,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     },
//     {
//         id: 4,
//         product_name: "Rayes Alpha Tad",
//         description: "Description",
//         price: 200,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     },
//     {
//         id: 5,
//         product_name: "Rayes Alpha Din",
//         description: "Description",
//         price: 390,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     },
//     {
//         id: 6,
//         product_name: "Rayes Alpha 111",
//         description: "Description",
//         price: 352,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     },
//     {
//         id: 7,
//         product_name: "Rayes Alpha Din-Din",
//         description: "Description",
//         price: 590,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     },
//     {
//         id: 8,
//         product_name: "Rayes V3",
//         description: "Description",
//         price: 800,
//         currency:"$",
//         thumb: "https://cdn11.bigcommerce.com/s-q8jsr/images/stencil/2000x2000/products/2487/16993/HX_Maroon_Hero__04788.1644221086.jpg?c=2"
//     }
// ]

export default product_card;
// export default product_card_item;