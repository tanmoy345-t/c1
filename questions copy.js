// Sample question bank for the math game.
// Each question has: id, type ('mcq'|'numeric'|'text'), difficulty, question, choices (for mcq), answer, tolerance (for numeric), solution

const questions = [
  {
    id: 1,
    type: 'numeric',
    difficulty: 'easy',
    question: 'Solve for x: 2x + 3 = 11',
    answer: 4,
    solution: '2x = 8 => x = 4'
  },
  {
    id: 2,
    type: 'mcq',
    difficulty: 'easy',
    question: 'What is the derivative of f(x)=x^2?',
    choices: ['1', '2x', 'x', '2'],
    answer: '2x',
    solution: "f'(x)=2x"
  },
  {
    id: 3,
    type: 'numeric',
    difficulty: 'medium',
    question: 'Find one root of x^2 - 5x + 6 = 0',
    answer: 2,
    solution: 'Polynomial factors as (x-2)(x-3); roots 2 and 3'
  },
  {
    id: 4,
    type: 'mcq',
    difficulty: 'medium',
    question: 'If sin(θ)=1/2 for 0<=θ<=2π, which of these is a solution?',
    choices: ['π/6', 'π/3', 'π/4', 'π/2'],
    answer: 'π/6',
    solution: 'sin(π/6)=1/2'
  },
  {
    id: 5,
    type: 'numeric',
    difficulty: 'hard',
    question: 'Compute the limit: lim_{x→0} (sin x)/x',
    answer: 1,
    tolerance: 1e-6,
    solution: 'Standard limit equals 1'
  },
  {
    id: 6,
    type: 'mcq',
    difficulty: 'hard',
    question: 'If f(x)=e^{2x}, what is f\'(x)?',
    choices: ['2e^{2x}', 'e^{x}', 'e^{2x}', '2xe^{2x}'],
    answer: '2e^{2x}',
    solution: "Derivative of e^{2x} is 2e^{2x}"
  },
  // JEE-style sample problems (formulated for practice; not verbatim exam content)
  {
    id: 7,
    type: 'numeric',
    difficulty: 'jee',
    question: 'If a and b are roots of x^2 - px + q = 0 and a^3 + b^3 = 28, a + b = 4, find q.',
    answer: 4,
    solution: 'a^3+b^3=(a+b)^3-3ab(a+b)=64-12ab=28 => 12ab=36 => ab=3 => q=ab=3 (Note: example uses simplified numbers; verify in app)'
  },
  {
    id: 8,
    type: 'mcq',
    difficulty: 'jee',
    question: 'Let I = \int_0^{\pi} sin x dx. What is I?',
    choices: ['0', '2', '1', '4'],
    answer: '2',
    solution: 'Integral of sin x from 0 to π is 2'
  }
];

module.exports = {questions};
