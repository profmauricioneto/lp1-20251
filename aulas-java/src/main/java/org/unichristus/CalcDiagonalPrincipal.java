package org.unichristus;

import java.util.*;

public class CalcDiagonalPrincipal {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int lines, cols;
        System.out.println("Digite a quantidade de linhas: ");
        lines = scan.nextInt();
        System.out.println("Digite a quantidade de Colunas: ");
        cols = scan.nextInt();

        int matriz[][] = new int[lines][cols];
        int diagonalPrincipal = 0;

        if (lines != cols) {
            System.out.println("Não é possível calcular diagonal principal em matrizes não quadraticas");
        } else {
            for (int i = 0; i < lines; i++) {
                for (int j = 0; j < cols; j++) {
                    System.out.printf("Matriz[%d][%d] = ", i, j);
                    matriz[i][j] = scan.nextInt();
                    if (i == j) {
                        diagonalPrincipal += matriz[i][j];
                    }
                }
            }
            System.out.println("Valor Diagonal Principal: " + diagonalPrincipal);
        }
    }
}
