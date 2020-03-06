# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
demo_user          = User.create(username: "demo",               password: "password")
beer_lover12       = User.create(username: "beer_lover12",       password: "beerislife")
the_beer_snob      = User.create(username: "the_beer_snob",      password: "beersnoblol")
cider_rules        = User.create(username: "cider_rules",        password: "ciderisking")
bay_area_beer_luvr = User.create(username: "bay_area_beer_luvr", password: "baybeer125")
i_love_beer        = User.create(username: "i_love_beer",        password: "beeeeeer")
alex_stevens       = User.create(username: "alex_stevens",       password: "alexlovesbeer")
jeff_lubinski      = User.create(username: "jeff_lubinski",      password: "jefflovesbeer")
casey_smith        = User.create(username: "casey_smith",        password: "caseylovesbeer")
lauren_andrews     = User.create(username: "lauren_andrews",     password: "laurenlovesbeer")
taylor_miller      = User.create(username: "taylor_miller",      password: "taylor_loves_beer")

Brewery.delete_all
lagunitas = Brewery.create()