### Next folder structure
app - each directory(inside app) represents a new route and its watched by app router 
src - optional folder

structure
/app/
    - layout
    - page
/app/homepage/
        - layout
        - page
/app/about/
        - layout
        - page
/app/about/profile/
                - layout
                - page


//layout is used to render children(page)

### Folder types
    folder - this is a route dir
    [folder] - dynamic route dir
    (folder) - this dir groups routes without affecting routing (means this dir is not considered as route but child segments inside it can be route)
    folder - this dir and files/dir inside it are ignored by router

### using custom css
we can define custom css for each page
eg. app/about/page.tsx
define >> `styles.module.css` file and write css in it (only classes and ids) 
then   >> `import styles from "./styles.module.css"`
use     >> `<div classname={styles.className}>`
