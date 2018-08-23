//function compare(a, b) {
//    if (a.name < b.name)
//        return -1;
//    if (a.name > b.name)
//        return 1;
//    return 0;
//}
//
//function changeImage(img) {
//    var image = document.createElement("img");
//    image.src = img;
//    image.width = 1000;
//    var content = document.getElementById("content");
//    while (content.firstChild) {
//        content.removeChild(content.firstChild);
//    }
//    content.appendChild(image);
//}

var summary_txt = {
    name: "summary.txt",
    type: "txt",
    text: "My name is Jai Behl, I'm a [[b;orangered;white]Computational Modeling and Data Analytics] major with an [[b;orangered;white]Computer Science] Minor at [[b;orangered;white]Virginia Tech]\n\n" + 
    "I am experienced in Java development through my school experiences; experienced in Python related to Data Science and using the Pandas library; experienced in Solidity to write Smart Contracts for the startup Trive News as well as using React.js and web3.js frameworks for the same venture. My internships have provided me experiences in full stack web development as well as how the migration of cloud services from both onpremise as well as different hosts. As you can see, I am interested in a lot of different ventures and look forward to expand my expertise in Machine Learning in the coming future. I would say that I am more proficient in Java and Python when it comes to back end development. I am still learning how React.js works and the scope of JavaScript in today's technology works. I am saavy with Python, using Pandas and in the process of learning 'scikit learn' to further expand my understanding of Machine Learning." + "\n\n" + "My interest in blockchain technology was sparked very recently due to the voting crisis in the United States as well as the rise of Bitcoin. After intensive research, I found myself working with and building decentralized applications on the Ethereum blockchain. My project with a startup called Trive News focuses on verifying news or as the mantra of the company says to 'get rid of all Fake News. This project has been an amazing learning experience as building decentralized applications is still a very new concept. If not built correctly, it can be easily hacked and a significant amount of information can be breached even if certains aspects are hashed and encrypted." + "\n\n" + "Furthermore, when I am not hurting my brain doing backend development, I like to explore further with frontend development, mostly with this website. I have used the jQuery frame work with HTML, CSS (intensively), and JavaScript to make this website what it is. I will continue to add more cool features, still TBD, and animations for my amusement. " + "\n\n" + "Lastly, I am an aspiring consultant. As a Project Manager with the Consulting Group at Virginia Tech for Back2Nature LLC, a landscaping and construction firm in Blacksburg, VA, I am learning how to maintain client relationship while teaching new analysts how consulting is done. 	We are creating a business valuation model that simulates various assumptions and financing options for a $2.5 million business that helps our client with negotiations to initiate a merger. I am working on understanding the client’s business operations and financial structure as well as identify areas of opportunity for growth and profit. As a project manager, I will be tracking progress of analysts by creating plans, holding client and analyst meetings, and reviewing outcomes on daily basis."
        
};

var contact_txt = {
    name: "contact.txt",
    type: "txt",
    text: "E-mail: jaib97@vt.edu \n\n" +
        "LinkedIn: https://www.linkedin.com/in/jagrit-behl-750622116 \n\n" +
        "Facebook: https://www.facebook.com/jaibehl97 \n\n" +
        "GitHub: https://github.com/jaibehl97 \n"
};

var resume_pdf = {
    name: "JaiBehlResume2018.pdf",
    type: "pdf",
    link: "JaiBehlResume2018.pdf"
};

var resume_txt = {
    name: "resume.txt",
    type: "txt",
//    text: "\
//\n********************************************************************************\
//\n                                  Jai Behl\
//\njaib97@vt                                            703-589-6627\
//\n\
//\n3B Honours Mathematics - Computer Science Major, Statistics Major, Econ Minor\
//\n********************************************************************************\
//\n\
//\n   Technical Skills: C/C++, Python, Unix/Linux, Bash, Excel VBA\
//\n   Web & Design    : HTML/CSS, Django, PHP, MySQL, Adobe Photoshop\
//\n\
//\n\
//\n***************\
//\nWork Experience\
//\n***************\
//\n   ___________________________________________________________________________\
//\n   LinkedIn\
//\n   Software Engineer Intern - Graph Team\
//\n      - Implemented features in a new generation in memory distributed graph \
//\n        database in C++ \
//\n   ___________________________________________________________________________\
//\n   Citadel\
//\n   Financial Technology Summer Associate - Option IT\
//\n      - Designed and developed a high performant multithreaded WebSocket/Web \
//\n        server in C++ and its web interface in Javascript serving multiple \
//\n        browser clients \
//\n   ___________________________________________________________________________\
//\n   Scotia Capital\
//\n   Financial Engineer - Credit & Equity Derivatives\
//\n      - Developed and improved option modelling tools for equity\
//\n        derivatives traders in C++ and VBA\
//\n\
//\n********\
//\nResearch\
//\n********\
//\n\
//\n    Nessie: A Decoupled, Client-Driven, Key-Balue Store using RDMA\
//\n\
//\n*********\
//\nEducation\
//\n*********\
//\n\
//\n   University of Waterloo\
//\n      - Deans Honours List: 93% Average\
//"
};

var welcome_txt = {
    name: "welcome.txt",
    type: "txt",
    text: "[[b;white;]Welcome to my Website. My name is Jagrit Behl but everyone calls me Jai.]\n[[;white;]Enjoy your stay.\n\nPress ` to minimize the terminal. Available commands are:]\n" +
        "[[b;white;orangered]cd], [[b;white;orangered]ls], [[b;white;orangered]cat], [[b;white;orangered]open] (opens file like pdf and jpg)\n"
};


var predictious = {
    name: "trivenews.git",
    type: "pdf",
    link: "https://github.com/jaibehl97/Dapp-team-1"
};
var websocket = {
    name: "data-analysis.git",
    type: "pdf",
    link: "https://github.com/jaibehl97/DataAnalysis-Challenge"
};

var coding = {
    name: "Coding",
    type: "folder",
    kids: [predictious, websocket],
    back: projects,
    setg: {
        prompt: '[[b;orangered;white]Jai Behl:/Projects/Coding~] ',
        name: 'Jai Behl',
        completion: function (term, string, callback) {
            callback([
                            'trivenews.git',
                            'data-analysis.git'
                              ]);
        },
    }
};



var aboutme = {
    name: "AboutMe",
    type: "folder",
    kids: [resume_pdf, contact_txt, resume_txt, summary_txt],
    back: home,
    setg: {
        prompt: '[[b;orangered;white]Jai Behl:/AboutMe~] ',
        name: 'Jai Behl',
        completion: function (term, string, callback) {
            callback([
                              'summary.txt',
                              'resume.txt',
                              'contact.txt',
                              'JaiBehlResume2018.pdf'
                              ]);
        },
    }
};

var projects = {
    name: "Projects",
    type: "folder",
    kids: [coding],
    back: home,
    setg: {
        prompt: '[[b;orangered;white]Jai Behl:/Projects~] ',
        name: 'Jai Behl',
        completion: function (term, string, callback) {
            callback([
                              'Coding'
                              ]);
        },
    }
};

//var blog = {
//    name: "Blog",
//    type: "folder",
//    kids: [],
//    back: home,
//    setg: {
//        prompt: '[[b;orangered;white]Jai Behl:/Blog~] ',
//        name: 'Jai Behl',
//        completion: function (term, string, callback) {
//            callback([
//                              ]);
//        },
//    }
//};
var home = {
    name: "Home",
    type: "folder",
    kids: [aboutme, projects, welcome_txt],
    back: home,
    setg: {
        prompt: '[[b;orangered;white]Jai Behl:/~] ',
        name: 'Jai Behl',
        completion: function (term, string, callback) {
            callback([
                              'welcome.txt',
                              'Projects',
                              'Blog',
                              'AboutMe',
                              ]);
        },
    }



};

aboutme.back = home;
//blog.back = home;
projects.back = home;
//art.back = projects;
coding.back = projects;
