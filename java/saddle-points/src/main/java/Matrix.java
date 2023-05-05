import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class Matrix {
    private List<List<Integer>> matrix;

    Matrix(List<List<Integer>> values) {
        this.matrix = values;
    }

    Set<MatrixCoordinate> getSaddlePoints() {
        int x = this.matrix.size();
        if (x == 0) return new HashSet<>();
        int y = this.matrix.get(0).size();

        Set<MatrixCoordinate> retSet = new HashSet<>();

        for (int i = 0; i < x; i++) {
            List<Integer> rowList = this.matrix.get(i);

            Integer[] row = rowList.toArray(new Integer[y]);
            Arrays.sort(row, Collections.reverseOrder());


            for (int j = 0; j < y; j++) {
                Integer current = rowList.get(j);

                if (current == row[0]) {
                    List<Integer> colList = new ArrayList();

                    for (int i2 = 0; i2 < x; i2++) {
                        colList.add(i2, this.matrix.get(i2).get(j));
                    }
                    Integer[] column = colList.toArray(new Integer[x]);
                    Arrays.sort(column);

                    if (current == column[0]) {
                        retSet.add(new MatrixCoordinate(i+1, j+1));
                    }

                }
            }
        }

        return retSet;
    }
}
