# Type Mismatch in Function Call

This repository demonstrates a common TypeScript error involving type mismatches in function calls.  The `add` function expects two numbers as input, but the code attempts to pass a string and a number. TypeScript's type system correctly identifies and flags this as an error.  The solution demonstrates how to correct the type mismatch using type guards or input validation.

## Setup

1. Clone the repository.
2. Install dependencies (if any).
3. Compile and run the code (tsc bug.ts && node bug.js, tsc bugSolution.ts && node bugSolution.js).