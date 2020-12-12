'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let properties = [
        {
            "price": 2000000,
            "title": "Maison de 50m² avec petit jardin",
            "location": "Talence",
            "room": 4,
            "description": "Petite maison cozy avec petit jardin de 15m² et balcon de 8m²",
            "picture": "https://media.lesechos.com/api/v1/images/view/5f0ac2c7d286c212b4199635/1280x720-webp/0603405974889-web-tete.webp",
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "TypeId": 1,
            "UserId": 1
        },
        {
            "price": 800000,
            "title": "Appartement de luxe",
            "location": "Bordeaux",
            "room": 6,
            "description": "Appartement luxueux en plein centre ville de 100m²",
            "picture": "https://www.barnes-lyon.com/uploads/accommodations/178/pictures/13079/show/barnes-lyon-appartement-lyon-2eme.jpg",
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "TypeId": 2,
            "UserId": 7
        },
        {
            "price": 1000,
            "title": "Garage de voiture",
            "location": "Lyon",
            "room": 1,
            "description": "Garage de 15m²",
            "picture": "https://www.direct-abris.com/765-thickbox_default/garage-bois-toronto-porte-sectionnelle-44mm.jpg",
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "TypeId": 4,
            "UserId": 7
        },
        {
            "price": 1000000,
            "title": "Villa en bord de mer",
            "location": "Marseilles",
            "room": 15,
            "description": "Incroyable villa de 400m²",
            "picture": "https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSaC8Y5L~JfyHds9HljFKbIihOkX3Hq5C9d69~GwVQAUJ3F~nk7fQh0UAqAYi7r3tGF4MzRyAahwYUUdBGcpIv62graeAG8w~8wUqYBXzLX2fvWEnUTQLuqRdONy5WACPmyO8uqKAHjHemV6z~5jgt8AQg7cew~6RB3PVf3qGWecjwBIeE1gPVvPLV3hrMoCZbpm9URzDnYisb5CD3BHYx3qe9hkFGi2MpOpzK2DLeQMSnujni41g--.jpg",
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "TypeId": 5,
            "UserId": 7
        },
        {
            "price": 100000,
            "title": "HLM en périphérie",
            "location": "Paris",
            "room": 2,
            "description": "HLM en banlieu de 25m²",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/b/ba/Martigues_%E2%80%94_HLM%2C_place_Auguste_Renoir_%28quartier_de_Ferri%C3%A8res%29.jpg",
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "TypeId": 3,
            "UserId": 7
        },
        {
            "price": 1,
            "title": "Cabanne au fond du jardin",
            "location": "Trouville",
            "room": 0,
            "description": "Cabanne branlante dans un jardin mal entretenu",
            "picture": "https://previews.123rf.com/images/tommk/tommk1506/tommk150600024/41794738-vieille-cabane-abandonn%C3%A9e-en-ruine-dans-un-gommage.jpg",
            "updatedAt": new Date(),
            "createdAt": new Date(),
            "TypeId": 6,
            "UserId": 7
        },
    ]
   return queryInterface.bulkInsert('Properties', properties)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Properties', null, {})
  }
};