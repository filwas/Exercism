class Matrix {
    String[] rows;

    Matrix(String matrixAsString) {
        rows = matrixAsString.split("\n");
    }

    int[] getRow(int rowNumber) {
        String[] chosenRow = this.rows[rowNumber-1].split(" ");
        int n = chosenRow.length;   
        int[] finalRow = new int[n];
        for (int i = 0; i < n; i++) {
            finalRow[i] = Integer.parseInt(chosenRow[i]);
        }
        return finalRow;
    }

    int[] getColumn(int columnNumber) {
        int n = this.rows.length;
        int[] finalCol = new int[n];
        for (int i = 0; i < n; i++) {
            String[] currentRow = this.rows[i].split(" ");
            finalCol[i] = Integer.parseInt(currentRow[columnNumber-1]);
        }
        return finalCol;
    }
}
