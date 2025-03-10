package org.unichristus.fundamentos;

import java.util.Scanner;

public class EntradaDeDados {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        String nome;
        int idade;

        System.out.print("Digite o nome do usuario: ");
        nome = input.nextLine();
        System.out.print("Digite a sua idade: ");
        idade = input.nextInt();

        System.out.println("Nome do usuario: " + nome);
        System.out.println("Idade o usuario  : " + idade);
    }
}
