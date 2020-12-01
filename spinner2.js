process.stdout.write("hello from spinner1.js... \rheyyy\n");
let spinString = "|/-\\|/-\\|/-\\|\n"
let timer = 100;
const spinner = function(spinString) {
  for (let char of spinString) {
    setTimeout(() => {
      char = "\r" + char;
      process.stdout.write(char);
    }, timer);
    timer += 100;
  }
  };

  spinner(spinString);
