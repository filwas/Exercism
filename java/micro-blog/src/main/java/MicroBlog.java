class MicroBlog {
    public String truncate(String input) {        
        String retString = "";
        
        int[] intArr = input.codePoints().toArray();
        int trueLen = intArr.length < 5 ? intArr.length : 5;

        for (int i = 0; i < trueLen; i++) {

            int curr = intArr[i];
            retString += Character.toString(curr);
        }

        return retString;
    }
}