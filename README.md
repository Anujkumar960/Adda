# Adda


## Facility Booking Module
 This module allows residents of an apartment complex to book various facilities such as Clubhouse and Tennis Court. Each facility has specific booking charges, which could be slot-based or hourly.

## Features
- Multiple facilities available for booking.
- Facilities can be booked for specific time slots.
- Slot-based and hour-based booking amounts.
- Checks for overlapping reservations to prevent double bookings.

## Facilities and Charges
# Clubhouse
- 10:00 AM to 4:00 PM: Rs. 100/hour
- 4:00 PM to 10:00 PM: Rs. 500/hour

# Tennis Court
- Anytime: Rs. 50/hour
- Input/Output Scenarios
- Input: Clubhouse, 26-10-2020, 16:00 - 22:00

- Output: Booked, Rs. 1000
- Input: Tennis Court, 26-10-2020, 16:00 - 20:00

- Output: Booked, Rs. 200
- Input: Clubhouse, 26-10-2020, 16:00 - 22:00

- Output: Booking Failed, Already Booked
- Input: Tennis Court, 26-10-2020, 17:00 - 21:00

- Output: Booking Failed, Already Booked




## Usage
- Clone the repository:
```
git clone https://github.com/Anujkumar960/Adda.git
```
## Run the application:

- Ensure you have Node.js installed.
- Execute the JavaScript file:
```
node index.js
```
