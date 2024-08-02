
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
        ('fname1', 'lname1', 1, 4),
        ('fname2', 'lname2', 2, 7),
        ('fnmae3', 'lname3', 2, 7),
        ('fname4', 'lname4', 1, NULL),
        ('fname5', 'lname5', 4, NULL),
        ('fname6', 'lname6', 4, 5),
        ('fname7', 'lname7', 2, NULL),
        ('fname8', 'lname8', 1, 4),
        ('fname9', 'lname9', 3, 13),
        ('fname10', 'lname10', 3, 13),
        ('fname11', 'lname11', 4, 5),
        ('fname12', 'lname12', 1, 4),
        ('fname13', 'lname13', 3, NULL),
        ('fname14', 'lname14', 2, 7),
        ('fname15', 'lname15', 2, 7),
        ('fname16', 'lname16', 4, 5),
        ('fname17', 'lname17', 3, 13),
        ('fname18', 'lname18', 1, 4);    
     