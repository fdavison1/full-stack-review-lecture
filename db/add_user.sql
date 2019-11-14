INSERT INTO people (name, email, profile_img)
VALUES (${name}, ${email},${profile_img})
RETURNING people_id;