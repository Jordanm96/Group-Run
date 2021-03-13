# Project Overview

## Project Name
Group-Run


## Project Description
Group-Run is an Airtable and React build where the user is able to enter in and keep track of their runs/jogs. The homepage will list out all the runs that have been submitted via form. It will have a section that leads the user to the form where they may enter in their run information including: the date, location, distance, time, calories burned and an emoji ranking system that will let them rate how easy/fun/challenging a specific run was. Each entry will be tracked on the homepage so the user can view their progress. They will also be able to edit/delete any workouts they submit as well.

## Wireframes
I included 3 MQ layouts. Each one has a homepage, form/edit component(pretty much identical), and the specific run component which is going to be linked to clicking on a run from the homepage. The homepage will have options to edit and delete a post.

Regular Browser:
[Homepage](https://wireframe.cc/bsCMUU)
[Form Component](https://wireframe.cc/2xOC8C)
[Edit Component](https://wireframe.cc/NIhNQt)
[Specific Run Component](https://wireframe.cc/yCg7Ul)

Phone:
[Homepage](https://wireframe.cc/iNqqHy)
[Form Component](https://wireframe.cc/nm1EGs)
[Edit Component](https://wireframe.cc/l5ynUD)
[Specific Run Component](https://wireframe.cc/AU5U6z)

Tablet:
[Homepage](https://wireframe.cc/uIUL3w)
[Form Component](https://wireframe.cc/W876uP)
[Edit Component](https://wireframe.cc/MRlotu)
[Specific Run Component](https://wireframe.cc/Azv2nM)

## Component Heirarchy
I want a component that will have route to /specificrun.
The homepage maps out all of the runs. (add an edit and delete button for each run)
When you click on the run it will link to /specificrun which has all the info for that run on it

[My component heirarchy](https://imgur.com/ehwd0aw)

## Airtable Sample

https://airtable.com/tbld24sbpYe5O0OAX/viwwAvtTbXMXsdlp5?blocks=hide

Sample return 

    "records": [
        {
            "id": "recGvcUXmKI2pKRSz",
            "fields": {
                "date": "2021-03-13",
                "distance": 3.2,
                "time": 1800,
                "caloriesBurned": 250,
                "difficulty": "easy",
                "additionalNotes": "had to cut my run short due to the weather"
            },
            "createdTime": "2021-03-13T23:13:34.000Z"
        }
    ],
    "offset": "recGvcUXmKI2pKRSz"

## MVP/PostMVP

#### MVP
- Homepage with all runs tracked and mapped out in a column
- Get and post runs from Airtable
- Use forms to create new runs and update them on Airtable/the homepage
- setToggleFetch, useHistory("/")

#### PostMVP
- Delete runs from the homepage
- Allow edits to past runs
- Include a box at the top that will always have the users best run based on distance and speed
- Include a location input on the form component

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Mar 13-15| Prompt / Wireframes / Component Heirarchy / Timeframes | Incomplete
|Mar 15| Project Approval | Incomplete
|Mar 15-16| Create Components/ Get,Set Data| Incomplete
|Mar 16-17| Create basic CSS for all Media-queries| Incomplete
|Mar 18| MVP | Incomplete
|Mar 18-19| Advanced CSS/ Darkmode,Lightmode | Incomplete
|Mar 19-21| PMVP/Finalize CSS | Incomplete
|March 22| Presentations | Incomplete

## Timeframes

I think i need to add more things in here, not sure what yet.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 2hrs| 2hrs | hrs |
| Airtable Setup | H | 1hrs| hrs | hrs |
| useEffect() | H | 1.5hrs| hrs | hrs |
| Header Component | H | 2hrs| hrs | hrs |
| Run Component | H | 4hrs| hrs | hrs |
| Form Component | H | 3hrs| hrs | hrs |
| Route/Link | H | 4hrs| hrs | hrs |
| Header CSS | H | 2hrs| hrs | hrs |
| Run CSS | H | 5hrs| hrs | hrs |
| Form CSS | H | 4hrs| hrs | hrs |
| Media-queries | H | 8hrs| hrs | hrs |
| Total | H | 36.5hrs| hrs | hrs |

## SWOT Analysis

### Strengths:
I have a pretty good understanding of how to use CRUD and seperate out my Components.

### Weaknesses:
I am not sure exactly how I want my project to look at the moment. I hope to create a solid wireframe initially but may have to make some changes based on the different Media Queries.

### Opportunities:
I will be able to demonstrate my knowledge of using React to create Apps within just the first couple days of project week. As someone who tries to run almost every day, I am excited to be able to log and keep track of all of my personal runs so I can monitor my improvement and progression.

### Threats:
This will be the first time starting with a mobile-first style so I will have to get used to looking at a smaller screen before I create styles for bigger screens.




