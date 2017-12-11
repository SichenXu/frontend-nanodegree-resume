var skills = ["Programming", "UI/UX Designing", "Cooking"]

var bio = {
    "name": "Sichen",
    "role": "UI/UX Designer",
    "welcomeMessage": "Hello World!",
    "contacts": [{
        "mobile": "123456789",
        "email": "704225972@qq.com",
        "githubUsername": "SichenXu",
        "blog": "https://sichenxu.github.io/",
        "location": "China Nanjing"
    }],
    "image": "images/fry.jpg",
    "skills": skills
};

var work = {
    "jobs": [{
        "employer": "Bosch Home Appliance Company",
        "title": "UI Developer",
        "location": "Nanjing",
        "dates": "2010.9 - 2016.8",
        "description": "worked as UI Developer in washing machine department, responsible for design the user interface and control logics for washer, washer-dryer and dryers."
    },
    {
        "employer": "NGN Industrial Company",
        "title": "Software Developer",
        "location": "Nanjing",
        "dates": "2016.10 - now",
        "description": "develope iOS app and web applications for software products, mainly applied for IoT fields."
    }]
};




var projects = {
    "project": [{
        "title": "NGN Cloud App",
        "dates": "2016.12 - 2017.9",
        "description": "users can use the app to monitor the datas and draw graphs",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]

    },
    {
        "title": "NGN Web Platform",
        "dates": "2017.9 - now",
        "description": "users can use the app to monitor the datas and draw graphs",
        "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
    }]
};



var education = {
    "schools": [{
        "name": "Nanjing University of Technology",
        "location": "Nanjing",
        "degree": "BA",
        "dates": "2003.9-2007.6",
        "url": "https://sichenxu.github.io/",
        "majors": "Automation Technology"
        },
        {
        "name": "Kaiserslautern Technology University",
        "location": "Kaiserslautern, Germany",
        "degree": "Master",
        "dates": "2007.10-2010.6",
        "url": "https://sichenxu.github.io/",
        "majors": "Electrical Technology"
        }],
    "onlineCourses": [{
        "title": "HTML/CSS",
        "school": "Udacity",
        "dates": "2017.9-2017.10",
        "url": "https://cn.udacity.com",
    },
    {
        "title": "JavaScript",
        "school": "Udacity",
        "dates": "2017.10-2017.12",
        "url": "https://cn.udacity.com",
    }]
};


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

    for(onlineCourse in education.onlineCourses){
        //$("#onlineCourse").append(HTMLonlineClassesStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
        var formatteSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].Dates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].URL);
        //$("#.onlineCourse-entry:last").append(HTMLonlineClasses);
        $(".onlineCourse-entry:last").append(formattedTitle,formattedDates);

        //$(".onlineCourse-entry:last").append(formattedonlineTitle);
    }

};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};



	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase();

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
