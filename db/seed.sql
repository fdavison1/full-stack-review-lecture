CREATE TABLE people (
    people_id SERIAL PRIMARY KEY, 
    name VARCHAR, 
    email VARCHAR, 
    profile_img TEXT
    );

CREATE TABLE hash (
    hash_id SERIAL PRIMARY KEY, 
    hash TEXT, 
    people_id INT REFERENCES people(people_id)
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR, 
    img_url TEXT, 
    content TEXT, 
    likes INT, 
    people_id INT REFERENCES people(people_id)
);

--dummy data

INSERT INTO people (name, email, profile_img)
VALUES ('Fred', 'fred@fred.com', 'https://media.istockphoto.com/photos/mature-bald-adult-man-with-beard-standing-over-grey-grunge-wall-picture-id1046158774?k=6&m=1046158774&s=612x612&w=0&h=CRkC8Bs7IpuNFUR8QaduvDJq_cowCPBcaQ_ekreI6zE='),
('Josh', 'josh@josh.com', 'https://image.freepik.com/free-photo/young-blonde-adult-man-shouting-aggressively-with-angry-expression-with-fists-clenched-celebrating-success_1194-26814.jpg')
;

INSERT INTO hash (hash, people_id)
VALUES ('password', 1),
('s#cret', 2);

INSERT INTO posts (title, img_url, content, likes, people_id)
VALUES ('dog', 'https://specials-images.forbesimg.com/imageserve/5db4c7b464b49a0007e9dfac/960x0.jpg?fit=scale', 'content', 0, 1),
('hot dogs', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Hotdog_-_Evan_Swigart.jpg/1200px-Hotdog_-_Evan_Swigart.jpg', 'hot dogs', 0, 2);