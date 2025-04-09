package org.unichristus.review;

import java.util.Scanner;

public class QuestaoAlunoProva {
    public static void calcularMediaAlunos() {
        Scanner scan = new Scanner(System.in);
        double notas[] = new double[3];
        double media = 0;
        for (int i = 0; i < notas.length; i++) {
            System.out.printf("Nota NP%d = ", i+1);
            notas[i] = scan.nextDouble();
            media += notas[i];
        }
        media = media/ notas.length;
        System.out.println("Media = " + media);
    }

    public static void main(String[] args) {
        for (int i = 0; i < 3; i++) {
            System.out.println("Aluno " + (i+1));
            calcularMediaAlunos();
        }
    }
}
