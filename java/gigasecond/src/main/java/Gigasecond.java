import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.ZoneOffset;

public class Gigasecond {
    private LocalDateTime gigasecondLater;
    public Gigasecond(LocalDate moment) {
        long epochMoment = moment.toEpochSecond(LocalTime.MIN, ZoneOffset.MIN); 
        this.gigasecondLater = LocalDateTime.ofEpochSecond(epochMoment+1000000000, 0, ZoneOffset.MIN);
    }

    public Gigasecond(LocalDateTime moment) {
        long epochMoment = moment.toEpochSecond(ZoneOffset.MIN);
        this.gigasecondLater = LocalDateTime.ofEpochSecond(epochMoment+1000000000, 0, ZoneOffset.MIN);
    }

    public LocalDateTime getDateTime() {
        return this.gigasecondLater;
    }
}
