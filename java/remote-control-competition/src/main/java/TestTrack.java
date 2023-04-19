import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

public class TestTrack {

    public static void race(RemoteControlCar car) {
        car.drive();
    }

    
    public static List<ProductionRemoteControlCar> getRankedCars(List<ProductionRemoteControlCar> carList){

        List<ProductionRemoteControlCar> sortedCarList = carList.stream()
            .sorted(Comparator.comparing(ProductionRemoteControlCar::getNumberOfVictories).reversed())
            .collect(Collectors.toList());


        return sortedCarList;
    }
}
