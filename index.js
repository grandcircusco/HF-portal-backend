var express = require("express");
var app = express();

app.get('/fellows', function(req, res) {
  res.send(fellows);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Sample app is listening at http://%s:%s', host, port);
});

var fellows = [
    {
      name: "Homer Simpson",
      hometown: 'Springfield',
      university: 'Crazy Go Nuts University',
      languages: ['Java', 'Android', 'JavaScript', 'Python'],
      greeting: '\"Can\'t sell his head?—What sort of a bamboozingly story is this you are telling me?\" getting into a towering rage. \"Do you pretend to say, landlord, that this harpooneer is actually engaged this blessed Saturday night, or rather Sunday morning, in peddling his head around this town?\"'
    },
    {
      name: "Bender B. Rodriguez",
      hometown: 'New New York City, Earth',
      university: 'Bending University',
      languages: ['Java', 'Bending', 'Clojure'],
      greeting: 'The brilliantly lighted apartments of the first floor told me where first to seek, and advancing to the windows I peered within. I soon discovered that my approach was not to be the easy thing I had hoped, for the rear rooms bordering the court were filled with warriors and women. I then glanced up at the stories above, discovering that the third was apparently unlighted, and so decided to make my entrance to the building from that point. It was the work of but a moment for me to reach the windows above, and soon I had drawn myself within the sheltering shadows of the unlighted third floor.'
    },
    {
      name: "Bruce Wayne",
      hometown: 'Gotham City, NY',
      university: 'School of Hard Knox',
      languages: ['Java', 'Kung Fu', 'Scala'],
      greeting: '\"Ain\'t they got any necks, then?" said a third, abruptly--a little, contemplative, dark man, smoking a pipe. I repeated my description. "Octopuses," said he, "that\'s what I calls \'em.  Talk about fishers of men--fighters of fish it is this time!" "It ain\'t no murder killing beasts like that," said the first speaker. "Why not shell the darned things strite off and finish \'em?" said the little dark man.  "You carn tell what they might do." "Where\'s your shells?" said the first speaker.  "There ain\'t no time.  Do it in a rush, that\'s my tip, and do it at once." So they discussed it.'
    },
    {
      name: "Steve Rogers",
      hometown: 'Brooklyn, NYC, NY',
      university: 'American University',
      languages: ['C++', 'Shootin', 'Scala'],
      greeting: 'In Woking junction, until a late hour, trains were stopping and going on, others were shunting on the sidings, passengers were alighting and waiting, and everything was proceeding in the most ordinary way.  A boy from the town, trenching on Smith\'s monopoly, was selling papers with the afternoon\'s news.  The ringing impact of trucks, the sharp whistle of the engines from the junction, mingled with their shouts of "Men from Mars!"  Excited men came into the station about nine o\'clock with incredible tidings, and caused no more disturbance than drunkards might have done.'
    },
    {
      name: "Natasha Romanoff",
      hometown: 'St. Petersberg, Russia',
      university: 'Leningrad University',
      languages: ['C', 'Java', 'COBOL', 'FORTRAN'],
      greeting: 'The air was full of sound, a deafening and confusing conflict of noises--the clangorous din of the Martians, the crash of falling houses, the thud of trees, fences, sheds flashing into flame, and the crackling and roaring of fire.  Dense black smoke was leaping up to mingle with the steam from the river, and as the Heat-Ray went to and fro over Weybridge its impact was marked by flashes of incandescent white, that gave place at once to a smoky dance of lurid flames.  The nearer houses still stood intact, awaiting their fate, shadowy, faint and pallid in the steam, with the fire behind them going to and fro. For a moment perhaps I stood there, breast-high in the almost boiling water, dumbfounded at my position, hopeless of escape.'
    },
    {
      name: "Tony Stark",
      hometown: 'Los Angeles, CA',
      university: 'American University',
      languages: ['Assembly', 'C',],
      greeting: '"Hil-lo, hol-lo, hel-lo!"  Dorothy went on, standing this time on her right foot. "Hello!" replied the Tin Woodman calmly. "Ziz-zy, zuz-zy, zik!" said Dorothy, who was now standing on both feet. This ended the saying of the charm, and they heard a great chattering and flapping of wings, as the band of Winged Monkeys flew up to them. The King bowed low before Dorothy, and asked, "What is your command?" "We wish to go to the Emerald City," said the child, "and we have lost our way." "We will carry you," replied the King, and no sooner had he spoken than two of the Monkeys caught Dorothy in their arms and flew away with her.'
    },
    {
      name: "Bruce Banner",
      hometown: 'San Jose, CA',
      university: 'Berkely University',
      languages: ['Assembly', 'C', 'Java', 'R'],
      greeting: 'Phileas Fogg, as self-composed as if the judgment did not in the least concern him, did not even lift his eyebrows while it was being pronounced.  Just as the clerk was calling the next case, he rose, and said, "I offer bail." "You have that right," returned the judge. Fix\'s blood ran cold, but he resumed his composure when he heard the judge announce that the bail required for each prisoner would be one thousand pounds. "I will pay it at once," said Mr. Fogg, taking a roll of bank-bills from the carpet-bag, which Passepartout had by him, and placing them on the clerk\'s desk. "This sum will be restored to you upon your release from prison," said the judge.  "Meanwhile, you are liberated on bail." "Come!" said Phileas Fogg to his servant. "But let them at least give me back my shoes!" cried Passepartout angrily.'
    },
    {
      name: "Wanda Maximoff",
      hometown: 'Mt. Wundagore, Transia',
      university: 'Transia Community College',
      languages: ['C', 'COBOL', 'FORTRAN', 'Scheme'],
      greeting: 'As I was to learn, the Martian nights are extremely cold, and as there is practically no twilight or dawn, the changes in temperature are sudden and most uncomfortable, as are the transitions from brilliant daylight to darkness.  The nights are either brilliantly illumined or very dark, for if neither of the two moons of Mars happen to be in the sky almost total darkness results, since the lack of atmosphere, or, rather, the very thin atmosphere, fails to diffuse the starlight to any great extent; on the other hand, if both of the moons are in the heavens at night the surface of the ground is brightly illuminated.'
    }
  ];