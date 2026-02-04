<div align="center">
      <h1> <img src="https://raw.githubusercontent.com/default-cybe/OEP/main/assets/img/images/oep-logo.jpg" width="80px"> <br/>Online Exam Portal(OEP)</h1>
     </div>
<p align="center"> <a href="https://github.com/default-cybe" target="_blank"><img alt="" src="https://img.shields.io/badge/Website-EA4C89?style=normal&logo=dribbble&logoColor=white" style="vertical-align:center" /></a> <a href="https://twitter.com/default_yt_" target="_blank"><img alt="" src="https://img.shields.io/badge/Twitter-1DA1F2?style=normal&logo=twitter&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.instagram.com/kaivalya_ahir" target="_blank"><img alt="" src="https://img.shields.io/badge/Instagram-E4405F?style=normal&logo=instagram&logoColor=white" style="vertical-align:center" /></a> <a href="https://www.linkedin.com/in/kaivalya-ahir/" target="_blank"><img alt="" src="https://img.shields.io/badge/LinkedIn-0077B5?style=normal&logo=linkedin&logoColor=white" style="vertical-align:center" /></a> </p>

# Description
Online Exam Portal (OEP) is a small web app for running exams online. It's plain
HTML/CSS/JavaScript on the front end and leans on Firebase for the backend, so
Auth handles logins, the Realtime Database stores everything, and Storage keeps
the uploads. An institute can set up classes, add students and subjects, write
question papers and check results. Students just sign in, take their exam and see
how they did.

I built this as my final-year diploma project.

# Tech Used
 ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)

# Prerequisites

- A Firebase project (Authentication, Realtime Database and Storage enabled).
- Any static file server to serve the pages locally, for example Python 3
  (`python -m http.server`) or Node.js (`npx serve`).
- A modern web browser.

# Setup

1. Clone the repository:

   ```
   git clone https://github.com/default-cybe/OEP.git
   cd OEP
   ```

2. Create your Firebase configuration. Copy the example file and fill in the
   values from your Firebase console (Project settings > Your apps > SDK setup
   and configuration):

   ```
   cp firebase-config.example.js firebase-config.js
   ```

   `firebase-config.js` is gitignored, so your real project values stay out of
   version control. The pages load it before `firebase.js`, which calls
   `firebase.initializeApp`.

3. Serve the project as static files from the repository root and open it in a
   browser:

   ```
   python -m http.server 8000
   ```

   Then visit `http://localhost:8000/index.html`.

# Security notes

Firebase web API keys are meant to be shipped in client code; they identify the
project rather than grant privileged access. Real protection comes from Firebase
Security Rules and from restricting the API key in the Google Cloud console.
Before deploying, lock down the Realtime Database and Storage rules and add
HTTP-referrer / API restrictions to the web key.

# License

Released under the [MIT License](LICENSE).
