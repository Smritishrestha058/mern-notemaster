class Car:
    model= "Mustang"
    engine_power="120"
    model_no = "m-2345"
    seats = 4
    driver_seat_direction= "left"
    speed="250 mile/hour"

    def is_driving(self):
        print(f"The car of {self.model}model with{self.model_no}having horse power {self.engine_power}is driving with the speed of {self.speed}")
    def driver_seat_direction(self):
        print(f"The car is of {self.driver_seat_direction}driver seated.")

mustang = Car()
print("mustang.model: ", mustang.model)
mustang.is_driving()
mustang.driver_seat_direction()