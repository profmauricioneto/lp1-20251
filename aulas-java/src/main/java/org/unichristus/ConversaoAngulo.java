package org.unichristus;

import java.util.Scanner;

public class ConversaoAngulo {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double graus, radiano;
        final double PI = 3.1415f;
        // entrada de dados
        System.out.print("Digite o angulo em Graus: ");
        graus = input.nextDouble();
        // processamento
        radiano = graus * PI /180.0;
        // saidad de dados
        System.out.printf("Angulo em Radiano: %.2f \n" , radiano);
        System.out.println("Angulo em Radiano: " + radiano);

    }
}
