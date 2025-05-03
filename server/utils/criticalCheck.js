// export default function evaluateHealth(data) {
//     const weights = {
//       heart_rate:     0.20,
//       blood_pressure: 0.25,
//       oxygen_level:   0.20,
//       temperature:    0.15,
//       sleep_quality:  0.10,
//       stress_level:   0.10,
//     };
  
//     const scorers = {
//       heart_rate: hr => hr < 50 || hr > 120 ? 1 : hr < 60 || hr > 100 ? 0.5 : 0,
  
//       blood_pressure: bp => {
//         const [s, d] = (bp ?? "0/0").split("/").map(Number);
//         return s >= 140 || d >= 90 || s < 90 || d < 60 ? 1 : (s >= 120 || d >= 80 ? 0.5 : 0);
//       },
  
//       oxygen_level: sp => sp < 90 ? 1 : sp < 95 ? 0.5 : 0,
  
//       temperature: t => t < 95 || t > 100.4 ? 1 : t >= 99 ? 0.5 : 0,
  
//       sleep_quality: sq => ({ Good: 0, Average: 0.5, Poor: 1 }[sq] ?? 0.5),
  
//       stress_level: sl => sl > 7 ? 1 : sl >= 5 ? 0.5 : 0,
//     };
  
//     const labelFromScore = score =>
//       score < 0.25 ? "Normal" : score < 0.5 ? "Manageable" : "Critical";
  
//     return (() => {
//       const score = +Object.entries(weights)
//         .reduce((sum, [key, weight]) => {
//           const fn = scorers[key];
//           return sum + weight * (typeof fn === "function" ? fn(data[key]) : 0);
//         }, 0)
//         .toFixed(3);
  
//       return { score, condition: labelFromScore(score) };
//     })();
//   }
  

export default function evaluateHealth(data) {
  const weights = {
    heart_rate: 0.20,
    blood_pressure: 0.25,
    oxygen_level: 0.20,
    temperature: 0.15,
    sleep_quality: 0.10,
    stress_level: 0.10,
  };

  const scorers = {
    heart_rate: hr =>
      hr < 50 || hr > 120 ? 1 : hr < 60 || hr > 100 ? 0.5 : 0,

    blood_pressure: bp => {
      const [s, d] = (bp ?? "0/0").split("/").map(Number);
      return (s >= 140 || d >= 90 || s < 90 || d < 60) ? 1
           : (s >= 120 || d >= 80) ? 0.5 : 0;
    },

    oxygen_level: sp => sp < 90 ? 1 : sp < 95 ? 0.5 : 0,

    temperature: t => {
      const temp = typeof t === "string" ? parseFloat(t) : t;
      return temp < 95 || temp > 100.4 ? 1 : temp >= 99 ? 0.5 : 0;
    },

    sleep_quality: sq => ({ Good: 0, Average: 0.5, Poor: 1 }[sq] ?? 0.5),

    stress_level: sl => sl > 7 ? 1 : sl >= 5 ? 0.5 : 0,
  };

  const labelFromScore = score =>
    score < 0.25 ? "Normal" : score < 0.5 ? "Manageable" : "Critical";

  const score = +Object.entries(weights)
    .reduce((sum, [key, weight]) => {
      const fn = scorers[key];
      return sum + weight * (typeof fn === "function" ? fn(data[key]) : 0);
    }, 0)
    .toFixed(3);

  return { score, condition: labelFromScore(score) };
}
