#include <iostream> 
#include <fstream>
#include <string>
// copying passwords from my C program to a C++ program
int main() {
    std::ifstream inputFile("data.txt"); // reading a file 
    std::ofstream outputFile("example.txt"); // writing to a file

    if(outputFile.is_open() && inputFile.is_open()) { 
        std::string line;
        while (std::getline(inputFile, line)) { // storing all the characters fromp inputFile to variable line since it is a string
            outputFile << line << std::endl;
            
        }

        inputFile.close();
        outputFile.close();

        std:: cout << "The file was copied succesfully" << std:: endl;
    }

       
    

    else {
        std:: cout << "The file was not open successfully" << std:: endl;
    }


}
    
   
    
