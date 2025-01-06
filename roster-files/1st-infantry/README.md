# How to push to production:

## Step 1.
Make sure you are in the correct dir (`cd roster-files/1st-infantry`)

Run the install command to install all dependencies.
```bash
npm install
```

## Step 2. 
Run the build command to make a production site.

```bash
npm run build
```

## Step 3.
Rename the `build` folder to `1st-infantry` (see ss below)
<br>
![image](https://github.com/user-attachments/assets/2de95662-efee-43a9-bc24-19e531af182b)

## Step 4.
Delete the current `/roster/1st-infantry` folder from the main dir.
<br>
![image](https://github.com/user-attachments/assets/8a68d57a-f7f6-43ce-8b11-15df9a175e59)

Move the new `1st-infantry` folder (inside the `/roster-files` dir)to the main dir to replace the old `/roster/1st-infantry` folder.

## Step 5.

Push the changes to github.
