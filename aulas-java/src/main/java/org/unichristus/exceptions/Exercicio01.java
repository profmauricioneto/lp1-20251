package org.unichristus.exceptions;

public class Exercicio01 {
    public static void primeiroMetodo() {
        System.out.println("Iniciando metodo 1");
        try {
            segundoMetodo();
        } catch(ArrayIndexOutOfBoundsException e) {
            System.out.println(e.getMessage());
        }
        System.out.println("Fim do metodo 1");
    }

    public static void segundoMetodo() throws ArrayIndexOutOfBoundsException {
        System.out.println("Iniciando metodo 2");
        double v[] = new double[5];
        try {
            for (int i = 0; i < 10; i++) {
                v[i] = i;
                System.out.println(i);
            }
        } catch(ArrayIndexOutOfBoundsException e) {
            throw new ArrayIndexOutOfBoundsException();
        }

        System.out.println("Fim metodo 2");
    }

    public static void main(String[] args) {
        System.out.println("Iniciando a main.");
        primeiroMetodo();
        System.out.println("Fim da main");
    }
}
