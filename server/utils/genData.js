function generateRandomHealthData() {
  const heartRate = Math.floor(Math.random() * (100 - 60 + 1)) + 60;
  const bloodPressure = `${Math.floor(Math.random() * (140 - 90 + 1)) + 90}/${
    Math.floor(Math.random() * (90 - 60 + 1)) + 60
  }`;
  const options = ["Good", "Average", "Poor"];
  const sleepQuality = options[Math.floor(Math.random() * options.length)];
  const oxygenLevel = Math.floor(Math.random() * (100 - 90 + 1)) + 90;
  const stressLevel = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  const temperature = (Math.random() * (99.5 - 95.0) + 95.0).toFixed(1);
  const totalDailySteps = Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000;
  const activeMinutes = Math.floor(Math.random() * (300 - 30 + 1)) + 30;
  const caloriesBurnt = Math.floor(Math.random() * (4000 - 1500 + 1)) + 1500;

  const healthData = {
    heart_rate: heartRate,
    blood_pressure: bloodPressure,
    oxygen_level: oxygenLevel,
    sleep_quality: sleepQuality,
    temperature: temperature,
    stress_level: stressLevel,
    total_daily_steps: totalDailySteps,
    active_minutes: activeMinutes,
    calories_burnt: caloriesBurnt,
  };

  return healthData;
}

export default generateRandomHealthData;
