public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        double failability;
        switch (speed) {
            case 1: 
            case 2: 
            case 3: 
            case 4: 
                failability = 1;
                break;
            case 5: 
            case 6: 
            case 7: 
            case 8:
                failability = 0.9;
                break;
            case 9:
                failability = 0.8;
                break;
            default:
                failability = 0.77;
                break;
        }
        return failability * speed * 221;
    }

    public int workingItemsPerMinute(int speed) {
        int perMinute = (int)productionRatePerHour(speed)/60;
        return perMinute;
    }
}
