

## RDBMS - (Relational Databases)

- PostgresSQL
- Oracle
- MySQL
- SQL Server
- SQLite3

## Non-relational DBMS
- MongoDB
- Cassandra
- Redis
- Memcache
- Neo4j

## MVC Talk

- Model -> Data/data model
- View -> Normally equates to UI -> Produces HTML
- Controller -> Business Logic -> Route Handlers

```SQL
SELECT * FROM customers 
WHERE country = 'Mexico'
OR city = 'Paris'
ORDER BY country DESC, ContactName
LIMIT 5; 

INSERT INTO Shippers (ShipperName, Phone)
VALUES ('Vincent SHipping', '212-555-5555')
-- ^^Adds a new row to a database ^^

UPDATE employees
SET Notes - 'was not born on new year', photo = 'N/A'
WHERE EmployeeID = 11;
-- ^^ Updates Row ^^

DELETE FROM employees WHERE emploeeID = 11;
--Deletes

## Using KNEX

- npm i knex
- npp i sqlite3 <- Drivers