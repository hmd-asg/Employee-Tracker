
INSERT INTO department(name)
VALUES ('Police'),
       ('Fire'),
       ('Education'),
       ('Health');

INSERT INTO role(title, salary, department)
VALUES 
        
        ('Police Chief', 100000, 1),
        ('Police Officer', 100000, 1),
        ('Sherif', 100000, 1),
        ('Trooper', 100000, 1),
        ('Director of Education', 100000, 3),
        ('School Counselor', 10000, 3),
        ('Administrator', 100000, 3),
        ('Teacher', 80000, 3),
        ('Coach', 40000, 3),
        ('Fire Chief', 80000, 2),
        ('Firefighter', 80000, 2),
        ('Driver engineer', 120000, 2),
        ('Sanitation Worker', 80000, 4),
        ('Doctor', 80000, 4),
        ('Nurse', 80000, 4),
        ('Surgeon', 80000, 4);
        

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES 
        ('Chris', 'Traeger', 1, 4),
        ('Sir Benjamin', 'Wyatt', 2, 7),
        ('Ron', 'Swanson', 2, 7),
        ('Leslie', 'Knope', 1, NULL),
        ('Hugh', 'Trumple', 4, NULL),
        ('Al', 'Connor', 4, 5),
        ('Joe', 'Fantringham', 2, NULL),
        ('Tammy', 'Swanson', 1, 4),
        ('Marlene', 'Griggs-Knope', 3, 13),
        ('Harold', 'Bauer', 3, 13),
        ('Ann', 'Perkins', 4, 5),
        ('April', 'Ludgate', 1, 4),
        ('Eugene', 'Burnout', 3, NULL),
        ('Harris', 'Burnout', 2, 7),
        ('Brett', 'Burnout', 2, 7),
        ('Mark', 'Brendanawicz', 4, 5),
        ('Carl', 'Lorthner', 3, 13),
        ('Tom', 'Haverford', 1, 4);    
     