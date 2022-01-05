const sequelize = require('../config/connection');
const { Post } = require('../models');

const postdata = [
  {
    recipe_name: 'Chicken Alfredo',
    recipe_body: `
    INGREDIENTS:
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
    recipe_body: `
    INGREDIENTS:
    1-1/2 pounds boneless skinless chicken breasts, pounded ¼-inch thick (see note), or chicken tenderloins
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
    recipe_name: 'Rice and beans',
    recipe_body: 'lorem',
    filename: 'rice_beans.jpg',
    user_id: 2,
    category_id: 3
  },
  {
    recipe_name: 'Potato curry',
    recipe_body: 'lorem',
    filename: 'potato_curry.jpg',
    user_id: 4,
    category_id: 3
  }
];
const seedPosts = () => Post.bulkCreate(postdata, { individualHooks: true });

module.exports = seedPosts;
