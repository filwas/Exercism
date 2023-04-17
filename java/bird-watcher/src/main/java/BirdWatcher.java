
class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return new int[] {0, 2, 5, 3, 7, 8, 4};
    }

    public int getToday() {
        return birdsPerDay[birdsPerDay.length-1];
    }

    public void incrementTodaysCount() {
        this.birdsPerDay[this.birdsPerDay.length-1]++;
    }

    public boolean hasDayWithoutBirds() {
        for (int birds : birdsPerDay) {
            if (birds == 0) return true;
        }
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int birdCount = 0;

        numberOfDays = numberOfDays > this.birdsPerDay.length ? this.birdsPerDay.length : numberOfDays;
        
        for (int i = 0; i < numberOfDays; i++) {
            birdCount += this.birdsPerDay[i];
        }
        return birdCount;
    }

    public int getBusyDays() {
        int busycount = 0;
        for (int birds : birdsPerDay) {
            busycount += birds >= 5 ? 1 : 0;
        }
        return busycount;
    }
}
