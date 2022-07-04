function solution(id_list, report, k) {
  var answer = [];
  const reportObj = {};
  id_list.forEach((id) => {
    reportObj[id] = {
      reportWho: [],
      reportedCount: 0,
      reportedBy: [],
      reportMailCount: 0,
    };
  });

  report.forEach((action) => {
    const [by, who] = action.split(' ');

    if (!reportObj[by].reportWho.includes(who)) {
      reportObj[by].reportWho.push(who);
      reportObj[who].reportedCount += 1;
      reportObj[who].reportedBy.push(by);
    }
  });

  answer = Object.keys(reportObj).map((userId) => {
    return Object.keys(reportObj).filter(
      (id) => reportObj[id].reportedCount >= k && reportObj[userId].reportWho.includes(id)
    ).length;
  });

  return answer;
}
