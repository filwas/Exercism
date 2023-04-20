public class Hamming {
    private int hammingDistance;

    public Hamming(String leftStrand, String rightStrand) throws IllegalArgumentException{
        char[] leftChars = leftStrand.toCharArray();
        char[] rightChars = rightStrand.toCharArray();
        int leftLen = leftChars.length;
        int rightLen = rightChars.length;

        if (leftLen != rightLen) {
            if (leftLen == 0) {
                throw new IllegalArgumentException("left strand must not be empty.");
            } else if (rightLen == 0){
                throw new IllegalArgumentException("right strand must not be empty.");
            } else {
                throw new IllegalArgumentException("leftStrand and rightStrand must be of equal length.");
            }
        }

        for (int i = 0; i < leftLen; i++) {
            if (leftChars[i] != rightChars[i]) {
                this.hammingDistance ++;
            }
        }
    }

    public int getHammingDistance() {
        return this.hammingDistance;
    }
}
