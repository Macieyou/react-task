import React, {useState, createContext} from "react";

export const UsersContext = createContext("");

export const UsersProvider = props => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "The classic latin passage that just never gets old, enjoy as much (or as little) lorem ipsum as you can handle with our easy to use filler text generator.",
                    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.",
                    desc: "Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor hodor hodor; hodor hodor; hodor hodor hodor! Hodor hodor HODOR! Hodor hodor... Hodor hodor hodor..."
                },
                {
                    id: 3,
                    title: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
                    desc: "Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud."
                }
            ]
        },
        {
            id: 2,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "A handcrafted, small-batch, artisinal pour-over version of the classic lorem ipsum generator, Hipster Ipsum will give your mocks that blue collar touch.",
                    desc: "Lorem ipsum dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole celiac swag. Brunch raclette vexillologist post-ironic glossier ennui XOXO mlkshk godard pour-over blog tumblr humblebrag. Blue bottle put a bird on it twee prism biodiesel brooklyn. Blue bottle ennui tbh succulents.",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Raise your design from the dead with an army of Zombie Ipsum, frightful filler text that just won't die. Try the lorem ipsum of the undead if you dare...",
                    desc: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium."
                },
                {
                    id: 3,
                    title: "Like your lorem ipsum extra crispy? Then Bacon Ipsum is the placeholder text generator for you. Side of eggs and hashbrowns is optional, but recommended.",
                    desc: "Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank."
                }
            ]
        },
        {
            id: 3,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "Sugary sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marshmallows, carrot cake, and perhaps even a cherry on top.",
                    desc: "Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake. Muffin danish chocolate soufflé pastry icing bonbon oat cake. Powder cake jujubes oat cake. Lemon drops tootsie roll marshmallow halvah carrot cake.",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "A web generator and jQuery plugin, Delorean Ipsum uses the script from Back to the Future to generate quotable lorem ipsum text for every project, past or present.",
                    desc: "Just say anything, George, say what ever's natural, the first thing that comes to your mind. Take that you mutated son-of-a-bitch. My pine, why you. You space bastard, you killed a pine. You do? Yeah, it's 8:00. Hey, McFly, I thought I told you never to come in here. Well it's gonna cost you. How much money you got on you?"
                },
                {
                    id: 3,
                    title: "Explore the far reaches of the galaxy with this space-themed dummy text generator, with quotes from TV classics like Star Trek and real astronauts themselves.",
                    desc: "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds, to seek out new life and new civilizations, to boldly go where no man has gone before. Many say exploration is part of our destiny, but it’s actually our duty to future generations and their quest to ensure the survival of the human species."
                }
            ]
        },
        {
            id: 4,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "A Gary Busey themed lorem ipsum generator to fill your project with a never ending stream of “buseyisms,” quotes taken directly from the actor's extensive filmography.",
                    desc: "Busey ipsum dolor sit amet. Have you urinated? Have you drained your bladder? Are you free? Because if you haven't it will only come out later. I'm giving you some information that your bodily fluids may penetrate your clothing fibre's without warning.It's OK to get Rib-grease on your face, because you're allowing people to see that you're proud of these ribs.",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "High in fiber and good for your heart, Veggie Ipsum delivers the most organic, hand-picked, lorem ipsum placeholder text right to your door (or browser... I guess).",
                    desc: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify."
                },
                {
                    id: 3,
                    title: "Lorem ipsum that packs a punch. For a new twist on an old classic, drop some Samuel L. Jackson filler text in your next project and Pulp Fictionize that shit.",
                    desc: "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing."
                }
            ]
        },
        {
            id: 5,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "Aching for a bit of Brit slang in your designs? Drop in some lorem ipsum from the official text generator of the British Empire, and channel Monty Python.",
                    desc: "Pommy ipsum smeg head whizz morris dancers come hither, bugger codswallop gob. Taking the mick middle class bog roll bow ties are cool posh nosh off t'shop, stew and dumps taking the mick know your onions pulled a right corker 'tis, anorak mince pies tosser warts and all knackered, complete mare stupendous proper on the beat",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "Boost your project's manliness by 100% touts the Hairy Lipsum generator. Give your project the moustache it deserves with some “handsomely rugged” lorem ipsum.",
                    desc: "Sportacus andrew weatherall goose Refined gentlemen super mario des lynam alpha trion zap rowsdower, omar sharif old man in pub burt reynolds alpha trion sportacus villain Refined gentlemen zap rowsdower funny walk super mario frightfully nice andrew weatherall des lynam goose. Semi beard cream bun disaster alpha trion?"
                },
                {
                    id: 3,
                    title: "Catch them all off guard with a Pokémon flavored filler text generator, fortifying the classic lorem ipsum with favorites like Bulbasaur, Squirtle and Pikachu.",
                    desc: "Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
            ]
        },
        {
            id: 6,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "Sound like a true meathead in your mockups with Bro Ipsum, specializing in a lorem ipsum made up of catchphrases fondly deployed in the dullest of conversations.",
                    desc: "Bro ipsum dolor sit amet gaper backside single track, manny Bike epic clipless. Schraeder drop gondy, rail fatty slash gear jammer steeps clipless rip bowl couloir bomb hole berm. Huck cruiser crank endo, sucker hole piste ripping ACL huck greasy flow face plant pinner. Japan air Skate park big ring trucks shuttle stoked rock-ectomy.",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "“Litter your copy with more kitty” the tagline of Cat Ipsum reads. And seriously, where would we be without a lorem ipsum tribute to the internet's favorite animal.",
                    desc: "Chase ball of string eat plants, meow, and throw up because I ate plants going to catch the red dot today going to catch the red dot today. I could pee on this if I had the energy. Chew iPad power cord steal the warm chair right after you get up for purr for no reason leave hair everywhere, decide to want nothing to do with my owner today."
                },
                {
                    id: 3,
                    title: "If you like your filler text creamy, melty or aged, than Cheese Ipsum is the site for you. Hit generate to get a taste of lorem ipsum at its cheesiest.",
                    desc: "Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut. Edam fromage lancashire feta caerphilly everyone loves chalk and cheese brie. Red leicester parmesan cheese and biscuits cheesy feet blue castello cheesecake fromage frais smelly cheese."
                }
            ]
        },
        {
            id: 7,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "If you're an Arrested Development fan than this lorem ipsum generator is for you. Make your project stand out with ramblings big and small from Michael Bluth.",
                    desc: "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to. Maybe it was the eleven months he spent in the womb. The doctor said there were claw marks on the walls of her uterus. Yeah, well, have you seen the new Mustang?",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 1,
                    title: "Shred your next project's filler text by dropping in some skater lorem ipsum, letting it read like a scene straight out of the old Tony Hawk video games.",
                    desc: "Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080. Carve casper switch kickturn late downhill. Hardware nosebone Rick McCrank bluntslide bigspin steps egg plant. Slap maxwell roll-in airwalk fast plant fastplant pivot."
                },
                {
                    id: 3,
                    title: "Pop culturize your filler text with a lorem ipsum generator based on TV theme lyrics, featuring shows like Speed Racer, Gilligan's Island and the Muppet Show.",
                    desc: "The first mate and his Skipper too will do their very best to make the others comfortable in their tropic island nest. Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
                }
            ]
        },
        {
            id: 8,
            name: "Leanne Graham",
            email: "sincere@april.biz",
            phone: "1-770-736-8031",
            website: "hildegard.org",
            description: "Multi-layered client-server neural-net harness real-time e-markets",
            posts: [
                {
                    id: 1,
                    title: "Everyone loves some esoteric TV based placeholder text. Generate lorem ipsum from popular TV shows like Futurama, Doctor Who, Dexter and more.",
                    desc: "Tell them I hate them. Is the Space Pope reptilian!? Tell her she looks thin. Hello, little man. I will destroy you! I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I' have to pay them'!",
                    comment: [
                        {
                            author: "Maciej Sadowski",
                            title: "testowy komentarz",
                            desc: "Sodales neque sodales ut etiam sit amet nisl. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Porttitor massa id neque aliquam vestibulum morbi. Quis varius quam quisque id. Sit amet aliquam id diam maecenas ultricies mi. Fermentum leo vel orci porta non pulvinar. Pellentesque pulvinar pellentesque habitant morbi tristique"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "A text generator straight out of left field, step up to bat on your next project with this baseball themed lorem ipsum text, which even includes a REST API.",
                    desc: "Baseball ipsum dolor sit amet cellar rubber win hack tossed. Slugging catcher slide bench league, left fielder nubber. Bullpen blue run rotation relief pitcher grass umpire. Forkball bullpen suicide squeeze club bush league field sport. Base cookie triple play blue hot dog relay rake starting pitcher inning."
                },
                {
                    id: 3,
                    title: "The gospel according to Charlie Sheen, the oft vulgar star of Two and a Half Men, Vatican Assassin is a lorem ipsum parody of his cosmic meltdown in 2011.",
                    desc: "They urge you to put down your sword and come join the winners. In 22 years the only 'winners' I could locate in their toothless warren were either driving a convertible van or living like trolls under an abandoned bridge. The goddesses? Alex, the goddesses .... Let me just say this about the goddesses: I don't believe the term is good enough..."
                }
            ]
        }
    ]);
    return (
        <UsersContext.Provider value={[users, setUsers]}>
            {props.children}
        </UsersContext.Provider>
    )
};
