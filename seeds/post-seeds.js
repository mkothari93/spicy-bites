const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [
  {
    recipe_name: 'Chicken Alfredo',
    recipe_body:
    `INGREDIENTS:
    For the Noodles:
    16 ounces dry fettuccine pasta

    For the Chicken:
    1 pound boneless, skinless chicken breasts
    1 teaspoon Italian seasoning
    3/4 teaspoon kosher salt
    1/4 teaspoon pepper
    2 tablespoons extra-virgin olive oil
    1 tablespoon butter

    For the Sauce:
    1/2 cup butter , cut into large cubes or slices
    2 cups heavy whipping cream
    1 clove garlic , minced
    3/4 teaspoon garlic powder
    3/4 teaspoon Italian Seasoning
    1/4 teaspoon salt
    1/4 teaspoon pepper
    2 cups freshly grated Parmesan cheese
    
    INSTRUCTIONS:
    Make the noodles: Bring a large pot of salted water to a boil. Add the fettuccine and cook until al dente according to package directions, usually 10 minutes. Reserve 1/2 cup of the cooking water, then drain well. Set aside.

    Make the chicken: Season chicken breasts with the Italian seasoning, salt, and pepper.
    Warm the olive oil over medium-high heat in a large nonstick skillet. Once it's shimmering, swirl the pan to evenly distribute. Add the chicken and leave it undisturbed for 5-7 minutes, until the bottom is golden-brown. Flip over and add in 1 tablespoon of butter between them, picking up the pan to give it a gentle swirl to distribute. Continue cooking for another 5-7 minutes (or an internal temperature reaches 165 degrees F.)
    Transfer the chicken to a cutting board and let rest for 3 minutes. Cut into 1/2-inch-thick slices. Tent with foil while you prepare the sauce.

    Make the Alfredo sauce: In the same pan, over medium-low heat, add the butter and cream; whisk until butter has melted.
    Add in the minced garlic, garlic powder, Italian seasoning, salt, and pepper; whisk until combined and smooth.
    Bring to a gentle simmer (do not boil) and cook for 3-4 minutes, whisking constantly, until it starts to thicken.
    Stir in the parmesan cheese just until melted and the sauce is smooth. (If the sauce ends up too thick, add some of the reserved pasta cooking water, a few tablespoons at a time, to thin it out.)

    Assemble: Take sauce off the heat and immediately toss with the cooked fettuccine noodles.
    Divide the pasta among serving bowls and top with a few slices of chicken. Garnish with parsley, more Parmesan, and black pepper if desired.
    `,
    filename: 'chicken_alfredo.jpg',
    user_id: 1,
    category_id: 3
  },
  {
    recipe_name: 'Chicken Marsala',
    recipe_body:
    `INGREDIENTS:
    1-1/2 pounds boneless skinless chicken breasts, pounded ¼-inch thick, or chicken tenderloins
    3 tablespoons all-purpose flour
    Salt
    Freshly ground black pepper
    1 tablespoon olive oil
    3 tablespoons unsalted butter, divided
    1 (8-oz) package pre-sliced bella or button mushrooms
    3 tablespoons finely chopped shallots, from 1 medium shallot
    2 cloves garlic, minced
    2/3 cup chicken broth
    2/3 cup dry Marsala wine
    2/3 cup heavy cream
    2 teaspoons chopped fresh thyme
    2 tablespoons chopped fresh Italian parsley, for serving (optional)

    INSTRUCTIONS:
    Place the flour, 3/4 teaspoon salt, and 1/4 teaspoon pepper in a ziplock bag. Add the chicken to the bag; seal bag tightly and shake to coat chicken evenly. Set aside.
    Heat the oil and 2 tablespoons of the butter in a large skillet over medium-high heat. (Use a stainless steel pan for the best browning. Nonstick will work too, but you won't get that nice golden color on the chicken.) Place the flour-dusted chicken in the pan, shaking off any excess first, and cook, turning once, until the chicken is golden and just barely cooked through, about 5 to 6 minutes total. Transfer the chicken to a plate and set aside.

    Melt the remaining tablespoon of butter in the pan. Add the mushrooms and cook, stirring frequently, until the mushrooms begin to brown, 3 to 4 minutes. Add the shallots, garlic, and 1/4 teaspoon of salt; cook for 1 to 2 minutes more. Add the broth, Marsala, heavy cream, thyme, 1/4 teaspoon salt, and 1/8 teaspoon of pepper; use a wooden spoon to scrape any brown bits from the pan into the liquid. Bring the liquid to a boil, then reduce the heat to medium and gently boil, uncovered, until the sauce is reduced by about half, slightly thickened, and darkened in color, 10 to 15 minutes (you're going for a thin cream sauce; it won't start to thicken until the very end of the cooking time). Add the chicken back to the pan, along with any juices that accumulated on the plate. Reduce the heat to low and simmer until the chicken is warmed through and the sauce thickens a bit more, 2 to 3 minutes. Sprinkle with parsley, if using, and serve.
    `,
    filename: 'chicken_marsala.jpg',
    user_id: 3,
    category_id: 3
  },
  {
    recipe_name: 'Brazilian Rice and Beans with Sausage',
    recipe_body: 
    `
    INGREDIENTS:
    2 teaspoons vegetable oil
    8 ounces low-fat polish kielbasa sausage, cut into small pieces
    1 large onion, chopped
    1 clove garlic, minced, or 1/4 teaspoon garlic powder
    1 red bell pepper, chopped
    1 teaspoon ground cumin
    1 cup uncooked rice
    1 can (15 ounces) black beans, drained and rinsed
    2 cups water

    INSTRUCTIONS:
    Heat oil over medium-high heat (350 degrees in an electric skillet); sauté sausage and onion until onion is clear.

    Add remaining ingredients.

    Bring to boil over high heat, reduce heat to low, cover, and simmer for 20 minutes.

    Serve and enjoy!
    `,
    filename: 'rice_beans.jpg',
    user_id: 2,
    category_id: 3
  },
  {
    recipe_name: 'Potato curry',
    recipe_body:
    `
    INGREDIENTS:
    4 potatoes (medium sized) 280 grams, rinsed, peeled and chopped
    ½ cup chopped onions 60 grams or 1 medium-sized onion
    1 cup chopped tomatoes (tightly packed) 160 grams or 2 medium to large tomatoes
    ½ teaspoon finely chopped garlic or 2 small to medium garlic cloves
    3 tablespoons oil any neutral oil, you can also add 2 tablespoons oil
    ½ teaspoon turmeric powder (ground turmeric)
    1 teaspoon kashmiri red chilli powder or ½ teaspoon red chilli powder or cayenne pepper
    ½ teaspoon Coriander Powder (ground coriander)
    ½ teaspoon Garam Masala Powder
    ½ teaspoon cumin powder (ground cumin) optional
    2 cups water
    ¼ cup chopped coriander leaves (cilantro)
    salt as required

    INSTRUCTIONS:
    Heat oil in a pan or kadai. You can use any neutral flavored oil. My personal preference is to use peanut oil for this recipe.
    Add finely chopped garlic and sauté for a few seconds. No need to brown garlic.
    Next add chopped onions. Keep on stirring in intervals and sauté till they turn translucent.
    Then add chopped tomatoes and mix very well.
    Cover the pan with its lid and simmer on a low flame till the tomatoes soften and become mushy. Do check a couple of times when the tomatoes are cooking.
    When the tomatoes have softened well, then add turmeric powder, kashmiri red chilli powder, coriander powder, garam masala powder and cumin powder (optional).
    If you want to make a spicy curry then you can increase the red chilli powder or add ½ teaspoon chopped green chilli.
    Mix the spice powders very well with the onion-tomato mixture.

    Then add diced potatoes. Also season with salt as required. Mix very well.
    Pour 2 cups water and mix again.

    Cover the pan with its lid and simmer on a medium to medium-high heat until the potatoes are cooked.
    Do check a couple of times when the curry is simmering.
    The curry will thicken slightly by the time the potatoes are done.
    You can adjust the consistency of the curry as per your needs. Example if you want to serve this potato curry with rice then you can add a bit more water and let the curry be slightly thin in consistency. In case you are planing to have it with roti or plain paratha, then you can add less water and make the curry consistency more thick.
    Once you get the desired consistency in the curry, then switch off the heat and add chopped coriander leaves. Mix very well.
    Serve potato curry hot or warm.

    Serving Suggestions:
    Indian breads: Roti, paratha, poori pair nicely with potato curry.
    Rice: Steamed white rice or jeera rice also tastes good with potato curry.
    `,
    filename: 'potato_curry.jpg',
    user_id: 4,
    category_id: 3
  }
];
const seedPosts = () => Post.bulkCreate(postdata, { individualHooks: true });

module.exports = seedPosts;
