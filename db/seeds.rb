# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
demo_user          = User.create!(username: "demo_user",          password: "password")
beer_lover12       = User.create!(username: "beer_lover12",       password: "beerislife")
the_beer_snob      = User.create!(username: "the_beer_snob",      password: "beersnoblol")
cider_rules        = User.create!(username: "cider_rules",        password: "ciderisking")
bay_area_beer_luvr = User.create!(username: "bay_area_beer_luvr", password: "baybeer125")
i_love_beer        = User.create!(username: "i_love_beer",        password: "beeeeeer")
warriors_fan22     = User.create!(username: "warriors_fan22",     password: "warriors_fan22")
lagunitas_or_die   = User.create!(username: "lagunitas_or_die",   password: "lagunitas_or_die")
the_home_brewer    = User.create!(username: "the_home_brewer",    password: "the_home_brewer")
bird_dog423        = User.create!(username: "bird_dog423",        password: "bird_dog423")
beer_a_day         = User.create!(username: "beer_a_day",         password: "beer_a_day")

demo_user_img = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/demo.jpeg")
beer_lover12_img       = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/beer_lover12.jpeg")
the_beer_snob_img      = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/the_beer_snob.jpeg")
cider_rules_img        = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/cider_rules.jpeg")
bay_area_beer_luvr_img = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/bay_area_beer_luvr.jpeg")
i_love_beer_img        = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/i_love_beer.jpeg")
warriors_fan22_img     = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/warriors_fan22.jpeg")
lagunitas_or_die_img   = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/lagunitas_or_die.jpeg")
the_home_brewer_img    = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/the_home_brewer.jpeg")
bird_dog423_img        = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/bird_dog423.jpeg")
beer_a_day_img         = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/users/beer_a_day.jpeg")

demo_user.profile_picture.attach(io: demo_user_img, filename: 'demo_user.jpeg')
beer_lover12.profile_picture.attach(io: beer_lover12_img, filename: 'beer_lover12.jpeg')
the_beer_snob.profile_picture.attach(io: the_beer_snob_img, filename: 'the_beer_snob.jpeg')
cider_rules.profile_picture.attach(io: cider_rules_img, filename: 'cider_rules.jpeg')
bay_area_beer_luvr.profile_picture.attach(io: bay_area_beer_luvr_img, filename: 'bay_area_beer_luvr.jpeg')
i_love_beer.profile_picture.attach(io: i_love_beer_img, filename: 'i_love_beer.jpeg')
warriors_fan22.profile_picture.attach(io: warriors_fan22_img, filename: 'warriors_fan22.jpeg')
lagunitas_or_die.profile_picture.attach(io: lagunitas_or_die_img, filename: 'lagunitas_or_die.jpeg')
the_home_brewer.profile_picture.attach(io: the_home_brewer_img, filename: 'the_home_brewer.jpeg')
bird_dog423.profile_picture.attach(io: bird_dog423_img, filename: 'bird_dog423.jpeg')
beer_a_day.profile_picture.attach(io: beer_a_day_img, filename: 'beer_a_day.jpeg')

demo_user_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
beer_lover_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
the_beer_snob_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
cider_rules_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
bay_area_beer_luvr_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
i_love_beer_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
warriors_fan22_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
lagunitas_or_die_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
the_home_brewer_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
bird_dog423_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")
beer_a_day_cover_photo = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/app/cover_default.jpg")

demo_user.cover_photo.attach(io: demo_user_cover_photo, filename: 'demo_user_cover.jpeg')
beer_lover12.cover_photo.attach(io: beer_lover_cover_photo, filename: 'demo_user_cover.jpeg')
the_beer_snob.cover_photo.attach(io: the_beer_snob_cover_photo, filename: 'demo_user_cover.jpeg')
cider_rules.cover_photo.attach(io: cider_rules_cover_photo, filename: 'demo_user_cover.jpeg')
bay_area_beer_luvr.cover_photo.attach(io: bay_area_beer_luvr_cover_photo, filename: 'demo_user_cover.jpeg')
i_love_beer.cover_photo.attach(io: i_love_beer_cover_photo, filename: 'demo_user_cover.jpeg')
warriors_fan22.cover_photo.attach(io: warriors_fan22_cover_photo, filename: 'demo_user_cover.jpeg')
lagunitas_or_die.cover_photo.attach(io: lagunitas_or_die_cover_photo, filename: 'demo_user_cover.jpeg')
the_home_brewer.cover_photo.attach(io: the_home_brewer_cover_photo, filename: 'demo_user_cover.jpeg')
bird_dog423.cover_photo.attach(io: bird_dog423_cover_photo, filename: 'demo_user_cover.jpeg')
beer_a_day.cover_photo.attach(io: beer_a_day_cover_photo, filename: 'demo_user_cover.jpeg')


Brewery.delete_all
lagunitas     = Brewery.create!(name: "Lagunitas Brewing Company",     city: "Petaluma",      state: "CA", country: "United States", description: "From points distant and beyond we all converged on Petaluma in 1993 and ’94 with an unenunciated desire to be more than we were before. The core of Lagunitas came from Chicago, St Louis, Memphis, Walker Creek, and the highlands of Quincy. The Chicago contingent initiated the brewing and the gravitational effect of its suchness did the rest. We all loved the beer but the mission was larger than the ordinary joy of a hoppy-sweet quaff. It was driven unseen by an urge to communicate with people, to find our diasporidic tribe, and to connect with other souls adrift on a culture that had lost its center and spun its inhabitants to the four winds to wander lost and bereft with a longing to re-enter the light. Beer, we have learned, has always been a good lubricant for social intercourse! The Lagunitas Brewing Co. was not so much an act of ordinary ‘foundling’ as it was willed into being by the unspoken desire of supportive beer-lovers in Northern California after which they continued to nurture their creation and urged us forward to fulfill the unifying needs of that same beer-loving diaspora from coast to coast and beyond. It is good to have friends!")
russian_river = Brewery.create!(name: "Russian River Brewing Company", city: "Windsor",       state: "CA", country: "United States", description: "Russian River Brewing Company (RRBC) was originally owned by Korbel Champagne Cellars in Guerneville, California and was founded on their historic and beautiful property amidst vineyards and redwoods near the Russian River. When Korbel decided to get out of the beer business in 2003, they generously offered the brewmaster, Vinnie Cilurzo and his wife Natalie the rights to the brand. Russian River Brewing might be something completely different now if it weren't for this incredible opportunity. In the early days on the Korbel property, Vinnie not only brewed the beer, but made the sales calls and deliveries as well. Eventually they hired a sales/delivery guy to help with all of that so he could focus on brewing! Korbel planted a small hop field where Vinnie received a \"field\" education on growing and brewing with \"wet\" hops. It was from those amazingly fresh hops, grown just a few yards away, that he made his first wet hops brew, \"Hop-Time Harvest Ale\". As it turns out, demand is still greater than the supply, but they prefer to grow their business organically while focusing on efficiencies and quality. For now, it is easier to make better beer than it is to make more beer! The history of Russian River Brewing Company would be incomplete without a little background on the people who own it, operate it, and are passionate about their brewery and craft beer in general!")
bear_republic = Brewery.create!(name: "Bear Republic Brewing Co.",     city: "Rohnert Park",  state: "CA", country: "United States", description: "Bear Republic beers are brewed and aged following our time tested and proven methods. We hand select only the choicest ingredients for each batch. The specialty grains and hops used by Bear Republic have been chosen for their unique characteristics. The recipes and their final formulations were developed over a period of several years. Those wonderful home brewing sessions and the lessons learned from trial and error have established the solid foundations for each recipe’s commercial equivalents. It’s our goal to continually develop new recipes using our time tested brewing methods. We work hard at fostering a sense of loyalty and tradition from eras gone by.")
fort_point    = Brewery.create!(name: "Fort Point Beer Company",       city: "San Francisco", state: "CA", country: "United States", description: "Fort Point Beer Company is a New American brewery - the product of a thriving American craft beer culture, shaped by deeply San Franciscan values: quality craftsmanship and a spirit of innovation. We create balanced, thoughtful beers that reference traditional styles but are by no means bound to them. For us, brewing is the confluence of creative expression and refined technique. We want our beers to tell a story, inspire an idea, and be thoroughly enjoyable. Fort Point Beer Company was founded in 2014 by brothers Tyler and Justin Catalana in the Presidio of San Francisco. The brewery resides in an historic Presidio building that was formerly used as an Army motor pool. Being situated in this iconic landscape reinforces our pride in San Francisco and in the beer we brew. Head Brewer Mike Schnebeck has developed a deft and impassioned brewing style over the past years at Mill Valley Beerworks and leads the pioneering spirit of our beers.")
anchor        = Brewery.create!(name: "Anchor Brewing Company",        city: "San Francisco", state: "CA", country: "United States", description: "Brewing hand-crafted beer in the heart of San Francisco since 1896.")

lagunitas_img     = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/lagunitas.jpeg")
russian_river_img = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/russian_river.jpg")
bear_republic_img = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/bear_republic.jpeg")
fort_point_img    = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/fort_point.jpeg")
anchor_img        = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/anchor.jpeg")

lagunitas.profile_picture.attach(io: lagunitas_img, filename: 'lagunitas.jpeg')
russian_river.profile_picture.attach(io: russian_river_img, filename: 'russian_river.jpg')
bear_republic.profile_picture.attach(io: bear_republic_img, filename: 'bear_republic.jpg')
fort_point.profile_picture.attach(io: fort_point_img, filename: 'fort_point.jpeg')
anchor.profile_picture.attach(io: anchor_img, filename: 'anchor.jpeg')

Beer.delete_all
a_little_sumpin_sumpin_ale = Beer.create!(brewery_id: lagunitas.id, name: "A Little Sumpin' Sumpin' Ale", beer_type: "Wheat Beer", subtype: "American Pale Wheat", abv: 7.5, ibu: 64, description: "Way smooth and silky with a nice wheatly-esque-ish-ness. A truly unique style featuring a strong hop finish on a silky body. A hoppy pale wheat ale that is great for IPA fans but so smooth that the hefeweizen fans dig it too.")
ipa = Beer.create!(brewery_id: lagunitas.id, name: "IPA", beer_type: "IPA", subtype: "American", abv: 6.2, ibu: 52, description: "This is our unique version of an ancient style. A style as old as the ocean trade routes of the last centuries Great Ships. Not as old as the equator they had to cross twice enroute. Lagunitas IPA was our first seasonal way back in 1995. The recipe was formulated with malt and hops working together to balance it all out on your ‘buds so you can knock back more than one without wearing yourself out. Big on the aroma with a hoppy-sweet finish that’ll leave you wantin’ another sip.")
pliny_the_elder = Beer.create!(brewery_id: russian_river.id, name: "Pliny the Elder", beer_type: "IPA", subtype: "Imperial / Double", abv: 8, ibu: 100, description: "A true leader in the hop-wars of the west coast, Pliny the Elder hits you over the head with hoppy bitterness and manages to smooth the rough edges out enough to become an enjoyable brew.")
pliny_the_younger = Beer.create!(brewery_id: russian_river.id, name: "Pliny the Younger", beer_type: "IPA", subtype: "Triple", abv: 10.25, ibu: 90, description: "Pliny the Younger was Pliny the Elder’s nephew, in the case of this beer, the \"Younger\" is a triple IPA. Pliny the Younger is hopped three times more than our standard IPA, and is dry hopped four different times.")
racer_5 = Beer.create!(brewery_id: bear_republic.id, name: "Racer 5 IPA", beer_type: "IPA", subtype: "American", abv: 7.5, ibu: 75, description: "This hoppy IPA is a full bodied beer brewed with malted barley, wheat, and crystal malts. The malt base is designed to highlight the unique floral qualities of Columbus and Cascade hops from the Pacific Northwest. There’s a trophy in every glass!")
villager = Beer.create!(brewery_id: fort_point.id, name: "Villager", beer_type: "IPA", subtype: "American", abv: 6.3, ibu: 42, description: "In the San Francisco spirit of innovation, Villager blends classic Northwest hops with contemporary ale yeast to establish a delicately constructed IPA. Villager's hop aroma is both citrusy and floral, complemented by notes of stone fruit and tropical flavor in the finish. A true expression of the cultural contrasts that embody our city by the bay, Villager brings a new twist to this West Coast style. Hopped with Nelson Sauvin, Centennial, and Warrior. Malts: Pale, torrified wheat & Munich.")
ksa = Beer.create!(brewery_id: fort_point.id, name: "KSA", beer_type: "Kolsch", abv: 4.6, ibu: 17, description: "KSA combines a thoughtful mixture of American bittering hops and traditional German malts to create a complex yet crisp take on the Kölsch style. Munich and Vienna malts construct the beer’s robust, rich grain flavor, while Saphir and Warrior hops bring balance through a clean finish. KSA’s old-school style, blended with bright, updated ingredients, makes this beer a classic on both continents.")
anchor_steam = Beer.create!(brewery_id: anchor.id, name: "Anchor Steam Beer", beer_type: "California Common", abv: 4.8, ibu: 35, description: "San Francisco's famous Anchor Steam®, the classic of American brewing tradition since 1896, is virtually handmade, with an exceptional respect for the ancient art of brewing. The deep amber color, thick creamy head, and rich flavor all testify to our traditional brewing methods. Anchor Steam is unique, for our brewing process has evolved over many decades and is like no other in the world. Anchor Steam derives its unusual name from the 19th century when \"steam\" seems to have been a nickname for beer brewed on the West Coast of America under primitive conditions and without ice. The brewing methods of those days are a mystery and, although there are many theories, no one can say with certainty why the word \"steam\" came to be associated with beer. For many decades Anchor alone has used this quaint name for its unique beer. In modern times, \"Steam\" has become a trademark of Anchor Brewing.")
liberty_ale = Beer.create!(brewery_id: anchor.id, name: "Liberty Ale", beer_type: "IPA", subtype: "American", abv: 5.9, ibu: 47, description: "San Francisco's famouse Liberty Ale was first brewed on the 18th of April, 1975 to celebrate the 200th anniversary of Paul Revere's historic ride. It is virtually handmade by the brewers of Anchor Steam Beer in one of the smallest and most traditional breweries in the world. Liberty Ale is made with the finest barley malt, fresh, whole hops, top fermenting yeast, pure water and the simple natural methods which reflect our exceptional respect for the ancient art of brewing.")

a_little_sumpin_sumpin_ale_img = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/a_little_sumpin_sumpin_ale.jpeg")
ipa_img                        = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/ipa.jpeg")
pliny_the_elder_img            = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/pliny_the_elder.jpeg")
pliny_the_younger_img          = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/pliny_the_younger.jpeg")
racer_5_img                    = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/racer_5.jpeg")
villager_img                   = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/villager.jpeg")
ksa_img                        = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/ksa.jpeg")
anchor_steam_img               = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/anchor_steam.jpeg")
liberty_ale_img                = open("https://bitter-seeds.s3-us-west-1.amazonaws.com/beers/liberty_ale.jpg")

a_little_sumpin_sumpin_ale.profile_picture.attach(io: a_little_sumpin_sumpin_ale_img, filename: "a_little_sumpin_sumpin_ale.jpeg")
ipa.profile_picture.attach(io: ipa_img, filename: "ipa.jpeg")
pliny_the_elder.profile_picture.attach(io: pliny_the_elder_img, filename: "pliny_the_elder.jpeg")
pliny_the_younger.profile_picture.attach(io: pliny_the_younger_img, filename: "pliny_the_younger.jpeg")
racer_5.profile_picture.attach(io: racer_5_img, filename: "racer_5.jpeg")
villager.profile_picture.attach(io: villager_img, filename: "villager.jpeg")
ksa.profile_picture.attach(io: ksa_img, filename: "ksa.jpeg")
anchor_steam.profile_picture.attach(io: anchor_steam_img, filename: "anchor_steam.jpeg")
liberty_ale.profile_picture.attach(io: liberty_ale_img, filename: "liberty_ale.jpg")

Checkin.delete_all
Checkin.create!(user_id: demo_user.id, beer_id: ipa.id, rating: 4, body: "Love it!")
Checkin.create!(user_id: demo_user.id, beer_id: pliny_the_elder.id, rating: 4, body: "Not bad at all.")
Checkin.create!(user_id: demo_user.id, beer_id: anchor_steam.id, rating: 3, body: "Meh.")
Checkin.create!(user_id: beer_lover12.id, beer_id: pliny_the_younger.id, rating: 5, body: "Perfection!")
Checkin.create!(user_id: beer_lover12.id, beer_id: liberty_ale.id, rating: 2, body: "Could be a lot better.")
Checkin.create!(user_id: beer_lover12.id, beer_id: villager.id, rating: 3, body: "I am underwhelmed.")
Checkin.create!(user_id: the_beer_snob.id, beer_id: racer_5.id, rating: 4, body: "Pretty dang good!")
Checkin.create!(user_id: the_beer_snob.id, beer_id: anchor_steam.id, rating: 4, body: "Classic.")
Checkin.create!(user_id: the_beer_snob.id, beer_id: a_little_sumpin_sumpin_ale.id, rating: 4, body: "I like it.")
Checkin.create!(user_id: cider_rules.id, beer_id: pliny_the_elder.id, rating: 5, body: "Excellent.")
Checkin.create!(user_id: cider_rules.id, beer_id: ksa.id, rating: 2, body: "Just bad.")
Checkin.create!(user_id: cider_rules.id, beer_id: villager.id, rating: 2, body: "I don't like it.")
Checkin.create!(user_id: bay_area_beer_luvr.id, beer_id: pliny_the_younger.id, rating: 4, body: "Finally got a chance to try it!")
Checkin.create!(user_id: bay_area_beer_luvr.id, beer_id: liberty_ale.id, rating: 1, body: "Terrible.")
Checkin.create!(user_id: bay_area_beer_luvr.id, beer_id: a_little_sumpin_sumpin_ale.id, rating: 3, body: "Mediocre at best.")
Checkin.create!(user_id: i_love_beer.id, beer_id: a_little_sumpin_sumpin_ale.id, rating: 3, body: "My go-to.")
Checkin.create!(user_id: i_love_beer.id, beer_id: ipa.id, rating: 2, body: "Not the best beer I've ever had.")
Checkin.create!(user_id: i_love_beer.id, beer_id: ksa.id, rating: 4, body: "Always good!")
Checkin.create!(user_id: warriors_fan22.id, beer_id: villager.id, rating: 4, body: "A solid IPA.")
Checkin.create!(user_id: warriors_fan22.id, beer_id: anchor_steam.id, rating: 3, body: "Can't go wrong.")
Checkin.create!(user_id: warriors_fan22.id, beer_id: a_little_sumpin_sumpin_ale.id, rating: 3, body: "Not as good as their IPA.")
Checkin.create!(user_id: lagunitas_or_die.id, beer_id: pliny_the_younger.id, rating: 5, body: "Legendary.")
Checkin.create!(user_id: lagunitas_or_die.id, beer_id: pliny_the_elder.id, rating: 4, body: "Not as good as I hoped.")
Checkin.create!(user_id: lagunitas_or_die.id, beer_id: racer_5.id, rating: 4, body: "Very boozy.")
Checkin.create!(user_id: the_home_brewer.id, beer_id: racer_5.id, rating: 2, body: "Too bitter!")
Checkin.create!(user_id: the_home_brewer.id, beer_id: ipa.id, rating: 2, body: "Too boring!")
Checkin.create!(user_id: the_home_brewer.id, beer_id: a_little_sumpin_sumpin_ale.id, rating: 2, body: "Almost terrible!")
Checkin.create!(user_id: bird_dog423.id, beer_id: racer_5.id, rating: 5, body: "So good!")
Checkin.create!(user_id: bird_dog423.id, beer_id: ksa.id, rating: 4, body: "A great kolsch.")
Checkin.create!(user_id: bird_dog423.id, beer_id: pliny_the_younger.id, rating: 3, body: "Underwhelmed.")
Checkin.create!(user_id: beer_a_day.id, beer_id: anchor_steam.id, rating: 4, body: "Great!")
Checkin.create!(user_id: beer_a_day.id, beer_id: liberty_ale.id, rating: 2, body: "Pretty bad.")
Checkin.create!(user_id: beer_a_day.id, beer_id: pliny_the_elder.id, rating: 5, body: "I love it!")

List.delete_all
demo_user_wish_list = List.create!(user_id: demo_user.id, name: "Wish List", description: "Beers I want to try")
demo_user_favorite_beers = List.create!(user_id: demo_user.id, name: "My Favorite Beers", description: "These are my favorite beers")

ListsBeer.delete_all
ListsBeer.create!(list_id: demo_user_wish_list.id, beer_id: pliny_the_younger.id)
ListsBeer.create!(list_id: demo_user_wish_list.id, beer_id: racer_5.id)