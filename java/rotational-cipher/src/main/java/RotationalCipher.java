import java.util.stream.IntStream;

class RotationalCipher {
    int shift;

    RotationalCipher(int shiftKey) {
        shift = shiftKey;
    }

    String rotate(String data) {
        StringBuilder rotatedString = new StringBuilder();

        char[] chars = data.toCharArray();

        for (int i = 0; i < chars.length; i++) {
            int n = Character.codePointAt(chars, i);

            if (Character.isUpperCase(n)) {
                n = n + shift > 90 ? n + shift - 26 : n+shift;
            } else if (Character.isLowerCase(n)) {
                n = n + shift > 122 ? n + shift - 26 : n + shift;
            }

            rotatedString.append(Character.toString(n));

        }

        return rotatedString.toString();
    }

}
