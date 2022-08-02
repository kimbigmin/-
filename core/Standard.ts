import Range from './Range';

type Grade =
    | '초4'
    | '초5'
    | '초6'
    | '중1'
    | '중2'
    | '중3'
    | '고1'
    | '고2'
    | '고3';

class Standard {
    // 왕복오래달리기 등급 구하기
    roundRunning(record: string, grade: Grade, gender: string) {
        return getGradeFromRecord(record, Range.roundRunning.man[grade]);
    }
    // 오래달리기-걷기 등급 구하기
    longRunningAndWalking(record: string, grade: Grade, gender: string) {
        if (grade !== '초4') {
            return getGradeFromRecord(
                record,
                Range.longRunningAndWalking.man[grade],
            );
        } else {
            return null;
        }
    }
    // 스텝체크 등급 구하기
    stepCheck(record: string) {
        switch (true) {
            case +record <= 100 && +record >= 76.0:
                return 'first';
            case +record <= 75.9 && +record >= 62.0:
                return 'second';
            case +record <= 61.9 && +record >= 52.0:
                return 'third';
            case +record <= 51.9 && +record >= 47.0:
                return 'fourth';
            default:
                return 'fifth';
        }
    }
    // 앉아윗몸앞으로굽히기 등급 구하기
    bendingForward(record: string, grade: Grade, gender: string) {
        if (grade !== '초4') {
            return getGradeFromRecord(record, Range.bendingForward.man[grade]);
        } else {
            return null;
        }
    }
    // 종합유연성 등급 구하기
    totalFlex(record: string) {
        switch (record) {
            case '8':
                return 'first';
            case '7':
                return 'second';
            case '6':
                return 'third';
            case '5':
                return 'fourth';
            default:
                return 'fifth';
        }
    }
    // 팔굽혀펴기 등급 구하기
    pushUps(record: string, grade: Grade, gender: string) {
        if (grade !== '초4' && grade !== '초5' && grade !== '초6') {
            return getGradeFromRecord(record, Range.pushUps.man[grade]);
        } else {
            return null;
        }
    }
    // 윗몸말아올리기 등급 구하기
    upperBody(record: string, grade: Grade, gender: string) {
        return getGradeFromRecord(record, Range.upperBody.man[grade]);
    }
    // 악력 등급 구하기
    grip(record: string, grade: Grade, gender: string) {
        return getGradeFromRecord(record, Range.grip.man[grade]);
    }
    // 50m 달리기 등급 구하기
    running50m(record: string, grade: Grade, gender: string) {
        return getGradeFromRecord(record, Range.running50m.man[grade]);
    }
    // 제자리멀리뛰기 등급 구하기
    longJump(record: string, grade: Grade, gender: string) {
        return getGradeFromRecord(record, Range.longJump.man[grade]);
    }
}

export default Standard;

// 등급 구하는 헬퍼 함수
// @param => record: 해당기록, range: 등급 범위, reverse: 숫자가 낮은게 높은 등급일 때 (ex: 시간 '초' 기준)
const getGradeFromRecord = (
    record: string | number,
    range: number[],
    reverse?: boolean,
): string => {
    record = +record;

    if (reverse) {
        switch (true) {
            case (record <= range[1] && record >= range[0]) ||
                record < range[0]:
                return 'first'; // first: 1등급 second: 2등급 .....
            case record <= range[3] && record >= range[2]:
                return 'second';
            case record <= range[5] && record >= range[4]:
                return 'third';
            case record <= range[7] && record >= range[6]:
                return 'fourth';
            default:
                return 'fifth';
        }
    }

    switch (true) {
        case (record <= range[0] && record >= range[1]) || record > range[0]:
            return 'first';
        case record <= range[2] && record >= range[3]:
            return 'second';
        case record <= range[4] && record >= range[5]:
            return 'third';
        case record <= range[6] && record >= range[7]:
            return 'fourth';
        default:
            return 'fifth';
    }
};
