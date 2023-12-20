

const fizzBuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) { console.log("FizzBuzz"); }
        else if (i % 3 == 0) console.log("Fizz");
        else if (i % 5 == 0) console.log("Buzz");
        else console.log(i)
    }
}

const fizzBuzz = (n) => {

    // ans list
    const ans = new List();

    for (let num = 1; num <= n; num++) {

      divisibleBy3 = (num % 3 == 0);
      divisibleBy5 = (num % 5 == 0);

        if (divisibleBy3 && divisibleBy5) {
            // Divides by both 3 and 5, add FizzBuzz
            ans.add("FizzBuzz");
        } else if (divisibleBy3) {
            // Divides by 3, add Fizz
            ans.add("Fizz");
        } else if (divisibleBy5) {
            // Divides by 5, add Buzz
            ans.add("Buzz");
        } else {
            // Not divisible by 3 or 5, add the number
            ans.add(Integer.toString(num));
        }
    }

    return ans;
}

