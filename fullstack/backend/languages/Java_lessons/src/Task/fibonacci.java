package Task;

public class fibonacci {
	 public static void main(String[] args) {
	        int n = 10;

	        System.out.println("Fibonacci series up to " + n + " terms:");
	        for (int i = 0; i < n; i++) {
	            System.out.print(fibonacciRecursive(i) + " ");
	        }
	    }

	    public static int fibonacciRecursive(int n) {
	        if (n <= 1) {
	            return n;
	        } else {
	            return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
	        }
	    }
}
