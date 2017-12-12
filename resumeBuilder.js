
var bio = {
    "name": "Sichen",
    "role": "UI/UX Designer",
    "welcomeMsg": "Hello World!",
    "contact": {
        "mobile": "123456789",
        "email": "704225972@qq.com",
        "github": "SichenXu",
        "blog": "https://sichenxu.github.io/",
        "location": "China Nanjing"
    },
    "biopic": "images/fry.jpg",
    "skills": ["Programming", "UI/UX Designing", "Cooking"]
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
    "projects": [{
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
        "majors": ["Automation Technology"]
        },
        {
        "name": "Kaiserslautern Technology University",
        "location": "Kaiserslautern, Germany",
        "degree": "Master",
        "dates": "2007.10-2010.6",
        "url": "https://sichenxu.github.io/",
        "majors": ["Electrical Technology"]
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
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
    var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomemsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").prepend(formattedLocation);
    $("#topContacts").prepend(formattedBlog);
    $("#topContacts").prepend(formattedGithub);
    $("#topContacts").prepend(formattedEmail);
    $("#topContacts").prepend(formattedMobile);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedBlog);
    $("#footerContacts").append(formattedLocation);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomemsg);

    if(bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      for(skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
      };
    };
  };

education.display = function() {
    var school = 0;
    for(school=0; school<education.schools.length; school++){
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}

    $("#onlineCourse").append(HTMLonlineClasses);
    //var onlineCourse = 0;
    //for(onlineCourse=0; onlineCourse<education.onlineCourses.onlineCourse; school++){
    var onlineCourse = 0;
   for(onlineCourse=0; onlineCourse< education.onlineCourses.length;onlineCourse++){
        var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
        var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
        var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
        $(".onlineCourse-entry:last").append(formattedTitle);
        $(".onlineCourse-entry:last").append(formattedSchool);
        $(".onlineCourse-entry:last").append(formattedDates);
        $(".onlineCourse-entry:last").append(formattedURL);
    }

};

work.display = function() {
    var job = 0;
    for(job=0; job<work.jobs.length; job++){
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
    var item = 0;
    for(item=0; item<projects.projects.length; item++){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);

		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);

        var image = 0;
        for(image=0; image<projects.projects[item].images.length; image++){
			var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);
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