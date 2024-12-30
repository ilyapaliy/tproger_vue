call npm run build
cd dist
git init
git add *
git commit -m "automative deploy"
git branch -M main
git remote add origin https://github.com/ilyapaliy/tproger_netlify.git
git push --force -u origin main
cd ../
rem TIMEOUT /T 50