//For projects.html
let projects = [   
    {
        "projectTitle": "YouTube Clone",
        "projectDescription": "I made a copy of YouTube\'s homepage from scratch using HTML+CSS.",
        "url": "lucy-xiao.github.io/youtube",
        "coverImage": "assets/img/youtube.png",
        "category": "code",
        "id": "youtube"
    },
    {
        "projectTitle": "Mouse Re-design",
        "projectDescription": "I researched different mice and created an infographic about a possible re-design",
        "url": "",
        "coverImage": "assets/img/mouse1.png",
        "category": "design",
        "id": "mouse"
    },
    {
        "projectTitle": "Headphone Research",
        "projectDescription": "I researched different headphones and created an infographic about it",
        "url": "",
        "coverImage": "assets/img/headphones1.png",
        "category": "design",
        "id": "headphone"
    },
    {
        "projectTitle": "Bucket",
        "projectDescription": "I made a satirical graphic about 'kicking the bucket'",
        "url": "",
        "coverImage": "assets/img/Bucket.png",
        "category": "design",
        "id": "bucket"
    },
    {
        "projectTitle": "Web Infographic",
        "projectDescription": "I made an infographic to help non-coders understand HTML/CSS/JS",
        "url": "",
        "coverImage": "assets/img/Website-Infographic@1x.png",
        "category": "design", 
        "id": "web-info"
    }
];

for (let project of projects) {
  console.log(project);
  $(".project-wrapper").append("<div class='project-container'><div class='project-thumbnail picture' id='" + project["id"] + "'></div>" + "<div class='project-thumbnail overlay'>" + "<div class='project-thumbnail overlay-text-container'><div class='project-thumbnail overlay-title'>" + project["projectTitle"] + "</div>" + "<div class='project-thumbnail overlay-description'>" + project["projectDescription"] + "</div></div></div></div>");
  $("#" + project["id"]).css("background-image", 'url("' + project["coverImage"] + '") ' );
}

