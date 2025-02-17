package org.unichristus;

import java.util.Scanner;

public class CalculoPesoIdeal {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        double altura, pesoIdeal = 0;
        String genero;

        System.out.print("Digite o valor da sua altura: ");
        altura = input.nextDouble();
        System.out.print("Digite seu Genero (Masculino/Feminino): ");
        genero = input.next();
        genero = genero.toLowerCase();

        // primeira forma - switch-case
//        switch(genero) {
//            case "masculino":
//                pesoIdeal = (altura * 72.7) - 58;
//                break;
//
//            case "feminino":
//                pesoIdeal = (altura * 62.1) - 44.7;
//                break;
//
//            default:
//                System.out.println("Genero Incorreto");
//        }

        // if-else-if
        if (genero.equals("masculino")) {
            pesoIdeal = (altura * 72.7) - 58;
        } else if (genero.equals("feminino")) {
            pesoIdeal = (altura * 62.1) - 44.7;
        } else {
            System.out.println("Genero Invalido!");
        }

        if (pesoIdeal == 0) {
            System.out.println("Houve um erro ao calcular peso ideal");
        } else {
            System.out.println("Peso Ideal = " + pesoIdeal);
        }
    }
}
