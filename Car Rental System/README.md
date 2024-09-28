Overview:

The Car Rental System manages a fleet of cars that can be rented and returned by customers. It tracks car availability, rent status, and provides functionalities to add new cars, rent them out, and return them. There are known bugs related to multiple bookings, non-existent cars, and issues with tracking rented cars.


Known Issues:

    Multiple Rentals: Users can sometimes rent the same car more than once, even though the car is already rented.
    Removing Rented Cars: It seems the system allows rented cars to be removed. If a car is currently rented, it should not be removed from the fleet until it's returned.
    Inconsistent IDs: There's a suspicion that car IDs are unnecessarily large, similar to the issue in the library system.
    Non-existent Car Rentals: There have been reports of users trying to rent non-existent cars, and it doesn't properly log errors or messages.
    Return Non-rented Cars: There is no proper feedback when a user tries to return a car that was not rented in the first place.

Task:

    Identify and fix the bugs in this system.
    Handle edge cases like renting or returning a non-existent car, ensuring rented cars cannot be removed, and addressing any issues with ID generation or multiple rentals.