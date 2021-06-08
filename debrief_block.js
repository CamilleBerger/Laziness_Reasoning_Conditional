var st_ling = true;
var st_vis = true;
var expmes = true;

var thank_you = {
  type: 'instructions',
  show_clickable_nav: true,
  pages: ["<div style='center-align'>Thank you for completing the experiment. Please press 'Next' below to complete a short debrief questionnaire and then receive your mTurk payment code.</div>"],
  data: { questionId: "instructions" },
  allow_keys: false,
  allow_backward: false,
};

var how_clear = {
  type: 'html-slider-response',
  data: { questionId: "debrief-clarity" },
  stimulus: "How clear were the instructions?",
  labels: ["Very confusing", "Clear enough", "Perfectly clear"],
  step: 25
}

// River dam
var what_strategies_river = {
    type: 'survey-text',
    data: { questionId: "debrief-strategy" },
    questions: [{prompt: "How did you (or did not) conclude that the blue dam broke? What strategy did you use?", rows: 4}],
    on_load: function(){
      var text_area = document.getElementsByTagName("textarea")[0];
      text_area.style.fontSize = "18px"; // overules auto-assigned value
      text_area.style.width = "600px";
    }
};

// Orange juice
var what_strategies_orange = {
  type: 'survey-text',
  data: { questionId: "debrief-strategy" },
  questions: [{prompt: "In the scenario you just saw, how did you decide which other mechanism had to be broken? What strategy did you use?", rows: 4}],
  on_load: function(){
    var text_area = document.getElementsByTagName("textarea")[0];
    text_area.style.fontSize = "18px"; // overules auto-assigned value
    text_area.style.width = "600px";
  }
};

// Switches
var what_strategies_switches = {
  type: 'survey-text',
  data: { questionId: "debrief-strategy" },
  questions: [{prompt: "In the scenario you just saw, how did you decide which other switch had to be on? What strategy did you use?", rows: 4}],
  on_load: function(){
    var text_area = document.getElementsByTagName("textarea")[0];
    text_area.style.fontSize = "18px"; // overules auto-assigned value
    text_area.style.width = "600px";
  }
};

var any_confusions = {
  type: 'survey-text',
  data: { questionId: "debrief-confusion" },
  questions: [{prompt: "What, if anything, confused you while addressing the tasks at hand?", rows: 3}],
  on_load: function(){
    var text_area = document.getElementsByTagName("textarea")[0];
    text_area.style.fontSize = "18px"; // overules auto-assigned value
    text_area.style.width = "600px";
  }
};

function make_debrief_block (trial_name) {
  var debrief_block = [];

  // Add missing trial name to data structure
  thank_you["data"]["scenario"] = trial_name;
  how_clear["data"]["scenario"] = trial_name;
  any_confusions["data"]["scenario"] = trial_name;

  debrief_block.push(thank_you);
  debrief_block.push(how_clear);

  switch (trial_name) {
    case "orange":
      what_strategies_orange["data"]["scenario"] = trial_name;
      debrief_block.push(what_strategies_orange);
      break;
    case "river":
      what_strategies_river["data"]["scenario"] = trial_name;
      debrief_block.push(what_strategies_river);
      break;
    case "switches":
      what_strategies_switches["data"]["scenario"] = trial_name;
      debrief_block.push(what_strategies_switches);
      break;
    default:
  }

  debrief_block.push(any_confusions);

  return debrief_block;
}
