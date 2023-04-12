import java.io.Console;
import java.lang.System.Logger;

public class LogLevels {
    
    public static String message(String logLine) {
        String message = logLine.split(": ")[1].toString().trim();
        return message;
                
    }

    public static String logLevel(String logLine) {
        String[] halves = logLine.split(":");
        String level = halves[0].replace("[", "").replace("]", "").toLowerCase();
        return level;
    }

    public static String reformat(String logLine) {
        String first = LogLevels.message(logLine);
        String second = LogLevels.logLevel(logLine);

        return first + " (" + second + ")";
    }
}
