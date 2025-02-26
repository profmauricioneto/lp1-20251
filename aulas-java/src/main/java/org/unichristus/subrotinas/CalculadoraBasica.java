package org.unichristus.subrotinas;

import java.util.Scanner;

public class CalculadoraBasica {
    public static void menu() {
        System.out.println("---- MENU DA CALCULADORA DE BASICA ----");
        System.out.println("1 - Somar");
        System.out.println("2 - Subtrair");
        System.out.println("3 - Multiplicar");
        System.out.println("4 - Dividir");
    }

    public static double soma(double valor1, double valor2) {
        return valor1 + valor2;
    }

    public static double subtrair(double valor1, double valor2) {
        return valor1 - valor2;
    }

    public static double multiplicar(double valor1, double valor2) {
        return valor1 * valor2;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double valor1, valor2, resultado;
        int opcao;

        menu();
        opcao = scan.nextInt();

    }
}
