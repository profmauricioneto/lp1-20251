package org.unichristus.subrotinas;

import java.util.Scanner;

public class CalcFibonacci {

    public static void fibonacci(int n) {
        int a = 0;
        int b = 1;
        int aux;
        if (n == 1) {
            System.out.println(a);
        } else if (n == 2) {
            System.out.println(a);
            System.out.println(b);
        } else {
            System.out.println(a);
            System.out.println(b);
            for (int i = 3; i <= n; i++) {
                aux = a + b;
                System.out.println(aux);
                a = b;
                b = aux;
            }
        }
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int termos;
        System.out.print("Quantidade de termos de Fibonacci: ");
        termos = scan.nextInt();
        fibonacci(termos);
    }
}
