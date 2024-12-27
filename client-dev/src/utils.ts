export const randomDelay = () => {
  const steps = [5, 10, 15, 20, 25]; // Steps in seconds
  const randomStep = steps[Math.floor(Math.random() * steps.length)];
  return randomStep * 1000; // Convert to milliseconds
};
