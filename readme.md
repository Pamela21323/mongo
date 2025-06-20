# Gym Management MongoDB Project

## 🏋️ Описание

Тази MongoDB база данни управлява информация за фитнес зала, включително треньори, клиенти, тренировки, абонаменти и разписания. Проектът включва CRUD операции и `aggregate` заявки.

## 🗃️ Колекции

1. **trainers**
   - `name`: string
   - `specialty`: string
   - `experience_years`: number
   - `available`: boolean

2. **members**
   - `name`: string
   - `email`: string
   - `age`: number
   - `membership_type`: string
   - `joined_on`: date

3. **workouts**
   - `name`: string
   - `difficulty`: string
   - `duration_min`: number
   - `tags`: array

4. **schedules**
   - `trainer_id`: ObjectId
   - `workout_id`: ObjectId
   - `day`: string
   - `time`: string
   - `room`: string

5. **subscriptions**
   - `member_id`: ObjectId
   - `start_date`: date
   - `end_date`: date
   - `price`: number
   - `status`: string

## ▶️ Инсталация

1. Уверете се, че MongoDB е инсталирана.
2. Изпълнете:
   ```bash
   mongo < insert.js
   mongo < queries.js
