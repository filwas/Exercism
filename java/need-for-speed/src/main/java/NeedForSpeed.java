class NeedForSpeed {
    public int speed;
    public int batteryDrain;
    private int battery;
    private int distance;
    
    public NeedForSpeed(int speed, int batteryDrain){
        this.speed = speed;
        this.batteryDrain = batteryDrain;
        this.battery = 100;
        this.distance = 0;
    }


    public boolean batteryDrained() {
        return this.battery > 0 ? false : true;
    }

    public int distanceDriven() {
        return this.distance;
    }

    public void drive() {
        if (this.battery >= this.batteryDrain) {
            this.distance += this.speed;
            this.battery -= this.batteryDrain;
        }
    }

    public static NeedForSpeed nitro() {
        return new NeedForSpeed(50, 4);
    }
}

class RaceTrack {
    private int distance;

    public RaceTrack(int distance){
        this.distance = distance;
    }

    public boolean tryFinishTrack(NeedForSpeed car) {
        return ((float)this.distance / (float)car.speed) * (float)car.batteryDrain > 100 ? false : true;

    }
}
