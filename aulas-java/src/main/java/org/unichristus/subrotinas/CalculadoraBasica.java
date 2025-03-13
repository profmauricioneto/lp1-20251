package org.unichristus.subrotinas;

import java.util.Scanner;

public class CalculadoraBasica {
    public static int menu() {
        Scanner scan = new Scanner(System.in);
        System.out.println("---- MENU DA CALCULADORA DE BASICA ----");
        System.out.println("1 - Somar");
        System.out.println("2 - Subtrair");
        System.out.println("3 - Multiplicar");
        System.out.println("4 - Dividir");
        System.out.println("5 - Sair");
        System.out.print("Opção: ");
        return scan.nextInt();
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

    public static double dividir(double valor1, double valor2) {
        if (valor2 == 0) {
            System.err.println("Divisão por zero");
            return 0;
        }
        return valor1/valor2;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int opcao;
        do {
            opcao = menu();
            if (opcao == 5) {
                System.out.println("Saindo da Aplicação.");
                System.exit(0);
            }
            System.out.print("Digite o primeiro valor: ");
            double valor1 = scan.nextDouble();
            System.out.print("Digite o segundo valor: ");
            double valor2 = scan.nextDouble();

            switch(opcao) {
                case 1: {
                    System.out.println("Resultado: " + soma(valor1, valor2));
                    break;
                }
                case 2: {
                    System.out.println("Resultado: " + subtrair(valor1, valor2));
                    break;
                }
                case 3: {
                    System.out.println("Resultado: " + multiplicar(valor1, valor2));
                    break;
                }
                case 4: {
                    System.out.println("Resultado: " + dividir(valor1, valor2));
                    break;
                }
                default:
                    System.out.println("Opção Incorreta.");
            }
        } while(opcao != 5);
    }
}
