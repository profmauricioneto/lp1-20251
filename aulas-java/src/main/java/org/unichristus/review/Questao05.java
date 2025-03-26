package org.unichristus.review;

import java.util.Scanner;

public class Questao05 {
    public static int calculateMatrix(int lines, int columns, Scanner scan) {
        scan = new Scanner(System.in);
        int summation = 0;
        if (lines == columns) {
            int matrix[][] = new int[lines][columns];

            for (int i = 0; i < lines; i++) {
                for (int j = 0; j < columns; j++) {
                    System.out.printf("Matrix[%d][%d] = ", i, j);
                    matrix[i][j] = scan.nextInt();
                    if (j > i) {
                        summation = summation + matrix[i][j];
                    }
                }
            }
        } else {
            System.out.println("Matrix not squared!");
            return 0;
        }
        scan.close();
        return summation;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int lines, columns, sum;
        System.out.print("Lines: ");
        lines = scan.nextInt();
        System.out.print("Columns: ");
        columns = scan.nextInt();
        sum = calculateMatrix(lines, columns, scan);
        System.out.println("Summation of matrix elements uppon main diagonal is: " + sum);
    }
}
