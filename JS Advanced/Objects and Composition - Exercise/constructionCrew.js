function constructionCrew(input) {
    const obj = input;
    obj.dizziness === true ? obj.levelOfHydrated += (obj.weight * 0.1) * obj.experience : '';
    obj.dizziness = false;
    return obj;
}

console.log(constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  
  ));
