import java.util.HashMap;
import java.util.Map;

class WordCount {
    public Map<String, Integer> phrase(String input) {
        input = input.replaceAll("[\\p{Punct}&&[^']]", " ")    // first Regex removes all punctuation except the ' sign
                     .replaceAll("\\b'\\s|\\s'\\b|'$|^'", " ") // second Regex removes all the ' signs that are not a part of a word
                     .replaceAll("\\s+", " ")                  // third regex removes all of the excess whitespaces
                     .trim();                                                    //removes any leading and trailing whitespaces
        String[] inpArr = input.split(" ");
        Map retMap = new HashMap<>();
        for (String word : inpArr) {
            word = word.toLowerCase();
            if (retMap.get(word) == null) {
                retMap.put(word, 1);
            } else {
                retMap.put(word, (int) retMap.get(word) + 1);
            }
        }
        return retMap;
    }
}
