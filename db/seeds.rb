# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all
demo_user          = User.create!(username: "demo",               password: "password")
beer_lover12       = User.create!(username: "beer_lover12",       password: "beerislife")
the_beer_snob      = User.create!(username: "the_beer_snob",      password: "beersnoblol")
cider_rules        = User.create!(username: "cider_rules",        password: "ciderisking")
bay_area_beer_luvr = User.create!(username: "bay_area_beer_luvr", password: "baybeer125")
i_love_beer        = User.create!(username: "i_love_beer",        password: "beeeeeer")
alex_stevens       = User.create!(username: "alex_stevens",       password: "alexlovesbeer")
jeff_lubinski      = User.create!(username: "jeff_lubinski",      password: "jefflovesbeer")
casey_smith        = User.create!(username: "casey_smith",        password: "caseylovesbeer")
lauren_andrews     = User.create!(username: "lauren_andrews",     password: "laurenlovesbeer")
taylor_miller      = User.create!(username: "taylor_miller",      password: "taylor_loves_beer")

Brewery.delete_all
lagunitas = Brewery.create!(
  name: "Lagunitas Brewing Company",
  city: "Petaluma",
  state: "CA",
  country: "United States",
  description: "From points distant and beyond we all converged on Petaluma in 1993 and ’94 with an unenunciated desire to be more than we were before. The core of Lagunitas came from Chicago, St Louis, Memphis, Walker Creek, and the highlands of Quincy. The Chicago contingent initiated the brewing and the gravitational effect of its suchness did the rest. We all loved the beer but the mission was larger than the ordinary joy of a hoppy-sweet quaff. It was driven unseen by an urge to communicate with people, to find our diasporidic tribe, and to connect with other souls adrift on a culture that had lost its center and spun its inhabitants to the four winds to wander lost and bereft with a longing to re-enter the light. Beer, we have learned, has always been a good lubricant for social intercourse! The Lagunitas Brewing Co. was not so much an act of ordinary ‘foundling’ as it was willed into being by the unspoken desire of supportive beer-lovers in Northern California after which they continued to nurture their creation and urged us forward to fulfill the unifying needs of that same beer-loving diaspora from coast to coast and beyond. It is good to have friends!"
)
lagunitas_img = open('https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/lagunitas.jpeg')
lagunitas.profile_picture.attach(io: lagunitas_img, filename: 'lagunitas.jpeg')

russian_river = Brewery.create!(
  name: "Russian River Brewing Company",
  city: "Windsor",
  state: "CA",
  country: "United States",
  description: "Russian River Brewing Company (RRBC) was originally owned by Korbel Champagne Cellars in Guerneville, California and was founded on their historic and beautiful property amidst vineyards and redwoods near the Russian River. When Korbel decided to get out of the beer business in 2003, they generously offered the brewmaster, Vinnie Cilurzo and his wife Natalie the rights to the brand. Russian River Brewing might be something completely different now if it weren't for this incredible opportunity. In the early days on the Korbel property, Vinnie not only brewed the beer, but made the sales calls and deliveries as well. Eventually they hired a sales/delivery guy to help with all of that so he could focus on brewing! Korbel planted a small hop field where Vinnie received a \"field\" education on growing and brewing with \"wet\" hops. It was from those amazingly fresh hops, grown just a few yards away, that he made his first wet hops brew, \"Hop-Time Harvest Ale\". As it turns out, demand is still greater than the supply, but they prefer to grow their business organically while focusing on efficiencies and quality. For now, it is easier to make better beer than it is to make more beer! The history of Russian River Brewing Company would be incomplete without a little background on the people who own it, operate it, and are passionate about their brewery and craft beer in general!"
)
russian_river_img = open('https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/russian_river.jpg')
russian_river.profile_picture.attach(io: russian_river_img, filename: 'russian_river.jpg')

bear_republic = Brewery.create!(
  name: "Bear Republic Brewing Co.",
  city: "Rohnert Park",
  state: "CA",
  country: "United States",
  description: "Bear Republic beers are brewed and aged following our time tested and proven methods. We hand select only the choicest ingredients for each batch. The specialty grains and hops used by Bear Republic have been chosen for their unique characteristics. The recipes and their final formulations were developed over a period of several years. Those wonderful home brewing sessions and the lessons learned from trial and error have established the solid foundations for each recipe’s commercial equivalents. It’s our goal to continually develop new recipes using our time tested brewing methods. We work hard at fostering a sense of loyalty and tradition from eras gone by."
)
bear_republic_img = open('https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/bear_republic.jpeg')
bear_republic.profile_picture.attach(io: bear_republic_img, filename: 'bear_republic.jpg')

fort_point = Brewery.create!(
  name: "Fort Point Beer Company",
  city: "San Francisco",
  state: "CA",
  country: "United States",
  description: "Fort Point Beer Company is a New American brewery - the product of a thriving American craft beer culture, shaped by deeply San Franciscan values: quality craftsmanship and a spirit of innovation. We create balanced, thoughtful beers that reference traditional styles but are by no means bound to them. For us, brewing is the confluence of creative expression and refined technique. We want our beers to tell a story, inspire an idea, and be thoroughly enjoyable. Fort Point Beer Company was founded in 2014 by brothers Tyler and Justin Catalana in the Presidio of San Francisco. The brewery resides in an historic Presidio building that was formerly used as an Army motor pool. Being situated in this iconic landscape reinforces our pride in San Francisco and in the beer we brew. Head Brewer Mike Schnebeck has developed a deft and impassioned brewing style over the past years at Mill Valley Beerworks and leads the pioneering spirit of our beers."
)
fort_point_img = open('https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/fort_point.jpeg')
fort_point.profile_picture.attach(io: fort_point_img, filename: 'fort_point.jpeg')

anchor = Brewery.create!(
  name: "Anchor Brewing Company",
  city: "San Francisco",
  state: "CA",
  country: "United States",
  description: "Brewing hand-crafted beer in the heart of San Francisco since 1896."
)
anchor_img = open('https://bitter-seeds.s3-us-west-1.amazonaws.com/breweries/anchor.jpeg')
anchor.profile_picture.attach(io: anchor_img, filename: 'anchor.jpeg')