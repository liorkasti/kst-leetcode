
function App() {
  
  const solution=(blocks) => {
    let previousPeak = 0;
    let peakPosition = 0;
    let startPosition = 0;
    maxDistance = 0;
    for (let i = 1; i < blocks.length; i++) {
      if (blocks[i] > blocks[i - 1]) {
        peakPosition = i;
        const distance = peakPosition - startPosition + 1;
        maxDistance = Math.max(distance, maxDistance);
      } else if (blocks[i] === blocks[i - 1]) {
        peakPosition = i - 1;
        const distance = i - startPosition + 1;
        maxDistance = Math.max(distance, maxDistance);
      } else {
        previousPeak = peakPosition;
        startPosition = i;
      }
      const distanceBetwenPeaks = peakPosition - previousPeak + 1;
      maxDistance = Math.max(distanceBetwenPeaks, maxDistance);
    }

    return maxDistance;
  }

  const blocks = ['1,2,2,1'];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {solution(blocks)}
    </div>
  );
}