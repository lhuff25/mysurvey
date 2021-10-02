const defaultSurveyJSON ={
        "title": "Fitness Survey",
        "description": "A survey designed to collect data on fitness habits and there correlation with mental & physical health",
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question5",
            "title": "What is your gender?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Male"
             },
             {
              "value": "item2",
              "text": "Female"
             },
             {
              "value": "item3",
              "text": "Other"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "How old are you?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Under 14"
             },
             {
              "value": "item2",
              "text": "14-19"
             },
             {
              "value": "item3",
              "text": "20-30"
             },
             {
              "value": "item4",
              "text": "31-40"
             },
             {
              "value": "item5",
              "text": "41-50"
             },
             {
              "value": "item6",
              "text": "50+"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "Question 3",
            "title": "How would you identify yourself?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Underweight"
             },
             {
              "value": "item2",
              "text": "\"Normal\" Weight"
             },
             {
              "value": "item3",
              "text": "Overweight"
             },
             {
              "value": "item4",
              "text": "Obese"
             }
            ]
           },
           {
            "type": "radiogroup",
            "name": "question",
            "title": "How often do you exercise?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Never"
             },
             {
              "value": "item2",
              "text": "Once or Twice a month"
             },
             {
              "value": "item3",
              "text": "Weekly"
             },
             {
              "value": "item4",
              "text": "A few times a week"
             },
             {
              "value": "item5",
              "text": "Daily"
             },
             {
              "value": "item6",
              "text": "Twice a day or more"
             }
            ]
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "checkbox",
            "name": "question1",
            "title": "What kind of exercise do you partake in? ",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Aerobic"
             },
             {
              "value": "item2",
              "text": "Anerobic"
             },
             {
              "value": "item3",
              "text": "Recreational"
             },
             {
              "value": "item4",
              "text": "Stretching/Mobility"
             }
            ]
           },
           {
            "type": "boolean",
            "name": "question12",
            "title": "Do you indulge in SARMS or Steroids? ",
            "isRequired": true
           },
           {
            "type": "radiogroup",
            "name": "question2",
            "title": "How often do you feel depressed sad or hopelessness? ",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Never "
             },
             {
              "value": "item2",
              "text": "Rarely "
             },
             {
              "value": "item3",
              "text": "Once a week"
             },
             {
              "value": "item4",
              "text": "Several days a week or more"
             }
            ]
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question3",
            "title": "How would you describe your stress levels?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Non-existent"
             },
             {
              "value": "item2",
              "text": "Low"
             },
             {
              "value": "item3",
              "text": "Average"
             },
             {
              "value": "item4",
              "text": "High"
             },
             {
              "value": "item5",
              "text": "Very High"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question6",
            "title": "Do any of these daily activities cause you discomfort or difficulty?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Walking up a staircase"
             },
             {
              "value": "item2",
              "text": "Bending down to pick something up"
             },
             {
              "value": "item3",
              "text": "Carrying groceries "
             },
             {
              "value": "item4",
              "text": "Being mobile for more than 2 minutes"
             },
             {
              "value": "item5",
              "text": "Putting stuff on a self"
             },
             {
              "value": "item6",
              "text": "Getting out of a chair or bed"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question4",
            "title": "Are you suffering from any of these conditions?",
            "isRequired": true,
            "choices": [
             {
              "value": "item1",
              "text": "Diabetes"
             },
             {
              "value": "item2",
              "text": "Arthritis"
             },
             {
              "value": "item3",
              "text": "Heart Disease"
             },
             {
              "value": "item4",
              "text": "Cancer"
             }
            ]
           }
          ],
          "title": " "
         }
        ]
       }
const defaultSurveyCSS = {
    header: 'bg-primary text-white p-3',
    body: 'bg-light',
    completedPage: 'p-3'
};

const defaultSurveyDATA = {
};

const defaultSurveyConfig = {
    defaultSurveyCSS,
    defaultSurveyDATA,
    defaultSurveyJSON
}

export default defaultSurveyConfig;