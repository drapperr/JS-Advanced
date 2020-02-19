class Forum {
    _users = [];
    _questions = [];
    _id = 1;
    loggedUsers = [];

    constructor() {
    }

    register(username, password, repeatPassword, email) {
        if (username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error("Input can not be empty");
        }

        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }

        if (this._users.find(u => u.username === username)) {
            throw new Error("This user already exists!");
        }

        this._users.push({
            username,
            password,
            email
        });

        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        let user = this._users.find(u => u.username === username);

        if (!user) {
            throw new Error("There is no such user");
        }

        if (user.password===password) {
            this.loggedUsers.push(user);
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password){
        let user=this._users.find(x=>x.username===username);

        if (!user) {
            throw new Error("There is no such user");
        }
        let i =this.loggedUsers.indexOf(user);

        if (user.password===password) {
            this.loggedUsers.splice(i,1);
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question){
        let user=this.loggedUsers.find(x=>x.username===username);

        if (!user) {
            throw new Error("You should be logged in to post questions")
        }

        if (question==='') {
            throw new Error("Invalid question");
        }
        this._questions.push({
            id: this._id,
            username,
            question,
            answers:[]
        });
        this._id++;
        return "Your question has been posted successfully";
    }

    postAnswer(username,questionId, answer){
        let user=this.loggedUsers.find(x=>x.username===username);

        if (!user) {
            throw new Error("You should be logged in to post answers");
        }
        
        if (answer==='') {
            throw new Error("Invalid answer");
        }

        let question=this._questions.find(x=>x.id===questionId);

        if (!question) {
            throw new Error("There is no such question");
        }

        question.answers.push({
            username,
            answer
        });

        return "Your answer has been posted successfully";
    }

    showQuestions(){
        let result=[];
        
        this._questions.forEach(x=>{
            result.push(`Question ${x.id} by ${x.username}: ${x.question}`);
            x.answers.forEach(y=>{
                result.push(`---${y.username}: ${y.answer}`);
            })
        })

        return result.join('\n');
    }
}


let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");
