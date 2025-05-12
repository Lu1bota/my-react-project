import { useState } from 'react';

interface ClickCounterProps {
  value: number;
  onUpdate: () => void;
}

export default function ClickCounter({ value, onUpdate }: ClickCounterProps) {
  return <button onClick={onUpdate}>Current: {value}</button>;
}
