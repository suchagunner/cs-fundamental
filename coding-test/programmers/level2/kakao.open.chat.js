function solution(record) {
  const USER_ACTIONS = {
      ENTER: "Enter",
      LEAVE: "Leave",
      CHANGE: "Change"
  }
  
  const MESSAGE_TEMPLATES = {
      ENTER: "{USER_NAME}님이 들어왔습니다.",
      LEAVE: "{USER_NAME}님이 나갔습니다.",
  }

  const messageData = []
  const users = {}

  record.forEach(r => {
      const [ userAction, userId, userName ] = r.split(" ");
      
      if(!users[userId]) {
          users[userId] = "";       
      }

      if(userAction === USER_ACTIONS.ENTER) {
          users[userId] = userName;
          messageData.push({ userId, userAction})
      }
      
      if(userAction === USER_ACTIONS.LEAVE) {
          messageData.push({ userId, userAction})
      }
      
      if(userAction === USER_ACTIONS.CHANGE) {
          users[userId] = userName
      }
  })
  
  const messageList = messageData.map(data => {
      return MESSAGE_TEMPLATES[data.userAction.toUpperCase()].replace("{USER_NAME}", users[data.userId])
  })
  

  return messageList;
}

// https://programmers.co.kr/learn/courses/30/lessons/42888