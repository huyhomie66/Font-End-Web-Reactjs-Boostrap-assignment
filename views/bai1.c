#include <stdio.h>
#include <stdlib.h>
int CheckArrplush();

struct c
{
  int a[3];
};

int main(int argc, char const *argv[])
{ 
  
  struct c *b;
  b = malloc(3 * sizeof(int));
  int z[]={1,2,3};
  for(int i = 0; i < 3; i++)
  {
    b->a[i] = z[i];
  }
  
  for(int i = 0; i < 3; i++)
  {
     printf("%d\n", b->a[i]);
  }

  
  printf("%d", CheckArrplush(b->a));
 
}
int CheckArrplush(int *iArray)
{

  int count = 0;

  for (int i = 0; i < 4; i++)
  {
    if (iArray[i] < iArray[i + 1])
    {
      count++;
    }
  }
  if (count == 3)
  {
    return 1;
  }

  return 0;
}