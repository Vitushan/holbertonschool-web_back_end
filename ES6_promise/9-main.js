import guardrail from './9-try';
import divideFunction from './8-try';

console.log(guardrail(() => divideFunction(10, 2))); // Doit afficher [5, "Guardrail was processed"]
console.log(guardrail(() => divideFunction(10, 0))); // Doit afficher ["Error: cannot divide by 0", "Guardrail was processed"]
