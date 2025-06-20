db.members.find();

db.trainers.find({ specialty: "Кардио" });

db.subscriptions.updateOne(
  { status: "active", price: { $lt: 150 } },
  { $set: { price: 150 } }
);

db.workouts.deleteOne({ name: "Outdated Stretching" });

db.members.aggregate([
  { $group: { _id: "$membership_type", count: { $sum: 1 } } }
]);

db.subscriptions.aggregate([
  { $group: { _id: null, avg_price: { $avg: "$price" } } }
]);

db.workouts.aggregate([
  { $group: { _id: "$difficulty", count: { $sum: 1 } } }
]);
