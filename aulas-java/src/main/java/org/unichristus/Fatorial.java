package org.unichristus;

import java.util.Scanner;

public class Fatorial {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int fatorial = 1;
        int termos;
        System.out.println("Digite um número: ");
        termos = scan.nextInt();

        for(int i = 1; i <= termos; i++) {
            fatorial = fatorial * i;
        }

        System.out.println("O fatorial é: " + fatorial);
    }
}
