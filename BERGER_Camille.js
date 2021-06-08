/*TODO: add more exercice trials ?*/

//Intro
var welcome_0 = {
    type: "survey-multi-choice",
    questions:[{
        prompt:"<p> <embed src=\"information_letter_consent.pdf\" type=\"application/pdf\" width=\"200%\" height=\"400px\" view=Fit> </p>",options: ["I consent to participate"]
    }],
}

var welcome_1 = {
    type: "html-button-response",
    stimulus: "<p>Welcome and thank you for your participation.</p> <p>This experiment will require you to answer a series of small problems.</p>",
    choices: ["Continue"]
};

var welcome_2 = {
    type: "html-button-response",
    stimulus: "<p>Each problem involves choosing an answer from among several options .</p><p> Once you will have submitted your answer, <b>you will be asked to explain why you gave that answer. <br/> <u>Please provide an explanation in at least two sentences.</u></b></p>",
    choices: ["Continue"]
};
//Training

options_0 = ["All the fruits are organic", "None of the fruits are organic", "Some fruits are organic", "Some fruits are not organic","We cannot tell anything for sure about whether fruits are organic in this shop"]
options_0b = ["All the apples are organic", "None of the apples are organic", "Some apples are organic", "Some apples are not organic", "We cannot tell anything for sure about whether apples are organic"]

var training_message = {
    type: "html-button-response",
    stimulus: "<p>We will provide you with a few practice trials, so as to familiarize you with the task.</p> <p> When you hit \"continue\" you will see the first example.</p>", required: true,
    choices: ["Continue"]
}

var training_1 = {
    type: "survey-multi-choice",
    questions:[
        {
        prompt:"<p> You are visiting a fruit and vegetable shop. The shop carries, among other products, apples. <br/> You learn that: None of the apples are organic.<br/>" +
            "What can you say for sure about whether fruits are organic in this shop? ", required: true, options: options_0, name:"valu"
        }
    ]
}

var explanation_training_1 = {
    type:"survey-text",
    questions:[{
        prompt:"<p>Can you please explain why you gave this answer?<br/><b>Please provide an explanation in at least two sentences.</b> ", rows: 3, required:true, name:"valu",
    }],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
}

var training_2 = {
    type: "survey-multi-choice",
    questions:[{
        prompt:"<p>Another fruit and vegetable shop carries, among other products, apples. <br/> You learn that in this shop: All the fruits are organic.<br/>" +
            "What can you say for sure about whether apples are organic in this shop? ", required: true, options: options_0b, name:"valu"
    }]
}

var explanation_training_2 = {
    type:"survey-text",
    questions:[{
        prompt:"<p>Can you please explain why you gave this answer?<br/><b>Please provide an explanation in at least two sentences.</b> ", rows:3, required:true, name:"valu",
    }],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
}

var phase_2_training = {
    type:"html-button-response",
    stimulus:"<p>We will now proceed to the second phase of the practice trials.</p> <p> In this phase, for each of the two problems you received, you will " +
        "read the answer given by another participant <br/> along with the explanation they provided. Keep in mind that each answer" +
        " comes from a different participant. <br/> After reading the other participant's answer, you will be given the opportunity <br/>to change your answer in light of the new information" +
        " if you wish.</p>",
    choices:["Continue"]
}

var welcome_4 = {
    type: "html-button-response",
    stimulus: "<p>The problems you'll be shown still revolve around fruit shops:</p><p>You are going down a main commercial street, " +
        "<br/>entering several different fruit shops along the way. All of these shops sell apples.<br/></p><p>You will be provided a certain rule about each fruit shop that" +
        "<br/> can help you make your purchases.</p>",
    choices: ["Continue"]
};

var welcome_3 = {
    type: "html-button-response",
    stimulus: "<p>You've successfully completed the practice problems.<br/> You are about to begin the experiment.<br/> When you click \"continue\" you will be starting the experiment</p>",
    choices: ['Continue']
}



//###Phase1
var options_1 = ["The apples are industrial","The apples are not industrial","We cannot tell for sure whether apples are industrial"]

var options_2 = ["The apples were cultivated with pesticides", "The apples were not cultivated with pesticides", "We cannot tell for sure whether apples were cultivated with pesticides"]


var multi_choice_1 = {
    type: 'survey-multi-choice',
    questions: [
        {prompt:"<p>In the first fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\" <br/>" +
                " Your also told: \"The apples are not industrial.\"     </p>" +
                "<p>What can you say for sure about the shop's apples? ", options: options_2, required: true, name:"valu"}],
    correct_response: "The apples were not cultivated with pesticides",
}


var multi_choice_2 = {
    type: 'survey-multi-choice',
    questions: [
        {prompt:"<p>In the second fruit shop, you are told that: <br/> \"If apples are cultivated with pesticides, they are declared industrial.\"<br/> You are also told:" +
                " \"The apples are industrial.\"     </p>" +
                "<p>What can you say for sure about the shop's apples? ", options: options_2, required: true, name:"valu"}],
    correct_response: "We cannot tell for sure whether apples were cultivated with pesticides", name:"valu"
}


var multi_choice_3 = {
    type: 'survey-multi-choice',
    questions: [
        {prompt:"<p>In the third fruit shop, you are told that: <br/>\"If apples are cultivated with pesticides, they are declared industrial.\"<br/> You are also told:" +
                " \"The apples are not cultivated with pesticides.\"</p>     \n" +
                "<p>What can you say for sure about the shop's apples? ", options: options_1, required: true, name:"valu"}],
    correct_response:"We cannot tell for sure about whether apples are industrial", name:"valu"
}



var multi_choice_4 = {
    type: 'survey-multi-choice',
    questions: [
        {prompt:"<p>In the fourth fruit shop, you are told that:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\" <br/>You are also told:" +
                " \"The apples are cultivated with pesticides.\"</p>\n" +
                "<p>What can you say for sure about the shops's apples? ", options: options_1, required: true, name:"valu"}],
    correct_response: "The apples are industrial", name:"valu"
}

var multi_choice_training_1 =
    {
        type: 'survey-multi-choice',
        questions: [
            {prompt: "",
                options: options_0b, required: true}
        ],
        correct_response: "The apples are industrial", name:"valu",
    }

var multi_choice_training_2 =
    {
        type: 'survey-multi-choice',
        questions: [
            {prompt: "",
                options: options_0, required: true}
        ],
        correct_response: "The apples are industrial", name:"valu"
    }



var phase_2_message =
    {
        type: 'html-button-response',
        stimulus:"<p>We will now proceed to the second phase of the experiment.<br/> For each of the four problems, we will" +
            " <br/> a) show you the answer given by another participant, along with <br/> b) their explanation. <br/>Keep in mind that" +
            " each answer was provided by a different participant. </p><p> Also keep in mind that you will be given the opportunity to change <br/> your answer, in light of the information" +
            " provided by the other participant!</p>",
        choices:["Continue"]

    }

var multi_choice_5 =
    {
        type: 'survey-multi-choice',
        questions: [
            {prompt: "",
                options: options_2, required: true}
        ],
        correct_response: "The apples are industrial", name:"valu"
    }

var multi_choice_6 =
    {
        type: 'survey-multi-choice',
        questions: [
            {prompt: "",
                options: options_2, required: true}
        ],
        correct_response: "The apples are industrial", name:"valu"
    }

var multi_choice_7 =
    {
        type: 'survey-multi-choice',
        questions: [
            {prompt: "",
                options: options_1, required: true}
        ],
        correct_response: "The apples are industrial",name:"valu"
    }



var multi_choice_8 =
    {
        type: 'survey-multi-choice',
        questions: [
            {prompt: "",
                options: options_1, required: true}
        ],
        correct_response: ""
    }

//####Phase2
//###Non manipulated syllogisms
//##If the answer is valid
//#"Your answer was [answer]
//#The answer of a previous participant was |invalid|
//#And the explanation was |invalid explanation|
//#What do you think now" :
//#[answer]
//#|invalid|

//#If the answer is invalid
//#"Your answer was [answer]
//#The answer of a previous participant was |valid|
//#And the explanation was |valid explanation|
//#What do you think now" :
//#[answer]
//#|valid|

//###Manipulated syllogism
//##If the answer is valid
//#"Your answer was |invalid|
//#The answer of a previous participant was [answer]
//#And the explanation was [explanation]
//#What do you think now" :
//#|invalid|( keep invalid)
//#[answer] (change to own valid)

//##If the answer is invalid
//#"Your answer was [valid]
//#The answer of a previous participant was [answer]
//#And the explanation was [explanation]
//#What do you think now" :
//#|valid| (keep valid)
//#[answer] (change to own invalid)



/*var multi_choice_5 = {
    type: 'html-keyboard-response',
    stimulus:
}*/

var explanation_1 = {
    type: 'survey-text',
    questions: [
        {prompt: "<p>Can you please explain why you gave this answer?<br/><b>Please provide an explanation in at least two sentences.</b>", rows:3, required: true, name:"valu"},
    ],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var explanation_2 = {
    type: 'survey-text',
    questions: [
        {prompt: "<p>Can you please explain why you gave this answer?<br/><b>Please provide an explanation in at least two sentences.</b> ", rows:3, required: true, name:"valu"},
    ],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var explanation_3 = {
    type: 'survey-text',
    questions: [
        {prompt: "<p>Can you please explain why you gave this answer?<br/><b>Please provide an explanation in at least two sentences.</b> ", rows:3, required: true, name:"valu"},
    ],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var explanation_4 = {
    type: 'survey-text',
    questions: [
        {prompt: "<p>Can you please explain why you gave this answer?<br/><b>Please provide an explanation in at least two sentences.</b> ", rows:3, required: true, name:"valu"},
    ],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var transition = {
    type: 'html-button-response',
    stimulus: "The trials have ended. We now request that you answer the questionnaire.",
    choices: ["Continue"]
}

var questionnaire_1 = {
    type: 'survey-text',
    questions: [
        {prompt: "What did you think of the experiment? ", rows:3, required: true, name:"valu"},
    ],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var questionnaire_2 = {
    type: 'survey-text',
    questions: [
        {prompt: "Did you think anything was strange while doing the experiment? ", rows:3, required: true, name:"valu"},
    ],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var questionnaire_3 = {
    type: 'survey-multi-choice',
    questions: [
        {prompt: "<p>During the second phase, in one or more problem, your previously provided answer had been changed <br/> to another answer," +
                " and the \"someone else's answer and argument\" were actually the ones <br/> you had previously given." +
                " Did you notice this? ", options: ["Yes","No"], required: true, name:"valu"},
    ],
};

var how_clear = {
    type: 'html-slider-response',
    data: { questionId: "debrief-clarity" },
    stimulus: "How clear were the instructions?",
    labels: ["Very confusing", "Clear enough", "Perfectly clear"],
    step: 25
}

var any_confusions = {
    type: 'survey-text',
    data: { questionId: "debrief-confusion" },
    questions: [{prompt: "What, if anything, confused you while addressing the tasks at hand?", rows: 3}],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var questionnaire_4 = {
    type: 'survey-text',
    questions: [{prompt: "Feel free to provide any additional feedback in this field.", rows: 3}],
    on_load: function(){
        var text_area = document.getElementsByTagName("textarea")[0];
        text_area.style.fontSize = "14px"; // overules auto-assigned value
        text_area.style.width = "600px";
    }
};

var ID ={
    type: 'survey-text',
    questions: [
        {prompt: "Please enter your Prolific ID", required: true
        }
    ]
}

var thanks ={
    type: 'html-keyboard-response',
    stimulus: '<p>Thank you, you have completed the study. <a href="https://app.prolific.co/submissions/complete?cc=305923F8">Click here to be redirected to the completion URL</a></p> <p>Contact: camilleDOTbergerATetu.u-paris.fr</p>',
    choices: jsPsych.NO_KEYS
}

var demographics_block = {
    type: "survey-dropdown",
    preamble: "<h1>Demographic questionnaire</h1><p>Please answer the following demographic questions.  Your payment will not be affected by your answers.</p>",
    questions: [
        { prompt: "What is your college-level background in psychology, philosophy, linguistics, and logic?",
            options: [ "----",
                "None",
                "1 undergraduate-level course",
                "2 or more undergraduate-level courses",
                "1 or more graduate-level courses" ],
            labels: [ "NA", "none", "1ug", "2+ug", "1+g" ] },
        { prompt: "What is your gender?",
            options: [ "----", "Male", "Female", "Other", "Prefer not to say" ],
            labels: [ "NA", "male", "female", "other", "NA"] },
        { prompt: "How old are you?",
            options: [ "----",
                "Less than 18",
                "18 to 24",
                "25 to 34",
                "35 to 44",
                "45 to 54",
                "55 to 64",
                "65 to 74",
                "75 or older" ],
            labels: [ "NA", "-18", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+" ]
        }
    ],
    data: { questionId: "demo" }
};

var timeline = [
    welcome_0,
    ID,
    welcome_1,
    welcome_2,
    training_message,
    training_1,
    explanation_training_1,
    training_2,
    explanation_training_2,
    phase_2_training,
    multi_choice_training_2,
    multi_choice_training_1,
    welcome_3,
    welcome_4,
    multi_choice_1,
    explanation_1,
    multi_choice_2,
    explanation_2,
    multi_choice_3,
    explanation_3,
    multi_choice_4,
    explanation_4,
    phase_2_message,
    multi_choice_5,
    multi_choice_6,
    multi_choice_7,
    multi_choice_8,
    transition,
    questionnaire_1,
    questionnaire_2,
    questionnaire_3,
    how_clear,
    any_confusions,
    questionnaire_4,
    demographics_block,
    thanks
]


jsPsych.init({

    questionCount: 0,
    show_progress_bar: true,
    timeline: timeline,
    on_finish: function() {
        jsPsych.data.addProperties({subject: 1, condition: 'E3'})
        jsPsych.data.displayData();
        var experiment_data = jsPsych.data.get();
        experiment_data.localSave('csv', 'data.csv');
    },
    on_trial_finish: function(data) {

        //console.log(JSON.stringify(data));
        //console.log(data.response.valu);

        console.log(data.trial_index)
        if(data.trial_index == 5) {
            console.log(multi_choice_training_1.questions[0].prompt)
            jsPsych.data.addProperties({correct_response: "We cannot tell anything for sure about whether fruits are organic in this shop"})
            if (jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                multi_choice_training_2.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/>\"You are visiting a fruit and vegetable shop. The shop carries, among other products, apples. <br/> You learn that: None of the apples are organic.<br/>" +
                    "<p>What can you say for sure about whether fruits are organic in this shop?\"</p> " +
                    "<p><b><u>Your answer was: </u></b><br/>\"" + data.response.valu + "\"</p> " +
                    " <p><b><u>The answer of a previous participant was:</u></b><br/>\"Some fruits are not organic\"</p>" +
                    " <p><b><u>And the explanation was:</u></b><br/>\"Apples are a fruit," +
                    " so if no apples are organic, then some fruits are not organic\"<br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            } else {/* Invalid answer*/
                multi_choice_training_2.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/>\"You are visiting a fruit and vegetable shop. The shop carries, among other products, apples. <br/> You learn that: None of the apples are organic." +
                    " <p>What can you say for sure about whether fruits are organic in this shop?\"</p><p><b><u> Your answer was: </u></b><br/> \"" + data.response.valu + "\"</p>" +
                    " <p><b><u>The answer of a previous participant was:</u></b><br/>\"We cannot tell anything for sure about whether fruits are organic in this shop\"" +
                    " <p><b><u>And the explanation was:</u></b><br/> \"It says that the apples aren't organic. But it doesn't say" +
                    " anything about other fruits being or not being organic.\" <br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            }
        }
        if(data.trial_index == 7){
                jsPsych.data.addProperties({correct_response:"All the apples are organic"})
                if(jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                    multi_choice_training_1.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/>\"Another fruit and vegetable shop carries, among other products, apples. <br/>You learn that in this shop: All the fruits are organic.<br/>\"" +
                        "<p>What can you say for sure about whether apples are organic in this shop?\"</p> " +
                        "<p><b><u>Your answer was: </u></b><br/>\"" + data.response.valu + "\"</p> " +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/>\"Some apples are organic\"</p>" +
                        " <p><b><u>And the explanation was:</u></b><br/>\"Apples are a fruit," +
                        " so if all fruits are organic, at least some apples are organic\"<br/></p>" +
                        " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
                } else {/* Invalid answer*/
                    multi_choice_training_1.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/>\"Another fruit and vegetable shop carries, among other products, apples. <br/> You learn that in this shop: All the fruits are organic." +
                        " <p>What can you say for sure about whether fruits are organic in this shop?\"</p><p><b><u> Your answer was: </u></b><br/> \"" + data.response.valu + "\"</p>" +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/>\"All the apples are organic\"" +
                        " <p><b><u>And the explanation was:</u></b><br/> \"All the fruits are organic" +
                        " and apples are parts of the fruits, so all the apples are organic.\" <br/></p>" +
                        " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
                }
        }
        if(data.trial_index == 14){
            jsPsych.data.addProperties({correct_response: "The apples were not cultivated with pesticides"})
            if(jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                multi_choice_5.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/>\"In the first fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\" " +
                    " <br/>You are also told: " +
                    " \"The apples are not industrial.\"     </p>" +
                    " <p>What can you say for sure about whether apples were cultivated with pesticides in this shop?\"</p><p><b><u>Your answer was: </u></b><br/>\"" + data.response.valu + "\"</p> " +
                    " <p><b><u>The answer of a previous participant was:</u></b><br/>\"We cannot tell for sure whether fruits are cultivated with pesticides\"</p>" +
                    " <p><b><u>And the explanation was:</u></b><br/>\"We only know that apples are not industrial," +
                    " but it is possible for them to have been cultivated in other ways than without pesticides, which would make them not industrial\"<br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            } else {/* Invalid answer*/
                multi_choice_5.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/>\"In the first fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                    " <br/>You are also told:" +
                    " \"The apples are not industrial.\"     </p>" +
                    " <p>What can you say for sure about whether apples were cultivated with pesticides in this shop?\"</p><p><b><u> Your answer was: </u></b><br/> \"" + data.response.valu + "\"</p>" +
                    " <p><b><u>The answer of a previous participant was:</u></b><br/>\"The apples were not cultivated with pesticides\" \n" +
                    " <p><b><u>And the explanation was:</u></b><br/> \"It says that the apples are not industrial, so it can't possibly be cultivated with pesticides : \n" +
                    " as soon as pesticides are used, then the apples can be judged industrial.\" <br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            }
        }
        if(data.trial_index == 16){
            jsPsych.data.addProperties({correct_response: "We cannot tell for sure whether apples were cultivated with pesticides"})
            if(jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                multi_choice_6.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the second fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                    " <br/>You are also told:" +
                    " \"The apples are industrial.\"     </p>" +
                    " <p>What can you say for sure about whether apples were cultivated with pesticides in this shop?\"</p><p><b><u> Your answer was: </u></b><br/>\"" + data.response.valu + "\" </p> " +
                    " <p><b><u>The answer of a previous participant was:</u></b><br/> \"The apples were cultivated with pesticides\" \n" +
                    " <p><b><u>And the explanation was:</u></b><br/> \"It is stated that the apples are industrial. \n" +
                    " The use of pesticides is what causes the apples to be called industrial. Therefore, the apples are cultivated with pesticides\" <br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            } else {/* Invalid answer*/
                multi_choice_6.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the second fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                    " <br/>You are also told:" +
                    " \"The apples are industrial.\"     </p>" +
                    " <p>What can you say for sure about whether apples were cultivated with pesticides in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \"" + data.response.valu + "\" </p> " +
                    " <p><b><u>The answer of a previous participant was:</u></b><br/> \"We cannot tell for sure whether apples were cultivated with pesticides\" \n" +
                    " <p><b><u>And the explanation was:</u></b><br/> \"It is stated that the apples are industrial, but it could be for other \n" +
                    " reasons than being cultivated with pesticides. The rule only mentioned that being cultivated with pesticide means it is industrial, \n" +
                    " but other things could make it industrial, the rule would still hold\"<br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            }
        }
        if(rand > 0.5){
            if(data.trial_index == 18){
                jsPsych.data.addProperties({correct_response: "We cannot tell for sure whether apples are industrial"})
                if(jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                    multi_choice_7.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the third fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told: " +
                        " \"The apples are not cultivated with pesticides.\"     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \"The apples are not industrial\" </p>" +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/> \"" + data.response.valu + "\""
                } else {/* Invalid answer*/
                    multi_choice_7.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the third fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told: " +
                        " \"The apples are not cultivated with pesticides.\"     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \"We cannot tell for sure whether apples are industrial\" </p> " +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/> \""+ data.response.valu + "\" \n"
                }
            }
            if(data.trial_index == 19){
                multi_choice_7.questions[0].prompt = multi_choice_7.questions[0].prompt +
                    " <p><b><u>And the explanation was:</u></b><br/> \"" + data.response.valu + "\"<br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            }
            if(data.trial_index == 20){
                jsPsych.data.addProperties({correct_response: "The apples are industrial"})
                if(jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                    multi_choice_8.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the fourth fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told: " +
                        " \"The apples are cultivated with pesticides.\"     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \"" + data.response.valu + "\" </p> " +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/> \"We cannot tell for sure whether apples are industrial\" \n" +
                        " <p><b><u>And the explanation was:</u></b><br/> \"We only know that apples are cultivated with pesticides, but" +
                        " we don't know about other things about their cultivation. So there is nothing to tell for sure.\" <br/></p>" +
                        " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
                } else {/* Invalid answer*/
                    multi_choice_8.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the first fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told: " +
                        " \"The apples are cultivated with pesticides.     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \"" + data.response.valu + "\" </p> " +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/> \"The apples are industrial\" \n" +
                        " <p><b><u>And the explanation was:</u></b><br/> \"Apples are cultivated with pesticides." +
                        " Regardless of other factors, the rule says that if the apples are cultivated with pesticides, then they are industrial\"<br/></p>" +
                        " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
                }
            }
        }
        if(rand < 0.5){
            if(data.trial_index == 18){
                jsPsych.data.addProperties({correct_response: "We cannot tell for sure whether apples are industrial"})
                if(jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                    multi_choice_7.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the third fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told:" +
                        " \"The apples are not cultivated with pesticides.\"     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \"" + data.response.valu + "\"" +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/> \"The apples are not industrial\"" +
                        " <p><b><u>And the explanation was:</u></b></p> \"The use of pesticides is what turns the apple industrial. If there are no pesticides, then the apples are not industrial\"" +
                        " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
                } else {/* Invalid answer*/
                    multi_choice_7.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the third fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told: " +
                        " \"The apples are not cultivated with pesticides.\"     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \""+ data.response.valu + "\" </p> " +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/>\"We cannot tell for sure whether apples are industrial\"" +
                        " <p><b><u>And the explanation was:</u></b></p> \"We only know that some apples are cultivated without pesticides, but they could still be declared industrial due to something else.\"" +
                        " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
                }
            }

            if(data.trial_index == 20) {
                jsPsych.data.addProperties({correct_response: "The apples are industrial"})
                if (jsPsych.pluginAPI.compareKeys(data.response.valu, data.correct_response)) {/*Valid answer*/
                    multi_choice_8.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the fourth fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told: " +
                        " \"The apples are cultivated with pesticides.\"     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/>\"We cannot tell for sure whether apples are industrial" + "\" </p> " +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/> \"" + data.response.valu + "\""
                } else {/* Invalid answer*/
                    multi_choice_8.questions[0].prompt = "<p><b><u>You were asked the following question:</u></b><br/> \"In the first fruit shop, you are told the following:<br/> \"If apples are cultivated with pesticides, they are declared industrial.\"" +
                        " <br/>You are also told: " +
                        " \"The apples are cultivated with pesticides.\"     </p>" +
                        " <p>What can you say for sure about whether apples are industrial in this shop?\"</p><p><b><u> Your answer was:</u></b><br/> \"The apples are industrial\" </p> " +
                        " <p><b><u>The answer of a previous participant was:</u></b><br/>  \"" + data.response.valu + "\""
                }
            }
            if(data.trial_index == 21) {
                multi_choice_8.questions[0].prompt = multi_choice_8.questions[0].prompt +
                    " <p><b><u>And the explanation was:</u></b><br/> \"" + data.response.valu + "\"<br/></p>" +
                    " <p><b>You can now re-answer this question.</b> According to you, what is the right answer? "
            }

        }
        if(data.trial_index == 35){
            jsPsych.data.addProperties({subject: 1, condition: 'E3'})
            jsPsych.data.displayData();
            var experiment_data = jsPsych.data.get();
        }
        /*if(data.trial_index == 2){

            multi_choice_6.questions[0].prompt = "When asked \"If apples are cultivated with pesticides, they can be declared industrial." +
                " In the third fruit and vegetable shop:\n" +
                " The apples are not industrial.     \n" +
                " What can you say for sure about whether they were cultivated with pesticides?\"," +
                " your answer was: \"" + data.response.valu +"\" \n "
        }
        if(data.trial_index == 3){
            multi_choice_6.questions[0].prompt = multi_choice_6.questions[0].prompt + "and your explanation was \n" + data.response.valu
            + "\n The answer of a previous participant was :"
            +" \"The apples are cultivated with pesticides. " +
            "And the explanation was: " +
            "\"It states that the apples are industrial. The use of pesticides causes the apple to be called industrial.\"\n" +
            "Therefore, the apples are cultivated with pesticides.\" \n" +
            "You can now re-answer this question. According to you, what is the right answer ?\n"
        }*/


        /*let exp;
        if (data.trial_index == 3) {
            exp = data.questions[0].prompt.response.valu
            console.log(data.questions[0].prompt.response.valu)
        }*//*
        if(data.trial_index == 4){

            multi_choice_7.questions[0].prompt = "When asked \"If apples are cultivated with pesticides, they can be declared industrial." +
                " In the third fruit and vegetable shop:\n" +
                " The apples are not cultivated with pesticides.     \n" +
                " What can you say for sure about whether they are industrial?\"," +
                " your answer was: \"The fruits are not industrial\" \n " +
                " The answer of a previous participant was: \n " +
                data.response.valu +
                " And the explanation was: " + exp +
                " You can now re-answer this question. According to you, what is the right answer ?"
        }*/
    }
})

const rand = Math.random()