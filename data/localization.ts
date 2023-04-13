export enum DrillCategory {
  SERVING = "SERVING",
  HITTING = "HITTING",
  SETTING = "SETTING",
  RECEIVING = "RECEIVING",
  DEFENCE = "DEFENCE",
  GAMEPLAY = "GAMEPLAY",
}

export type Drill = {
  name: string;
  type: DrillCategory;
  equipment?: string;
  participants_min: number;
  participants_max: number;
  difficulty: number;
  intensity: number;
  purpose: string;
  explanation: string;
  variations?: string;
};
export const Drills: Drill[] = [
  {
    name: "No Net",
    type: DrillCategory.SERVING,
    equipment: "Ball, (possible line spray)",
    participants_min: 1,
    participants_max: 1,
    difficulty: 1,
    intensity: 1,
    purpose: "Train isolated parts of the desired serve",
    explanation:
      "Start by choosing one/two focal points (toss and contact). Now serve without any net and therefore focus on nothing but the execution of the chosen focus area. Do the exercise five times followed by reflection on what worked, what needs to be changed.",
  },
  {
    name: "Knee Drill",
    type: DrillCategory.SERVING,
    equipment: "Ball, net",
    participants_min: 1,
    participants_max: 1,
    difficulty: 1,
    intensity: 1,
    purpose:
      "Being able to dive into specific elements of the serve without concentrating on hitting the net",
    explanation:
      "Choose a specific serve you want to focus on (cut). Position yourself on your knees about 1/3 from the net with about five balls. Focus on one/two of the following: Contact, Toss, Follow thrue, Spin. After five balls, evaluate what needs to be improved for the next round.",
  },
  {
    name: "Throw",
    type: DrillCategory.SERVING,
    equipment: "Ball",
    participants_min: 1,
    participants_max: 1,
    difficulty: 1,
    intensity: 1,
    purpose: "Build understanding and safety in your toss",
    explanation:
      "Find yourself a ball and get ready to serve. You must now make your step/fake and WITHOUT hitting the ball, throw it up in the position where you think you normally would, now see where the ball hits and evaluate the contact point on the ground.",
    variations:
      "If two satisfactory throws are made in a straight line, make it a true serve, on the first bad serve go back to the throw.",
  },
  {
    name: "Tape Game",
    type: DrillCategory.SERVING,
    equipment: "Ball, net, line spray, wall, tape",
    participants_min: 1,
    participants_max: 1,
    difficulty: 3,
    intensity: 1,
    purpose: "Train width and consistency in serve",
    explanation:
      "Without stepping out see how wide you can serve with five balls, possibly film the serve in slow motion and review how you can make it better. Wrong spin, bad toss, wrong contact, etc.",
  },
  {
    name: "Tripod Game",
    type: DrillCategory.SERVING,
    equipment: "Ball, net, line spray, tripod, telephone",
    participants_min: 1,
    participants_max: 1,
    difficulty: 3,
    intensity: 1,
    purpose:
      "Limit test your serve, while creating video material for evaluation",
    explanation:
      "Set up your tripod opposite you and start filming. Without stepping out, you must now see how few serves you need to get free from the tripod. For each time you miss, move the tripod one foot wider on the serve line",
    variations:
      "Can be made as a competition to see who needs the fewest attempts to get free from the tripod",
  },
  {
    name: "Tennisball",
    type: DrillCategory.SERVING,
    equipment: "Tennis ball, net (line spray)",
    participants_min: 1,
    participants_max: 1,
    difficulty: 3,
    intensity: 1,
    purpose: "Sharpen attention to contact and spin of the ball",
    explanation:
      "Serve from kneeling or standing. After each serve observe your focus point. Where did I hit the ball on the hand or get it the correct spin.",
  },
  {
    name: "Shadow service",
    type: DrillCategory.SERVING,
    participants_min: 1,
    participants_max: 1,
    difficulty: 1,
    intensity: 1,
    purpose: "Practice the understanding of the different movements",
    explanation:
      "Stand as you normally would when serving. Now complete the desired serve in slow motion and pay attention to the movements you are making and whether they are optimal",
    variations: "Fakes can be added",
  },
  {
    name: "Clock Drill",
    type: DrillCategory.HITTING,
    equipment: "Ball, net (NHZ)",
    participants_min: 1,
    participants_max: 1,
    difficulty: 3,
    intensity: 3,
    purpose: "Review of all kinds. Can possibly be used as a warm-up",
    explanation:
      "Start by placing yourself in an athletic stance over the net with a ball in hand, now first hit five flicks, push flicks, push, open and pulls, now repeat with the opposite hand.",
  },
  {
    name: "Step Through",
    type: DrillCategory.HITTING,
    equipment: "Net, NHZ",
    participants_min: 1,
    participants_max: 1,
    difficulty: 2,
    intensity: 1,
    purpose: "Train the footwork without other focal points",
    explanation:
      "Start outside the NHZ, choose which stroke you want to focus on and make your stroke movement WITHOUT the ball, but instead give a stroke to the area of the net edge where you would normally focus the stroke.",
  },
  {
    name: "Wall Hits",
    type: DrillCategory.HITTING,
    equipment: "Ball, net, wall (NHZ)",
    participants_min: 1,
    participants_max: 1,
    difficulty: 3,
    intensity: 3,
    purpose:
      "Practice receiving balls that are simulated to come from your teammate",
    explanation:
      "Placed the net approximately one meter away from a wall. Then throw the ball up off the wall so that it comes into a position from which you can practice your desired stroke. REMEMBER both hands.",
  },
  {
    name: "Off Net Hits",
    type: DrillCategory.HITTING,
    equipment: "Ball, net (NHZ)",
    participants_min: 2,
    participants_max: 2,
    difficulty: 3,
    intensity: 3,
    purpose: 'Practice handling "bad" second touches',
    explanation:
      'Stand at least one meter away from the net and have your partner throw the ball to you from different positions (in front of you, behind you, next to you, etc.) Try to hit the ball at an optimal height to get a high "hit rate" .',
  },
  {
    name: "Low Blow",
    type: DrillCategory.HITTING,
    equipment: "Ball, net, (NHZ)",
    participants_min: 2,
    participants_max: 2,
    difficulty: 1,
    intensity: 1,
    purpose: "Focus on low strokes and technical execution",
    explanation:
      "Person A stands approximately one meter from the net and throws balls in to person B. B then makes e.g. 10 open strokes with dominant and non-dominant hand, after which they switch.",
    variations:
      "The height of the throw into the net can be varied, soft arc makes the shot easier and high arc makes it more difficult. It is also possible to change the position of the thrower to get other angles",
  },
  {
    name: "Walk'n Toss",
    type: DrillCategory.DEFENCE,
    equipment: "Ball, net, line spray",
    participants_min: 4,
    participants_max: 4,
    difficulty: 1,
    intensity: 1,
    purpose: "Understanding of the tracker/server loop",
    explanation:
      "A person throws the ball into the net which is caught by the opponent. Before the ball is thrown to another person, the defending team must stand in the agreed positions for the current position of the ball. The ball is then thrown to the second person, where the DEFENCE then reads where the ball is now and takes new positions. Again the ball is thrown, this time for an attack shot, where the defending team must then get a touch.",
    variations:
      "This exercise can be done at any tempo and can be made into a discussion of scenarios that can happen after receiving a serve as well",
  },
  {
    name: "Who Loops",
    type: DrillCategory.DEFENCE,
    equipment: "Ball, net, line spray",
    participants_min: 4,
    participants_max: 4,
    difficulty: 2,
    intensity: 1,
    purpose:
      "To train coordination on the field and understanding of defensive runs",
    explanation:
      "The ball is thrown into the net and when the ball is thrown the defending team starts to move to the desired positions. The serve receiver hits the ball as a reception to his partner, who grabs it and in the same movement throws it for an attack. The idea is to give the DEFENCE a little extra time to reach the desired positions.",
    variations:
      "The exercise can also be done for balls in the middle of a game, where it can be discussed who has which balls",
  },
  {
    name: "Block to Block",
    type: DrillCategory.DEFENCE,
    equipment: "Ball, net",
    participants_min: 2,
    participants_max: 2,
    difficulty: 4,
    intensity: 3,
    purpose: "To train blocking and soft touch",
    explanation:
      'The players must try to keep the ball alive by blocking the shot from their opponent, get the soft touch over to the "opponent" who then raises it so that the person who just blocked is now the attacker.',
    variations:
      "If the exercise is difficult, the ball can be caught after a good block, to take the pace out of the exercise",
  },
  {
    name: "High or Low",
    type: DrillCategory.DEFENCE,
    equipment: "Ball, net, wall",
    participants_min: 2,
    participants_max: 2,
    difficulty: 4,
    intensity: 3,
    purpose: "Reading shots and adapting defensive movement",
    explanation:
      "The net placed 1-2 meters from the net. One player must throw the ball up onto the wall and finish, it is important that the finish is easy to read (high elbow = high shot). The other player must now assess what kind of blocking is needed to touch the ball. Shooters must only go in one direction",
    variations: "The clarity of the body trace can be varied to suit the level",
  },
  {
    name: "90 DEFENCE",
    type: DrillCategory.DEFENCE,
    equipment: "Ball, net",
    participants_min: 2,
    participants_max: 2,
    difficulty: 3,
    intensity: 3,
    purpose: "Here, the reaction is in focus",
    explanation:
      "Person A stands at the net and makes an attack at 90 degrees from the net. Person B must defend the balls",
    variations: "Person A can be locked to only high or low strokes",
  },
  {
    name: "Looper Block",
    type: DrillCategory.DEFENCE,
    equipment: "Ball, net",
    participants_min: 2,
    participants_max: 2,
    difficulty: 2,
    intensity: 3,
    purpose: 'Focus on close DEFENCE and correct block "form"',
    explanation:
      "Person A starts with the ball and throws it in a soft arc for a pull stroke (person A also makes the stroke). Person B starts RIGHT behind player A. When the ball is thrown, B must try to get as close to the net as possible to A and get a touch on the ball.",
    variations:
      "The desired goal of the drill is to get touches and a sense of getting close to the attacker. Once this has been achieved, slightly more difficult shots can be made that place greater demands on the defence",
  },
  {
    name: "Own the Zone",
    type: DrillCategory.SETTING,
    equipment: "Ball, line spray",
    participants_min: 2,
    participants_max: 3,
    difficulty: 3,
    intensity: 3,
    purpose: "Reading of setting direction and training of own setting",
    explanation:
      "Both people stand within the serving circle and take turns lifting the ball up to at least hip height. If the lift hits outside the service circle, the person who shot it loses.",
    variations:
      "If more players are added, you can play with life. The circle can be widened for more pace, but increase the lift height.",
  },
  {
    name: "Climb the Wall",
    type: DrillCategory.SETTING,
    equipment: "Ball, tape, wall",
    participants_min: 1,
    participants_max: 1,
    difficulty: 2,
    intensity: 1,
    purpose: "Practice precision and height of setting",
    explanation:
      "Put three pieces of tape on a wall, one at chest height, one at eye level and one a little above head height. Stand about a meter from the wall and take three touches, with the third touch hitting between tape 1 and 2, now do the same but hit between tape 2 and 3, etc. Do this on both hands. Afterwards, take two touches with the same hand and climb the wall again. Finally, take just one touch and climb the wall again.",
  },
  {
    name: "Wall Sets",
    type: DrillCategory.SETTING,
    equipment: "Ball, net, wall",
    participants_min: 1,
    participants_max: 1,
    difficulty: 3,
    intensity: 1,
    purpose: "Train the reception of balls coming towards you",
    explanation:
      "place the net approximately two meters from the net and stand on the side of the net that is away from the wall. Throw the ball into the wall so that it comes back and make a lift that comes up at head height and hits the net. Repeat for both hands.",
    variations:
      "The distance of the net from the wall can be varied to make the game easier/harder",
  },
  {
    name: "Tennisball Setting",
    type: DrillCategory.SETTING,
    equipment: "Tennis ball",
    participants_min: 1,
    participants_max: 4,
    difficulty: 2,
    intensity: 1,
    purpose:
      "Trains the understanding of the contact point of the ball during lifts",
    explanation:
      "If you are alone, juggle with the ball changing hands and challenge yourself by shooting into walls and getting the ball back under control. For more than one person, juggle the ball between each other.",
  },
  {
    name: "Out of System Setting",
    type: DrillCategory.SETTING,
    equipment: "Ball, net",
    participants_min: 2,
    participants_max: 2,
    difficulty: 2,
    intensity: 1,
    purpose: "Train the situations where you are out of system",
    explanation:
      "Person A has the ball and stands anywhere (preferably away from the net) and throws balls to person B, who stands a little way outside the serving circle. Person A throws balls that push but are not impossible for person B to reach. Person B tries to make good semi high lifts that hit the net",
  },
  {
    name: "Recover Runs",
    type: DrillCategory.SETTING,
    equipment: "Ball, net",
    participants_min: 2,
    participants_max: 2,
    difficulty: 3,
    intensity: 3,
    purpose: "Practice deep setting and run back to the net after reception",
    explanation:
      "Person A positions himself with the ball approximately ½ meter outside the service circle, with person B one meter behind. Person A throws the ball straight into the air and runs straight back to the opposite side of the net. Person B does an over-the-shoulder lift back to Person A, who is now ready to finish.",
    variations:
      "The distance person B stands from person A can be varied to make the exercise harder/easier",
  },
  {
    name: "90 Graders set",
    type: DrillCategory.SETTING,
    equipment: "Ball, (net)",
    participants_min: 2,
    participants_max: 2,
    difficulty: 1,
    intensity: 1,
    purpose: "Understanding of elevation correction",
    explanation:
      "Person A stands with the ball approximately two meters from Person B and throws the ball in an arc to person B. B must now stand with his shoulder to A and make underhand raises back to A. The correction of the raise must be through the wrist and not by moving the whole arm towards A.",
    variations:
      "The throw can be made for both hands and person B must react to which hand makes the optimal shot",
  },
  {
    name: "Ace or Be Aced",
    type: DrillCategory.RECEIVING,
    equipment: "Balls, nets, line spray",
    participants_min: 2,
    participants_max: 2,
    difficulty: 4,
    intensity: 3,
    purpose: "Practice serving receptions and serve diversity",
    explanation:
      "The two people get ready to serve and serve to receive. With two serve attempts, you must alternately try to serve your opponent&#39;s ace. If you make an ace you get a point, if you make a reception that lands within the NHZ you get a point",
  },
  {
    name: "Blindspot",
    type: DrillCategory.RECEIVING,
    equipment: "Ball, net, line spray",
    participants_min: 2,
    participants_max: 2,
    difficulty: 4,
    intensity: 3,
    purpose: "Develop reaction skills",
    explanation:
      'Person A stands on the serve circle with the move to the net. Person B stands opposite, but slightly outside the NHZ. Person B gets ready to shoot a shot in the direction of person A. Person B calls "NOW" when the ball is thrown up for the shot and person A must now try to get a touch. All shots in the direction of person A are allowed.',
  },
  {
    name: "Line dancer",
    type: DrillCategory.RECEIVING,
    equipment: "line spray",
    participants_min: 2,
    participants_max: 3,
    difficulty: 1,
    intensity: 3,
    purpose:
      "Footwork during serve. The idea is to create an understanding of moving on the line and not parallel, during the serve, to reduce angles",
    explanation:
      "2-3 people stand on a fully occupied serve line and must now never leave the line. It is now a game of catch on the line, but you must only move when you are down in your legs and the movements must be sideways.",
    variations:
      "If necessary, run this game in intervals, e.g. 4 rounds of 30 seconds, with a 20 second break",
  },
  {
    name: "Fetch",
    type: DrillCategory.RECEIVING,
    equipment: "Ball, (line spray)",
    participants_min: 2,
    participants_max: 2,
    difficulty: 2,
    intensity: 3,
    purpose: "Positioning the feet during the serve and quick corrections",
    explanation:
      "Person A stands ready to receive a serve (legs down and arms ready). The goal is now to stay on the line but position yourself opposite the ball. Perosn B must make fakes over 5 seconds and then start over. This means that A must move from side to side in step with the ball.",
  },
  {
    name: "Hitting is Serving",
    type: DrillCategory.GAMEPLAY,
    equipment: "Ball, net, line spray",
    participants_min: 4,
    participants_max: 4,
    difficulty: 3,
    intensity: 3,
    purpose: "Turning from DEFENCE to attack",
    explanation:
      "The serving team gets ready for an open shot, where one throws the ball up for a shot. The receiving team stands with one person ready to block and the other ready for long/high balls. There is a re-serve if the receiving team does not have an okay reception. If the serve is missed, the team automatically loses a point.",
    variations:
      "Restrictions can be set on what the opening shot should look like",
  },
  {
    name: "Time to Loop",
    type: DrillCategory.GAMEPLAY,
    equipment: "Ball, net, line spray",
    participants_min: 4,
    participants_max: 4,
    difficulty: 2,
    intensity: 3,
    purpose: "DEFENCE run",
    explanation:
      "The game starts with a soft serve which is caught, after which the ball is thrown up in a soft arc for a lift. The game is now played without any further changes",
    variations:
      "The time before the throw from the serve receiver can be changed to change the level of difficulty",
  },
  {
    name: "Get That Set",
    type: DrillCategory.GAMEPLAY,
    equipment: "Ball, net, line spray",
    participants_min: 4,
    participants_max: 4,
    difficulty: 1,
    intensity: 3,
    purpose: "Force sets to be underhanded",
    explanation:
      "The game is played as normal, but ALL sets must be underhand, if there is a set that is not underhand, the team loses the point immediately",
    variations:
      "The game can be changed to be all sets within the NHZ must be underhand and everything outside the NHZ can be players&#39; own choice",
  },
  {
    name: "Get That Set",
    type: DrillCategory.GAMEPLAY,
    equipment: "Ball, net, line spray",
    participants_min: 4,
    participants_max: 4,
    difficulty: 1,
    intensity: 3,
    purpose: "Force sets to be underhanded",
    explanation:
      "The game is played as normal, but ALL sets must be underhand, if there is a set that is not underhand, the team loses the point immediately",
    variations:
      "The game can be changed to be all sets within the NHZ must be underhand and everything outside the NHZ can be players&#39; own choice",
  },
  {
    name: "50/50",
    type: DrillCategory.GAMEPLAY,
    equipment: "Ball, Net, division of the pitch",
    participants_min: 4,
    participants_max: 4,
    difficulty: 2,
    intensity: 3,
    purpose: "Precision in lifts",
    explanation:
      "Each team has a half of the court (the division of the court 50/50), now at no time may balls be completed that are not in the direction of the opponent&#39;s half of the court",
    variations:
      "It is possible to create an attack side, i.e. a side where all balls must be hit away from and a defense side where all balls must be defended on. This allows for more movement on the court, but it makes the game more difficult",
  },
];
