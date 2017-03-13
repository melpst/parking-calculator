# Parking-calculator

Parking-calculator is a set of APIs that calculate parking fee for each mall such as Paragon, Central World, and Central Ladprao.

Note : I have included python codes within this project which could generate fee table for those malls.

## Installation
```
git clone https://github.com/melpst/parking-calculator.git
npm install
```

## Getting Started
Before you could run this project, you must config file `/credentials/mongolab.js` for using mlab first.
```
module.exports = {
	'url' : 'mongodb://<dbusername>:<dbpassword>@<dburl>'
}
```
Then, you can run this project by this command.
```
node app.js
```
After run this, you will see `listening in port 3000`

## Using APIs
  - GET /mall
  - GET /mall/parking
  - GET /mall/:id/checkprice
  - POST /mall/price
  - POST /mall/:id/checkin
  - DELETE /mall/:id/checkout

### GET /mall
This API will return all malls' fee table.
Example link : `localhost:3000/mall/`

Response body
```
[
  {
    "_id": "58c5a6d8c2d52000b47e7b33",
    "id": 1,
    "mallName": "Paragon",
    "fee": {
      "30": 0,
      "60": 0,
      "90": 0,
      ...
      "1380": 1140,
      "1410": 1140,
      "1440": 1200
    },
    "__v": 0
  }
]
```

### GET /mall/parking
This API will return all occupied parking slots.
Note: can be parked one car per mall, so returned object length will be equal to number of malls.
Example link : `localhost:3000/mall/parking`

Response body
```
[
  {
    "_id": "58c57aa76844691584934fec",
    "entryTime": "2017-03-12T14:00:00.000Z",
    "mallId": 3,
    "__v": 0
  },
  {
    "_id": "58c57aaa6844691584934fed",
    "entryTime": "2017-03-12T14:00:00.000Z",
    "mallId": 1,
    "__v": 0
  },
  {
    "_id": "58c57aaf6844691584934fee",
    "entryTime": "2017-03-12T14:00:00.000Z",
    "mallId": 2,
    "__v": 0
  }
]
```

### GET /mall/:id/checkprice
This API will return parking fee of car that parked in mall id `:id`
Example link : `localhost:3000/mall/1/checkprice`

Response
```
//if can be checked
Total fee = 840

//if there's no car in parking slot
Parking slot hasn't been occupied yet

//if there's a car parked overnight
Total fee is exceed limit. Please contact our manager.
```

### POST /mall/price
This API use for adding fee table into database.
Example link : `localhost:3000/mall/price`

Request body
```
{
	"id": "1",
	"mallName": "Paragon",
	"fee": {
		"30": 0,
		"60": 0,
		"90": 0,
	    ...
		"1380": 1140,
		"1410": 1140,
		"1440": 1200
	}
}
```
Response
```
//if add successfully
Added successfully

//if add fee table of mall that already has
This mall has been added already
```

### POST /mall/:id/checkin
This API use for occupying parking slot.
Example link : `localhost:3000/mall/2/checkin`

Request body
```
{
	"entryTime": "2017-03-12T14:00:00.000Z"
}
```
Response
```
//if add successfully
Check-in completed

//if parking slot has been occupied
Parking slot is occupied
```

### DELETE /mall/:id/checkout
This API use for remove car from parking slot
Example link : `localhost:3000/mall/1/checkout`

Response
```
//if can be check-out
Check-out completed

//if there's no car in parking slot
Parking slot hasn't been occupied yet
```

### DELETE /mall/:id/price
This API use for delete fee table of mall that has id `:id`
Example link : `localhost:3000/mall/1/price`

Response
```
//if can be check-out
Delete successfully

//if there's no car in parking slot
This mall hasn't been added yet
```

License
----

MIT

