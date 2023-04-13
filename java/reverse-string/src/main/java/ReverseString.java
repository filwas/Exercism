class ReverseString {

    String reverse(String inputString) {
        
        char[] charArr = inputString.toCharArray();
        int charLen = charArr.length;
        String[] retArr = new String[charLen];

        for (char c : charArr) {
            charLen--;
            retArr[charLen] = ""+c;
        }
        String retString = String.join("", retArr);
        return retString;
    }

}
