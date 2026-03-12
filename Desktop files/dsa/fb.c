#include<stdio.h>
int Fib(int N)
{
	if(N == 1 || N == 2)
	return 1;
	else
	return Fib(N-1) + Fib(N-2);
}

int main(){
	int i, N;
	printf("No of terms:");
	scanf("%d", &N);
	printf("Fibonacci Series is:");
	for(i = 1; i <= N; i++)
	{
		printf("%d\t", Fib(i));
	}
	return 0;
}

