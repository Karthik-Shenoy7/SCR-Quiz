// SCR Quiz Application
class SCRQuizApp {
    constructor() {
        // All 114 SCR questions from the provided data
        this.questions = [
            {"id": 1, "question": "Which of the following is not a feature of a village?", "options": ["Less population", "Less diversity", "Impersonal relationship", "Predominance of primary sector and allied activities"], "correct": 2},
            {"id": 2, "question": "Which among the following is not a form of diversity in India?", "options": ["Geographical diversity", "Linguistic diversity", "Religious diversity", "None of the above"], "correct": 3},
            {"id": 3, "question": "Caste is not a/an ......................", "options": ["Endogamous system", "Hereditary system", "Hierarchical system", "Exogamous system"], "correct": 3},
            {"id": 4, "question": "Marriage of one man with several sisters is called .......................", "options": ["Monogamous marriage", "Sororal polygyny", "Non-Sororal polygyny", "Levirate"], "correct": 1},
            {"id": 5, "question": "The Hindu Marriage Act was enacted in the year .......................", "options": ["1945", "1955", "1965", "1975"], "correct": 1},
            {"id": 6, "question": "'History of Human Marriage' is written by .....................", "options": ["Malinowski", "Westermarck", "A.R. Desai", "S.C. Dube"], "correct": 1},
            {"id": 7, "question": "More women and less men may lead to ..................", "options": ["Polygamy", "Polygyny", "Polyandry", "None of the above"], "correct": 2},
            {"id": 8, "question": "Which among the following is not an endogamous group?", "options": ["Caste", "Varna", "Gotra", "Religion"], "correct": 2},
            {"id": 9, "question": "Kinship relations established through blood is called ...................", "options": ["Affinal", "Conjugal", "Consanguineous", "None of the above"], "correct": 2},
            {"id": 10, "question": "Marriage of high caste man with a low caste woman is called.......................", "options": ["Hypogamy", "Hypergamy", "Monogamy", "Endogamy"], "correct": 0},
            {"id": 11, "question": "When a man marries the sister of his death wife is called....................", "options": ["Exogamy", "Endogamy", "Sororate", "Levirate"], "correct": 2},
            {"id": 12, "question": "Which of the following factors may bring changes in marriage system?", "options": ["Traditional values", "Customs", "Folkways", "Modern education"], "correct": 3},
            {"id": 13, "question": "Private property in land introduced in India during ..................", "options": ["Ancient period", "Medieval period", "British period", "After Independence"], "correct": 2},
            {"id": 14, "question": "Fragmentation of land may not lead to .......................", "options": ["Less yielding", "Poverty", "Higher production", "Growth of indebtedness"], "correct": 2},
            {"id": 15, "question": "The example of non-cultivating owners of land is .........................", "options": ["Absentee landlord", "Farmers", "Peasants", "None of the above"], "correct": 0},
            {"id": 16, "question": "The full form of OBC is........................", "options": ["Other Backward Class", "Other Backward Caste", "Over Backward Class", "Over Backward Caste"], "correct": 0},
            {"id": 17, "question": "Common territory is a feature of ............................", "options": ["SC", "ST", "OBC", "All of the above"], "correct": 1},
            {"id": 18, "question": "Geographical isolation is a problem for ..............................", "options": ["Caste", "Class", "Tribe", "Religion"], "correct": 2},
            {"id": 19, "question": "Which of the following statement is NOT correct about Pradhan Mantri Kaushal Vikas Yojana?", "options": ["It was launched in March 2015.", "It will be implemented by the ministry of skill development and entrepreneurship.", "It will provide training to 300 million youths.", "It will focus on the class X and class XII students."], "correct": 2},
            {"id": 20, "question": "Launching of Sansad Adarsh Gram Yojana is related to the.............", "options": ["Vallabh Bhai Patel", "Deen Dayal Upadhyay", "Mahatma Gandhi", "Jai Prakash Narayan"], "correct": 3},
            {"id": 21, "question": "Social action is classified into how many types?", "options": ["Two", "Three", "Four", "Five"], "correct": 2},
            {"id": 22, "question": "Who classified social action into four types?", "options": ["Max Weber", "Durkheim", "Marx", "Comte"], "correct": 0},
            {"id": 23, "question": "According to Max Weber, which is not a type of social action?", "options": ["Traditional action", "Affectual action", "Value-rational action", "Irrational action"], "correct": 3},
            {"id": 24, "question": "Family is an example of ........................", "options": ["Primary group", "Secondary group", "Reference group", "Out group"], "correct": 0},
            {"id": 25, "question": "The term 'Primary Group' was coined by ........................", "options": ["C.H. Cooley", "Robert Merton", "Talcott Parsons", "George Herbert Mead"], "correct": 0},
            {"id": 26, "question": "Which of the following is not a characteristic of primary group?", "options": ["Face-to-face relation", "Smallness of size", "Impersonal relations", "Physical proximity"], "correct": 2},
            {"id": 27, "question": "Secondary groups are characterized by ........................", "options": ["Informal relations", "Personal relations", "Formal relations", "Intimate relations"], "correct": 2},
            {"id": 28, "question": "The concept of 'Reference Group' was introduced by ........................", "options": ["Herbert Hyman", "Robert Merton", "Talcott Parsons", "C.H. Cooley"], "correct": 0},
            {"id": 29, "question": "In-groups and Out-groups concepts were given by ........................", "options": ["W.G. Sumner", "Robert Merton", "Talcott Parsons", "George Herbert Mead"], "correct": 0},
            {"id": 30, "question": "According to Census 2011, what is the total population of India?", "options": ["121.08 crores", "125.5 crores", "115.2 crores", "130.1 crores"], "correct": 0},
            {"id": 31, "question": "According to Census 2011, the sex ratio in India is ........................", "options": ["943", "940", "933", "950"], "correct": 0},
            {"id": 32, "question": "Which state has the highest sex ratio according to Census 2011?", "options": ["Kerala", "Puducherry", "Tamil Nadu", "Karnataka"], "correct": 0},
            {"id": 33, "question": "Which state has the lowest sex ratio according to Census 2011?", "options": ["Haryana", "Punjab", "Rajasthan", "Uttar Pradesh"], "correct": 0},
            {"id": 34, "question": "The literacy rate in India according to Census 2011 is ........................", "options": ["74.04%", "75.2%", "72.8%", "76.1%"], "correct": 0},
            {"id": 35, "question": "Which state has the highest literacy rate according to Census 2011?", "options": ["Kerala", "Mizoram", "Tripura", "Goa"], "correct": 0},
            {"id": 36, "question": "Which state has the lowest literacy rate according to Census 2011?", "options": ["Bihar", "Arunachal Pradesh", "Rajasthan", "Jharkhand"], "correct": 0},
            {"id": 37, "question": "The decadal growth rate of population in India according to Census 2011 is ........................", "options": ["17.64%", "18.2%", "16.5%", "19.1%"], "correct": 0},
            {"id": 38, "question": "Which is the most populous state in India according to Census 2011?", "options": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"], "correct": 0},
            {"id": 39, "question": "Which is the least populous state in India according to Census 2011?", "options": ["Sikkim", "Mizoram", "Arunachal Pradesh", "Goa"], "correct": 0},
            {"id": 40, "question": "The concept of demographic dividend refers to ........................", "options": ["Increase in working-age population", "Increase in birth rate", "Increase in death rate", "Decrease in population"], "correct": 0},
            {"id": 41, "question": "Green Revolution in India started in which decade?", "options": ["1960s", "1950s", "1970s", "1980s"], "correct": 0},
            {"id": 42, "question": "Green Revolution was successful mainly in which crops?", "options": ["Wheat and Rice", "Cotton and Sugarcane", "Pulses and Oilseeds", "Fruits and Vegetables"], "correct": 0},
            {"id": 43, "question": "Who is known as the father of Green Revolution in India?", "options": ["M.S. Swaminathan", "Norman Borlaug", "C. Subramaniam", "B.P. Pal"], "correct": 0},
            {"id": 44, "question": "Green Revolution had maximum impact in which region?", "options": ["Punjab, Haryana and Western UP", "Southern India", "Eastern India", "North-Eastern India"], "correct": 0},
            {"id": 45, "question": "What was the main criticism of Green Revolution?", "options": ["It increased regional disparities", "It reduced food production", "It was not scientific", "It was too expensive"], "correct": 0},
            {"id": 46, "question": "White Revolution is associated with ........................", "options": ["Milk production", "Cotton production", "Sugar production", "Salt production"], "correct": 0},
            {"id": 47, "question": "Who is known as the father of White Revolution in India?", "options": ["Dr. Verghese Kurien", "M.S. Swaminathan", "Norman Borlaug", "C. Subramaniam"], "correct": 0},
            {"id": 48, "question": "Operation Flood is related to ........................", "options": ["Milk production", "Wheat production", "Rice production", "Fish production"], "correct": 0},
            {"id": 49, "question": "Blue Revolution is associated with ........................", "options": ["Fish production", "Milk production", "Wheat production", "Cotton production"], "correct": 0},
            {"id": 50, "question": "Yellow Revolution is associated with ........................", "options": ["Oilseeds production", "Wheat production", "Rice production", "Milk production"], "correct": 0},
            {"id": 51, "question": "The term 'Unity in Diversity' in Indian context refers to ........................", "options": ["Cultural integration despite diversity", "Political unity", "Economic integration", "Religious harmony"], "correct": 0},
            {"id": 52, "question": "Which is not a factor contributing to unity in India?", "options": ["Linguistic diversity", "Common history", "Constitutional framework", "Administrative unity"], "correct": 0},
            {"id": 53, "question": "The concept of 'Composite Culture' in India refers to ........................", "options": ["Blending of different cultures", "Dominance of one culture", "Isolation of cultures", "Destruction of cultures"], "correct": 0},
            {"id": 54, "question": "Secularism in Indian context means ........................", "options": ["Equal respect to all religions", "No religion", "Dominance of Hindu religion", "Western concept"], "correct": 0},
            {"id": 55, "question": "The 'Idea of India' as propounded by social scientists refers to ........................", "options": ["India as a civilization", "India as a nation-state", "India as a democracy", "India as a federation"], "correct": 0},
            {"id": 56, "question": "Which Article of the Constitution deals with the abolition of untouchability?", "options": ["Article 17", "Article 15", "Article 16", "Article 18"], "correct": 0},
            {"id": 57, "question": "The practice of untouchability is made punishable under which Act?", "options": ["Protection of Civil Rights Act, 1955", "Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989", "Equal Remuneration Act, 1976", "Minimum Wages Act, 1948"], "correct": 0},
            {"id": 58, "question": "Reservation in education and employment for SCs and STs is provided under which Article?", "options": ["Article 15 and 16", "Article 14", "Article 19", "Article 21"], "correct": 0},
            {"id": 59, "question": "The National Commission for Scheduled Castes was established in which year?", "options": ["2004", "1999", "1995", "2008"], "correct": 0},
            {"id": 60, "question": "The National Commission for Scheduled Tribes was established in which year?", "options": ["2004", "1999", "1995", "2008"], "correct": 0},
            {"id": 61, "question": "PESA Act was enacted in which year?", "options": ["1996", "1995", "1997", "1998"], "correct": 0},
            {"id": 62, "question": "PESA stands for ........................", "options": ["Panchayats (Extension to Scheduled Areas) Act", "Panchayati Raj Extension to Scheduled Areas Act", "Panchayat Extension and Scheduled Areas Act", "None of the above"], "correct": 0},
            {"id": 63, "question": "Forest Rights Act was enacted in which year?", "options": ["2006", "2005", "2007", "2008"], "correct": 0},
            {"id": 64, "question": "The Tribal Sub-Plan was launched in which Five Year Plan?", "options": ["Fifth Five Year Plan", "Fourth Five Year Plan", "Sixth Five Year Plan", "Seventh Five Year Plan"], "correct": 0},
            {"id": 65, "question": "Which Article of the Constitution provides special provisions for tribals?", "options": ["Article 244", "Article 243", "Article 245", "Article 246"], "correct": 0},
            {"id": 66, "question": "The Scheduled Areas are administered by ........................", "options": ["Governor", "President", "Chief Minister", "Collector"], "correct": 0},
            {"id": 67, "question": "The Fifth Schedule of the Constitution deals with ........................", "options": ["Administration of Scheduled Areas and Scheduled Tribes", "Languages", "Land reforms", "Panchayati Raj"], "correct": 0},
            {"id": 68, "question": "The Sixth Schedule of the Constitution deals with ........................", "options": ["Tribal Areas in Assam, Meghalaya, Tripura and Mizoram", "Languages", "Land reforms", "Panchayati Raj"], "correct": 0},
            {"id": 69, "question": "Jhum cultivation is practiced mainly by ........................", "options": ["Tribal communities", "Farmers in plains", "Urban dwellers", "Industrial workers"], "correct": 0},
            {"id": 70, "question": "The concept of 'Primitive Tribal Groups' was introduced by ........................", "options": ["Dhebar Commission", "Elwin Committee", "Bhuria Committee", "None of the above"], "correct": 0},
            {"id": 71, "question": "Particularly Vulnerable Tribal Groups (PVTGs) were identified based on ........................", "options": ["Pre-agricultural level, low literacy, declining population", "High income", "Urban habitat", "Modern technology"], "correct": 0},
            {"id": 72, "question": "The largest tribal community in India is ........................", "options": ["Gond", "Bhil", "Santhal", "Oraon"], "correct": 0},
            {"id": 73, "question": "Which state has the highest tribal population in India?", "options": ["Madhya Pradesh", "Odisha", "Rajasthan", "Gujarat"], "correct": 0},
            {"id": 74, "question": "Which state has the highest percentage of tribal population?", "options": ["Mizoram", "Nagaland", "Meghalaya", "Arunachal Pradesh"], "correct": 0},
            {"id": 75, "question": "The concept of 'Little Tradition' and 'Great Tradition' was given by ........................", "options": ["Robert Redfield", "M.N. Srinivas", "Andre Beteille", "T.N. Madan"], "correct": 0},
            {"id": 76, "question": "The process of 'Sanskritization' was studied by ........................", "options": ["M.N. Srinivas", "Andre Beteille", "T.N. Madan", "Robert Redfield"], "correct": 0},
            {"id": 77, "question": "The concept of 'Dominant Caste' was given by ........................", "options": ["M.N. Srinivas", "Andre Beteille", "T.N. Madan", "Louis Dumont"], "correct": 0},
            {"id": 78, "question": "The book 'Homo Hierarchicus' was written by ........................", "options": ["Louis Dumont", "M.N. Srinivas", "Andre Beteille", "T.N. Madan"], "correct": 0},
            {"id": 79, "question": "The study of village 'Rampura' was conducted by ........................", "options": ["M.N. Srinivas", "Andre Beteille", "T.N. Madan", "S.C. Dube"], "correct": 0},
            {"id": 80, "question": "The study of village 'Sripuram' was conducted by ........................", "options": ["Andre Beteille", "M.N. Srinivas", "T.N. Madan", "S.C. Dube"], "correct": 0},
            {"id": 81, "question": "The National Rural Employment Guarantee Act (NREGA) was enacted in which year?", "options": ["2005", "2004", "2006", "2007"], "correct": 0},
            {"id": 82, "question": "NREGA was later renamed as ........................", "options": ["MGNREGA", "RGNREGA", "JNNREGA", "IGNREGA"], "correct": 0},
            {"id": 83, "question": "MGNREGA guarantees employment for how many days in a year?", "options": ["100 days", "150 days", "200 days", "250 days"], "correct": 0},
            {"id": 84, "question": "The Pradhan Mantri Gram Sadak Yojana was launched in which year?", "options": ["2000", "1999", "2001", "2002"], "correct": 0},
            {"id": 85, "question": "The objective of PMGSY is to ........................", "options": ["Connect rural areas with all-weather roads", "Provide employment", "Improve health facilities", "Promote education"], "correct": 0},
            {"id": 86, "question": "The Indira Awaas Yojana was launched in which year?", "options": ["1996", "1995", "1997", "1998"], "correct": 0},
            {"id": 87, "question": "IAY was later restructured as ........................", "options": ["Pradhan Mantri Awaas Yojana - Gramin", "Pradhan Mantri Gramin Awaas Yojana", "Rural Housing Scheme", "Gramin Awaas Yojana"], "correct": 0},
            {"id": 88, "question": "The National Rural Livelihood Mission was launched in which year?", "options": ["2011", "2010", "2012", "2013"], "correct": 0},
            {"id": 89, "question": "NRLM is also known as ........................", "options": ["Aajeevika", "Swarnajayanti Gram Swarozgar Yojana", "Integrated Rural Development Programme", "Development of Women and Children in Rural Areas"], "correct": 0},
            {"id": 90, "question": "The Swarnajayanti Gram Swarozgar Yojana was launched in which year?", "options": ["1999", "1998", "2000", "2001"], "correct": 0},
            {"id": 91, "question": "The Integrated Rural Development Programme was launched in which year?", "options": ["1978", "1975", "1980", "1985"], "correct": 0},
            {"id": 92, "question": "The Development of Women and Children in Rural Areas programme was launched in which year?", "options": ["1982", "1980", "1985", "1975"], "correct": 0},
            {"id": 93, "question": "The Training of Rural Youth for Self Employment was launched in which year?", "options": ["1979", "1975", "1980", "1982"], "correct": 0},
            {"id": 94, "question": "The Drought Prone Areas Programme was launched in which year?", "options": ["1973", "1970", "1975", "1972"], "correct": 0},
            {"id": 95, "question": "The Desert Development Programme was launched in which year?", "options": ["1977", "1975", "1980", "1973"], "correct": 0},
            {"id": 96, "question": "The Integrated Wasteland Development Programme was launched in which year?", "options": ["1989", "1985", "1990", "1995"], "correct": 0},
            {"id": 97, "question": "The Watershed Development Programme was launched in which year?", "options": ["1986", "1985", "1990", "1995"], "correct": 0},
            {"id": 98, "question": "The National Watershed Development Project for Rainfed Areas was launched in which year?", "options": ["1990", "1985", "1995", "2000"], "correct": 0},
            {"id": 99, "question": "The River Valley Projects were launched in which Five Year Plan?", "options": ["First Five Year Plan", "Second Five Year Plan", "Third Five Year Plan", "Fourth Five Year Plan"], "correct": 0},
            {"id": 100, "question": "Community Development Programme was launched in which year?", "options": ["1952", "1950", "1955", "1960"], "correct": 0},
            {"id": 101, "question": "National Extension Service was launched in which year?", "options": ["1953", "1950", "1955", "1960"], "correct": 0},
            {"id": 102, "question": "The Balwant Rai Mehta Committee was appointed in which year?", "options": ["1957", "1955", "1960", "1965"], "correct": 0},
            {"id": 103, "question": "The Ashok Mehta Committee was appointed in which year?", "options": ["1977", "1975", "1980", "1985"], "correct": 0},
            {"id": 104, "question": "The G.V.K. Rao Committee was appointed in which year?", "options": ["1985", "1980", "1990", "1995"], "correct": 0},
            {"id": 105, "question": "The L.M. Singhvi Committee was appointed in which year?", "options": ["1986", "1985", "1990", "1995"], "correct": 0},
            {"id": 106, "question": "The 73rd Constitutional Amendment Act was passed in which year?", "options": ["1992", "1990", "1995", "2000"], "correct": 0},
            {"id": 107, "question": "The 74th Constitutional Amendment Act was passed in which year?", "options": ["1992", "1990", "1995", "2000"], "correct": 0},
            {"id": 108, "question": "Panchayati Raj Institutions came into effect from which date?", "options": ["24th April 1993", "1st January 1993", "1st April 1993", "1st May 1993"], "correct": 0},
            {"id": 109, "question": "The three-tier structure of Panchayati Raj consists of ........................", "options": ["Gram Panchayat, Panchayat Samiti, Zilla Panchayat", "Village Panchayat, Block Panchayat, District Panchayat", "Local Panchayat, Regional Panchayat, State Panchayat", "None of the above"], "correct": 0},
            {"id": 110, "question": "Reservation for women in Panchayati Raj Institutions is ........................", "options": ["33%", "25%", "50%", "40%"], "correct": 0},
            {"id": 111, "question": "The term of Panchayati Raj Institutions is ........................", "options": ["5 years", "3 years", "6 years", "4 years"], "correct": 0},
            {"id": 112, "question": "The State Election Commission is responsible for ........................", "options": ["Conducting elections to Panchayati Raj Institutions", "Conducting general elections", "Conducting by-elections", "All of the above"], "correct": 0},
            {"id": 113, "question": "The Finance Commission makes recommendations for ........................", "options": ["Devolution of funds to Panchayati Raj Institutions", "General budget", "Defense budget", "Plan budget"], "correct": 0},
            {"id": 114, "question": "Social audit in MGNREGA is conducted by ........................", "options": ["Gram Sabha", "Block Panchayat", "District Collector", "State Government"], "correct": 0}
        ];

        this.currentQuestions = [];
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 20 * 60; // 20 minutes in seconds
        this.timer = null;
        this.startTime = null;
        this.studentName = '';

        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Start Quiz
        const startBtn = document.getElementById('startQuizBtn');
        if (startBtn) {
            startBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.startQuiz();
            });
        }

        // Admin login
        const adminBtn = document.getElementById('adminLoginBtn');
        if (adminBtn) {
            adminBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAdminModal();
            });
        }

        // Quiz navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousQuestion());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextQuestion());
        if (submitBtn) submitBtn.addEventListener('click', () => this.submitQuiz());

        // Results screen
        const reviewBtn = document.getElementById('reviewAnswersBtn');
        const newQuizBtn = document.getElementById('newQuizBtn');

        if (reviewBtn) reviewBtn.addEventListener('click', () => this.showReview());
        if (newQuizBtn) newQuizBtn.addEventListener('click', () => this.newQuiz());

        // Review screen
        const backBtn = document.getElementById('backToResultsBtn');
        if (backBtn) backBtn.addEventListener('click', () => this.showResults());

        // Admin functionality
        const adminLoginSubmit = document.getElementById('adminLoginSubmit');
        const adminModalClose = document.getElementById('adminModalClose');
        const logoutBtn = document.getElementById('logoutBtn');
        const exportBtn = document.getElementById('exportBtn');

        if (adminLoginSubmit) adminLoginSubmit.addEventListener('click', () => this.adminLogin());
        if (adminModalClose) adminModalClose.addEventListener('click', () => this.hideAdminModal());
        if (logoutBtn) logoutBtn.addEventListener('click', () => this.adminLogout());
        if (exportBtn) exportBtn.addEventListener('click', () => this.exportCSV());

        // Name input handling
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.startQuiz();
                }
            });
        }
    }

    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    shuffleQuestionOptions(question) {
        const shuffled = { ...question };
        const optionsWithIndex = question.options.map((option, index) => ({ option, originalIndex: index }));
        const shuffledOptions = this.shuffleArray(optionsWithIndex);
        
        shuffled.options = shuffledOptions.map(item => item.option);
        shuffled.correct = shuffledOptions.findIndex(item => item.originalIndex === question.correct);
        
        return shuffled;
    }

    prepareRandomQuestions() {
        // Select 40 random questions from 114
        const shuffledQuestions = this.shuffleArray(this.questions);
        const selectedQuestions = shuffledQuestions.slice(0, 40);
        
        // Shuffle options for each question and update correct answer indices
        this.currentQuestions = selectedQuestions.map(q => this.shuffleQuestionOptions(q));
        
        // Shuffle the order of selected questions
        this.currentQuestions = this.shuffleArray(this.currentQuestions);
    }

    startQuiz() {
        const nameInput = document.getElementById('studentName');
        
        if (!nameInput || !nameInput.value.trim()) {
            alert('Please enter your name before starting the quiz.');
            if (nameInput) nameInput.focus();
            return;
        }

        this.studentName = nameInput.value.trim();
        this.prepareRandomQuestions();
        this.currentQuestionIndex = 0;
        this.answers = {};
        this.timeRemaining = 20 * 60;
        this.startTime = Date.now();

        this.showScreen('quizScreen');
        this.displayQuestion();
        this.startTimer();
    }

    startTimer() {
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();

            // Warning at 5 minutes
            if (this.timeRemaining <= 5 * 60) {
                const timerElement = document.getElementById('timer');
                if (timerElement) {
                    timerElement.classList.add('warning');
                }
            }

            if (this.timeRemaining <= 0) {
                this.submitQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            const minutes = Math.floor(this.timeRemaining / 60);
            const seconds = this.timeRemaining % 60;
            timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }

    displayQuestion() {
        const question = this.currentQuestions[this.currentQuestionIndex];
        const questionNumber = this.currentQuestionIndex + 1;

        // Update question counter
        const counterElement = document.getElementById('questionCounter');
        if (counterElement) {
            counterElement.textContent = `Question ${questionNumber} of 40`;
        }

        // Update question text
        const questionTextElement = document.getElementById('questionText');
        if (questionTextElement) {
            questionTextElement.textContent = question.question;
        }

        // Update options
        const optionsContainer = document.getElementById('optionsContainer');
        if (optionsContainer) {
            optionsContainer.innerHTML = '';

            question.options.forEach((option, index) => {
                const optionDiv = document.createElement('div');
                optionDiv.className = 'option';
                
                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = 'answer';
                radio.value = index;
                radio.id = `option${index}`;

                const label = document.createElement('label');
                label.htmlFor = `option${index}`;
                label.textContent = option;

                optionDiv.appendChild(radio);
                optionDiv.appendChild(label);

                // Check if this answer was previously selected
                if (this.answers[question.id] === index) {
                    radio.checked = true;
                    optionDiv.classList.add('selected');
                }

                // Add click handler
                optionDiv.addEventListener('click', () => {
                    // Remove selected class from all options
                    optionsContainer.querySelectorAll('.option').forEach(opt => {
                        opt.classList.remove('selected');
                    });
                    
                    // Add selected class to clicked option
                    optionDiv.classList.add('selected');
                    radio.checked = true;
                    
                    // Save answer
                    this.answers[question.id] = index;
                });

                optionsContainer.appendChild(optionDiv);
            });
        }

        // Update progress bar
        const progressBar = document.getElementById('progressBar');
        if (progressBar) {
            const progress = (questionNumber / 40) * 100;
            progressBar.style.width = `${progress}%`;
        }

        // Update navigation buttons
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const submitBtn = document.getElementById('submitBtn');

        if (prevBtn) prevBtn.disabled = questionNumber === 1;
        
        if (nextBtn) {
            nextBtn.style.display = questionNumber === 40 ? 'none' : 'block';
        }
        
        if (submitBtn) {
            submitBtn.style.display = questionNumber === 40 ? 'block' : 'none';
            submitBtn.classList.remove('hidden');
        }
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.displayQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestionIndex < this.currentQuestions.length - 1) {
            this.currentQuestionIndex++;
            this.displayQuestion();
        }
    }

    submitQuiz() {
        if (this.timer) {
            clearInterval(this.timer);
        }

        const endTime = Date.now();
        const timeTaken = Math.floor((endTime - this.startTime) / 1000);

        // Calculate results
        let correct = 0;
        let wrong = 0;
        let unanswered = 0;

        this.currentQuestions.forEach(question => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const scorePercentage = Math.round((correct / 40) * 100);

        // Save results
        this.saveResult({
            name: this.studentName,
            score: scorePercentage,
            correct: correct,
            wrong: wrong,
            unanswered: unanswered,
            timeTaken: timeTaken,
            date: new Date().toLocaleDateString(),
            answers: { ...this.answers },
            questions: [...this.currentQuestions]
        });

        // Display results
        this.displayResults(scorePercentage, correct, wrong, unanswered, timeTaken);
    }

    displayResults(scorePercentage, correct, wrong, unanswered, timeTaken) {
        const elements = {
            studentNameDisplay: document.getElementById('studentNameDisplay'),
            scorePercentage: document.getElementById('scorePercentage'),
            correctCount: document.getElementById('correctCount'),
            wrongCount: document.getElementById('wrongCount'),
            unansweredCount: document.getElementById('unansweredCount'),
            timeTaken: document.getElementById('timeTaken')
        };

        if (elements.studentNameDisplay) elements.studentNameDisplay.textContent = this.studentName;
        if (elements.scorePercentage) elements.scorePercentage.textContent = `${scorePercentage}%`;
        if (elements.correctCount) elements.correctCount.textContent = correct;
        if (elements.wrongCount) elements.wrongCount.textContent = wrong;
        if (elements.unansweredCount) elements.unansweredCount.textContent = unanswered;

        if (elements.timeTaken) {
            const minutes = Math.floor(timeTaken / 60);
            const seconds = timeTaken % 60;
            elements.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }

        this.showScreen('resultsScreen');
    }

    showReview() {
        const reviewContainer = document.getElementById('reviewQuestions');
        if (!reviewContainer) return;
        
        reviewContainer.innerHTML = '';

        // Update summary
        let correct = 0, wrong = 0, unanswered = 0;
        
        this.currentQuestions.forEach((question) => {
            if (this.answers.hasOwnProperty(question.id)) {
                if (this.answers[question.id] === question.correct) {
                    correct++;
                } else {
                    wrong++;
                }
            } else {
                unanswered++;
            }
        });

        const summaryElements = {
            reviewCorrectCount: document.getElementById('reviewCorrectCount'),
            reviewWrongCount: document.getElementById('reviewWrongCount'),
            reviewUnansweredCount: document.getElementById('reviewUnansweredCount')
        };

        if (summaryElements.reviewCorrectCount) summaryElements.reviewCorrectCount.textContent = correct;
        if (summaryElements.reviewWrongCount) summaryElements.reviewWrongCount.textContent = wrong;
        if (summaryElements.reviewUnansweredCount) summaryElements.reviewUnansweredCount.textContent = unanswered;

        // Create review for each question
        this.currentQuestions.forEach((question, index) => {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = 'review-question';

            const userAnswer = this.answers[question.id];
            const isCorrect = userAnswer === question.correct;
            const isAnswered = userAnswer !== undefined;

            if (isAnswered) {
                reviewDiv.classList.add(isCorrect ? 'correct' : 'wrong');
            } else {
                reviewDiv.classList.add('unanswered');
            }

            reviewDiv.innerHTML = `
                <div class="review-question-header">
                    <span class="review-question-number">Question ${index + 1}</span>
                    <span class="review-status">
                        ${isAnswered ? (isCorrect ? '✅' : '❌') : '❓'}
                    </span>
                </div>
                <div class="review-question-text">${question.question}</div>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correct) {
                            className += ' correct';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' selected-wrong';
                        }
                        return `<div class="${className}">${String.fromCharCode(65 + optIndex)}. ${option}</div>`;
                    }).join('')}
                </div>
            `;

            reviewContainer.appendChild(reviewDiv);
        });

        this.showScreen('reviewScreen');
    }

    showResults() {
        this.showScreen('resultsScreen');
    }

    newQuiz() {
        // Reset timer display
        const timerElement = document.getElementById('timer');
        if (timerElement) {
            timerElement.classList.remove('warning');
        }
        
        // Clear student name
        const nameInput = document.getElementById('studentName');
        if (nameInput) {
            nameInput.value = '';
        }
        
        this.showScreen('welcomeScreen');
    }

    saveResult(result) {
        try {
            let results = JSON.parse(localStorage.getItem('scrQuizResults') || '[]');
            results.push(result);
            localStorage.setItem('scrQuizResults', JSON.stringify(results));
        } catch (error) {
            console.error('Error saving result:', error);
        }
    }

    showAdminModal() {
        const modal = document.getElementById('adminModal');
        if (modal) {
            modal.classList.remove('hidden');
        }
    }

    hideAdminModal() {
        const modal = document.getElementById('adminModal');
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (modal) modal.classList.add('hidden');
        if (usernameInput) usernameInput.value = '';
        if (passwordInput) passwordInput.value = '';
    }

    adminLogin() {
        const usernameInput = document.getElementById('adminUsername');
        const passwordInput = document.getElementById('adminPassword');
        
        if (!usernameInput || !passwordInput) return;
        
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'SCRADMIN' && password === 'RURAL2024') {
            this.hideAdminModal();
            this.showAdminDashboard();
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }

    adminLogout() {
        this.showScreen('welcomeScreen');
    }

    showAdminDashboard() {
        try {
            const results = JSON.parse(localStorage.getItem('scrQuizResults') || '[]');
            
            // Update statistics
            const elements = {
                totalStudents: document.getElementById('totalStudents'),
                averageScore: document.getElementById('averageScore'),
                completionRate: document.getElementById('completionRate'),
                studentTableBody: document.getElementById('studentTableBody')
            };

            if (elements.totalStudents) {
                elements.totalStudents.textContent = results.length;
            }
            
            if (elements.averageScore) {
                const averageScore = results.length > 0 
                    ? Math.round(results.reduce((sum, r) => sum + r.score, 0) / results.length)
                    : 0;
                elements.averageScore.textContent = `${averageScore}%`;
            }
            
            if (elements.completionRate) {
                const completionRate = results.length > 0 
                    ? Math.round((results.filter(r => r.correct + r.wrong + r.unanswered === 40).length / results.length) * 100)
                    : 0;
                elements.completionRate.textContent = `${completionRate}%`;
            }

            // Update table
            if (elements.studentTableBody) {
                elements.studentTableBody.innerHTML = '';

                results.slice(-20).reverse().forEach(result => { // Show last 20 results
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${result.name}</td>
                        <td>${result.score}%</td>
                        <td>${result.correct}</td>
                        <td>${result.wrong}</td>
                        <td>${result.unanswered}</td>
                        <td>${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}</td>
                        <td>${result.date}</td>
                    `;
                    elements.studentTableBody.appendChild(row);
                });
            }

            this.showScreen('adminScreen');
        } catch (error) {
            console.error('Error loading admin dashboard:', error);
            alert('Error loading dashboard data.');
        }
    }

    exportCSV() {
        try {
            const results = JSON.parse(localStorage.getItem('scrQuizResults') || '[]');
            
            if (results.length === 0) {
                alert('No data to export.');
                return;
            }

            const headers = ['Name', 'Score (%)', 'Correct', 'Wrong', 'Unanswered', 'Time Taken', 'Date'];
            const csvContent = [
                headers.join(','),
                ...results.map(result => [
                    `"${result.name}"`,
                    result.score,
                    result.correct,
                    result.wrong,
                    result.unanswered,
                    `"${Math.floor(result.timeTaken / 60)}:${(result.timeTaken % 60).toString().padStart(2, '0')}"`,
                    `"${result.date}"`
                ].join(','))
            ].join('\n');

            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `scr_quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error exporting CSV:', error);
            alert('Error exporting data.');
        }
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }
}

// Initialize the application when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SCRQuizApp();
});