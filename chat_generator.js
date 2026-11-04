// Randomizer configuration to make each session unique
const USERS = [
    "StreamMod_Quill", "xX_TralaleroFan_Xx", "Brainrot4Life", "Sleepy_Otter_09", 
    "Steak_Stan_Enjoyer", "NoahTheGoat", "CaptainClicks", "Crumb_Muffin", 
    "PizzaRoll_Rhys", "Sir_Nugget_Lord", "MemeMachine3000", "Vexxy_", 
    "FastFingersFrank", "grandma_gamer_1952", "Lil_Eggo_Waffle", "HOLDUP_Carl", 
    "Sad_Potato_Soup", "ToastMaster_Jr", "HypeTrain_Ellie", "RobloxRichKid"
];

const SLANGS = [
    "cappuccino ballerina is S tier!!", "is this real life? Kappa", "got the fastest base in the server",
    "where's the strawberry elephant at 👀", "sigma grind arc activated 🗿", "TRALALERO SPOTTED 🚨",
    "this game is certified pay to win lmao", "the ground is shaking!!", "ITS THE TUNG TUNG",
    "rip bozo timed out LMAO", "F in chat for Frank", "sigma sigma on the wall...", "HYPE TRAIN starting! 🚂"
];

const STREAMER_RESPONSES = [
    "Patience my friends, it spawns every few minutes!",
    "GOT THE STRAWBERRY ELEPHANT!!! AHHHHHH OMEGALUL",
    "Chat we are NOT doing trades on stream, my jaw hurts from laughing",
    "I'm gonna protect it with my life 😭",
    "Locking my doors right now, do not touch the base!"
];

function generateRandomMessage(index) {
    const isStreamer = Math.random() < 0.15;
    const isMod = !isStreamer && Math.random() < 0.1;
    
    let user = USERS[Math.floor(Math.random() * USERS.length)];
    let message = SLANGS[Math.floor(Math.random() * SLANGS.length)];
    let badge = "";
    let cls = "username";

    if (isStreamer) {
        user = "Steak";
        message = STREAMER_RESPONSES[Math.floor(Math.random() * STREAMER_RESPONSES.length)];
        badge = "🔴 ";
        cls = "streamer";
    } else if (isMod) {
        user = "StreamMod_Quill";
        badge = "🔧 ";
        cls = "mod";
        if (Math.random() < 0.5) message = "Keep it PG or get timed out!";
    }

    // Format timestamp
    const sec = String(index % 60).padStart(2, '0');
    const min = String(Math.floor(index / 60)).padStart(2, '0');
    const timestamp = `00:${min}:${sec}`;

    return { timestamp, user, badge, cls, msg: message };
}
