db = connect("mongodb://localhost:27017/fitness_center");
db.trainers.insertMany([
  { name: "Иван Петров", specialty: "Кардио", experience_years: 5, available: true },
  { name: "Мария Иванова", specialty: "Силови тренировки", experience_years: 8, available: false },
  ...
]);

db.members.insertMany([
  { name: "Георги Стоянов", email: "geo@abv.bg", age: 28, membership_type: "Standard", joined_on: new Date("2024-12-01") },
  ...
]);

db.workouts.insertMany([
  { name: "HIIT", difficulty: "Hard", duration_min: 45, tags: ["cardio", "fat burn"] },
  ...
]);

db.schedules.insertOne({
  trainer_id: ObjectId("..."),
  workout_id: ObjectId("..."),
  day: "Monday",
  time: "18:00",
  room: "A1"
});

db.subscriptions.insertOne({
  member_id: ObjectId("..."),
  start_date: new Date("2025-06-01"),
  end_date: new Date("2025-09-01"),
  price: 120,
  status: "active"
});
