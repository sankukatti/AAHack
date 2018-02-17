
Solution:

Before travel:
0. User should be able to send a text message if he/she is getting delayed.
	Later customer support can contact and explain the possible options.
1. User should be notified id there is any delay. With the most exact time of delay so that user don't have to wait.
2. A video to be displayed to explain the reason of the delay and explaing how much we value their patience.
3. If there is a delay, notify user about the entertainment options on the airport.
4. Notify user with the ways to reach the airport.
5. Notify user with the available transport options at the destinations.
6. User should be able to ask AirAsia to hold a cab at the destination.
7. User should be able to ask a parking space booked at the departure airport.
8. User should be able to view the crew members so that he/she feels home.

During travel:
1. Notify the user about the altitude we are flying. May be traveller feels exited.
2. When captain announces the takeoff/landing a video stream where the captain is conveying the message. Feels special.
3. Traveller able to ask AirAsia to hold a cab at the destination.
4. Notify is the car washed and ready to ride once the traveller reaches the source. Id traveller has parked the vehicle.

After travel:
1. Ask feedback on whether traveller liked the journey?
	If yes,
		we can send some discounts to the traveller for his/her next journey in next month.
		We can ask traveller to refer his/her friend and get discount cards.

	Id no,
		Customer support can call and enquire. Even if the steps are not taken, customer will feel special.

2. If user has parked the car and if its is ready then notify the user.



Framework chosen:

MEAN.Js -
Comes with db/server/client (mongodb(mongoose)/express/angular) configurations.
It provide a good folder structure.
It provides basic session based authentication.
Gulp config for watching and running tests and etc.


Module: Experiences
1. Each flight will have an associated Experience.
2. Each experience object will be
{
    "_id" : ObjectId("5a87cc2e6ba93aac784b1da9"),

    // DETERMINES THE FLIGHT
    "flightId" : ObjectId("5a87cce26ba93aac784b1daa"),
    "flightDelay" : 300,

    // A VIDEO EXPLAINING THE DELAY
    "delayVideo" : "https://www.youtube.com/embed/lJ0u4_ZgJWg",

    // ALL THE FLIGHT TRAVELLERS
    "travellers" : [
        {
            "userId" : ObjectId("5a87c80ac5f91b3c8a2ec298"),

            // HAS USER SIGNED UP FOR HOLDING A CAB?
            "holdCabAtDest" : true,

            "feeling" : {
                "status" : "Happy",
                "time" : ISODate("2018-02-17T06:25:38.029Z")
            },
            "travelEnjoyed" : {
                "status" : true,
                "time" : ISODate("2018-02-17T06:25:38.029Z")
            },
            "carParked" : true,
            "carParkingCode" : "123456",
            "carReady" : {
                "status" : true,
                "time" : ISODate("2018-02-17T06:25:38.029Z")
            }
        }
    ],

    // LINK TO THE TRANSPORT OPTIONS AT SOURCE
    "sourceCityTransportsId" : ObjectId("5a87c90c6ba93aac784b1da6"),

    // LINK TO THE TRANSPORT OPTIONS AT DEST
    "destCityTransportsId" : ObjectId("5a87c9146ba93aac784b1da7"),

    // LINK TO SOURCE AIRPORT TO GET FACILITIES
    "sourceAirportId" : ObjectId("5a87c8bc6ba93aac784b1da4"),

    // LINK TO DEST AIRPORT TO GET FACILITIES
    "destAitPortId" : ObjectId("5a87c8cd6ba93aac784b1da5"),

    // CREW MEMBERS
    "crew" : [
        ObjectId("5a87c80ac5f91b3c8a2ec298")
    ]
}


What is done: (Not coplete. Nothing to show on UI)
1. Create modules experiences.
2. Create models for experiencs, airports, local transports, bookings.
3. Model level test for experience. (Not complete)
4. Working APIs -
	http://localhost:3000/api/experiences/5a87cce26ba93aac784b1daa - get experience
	http://localhost:3000/api/experiences/5a87cce26ba93aac784b1daa - Update experience
5. Exception handling - Pending
