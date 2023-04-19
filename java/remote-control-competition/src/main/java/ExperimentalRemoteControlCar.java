public class ExperimentalRemoteControlCar implements RemoteControlCar {
    int distanceTravelled = 0;
    
    public void drive() {
        this.distanceTravelled += 20;
    }

    public int getDistanceTravelled() {
        return this.distanceTravelled;
    }
}
