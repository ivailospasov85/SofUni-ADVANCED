// Triathlon
// Triathlon Class
// Implement a class Triathlon, which supports the functionality described below.
// Functionality
// Constructor
// The constructor has 3 properties:
// •	competitionName – a string
// •	participants – an empty object
// •	listOfFinalists – an empty array 
// At the initialization of the Triathlon class, the constructor accepts only one parameter competitionName which is a string! 
// The participants property is an object, representing a key-value pair of a participant name and its gender.

// Methods 
// addParticipant (participantName, participantGender)
// This method adds a new participant to the participants object. The method accepts 2 arguments:
// •	participantName – a string
// •	participantGender – a string
// If the participant exists in the participants object, return the following message:
// `${participantName} has already been added to the list`
// Otherwise, add the new participant to the participants object in the following format {‘Peter’ : ‘male’} and return the following message:
// `A new participant has been added - ${participantName}`



// completeness (participantName, condition)
//  Accept 2 arguments: 
// •	participantName – a string
// •	condition – a number (0 – 100)
// If the participant doesn’t exist in the participants object, throw new Error:
// `${participantName} is not in the current participants list`
// There are three disciplines in the triathlon and each requires the participant condition to be at least 30 for a discipline to be completed.
// If the participant exists in the participants object but his condition is lower than 30, throw new Error: 
// `${participantName} is not well prepared and cannot finish any discipline`
// Afterwards, find how many disciplines is the participant able to complete depending on his condition (condition divided by 30). If they completed only one or two disciplines, return the following message:
// `${participantName} could only complete ${completedCount} of the disciplines`
// Otherwise extract the participant from the participants object and add him to the list of finalists in the following format: { participantName, participantGender }
// Return the following message:
// `Congratulations, ${participantName} finished the whole competition`
// rewarding (participantName)
// Accept 1 argument:
// •	participantName – a string
// If the participantName is not present in the list of finalists, return the following message:
// `${participantName} is not in the current finalists list`
// Otherwise, return the following message:
// `${participantName} was rewarded with a trophy for his performance`

// showRecord (criteria)
// Accept 1 argument:
// •	criteria – a string
// This method returns information based on the criteria. The three possible types of criteria are: "male", "female" or "all".

// If the list of finalists is empty, return the following message: 
// `There are no finalists in this competition`
// If there are no finalists with the given criteria, return: 
// `There are no ${participantGender}'s that finished the competition`
// If there are finalists with the given criteria, return a message with the firstly added participant in the following format:
// `${participantName} is the first ${criteria} that finished the ${competitionName} triathlon`;
// Otherwise if the criteria is all, return all finalists from the list of finalists array in following format:
// •	On first line show the following message:
// `List of all ${competitionName} finalists:`
// •	On the following lines, display the names of each finalist sorted  in ascending order:
// `${participantName}`

// Examples

// Input 1
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// Output 1
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Peter has already been added to the list


// Input 2
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));



// Output 2
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Uncaught Error: George is not well prepared and cannot finish any discipline












            
// Input 3
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// Output 3
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Peter was rewarded with a trophy for his performance
// Sasha is not in the current finalists list







// Input 4
// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));



// Output 4
// There are no finalists in this competition

// Input 5
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));







// Output 5
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// List of all Dynamos finalists:
// Peter
// Sasha








// Input 6
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.completeness("George", 95));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.rewarding("George"));
// console.log(contest.showRecord("male"));









// Output 6
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon

