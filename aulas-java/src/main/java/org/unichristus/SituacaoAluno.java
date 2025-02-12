package org.unichristus;

import java.util.Scanner;

public class SituacaoAluno {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double nota1, nota2, media;

        // entrada de dados
        System.out.print("Nota 1: ");
        nota1 = scan.nextDouble();

        System.out.print("Nota 2: ");
        nota2 = scan.nextDouble();

        media = (nota1 + nota2)/2;
        System.out.print("Media: " + media);

        // situação do aluno
        if (media >= 7.0) {
            System.out.println("Aprovado! Vai timbora!");
        } else {
            if(media < 4.0) {
                System.out.println("Reprovado! Até mais tarde!");
            } else {
                System.out.println("Final! Fica mais um pouco...");
            }
        }



    }
}
