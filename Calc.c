#include <stdio.h>
// using switch statements to create a calcultor
int main() {
int choice;
printf("Enter a choice: ");
scanf("%d", &choice);


 
switch (choice)
{
    
    case 1: {
        int x, y;
        printf("Enter x and y: ");
        scanf("%d %d", &x, &y);
        printf("This is the addition case: %d ", x + y);
    break;

    }
       
    
    case 2: {
        int x, y;
        printf("Enter x and y: ");
        scanf("%d %d", &x, &y);
        printf("This is the division case: %d ", x/y);
    break;
        
    } 
       
    case 3: {
        int x, y;
        printf("Enter x and y: ");
        scanf("%d %d", &x, &y);
        printf("This is the mutiplication case: %d ", x*y);
    break;
    
    case 4: {
        int x, y;
        printf("Enter x and y: ");
        scanf("%d %d", &x, &y);
        printf("This is the subtraction case: %d ", x-y);
    break;


    }
        
    default:
        printf("Invalid number ");
        break;
    
    }

    return 0;

    }

}

