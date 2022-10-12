puts "Seeding data!"


#user instance
User.create(username: "Mike Butler", email: "mike@example.com", password_digest: "someone")
User.create(username: "Kamau Mwangi", email: "kamaus@example.com", password_digest: "manabadman")
User.create(username: "Doreen Garcia", email: "dorgarcia@example.com", password_digest: "dobetter")

#comments instance

Comment.create([
    {
        user_comment:   "Had a lovely weekend there!",
        user_id: 1,
        blog_id: 1
    },
    {
        user_comment: "Enjoyed my stay",
        user_id: 2,
        blog_id: 2
    }, 
    {
        user_comment: "Wish I stayed longer",
        user_id:3,
        blog_id:3,
    }
])
# Comment.create(user_comment: "had mad fun", user_id:1, blog_id:2)
# Comment.create(user_comment: "Enjoyed my stay", user_id:2, blog_id:3)
# Comment.create(user_comment: "Wish I stayed longer", user_id:3, blog_id:1)

#blog instance
Blog.create(title: "Serengeti Plains", description: "Serengeti National Park is a World Heritage Site teeming with wildlife: over 2 million ungulates, 4000 lions, 1000 leopard, 550 cheetahs and some 500 bird species inhabit an area close to 15,000 square kilometers in size.")
Blog.create(title: "Maasai Mara Scenery", description: "Maasai Mara National Reserve stretches 1,510 sq km (580 sq miles) and raises 1,500-2,170 meters above sea level. Add the conservancies and the area is at least twice the size. It hosts over 95 species of mammals and over 570 recorded species of birds.")
Blog.create(title: "Mount Kenya", description: "Climbing to 5,199 meters, Mount Kenya is the second tallest mountain in Africa. The scenery surrounding this designated World Heritage Site is breath-taking. It is pristine wilderness with lakes, tarns, glaciers, dense forest, mineral springs and a selection of rare and endangered species of animals, high altitude adapted plains game and unique montane and alpine vegetation")
Blog.create(title: "Diani Beach", description: "Diani Campsite and Cottages offers comfortable accommodation for budget travellers, situated in Diani and only a stone’s throw from the beach. It is close to many shopping outlets and restaurants.There are a variety of cottages available with different bed configurations, of which some have kitchens.")

puts "Done!"