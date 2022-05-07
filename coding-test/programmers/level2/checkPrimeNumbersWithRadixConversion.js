function solution(n, k) {
  var answer = 0;
  const radixString = n.toString(k);

  function isPrimeNumber(n) {
    if(n <= 1) return false;
  
    for(let i = 2; i * i < n; i++) {
      if(n % i === 0) {
        return false;
      }
    }
  
    return true;
  }

  console.log("radixString", radixString)

  for(let i = 1; i <= radixString.length; i++) { // checkNumbers 길이
    for(let j = 0; j <= radixString.length - i; j++) { // checkNumbers 시작 인덱스
      const checkNumbers = radixString.split("").splice(j, i).join("")
      let isValidPrimeNumber = false;
      if(!isPrimeNumber(checkNumbers)) continue; // 소수 체크

      const indexOfCheckNumbers = radixString.indexOf(checkNumbers)
      
      //조건 1
      if(indexOfCheckNumbers > 0 && radixString[indexOfCheckNumbers - 1] && radixString[indexOfCheckNumbers -1 ] === '0' && radixString[indexOfCheckNumbers + checkNumbers.length] && radixString[indexOfCheckNumbers + checkNumbers.length] === "0") {
        isValidPrimeNumber = true;        
      }
      
      //조건 2
      if(indexOfCheckNumbers === 0 && radixString[indexOfCheckNumbers + checkNumbers.length] && radixString[indexOfCheckNumbers + checkNumbers.lnegth] === '0') {
        isValidPrimeNumber = true;
      }

      //조건 3
      if(indexOfCheckNumbers === radixString.length - i && radixString[indexOfCheckNumbers - 1] && radixString[indexOfCheckNumbers - 1] === '0') {
        isValidPrimeNumber = true;
      }

      //조건 4
      if(indexOfCheckNumbers === 0 && radixString.length === checkNumbers.length) {
        isValidPrimeNumber = true;
      }

      // 기본 조건
      if(checkNumbers.includes("0")) {
        isValidPrimeNumber = false;
      }

      if(isValidPrimeNumber) {
        console.log("isValidPrimeNumber", checkNumbers)
      }
      
      answer += isValidPrimeNumber ? 1 : 0;
    }
  }

  return answer;
}

console.log(solution(2101307, 10))