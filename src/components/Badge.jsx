import React from "react";
import "./Badge.scss";

const BadgeIcons = {
  JavaScript:
    '<img class="badge-img" alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=ffffff">',
  React:
    '<img class="badge-img" alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=ffffff">',
  TypeScript:
    '<img class="badge-img" alt="TypeScript" src="https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=ffffff">',
  "Vue.js":
    '<img class="badge-img" alt="Vue.js" src="https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=ffffff">',
  Angular:
    '<img class="badge-img" alt="Angular" src="https://img.shields.io/badge/-Angular-DD0031?style=flat-square&logo=angular&logoColor=ffffff">',
  CSS3: '<img class="badge-img" alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=ffffff">',
  Sass: '<img class="badge-img" alt="Sass" src="https://img.shields.io/badge/-Sass-CC6699?style=flat-square&logo=sass&logoColor=ffffff">',
  Bootstrap:
    '<img class="badge-img" alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap&logoColor=ffffff">',
  HTML5:
    '<img class="badge-img" alt="HTML5" src="https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=ffffff">',
  Redux:
    '<img class="badge-img" alt="Redux" src="https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=ffffff">',
  "Node.js":
    '<img class="badge-img" alt="Node.js" src="https://img.shields.io/badge/-Node.js-339933?style=flat-square&logo=node.js&logoColor=ffffff">',
  MySQL:
    '<img class="badge-img" alt="MySQL" src="https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=ffffff">',
  "Express.js":
    '<img class="badge-img" alt="Express.js" src="https://img.shields.io/badge/-Express.js-000000?style=flat-square&logo=express&logoColor=ffffff">',
  PHP: '<img class="badge-img" alt="PHP" src="https://img.shields.io/badge/-PHP-777BB4?style=flat-square&logo=php&logoColor=ffffff">',
  Markdown:
    '<img class="badge-img" alt="Markdown" src="https://img.shields.io/badge/-Markdown-000000?style=flat-square&logo=markdown">',
  npm: '<img class="badge-img" alt="npm" src="https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm">',
  GitHub:
    '<img class="badge-img" alt="GitHub" src="https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github">',
  Git: '<img class="badge-img" alt="Git" src="https://img.shields.io/badge/-Git-%23F05032?style=flat-square&logo=git&logoColor=%23ffffff">',
  GitLab:
    '<img class="badge-img" alt="GitLab" src="https://img.shields.io/badge/-GitLab-FCA121?style=flat-square&logo=gitlab">',
  Java: '<img class="badge-img" alt="Java" src="http://img.shields.io/badge/-Java-5B4638?style=flat-square&logo=java&logoColor=ffffff">',
  Postman:
    '<img class="badge-img" alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=ffffff">',
  DBeaver:
    '<img class="badge-img" alt="DBeaver" src="https://img.shields.io/badge/-DBeaver-000000?style=flat-square&logo=dbeaver&logoColor=ffffff">',
  Database:
    '<img class="badge-img" alt="Database" src="https://img.shields.io/badge/-Database-003B57?style=flat-square&logo=database&logoColor=ffffff">',
  "VS Code":
    '<img class="badge-img" alt="VS Code" src="http://img.shields.io/badge/-VS%20Code-007ACC?style=flat-square&logo=visual-studio-code&logoColor=ffffff">',
  Windows:
    '<img class="badge-img" alt="Windows" src="http://img.shields.io/badge/-Windows-0078D6?style=flat-square&logo=windows&logoColor=ffffff">',
  Scrum:
    '<img class="badge-img" alt="Scrum" src="https://img.shields.io/badge/-Scrum-6DB33F?style=flat-square&logo=scrum&logoColor=ffffff">',
  Kanban:
    '<img class="badge-img" alt="Kanban" src="https://img.shields.io/badge/-Kanban-05122A?style=flat-square&logo=kanban&logoColor=ffffff">',
  GoogleAPI:
    '<img class="badge-img"  src="https://img.shields.io/badge/Google%20API-4285F4?style=flat-square&logo=google&logoColor=ffffff" alt="Google API">',
  APIRest:
    '<img class="badge-img"  src="https://img.shields.io/badge/API%20Rest-000000?style=flat-square&logo=rest&logoColor=ffffff" alt="API Rest">',
  EJS: '<img class="badge-img" src="https://img.shields.io/badge/-EJS-8B4513?style=flat-square&logo=ejs&logoColor=ffffff" alt="EJS Badge" />',
  ".NET":
    '<img class="badge-img" src="https://img.shields.io/badge/-.NET-512BD4?style=flat-square&logo=.net&logoColor=ffffff" alt=".NET Badge" />',
  Ionic:
    '<img class="badge-img" src="https://img.shields.io/badge/-Ionic-3880FF?style=flat-square&logo=ionic&logoColor=ffffff" alt="Ionic Badge" />',
  Cordova:
    '<img class="badge-img" src="https://img.shields.io/badge/-Cordova-E8E8E8?style=flat-square&logo=apache-cordova&logoColor=000000" alt="Cordova Badge" />',
  Android:
    '<img class="badge-img" src="https://img.shields.io/badge/-Android-3DDC84?style=flat-square&logo=android&logoColor=ffffff" alt="Android Badge" />',
  PlayStore:
    '<img class="badge-img" src="https://img.shields.io/badge/-Play%20Store-414141?style=flat-square&logo=google-play&logoColor=ffffff" alt="Play Store Badge" />',
  Python:
    '<img class="badge-img" alt="Python" src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff">',
  PowerBI:
    '<img class="badge-img" alt="PowerBI" src="https://img.shields.io/badge/-PowerBI-F2C811?style=flat-square&logo=powerbi&logoColor=ffffff">',
  WordPress:
    '<img class="badge-img" alt="WordPress" src="https://img.shields.io/badge/-WordPress-21759B?style=flat-square&logo=wordpress&logoColor=ffffff">',
  "API Rest":
    '<img class="badge-img" alt="API Rest" src="https://img.shields.io/badge/-API%20Rest-000000?style=flat-square&logo=rest&logoColor=ffffff">',
  AWS: '<img class="badge-img" alt="AWS" src="https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=ffffff">',
  Athena:
    '<img class="badge-img" alt="Athena" src="https://img.shields.io/badge/-Athena-232F3E?style=flat-square&logo=aws&logoColor=ffffff">',
  DynamoDB:
    '<img class="badge-img" alt="DynamoDB" src="https://img.shields.io/badge/-DynamoDB-4053D6?style=flat-square&logo=aws&logoColor=ffffff">',
  S3: '<img class="badge-img" alt="S3" src="https://img.shields.io/badge/-S3-569A31?style=flat-square&logo=aws&logoColor=ffffff">',
  "Data Lake":
    '<img class="badge-img" alt="Data Lake" src="https://img.shields.io/badge/-Data%20Lake-000000?style=flat-square&logo=aws&logoColor=ffffff">',
  "Data Analysis":
    '<img class="badge-img" alt="Data Analysis" src="https://img.shields.io/badge/-Data%20Analysis-000000?style=flat-square&logo=python&logoColor=ffffff">',
  QA: '<img class="badge-img" alt="QA" src="https://img.shields.io/badge/-QA-FF5733?style=flat-square&logo=bug&logoColor=ffffff">',
  "Angular Material":
    '<img class="badge-img" alt="Angular Material" src="https://img.shields.io/badge/Angular%20Material-DD0031?logo=angular&logoColor=white&style=for-the-badge">',
  Swagger:
    '<img class="badge-img" alt="Swagger" src="https://img.shields.io/badge/Swagger-85EA2D?logo=swagger&logoColor=black&style=for-the-badge">',
  JTW: '<img class="badge-img" alt="JWT" src="https://img.shields.io/badge/JWT-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge">',
};

function Badge({ technology }) {
  const badgeHTML = BadgeIcons[technology];
  return (
    <div
      className="badge-container"
      dangerouslySetInnerHTML={{ __html: badgeHTML }}
    />
  );
}

export default Badge;
