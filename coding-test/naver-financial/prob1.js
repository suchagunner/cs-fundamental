function solution(recruits, s1, s2) {
  const possibleSeniors = recruits.filter((p) => {
    const [year, score] = p;
    return year >= s1 || score >= s2;
  });

  const sortedYearDesc = [...new Set(recruits.map((p) => p[0]))].sort((a, b) => (a > b ? -1 : 1));
  const sortedScoreDesc = [...new Set(recruits.map((p) => p[1]))].sort((a, b) => (a > b ? -1 : 1));

  let e1, e2;
  let experts = [];
  let seniors = [];
  let juniors = [];

  let cases = [];

  sortedYearDesc.forEach((year) => {
    e1 = year;
    sortedScoreDesc.forEach((score) => {
      e2 = score;

      experts = recruits.filter((p) => {
        const [eYear, eScore] = p;
        return eYear >= e1 && eScore >= e2;
      });
      seniors = possibleSeniors.filter((p) => !experts.includes(p));
      juniors = recruits.filter((p) => !experts.includes(p) && !seniors.includes(p));

      const _case_ = {
        e1: e1,
        e2: e2,
        total: e1 + e2,
        isRecuritsNumberSatisfied:
          0 < experts.length && experts.length < seniors.length && seniors.length < juniors.length,
      };

      cases.push(_case_);
    });
  });

  const target = cases.filter((p) => p.isRecuritsNumberSatisfied === true).sort((a, b) =>  b.total - a.total);

  ({e1, e2} = target[0]);

  return [e1, e2];
}

/**
 * solved
 */