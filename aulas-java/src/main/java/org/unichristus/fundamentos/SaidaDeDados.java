package org.unichristus.fundamentos;

public class SaidaDeDados {
    public static void main(String[] args) {
        String name = "Mauricio Neto";
        int age = 35;
        boolean isProfessor = true;

        System.out.print("Nome: " + name + "\n");
        System.out.println("Idade: " + age);
        System.out.println("É professor? " + isProfessor);
        System.out.printf("Idade: %d", age);
    }
}
