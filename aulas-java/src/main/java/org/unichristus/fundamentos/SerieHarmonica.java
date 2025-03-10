package org.unichristus.fundamentos;

import java.util.Scanner;

public class SerieHarmonica {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n;
        double serieHarmonica = 0;
        System.out.print("Quantidade de Termos da Serie: ");
        n = scan.nextInt();

        for(int i = 1; i <= n; i++) {
            serieHarmonica = serieHarmonica + (double)1/i;
        }
        System.out.println("Valor da Serie Harmonica: " + serieHarmonica);
    }
}
