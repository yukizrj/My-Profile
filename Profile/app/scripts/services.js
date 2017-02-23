'use strict';

angular.module("myApp")
        .service("projectFactory", function() {
        	/*var projectfac={};*/
        	var infos=[
            {
                _id:0,
                name:"Full-stack Training",
                image:"images/angular.png",
                category:"17",
                location:"Princeton, NJ",
                description:"It is a full-stack engineer training contains front-end and back-end engineer skills. Including MEAN Stack: MongoDB, Express.js, Angular and NodeJS; J2EE environment development in Eclipse with framework like Spring; Some knowledge of design pattern and OOP concept. (click on image for more information)",
                details:[
                	{
                		list:"Developed front-end single page application using HTML, CSS, Bootstrap, JQuery, Javascript, AngularJS and NodeJS."
                	},
                	{
                		list:"Accessing MongoDB from NodeJS and used AJAX to make requests to server and fetch data in JSON format."
                	},
                	{
                		list:"Developed back-end servlets and JSP based on MVC pattern using Spring framework."
                	},
                	{
                		list:"Used standard data access technologies like JDBC and ORM tool like Hibernate."
                	}
                ]
            },
            {
                _id:1,
                name:"Graph-base Segmentation",
                image:"images/segmentation.png",
                category:"15",
                location:"Chicago, IL",
                description:"The project is about created a better algrithom with image segememtation base on some papers. The algrithom is different from other algrithom like K-means etc, It built nodes and edges for image and compared difference of component to make it more efficiently. (click on image for more information) ",
                details:[
                	{
                		list:"Improved image segmentation based on graph-base algorithm."
                	},
                	{
                		list:"Used PyCharm for python 2.7 and import OpenCV for image segment operation."
                	},
                	{
                		list:"Used Tkiner as interface with parameter selectors to make comparison with other algorithms"
                	}
                ]
            },
            {
                _id:2,
                name:"Leather Store",
                image:"images/database.png",
                category:"15",
                location:"Chicago, IL",
                description:"The project is about creating a database communication of a leather store. It implement CRUD for a database. (click on image for more information)",
                details:[
                	{
                		list:"Created mock database for leather store and built up entity-relation diagram."
                	},
                	{
                		list:"Used MAMP as local server to integrate HTML, PHP and MySQL to implement CRUD for leather store schema."
                	},
                	{
                		list:"Created nicer user interface by rewrite Javascript using JQuery and rewrite HTML and CSS using Bootstrap."
                	}
                ]
            },
            {
                _id:3,
                name:"Student information management",
                image:"images/student.png",
                category:"14",
                location:"GuangZhou, China",
                description:"The project is final project to create a java web of student management including add, delete, modify student informations. It can be management by administrators. (click on image for more information)",
                details:[
                	{
                		list:"Created class diagrams using UML for students and administrators."
                	},
                	{
                		list:"Development is under J2EE environment, use JDBC for database connectivity with MySQL Server."
                	},
                	{
                		list:"Implemented web pages by java, JQuery, JSP and CSS."
                	},
                	{
                		list:"Detail design such as user-friendly pages and encodingfilter for Chinese characteristic web."
                	}
                ]
            }

        ];
        this.getProjects = function(){
            return infos;
        };
        this.getProject = function (index) {
               return infos[index];
        };
        /*return projectfac;*/
        })
        .factory('skillFactory', function() {
    
            var skillfac = {};
    
            var skills = [
                {
                    name: "Web Skills",
                    description: "Created single page application using framework AngularJS, communicate between client and server by AJAX call, decoration pages using Bootstrap and use Router to jump between pages; Created MEAN Stack project of MongoDB, Express.js, AngularJS and NodeJS."
                },
                {
                    name: "Programming Skills",
                    description: "Experience of Java with OOP concept, using Eclipse as IDE and created Junit test cases; Used JDBC to communicate with database; knowledge of Hibernate Java Beans; knowledge of Spring framework."
                },
                {
                    name: "IDE and tools",
                    description: "Front-end tools: Sublime, Visual Studio Code; Database tolls: MongoDB, Oracle Databse, MySQL; Programming tools: Eclipse, PyCharm, BlueJ."
                },
                {
                    name: "Operating Systems",
                    description: "Windows with most application development. Mac OS with some programming tools use and also some suportable development. Linux for LAN development and some small language demo development."
                }
                
            ];

            skillfac.getSkills=function(){
                return skills;
            };
            skillfac.getSkill= function(index){
                return skills[index];
            };
            return skillfac;
     
        })
        ;