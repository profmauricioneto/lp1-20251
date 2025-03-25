package org.unichristus;

import java.util.Scanner;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double resultado = 0;
        System.out.print("Valor 1: ");
        double valor1 = scan.nextDouble();
        System.out.print("Valor 2: ");
        double valor2 = scan.nextDouble();

        try {
            resultado = valor1/valor2;
            System.out.println("Resultado: " + resultado);
        } catch (ArithmeticException e) {
            System.out.println(e.getMessage());
        }
        finally {
            System.out.println("Continuando mesmo com erro...");
        }
    }
}