class SqueakyClean {
    static String clean(String identifier) {

        int[] intArr = identifier.codePoints().toArray();
        StringBuilder tempo = new StringBuilder();
        int codePoint;
        String curr;

        for (int i = 0; i < intArr.length; i++) {
            codePoint = intArr[i];
            curr = Character.toString(codePoint);

            if (curr.matches("\\p{Cntrl}")) {
                curr = "CTRL";
            } else if (curr.matches("\\p{Space}")) {
                curr = "_";
            } else if (curr.matches("-")) {
                if (Character.toString(intArr[i+1]).matches("\\p{IsAlphabetic}")) {
                    i++;
                    curr = Character.toString(intArr[i]).toUpperCase();
                } else {
                    curr = "";
                }
            } else if (curr.matches("[^\\p{IsAlphabetic}]") || (curr.matches("\\p{InGreek}") && curr.matches("\\p{javaLowerCase}"))) {
                curr = "";
            } 


            tempo.append(curr);
        }

        return tempo.toString();
    }
}
