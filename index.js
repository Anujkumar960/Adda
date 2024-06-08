const amenities = {
    CommunityCenter: {
      "10:00-16:00": 100,
      "16:00-22:00": 500,
    },
    "Basketball Court": {
      anytime: 50,
    },
    SwimmingPool: {
      "10:00-14:00": 150,
      "16:00-20:00": 250,
    },
    FitnessRoom: {
      "09:00-12:00": 100,
      "13:00-17:00": 200,
    },
    Theater: {
      "18:00-21:00": 300,
    },
  };
  
  const reservations = {};
  
  function reserveAmenity(amenity, day, startHour, endHour) {
    if (!amenities[amenity]) {
      return `Reservation Failed, Amenity '${amenity}' not found`;
    }
  
    if (
      reservations[day] &&
      reservations[day].some(
        (slot) => slot[0] < endHour && slot[1] > startHour && slot[2] === amenity
      )
    ) {
      return "Reservation Failed, Already Reserved";
    }
  
    let rate;
    for (const slot in amenities[amenity]) {
      if (slot === "anytime") {
        rate = amenities[amenity][slot];
      } else {
        const [slotStart, slotEnd] = slot.split("-").map(time => parseInt(time.replace(":", "")));
        const start = parseInt(startHour.toString().padStart(2, '0') + "00");
        const end = parseInt(endHour.toString().padStart(2, '0') + "00");
  
        if (slotStart <= start && end <= slotEnd) {
          rate = amenities[amenity][slot];
          break;
        }
      }
    }
  
    if (!rate) {
      return "Reservation Failed, Slot not Available";
    }
  
    const totalCost = rate * (endHour - startHour);
    reservations[day] = reservations[day] || [];
    reservations[day].push([startHour, endHour, amenity]);
    return `Reserved, Rs. ${totalCost}`;
  }
  
  console.log(reserveAmenity("FitnessRoom", "26-10-2020", 10, 12));
  console.log(reserveAmenity("Basketball Court", "26-10-2020", 18, 20));
  console.log(reserveAmenity("SwimmingPool", "26-10-2020", 13, 15));
  console.log(reserveAmenity("Theater", "26-10-2020", 19, 21));
  console.log(reserveAmenity("CommunityCenter", "27-10-2020", 16, 22));
  console.log(reserveAmenity("Basketball Court", "27-10-2020", 16, 20));
  console.log(reserveAmenity("SwimmingPool", "27-10-2020", 10, 14));
  console.log(reserveAmenity("FitnessRoom", "27-10-2020", 13, 17));
  console.log(reserveAmenity("Theater", "27-10-2020", 18, 21));
  console.log(reserveAmenity("Yoga Studio", "27-10-2020", 10, 12));
  console.log(reserveAmenity("CommunityCenter", "26-10-2020", 16, 22));
  