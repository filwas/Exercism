class Triangle {
    double a, b, c;
    Triangle(double side1, double side2, double side3) throws TriangleException {
        a = side1;
        b = side2;
        c = side3;

        if (a == 0 || b == 0 || c == 0 || c > a+b || a > c+b || b > a+c) throw new TriangleException();
    }

    boolean isEquilateral() {
        return this.a == this.b && this.a == this.c;
    }

    boolean isIsosceles() {
        return this.a == this.b || this.a == this.c || this.b == this.c;
    }

    boolean isScalene() {
        return this.a != this.b && this.a != this.c && this.b != this.c;
    }

}
