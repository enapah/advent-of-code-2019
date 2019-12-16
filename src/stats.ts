import stats from './stats.json';

const members = Object.values(stats.members);
const names = members.map(player => player.name).sort();

const days: {
  day: number;
  star: number;
  results: {name: string; score: number}[];
}[] = [];

for (let day = 1; day <= 25; day++) {
  for (let star = 1; star <= 2; star++) {
    const results: {name: string; time: number}[] = [];

    members.forEach(member => {
      const completionDayLevelElement = (member.completion_day_level as any)[
        day
      ];

      if (completionDayLevelElement) {
        const starElement = completionDayLevelElement[star];

        if (starElement) {
          results.push({
            name: member.name,
            time: Number(starElement.get_star_ts)
          });
        }
      }
    });

    days.push({
      day,
      star,
      results: results
        .sort((a, b) => a.time - b.time)
        .map(({name}, i) => ({name, score: names.length - i}))
        .slice(0, 5)
    });
  }
}

names.map((name) => ({
  name,

}))