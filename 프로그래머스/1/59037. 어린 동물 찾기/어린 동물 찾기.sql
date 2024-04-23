SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS

# 조건 : 동물 보호소에 들어온 동물 중 젊은 동물의 아이디와 이름을 조회
WHERE INTAKE_CONDITION != 'Aged'

# 정렬 : 아이디
ORDER By ANIMAL_ID;