function skillMembers() {
  var members = [
    {name: 'Dale', skill: 'Python'},
    {name: 'John', skill: 'JavaScript'},
    {name: 'Jane', skill: 'Java'},
    {name: 'Doe', skill: 'Python'},
    {name: 'Jen', skill: 'JavaScript'}
  ];
  var skills = ['Python', 'JavaScript'];
  return members.filter(function(member) {
    return skills.includes(member.skill);
  });
}