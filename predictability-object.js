
// object를 가지고 undefined 오류나지 않도록 이용하기

const car = {
    brand: 'Renault',
    model: 'Megane',
    engine: 'v8',
    wheels: 4,
    stationWagon: true,
    date: {
        day: 1,
        month: 6,
        year: 2016
    }
}

// javascript에서 일반적으로 object를 사용할 때 아래처럼 로그를 찍는다면
// event라는 key를 가진 값이 없기 때문에
// Cannot read property 'lastUpdate' of undefined
// 에러를 만나게 됩니다.

// console.log(car.event.lastUpdate);

// 그래서 로그를 남기기 위해서 조건문을 거치게 만드는데
// 명확하게 이해하기 쉽지 않습니다.
// 그럴 때 map을 이용하면 됩니다.(물론 그냥 아래처럼 해도 됩니다.)

// if(car.event) {
//     console.log(car.event.lastUpdate);
// }

// object type을 map type으로 변환

const carr = new Map(Object.entries({
    brand: 'Renault',
    model: 'Megane',
    engine: 'v8',
    wheels: 4,
    stationWagon: true,
    date: {
      day: 1,
      month: 6,
      year: 2016
    }
}))

// map으로 변환되면 아래 6개의 명령어를 추가적으로 사용할 수 있게 됩니다.
// console.log(carr.set('driving', 'rear wheel drive'));
// console.log(carr.get('brand'));
// console.log(carr.has('brand'));
// console.log(carr.delete('brand'));
// console.log(carr.size);
// console.log(carr.clear());

// 그 중에서 has 명령어를 사용하면 사용하는 의도를 명확하게 드러낼 수 있습니다.
// 아래처럼 말이죠.
if(carr.has('event')) {
    console.log(carr.event.lastUpdate);
} else {
    console.log('there is not exist')
}

// 추가
// 일반적으로 object의 key를 가져올 때 다음과 같이 사용하고, for문을 이용하여 반복합니다.
console.log(Object.keys(car));

// 하지만 map을 이용하면 keys 명령어를 통해 key들을 가져올 수 있고
// iterator로 만들어지기 때문에 next 명령어로 바로 돌려볼 수 있습니다.
const keys = carr.keys();
for(let key of keys) {
    console.log(key);
}