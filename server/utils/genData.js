function generateRandomHealthData() {
  const heartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
  const bloodPressure = `${Math.floor(Math.random() * (140 - 90 + 1)) + 90}/${
    Math.floor(Math.random() * (90 - 60 + 1)) + 60
  }`;
  // const sleepQuality = Math.random() > 0.5 ? 'Good' : 'Poor';
  const options = ["Good", "Average", "Poor"];
  const sleepQuality = options[Math.floor(Math.random() * options.length)];

  const oxygenLevel = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
  const stressLevel = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const temperature = (Math.random() * (99.5 - 95.0) + 95.0).toFixed(1);

  const healthData = {
    heart_rate: heartRate,
    bloodpressure: bloodPressure,
    oxygen_level: oxygenLevel,
    sleep_quality: sleepQuality,
    temperature: temperature,
    stress_level: stressLevel,
  };

  return healthData;
}

export default generateRandomHealthData;
