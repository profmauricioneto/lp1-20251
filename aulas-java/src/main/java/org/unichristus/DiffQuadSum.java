package org.unichristus;

public class DiffQuadSum {
    public static void main(String[] args) {
        int somaQuadrados = 0, quadradoSoma = 0;
        int i = 0;

//        while(i <= 10) {
//            somaQuadrados = somaQuadrados + i*i;
//            quadradoSoma = quadradoSoma + i;
//            i++;
//        }
        do {
            somaQuadrados = somaQuadrados + i*i;
            quadradoSoma = quadradoSoma + i;
            i++;
        } while (i <= 10);

        System.out.println("Soma dos Quadrados = " + somaQuadrados);
        quadradoSoma = quadradoSoma * quadradoSoma;
        System.out.println("Quadrado da Soma = " + quadradoSoma);
        int diff = quadradoSoma - somaQuadrados;
        System.out.println("A diferença é " + diff);
    }
}
