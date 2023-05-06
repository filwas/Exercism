import java.util.ArrayList;
import java.util.List;
public class Flattener{
    public <T> List<T> flatten(List<T> inputList) {
        List<T> retList = new ArrayList<>(); 
        for (T element : inputList) {   
            if (element instanceof List) retList.addAll(this.flatten((List) element));
            else if (element == null) {}
            else retList.add(element);
        }
        return retList;
    }
}