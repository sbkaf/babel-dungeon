function padZero(num: number): string | number {
  return num < 10 ? "0" + num : num;
}

export function formatTime(millis: number): string {
  const totalSeconds = Math.abs(millis / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = Math.floor(totalSeconds % 60);

  // Format the time parts using the custom padZero function
  const formattedMinutes = padZero(minutes);
  const formattedSeconds = padZero(seconds);

  // Conditionally include hours
  if (hours > 0) {
    return padZero(hours) + ":" + formattedMinutes + ":" + formattedSeconds;
  } else {
    return formattedMinutes + ":" + formattedSeconds;
  }
}
