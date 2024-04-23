SELECT COUNT(*) AS USERS 
FROM USER_INFO

-- 조건 : 2021년에 가입한 회원 중 나이가 20세 이상 29세 이하인 회원이 몇 명인지...
WHERE TO_CHAR(JOINED,'YYYY') = '2021' AND AGE BETWEEN 20 AND 29