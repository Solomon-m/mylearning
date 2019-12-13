   ### Database and Database security

  What is a Database ?

  > Any Collection of related infromation like, 
   - Phone Book 
   - Shopping List 
   - Todo list
   - Social Network user  and more. 

   Databases can be stored in differnt ways like 
   - On a paper
   - In your mind
   - On a compter file system
   - like this in github file
   - or somewhere in comment section. 

   Databases + computers = :)

   Amazon.in vs Shopping list

   Amazon :
    - keeps track of products, reviewes, purchase orders, credit cards details, Users Personal infromation and media files. 
    - Trillions of data has to be stored and readliy available (AWS s3).
    - Information is extermely valuable and cirtical to amazon.in business. 
    - Security is essential, amaonon stores people personal information like Credit card, addres, phone. 
    - Information is stored on computers/servers.

   Shopping List:
    - keeps track of consumer products like on a paper. Few pieces of information need to be stored and readily available. 
      Security is not important. 

  Database Management Systems (DBMS)
   - Software program for creating and maintaining a database. 
   - Makes it easy to manage large amount of information. 
   - Handles security. 
   - Backups. (how AWS dynamodb takes backup, and google datastore can be taken backup)
   - Importing/exporting data. (exporting data to S3 bucket in aws)
   - Concurrency. 
   - interacting with software application. 
 
  CURD operation in Db. 

  ### Type of Databases. 
 
    Relational Databases (SQL) :

    - Organize data into one or more tables
    - Each tables has columns and rows
    - Unique key identifies each row. 

   Non-Realtional (NoSql) :

    - Anything but a traditional sql table.
    - Key-value stores (redis)
    - Documents : json,xml,etc. (datastore, dynamodb)
    - graphs : Graph database technology is to harness the power of data connections. A graph database is purpose-built to handle highly connected data. Helps in speedy retrivial of connected data. 
    - Flexiable table

  Realtional Database :
   - RDMS - helps to create and maintain a relational database. mySQL, Oracle postgreSQL
   - SQL - Standard language for interactiong with RDMS
         - used to perform CURD operations. 
         - used to define tables and structurs.
         - mongoDB,DynamoDB, datastore(firestore), apache cassandra, firebase and etc

   Database queries: 
     A request made to the database management system of specific information. 

  Student Table:
   
   StudentId, name , major
   Branch table and Employee table for primary key and foriegn key
   branchSupplier_compositeKey
   branch Supplier - Primary consist of two columns and this is called as composite key. 

   Structured Query Language SQL:
  
  - Data query language(DQL) : query db for information, get information that is already stored there. 
  - Data definition language (DDL) : defining db schemas
  - Data control language(DCL): controlling access to the data in the database, user& permissions management. 
  - Data manipulation language (DML): Curd operation in db. 

  `
   SELECT employee.name,employee.age
   FROM employee
   WHERE employee.salary> 30000;
  `

  DATA types in sql :
    Following are few data types among many
    - INT  - numbers. 
    - DECIMAL(M,N)  - decimal numbers - exact values. 
    - VARCHAR(1) - String of text of length 1
    - BLOB - 'YYYY-MM-DD'
    - TIMESTAMP 'YYYY-MM-DD HH:MM:SS' 
 
  
  Queries :

   DESCRIBE Persons - to view. 
   

  Create Database : 

  `
   CREATE DATABASE testDB;
  `
  Drop Database :

  `
  DROP DATABASE testDB;
  `

  BackUp Database :

  `
  BACKUP DATABASE testDB
  TO DISK = 'D:\backups\testDB.bak';
  `

  Create a Table :

  `
   CREATE TABLE Persons (
                PersonID int,
                LastName varchar(255),
                FirstName varchar(255),
                Address varchar(255),
                City varchar(255)
            );
  `
  Drop table:

  `
   DROP TABLE Shippers;
  `
  Alter table :

  `
   ALTER TABLE Customers
   ADD Email varchar(255);
  `
   
  SQL constraints :
  
  SQL constraints are used to specify rules for the data in a table.
  The following constraints are commonly used in SQL:

    - NOT NULL - Ensures that a column cannot have a NULL value
    - UNIQUE - Ensures that all values in a column are different
    - PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
    - FOREIGN KEY - Uniquely identifies a row/record in another table
    - CHECK - Ensures that all values in a column satisfies a specific condition
    - DEFAULT - Sets a default value for a column when no value is specified
    - INDEX - Used to create and retrieve data from the database very quickly

  NOT NULL :

  `
    CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255) NOT NULL,
            Age int
        );

  `  

  Unique key ;

   - The UNIQUE constraint ensures that all values in a column are different.
   - Both the UNIQUE and PRIMARY KEY constraints provide a guarantee for uniqueness for a column or set of columns.
   - A PRIMARY KEY constraint automatically has a UNIQUE constraint.

   `
     CREATE TABLE Persons (
            ID int NOT NULL UNIQUE,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int
        );
   `
  Primary key :
   
   - The PRIMARY KEY constraint uniquely identifies each record in a table.
   - Primary keys must contain UNIQUE values, and cannot contain NULL values.
 
  `
    CREATE TABLE Persons (
        ID int NOT NULL,
        LastName varchar(255) NOT NULL,
        FirstName varchar(255),
        Age int,
        PRIMARY KEY (ID)
     );

  `

  FOREIGN Key : 

   - A FOREIGN KEY is a key used to link two tables together.
   - A FOREIGN KEY is a field (or collection of fields) in one table that refers to the PRIMARY KEY in another table.

   `
      CREATE TABLE Orders (
            OrderID int NOT NULL,
            OrderNumber int NOT NULL,
            PersonID int,
            PRIMARY KEY (OrderID),
            FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
        );
   `
  Check constrains :
   - The CHECK constraint is used to limit the value range that can be placed in a column.
   `
     CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            CHECK (Age>=18)
        );
   `

   Default constraint :

    - The DEFAULT constraint is used to provide a default value for a column.

    `
     CREATE TABLE Persons (
            ID int NOT NULL,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            City varchar(255) DEFAULT 'Sandnes'
        );
    `
   INDEX :
    - The CREATE INDEX statement is used to create indexes in tables.
    - Indexes are used to retrieve data from the database more quickly than otherwise. The users cannot see the indexes, they are     just used to speed up searches/queries.
    - Note: Updating a table with indexes takes more time than updating a table without (because the indexes also need an update).    So, only create indexes on columns that will be frequently searched against.

    `
     CREATE INDEX index_name
      ON table_name (column1, column2, ...);
    `

    Auto-Increment :
     - Auto-increment allows a unique number to be generated automatically when a new record is inserted into a table.

    `
      CREATE TABLE Persons (
            Personid int NOT NULL AUTO_INCREMENT,
            LastName varchar(255) NOT NULL,
            FirstName varchar(255),
            Age int,
            PRIMARY KEY (Personid)
        );
    ` 

    Dates :

    `
      SELECT * FROM Orders WHERE OrderDate='2008-11-11'
    `

    Views :
    - In SQL, a view is a virtual table based on the result-set of an SQL statement.
    - A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the   database.

    `
      CREATE VIEW view_name AS
        SELECT column1, column2, ...
        FROM table_name
        WHERE condition;
    `
   Injection :
   - SQL injection is a code injection technique that might destroy your database.

   `
    txtUserId = getRequestString("UserId");
    txtSQL = "SELECT * FROM Users WHERE UserId = " + txtUserId;
   `
    

   ### DATABASE SECURITY
 
   - Database security protects the confidentiality, integrity and availability of db. 
   - Confidentiality : keeping the data securely, encrypted data,2 factor authentication to login-in to db,                
   - Integrity : maintaining consistency,  accquarcy and trust worthness of the data over its entire life cycle. 
   - Availability : To ensure the data is available for authorized persion at anytime.  General Data Protection Regulation (GDPR).

   Security Threats:
    
     - SQL injection : attackers inserts malicious code into database program. 
     - Buffer overflow vulnerabilities : exists when a program attempts to put more data in a buffer than it can hold.
     - Denial of Services(DOS) attack: attacker request tons of request to server in order to overload the system. 
     - Weak Authentication: attacker can steal user identity to gain confidential data.

   Method to secure database :
     - Access control : creating role based on user group. IAM role like VIEW,EDITOR, ADMIN. 
     - Auditing : monitoring database
     - Authentication : secure password, 2 factor authentication.
     - Encryption : encrypting data to cipher text and persisting in db. password and Personal infromation should be encrypted. 
     - Backups : taking periodic backups. fullbackup, incremental backup and differential backup - starts with full backup later if there is any update to database in next backup only latest added change will be backedup.

  ### Security in AWS 
    
     - User : type of user required policy. federated identities, SAML and management policy(for new user give least permission) 
     - Groups : creating different group for different department or need 
     - Service :  leaset privilage access. 
     - Roles : Use separate roles for different service to avoid issue. 
               Avoid API keys in code. 

    Protecting AWS Credentials : 
     - Lease privileged users access. 
     - MFA on the root account
     - Federation (cognito pool id, federated identities)
     - MFA for user on certain action like deleting a file from S3
     - Avoid storing API keys in code. 
     - Give bucket/database and folder access to user

    AWS GuardDuty :

      A Threat Detection Service for cloud. It monitors and protects AWS accounts along with the applications and services running within them and that includes Databases. 
      





