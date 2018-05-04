heroku pg:psql

GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO exnghhjvpddbbd;

CREATE TABLE brands (
    id VARCHAR(100),
    title VARCHAR(100)
);

CREATE TABLE categories (
    id VARCHAR(255),
    decathlon_id INT,
    label VARCHAR(255)
);

CREATE TABLE products (
    id VARCHAR(255),
    decathlon_id INT,
    title VARCHAR(255),
    description VARCHAR(255),
    brand_id VARCHAR(255),
    min_price VARCHAR(255),
    max_price VARCHAR(255),
    crossed_price VARCHAR(255),
    percent_reduction VARCHAR(255),
    image_path VARCHAR(255),
    rating VARCHAR(255)
);

CREATE TABLE categories_products (
    categories_id VARCHAR(255),
    products_id VARCHAR(255)
);


DATABASE_URL: postgres://exnghhjvpddbbd:fddb3216a293a5e692688166e274a792a05919b1753e401a66a94a688ee17288@ec2-54-204-39-46.compute-1.amazonaws.com:5432/de4ntc9btm331o