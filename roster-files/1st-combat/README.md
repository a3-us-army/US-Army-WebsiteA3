# How to push to production:

## Step 1.
Make sure you are in the correct dir (`cd roster-files/rangers`)

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
Rename the `build` folder to `rangers` (see ss below)
<br>
![image](https://github.com/user-attachments/assets/2de95662-efee-43a9-bc24-19e531af182b)
<br>
![image](https://github.com/user-attachments/assets/e4e9c733-d405-431f-b108-03f7600fa471)

## Step 4.
Delete the current `/roster/rangers` folder from the main dir.
<br>
![image](https://github.com/user-attachments/assets/8a68d57a-f7f6-43ce-8b11-15df9a175e59)

Move the new `rangers` folder (inside the `/roster-files` dir)to the main dir to replace the old `/roster/rangers` folder.

## Step 5.

Push the changes to github.
