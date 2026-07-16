hugo --config github.config.toml

cd public

git init -b "main"
git add .
git commit -m "2026-05"

git remote add origin git@github.com:ying-zhang/ying-zhang.github.io.git
git push -u --force origin main