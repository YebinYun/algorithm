SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS

# 정렬 : 이름 순으로 조회하는... 이름이 같은 동물 중에서는 보호를 나중에 시작한 동물을 먼저 ...
ORDER By NAME, DATETIME DESC;