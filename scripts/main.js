
$(function() {

    // Populate using an object literal

    WTF.init({

         heading: [
             "Watch out people! I'm about to",
             "Everyone stand back, I'm going to",
             "In honor of Steve Jobs' turtleneck, I will",
             "I don't care how long it takes, I'm gonna"
         ],
         response: [
             "How about no?",
             "its a cute idea, but it needs more pizzazz",
             "Not nearly innovative enough"
         ],
         template: [
             "Hack together a @adj @tech that @action @who.",
             "make a simple, yet @adj @tech for @who.",
             "code a @adj @tech because the mainstream media @action @who.",
             "Create nothing and go back home.",
             "whip up a @adj @tech that will also be @adj for the guy who @action @who."
         ],

         tech: [
            "Tinder clone",
            "social media site",
            "search engine",
            "mobile app",
            "Messenger app",
            "Twitter bot",
            "drone",
            "Virtual Reality Game",
            "website",
            "script",
            "chrome extnesion",
            "Something like uber"
         ],

         action: [
             "hires people to fight",
             "praises",
             "Calls my mom to let her know i'm an adult and can do what i want to",
             "helps you find children to fight",
             "would make me leader of",
             "summons",
             "transforms me into"
         ],
         adj: [
             "very innovative",
             "mind-blowing",
             "strangely arousing",
             "dank",
             "rage-inducing",
             "crunchy, yet satisfying",
             "stupidly complex",
             "positively silly",
             "wholesome",
             "half-baked"
         ],

         who:[
             "Students who just want to go back to bed",
             "The Elderly",
             "the spirit of Harambe",
             "The spanish inquisition",
             "our robotic overlords",
             "the homeless",
             "Gandalf the Grey",
             "David Bowie",
             "George Costanza",
             "The spiciest memelord",
             "spiderman",
             "the sun",
             "Fox news",
             "a carton of expired milk"
         ]
     });

    // Populate using a JSON file
    //WTF.init( 'sample.json' );

    // Populate using a Google spreadsheet ID (you must publish it first!)
    // @see https://support.google.com/drive/answer/37579?hl=en
    //WTF.init( '0AvG1Hx204EyydF9ub1M2cVJ3Z1VGdDhTSWg0ZV9LNGc' );

});