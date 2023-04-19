class ProductionRemoteControlCar implements RemoteControlCar, Comparable<ProductionRemoteControlCar> {

    int distanceTravelled = 0;
    private int noVic = 0;

    @Override 
    public int compareTo(ProductionRemoteControlCar that){
        return this.getNumberOfVictories() - that.getNumberOfVictories();
    }

    public void drive() {
        distanceTravelled += 10;
    }

    public int getDistanceTravelled() {
        return this.distanceTravelled;
    }

    public int getNumberOfVictories() {
        return noVic;
    }

    public void setNumberOfVictories(int numberOfVictories) {
        noVic = numberOfVictories;
    }



}
