# Project Overview

## Project Name
Group-Run


## Project Description
Group-Run is an Airtable and React build where the user is able to enter in and keep track of their runs/jogs. The homepage will list out all the runs that have been submitted via form. It will have an "Add run" section that leads the user to the form where they may enter in their run information including: the date, their name, location, distance, time, calories burned and an emoji ranking system that will let them rate how easy/fun/challenging a specific run was. Each entry will be tracked on the homepage so the user can view their progress. They will also be able to edit/delete any workouts they submit as well.

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

## Component Heirarchy

[My component heirarchy](https://imgur.com/ehwd0aw)

## Airtable Sample

Sample return 
```
{
    "records": [
        {
            "id": "recigvbLySfaMvqbw",
            "fields": {
                "runnerName": "JORDAN",
                "minutes": 43,
                "satisfactionLevel": 5,
                "caloriesBurned": 450,
                "date": "2021-03-15",
                "hours": 0,
                "seconds": 0,
                "distance": 4
            },
            "createdTime": "2021-03-16T00:24:42.000Z"
        },
        {
            "id": "rectQPYw8siMRIu7F",
            "fields": {
                "runnerName": "JORDAN",
                "minutes": 18,
                "satisfactionLevel": 4,
                "additionalNotes": "slow one today",
                "caloriesBurned": 225,
                "date": "2021-03-16",
                "hours": 0,
                "seconds": 6,
                "distance": 2
            },
            "createdTime": "2021-03-16T19:12:02.000Z"
        },
```
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
- Use emojis/symbols as the ranking system

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Mar 13-15| Prompt / Wireframes / Component Heirarchy / Timeframes | Complete
|Mar 15| Project Approval | Complete
|Mar 15-16| Create Components/ Get,Set Data| Complete
|Mar 15-16| Create basic CSS for all Media-queries| Complete
|Mar 17-18| MVP | Complete
|Mar 18-19| Advanced CSS | Complete
|Mar 19-21| PMVP/Finalize CSS | Complete
|March 22| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Proposal | H | 2hrs| 2hrs | 1hrs |
| Airtable Setup | H | 1hrs| 1hrs | 1hrs |
| useEffect() | H | 1.5hrs| 2hrs | 2hrs |
| Header Component | H | 2hrs| 1.5hrs | 1.5hrs |
| Home Component | H | 2hrs| hrs | 3hrs |
| RunData Component | H | 4hrs| 3hrs | 3hrs |
| NewRunForm Component | H | 3hrs| 4hrs | 7hrs |
| Route/Link | H | 4hrs| 3hrs | 3hrs |
| Header CSS | H | 2hrs| hrs | .5hrs |
| Home CSS | H | 4hrs| 6hrs | 4hrs |
| Run CSS | H | 4hrs| 3hrs | 2.5hrs |
| Form CSS | H | 4hrs| 5hrs | 4hrs |
| Media-queries | H | 8hrs| hrs | 2hrs |
| Total | H | 39.5hrs| hrs | 34.5hrs |

## SWOT Analysis

### Strengths:
I have a pretty good understanding of how to use CRUD and seperate out my Components.

### Weaknesses:
I am not sure exactly how I want my project to look at the moment. I hope to create a solid wireframe initially but may have to make some changes based on the different Media Queries.

### Opportunities:
I will be able to demonstrate my knowledge of using React to create Apps within just the first couple days of project week. As someone who tries to run almost every day, I am excited to be able to log and keep track of all of my personal runs so I can monitor my improvement and progression.

### Threats:
This will be the first time starting with a mobile-first style so I will have to get used to looking at a smaller screen before I create styles for bigger screens.




