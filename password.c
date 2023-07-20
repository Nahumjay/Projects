#include <stdio.h>
// this program creates a file and stores different Passwords into that file
int main() {
    char gmailPassword[50], HBOpassword[50], NextflixPassword[50], phonePassword[50];
    
    FILE *storeDataFile = fopen("data.txt", "w");

    // if the file is equal to NULL then there was an error
    if (storeDataFile == NULL) {
        printf("File was not created succesfully: ");
        return 1;
    }
    // storing the different passwords 
    printf("Enter your google Password and HBO Password: ");
    scanf("%s %s", gmailPassword, HBOpassword);
    fprintf(storeDataFile, "Gmail Password: %s\nHBO Password: %s\n",gmailPassword, HBOpassword);

    printf("Enter your Netflix Password and phone Password: ");
    scanf("%s %s", NextflixPassword, phonePassword);
    fprintf(storeDataFile, "Netflix Password: %s\nphonePassword: %s", NextflixPassword, phonePassword);

    
    fclose(storeDataFile);
    printf("The file was opened successfully. ");
    return 0;

    
    



}