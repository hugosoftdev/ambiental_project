const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const data = () => {
  const data = [];
  let counter = 0;
  while(counter < 60) {
    const object = {
      name: counter.toString(),
      value: randomIntFromInterval(100,1250),
    };
    // for(var i = 0;i < 30;i++) {
    //   object.value.push(randomIntFromInterval(100,1250));
    // }
    counter ++;
    data.push(object);
  }
  return data;
};

