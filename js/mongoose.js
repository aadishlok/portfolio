/**
 * Created by Aadi on 5/14/2017.
 */
var mongoose= require('../node_modules/mongoose');
mongoose.connect('mongodb://localhost/portfolio');

var EducationSchema= new mongoose.Schema({
    college: String,
    startDate: Date,
    endDate: Date
},{collection: "education"});

var ProfessionSchema= new mongoose.Schema({
    title: String,
    role: String,
    startDate: Date,
    endDate: Date,
    company: String,
    description: [{
        type: String
    }]
},{collection: "profession"});

var ProjectSchema= new mongoose.Schema({
    title: String,
    description: [{
        type: String
    }]
},{collection: "project"});

var Education= mongoose.model("Education", EducationSchema);
var Profession= mongoose.model("Profession", ProfessionSchema);
var Project= mongoose.model("Project", ProjectSchema);

var education= {
    college: "Northeastern University",
    startDate: "January, 2016",
    endDate: "December, 2017"
};



/*var projects=[
    {
        title: "Vibes",
        description: [
            "Achieved cross cultural interaction and skills showcase through a university exclusive web application using AngularJS, RESTful API, Hibernate, Bootstrap and MySQL for uploading user-developed videos, audios and photos",
            "Prevented spam, regulated comments and moderated user account activities through session management, MVC and Servlets"
        ]
    },{
        title: "WeCycle",
        description: [
            "Reduced overload by 50% on university travel provisions through Bicycle Transit System (BTS) using Swing, rendering business performance output using JFreeCharts",
            "Achieved secure transit of users through GPS tracking and a distress response mechanism alerting BTS admin through mobile notifications"
        ]
    },{
        title: "Fantasy Football Manager",
        description: [
            "Dedicated iOS(iPhone) application to create customized teams from the English Premier League roster and implemented algorithms to equalize competition using View Controllers, MVC and RESTful API"
        ]
    },{
        title: "Contoso Database Management",
        description: [
            "Achieved drill through approach for responsive Business Intelligence statistics through design and implementation of Relational Database (RDBMS) and Dimensional Database concepts on Contoso Database using Visual Studio. Produced custom statistical graphics using PowerBI"
        ]
    }
];*/

mongoose.model("EducationModel", EducationSchema).create(education, function (err, ed) {
    if(err){
        console.log("Error: "+err);
    }else{
        console.log("Education: "+ed);
    }
});

/*
mongoose.model("ProfessionModel", ProfessionSchema).create(profession, function (err, p) {
    if(err){
        console.log("Error: "+err);
    }else{
        console.log("Profession: "+p);
    }
});

mongoose.model("ProjectsModel", ProjectSchema).create(projects, function (err, pro) {
    if(err){
        console.log("Error: "+err);
    }else{
        console.log("Project: "+pro);
    }
});*/
