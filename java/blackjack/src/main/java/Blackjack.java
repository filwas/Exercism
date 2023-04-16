public class Blackjack {

    public int parseCard(String card) {
        int parsed;
        switch (card) {
            case "ace": parsed = 11; break;
            case "two": parsed = 2; break;
            case "three": parsed = 3; break;
            case "four": parsed = 4; break;
            case "five": parsed = 5; break;
            case "six": parsed = 6; break;
            case "seven": parsed = 7; break;
            case "eight": parsed = 8; break;
            case "nine": parsed = 9; break;
            case "ten": parsed = 10; break;
            case "jack": parsed = 10; break;
            case "queen": parsed = 10; break;
            case "king": parsed = 10; break;
            default: parsed = 0; break;
        }
        return parsed;
    }

    public boolean isBlackjack(String card1, String card2) {
        if (parseCard(card1) + parseCard(card2) == 21) {
            return true;
        } else return false;
    }


    //myInfo: The exercise is tricky. It tells you what to do when you have a pair of aces, while also giving you a method that doesn't tell you
    //        what cards you actually have. Good thing I noticed, that in this case largeHand() can only ever receive two numbers as it's first 
    //        argument: 21 and 22. The first one is a blackjack, the second one can only happen if you have a pair of aces.
    public String largeHand(boolean isBlackjack, int dealerScore) {
        if (isBlackjack == false) return "P";
        else if (dealerScore < 10) return "W";
        else return "S";
    }

    public String smallHand(int handScore, int dealerScore) {
        if (handScore >= 17) return "S";
        else if (handScore <= 11) return "H";
        else if (dealerScore >= 7) return "H";
        else return "S";
    }

    // FirstTurn returns the semi-optimal decision for the first turn, given the cards of the player and the dealer.
    // This function is already implemented and does not need to be edited. It pulls the other functions together in a
    // complete decision tree for the first turn.
    public String firstTurn(String card1, String card2, String dealerCard) {
        int handScore = parseCard(card1) + parseCard(card2);
        int dealerScore = parseCard(dealerCard);

        if (20 < handScore) {
            return largeHand(isBlackjack(card1, card2), dealerScore);
        } else {
            return smallHand(handScore, dealerScore);
        }
    }
}
