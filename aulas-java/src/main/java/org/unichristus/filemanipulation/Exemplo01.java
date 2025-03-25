package org.unichristus.filemanipulation;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Exemplo01 {
    public static void main(String[] args) throws IOException {
        Scanner scan = new Scanner(System.in);
        String filename;
        System.out.println("Digite o nome do arquivo: ");
        filename = scan.next();

        try {
            File file = new File(filename.concat(".txt"));
            if (file.createNewFile()) {
                System.out.println("Arquivo criado com sucesso!");
            }
        } catch(IOException e) {
            System.out.println(e.getMessage());
        }
        System.out.print("Digite uma opção: ");
        int option = scan.nextInt();
        switch(option) {
            case 1: {
                try {
                    FileWriter objWriter = new FileWriter(filename.concat(".txt"), true);
                    System.out.print("Mensagem: ");
                    String message = scan.next();
                    objWriter.write("\n" + message);
                    objWriter.close();
                    System.out.println("Escrita em arquivo com sucesso.");
                } catch(IOException e) {
                    System.out.println(e.getMessage());
                }
                break;
            }
            case 2: {
                try {
                    File file = new File(filename.concat(".txt"));
                    Scanner scannerReader = new Scanner(file);
                    while(scannerReader.hasNextLine()) {
                        String line = scannerReader.nextLine();
                        System.out.println(line);
                    }
                } catch(FileNotFoundException e) {
                    System.err.println(e.getMessage());
                }
                break;
            }
            case 3: {
                File file = new File(filename.concat(".txt"));
                if(file.delete()) {
                    System.out.println("Arquivo foi deletado com sucesso!");
                } else {
                    System.err.println("Erro ao deletar arquivo!");
                }
                break;
            }
            default:
                System.out.println("Nenhuma opção escolhida.");
        }
    }
}
