import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.function.Predicate;

public class Robot {
    private String name;
    private static List<String> usedNames = new ArrayList<>();

    public String getName(){
        String probName = new String();
        if (this.name == null) {
            do {
                probName = Robot.generateName();
            } while (usedNames.contains(probName));
            Robot.usedNames.add(probName);
            this.name = probName;
        }
        return this.name;
    }

    public void reset(){
        this.name = null;
    }

    private static char randomChar(){
        return Character.toUpperCase((char)(new Random().nextInt(26) + 'a'));
    }

    private static int randomDigit(){
        return new Random().nextInt(9);
    }

    public static String generateName(){
        StringBuilder retName = new StringBuilder();
        retName.append(randomChar()).append(randomChar()).append(randomDigit()).append(randomDigit()).append(randomDigit());
        return retName.toString();
    }
}