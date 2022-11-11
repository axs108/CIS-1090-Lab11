// establishing an array of words called text
let text = "If you really want to hear about it, the first thing you'll probably want to know is where I was born, an what my lousy childhood was like, and how my parents were occupied and all before they had me, and all that David Copperfield kind of crap, but I don't feel like going into it, if you want to know the truth. In the first place, that stuff bores me, and in the second place, my parents would have about two hemorrhages apiece if I told anything pretty personal about them. They're quite touchy about anything like that, especially my father. They're nice and all but they're also touchy as hell. Besides, I'm not going to tell you my whole goddam autobiography or anything. I'll just tell you about this madman stuff that happened to me around last Christmas just before I got pretty run-down and had to come out here and take it easy. I mean that's all I told DB about, and he's my brother and all. He's in Hollywood. That isn't too far from this crumby place, and he comes over and visits me practically every week end. He's going to drive me home when I go home next month maybe. He just got a Jaguar. One of those little English jobs that can do around two hundred miles an hour. It cost him damn near four thousand bucks. He's got a lot of dough, now. He didn't use to. He used to be just a regular writer, when he was home. He wrote this terrific book of short stories, The Secret Goldfish, in case you never heard of him. The best one in it was The Secret Goldfish. It was about this little kid that wouldn't let anybody look at his goldfish because he'd bought it with his own money. It killed me. Now he's out in Hollywood";

// declare an array named words
// split the text apart at each space
let words = text.split(" ");

// Make words all lowercase using the map function
// apply the toLowercase function to every value in the array
words = words.map( word => word.toLowerCase() );

// using the map function replace punctuation with a space
words = words.map( function(word){
    return word
        .replaceAll(".", "")    // delete all .'s by replacing them with a space
        .replaceAll(",", "");   // delete all ,'s by replacing them with a space
});

// establishing the empty object: lookupS
let lookup = {};

// looping through the arrays index
//using a search function
// outputting each word in the array
for ( let i = 0; i < words.length; i++ ){
    let word = words[i];

    // establishing the variable 'first letter' and outputting the words first letter
    let firstLetter = word.charAt(0);

    // if lookup does not contain an array for the given first letter, create one
    if ( !lookup.hasOwnProperty(firstLetter) ){
        lookup[firstLetter] = [];
    }

    // 💬
    lookup[firstLetter].push(word);
}

// 💬
for ( firstLetter in lookup ){
   let entry = lookup[firstLetter];

   // 💬
   entry = entry.filter((item, index) => entry.indexOf(item) === index);

   // 💬
   entry = entry.sort();

   // 💬
   lookup[firstLetter] = entry;
}

// 💬
for ( letter of Object.keys(lookup).sort() ){
    console.log(letter, lookup[letter]);
}
