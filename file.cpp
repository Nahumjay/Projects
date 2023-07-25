#include <iostream> 
#include <fstream>
#include <string>
#include <climits>

int main() {
    // setting variables and creating file
    std::string theFile;
    std::string theMessage;
    std:: cout << "Enter a file name: " << std:: endl;
    std:: cin >> theFile; // whatever name that was entered is file name
    std:: ofstream fin(theFile);
    
     
    if(fin.is_open()) {
        std::cin.ignore(INT_MAX,'\n'); 
        std:: cout << "Enter a message: " << std:: endl;
        std::getline(std::cin, theMessage); // accessing the message written and transfering to theMessage
        fin << theMessage << std:: endl; //message then entered into file
        fin.close();
        std:: cout << "The message was written succesfully:" << std::endl;
    }

   
    else {
        std:: cout << "The file was was not written to succesfully: " << std::endl;
    }


 }