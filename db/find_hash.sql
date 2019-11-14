SELECT * FROM people
JOIN hash h ON h.people_id = people.people_id 
WHERE email = $1;