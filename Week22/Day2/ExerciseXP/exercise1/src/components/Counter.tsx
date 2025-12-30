import { useState } from 'react';

type LastAction = 'increment' | 'decrement' | 'reset' | null;

function Counter() {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<LastAction>(null);

  const increment = () => {
    setCount((prev) => prev + 1);
    setLastAction('increment');
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
    setLastAction('decrement');
  };

  const reset = () => {
    setCount(0);
    setLastAction('reset');
  };

  return (
    <section style={{ padding: 12, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Counter</h2>

      <div style={{ fontSize: 24, marginBottom: 8 }}>
        Count: <strong>{count}</strong>
      </div>

      <div style={{ marginBottom: 12 }}>
        Last action:{' '}
        <strong>{lastAction ?? 'none yet'}</strong>
      </div>

      <div style={{ display: 'flex', gap: 8 }}>
        <button type="button" onClick={decrement}>
          - Decrement
        </button>
        <button type="button" onClick={increment}>
          + Increment
        </button>
        <button type="button" onClick={reset}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default Counter;