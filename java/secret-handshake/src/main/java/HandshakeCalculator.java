import java.net.SocketTimeoutException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

class HandshakeCalculator {

    List<Signal> calculateHandshake(int number) {
        System.out.println(number);
        List<Signal> retList = new ArrayList<>();
            

        String binaryString = Integer.toBinaryString(number);

        
        if (number == 0) {
            binaryString = "00000";
        } else if (number == 1) {
            binaryString = "0000" + binaryString;
        } else if (number < 4) {
            binaryString = "000" + binaryString;
        } else if (number < 8) {
            binaryString = "00" + binaryString;
        } else if (number < 16) {
            binaryString = "0" + binaryString;
        }

        binaryString = binaryString.substring(binaryString.length()-5);

        System.out.println(binaryString);


        char[] binaryArray = binaryString.toCharArray();
        boolean reverse = binaryArray[0] == '1' ? false : true;
        binaryArray = Arrays.copyOfRange(binaryArray, 1, 5);

        char[] tempArr = new char[4];
        for (int i = 0; i < 4; i++) {
            tempArr[i] = binaryArray[3-i];
        }
        binaryArray = tempArr;

        System.out.println(Arrays.toString(binaryArray));

        for (int i = 0; i < 4; i++) {
            if (binaryArray[i] == '1') {
                switch (i) {
                    case 0:
                        retList.add(0, Signal.WINK);
                        break;
                    case 1:
                        retList.add(0, Signal.DOUBLE_BLINK);
                        break;
                    case 2:
                        retList.add(0, Signal.CLOSE_YOUR_EYES);
                        break;
                    case 3:
                        retList.add(0, Signal.JUMP);
                        break;

                }
            }
        }

        if (reverse) {
            Collections.reverse(retList);
        }

        System.out.println(retList);
        return retList;
    }


}
