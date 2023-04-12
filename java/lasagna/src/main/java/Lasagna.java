public class Lasagna {
    
    public int expectedMinutesInOven() {
        return 40;
    }

    public int remainingMinutesInOven(int hasBeen) {
        return expectedMinutesInOven() - hasBeen;
    }

    public int preparationTimeInMinutes(int layers) {
        return 2*layers;
    }

    public int totalTimeInMinutes(int layers, int hasBeen) {
        return hasBeen + preparationTimeInMinutes(layers);
    }

}
