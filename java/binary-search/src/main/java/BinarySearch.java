import java.util.ArrayList;
import java.util.List;

class BinarySearch {
    private List inputList = new ArrayList<>();

    public <T> BinarySearch(List<T> searchList){
        this.inputList = searchList;
    }

    public int indexOf(Integer n) throws ValueNotFoundException{
        int tempIndex = 0;
        List list = this.inputList;
        int size = list.size();
        if (size == 0 || (int) list.get(0) > n || (int) list.get(size-1) < n) {
            throw new ValueNotFoundException("Value not in array");
        }
        int middle = (int) Math.ceil((size/2));
        if ((Integer) list.get(middle) > n) {
            tempIndex += new BinarySearch(list.subList(0, middle)).indexOf(n);
        } else if((Integer) list.get(middle) < n) {
            tempIndex += middle + new BinarySearch(list.subList(middle, size)).indexOf(n);
        } else {
            tempIndex += middle;
        }
        return tempIndex;
    }
    

}
