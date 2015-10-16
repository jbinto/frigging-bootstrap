echo ""
echo "FRIGGING BOOTSTRAP: UPDATING BOWER VERSION"
echo "======================================================="
VERSION=`npm version|grep -e "frigging-bootstrap[^:]*: '[0-9\.]*"|grep -E [0-9\.]+|grep -oE "[0-9\.]+"`
sed -i.bak -e "s/\"version\": \"[^\"]*\"/\"version\": \"$VERSION\"/g" bower.json
rm bower.json.bak
git add bower.json
echo "DONE"

git add -A dist