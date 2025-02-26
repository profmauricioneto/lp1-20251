package org.unichristus.subrotinas;

import java.util.Locale;
import java.util.Scanner;

public class CalcIMCPesoIdeal {

    public static double calculoIMC(double pesoAtual, double altura) {
        if (pesoAtual <= 0 || altura <= 0) {
            System.err.println("Altura e/ou pesoIdeal devem ter valores acima de 0.");
            return 0;
        }
        return pesoAtual/ (altura * altura);

    }

    public static double calculoPesoIdeal(String genero, double altura) {
        genero = genero.toLowerCase();
        if (genero.equals("masculino") || genero.contains("masc")) {
            return (72.7*altura - 58);
        } else if (genero.equals("feminino") || genero.contains("fem")) {
            return (62.1*altura - 44.7);
        } else {
            System.out.println("Genero Invalido.");
            return 0;
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double pesoAtual, altura, imc, pesoIdeal;
        String genero;

        System.out.print("Digite o peso atual: ");
        pesoAtual = scan.nextDouble();
        System.out.print("Digite a altura: ");
        altura = scan.nextDouble();

        imc = calculoIMC(pesoAtual, altura);
        if (imc == 0) {
            System.err.println("Erro no calculo do IMC.");
            return;
        } else {
            System.out.println("IMC: " + imc);
        }

        System.out.print("Genero(Masculino/Feminino): ");
        genero = scan.next();
        pesoIdeal = calculoPesoIdeal(genero, altura);
        if(pesoIdeal == 0) {
            System.err.println("Error no Calculo do Peso Ideal");
            return;
        } else {
            System.out.println("Peso Ideal: " + pesoIdeal);
        }
    }
}
