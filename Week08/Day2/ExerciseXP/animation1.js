document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('container');
  const clearBtn = document.getElementById('clear'); // <-- matches your HTML

  // Part I
  setTimeout(() => {
    alert('Hello World');
  }, 2000);

  // Part II
  setTimeout(() => {
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    container.appendChild(p);
  }, 2000);

  // Part III
  const intervalId = setInterval(() => {
    const pCount = container.querySelectorAll('p').length;
    if (pCount >= 5) {
      clearInterval(intervalId);
      return;
    }
    const p = document.createElement('p');
    p.textContent = 'Hello World';
    container.appendChild(p);
  }, 2000);

  // Clear on button click
  clearBtn.addEventListener('click', (e) => {
    e.preventDefault();          
    clearInterval(intervalId);
    clearBtn.disabled = true;    // optional feedback
    console.log('Interval cleared by button');
  });
});
