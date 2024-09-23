### TechStack
- React Js
- Bootstrap

### Methods to solve 
### Project Setup
- First we need to create react project using npm create vite@latest projectname
- next with in the project folder install all the dependencies using npm install
- Install all the necessary dependencies
    - npm i react-router-dom for creating routes
    - npm i axios for fetching the data from apis
    - npm i bootstrap for styling

I have created couple of components like 
- Home  -- in home component first we need to Display a list of food products fetched from the given API, then Each product should display key information like: Product name,Image,Category,Ingredients, Nutrition Grade (A, B, C, D, E).
- SearchBar -- component is used where user can search for the product using productName or barcode
   - when the user search for product in searchbar using name or barcode, we need to identify whether user is searching by name or barcode then according to that query products should be fetched.
- Products -- component is for displaying the products fetched for API.
- ProductDetails - whenever user clicks on any product, it should display ProductDetails like ProductImage,Full list of ingredients,Nutritional values (energy, fat, carbs, proteins, etc.)
- Pagination -- component is used to perform pagination.
- Filter --component is used to filter the products by category,first fetch the list of categories from the API,then create a dropdown and include categories which are fetched previously, then accoring to the category which is selected, we have to show the products related to the category.
- Sort -- component allows users to sort the product list by productname and nutrition grade by ascending or descending.

### Live Link:
