/* =====================================================================
   RESUME — content for resume.html. Keep this in sync with the PDF
   in assets/resume/ (the file behind the "Download PDF" button).
   To swap the PDF, replace the file and update `pdf` below.
   ===================================================================== */

window.RESUME = {
  pdf: "assets/resume/Anay-Gokarn-Resume.pdf",
  pdfDownloadName: "Anay-Gokarn-Resume.pdf",
  updated: "June 2026",

  contact: {
    email: "anaygok05@gmail.com",
    linkedin: "https://www.linkedin.com/in/anay-gokarn",
    phone: ""   // optional, e.g. "+1 (206) 380-1098" — left blank to keep it off the public page
  },

  education: [
    {
      school: "University of Washington",
      location: "Seattle",
      date: "June 2027 (anticipated)",
      degree: "Bachelor of Science in Human Centered Design Engineering | Minor in Data Science",
      details: [
        ["Major GPA", "3.91/4.00"],
        ["Overall GPA", "3.54/4.00"],
        ["SAT", "1520 (790 Math, 730 Reading & Writing)"],
        ["Academic Awards", "Dean’s List (2024–26)"],
        ["Relevant Coursework", "Data Analysis in Direct-To-Consumer Genetic Testing, Elements of Statistical Methods, Quantitative Science 381, Communication Design & Technology, User Experience Prototyping"]
      ]
    }
  ],

  sections: [
    {
      title: "Professional Experience",
      items: [
        {
          org: "Custera",
          role: "Design Intern",
          date: "June 2026 – Present",
          blurb: "Startup which improves customer centricity by closing the knowledge gap between customers & businesses.",
          bullets: [
            "Conducted competitive market and branding research to identify industry best practices and inform strategic positioning decisions.",
            "Developed a comprehensive brand book establishing visual identity guidelines to ensure consistency across marketing, digital, and customer-facing channels.",
            "Led the design and development of the company's website, aligning user experience, messaging, and visual identity with business objectives."
          ]
        },
        {
          org: "Gurin Energy – Project Management Office",
          role: "PMO Intern",
          date: "June – August 2025",
          blurb: "Renewable energy developer across solar, wind, and storage projects in Asia.",
          bullets: [
            "Built a centralized tracking software in Python for managing 75+ partnerships, enabling real-time visibility into approvals, contracts, and negotiations and improving decision-making speed for PMO leadership.",
            "Designed and deployed an automated legal document tracking dashboard in Power BI, streamlining signature tracking and reducing manual follow-ups.",
            "Screened vendors for outstanding legal issues, tariff exposure, and unfulfilled contracts, and presented findings and recommendations to PMO leadership."
          ]
        },
        {
          org: "UpGrad Finance",
          role: "Intern",
          date: "July – August 2023",
          blurb: "Online education platform offering postgraduate programs for working professionals.",
          bullets: [
            "Executed market research to identify and evaluate potential partners for UpGrad’s Buy Now, Pay Later solution, presenting preliminary findings to Finance leadership.",
            "Benchmarked 8 short-listed payment service providers across cost, settlement timelines, and regional compatibility, informing vendor selection decisions."
          ]
        }
      ]
    },
    {
      title: "Leadership Experience",
      items: [
        {
          org: "UW Livewell Peer Health Educator",
          role: "Student Leader",
          date: "September 2025 – Present",
          blurb: "University health program promoting student wellbeing through education and prevention.",
          bullets: [
            "Selected as sole student representative on cross-functional initiative across university health departments, contributing to an 81% increase in funding.",
            "Led 2 workshops a week on health and wellness topics for diverse student groups (first-year interest groups, Greek life, and by request) improving health literacy and awareness of campus resources.",
            "Managed logistics and led outreach for 20+ health promotion events, driving student engagement to 70+ students per session.",
            "Partnered with Health Education Specialists on the end-to-end design of health advocacy materials to increase student participation."
          ]
        },
        {
          org: "Boring Club",
          role: "Engineering Team Member",
          date: "September 2024 – Present",
          blurb: "Student-run engineering club delivering hands-on, project-based learning.",
          bullets: [
            "Designed a high-performance RC boat propeller using Fusion 360 and Autodesk CFD, optimizing aerodynamic performance and ensuring seamless integration with cross-functional hardware components.",
            "Developed a new computational analysis testing methodology with a physical setup, reducing propulsion system testing inaccuracies by ~25%.",
            "Led a 3-member team to develop a visual interface using React.js for a navigation control system, replacing terminal-based commands with an interactive UI."
          ]
        }
      ]
    }
  ],

  skills: [
    ["Certificates", "University of Sydney Innovation Through Design Certificate, Stanford CS229 Machine Learning Course"],
    ["Technical Skills", "Power BI, R, Tableau, Excel, PowerPoint, Python, Java, React.js, Fusion 360, SolidWorks, Figma, Adobe"],
    ["Language Skills", "English (Native), Hindi (Advanced), Spanish (Intermediate), Indonesian (Beginner)"],
    ["Interests", "Cooking, Painting, Wood Working, Hiking, Fitness"]
  ]
};
