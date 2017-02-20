var myName = 'Rachel Eiting';
console.log("Name: " + myName.toUpperCase());


console.log('Career: ' + 'Programmer Analyst Trainee');
console.log('Description: I love to read, play video games, and knit. I am working on changing my career to become a full stack engineer.');

function displayPosition(title, company, description) {
    console.log('* ' + title + ' at ' + company + ' - ' + description);
};

function displaySkills(skillName, boolean) {
    if (boolean == true) {
        console.log ('* Check It: ' + skillName);
    } else {
        console.log('* ' + skillName);
    }
};

console.log('My Interests: ');
console.log('* Reading');
console.log('* Knitting');
console.log('* Cats');
console.log('* Fun socks');

console.log('My Previous Experience:');

displayPosition('Contact Center Communications Analyst', 'Regions Bank', 'Wrote policies and procedures for bankers.');
displayPosition('Video Banking Senior', 'Regions Bank', 'Helped Video Bankers with questions and supervisory issues.');
displayPosition('Digital Sales and Service', 'Regions Bank', 'Answered customer emails and chats.');
displayPosition('English Teacher', 'Thompson High School', 'Taught 10th and 11th grade English');

console.log('My Skills: ');
displaySkills('Knitting', true);
displaySkills('Reading', false);
displaySkills('Research', false);
displaySkills('Speaking a bit of German', true);

