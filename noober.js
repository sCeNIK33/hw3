function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  console.log(ride)
  
  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  

  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  let passenger1 = ride[0]
  let passenger2 = ride[1]
  let passenger3 = ride[2]
  
  levelOfService = ('Noober X', 'Noober Purple', 'Noober XL', 'Noober Pool')
  if (ride.length > 1 && passenger1.numberOfPassengers == 1) {
    levelOfService = 'Noober Pool'
  } else if (passenger1.purpleRequested = true && passenger1.numberOfPassengers <= 3) {
    levelOfService = 'Noober Purple'
  } else if (passenger1.numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } else {levelOfService = 'Noober X'}
  
  console.log(levelOfService)

  passenger1Name = passenger1.passengerDetails.first + ' ' + passenger1.passengerDetails.last
  console.log(passenger1Name)
  
  passenger1Phone = passenger1.passengerDetails.phoneNumber
  console.log(passenger1Phone)
  
  passenger1NumberOfPassengers = passenger1.numberOfPassengers
  console.log(passenger1NumberOfPassengers)
  
  passenger1PickupAddressLine1 = passenger1.pickupLocation.address
  console.log(passenger1PickupAddressLine1)
  
  passenger1PickupAddressLine2 = passenger1.pickupLocation.city + ', ' + passenger1.pickupLocation.state + ' ' + passenger1.pickupLocation.zip
  console.log(passenger1PickupAddressLine2)
  
  passenger1DropoffAddressLine1 = passenger1.dropoffLocation.address
  console.log(passenger1DropoffAddressLine1)
  
  passenger1DropoffAddressLine2 = passenger1.dropoffLocation.city + ', ' + passenger1.dropoffLocation.state + ' ' + passenger1.dropoffLocation.zip
  console.log(passenger1DropoffAddressLine2)
  
  passenger2Name = passenger2.passengerDetails.first + ' ' + passenger2.passengerDetails.last
  console.log(passenger2Name)
 
  passenger2Phone = passenger2.passengerDetails.phoneNumber
  console.log(passenger2Phone)
  
  passenger2NumberOfPassengers = passenger2.numberOfPassengers
  console.log(passenger2NumberOfPassengers)
  
  passenger2PickupAddressLine1 = passenger2.pickupLocation.address
  console.log(passenger2PickupAddressLine1)
 
  passenger2PickupAddressLine2 = passenger2.pickupLocation.city + ', ' + passenger2.pickupLocation.state + ' ' + passenger2.pickupLocation.zip
  console.log(passenger2PickupAddressLine2)
  
  passenger2DropoffAddressLine1 = passenger2.dropoffLocation.address
  console.log(passenger2DropoffAddressLine1)

  passenger2DropoffAddressLine2 = passenger2.dropoffLocation.city + ', ' + passenger2.dropoffLocation.state + ' ' + passenger2.dropoffLocation.zip
  console.log(passenger2DropoffAddressLine2)

  passenger3Name = passenger3.passengerDetails.first + ' ' + passenger3.passengerDetails.last
  console.log(passenger3Name)

  passenger3Phone = passenger3.passengerDetails.phoneNumber
  console.log(passenger3Phone)

  passenger3NumberOfPassengers = passenger3.numberOfPassengers
  console.log(passenger3NumberOfPassengers)

  passenger3PickupAddressLine1 = passenger3.pickupLocation.address  
  console.log(passenger3PickupAddressLine1)
 
  passenger3PickupAddressLine2 = passenger3.pickupLocation.city + ', ' + passenger3.pickupLocation.state + ' ' + passenger3.pickupLocation.zip
  console.log(passenger3PickupAddressLine2)

  passenger3DropoffAddressLine1 = passenger3.dropoffLocation.address
  console.log(passenger3DropoffAddressLine1)

  passenger3DropoffAddressLine2 = passenger3.dropoffLocation.city + ', ' + passenger3.dropoffLocation.state + ' ' + passenger3.dropoffLocation.zip
  console.log(passenger3DropoffAddressLine2)



  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}




//let rando1 = ride[getRandomInt(ride.length)]
//let rando2 = ride[getRandomInt(ride.length)]
//let rando3 = ride[getRandomInt(ride.length)]